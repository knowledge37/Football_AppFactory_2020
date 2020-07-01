const url='https://api.wheretheiss.at/v1/satellites';

async function getData(){
    const resp= await fetch(url);

    const data=JSON.parse(resp);
    console.log(data)
const {latitude,longitude}=data;
document.getElementById('lat').textContent=latitude;
document.getElementById('lon').textContent=longitude;
}

getData();
// selector
let player1 = document.querySelector('#player1');

//storage
let arrayPlayer=[];

//default loader
window.addEventListener('DOMContentLoaded',(e)=>{
    getInfo();
});

// method for a request
function getInfo(){
    while (getInfo.hasChildNodes()) {
        getInfo.removeChild(getInfo.lastChild)
    }
  const request = new XMLHttpRequest();
   request.open("GET",'https://api.wheretheiss.at/v1/satellites');

   request.onload = function(){
    let ladumaNews = JSON.parse(request.responseText);
    arrayPlayer = ladumaNews.arrayPlayer;
   }
    arrayPlayer = ladumaNews.arrayPlayer;
    articles.forEach(article => {

        let card = document.createElement('div');
        card.classList.add('card'); 
        card.style.width = '70%'; 
        card.style.margin = '5% 0 0 0'
        card.style.border = '1px solid #CFD8DC'
        card.style.borderRadius = '5px';
        let cardImage = document.createElement('img'); 
        cardImage.classList.add('card-img-top'); 
        cardImage.src = article.urlToImage;
        cardImage.style.width = '100%';
        card.appendChild(cardImage);
        let cardBodyTitle = document.createElement('h6');
        cardBodyTitle.classList.add('card-title'); 
        cardBodyTitle.textContent = article.title;
        cardBodyTitle.style.padding
        let cardBodyText = document.createElement('h6');
        cardBodyText.classList.add('card-text'); 
        cardBodyText.textContent = article.content;
        let cardBody = document.createElement('div');
        cardBody.classList.add = "card-body";
        cardBody.style.margin = '0.5em';
        // cardBody.style.textAlign = 'center';
        let button = document.createElement('a');
        button.style.textAlign = 'center';
        button.href = article.url;
        button.style.position = 'absolute'; 
        button.style.bottom = 0;
        button.style.textDecoration = 'underline';
        button.innerHTML = '<i class="fas fa-link"></i>'+'Read more';
        cardBody.appendChild(cardBodyTitle);
        cardBody.appendChild(cardBodyText);  
        cardBody.appendChild(button);
        card.appendChild(cardBody);
        
       healths.append(card);
    });



request.send(null);
       
}