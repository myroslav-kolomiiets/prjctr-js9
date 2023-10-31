'use strict';

/**
 * Основи роботи з DOM (2)
 * @author Miroslav
 */

/**
 * Атрибути
 */

// const elem = document.querySelector('body');
// console.log(elem.attributes);

/**
 * Кастомні атрибути
 */

// const body = document.querySelector('body');
// console.log(body.nodeType);

/**
 * Основні властивості
 */

// let textElement = document.querySelector('p.text');
// textElement.hidden = true;

// let divElement = document.querySelector('div');
// divElement.innerHTML = '<section>Новий чудовий елемент</section>';

// console.log(divElement.nodeValue);

// elem.textContent = 'Щось нове';

/**
 * Події
 * приклад 1
 */

// const redBtn = document.querySelector('.redButton');
// let counter = localStorage.getItem('counterLevel') || 0;
// const hatredLevel = document.querySelector('.hatredLevelCounter');
// hatredLevel.textContent = counter + '👿';
//
// function updateAndShowCounterLevel(event) {
//     console.log(event);
// 	counter++;
//     console.log(`Current counter level: ${counter}`);
//     console.log(`It is not high enough! 👿`);
//     localStorage.setItem('counterLevel', counter);
//     hatredLevel.textContent = counter+'👿';
// }
//
// redBtn.addEventListener('click', updateAndShowCounterLevel);

/**
 * Події
 * приклад 2
 */

// let link = document.querySelector('a');

// link.addEventListener('click',function(event) {
//     console.log('clicked');
//     console.log(event);
//     event.preventDefault();
// });

// let redBtn = document.querySelector('.redBtn');

// redBtn.addEventListener('click', function(event) {
//     console.log(`It is not high enough! 👿`);
//     // event.stopPropagation();
// });

// document.body.addEventListener('click',function(event) {
//     console.log('The body was clicked!');
//     console.log(`It is not high enough! 👿`);
// });

/**
 * dispatchEvent
 */

// let btn = document.querySelector('.redBtn');
//
// btn.addEventListener('click', function (event) {
//     console.log('Mouse Clicked');
//     console.log('event is Trusted -->', event.isTrusted);
// });
//
// let clickEvent = new Event('click');
// btn.dispatchEvent(clickEvent);

/**
 * Кастомні події
 */

// const redButton = document.querySelector('.redButton');
// const greenButton = document.querySelector('.greenButton');
//
// function highlight(elem) {
//     elem.style.backgroundColor = 'blue';
//
//     // create the event
//     let event = new CustomEvent('highlight', {
//         detail: {
//             backgroundColor: 'blue',
//         }
//     });
//     // dispatch the event
//     elem.dispatchEvent(event);
// }
//
// greenButton.addEventListener('click', () => {
//     // highlight redButton element
//     highlight(redButton);
// });
//
// redButton.addEventListener('highlight', function (event) {
//     event.target.style.border = "solid 1px red";
//
//     console.log(event);
// });
