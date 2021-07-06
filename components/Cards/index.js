// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((data) => {
        console.log('Article Data Received');
        data.data.articles.javascript.forEach(array => {
            let javascriptArticle = articleCreator(array.headline, array.authorName, array.authorPhoto);
            javascriptArticle.dataset.articleTopic = 'javascript';
            cardsContainer.appendChild(javascriptArticle);
        });
        data.data.articles.bootstrap.forEach(array => {
            let bootstrapArticle = articleCreator(array.headline, array.authorName, array.authorPhoto);
            bootstrapArticle.dataset.articleTopic = 'bootstrap';
            cardsContainer.appendChild(bootstrapArticle);
        });
        data.data.articles.technology.forEach(array => {
            let technologyArticle = articleCreator(array.headline, array.authorName, array.authorPhoto);
            technologyArticle.dataset.articleTopic = 'technology';
            cardsContainer.appendChild(technologyArticle);
        });
        data.data.articles.jquery.forEach(array => {
            let jqueryArticle = articleCreator(array.headline, array.authorName, array.authorPhoto);
            jqueryArticle.dataset.articleTopic = 'jquery';
            cardsContainer.appendChild(jqueryArticle);
        });
        data.data.articles.node.forEach(array => {
            let nodeArticle = articleCreator(array.headline, array.authorName, array.authorPhoto);
            nodeArticle.dataset.articleTopic = 'node.js';
            cardsContainer.appendChild(nodeArticle);
        });
    })
    .catch((error) => {
        console.log('Article Data Not Available');
    })

function articleCreator (headlineItem, authorName, authorPhoto) {

    const newCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImage = document.createElement('img');
    const byLine = document.createElement('span');

    newCard.appendChild(headline);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(byLine);
    imgContainer.appendChild(authorImage);

    newCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = headlineItem;
    authorImage.src = authorPhoto;
    byLine.textContent = `By ${authorName}`;

    return newCard
}

const cardsContainer = document.querySelector('.cards-container');