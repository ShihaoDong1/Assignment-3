const contain = document.getElementById("container"); //Question 1
console.log(contain); //Question 2
console.log(document.querySelector("section")); // Question 3
console.log(document.querySelectorAll(".second")); //Question 4
console.log(document.getElementsByTagName("ol")[0].children[2]); //Question 5
contain.textContent = "Hello"; //Question 6
document.getElementsByTagName("div")[1].classList.add("main") //Question 7
document.getElementsByTagName("div")[1].classList.remove("main") //Question 8
let lee = document.createElement("li");
lee.innerText = "four";
document.getElementsByTagName("ul")[0].appendChild(lee);