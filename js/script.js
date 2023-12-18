




const imgArray = [
    './img/01.webp',  
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
];

console.log('imgArray', imgArray , imgArray.length, typeof imgArray)


const contenitoreImg = document.querySelector('.contenitoreimg')

for (let i = 0; i < imgArray.length; i++) {

    if (i == 0){
        contenitoreImg.innerHTML += `
                                    <div class="item active"> 
                                        <img src="${imgArray[i]}" alt="img">
                                    </div>
                                    `;
    }
    else {
        contenitoreImg.innerHTML += `
                                    <div class="item"> 
                                        <img src="${imgArray[i]}" alt="img">
                                    </div>
                                    `;
    }                                
   
}


const buttonUp = document.querySelector('#up');
console.log(buttonUp);

const buttonDown = document.querySelector('#down');
console.log(buttonDown);


const allItems = document.querySelectorAll('.item')
console.log(allItems)

let immagineActive = 0;

let carosel = setInterval(myfunction, 3000);

function myfunction(){

    allItems[immagineActive].classList.remove('active');

    immagineActive ++;

    allItems[immagineActive].classList.add('active');

}

const stop = document.getElementById('stop')

stop.addEventListener('click', function(){

    clearInterval(carosel)

});


/* buttonDown.addEventListener('click' , function() {

    allItems[immagineActive].classList.remove('active');

    immagineActive ++;

    allItems[immagineActive].classList.add('active');
}); */


buttonUp.addEventListener('click' , function() {

    allItems[immagineActive].classList.remove('active');

    immagineActive --;

    allItems[immagineActive].classList.add('active');
});



console.log(this);