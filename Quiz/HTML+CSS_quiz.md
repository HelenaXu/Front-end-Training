### HTML5 + CSS3 Comprehensive Quiz (Time Limitation: 2 hrs)
### Guide: 
> 1. Answer as much as what you know. Straight to the point. Don't rambling.
> 2. NO internet search, notes, cheatsheet. Be honest. The mark is not your goal.
> 3. Submit answer sheet to the Slack-trainning-channel. Good Luck.

---

1. Cite different types of CSS. (3 way to write CSS)

（1）inline in a element opening tag;
 (2) internal HTML; between <head></head> tags insert all CSS styles in <style></style>;
 (3) external insertion. Generally we insert a link between tags <head></head>;

2. Name new feature modules which are used in CSS3.

(1)there are some new elements' selectors in CSS3. Regular expression is used to select matched attributes, e.g. [attri^]
 = val  means select attributes name starting by 'val'; [attr$] = val, end by val; [attr*] = val sub string is val.

(2)there are also some new elements: border-radius, box-shadow and so on;

3. Explain the term Responsive web design.

responsive design is for web page rending well on different size of screen or clinent ports. It helps web page display well and adapt to different screen size

4. What is CSS specificity?

CSS specificity is a specified order for elements, which decides what style should be applied on this element. Usually, the higher the value is, the more likely the style should apply.

Order: inline CSS style > id > class = psuedo class = attributes > normal tags


5. What is a CSS Box Model?

each CSS box includes its content, padding, margin and border.

6. How do we make a rounded corner by using CSS?

border-radius: xx px;

7. What is CSS flexbox?

Flexbox is a container to layout child elements. It makes it more flexible to layout structures and elements without using float or positioning

8. Name all the properties of the flexbox that you know.

flex-direction; flex-wrap; flex-basis; justify-content; 

9. What is the difference between padding and margin?

margin is the space out of the border; padding is space inside the border. margin may get collapse, and the larger margin will be shown between the former box and later one.

10. What is a CSS pseudo-class?

pseudo-classes allow styling in some part of HTML who are not map to the DOM node tree. 

11. Use pure CSS to draw a triangle.

div{
    height: 0 px;
    width: 0px;
    border-left: 200px solid transparent;
    border-bottom: 200px solid Red;
    border-right: 200px solid transparent;
}

12. Do all HTML tags come in a pair?

<html></html>; <head></head>; <body></body>; <script></script>; <p></p>; <div></div>; <span></span>; <video></video>; <footer> </footer>; <header></header>; <banner></banner>;<section></section>; <table></table>; <form></form>......

13. What is the advantage of collapsing white space?

uniform all the space between same-level elements. For example 5 <div> each of them has margin 10px. if no collapsing, there is the top and bottom only have 10px while there are 20 px between <div> box.

14. How do you create links to sections within the same page?

use <a> tag create an anchor, linking to the destination part.

15. How do you create text on a webpage that will allow you to send an email when clicked?

use <form> create input area and link the submit to a function. Maybe jquery is OK.

16. What are the new FORM elements which are available in HTML5?

input type = date?; datalist; output

17. Tell me two benefits of HTML5 Web Storage

HTML5 provide local storage and session storage helping cook to overcome its defects.
cookie storage is too small which only has 4 kb. local storage and session storage are larger than cookie;
local web storage could store the requested page, and reduce times sever sent data. this also reduce the speed to load a web page if the page is stored in local storage tremendously. 

18. Explain DOCTYPE and why we need it?

DOCTYPE tells the browser the web page is written by which version HTML. if we do not specify DOCTYPE, it may enter the quirk mode.

19. What is the Application Cache in HTML5 and why it is used?

application Cache is a technique providing offline browsing. Using manifest attibute in <html> tag.  
Once we have application Cache, user could view the page after refreshing page under the circumastance of out of the internet.

20. Name all the attributions in `<meta>` tags.

name, content, charset, and so on.

21. What is semantic HTML?

semantic HTML means tags or elements with its meaning. For example, footer, header, banner, section.

22. Explain Document Flow of HTML.

document flow is the arrangement or order to layout elements by CSS. without floating or positing, all the elements should display block or inline.

23. How do you solve Browser compatibility?

use CSS hack to make display more consistent.

24. What will happened after you press the enter of a URL?

(1) browser ask DNS about the URL, whether it is local, if it is, show the page; otherwise, find IP.
(2) According to the IP address , send a request to connect with the sever, asking if it is OK to connect. (first hand shake)
(3) sever gives a repose wether it is open for connecting.
(4) browser sent request about the URL
(5) sever sends responding data and file to browser.
(6) browser sends a message to confirm the data is correct or not, page is shown successfully or not.

25. Any ideas on web accessability?

Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities. 
