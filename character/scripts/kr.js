function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


/* Type Adjectives */
const adjectives = [" AI", ".ai", " Technologies"," AI"];
let newAdjectiveIndex = 0;
let stopTyping = false;

function typeNewAdjective(){
  //console.log('inside typeNewAdjective');

  const typing = document.querySelector('.typing');

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
  }, 150); // Set the speed of the animation (lower values = faster)
}

function deleteAdjective(){
  const typing = document.querySelector('.typing');
  let currentAdjective = typing.textContent;
  let index = currentAdjective.length;

  typing.setAttribute('style','border-right: 1px solid white');

  const deleteInterval = setInterval(() => {
    currentAdjective = currentAdjective.slice(0, -1);
    typing.textContent = currentAdjective; // Add the next character
    index--; // Move to the next character
    if (index == 0) {
      // If we've reached the end of the text, stop the animation
      clearInterval(deleteInterval);
      typeNewAdjective();
    }
  }, 150); // Set the speed of the animation (lower values = faster)
}



/* Move Cursor 
const rotatingDiv = document.querySelector('.hero-profile-photo');
function moveCusor(){
  const cursor = document.querySelector('.cursor-container');
  cursor.setAttribute('style','transform: translate(0, 980px)');

  setTimeout(() => {
    cursor.setAttribute('style','transform: translate(-150px, 980px)');
    rotatingDiv.setAttribute('style','transform: rotate(0)');
  }, 1000);

  setTimeout(() => {
    //cursor.setAttribute('style','transform: translateY(-1000px)');
    cursor.setAttribute('style','transform: translate(-545px, 775px)');
  }, 2000);

  setTimeout(() => {
    cursor.setAttribute('style','transform: translateY(-1000px)');
  }, 3500);

}

if (window.scrollY == 0){
  setTimeout(deleteAdjective, 5300);
  setTimeout(moveCusor, 2000);
}
else{
  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      // User has scrolled to the top of the page
      setTimeout(deleteAdjective, 2850);
      moveCusor();
    }
  });
} */

