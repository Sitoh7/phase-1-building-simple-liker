// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like =document.getElementsByClassName("like-glyph") 
let errorBox =document.getElementById("modal")
let errorMsg = document.getElementById("modal-message")
for(i=0; i< like.length;i++){
  like[i].addEventListener('click',(e)=>{
    // for user liking
    if(e.target.innerHTML == '♡'){
    e.preventDefault()
    
    mimicServerCall()
    .then(resp=>{
      e.target.innerHTML = '♥'
      e.target.classList.add('activated-heart')
    }
     
    )
    .catch(error=>{
      //errorBox.style.visibility = "visible"
      errorBox.classList.remove('hidden')
      errorMsg.textContent = error 
      setTimeout(()=>{
        //errorBox.style.visibility = "hidden";
        errorBox.classList.add('hidden')

      },3000)
  })
}
//for user unliking
else{
  e.preventDefault()
    
    mimicServerCall()
    .then(resp=>{
      e.target.innerHTML = '♡'
      e.target.classList.remove('activated-heart')
    }
     
    )
    .catch(error=>{
      errorBox.classList.remove('hidden')
      errorMsg.textContent = error 
      setTimeout(()=>{
        errorBox.classList.add('hidden')

      },3000)
  })
}}
)}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
function test(){console.log("HI")}