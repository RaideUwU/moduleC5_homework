let pageElement = document.querySelector("#page");
let limitElement = document.querySelector("#limit");
let button = document.querySelector("#request");

if(localStorage.getItem("json")){
  displayJson(JSON.parse(localStorage.getItem("json")));
}

function getPromise(){
  let page = Number(pageElement.value);
  let limit = Number(limitElement.value);
  
  let promise = new Promise((resolve, reject) => {
    if(!(page >= 1 && page <= 10) && !(limit <= 10 && limit >= 1)){
      reject("Номер страницы и лимит вне диапазона от 1 до 10");
    }
    else if(!(page >= 1 && page <= 10)){
      reject("Номер страницы вне диапазона от 1 до 10");
    }
    else if(!(limit <= 10 && limit >= 1)){
      reject("Лимит вне диапазона от 1 до 10");
    }
    else{
      resolve({
        page: page,
        limit: limit
      });
    }
  });
  return promise;
}

function displayJson(json){
  localStorage.clear();
  localStorage.setItem("json", JSON.stringify(json));
  let content = "";
  for(let img of json){
    let image = `
    <div>
      <img class="json-img" src="${img.download_url}"></img>
      <p>${img.author}</p>
    </div>
    `;
    content += image;
  }
  document.querySelector("#images").innerHTML = content;
}

button.addEventListener("click", function(){
  let promise = getPromise();
  promise
  .then((initRes) => {
    fetch(`https://picsum.photos/v2/list?page=${initRes.page}&limit=${initRes.limit}`)
    .then(response => response.json())
    .then(data => displayJson(data));
  })
  .catch((error) => {
    console.log(error);
  })
});