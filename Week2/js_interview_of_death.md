### JavaScript Comprehensive Quiz (Time Limitation: 2 hrs)
### Guide: 
> 1. Answer as much as what you know. Straight to the point. Don't rambling.
> 2. NO internet search, notes, cheatsheet. Be honest. The mark is not your goal.
> 3. Submit answer sheet to the Slack-trainning-channel with file name "quiz_2_<your name>" Good Luck.

---

1. Write a swap function to exchange two value. Use methods as much as you know. (Probably 4)

	> Exclusive OR

		const swap = (a, b) => {
			// Complete code here...
            a^=b;
            b^=a;
            a^=b;
		}

	> Using a Temp Variable

		const swap = (a, b) => {
			// Complete code here...
            let temp = a;
            a = b;
            b = temp;
		}

	> Without using a temp variable

		const swap = (a, b) => {
			// Complete code here...
            a = a + b;
            b = a - b;
            a = a - b;
		}

	> Deconstructing

		const swap = (a, b) => {
			// Complete code here...
            [a,b] = [b,a];
		}

1. Write a sample of callback function

		function func(args, callback) {
			// Complete code here...
            
            
		}

		writeBlog(/* Complete code here... */);

1. Explain Throttling vs Debouncing.

	- Throttling  
	Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 100 milliseconds.”

	- Debouncing  
	Debouncing enforces that a function will not be called again until a certain amount of time has passed since its last call. As in “execute this function only if an amount of time (ex. 100 milliseconds) have passed without it being called.”


1. Explain these output.


		// that's because the Float point number specification. Because of the limited precision(actually 16 digits) of floating point numbers round-off errors can occur during calculations.

		console.log(0.1 + 0.2) //?          0.30000000000000004 
		console.log(0.1 + 0.2 === 0.3) //?  false

		Number.MIN_VALUE > 0; //?    false  A Number can store values between 5e-324 and 1.7976931348623157e+308
		Number.NEGATIVE_INFINITY //?        Number.NEGATIVE_INFINITY

		typeof(0) //? number
		typeof(0n) //?                     (不能识别？？？)
		typeof(undefined) //?				'undefined'
		typeof(null) //?					object
		typeof(NaN) //?						number
		typeof(false) //?					boolean
		typeof("") //?						String
		typeof(``) //?						string
		typeof('') //?						String

1. Explain the output.

		let Food = { cuisine: 'abc' }
		let _Food = Object.create(Food);   // Object.create() 继承， create a new obj by the existing OBJ as prototype of new obj. 但是建立后 _Food 是空， 值都为undefined 

		delete _Food.cuisine
		console.log(_Food.cuisine); //?  'abc'

		//The result is 'abc'. _Food is a object inherited from Food, it has all attributes of Food. Once the delete _Food.cuisine runs, the atrributes is deleted. But it only delete the effect on its own. The object will use the property from the prototype chain.


1. Check the parenthesis is balanced or not.

		let isBalancedParenthesis = (str) => {
			// Complete code here...
			let myMap = new Map();
			myMap.set("(", ")");
			myMap.set("[", "]");
			myMap.set("{", "}");

			let stack = [];
			if(str.length % 2 === 1) {
				return false;
			}
			for(let i = 0; i < str.length; i++) {
				
				if(str[i] === "(" || str[i] === "{" || str[i] === "[" ) {
            		stack.push(str[i]);
        		}else{
					if(stack.length === 0) {
						return false;
					}
					let last = stack.pop();
					if(str[i] !== myMap.get(last)){
						return false;
					}
					
				}

			}
			return stack.length === 0;
		}

		// Test Cases
		isBalancedParenthesis("[()]{}{[()()]()}"); // returns true
		isBalancedParenthesis("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"); // returns true
		isBalancedParenthesis("({(()))}}"); // returns false



1. Remove the same element(s) from the giving array.

		// Complete the code part
		function mode(arr) {
			// Complete code here...
			return [...new Set(arr)];

		}

		mode(['pear', 'apple', 'orange', 'apple']);

		// Or use another method (set)
		// Complete code here...

