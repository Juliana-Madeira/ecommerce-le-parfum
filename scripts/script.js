// Carousel index.html
const carousel = document.querySelector('.carousel');
arrowIcons = document.querySelectorAll('.wrapper i');   //todos que tiverem classe wrapper e icon i
firstImg = document.querySelectorAll('img')[0]   //a primeira desse array de imagens

let firstImgWidth = firstImg.clientWidth + 12   //margin left 12 px dada nas imagens

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        console.log('cliquei nos icons');
        carousel.scrollLeft += icon.id == 'left' ? - firstImgWidth : firstImgWidth
    })
})


let isDragStart = false;

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX - firstImgWidth;
}

const dragStart = () => {
    isDragStart = true
}

const dragStop = () => {
    isDragStart = false
}

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStart);



// THUMBNAILS - PRODUCT
//pegamos a imagem main do produto
const mainImg = document.getElementById("mainImg");   


//pegamos todas as imagens que são os nossos thumbs
//pegamos os thumbs e indicamos que queremos usar o src
const thumb1 = document.getElementById("thumb1");  
const thumb1Src = document.getElementById("thumb1").src;

const thumb2 = document.getElementById("thumb2");  
const thumb2Src = document.getElementById("thumb2").src;

const thumb3 = document.getElementById("thumb3");  
const thumb3Src = document.getElementById("thumb3").src;

//event listener em cada thumb, cada id (addEventListener recebe um evento e sua função)
thumb1.addEventListener("click", () => {
    console.log('cliquei no thumb1');
    mainImg.src = thumb1Src;               //indicamos que o src da mainImg é o mesmo que o src de cada respectivo thumb
})

thumb2.addEventListener("click", () => {
    console.log('cliquei no thumb2');
    mainImg.src = thumb2Src;               //indicamos que o src da mainImg é o mesmo que o src de cada respectivo thumb
})

thumb3.addEventListener("click", () => {
    console.log('cliquei no thumb3');
    mainImg.src = thumb3Src;               //indicamos que o src da mainImg é o mesmo que o src de cada respectivo thumb
});



