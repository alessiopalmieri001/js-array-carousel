


const buttonUp = document.getElementById('up');
console.log(buttonUp);

const buttonDown = document.getElementById('down');
console.log(buttonDown);

const imgArray = [
    '01.webp',  
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let nWebp = '';


for (let i = 0; i < imgArray.length; i++) {
    nWebp += `
                
                    <img src="./img/${ imgArray[i] }">
                    <button id="up">
                    <i class="fa-solid fa-chevron-up"></i>
                    </button>
                    <button id="down">
                    <i class="fa-solid fa-chevron-down"></i>
                    </button>
                
            `;
    
};

const contenitoreImg = document.querySelector('.contenitoreimg').innerHTML = nWebp;

