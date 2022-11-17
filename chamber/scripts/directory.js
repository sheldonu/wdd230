const requestURL = 'https://sheldonu.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

function displayProphets(company) {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
    let website = document.createElement('a');
    let member = document.createElement('h3')
  
    
    h2.textContent = company.name;
    address.textContent = company.address
    phone.textContent = company.phonenumber
    website.textContent = company.websiteurl

  
    
    portrait.setAttribute('src', company.imageurl);
    website.setAttribute('href', company.websiteurl)
  
    
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    
    
  
    
    document.querySelector('div.cards').appendChild(card);
  }

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    console.table(jsonObject); 
    companies.forEach(displayProphets);
    
  });

  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
