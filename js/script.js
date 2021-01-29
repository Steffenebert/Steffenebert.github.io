const spans = document.querySelectorAll('h1 span')

spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const javascriptBar = document.querySelector('.bar-javascript')

var timeline = new TimelineLite();

timeline.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`})
        .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`})
        .fromTo(javascriptBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})

scene.setTween(timeline)
scene.addTo(controller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')


    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}

