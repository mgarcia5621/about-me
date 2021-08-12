const cards = [
    {
        id: 1,
        title: 'Goku',
        subtitle: 'Goku, sent from Plant Vegeta',
        cardImage: 'gokuposing.jpg',
        cardInfo: 'His father Bardock and Mother Gine send Goku to planet Earth, Goku is then raised by Gohan.Goku trains for years to attend to a fighting contest, the strongest wins! years go by and Goku reaches Super Saiyan for the first time on Planet Namek.Goku fights numerous openents'
    },
    {
        id: 2,
        title: 'Frieza',
        subtitle: 'Goku, sent from Planet Vegeta',
        cardImage: 'friezza.jpg',
        cardInfo: 'Frieza was the emperor of the universe, who controlled his own imperial army and was feared for his ruthlessness and power, but was taken out of power when he was killed by Future Trunks & Goku. Later he was revived to have his vengeance but failed again'
    },
    {
        id: 3,
        title: 'Buu',
        subtitle: "Majin Buu, created by the wizard Babidi's father",
        cardImage: 'Kidbuu.jpg',
        cardInfo: 'Majin Buu is a genie-like magical life form awoken by the evil warlock Bibidi that terrorized galaxies by destroying entire planets, millions of years before the events of Dragon Ball take place. He was temporarily sealed away and brought to Earth; however, Bibidi was killed and Buu remained hidden.'
    },
    {
        id: 4,
        title: 'Bardock',
        subtitle: "Goku's father",
        cardImage: 'bardock.png',
        cardInfo: 'He has appeared in several modern Dragon Ball games. He is also father to Raditz and grandfather to Gohan and Goten. His love interest is Gine and Chichi is his daughter-in-law. He is the great-grandfather of Pan.'
    }
];

function getCards() {
    let card = document.querySelector('.owl-carousel');

    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement('DIV');
        div.classList.add('card');
        div.classList.add(`card${cards[i].id}`);

        div.innerHTML = `
            <div class="card-text">
                <p>${cards[i].title}</p>
                <h1>${cards[i].subtitle}</h1>
            </div>
            <img class="card-img" src="./images/${cards[i].cardImage}" alt="${cards[i].title}" />
            <div class="card-info">${cards[i].cardInfo}</div>
        `;

        card.appendChild(div);
    }
};

getCards();