### Frequently Asked Questions

1. What is HTML stands for?

HTML is HyperText Markup Language. it is used to define the meaning and structure of webpage content.

1. What will happened if you don't add DOCTYPE for HTML5

The <!DOCTYPE html> declaration tells web browser  HTML5 is used to write this the page. If document type is not mentioned, browser will go to Quirks mode. if is is not specified by html5， older version HTML does not support some new features such as semantic tag, multimedia tags.

1. What is the difference between HTML elements and tags?

Element is everything between a opening and closing tag. Tags are labels used to mark up the beginning and end of an element. Generally, element includes tags, attributes, values and other contents

1. What are attributes and how do you use them?

attributes are special words which are modifiers of HTML element type. It is used to control element's behavior. We always put it inside the opening tag.

1. What is the difference between attributions and properties?

Attributes and properties are the same thing essentially. when a attributes is called by javascript or edit by css it is a property.

1. When should you use comments?

comment is used to explain code. it will not showed in web page but it could help other programers understanding and edit these code. So when a function is completed, or start another piece of code we could use comment to split different functional code blocks.

1. What’s the difference between a block-level element and an inline element?

block elements can edit its height width, and could contain other block level elements as well as inline elements. However, an inline element can only contain inline elements.

1. How is an HTML document structured? (hint: What is DOCTYPE tag; HTML tag; Head tag; Body tag)

<DOCTYPE html>
<html>
<head>
	<meta>
	<title> </title>
	<link rel="stylesheet" href="cssstyle.css">
    <script> </script>
</head>
<body>
    <div>
    ...
    </div>
</body>
</html>

1. What do you know about HTML5's new features?

HTML5 has its new elements, attributes, and APIs. Some of the most used elements in HTML5 have to be the media related elements like <video> and <audio> for obvious reasons. Also in use are the semantic elements, which give an elegant structure to the web pages like: <header>, <footer>, <figure>, and <figcaption>. In addition, there is some improvements in Maths and forms.

1. What browsers support HTML5? (hint: Explain Browser Compatibility)

 HTML5 is supported in all modern browsers. In addition, all browsers, old and new, automatically handle unrecognized elements as inline elements. IE 6, IE 7, IE 8, Firefox 3.5, Firefox 3.6, Opera 11, Safari 5, Chrome 8.

1. What are self-closing tags / void tags / empty elements / singleton tags?

 In HTML, tags mostly occur in pairs. when we have a opening tag, it always followed by a closing tag. But in some case, few of tags doesn’t require closing tags, they can survive only with starting tag.
<area /> – clickable area inside an image map.
<base /> – new root or base path for relative paths.
<br /> – single line break in a paragraph.
<embed /> – embeds things like flash.
<hr /> – change in type of content.
<iframe /> – frame inside the page.
<img /> – image.
<input /> – input field .
<link /> – include an external style sheet.
<meta /> – metadata about the page.
<param /> – parameter for an object.
<source /> – include media for video or audio.
<track /> – text track for video or audio.


1. What's the difference between `<div>` and `<p>`? (hint: coding standards)

Most HTML tags apply meaning, <p> means paragraph. div tags apply no meaning. Web developers use <div>  is the generic container for flow content. it is to group many HTML elements together and apply CSS styles to many elements at once.  It has no effect on the content or layout until styled using CSS. Both of them are block-level element。


1. How do you apply CSS styles to a web page?

we have three ways: 1. Inline CSS(in start tags); 2. Internal Style Sheet (apply CSS styles Inside <head> section in HTML using <style></style>); 3. External Style Sheet (link a seperate css file using <link> under <head>. Generally, we use the third way. 

1. How do you apply JavaScript to a web page?

Two ways: 1. one typical use of the <script> </script> tags is embedding script directly to HTML file; 2. Using an external file to contain the JavaScript.

1. What you can do with a `<meta>` tag?

represents metadata that cannot be represented by other HTML meta-related elements. attributes such as charset, name, content may included. we could also use it record application name, author, date , description and key words.

1. What is a boolean attribution of an `<input>` tag?

boolean attribution is either true or false. In <input> tag, checkbox is a boolean attribution, indicating whether or not this checkbox is checked by default.

1. What you can do with an `<a>` tag?

<a> is an anchor which could bring users to a specific place. We may anchor to another document, hyperlink, email, phone number, or any specific place in this page.

1. Cookies VS SessionStorage VS LocalStorage?

Cookies stores data that has to be sent back to the server with subsequent requests. Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side. (storage size smallest, 4k)
The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed. Data is never transferred to the server(storage 5M).

LocalStorage stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data(largest storage ).


1. What elements are abondoned in HTML5?

Flash is abondoned by HTML5, we use <video> often. applet instead by embed or object instead; acronym instead by abbr; bgsound instead audio; dir instead ul.

1. What does `manifest` means in a `<html>` tag?

manifest attribute in <html> is for offline application working. it is a software storage feature which provides the ability to access a web application even without a network connection. manifest="<path>" must be added to the html element in order for the cache manifest file to work.
---

### Assignments

1. Can you give a sample with `<Table>`? (Show as much as you can)

file:///Users/xuexu/development/assignment/assignment_01/Week1-1/Ass-1-Table.html

1. Can you give a sample with `<Form>`? (Show as much as you can)

file:///Users/xuexu/development/assignment/assignment_01/Week1-1/Ass-1-Form.html