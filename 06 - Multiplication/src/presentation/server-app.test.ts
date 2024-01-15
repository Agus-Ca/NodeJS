import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";
import fs from 'fs';

describe('ServerApp', () => {

    const cleanDirectory = ( directory:string ) => {
        if ( fs.existsSync( directory ) ) {
            fs.rmSync(directory, { recursive: true });
        }
    }

    beforeEach(() => {
        cleanDirectory('outputs');
        jest.clearAllMocks();
    });

    const options = {
        base: 2, 
        limit: 10, 
        displayTable: false, 
        fileDestinationPath: 'outputs/test-file-destination', 
        fileName: 'test-file-name'
    };

    test('should create ServerApp instance', () => {
        const serverApp = new ServerApp();

        expect( serverApp ).toBeInstanceOf( ServerApp );
        expect( typeof ServerApp.run ).toBe('function');
    });

    test('should run Server app with options', () => {
        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.run(options);

        expect( logSpy ).toHaveBeenCalledTimes( 2 );
        expect( logSpy ).toHaveBeenCalledWith( 'Server running...' );
        expect( logSpy ).toHaveBeenCalledWith( 'File created!' );

        expect( createTableSpy ).toHaveBeenCalledTimes( 1 );
        expect( createTableSpy ).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

        expect( saveFileSpy ).toHaveBeenCalledTimes( 1 );
        expect( saveFileSpy ).toHaveBeenCalledWith({ fileContent: expect.any(String), fileDestinationPath: options.fileDestinationPath, fileName: options.fileName });
    });

    test('should run with custom values mock', () => {
        const consoleLogMock = jest.fn();
        const consoleErrorMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('mocked return value');
        const saveFileMock = jest.fn().mockReturnValue( true );

        global.console.log = consoleLogMock;
        global.console.error = consoleErrorMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect( consoleLogMock ).toHaveBeenCalledTimes( 2 );
        expect( consoleLogMock ).toHaveBeenCalledWith( 'Server running...' );
        expect( consoleLogMock ).toHaveBeenCalledWith( 'File created!' );

        expect( createTableMock ).toHaveBeenCalledTimes( 1 );
        expect( createTableMock ).toHaveBeenCalledWith({ "base": 2, "limit": 10, });

        expect( saveFileMock ).toHaveBeenCalledTimes( 1 );
        expect( saveFileMock ).toHaveBeenCalledWith({ fileContent: "mocked return value", fileDestinationPath: "outputs/test-file-destination", fileName: "test-file-name", });
    });

    test('should run with custom values mock', () => {
        const consoleLogMock = jest.fn();
        const consoleErrorMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('mocked return value');
        const saveFileMock = jest.fn().mockReturnValue( false );

        global.console.log = consoleLogMock;
        global.console.error = consoleErrorMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect( consoleLogMock ).toHaveBeenCalledTimes( 1 );
        expect( consoleLogMock ).toHaveBeenCalledWith( 'Server running...' );

        expect( createTableMock ).toHaveBeenCalledTimes( 1 );
        expect( createTableMock ).toHaveBeenCalledWith({ "base": 2, "limit": 10, });

        expect( saveFileMock ).toHaveBeenCalledTimes( 1 );
        expect( saveFileMock ).toHaveBeenCalledWith({ fileContent: "mocked return value", fileDestinationPath: "outputs/test-file-destination", fileName: "test-file-name", });

        expect( consoleErrorMock ).toHaveBeenCalledTimes( 1 );
        expect( consoleErrorMock ).toHaveBeenCalledWith( 'File was not created!' );
    });

});