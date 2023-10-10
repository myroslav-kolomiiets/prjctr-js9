'use strict';

/**
 * Map, Set, WeakMap, WeakSet
 * @author Miroslav
 */

/**
 * Map
 */

// const map = new Map();

// map.set('1', 'str1');   // рядок як ключ
// map.set(1, 'num1');     // цифра як ключ
// map.set(true, 'bool1'); // булеве значення як ключ
// console.log(map.get(1));   // 'num1'
// console.log(map.get('1')); // 'str1'
// console.log(map.has('1')); // true
// console.log(map.has(NaN)); // false
// console.log(map.size); // 3
// map.delete('1');
// console.log(map.size); // 2
// map.clear();
// console.log(map.size); // 0

/**
 * Map, об'єкт як ключ
 */

// const user = {
//     name: 'john',
//     age: 42,
//     role: 'admin',
// };
//
// let visitsCountMap = new Map();
//
// visitsCountMap.set(user, 42);
//
// console.log(visitsCountMap.get(user)); // 42

/**
 * Map, варіанти перебору
 */

// let bills = new Map([
//     ['bill1', 100],
//     ['bill2', 1200],
//     ['bill3', 600],
// ]);

// const billsKeys = bills.keys();
// for (let bill of billsKeys) {
//     console.log(bill);
// }
//
// const billsValues = bills.values();
// for (let amount of billsValues) {
//     console.log(amount);
// }
//
// const billsEntries = bills.entries();
// for (let entry of billsEntries) {
//     console.log(entry);
// }

// bills.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// });

/**
 * Set
 */

// const usersSet = new Set();
//
// const user1 = { name: 'User1' };
// const user2 = { name: 'User2' };
// const user3 = { name: 'User3' };
//
// usersSet.add(user1);
// usersSet.add(user2);
// usersSet.add(user3);
// usersSet.add(user1);
// usersSet.add(user2);
//
// console.log( usersSet.size ); // 3
//
// for (let user of usersSet) {
//     console.log(user.name);
// }

/**
 * Set, варіанти перебору
 */


// for (let value of usersSet) {
//     console.log(value);
// }

// usersSet.forEach((value) => {
//     console.log(value);
// });

/**
 * WeakMap
 */

// const weakMap = new WeakMap();

// const obj = {};

// weakMap.set(obj, 'some value');
// weakMap.set('obj', 'some value'); // Error
