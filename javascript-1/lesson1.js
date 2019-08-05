//lesson1
const sum = (num) => {
    let result = num

    const add = (number) => {
        if (number === undefined) {
            return result
        }
        result += number
        return add
    }

    if (num === undefined) {
        return (result === undefined) ? 0 : result
    }
    return add
}
console.log(sum(2)());          //2
console.log(sum(1)(2)());       //3
console.log(sum(3)(5)(-1)());   //7
console.log(sum());                   //0
