import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base               : number;
    limit              : number;
    displayTable       : boolean;
    fileDestinationPath: string;
    fileName           : string;
}

export class ServerApp {

    static run({ base, limit, displayTable, fileDestinationPath, fileName }:RunOptions) {
        console.log( 'Server running...');
        const table = new CreateTable().execute({ base, limit });
        if ( displayTable ) console.log( table );

        const wasCreated = new SaveFile()
            .execute({ 
                fileContent: table,
                fileDestinationPath: fileDestinationPath,
                fileName: fileName,
            });
        ( wasCreated )
            ? console.log('File created!')
            : console.error('File was not created!')
    }
}