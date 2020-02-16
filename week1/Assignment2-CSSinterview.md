1. Explain CSS and how it works?

    CSS stands for Cascading Style Sheets. while HTML defines the structure and meaning of web page content, CSS is responsible for how to display this page, including the page layout, font size, colors.
    The browser loads the HTML converts the HTML into a DOM (Document Object Model). 

    The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images and videos ... and linked CSS! The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets". Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required. The render tree is laid out in the structure it should appear in after the rules have been applied to it.The visual display of the page is shown on the screen (this stage is called painting).

1. What are new features in CSS3?

    （1）new properties： border-radius property, border-image, shadow, box-shadow, text-shadow;
    (2) new elements selector: [attr^=val] Â- matches a DOM element with the attribute attr and a value starting with val
                                [attr$=val] Â- matches a DOM element with the attribute attr and a value ending with the suffix val
                                [attr*=val] Â- matches a DOM element with the attribute attr and a value containing the substring val

1. What is `rel` means in a `link` tag?

    The 'rel' attribute defines the relationship between the linked resource and the referenced document.

1. Describe all kinds of Selectors in CSS?

    Simple selectors (select elements based on name, id, class. E.g id，class, h1, p, input)
    Combinator selectors (select elements based on a specific relationship between them. E.g p span, p>span, p+span, p~span)
    Pseudo-class selectors (select elements based on a certain state. E.g a:visited, :hover, nth-child)
    Pseudo-elements selectors (select and style a part of an element. E.g p::first-letter, ::before)
    Attribute selectors (select elements based on an attribute or attribute value)

1. How does `@import` work?

    it is used to import style rules from other style sheets. These rules must precede all other types of rules, except @charset rules; as it is not a nested statement, @import cannot be used inside conditional group at-rules. （function as link）

1. Pseudo-class VS Pseudo-elements?

    A pseudo-class is way of selecting certain parts of a HTML document, based in principle not on the HTML document tree itself and its elements or on characteristics like name, attributes or contents, but on other phantom conditions like language encoding or the dynamic state of an element.
    PSEUDO-ELEMENTS are used to address sub-parts of elements. They allow you to set style on a part of an element's content beyond what is specified in the documents. In other words they allow logical elements to be defined which are not actually in the document element tree. Logical elements allow implied semantic structure to be addressed in CSS selectors.


1. Explain CSS specifity?

    CSS Specificity is the set of the rules applied to CSS selectors in order to determine which style is applied to an element. The more specific a CSS style is, the higher point value it accrues, and the likelier it is to be present on the element's style.
    Inline style > Id > Class == Attribute == pseudo-class > simple element
    1000 => 100 => 10 => 1
    !important could override everything.

1. How many ways to make an elements's position is center to its parent elements?

    (1) flex box
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .child-canvas {
        flex-shrink: 0;
    }
    (2) vertically and herizonally center
    .wrapper {
        position: relative;
    }
    .child-canvas {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }
    (3) or in HTML5 in one <session>
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)



1. Give a sample of align-center. (Both block and inline elements)

    the Test.html 

1. Give a sample of verticle-align-center. (Both block and inline elements)

        （1）Use top and bottom padding: 20px 0;
        （2） line-height
        （3） vertical-align: middle;
        （4）parent position: relative; children position: absolute;  
        .child {
                margin: -35px 0 0 -55px; `不太明白 为什么居中了`
            }

1. How to define responsive design by using media queries?

        Responsive web design (RWD) is an approach making web pages render well on a variety of devices and window or screen sizes.
        @media only screen and (max-width: 600px) {
            body {
                properties:
            }
        }

1. Explain BEM?

        BEM — Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development

1. What's the difference between `margin` and `padding`?

    Margin has collapse.
    difference between margin and padding is that while padding deals with the inner space, margin deals with the outer space to the next outer element. margin = space around (outside) the element from border outwards. padding = space around (inside) the element from text to border. 

1. Try to build a triangle using pure CSS.
    HTML
    <body>
        <div class="Triangle"></div>
    </body>
    CSS
    .Triangle{
        width: 0px;
        height: 0px;
        /* background-color: brown; */
        /* border-top: 100px solid greenyellow; */
        border-left: 100px solid transparent;
        border-bottom: 100px solid tomato;
        border-right: 100px solid transparent;
    }


1. Give a sample of CSS animation.
    HTML
    <body>
        <div class="Triangle animated shake"></div>
    </body>
    CSS 
    .Triangle{
        width: 0px;
        height: 0px;
        /* background-color: brown; */
        /* border-top: 100px solid greenyellow; */
        border-left: 100px solid transparent;
        border-bottom: 100px solid tomato;
        border-right: 100px solid transparent;
        animation-delay: 2s;
        animation-iteration-count: infinite;
    }

1. How to clear float problem?

    The most common way to use the clear property is after you have used a float property on an element(match the value of float). 
    Or use overflow: auto;

1. How to use CSS hacks to solve Broswer Compatibility problem? (Especially IE6) 

    CSS hacks is a coding technique used to hide or show CSS markup depending on the browser, version number, or capabilities. Browsers have different interpretations of CSS behavior and different levels of support for the W3C standards. CSS hacks are sometimes used to achieve consistent layout appearance in multiple browsers that do not have compatible rendering. 
    （Pollyfill）

1. rgba vs rgb in `opacity`

    RGB stands for red green blue; it is a approach to represent a color. a stands for alpha, which represent the opacity.

1. Describe the CSS Box Model

    The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. 

    Explanation of the different parts:
    Content - The content of the box, where text and images appear
    Padding - Clears an area around the content. The padding is transparent
    Border - A border that goes around the padding and content
    Margin - Clears an area outside the border. The margin is transparent

1. Why use `reset.css`?

    it is a default templat when users do not set CSS style for some page. Every browser has its own defaults, we can make that default look more consistent across browsers, and thus spend less time fighting with browser defaults. 

1. Explain `margin` collapse?

    The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing.

1. `px` VS `pt` VS `em` and `rem` etc.

    Pixels(px) and pt are referred to as absolute units. 1pt = 1/72th; 1px = 1/96th.
    em and rem are relative units. em is Font size of the element; rem is a unit of typography equal to the HTML root font-size.



1. `position: static` VS `position: relative` (hint: DOM flow)

    They are similar, which means they behave normally, as per their display type layout. 
    The difference is static can not interact with out-of-flow elements, while relative positioned element can be used as a container for out-of-flow children elements. The out-of-flow positioned elements will respect the box boundaries of the relatively positioned element.

1. `position: fixed` VS `position: sticky`
    position: fixed always fixates an element to some position within its scrolling container or the viewport. No matter how you scroll its container, it will remain in the exact same position and not affect the flow of other elements within the container.
    An element with sticky position is positioned based on the user's scroll position. it basically acts like position: relative until an element is scrolled beyond a specific offset, in which case it turns into position: fixed. When it is scrolled back it gets back to its previous (relative) position.



---

### Assignment

1. Add styles to `Assignment-Form.html`. (requirements: using `flex` only) (see: dva89.me/contact)

Assignment1-Form.html


2. The 9 gird. (requirements: using `grid` only) (see: grid-sample.zip)

Assignment2-Grid.html