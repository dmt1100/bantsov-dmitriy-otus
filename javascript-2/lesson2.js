//lesson2
var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})

//создаем async функцию
async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let k = initialValue;

    for (let asyncFunction of asyncFunctions) {
        // выполняем через await
        let f = await asyncFunction();
        // сохраняем результат
        k = reduce(k, f);
    }

    return k
}

promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log('reduce')
        return memo * value
    },
    1
)
    .then(console.log)
