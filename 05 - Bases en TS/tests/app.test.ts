describe('Test in the App.ts file', () => {

    test('should be true', () =>{
        // Arrange
        const num1 = 10;
        const num2 = 20;

        // Act
        const result = num1 + num2;
        
        // Assert
        expect( result ).toBe(30);
    })

})