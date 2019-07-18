
"use strict";

let myTopic, myCategory;

myTopic = "country=in&", myCategory = "category=general&";
const list = document.querySelector(".list");

const theCntry = document.getElementById("slct_cntry");

theCntry.addEventListener("change", function() {
  list.innerHTML = " ";

    myTopic = theCntry.value, myFunction()
});

const theCategory = document.getElementById("slct_category");

theCategory.addEventListener("change", function() {
  list.innerHTML = " ";
    myCategory = theCategory.value, myTopic = theCntry.value, myFunction()
});



function myFunction() {
  
  let url="https://newsapi.org/v2/top-headlines?" + myTopic + myCategory + "apiKey=b239337e7bb5435ea0f696ca87535274";
      
  let req = new Request(url);
 fetch(req).then(res=>res.json()).then(data=> data.articles).then(articles => articles.map((item) => 
 {list.innerHTML +=
` <li> <br> <div class="one"> <img src="${!item.urlToImage?'':item.urlToImage}" > </div> <br> <div class="two"><h2> ${!item.title?'':item.title} </h2> <br>
${!item.author ? '' : item.author} <br>
${!item.content?'':item.content}<br>
<a href="${!item.url?'':item.url}" target="_blank" > ${!item.description?'':item.description} </a><br>
 <br>  </div> 
</li> <br> <hr>
`
 }
));
   
    }

myFunction();

















