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


// POP UP BOXES WHEN HOMEPAGE IMAGES ARE CLICKED ON

/////////////////////////////////////////////////////////////////////////////////////////
//Image Button for White Bentley
document.getElementById('image-button-whitebentley').addEventListener('click', () =>{
    document.querySelector('.bg-modal-whitebentley').style.display = 'flex';
});

//Get close button for White Bentley
document.querySelector('.close-btn-whitebentley').addEventListener("click", function() {
	document.querySelector('.bg-modal-whitebentley').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////
//Image Button for Blue SVR
document.getElementById('image-button-bluesvr').addEventListener('click', () => {
    document.querySelector('.bg-modal-bluesvr').style.display = 'flex';
});

//Get close button for Blue SVR
document.querySelector('.close-btn-bluesvr').addEventListener("click", function() {
	document.querySelector('.bg-modal-bluesvr').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////
//Image Button for White S63

document.getElementById('image-button-whites63').addEventListener('click', () => {
    document.querySelector('.bg-modal-whites63').style.display = 'flex';
});

//Get close button for White S63

document.querySelector('.close-btn-whites63').addEventListener('click', () => {
    document.querySelector('.bg-modal-whites63').style.display = "none";
})

////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('image-button-blackbentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-blackbentley').style.display = 'flex';
});

document.querySelector('.close-btn-blackbentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-blackbentley').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('image-button-whiterange').addEventListener('click', () => {
    document.querySelector('.bg-modal-whiterange').style.display = 'flex';
});

document.querySelector('.close-btn-whiterange').addEventListener('click', () => {
    document.querySelector('.bg-modal-whiterange').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('image-button-orangebentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-orangebentley').style.display = 'flex';
});

document.querySelector('.close-btn-orangebentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-orangebentley').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////

//Outside click to close popup box

