import {myName,page} from './loadPage';


function component() {
    const element = document.createElement('div');
  
    // use your function!
    element.textContent = myName('Jorge');
    return element;
  }
  
  document.body.appendChild(component());
page();
console.log("HI");