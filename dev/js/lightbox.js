const containerLight = document.querySelector('.image-light')
const images = document.querySelectorAll('.gallery-img')
const imagesLight = document.querySelector('.expand-image')
const plus = document.getElementById('plus')
const lesss = document.getElementById('less')
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

plus.addEventListener('click', () => {
    imagesLight.classList.add('expandImage')
    imagesLight.classList.remove('collapseImage')
})
less.addEventListener('click', () => {
    imagesLight.classList.add('collapseImage')
    imagesLight.classList.remove('expandImage')
})

close.addEventListener('click', () => {
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
})