/* 
👉 Write your kata here!
// 
//Scenario: 

You find yourself alone in the jungle facing a group of lions ready to attack you, 
but luckily you have a rifle with some ammo! In order to survive you have to kill all the lions before your
ammo and time runs out otherwise you are dead. You can only shoot one lion per second.

Create a function that predict the results which takes in the number of lions, the time you have and number of ammo.
If you die, it will return "Sorry!, you are dead, you've run out of ammo" or "Sorry!, you are dead, you've run of time "
If you surive, it will return "Congratulations! you survived!"

you died if...
ammo < lions 
 time < lions
 you live if...
 ammo >= lions and time => lions

// rifle with ammo
// number of lions 
// time  15 seconds

/* Write the function your CodeWarriors will start with below here: */

export function lionAttack(ammo, time, numberOfLions){
    if (ammo>= numberOfLions && time >= numberOfLions){
        return "Congratulations! you survived!"}
    if(ammo < numberOfLions){
        return "Sorry!, you are dead, you've run out of ammo"}
    if (time < numberOfLions){
        return "Sorry!, you are dead, you've run of time "
}}



