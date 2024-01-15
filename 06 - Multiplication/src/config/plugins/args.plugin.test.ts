const runCommand = async( args: string[] ) =>  {
    process.argv = [ ...process.argv, ...args ];
    const { yarg } = await import('./args.plugin')
    return yarg;
}

describe('yarg', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });

    test('should return default values', async() => {
        const argv = await runCommand(['-b', '5']);
        
        expect( argv ).toEqual( expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'table',
            d: './outputs',
        }));
    });

    test('should return configuration with custom values', async() => {
        const argv = await runCommand(['-b', '8', '-l', '6', '-s', '-d', 'custom-directory', '-n', 'custom-name']);

        expect( argv ).toEqual( expect.objectContaining({
            b: 8,
            l: 6,
            s: true,
            n: 'custom-name',
            d: 'custom-directory',
        }));
    });

});