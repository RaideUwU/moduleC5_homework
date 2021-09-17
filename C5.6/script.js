let button = document.querySelector("button");

let firstNum = document.querySelector("#first-num");
let secondNum = document.querySelector("#second-num");

function displayImage(n1, n2){
  let image = `
  <div>
    <img width=${n1} height=${n2} src="https://picsum.photos/${n1}/${n2}"></img>
  </div>
  `;
  document.querySelector("#images").innerHTML = image;
}

button.addEventListener("click", function(){
  let n1 = Number(firstNum.value);
  let n2 = Number(secondNum.value);
  if(n1 >= 100 && n1 <= 300 && n1 >= 100 && n1 <= 300){
    displayImage(n1, n2);
  } else {
    console.log("Value Error");
  }
});