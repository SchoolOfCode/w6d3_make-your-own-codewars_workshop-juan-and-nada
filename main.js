//Solution 

export function lionAttack(ammo, time, numberOfLions){
    if (ammo>= numberOfLions && time >= numberOfLions){
        return "Congratulations! you survived!"}
    if(ammo < numberOfLions){
        return "Sorry!, you are dead, you've run out of ammo"}
    if (time < numberOfLions){
        return "Sorry!, you are dead, you've run of time "
}}



