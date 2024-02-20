const buttom=document.getElementById("lib-button")
buttom.addEventListener("click",theClick)
function theClick(e){
    e.preventDefault()
    const noun=document.getElementById("noun").value
    const adjective=document.getElementById("adjective").value
    const person=document.getElementById("person").value
    const verb=document.getElementById("verb").value
    const place=document.getElementById("place").value
    if(noun==""|| adjective==""|| person==""|| verb==""|| place=="")return
     console.log("all fillde",noun,
     adjective
     ,person
     ,verb
     ,place);
    const story= mystory(noun,adjective,person,verb,place)
    console.log(story);
}
function mystory(noun,adjective,person,verb,place){
    return(`i like to play${noun},its the biggest ${adjective} in the world,my idol is ${person}, he is one of ${verb}, is current club is ${place}`)
}
function buttom2(){
    return document.getElementById("lib-button")
}


// const buttom = getButton()
// const shuffleButton = document.getElementById("shuffle")

// buttom?.addEventListener("click", handleClick)
// shuffleButton?.addEventListener("click", shuffleStories)

// function getFormValues() {
// const noun=document.getElementById("noun").value    
// const adjective=document.getElementById("adjective").value
// const person=document.getElementById("person").value
// const verb=document.getElementById("verb").value
// const place=document.getElementById("place").value
// return{ noun , adjective , person, verb, place}
// }
// const (noun==""|| adjective==""|| person==""|| verb==""|| place=="")return

// function handleClick(e){
// shuffleStories(e,true)
// }

// function shuffleStories (e,isFirstStory = false){
// e.preventDefault()
// const{noun , adjective , person, verb, place}=getFormValues()
// if([noun , adjective , person, verb, place].includes(""))return


// const randomNumber = generateRandomNumber()
// const Stories = [writeStory(), writeStory2(), writeStory3()]
// const story = isFirstStory ? Stories[0] : Stories[randomNumber]
// appendSotryToPage(story)
// }

// function generateRandomNumber() {
// return Math.floor(Math.random()* 3)
// }

// function appendSotryToPage(story){
// const paragraph = document.getElementById("story")
// const span = document.createElement("span")
// span.innerText = story
// paragraph.textContent = ""
// paragraph.appendChild(span)
// }
// function mystory(noun,adjective,person,verb,place){
// return(`i like to play${noun},its the ugle ${adjective} in the world,my idol is ${person}, he is one of ${verb}, is current club is ${place}`)
// }

// function mystory(noun,adjective,person,verb,place){
// return(`i like to play${noun},its the biggest ${adjective} in the world,my idol is ${person}, he is one of ${verb}, is current club is ${place}`)
// }

// function mystory(noun,adjective,person,verb,place){
// return(`i like to play${noun},its the biggest ${adjective} in the world,my idol is ${person}, he is one of ${verb}, is current club is ${place}`)
// }