// Create grid
// let square = document.querySelector('.grid');

// for (let i = 1; i <= 81; i++) {
//     let gridDiv = document.createElement('div');
//     square.appendChild(gridDiv);
// }

// for (let i = 0; i < square.length; i++) {
//     if (i % 2 === 0) {
//         square[i].classList.add('even')
//     } else {
//         square[i].classList.add('odd')
//     }
// }

// const nightClubRegister = [
//     {
//         name: 'Ahmed',
//         lastname: 'Abdool',
//         age: 25,
//         gender: 'male',
    
//     },
//     {
//         name: 'Sally',
//         lastname: 'Morgan',
//         age: 18,
//         gender: 'female', 
//     },
//     { 
//         name: 'Dionne',
//         lastname: 'Brown',
//         age: 29,
//         gender: 'female',
//     },
//     {
//         name: 'Max',
//         lastname: 'Forrester',
//         age: 20,
//         gender: 'male'   
//     }
// ]

// for (let i = 0; i < nightClubRegister.length; i++) {
//     if (nightClubRegister[i].age < 21) {
//         if (nightClubRegister[i].gender == 'male') {
//             console.log('Sorry Mr. ' + nightClubRegister[i].lastname + ', you are not old enough to attend.');
//         }
//         if (nightClubRegister[i].gender === 'female') {
//             console.log('Sorry Mrs. ' + nightClubRegister[i].lastname + ', you are not old enough to attend.');
//         }
//         if (nightClubRegister[i].age>= 21) {
//             if(nightClubRegister[i].gender === 'male') {
//                 console.log('Welcome Mr ' + nightClubRegister[i].lastname + ', you are on the list!')
//                 if (nightClubRegister[i].gender === 'female') {
//                 console.log('Welcome Mrs ' + nightClubRegister[i].lastname + ', you are on the list!')
//                 }
//             }
//         }
//     }
// }

// const tableNumbers = ['5','14','7','10','20','11','12','15','3']
// for (let i = 0; i <tableNumbers.length; i++) {
//     if (tableNumbers[i] % 2 === 0 ){
//         console.log(tableNumbers[i])
        
//     }
// }
// const people = 56

// for (let i = 0; i <=people; i++) {
//     if(i % 2 === 0) {
//         console.log('Person'+ i + 'is on the blue team')
//     } else {
//         console.log('Person'+ i +' is on the red team')
//     }
// }

const sideImages = [
    "house-view.png", "village-view.png"
]

// const imageExpand = (image) => {
//     let modalImg = document.querySelector('.modal-image-container')
//     // Get the modal to display larger image
//     let modal = document.getElementById('myModal')
//     let captionText = document.getElementById('caption')
//     modal.style.display = 'block'

//     // sideImages.forEach(image => {
        
//     // }) 

//     let modalImages = `
//         <img src="/images/${image}" alt="${image}">
//         `
//         modalImg.innerHTML = modalImages
//         captionText.textContent = `${image}`  
// }

// sideImages.forEach((image, key) => {
//     let imageViews = `
//     <img class="clickable-image" src="/images/${image}" alt="${image}">`

//     let selectedImage = document.querySelectorAll('clickable-image')
//     selectedImage.addEventListener('click', function(e) {
//         e.preventDefault()
//         console.log('clicked!!!!')
//     })

//     let imageContainer = document.getElementById('image-container')
//     imageContainer.innerHTML += imageViews
// })

for (let i = 0; i < sideImages.length; i++) {
    const element = sideImages[i];
    
    let imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML += `<img class="clickable-image" src="/images/${element}" alt="${element}">`
}

let selectedImage = document.querySelectorAll('.clickable-image')

for (let i = 0; i < selectedImage.length; i++) {
    const element = selectedImage[i];
    element.addEventListener('click', (e) => {
        let modalImg = document.querySelector('.modal-image-container')
        // Get the modal to display larger image
        let modal = document.getElementById('myModal')
        let captionText = document.getElementById('caption')
        modal.style.display = 'block'

        modalImg.innerHTML = `<img src="/images/${element}" alt="${element}">`
        captionText.textContent = `${element}`
    })
}



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => { 
    let modal = document.getElementById('myModal')
    modal.style.display = "none";
}   

