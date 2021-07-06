// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((data) => {
        console.log('Tabs Data Received', data);
        data.data.topics.forEach((topic) => {
            let newTab = tabCreator(topic);
            newTab.classList.add(`${topic}`);
            topicsContainer.appendChild(newTab);
            newTab.addEventListener('click', (event) => {
                let cards = document.querySelectorAll('.card');
                cards.forEach((card) => {
                    if (card.dataset.articleTopic !== `${topic}`) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'flex';
                    }
                })
            })
        });
    })
    .catch((error) => {
        console.log('Tabs Data Not Available');
    })

function tabCreator (topic) {

    const newTab = document.createElement('div');

    newTab.classList.add('tab');

    newTab.textContent = topic;

    return newTab
}

let topicsContainer = document.querySelector('.topics');