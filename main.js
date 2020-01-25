const data = [{
        view: 0,
        text: 'WE ARE BREAKING OUR VOW OF SILENCE'
    },{
        view: -14,
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
        view: -69,
        text: 'TRAIN FOR PERFECTION BUT AIM FOR MORE'
    },{
        view: -85,
        text: 'TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE'
    },{
        view: -85,
        text: 'TEMPORARY SACRIFICE BRINGS LASTING RESULTS'
    },{
        view: -98,
        text: ''
    }
]

let currentSlide = 0 
const delay = 1300

const initialize = () =>{
    const mainText = document.getElementById('slide-main-text')
    mainText.style.opacity = 1
    const pathDescription = document.getElementById('path-description')
    pathDescription.style.opacity = 1
    sideArrowBtnDisplay()
    printBottomMenu()

    //shows the current slide in the bottom menu
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

const moveImage = (direction) =>{
    if(direction === 'forward'){
        currentSlide += 1
    }else if(direction === 'backward'){
        currentSlide -= 1
    }
    slideChanges()
}

const slideChanges = () =>{
    backgroundSlide(currentSlide)
    mainTextDisplay()
    pathDescriptionDisplay()
    sideArrowBtnDisplay()
    currentStepDisplay()
    lastSlideDisplay()
}

const backgroundSlide = currentSlide =>{
    const image = document.getElementById('background-image')
    if(window.innerWidth < 500){
        if(currentSlide === 6){
            image.style.transform = 'translateX(-77%)'
        }else if(currentSlide === 7 || currentSlide === 8){
            image.style.transform = 'translateX(-93%)'
        }else if(currentSlide === data.length -1){
            image.style.transform = 'translateX(-100%)'
        }else{
            image.style.transform = `translateX(${data[currentSlide].view}%)` 
        }
    }else{
        image.style.transform = `translateX(${data[currentSlide].view}%)` 
    }
}

const mainTextDisplay = () =>{
    const mainText = document.getElementById('slide-main-text')
    mainText.style.opacity = 0
    setTimeout(()=>{
        mainTextContainerPosition(currentSlide)
        mainText.innerHTML = ''
        mainText.innerText = data[currentSlide].text
        mainText.style.opacity = 1
    }, delay)
}

const pathDescriptionDisplay = () =>{
    const pathDescription = document.getElementById('path-description')
    pathDescription.style.opacity = 0
    if(currentSlide === 0){
        setTimeout(()=>{
           pathDescription.style.opacity = 1 
        }, delay)
    }
}

const sideArrowBtnDisplay = () =>{
    const rightArrowBtn = document.getElementById('right-arrow-btn')
    const leftArrowBtn = document.getElementById('left-arrow-btn')
    if(currentSlide === data.length-1){
        rightArrowBtn.classList.add('hide')
    }else if(currentSlide === 0){
        leftArrowBtn.classList.add('hide')
    }else{
        rightArrowBtn.classList.remove('hide')
        leftArrowBtn.classList.remove('hide')
    }
}

const currentStepDisplay = () =>{
    const currentStepDescription = document.getElementById('current-step-description')
    const currentStep = document.getElementById('current-step')
    currentStepDescription.style.opacity = 0
    setTimeout(()=>{
        if(currentSlide !== 0 && currentSlide !== data.length -1){
            currentStepDescription.style.opacity = 1
            currentStep.innerText = ''
            currentStep.innerText = currentSlide
        }
    }, delay)  
}

const lastSlideDisplay = () =>{
    const lastSlideContainer = document.getElementById('last-slide-container')
    if(currentSlide === data.length -1){
        setTimeout(()=>{
          lastSlideContainer.style.transform = 'translate(0%)'  
        }, 500)
    }
    else{
        lastSlideContainer.style.transform = 'translate(120%)'
    }
}

const printBottomMenu = () =>{
    const slideMapContainer = document.getElementById('slide-map-container')
    data.forEach((e,index)=>{
        const listItem = document.createElement('li')
        const anchor = document.createElement('a')
        anchor.innerText = index
        if(index === 0 || index === data.length -1) anchor.classList.add('side')
        anchor.id = index
        anchor.style.cursor = 'pointer'
        anchor.onclick = () =>{
            currentSlide = index
            slideChanges()
        }
        if(index === 0){
            anchor.classList.add('clicked')
        }
        listItem.appendChild(anchor)
        slideMapContainer.appendChild(listItem)
    })
    
}

const mainTextContainerPosition = (currentSlide) =>{
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
        case 8:
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
        case 9:
            slideTextContainer.classList.remove('right')
            slideTextContainer.classList.remove('left')
            slideTextContainer.classList.remove('top-left')
            slideTextContainer.classList.add('top-right')
            break
            
    }   
}

