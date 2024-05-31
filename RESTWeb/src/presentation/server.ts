import express, { Router } from 'express';
import path from 'path';

interface Options {
    port: number;
    public_path: string;
    routes: Router;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, public_path, routes } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }

    async start() {
        // Middlewares

        // Public folder
        this.app.use( express.static( this.publicPath ));

        // Routes
        this.app.use( '/api', this.routes );

        // SPA
        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
            return;
        });

        this.app.listen(this.port, () => {
            console.log(`server running on port ${this.port}`)
        })
    }
}