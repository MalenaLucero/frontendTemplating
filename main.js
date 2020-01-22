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
        text: 'TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE'
    },{
        view: -87,
        text: 'TEMPORARY SACRIFICE BRINGS LASTING RESULTS'
    },{
        view: -96,
        text: 'BECOME A MONK',
        details: ['Interested in joining our monastery?', 'Checkout our current openings at '],
        careersLink: 'mediamonks.com/careers',
        socialMedia: ['Mailers', 'Facebook', 'Twitter']
    }
]

let currentSlide = 0 // from 0 to 9
let slideText
let lastSlideContent

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
    setTimeout(()=>{
        lastSlideContent = document.getElementById('last-slide-content')
        lastSlideContent.innerHTML = ''
        textFadeIn(data[currentSlide].text)
    }, 1300)
}

const textFadeIn = (text) =>{
    slideTextContainer(currentSlide)
    
    slideText.innerHTML = ''
    slideText.innerText = text
    slideText.style.opacity = 1 
    //text of the last slide
    if(currentSlide === data.length-1){
        
        const firstLine = document.createElement('p')
        firstLine.innerText = data[data.length-1].details[0]
        firstLine.classList.add('first-line')
        const secondLine = document.createElement('p')
        secondLine.innerText = data[data.length -1].details[1]
        const mainAnchor = document.createElement('a')
        mainAnchor.href = "#"
        mainAnchor.innerText = data[data.length-1].careersLink
        const socialMediaContainer = document.createElement('ul')
        data[data.length-1].socialMedia.forEach(media=>{
            const listItem = document.createElement('li')
            const mediaAnchor = document.createElement('a')
            mediaAnchor.href = "#"
            mediaAnchor.innerText = media
            listItem.appendChild(mediaAnchor)
            socialMediaContainer.appendChild(listItem)
        })
        lastSlideContent.appendChild(firstLine)
        lastSlideContent.appendChild(secondLine)
        lastSlideContent.appendChild(mainAnchor)
        lastSlideContent.appendChild(socialMediaContainer)
    }
    
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
            
    }   
}