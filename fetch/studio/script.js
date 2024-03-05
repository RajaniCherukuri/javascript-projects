//TODO: Add Your Code Belo


window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
response.json().then(function(json) {
const container = document.getElementById("container");
for(let i = 0; i < JSON[i].lastName; i++)

let i = 0;
destination.addEventListener("click", function(){
destination.innerHTML = `
<div>
   <h3>Name ${json[i].firstName}</h3>
   <h3>Name ${json[i].lastName}</h3>
   <h3>Name ${json[i].lastName}</h3>
   <h3>Name ${json[i].lastName}</h3>
   <h3>Name ${json[i].lastName}</h3>
   <img src=${json[i].image} height=250></img>
</div>
`;
index = (index + 1) % json.length;
});
});
});


        });   