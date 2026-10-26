// Compare two Arrays to see if they hold the same values:
export function arraySimpleCompare(arrayOne: number[], arrayTwo: number[]): boolean {
    if (arrayOne.length != arrayTwo.length){
        return false;
    }
    if (arrayOne.length == 0 && arrayTwo.length == 0){
        return true;
    }
    if  (arrayOne.length == 0 || arrayTwo.length == 0){
        return false;
    }

    arrayOne.sort();
    arrayTwo.sort();

    let arrayIsSame = true;
    let currentValue;

    for (let i = 0; i < arrayOne.length; i++){
        if (arrayOne[i] != arrayTwo[i]){
            arrayIsSame = false;
        }
    }

    return arrayIsSame;
}