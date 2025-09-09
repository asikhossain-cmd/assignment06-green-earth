01. What is the difference between var, let, and const?
Ans: var is global scope but let and const is block scope also functional scope, that means we can not access let and const variable outside or the scope if we already set it as a block scope 
and if we something se as const then we cannot re assign it but let can allow reassign 
and var has also some security bug but let and const does not.

2) What is the difference between map(), forEach(), and filter()?
Ans: difference between map(), forEach(), filter() is if we loop using map() then we can get a return but forEach can not provide return any array but map can return an array and map is use to copy an array to another and forEach is like for...of loop and filter is if the condition is match then it will provide the matched items
3) What are arrow functions in ES6?
Ans: Arrow function is the short function where we dont need to use function keyword, 
and we can store a function in variable, and if we want to write one line funciton then we dont need to reutrn it it automatically return the value, and if the parameter is just one then we dont provide the ().

4) How does destructuring assignment work in ES6?
Ans: array dectructing is we can set the variable immediatly of an specifi array like we have an array
const player = ['messi', 'neimar'];
if we want to get messi as a argentina variable then we can set it
const [argentina] = ['messi', 'neimar']
now console.log(argentina)
output will me the first index or array

5) Explain template literals in ES6. How are they different from string concatenation?
Ans: template literal is a powerfull methos that through we can write the sentence and varibale at the same line with `` and ${} we can easily dynamically get a value or set by templated string or literal. 