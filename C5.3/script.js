let button = document.querySelector("button");
let input = document.querySelector("input");

function loadJson(url){
  let xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.onload = function(){
    let json = JSON.parse(xhr.response);
    displayJson(json);
  };
  xhr.send();
}

function displayJson(json){
  let content = "";
  for(let img of json){
    let image = `
    <div>
      <img src="${img.download_url}"></img>
      <p>${img.author}</p>
    </div>
    `;
    content += image;
  }
  document.querySelector("#images").innerHTML = content;
}

button.addEventListener("click", function(){
  let number = input.value;
  if(number <= 10 && number >= 1){
    url = `https://picsum.photos/v2/list?limit=${number}`;
    loadJson(url);
  }
  else{
    console.log("error");
  }
});