// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел, 
// а вторым параметром cb - функцию обратного вызова(callback).Дополни тело функции так, 
// чтобы функция filterArray заполняла новый пустой массив numbers только теми элементами 
// из массива array, для которых вызов функции cb вернет true.


const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {

    const numbers = [];
    for (let i = 0; i < array.length; i += 1) {
        const element = array[i];
        const index = i;
        // Write code under this line
        if (cb === isUniq && cb(element, index, array)) {
            numbers.push(element)
        }
        if (cb === isEven && cb(element)) {
            numbers.push(element)
        }

        // if (cb(element, index, array)) {
        //     numbers.push(element);
        // }
    }
    return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]