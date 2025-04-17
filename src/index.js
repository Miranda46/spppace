import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

let bg = document.querySelector('body main')

document.addEventListener('scroll', () => {        
  let x = window.pageYOffset
  bg.style.backgroundSize = ''+(130 + x/10)+'% 100%'
})