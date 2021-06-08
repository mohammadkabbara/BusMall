
'use strict';



let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');

let rightImageElement = document.getElementById('right-image');


let allImageElement = document.getElementById('images-div');



let maxAttempts =25;
let userAttemptsCounter = 0;
let userView = 0;



let leftImageIndex;
let middleImageIndex;
let rightImageIndex;



let productNames=[];
let votes=[];
let viwes=[];
let productArray =[]




function generateRandomIndex() {

    return Math.floor(Math.random() * Product.allProducts.length);
}




function Product(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.viwes = 0;
    productNames.push(this.name);
    Product.allProducts.push(this);
    
}


Product.allProducts = [];


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


    

    leftImageIndex = generateRandomIndex();

    middleImageIndex = generateRandomIndex();

    rightImageIndex = generateRandomIndex();
    
    

    
while ((leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || middleImageIndex === rightImageIndex  ) || (productArray.includes(leftImageIndex) || productArray.includes(rightImageIndex)||productArray.includes(middleImageIndex))) {





        rightImageIndex = generateRandomIndex();
        middleImageIndex = generateRandomIndex();
        leftImageIndex = generateRandomIndex();
}


productArray=[];
productArray.push(leftImageIndex);
productArray.push(rightImageIndex);
productArray.push(middleImageIndex);

console.log(leftImageIndex,rightImageIndex,middleImageIndex);


    
    

    leftImageElement.src = Product.allProducts[leftImageIndex].source;
    Product.allProducts[leftImageIndex].viwes++;

    middleImageElement.src = Product.allProducts[middleImageIndex].source;
    Product.allProducts[middleImageIndex].viwes++;

    rightImageElement.src = Product.allProducts[rightImageIndex].source;
    Product.allProducts[rightImageIndex].viwes++;
    



}


renderThreeImages();

allImageElement.addEventListener('click', userClick);

function userClick(event) {

    userAttemptsCounter++;
    if (userAttemptsCounter <= maxAttempts) {
        if (event.target.id === 'left-image') {
            Product.allProducts[leftImageIndex].votes++

        } else if (event.target.id === 'middle-image') {
            Product.allProducts[middleImageIndex].votes++

        } else if (event.target.id === 'right-image') {

            Product.allProducts[rightImageIndex].votes++

        } else {
            alert('please click on the images');
            userAttemptsCounter--;

        }


        // console.log(Product.allProducts);
        renderThreeImages();
        transformArray(); //called function I made it to change array to string

    } else {

        alert(' you voted 25 times ,click on buttun to show a result ');

        let button=document.getElementById('button');
        button.hidden=false;
        
        button.addEventListener('click', resultButton);
        

        allImageElement.removeEventListener('click', userClick);

        for (let i = 0; i < Product.allProducts.length; i++) {

            votes.push(Product.allProducts[i].votes);
            viwes.push(Product.allProducts[i].viwes);
          }
          chart();
    }
}

transformString(); 

function resultButton() {


    let list = document.getElementById('results-list');
    for (let i = 0; i < Product.allProducts.length; i++) {
        let productResult = document.createElement('li');
        list.append(productResult);
        productResult.textContent = `${Product.allProducts[i].name}  has ${Product.allProducts[i].votes}   Votes and the has viwes ${Product.allProducts[i].viwes}  ones`;


    }


    // button.removeEventListener('click', resultButton);
    button.hidden=true;

    

}


function chart() {
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:productNames,
            datasets: [{
                label: '# of Votes',
                data:votes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
              label: '# of Shown',
              data:viwes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }
          ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
      
  }



  function transformArray(){  // function to change array to string
      let msgArray = JSON.stringify(Product.allProducts);
    //   console.log(msgArray);
      localStorage.setItem('product' ,msgArray);
    //   console.log(setItem);

  }

  function transformString(){  //function to change again string to array
      let data= localStorage.getItem('product');
      let productData =JSON.parse(data);
      if(productData!==null){
          Product.allProducts=productData;
      }
      renderThreeImages();


  }

  transformString();
  console.log(Product.allProducts);





