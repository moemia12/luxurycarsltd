//function expression to select elements
const selectElement = (s) => document.querySelector(s);

//open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//close the menu on click

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});



//Image Button

document.getElementById('image-button').addEventListener('click', () =>{
    document.querySelector('.bg-modal').style.display = 'flex';
});

//Get close button
let bgModal = document.getElementsByClassName('.bg-modal');
let closeBtn = document.getElementsByClassName('.closeBtn')[0];

closeBtn.addEventListener('click', closeModal);

function closeModal (){
    bgModal.style.display = 'none';
}