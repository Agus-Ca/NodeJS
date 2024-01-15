import fs from 'fs';



export interface SaveFileUseCase {
    execute: ( options: SaveFileOptions ) => boolean;
}

export interface SaveFileOptions {
    fileContent         : string;
    fileDestinationPath?: string;
    fileName?           : string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /** repository: StrorageRepository */
    ) {}

    execute({
        fileContent,
        fileDestinationPath = 'outputs',
        fileName = 'table'
    }: SaveFileOptions): boolean {
        try {
            fs.mkdirSync( fileDestinationPath, { recursive: true } );
            fs.writeFileSync(`${fileDestinationPath}/${ fileName }.txt`, fileContent);
            return true;
        } catch (error) {
            console.error( error );
            return false;
        }
    }
}