const data = [{
        view: 0,
        text: 'WE ARE BREAKING OUR VOW OF SILENCE'
    },{
        view: -17,
        text: 'TALENT IS GIVEN, TRUE SKILL IS EARNED'
    },{
        view: -22,
        text: 'BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION'
    },{
        view: -33,
        text: 'USE MANY SKILLS YET WORK AS ONE'
    },{
        view: -44,
        text: 'TO MASTER ANYTHING FIND INTEREST IN EVERYTHING'
    },{
        view: -55,
        text: 'INDIVIDUALS FLOURISH IF CUSTOM AND WISDOM ARE SHARED'
    },{
        view: -66,
        text: 'TRAIN FOR PERFECTION BUT AIM FOR MORE'
    },{
        view: -87,
        text: ['TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE', 'TEMPORARY SACRIFICE BRINGS LASTING RESULTS'] 
    },{
        view: -96,
        text: ['BECOME A MONK']
    }
]

let currentSlide = 0 // from 0 to 9
let slideText

const initialize = () =>{
    slideText = document.getElementById('slide-main-text')
    slideText.style.opacity = 1
}

const moveImage = (direction) =>{
    slideText.style.opacity = 0

    if(direction === 'forward'){
        currentSlide += 1
        slideChanges(currentSlide)
    }else if(direction === 'backward'){
        currentSlide -= 1
        slideChanges(currentSlide)
    }
}

const slideChanges = currentSlide =>{
    const image = document.getElementById('background-image')
    image.style.transform = `translate(${data[currentSlide].view}%)`
    setTimeout(()=>{
        slideText.innerHTML = ''
        slideText.innerText = data[currentSlide].text 
        slideText.style.opacity = 1
    }, 1500)
}