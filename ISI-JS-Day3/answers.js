// ---
// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
let popUp;
function openNewWindow(){
    
    popUp =  window.open("http://127.0.0.1:5500/ISI-JS-Day3/about.html", "myPopPage", 
                                "width=600, height=500, left=500, top=700, resizable=yes, scrollable=yes")
    popUp.onload = () => {
        popUp.document.body.innerHTML += "<h2>Hello from parent</h2>";
    };
    
}

// close window 
function closeNewWindow(){
    if (popUp && !popUp.closed){
        popUp.close();

    }
}

// 2. Display the browser's user agent string in an alert.

// alert(
//     "user agent is " +  navigator.userAgent
// )

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
console.log(`browser is online ${navigator.onLine}`);

// 4. Write code to reload the current page after 5 seconds.

let reloadTimeOut = setTimeout(function(){
    location.reload()
    console.log("page reloaded")
}, 2000)

clearTimeout(reloadTimeOut)
// 5. Get the current page URL, protocol, and hostname using `location` and log them.
console.log(location.href);
console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).

// history.back(), history.forward()

// 7. Show the screen width and height in a div -change the div content- on the page.

// create div
// add on it h2 contain the screen width and height
// append it to the page 

let newDive = document.createElement("div");
newDive.classList.add("new-div");
newDive.innerHTML = "<h2> screen hello from new div</h2>"

document.body.appendChild(newDive)

let h2Tage = document.createElement("h2");
h2Tage.innerText = "New h2 before first form"
document.forms[0].before(h2Tage)

// 8. Use `setTimeout` to change the content of a hyperlink -a-
//  with a new content after 2 seconds, and provide a button to cancel it.

let hyperLink = document.links[0]

let changeConternt = setTimeout(
    function(){
        hyperLink.textContent="new content"
    }, 2000)

let btn = document.createElement("button")
btn.textContent = "cancle change"
hyperLink.before(btn)

btn.onclick =  function(){
    clearTimeout(changeConternt);
    alert(
        "chages was cancled"
    )
}

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.

// let changeTime = setInterval(
//     function(){
//         document.title = new Date().toLocaleTimeString()
//     }, 1000
// )

// let btn2 = document.createElement("button")
// btn2.textContent = "stop time change"
// document.forms[0].before(btn2)

// btn2.onclick =  function(){

//     clearInterval(changeTime);
//     alert(
//         "chages was cancled"
//     )
// }


// 10. Show a confirm dialog asking "Do you want to continue?"
//  and log the user's choice("user said yes", "user said no").

// let confirmResult = confirm("Do you want to continue?");
// console.log(confirmResult? "user said yes": "user said no");


// ---
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its 
// `childNodes` and `children` properties. Explain the difference in a comment.

let uList = document.querySelector('ul');
console.log(uList.childNodes);
console.log(uList.children);


// 12. Write a function that logs the tag names of all direct child elements of `<body>`.

function logChildren(ele){
    let directChilds = window.document.body.children
    for (ele of directChilds){
        console.log(ele.tagName);
        
    } 
}

logChildren();

// 13. Given a parent element, loop through its `childNodes` 
// and log only the nodes that are elements (not text/comments).

function logElements(parent){
    for (let node of parent.childNodes){
        if(node.nodeType === 1){
            console.log(node.tagName);
            
        }
        }
    }


logElements(document.body);

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.

console.log(`first child in body ${document.body.firstChild}`);
console.log(`first element child in body ${document.body.firstElementChild}`);


// 15. Write code to get all `<li>` elements inside a
//  `<ul>` using `children` and explain the difference.


// 17. Write a function that logs all sibling elements of a given element (excluding itself).

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child 
// to the last child of a `<ul>`, logging each node.


// 19. Count how many element children a given node has (not using `children.length`).

// 20. Write a function that takes the first form element and 
// logs the names and values of all its input fields using the `elements` collection.


// 21. Access all forms in the document using `document.forms` and log their names.


// 22. Access all images in the document using `document.images` and log their `src` attributes.

// 23. Write a function that takes a form and disables all its input fields u
// sing the `elements` collection.

// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.

// ---
