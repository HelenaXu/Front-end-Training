### Final Round Comprehensive Quiz (Time Limitation: 2 hrs)
### Guide: 
> 1. Answer as much as what you know. Straight to the point. Don't rambling.
> 2. NO internet search, notes, cheatsheet. Be honest. The mark is not your goal.
> 3. Submit answer sheet to the Slack-trainning-channel with file name "quiz_final_\<your name\>" Good Luck.

---
### Basic Questions

1. What are the differences between GET and POST method?

	Both of them transfer data from client to sever. Get sent a request parameter append in URL, while POST put data in message body

1. How do you solve Browser compatibility while using CSS3?

	1) CSS hack helps CSS render more consistent in different browsers.
	2) Prefixes for different browsers are:
		-ms for Microsoft (Internet Explorer)
		-moz for Mozilla Foundation (Firefox)
		-o for Opera Software
		-webkit for Safari and Chrome

1. How do you solve HTML Accessibility with HTML5 features?

	use Accessible Rich Internet Applications which has a batch of special attributes. These attributes makes application more accessible to people with disabilities.

1. What CSS architecture strategy will you implement while create a React Components? (NOT CORRECT)

	1)Insert separate CSS ducument with each component.  
	2)insert JS


1. What are the coding standard of HTML5 and CSS3 that you should follow? (correct but not critical enough)

	For HTML
	1) using indent to format  
	2) using comment to split logic block  
	3) always add DOCTYPE at first  
	4) close HTML tags  
	5) use lower case for attributes  
	6) space less between attributes and expressions
	
	for CSS
	7) put spaces after ":", before "{" in property declarations.
	8) Use hex color codes #000 unless using rgba();
	9) Do not indent blocks.
	10）Always follow a rule with one line of whitespace.
	11）Quote url() and @import() contents.


1. How do you compose your CSS architecture in a component-based project.

	give each component a separated CSS document, and import in JS document with the same name. 

1. Explain what is BEM?

	Block Element Modifier is a technique used to reuse code and sharing code.
	It provides name convention, tools to restructure code which makes coding more easier, robust.

1. What's the difference between regular functions and arrow functions in JavaScript

	regular functions and arrow function are all callable. the difference is regular function has a function structure, we can use it create a new object by new() while arrow function not.

1. What is the major advantage of Using React.js as the front-end view layer? (reusable is also an important advantage needs to be mentioned)

	The major React as the front-end view is it faster rendering when it refers to a rich reaction application.
	React increase the speed of updates by using virtual DOM tree. becasue of all the isolated component, react does not have to upload all web page. it only render the changed part. And also, component in React is reusable, it could help to structure the project and improve the reusability. 


1. Explain the difference between context and scope in JavaScript Mechanism. (Good!)

	context is related to object. It is a context a function run. It always bind with "this". When a function call in global environment, "this" refers to window. when a function runs by a object or binding with a obj, "this" refers to this object.
	scope refers to the visibility of its variables and expressions when a function run. 

1. What are the ways to abort Javascript execution? (there are two more. Figure them out)

	1) clearInterval() stop a timer;
	2) generally try-catch could stop by a fake error.
//	3) theWorker.terminate()  (verify, object.ternimnate())
	4) use return | break

1. What is the difference between the stateful and stateless component?

	stateful component has state, which can keep tracking the data changing. It always occurs in class component.
	stateless component does not care the state or data changes, aim to make components as simple as possible. it is in functional component. 

1. Write down all the design pattern you know and their scenes to be used. (Only ONE? Is that all you know?)

	1) Singleton: when we only need one instance singleton is useful. Eg. login pop up window;
	2) Factory: when When a class doesn't know what sub-classes will be required to create, and wants its sub-classes specify the objects to be created. 
	3) Strategy Pattern: when some of the functions or classes only differ by their behaviors, we could avoid variaty of conditional statement by strategy design.



1. How can we use a lifecycle method in React.js? (Give a code sample)

	life-cycle methods exist in each method. It runs at particular times during the component created. 
	For example constructor is a life-cycle method.
	
	constructor(props) {
		super(props);
		this.state = {
			a: 10,
			b: "string"
			};
  	}
	

1. Can you explain what problem does Redux solved as single-source of truth?

	It is easy to retrieve information in constant time and maintain a clean structure for the state in redux. In original flux, we have several stores holding several piece of data. Sometime one store has to wait another store update, and we also have to write more code to maintain the structure. One store solve this problem. It makes data serialization and make problems easy to track.

---
### Coding Questions

1. Given a string `s`, find the longest palindromic substring in `s`. You may assume that the maximum length of `s` is `1000`. (≤10 mins)

		// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

		// Example 1:

		// Input: "babad"
		// Output: "bab"
		// Note: "aba" is also a valid answer.
		// Example 2:

		// Input: "cbbd"
		// Output: "bb"
		
		var longestPalindrome = function(s) {

			if (s.length <= 1) {
				return s;
			}

			var count = 0;
			var res = "";
			for (let i = 0; i < s.length; i += 1) {
				// ... complete code here
				for(let j = 0; j < s.length; j++){
					let sub = s.substring(i, j + 1);
					if(isPalindrome(sub)){
						if(sub.length > count){
							res = sub;
							count = sub.length;
						}
					}
				}
				return res;
			}

			function isPalindrome(str){
				return str.split("").reverse().join("");
			}

		};
		console.log(longestPalindrome("abbbbbbbba"));

1. Given a string `"ab-cd-ef"`. Write a JavaScript code to convert it in to camelCase `abCdEf`. (≤10 mins)

		let string = "ab-cd-ef"

		function camelCaseConvertion(string) {
			// ... complete code here
		let a = string.split("-");
        const changedA = a.map(word => capitalWord(word));
        let res = a[0];
        if(changedA.length >= 1){
            for(let i = 1; i < changedA.length; i++){
                res += changedA[i];
            }
        }
        return res;

		}
    	function capitalWord(word){
        	return word.toLowerCase().replace(/^[a-z]/g, (L) => L.toUpperCase());
    	}


1. Write a react code for the carousel, you can use this api for getting the pics: (≤15 mins)
	
	`https://jsonplaceholder.typicode.com/photos`  
	For this api, add `/1` to the end of the url, you will get the first one photos object,
	Requirements: 
	
	- need 5 pics from the api
	
	- there are two buttons on the each side of the pics, one is left, the other is right. Click left or right will change the pic, left for the left direction and right for the right.
	
	- center ur component plz
	
	- it will back to the first pic when reach the last one and click the right button, of course, head to the last one when reach the first page and click the left button.
	
	- (optional) add some transition to the pic if you are comfortable with this.