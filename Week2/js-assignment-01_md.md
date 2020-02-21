### Basic; Syntax; Principles

1. Explain JS feature and basic execution mechanism.

    JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
	most important features:
		validating User's Input; Simple Client-side calculations; Platform independent;Great control; Handling dates and time; Detecting OS and browser. light weighted; interpreter based scripting language; case sensitive. (for modern JavaScript, introducing Let/Const key words, arrow function, Default parameter and  Property Shorthand)

2. Why we need to avoid Global Variables and Functions?

	because global variable is accessible and open to all, it is easily overwritten by other scripts. On the usage of more global variables in our code, it may lead to a maintenance issue.

3. How to keep a Strict Coding Style?

	(1) name variables and function with meaning, and make it easy, short, and readable.
	(2)Avoid globals
	(3) Run through JSLint; keep code clean and valid;
	(4) use comment appropriately
	(5) modularize make one function er task;
	(6) use shortcut notation when it makes sense;

4. Give an example of camelCase.

	var isDigits
	function findPrimers()

5. Why reduce access to variables and properties?

	limit accessibility to variables


6. Implicit coercion_1: `console.log(0.1 + 0.2 === 0.3)`

	false (0.1 + 0.2 = 0.300004)

7. Implicit coercion_2: `console.log(1 + '2')`

	'12'

8. Implicit coercion_3: `console.log(1 - '2')`

	-1

9. Implicit coercion_4: `console.log(1 * '2')`

	2

10. Implicit coercion_5: `console.log(1 % '2')`

	1

11. `NaN === NaN`?  (NaN 是一个不是数字的值，它跟所有值都不想等， 包括他自己)
	
	false  (####为什么)

12. What are the primitive data types in JS?

	Boolean — true or false
	Null — no value
	Undefined — a declared variable but hasn’t been given a value
	Number — integers, floats, etc
	String — an array of characters i.e words
	Symbol — a unique value that's not equal to any other value
	BigInt - a numeric data type that can represent integers in the arbitrary precision format.

13. What is immutable data?

	An immutable object is an object whose state cannot be modified after it is created. All primitive data is immutable.
	pass value.

14. What is the output?


		let arr = [1, 2, 3, 4, 5, 6, false, null, undefined, , null, NaN, 0];

		arr = arr.filter(a => Boolean(a));

		console.log(arr);

		Result: [1,2,3,4,5,6] 
		it returns all true value. Falsy values in JavaScript are false, null, 0, “”, undefined, and NaN.

15. Give some samples of Browser Object Model (BOM).

	Browser Object Model (BOM) allows JavaScript to "talk to" the browser. In this case, global variable and functions are under window.

	window.document.getElementById("header1");
	window.open();
	window.navigator...


16. What is the difference between Null and Undefined

	Undefined is that variable has been declared but has not yet been assigned a value
	Null is an assigned value to variable.

17. What are IIFEs (Immediately Invoked Function Expressions)?

	An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.
	this is defined as:
	(function () {
		statements
	})();

18. What is the difference between anonymous and named functions?

	anonymous function does not have a function name, defined as: function()
	named function have a function name, defined as: function funName()

19. Give a sample of ternary operator.

	(Temperature > 37) ? "high temperature warning" : "No Alert"

20. Tell me what's the difference between OOP vs FP in your own words.
	（1） FP emphasizes on evaluation of functions while OOP based on the concept of object. All the operation are based on object.
	(2)In Javascript, primitive data types (string, number, boolean, null and undefined) are passed by value, and objects are passed by reference. This means primitive data types are immutable, and objects are mutable. this is also a difference between FP and OOP
	(3) FP is Declarative Programming, which is a programming paradigm that expresses the logic of a computation without describing its control flow; OOP is Imperative programming, a programming paradigm that uses statements that change a program’s state.
	(4) FP support paralleling programing while OOP not(记得OOP 支持，有待查证)
	(5) statement in FP could be excuted in any order while statements must be executed in a specific order in OOP
	(6) FP is often use only when there are few things(data) and more operations. OOP is suitable for a lot of things with few operations.





 
