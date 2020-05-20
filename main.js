//Grab HTML
let btn = document.getElementById('btn');
let tipdisplay = document.getElementById('tipdisplay');
let message = document.getElementById('message');

//Add event listener to the button
btn.addEventListener('click', calculate);

//function to calculate tip
function calculate(){
  let bill = document.getElementById('billamt').value;
  let finalBill = Number(bill)
  let people = document.getElementById('peopleamt').value;
  let tip = finalBill * .15;
  tipdisplay.innerHTML = tip;
  
  if(finalBill === 0){
    message.style.color = 'red';
    message.style.textAlign = 'center';
    message.style.fontSize = '30px';
    message.innerHTML = 'Please ENTER a bill amount'
  } else if (people ===  '' || people === 0) {
    message.innerHTML = 'Please enter an amount of people!'
    message.style.textAlign = 'center';
    message.style.fontSize = '30px';
    message.style.color = 'red';
  } else {
    message.style.display = 'none';
  }
}
