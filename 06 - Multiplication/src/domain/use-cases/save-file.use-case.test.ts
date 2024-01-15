import { SaveFile } from "./save-file.use-case";
import fs from 'fs';

describe('SaveFileUseCase', () => {

    const cleanDirectory = ( directory:string ) => {
        if ( fs.existsSync( directory ) ) {
            fs.rmSync(directory, { recursive: true });
        }
    }

    beforeEach(() => {
        cleanDirectory('outputs');
        jest.clearAllMocks();
    });

    afterEach(() => {
        cleanDirectory('outputs');
    });

    test('should create table instance of saveFile', () => {
        const saveFile = new SaveFile();

        expect( saveFile ).toBeInstanceOf( SaveFile );
    });

    test('should save file with default values', () => {
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'test content',
        }
        
        const result = saveFile.execute( options );
        const filePath = 'outputs/table.txt';
        const fileExists = fs.existsSync( filePath );
        const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8' } );

        expect( result ).toBeTruthy();
        expect( fileExists ).toBeTruthy();
        expect( fileContent ).toBe( options.fileContent );
    });

    test('should save file with custom values', () => {
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'custom content',
            fileDestinationPath: 'outputs/custom-file-destination',
            fileName: 'custom-file-name'
        }
        const filePath = `${options.fileDestinationPath}/${options.fileName}.txt`;

        const result = saveFile.execute( options );
        const fileExists = fs.existsSync( filePath );
        const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8' } );

        expect( result ).toBeTruthy();
        expect( fileExists ).toBeTruthy();
        expect( fileContent ).toBe( options.fileContent );

        cleanDirectory(filePath);
    });

    test('should return false if directory could not be created', () => {
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('error')}
        );

        const options = {
            fileContent: 'test content',
        }
        const result = saveFile.execute( options );

        expect( result ).toBeFalsy();
        mkdirSpy.mockRestore();
    });

    test('should return false if file could not be created', () => {
        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('error')}
        );

        const options = {
            fileContent: 'test content',
        }
        const result = saveFile.execute( options );

        expect( result ).toBeFalsy();
        writeFileSpy.mockRestore();
    });

});