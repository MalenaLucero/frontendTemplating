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
    slideMapButtons()
    window.addEventListener("click",()=>{
        data.forEach((e,i)=>{
            if(i!==currentSlide){
                const notClickedAnchor = document.getElementById(i)
                notClickedAnchor.classList.remove('clicked')
            }
        })
        const clickedAnchor = document.getElementById(currentSlide)
        clickedAnchor.classList.add('clicked')
    })
}

const slideMapButtons = () =>{
    const slideMapContainer = document.getElementById('slide-map-container')
    data.forEach((e,index)=>{
        const listItem = document.createElement('li')
        const anchor = document.createElement('a')
        anchor.innerText = index
        if(index === 0 || index === data.length -1) anchor.classList.add('side')
        anchor.href = "#"
        anchor.id = index
        anchor.onclick = () =>{
            slideText.style.opacity = 0
            currentSlide = index
            slideChanges(currentSlide)
        }
        listItem.appendChild(anchor)
        slideMapContainer.appendChild(listItem)
    })
    
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
    if(currentSlide === 7){
        setTimeout(()=>{
            textFadeIn(data[currentSlide].text[0])
        }, 1500)
        setTimeout(()=>{
            slideText.style.opacity = 0
        },2500)
        setTimeout(()=>{
            textFadeIn(data[currentSlide].text[1])
        }, 4000)
    }else{
        setTimeout(()=>{
            textFadeIn(data[currentSlide].text)
        }, 1500)
    }
}

const textFadeIn = (text) =>{
    slideTextContainer(currentSlide)
    slideText.innerHTML = ''
    slideText.innerText = text
    slideText.style.opacity = 1
}

const slideTextContainer = (currentSlide) =>{
    const slideTextContainer = document.getElementById('slide-text-container')
    switch(currentSlide){
        case 0: 
            slideTextContainer.classList.remove('left')
            slideTextContainer.classList.remove('right')
            slideTextContainer.classList.remove('top-right')
            slideTextContainer.classList.add('top-left')
            break
        case 1:
        case 2:
        case 6:
        case 7:
            slideTextContainer.classList.remove('top-left')
            slideTextContainer.classList.remove('top-right')
            slideTextContainer.classList.remove('right')
            slideTextContainer.classList.add('left')
            break
        case 3:
        case 4:
        case 5:
            slideTextContainer.classList.remove('left')
            slideTextContainer.classList.remove('top-left')
            slideTextContainer.classList.remove('top-right')
            slideTextContainer.classList.add('right')
            break
        case 8:
            slideTextContainer.classList.remove('right')
            slideTextContainer.classList.remove('left')
            slideTextContainer.classList.remove('top-left')
            slideTextContainer.classList.add('top-right')
            
    }   
}