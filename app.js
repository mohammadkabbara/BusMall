
'use strict';



let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');

let rightImageElement = document.getElementById('right-image');


let allImageElement = document.getElementById('images-div');



let maxAttempts = 25;
let userAttemptsCounter = 0;
let userView = 0;



let leftImageIndex;
let middleImageIndex;
let rightImageIndex;


// let busMallImages = [
//     'bag.jpg',
//     'banana.jpg',
//     'bathroom.jpg',
//     'boots.jpg',
//     'breakfast.jpg',
//     'bubblegum.jpg',
//     'chair.jpg',
//     'cthulhu.jpg',
//     'dog-duck.jpg',
//     'dragon.jpg',
//     'pen.jpg',
//     'pet-sweep.jpg',
//     'scissors.jpg',
//     'shark.jpg',
//     'sweep.png',
//     'tauntaun.jpg',
//     'unicorn.jpg',
//     'usb.gif',
//     'water-can.jpg',
//     'wine-glass.jpg',

// ];

function generateRandomIndex() {

    return Math.floor(Math.random() * Product.allProducts.length);
}




function Product(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.viwes = 0;
    Product.allProducts.push(this);
}


Product.allProducts = [];

// for(i=0;i<busMallImages.length;i++){
//     new Product(busMallImages[i]);
// }


new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.jpg');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.jpg');
new Product('water-can', 'img/water-can.jpg');




function renderThreeImages() {


    // allImageElement =generateRandomIndex();

    leftImageIndex = generateRandomIndex();

    middleImageIndex = generateRandomIndex();

    rightImageIndex = generateRandomIndex();






    while ((leftImageIndex === rightImageIndex) || (leftImageIndex === middleImageIndex) || (middleImageIndex === rightImageIndex)) {
        rightImageIndex = generateRandomIndex();
        middleImageIndex = generateRandomIndex();
        // leftImageIndex=generateRandomIndex();



    }
    // while ((leftImageIndex===rightImageIndex) || (leftImageIndex===middleImageIndex) || (middleImageIndex===rightImageIndex) ) {
    //     rightImageIndex=generateRandomIndex();
    //     middleImageIndex=generateRandomIndex();

    //   }

    // console.log(Product.allProducts[middleImageIndex, leftImageIndex].source);


    leftImageElement.src = Product.allProducts[leftImageIndex].source;
    Product.allProducts[leftImageIndex].viwes++;

    middleImageElement.src = Product.allProducts[rightImageIndex].source;
    Product.allProducts[middleImageIndex].viwes++;

    rightImageElement.src = Product.allProducts[rightImageIndex].source;
    Product.allProducts[rightImageIndex].viwes++;
    // // allImageElement.src =Product.allProducts[allImageElement].source;







}
renderThreeImages();

// leftImageElement.addEventListener('click', userClick);
// middleImageElement.addEventListener('click', userClick);
// rightImageElement.addEventListener('click', userClick);
allImageElement.addEventListener('click' , userClick);


let button = document.getElementById('results-list');
button.addEventListener('click', userClick);




function userClick(event) {
    // viwes ++;
    userAttemptsCounter++;
    if (userAttemptsCounter <= maxAttempts) {
        if (event.target.id === 'left-image') {
            Product.allProducts[leftImageIndex].votes++
            // Product.allProducts[leftImageIndex].viwes++
        } else if (event.target.id === 'middle-image') {
            Product.allProducts[middleImageIndex].votes++
            // Product.allProducts[middleImageIndex].viwes++
        } else {
            (event.target.id === 'right-image')
            Product.allProducts[rightImageIndex].votes++
            // Product.allProducts[rightImageIndex].viwes++
        }


        console.log(Product.allProducts);
        renderThreeImages();

    } else {

        alert(' you voted 25 times ,click on buttun to show a result ');
        document.getElementById("btn").onclick = function () { resultButton() };

        

        // leftImageElement.removeEventListener('click', userClick);
        // middleImageElement.removeEventListener('click', userClick);
        // rightImageElement.removeEventListener('click', userClick);
        allImageElement.aremoveEventListener('click' , userClick);
    }
}



function resultButton() {


    let list = document.getElementById('results-list');
    for (let i = 0; i < Product.allProducts.length; i++) {
        let productResult = document.createElement('li');
        list.appendChild(productResult);
        productResult.textContent = `${Product.allProducts[i].name}  has ${Product.allProducts[i].votes}   Votes and the has viwes ${Product.allProducts[i].viwes}  ones`;


    }


    console.log(makeClick);

    // leftImageElement.removeEventListener('click', userClick);
    // middleImageElement.removeEventListener('click', userClick);
    // rightImageElement.removeEventListener('click', userClick);





    userClick();
}



