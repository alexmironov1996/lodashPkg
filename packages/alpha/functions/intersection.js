export function getIntersections(firstArr, secondArr) {
    if (Array(firstArr) && Array(secondArr)) {
        return firstArr.filter(value => -1 !== secondArr.indexOf(value));
    } else {
        return [];
    }
}