const textDisplay = document.getElementById('Arooshi')
const phrases=["Dedicated to ","The special one","Arooshi Sharma"]
let i=0
let j=0
let currentPhrase=[]
let isdeleting=false
let isEnd = false
function loop(){
	isEnd =false
	textDisplay.innerHTML=currentPhrase.join('')

	if(i<phrases.length){

		if(!isdeleting && j <=phrases[i].length){
		currentPhrase.push(phrases[i][j])
			j++
			textDisplay.innerHTML = currentPhrase.join('')

		}
         if(isdeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }
   


         if(j==phrases[i].length) {
         	isEnd=true
         	isdeleting=true
         } 
         
          if (isdeleting && j === 0) {
      currentPhrase = []
      isdeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80-50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isdeleting ? spedUp : normalSpeed 














	
    setTimeout(loop,time)
}

loop()