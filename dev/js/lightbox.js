const containerLight = document.querySelector('.image-light')
const images = document.querySelectorAll('.gallery-img')
const imagesLight = document.querySelector('.expand-image')
const plus = document.getElementById('plus')
const less = document.getElementById('less')
const close = document.getElementById('closed')


images.forEach(image => {
    image.addEventListener('click', () => {
        appearImage(image.getAttribute('src'))
    })
})

const appearImage = (image) => {
    imagesLight.src = image
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')

}
if (plus) {
    plus.addEventListener('click', () => {
        imagesLight.classList.add('expandImage')
        imagesLight.classList.remove('collapseImage')
    })
}
if (less) {
    less.addEventListener('click', () => {
        imagesLight.classList.add('collapseImage')
        imagesLight.classList.remove('expandImage')
    })
}

if (close) {
    close.addEventListener('click', () => {
        containerLight.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
    })
}