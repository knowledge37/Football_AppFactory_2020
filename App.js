// getting dom by id
const app = document.getElementById('myApi')

// getting dom by id
const logo = document.createElement('img')
logo.src = 'img/images (4).jpeg'

//creating a container to hold a div element
const container = document.createElement('div')
container.setAttribute('class', 'container')

//appending Child(logo)
app.appendChild(container)

//creating a http request placeholder and assigning the link to api using the GET method
var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // accessing JSON data  
  var data = JSON.parse(this.response)
  //checking if the request is suceeful 
  if (request.status >= 200 && request.status < 400) {
    data.forEach((data) => {
      //creating a card to hold the context
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      // element to display the data 
      const h1 = document.createElement('h1')
      h1.textContent = data.title
      //cerating a paragraph 
      const p = document.createElement('p')
      data.description = data.description.substring(0, 300)
      p.textContent = `${data.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('knowledge')
    errorMessage.textContent = `error!`
    app.appendChild(errorMessage)
  }
}

request.send()