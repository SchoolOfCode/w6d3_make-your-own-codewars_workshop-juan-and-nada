//👉 Write your tests below here:


import {lionAttack} from "./main.js"
describe("lionAttack", function (){

    test("You should survive if ammo is more than the number of lions and time is greater or equal to lion",
    function(){
        //Arrange
        const ammo = 20
        const time = 15
        const numberOfLions = 10
        
        const expected = "Congratulations! you survived!"
        //Act
        const actual = lionAttack(ammo, time, numberOfLions);
        //Assert
        expect(actual).toBe(expected)
    })

    test("You should not survive if ammo is less than the number of lions",
    function(){
        //Arrange
        const ammo = 5
        const time = 15
        const numberOfLions = 10
        const expected = "Sorry!, you are dead, you've run out of ammo"
        //Act
        const actual = lionAttack(ammo, time, numberOfLions);
        //Assert
        expect(actual).toBe(expected)
    }
    )
    test("You should not survive if time is less than the number of lions",
    function(){
        //Arrange
        const ammo = 12
        const time = 3
        const numberOfLions = 10
        const expected = "Sorry!, you are dead, you've run of time "
        //Act
        const actual = lionAttack(ammo, time, numberOfLions);
        //Assert
        expect(actual).toBe(expected)
    }
    )


})
    
    