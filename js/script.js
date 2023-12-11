


const buttonUp = document.getElementById('up');
console.log(buttonUp);

const buttonDown = document.getElementById('down');
console.log(buttonDown);

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

buttonDown.addEventListener('click' , function() {


});

