

// 1. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function func(a) {
//     console.log(a);
//     return function (b) {
//         console.log(b);
//         return function (c) {
//             console.log(c);
//             return a + b + c
//     }
// }
// }

// const sum = func(2)(3)(4);
// console.log(sum);

// 2. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

// function pusher(...par) {
//     // array.push(par);
//     // console.log(par);
//     return par;
// }

// function func(a) {

//     // const arr = [];
//     // pusher(arr, a)

//     return function (b) {
//         // arr.push(b);
//         // pusher(arr, b);

//         return function (c) {
//             // arr.push(c);
//             // pusher(arr, c);

//             return function (d) {
//                 // arr.push(d);
//                 // pusher(arr, d);

//                 return function () {
//                     // return [a, b, c, d];
//                    return pusher(a, b, c, d); 

//                   }
//               }
//           }
//       }
//   }


// const result = func(2)(3)(4)(5)();
// console.log(result);
// 3. Реализуйте счетчик вызова функции, работающий на замыканиях. 

// const addOne = function (num = 0) {
//   // let num = 0;
//   return function (step = 1) {

//     return (num += step);
//   };
// };
// const counter = addOne();
// console.log(counter(-1));
// console.log(counter(-1));
// console.log(counter(-1));
// console.log(counter(-1));


// const oneMoreCounter = addOne(50);
// console.log(oneMoreCounter());
// console.log(oneMoreCounter());
// console.log(oneMoreCounter());
// 4. Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
// 5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

// function conuterCreator(num = 10) {
//   return function (step = -1) {
//     // 1 return !num ? "отсчет окончен" : (num += step)
//     // 2 return num === 0 ? "отсчет окончен" : (num += step)
//     // 3 return !num === 0 ? "отсчет окончен" : (num += step) рахує і після 0
//     return num ? (num += step) : "отсчет окончен"
//   }
// }
// const couter = conuterCreator()
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// console.log(couter())
// 6. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с 
// числами.Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - 
// сумму квадратов, а третья - сумму кубов.

const object = {
    pow(array, exp) {
        let sum = 0;
        for (const element of array) {
            sum += Math.pow(element, exp);
        }
        return console.log(sum)
    },
    sum: function (array) {
        this.pow(array, 1)
        // let sum = 0;
        // for (const element of array) {
        //     sum += Math.pow(element, 1);
        // }
        // return console.log(sum);
    },
    square(array) {
        this.pow(array, 2)
        // let sum = 0;
        // for (const element of array) {
        //     sum += Math.pow(element, 2);
        // }
        // return console.log(sum);
    },
    triple(array) {
        this.pow(array, 3)
        // let sum = 0;
        // for (const element of array) {
        //     sum += Math.pow(element, 3);
        // }
        // return console.log(sum);
    },

}

object.sum([1, 2, 3, 4, 10])
object.square([1, 2, 3])
object.triple([1, 2, 1])






// *** 7. Создайте функцию высшего порядка cartCounter(), в которой будет реализован 
// функционал увеличения или уменьшения количества выбраного товара в корзине в зависимости 
// от передаваемого id товара.Используйте механизм замыкания для решения задачи.
// const cart = {
//     products: [
//         {
//             id: 1,
//             name: "Milk",
//             price: 20,
//             quantity: 1
//         },
//         {
//             id: 2,
//             name: "Juice",
//             price: 30,
//             quantity: 2
//         },
//         {
//             id: 1,
//             name: "Fresh juice",
//             price: 40,
//             quantity: 3
//         }
//     ]
// }

// второй массив
// const order = [
//     {
//         id: 1,
//         quantity: 20,

//     },
//     {
//         id: 2,
//         quantity: 40,
//     }
// ];

// function cartCounter(quantity) {

//     return function (step = 1) {
//         return quantity += step;
//     }
// }

// function findProductById(array, id) {
//     for (const product of array) {
//         if (product.id === id) return product;
//     }

// }
// // console.log(findProductById(3));

// function getValue(array, id) {
//     const product = findProductById(array, id)
//     const counter1 = cartCounter(product.quantity);
//     console.log(counter1(-1));
//     console.log(counter1(1));
//     console.log(counter1(1));

// }
// getValue(order, 2)


// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// 8. В примере выше создайте методы, которые будут логировать данные всех продуктов массива.
// function logger(product) {
//     console.group(`${product.name}: `)
//     console.log(product.name)
//     console.log(product.price)
//     console.log(product.quantity)
//     console.groupEnd()
// }