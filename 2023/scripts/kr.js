const triggerDiv = document.querySelector('.hero-profile-photo');
const rotatingDiv = document.querySelector('.crooked-gradient-bg');

/*triggerDiv.addEventListener('mouseenter', (event) => {
  rotatingDiv.style.transform = 'rotate(0deg)';
});

triggerDiv.addEventListener('mouseleave', (event) => {
  rotatingDiv.style.transform = 'rotate(-10deg)';
});*/


const adjectives = [" well-rounded", "n experienced"," passionate", " skilled"," full-stack"];
let newAdjectiveIndex = 0;

function typeNewAdjective(){
  //console.log('inside typeNewAdjective');

  const typing = document.querySelector('.typing');

  //let newAdjective = adjectives[Math.floor(Math.random() * (adjectives.length))];
  let newAdjective = adjectives[newAdjectiveIndex];
  newAdjectiveIndex += 1;

  if(newAdjectiveIndex >= adjectives.length){
    newAdjectiveIndex = 0;
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
      setTimeout(deleteAdjective, 3000);
    }
  }, 150); // Set the speed of the animation (lower values = faster)*/
}

function deleteAdjective(){
  const typing = document.querySelector('.typing');
  let currentAdjective = typing.textContent;
  let index = currentAdjective.length;

  const deleteInterval = setInterval(() => {
    currentAdjective = currentAdjective.slice(0, -1);
    typing.textContent = currentAdjective; // Add the next character
    index--; // Move to the next character
    if (index == 0) {
      // If we've reached the end of the text, stop the animation
      clearInterval(deleteInterval);
      typeNewAdjective();
    }
  }, 150); // Set the speed of the animation (lower values = faster)*/
}

setTimeout(deleteAdjective, 5000);


function moveCusor(){
  const cursor = document.querySelector('.cursor-container');
  cursor.setAttribute('style','transform: translate(0, 1000px)');

  setTimeout(() => {
    cursor.setAttribute('style','transform: translate(-150px, 1000px)');
    rotatingDiv.setAttribute('style','transform: rotate(0)');
  }, 1000);

  setTimeout(() => {
    cursor.setAttribute('style','transform: translate(0, -1000px)');
  }, 2000);

}
setTimeout(moveCusor, 1000);






/*
const typing = document.querySelector('.typing');
const text = typing.textContent; // Get the text inside the p element
typing.textContent = ''; // Clear the text

let index = 0;

const interval = setInterval(() => {
  typing.textContent += text[index]; // Add the next character
  index++; // Move to the next character
  if (index >= text.length) {
    // If we've reached the end of the text, stop the animation
    clearInterval(interval);
  }
}, 50); // Set the speed of the animation (lower values = faster)*/
