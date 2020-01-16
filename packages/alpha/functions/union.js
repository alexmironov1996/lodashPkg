export function unionArrays(firstArr, secondArr) {
    if (Array(firstArr) && Array(secondArr)) {
        return firstArr.concat(secondArr);
    } else {
        return [];
    }
}