1. Use HOF methods to accomplish a quick sort for an array.

		var array = [2,4,5,22,1,6,44,7,3,9];
		// Complete code here...

1. Check these codes below and explain how `i` output in each of them.

		(function() {
			const arr = [];
			for (var i = 0; i < 3; i++) {
				(function(i) { 
					arr.push(() => i); //?
				})(i);
			}
			const result = arr.map(x => x()); //?
		})()

		for (var i = 0; i < 10; i++) {
			setTimeout(() => i, 10); //?
		}

		for (let i = 0; i < 10; i++) {
			(function(i) {
				setTimeout(() => i, 10);
			})(i) //?
		}

		for (let i = 0; i < 10; i++) {
			setTimeout(() => i, 10); //?
		}


		for (var i = 0; i < 10; i++) {
			setTimeout((() => i).bind(null, i), 10); //?
		}

1. Check Elements is exsited or not. Finish the following codes.

		function isFirstLoad(id) {
			// Complete code here...
		}

		let test = isFirstLoad() 
		test(10) //?
		test(20) //?
		test(10) //?

1. A popular fuzzbuzz questions.  
	Write a loop and output 'fizz' everytime the `i` could be mod by **3**,  
	output 'buzz' everytime the `i` could be mod by **5**,  
	and output 'fuzzbuzz' everytime it could be mod by **the least common multiple**.

		// Complete following part
		for (let i = 0; i < 100;) 
			console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);

1. merge the following two array and The output should be

		[
			{ id: 1, name: "David", position: null },
			{ id: 2, name: "John", position: "Leader" },
			{ id: 3, name: "Matt", position: "Captain" },
			{ id: 4, name: "Greg", position: "VP" },
			{ id: 5, name: null, position: "Pawn" },
			{ id: 6, name: null, position: "Rogue" }
		];

		// Using ES6 Map
		const a = [{id: 3,name: "Matt"}, {id: 4,name: "Greg"}, {id: 1,name: "David"}, {id: 2,name: "John"}];
		const b = [{id: 2,position: "Leader"}, {id: 3,position: "Captain"}, {id: 6,position: "Rogue"}, {id: 4,position: "VP"}, {id: 5,position: "Pawn"}];

		// Complete code here...
		

1. **Comprehensivs subject**:  
	A simulation progress bars effects. The following progress bar should be start until the previous bar finsihed.  
	(The HTML & CSS part is provided. Finished the js code part below.)

		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
		</head>
		<style>
			.bar-container {
				width: 100%;
				background: #ccc;
				border: 1px solid #eee;
				margin-bottom: 10px;
			}

			.loader {
				height: 20px;
				background: #434334;
				width: 0px;
				transition: width 1s ease;
			}

			.active  {
				width: 100%;
			}
		</style>
		<body>
			<!-- Click button to create a new progress bar -->
			<button id="button">click me</button>

			<div class="container">
				<!-- All progress bar will be put inside of here -->
			</div>

			<div style="display: none">
				<!-- Here is the template of the bar -->
				<div class="bar-container">
					<div class="loader"></div>
				</div>
			</div>
		</body>

		<script>
			;(function() {
				"use strict";
				
				// [newBarContainer: Get the container where put those progress bars]
				// [addBarButton: Trigger the event of adding a new progress bar]
				// [progressBar: The template of a progress bar]

				const newBarContainer = document.getElementsByClassName("container")[0];
				const addBarButton    = document.getElementsByTagName("button")[0];
				const progressBar     = document.getElementsByClassName("bar-container")[0];
				
				// [Assign the fulfilled status of a promise object to a variable]
				let progressComplete  = Promise.resolve();

				// [Trigger the event to add a new progress bar]
				addBarButton.addEventListener("click", () => {
					const newBar = progressBar.cloneNode(true);
					newBarContainer.appendChild(newBar);

					// Complete code here...
					
				});
			})();
		</script>
		</html>
