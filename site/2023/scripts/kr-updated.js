const cursor = document.querySelector('.cursor-container');
const typing = document.querySelector('.typing');

function moveCursor(left,top){
  //console.log('inside moveCursor');
  cursor.setAttribute('style','margin: '+top+'px 0 0 '+left+'px');
}

function alignCursor(addOffset){

  let typingPosition = typing.getBoundingClientRect();
  let cursorPosition = cursor.getBoundingClientRect();

  let deltaX = typingPosition.right - cursorPosition.left;
  let deltaY = typingPosition.bottom - cursorPosition.top;

  if(addOffset){
    deltaY -= 30;
  }

  console.log(deltaY);

  moveCursor(deltaX,deltaY);
}


/* Type Adjectives */
const adjectives = ["well-rounded", "passionate", "full-stack"];
let newAdjectiveIndex = 0;
let stopTyping = false;


function typeNewAdjective(){
  //console.log('inside typeNewAdjective');

  //let newAdjective = adjectives[Math.floor(Math.random() * (adjectives.length))];
  let newAdjective = adjectives[newAdjectiveIndex];
  newAdjectiveIndex += 1;

  if(newAdjectiveIndex >= adjectives.length){
    newAdjectiveIndex = 0;
    stopTyping = true;
  }
  //console.log('newAdjective is ' + newAdjective);
  typing.textContent = ''; // Clear the text

  let keyIndex = 0;

  const typeInterval = setInterval(() => {
    typing.textContent += newAdjective[keyIndex]; // Add the next character
    keyIndex++; // Move to the next character
    alignCursor();

    if (keyIndex >= newAdjective.length) {
      // If we've reached the end of the text, stop the animation
      clearInterval(typeInterval);
      if(!stopTyping){
          setTimeout(deleteAdjective, 3000);
      }
      else{
        typing.setAttribute('style','border:none')
      }
    }
  }, 150); // Set the speed of the animation (lower values = faster)*/
}

function deleteAdjective(){

  typing.setAttribute('style','border:1px solid #00D1FF')

  let currentAdjective = typing.textContent;
  let index = currentAdjective.length;

  const deleteInterval = setInterval(() => {
    currentAdjective = currentAdjective.slice(0, -1);
    typing.textContent = currentAdjective; // Add the next character
    index--; // Move to the next character
    //console.log(typing.offsetWidth);
    alignCursor();


    if (index == 0) {
      // If we've reached the end of the text, stop the animation
      clearInterval(deleteInterval);
      typeNewAdjective();
      return;
    }
  }, 150); // Set the speed of the animation (lower values = faster)*/
}

setTimeout(deleteAdjective, 5000);


/* Move Cursor */
const rotatingDiv = document.querySelector('.hero-profile-photo');
function rotatePhoto(){
  moveCursor(150,-25);

  setTimeout(() => {
    moveCursor(0,-25);
    rotatingDiv.setAttribute('style','transform: rotate(0)');
  }, 1000);

  setTimeout(() => {
    alignCursor(true);
  }, 2000);

}
setTimeout(rotatePhoto, 2000);
