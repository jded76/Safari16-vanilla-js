const div1 = document.getElementById('div1');
const template = document.getElementById('tmpl');
const fragment = template.content;
const span = fragment.firstElementChild;

span.innerText = "test p";
console.log("fragment initial", fragment.ownerDocument.URL);
console.log("span initial", span.ownerDocument.URL);

const firstChild = fragment.firstChild;
const lastChild = fragment.lastChild;

const adapted = document.adoptNode(fragment);
console.log("fragment after adoptNode", fragment.ownerDocument.URL);
console.log("adapted after adoptNode", adapted.ownerDocument.URL);
console.log("span after adoptNode", span.ownerDocument.URL);


div1.innerText = "234";

function add() {

    div1.appendChild(adapted);
    console.log("fragment after appendChild", fragment.ownerDocument.URL);
    console.log("adapted after appendChild", adapted.ownerDocument.URL);
    console.log("span after appendChild", span.ownerDocument.URL);

    console.log("div1 children", div1.children);
    console.log("fragment children", fragment.children);
}

function remove() {

    const myId1 = $("#myId1");
    const myId2 = $("#myId2");
    
    let current = firstChild;
    let end = lastChild;
    let next;

    while (current) {
      next = current.nextSibling;
      fragment.appendChild(current);

      if (current === end) {
        break;
      }

      current = next;
    }

    console.log("fragment after remove", fragment.ownerDocument.URL);
    console.log("adapted after remove", adapted.ownerDocument.URL);
    console.log("span after remove", span.ownerDocument.URL);

    console.log("div1 children", div1.children);
    console.log("fragment children", fragment.children);

    myId1.insertBefore(myId2);
}
