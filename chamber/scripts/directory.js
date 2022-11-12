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
    portrait.setAttribute('alt', company.imageurl);
    portrait.setAttribute('loading', 'lazy');
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