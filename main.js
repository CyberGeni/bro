let categories = document.getElementById('category')

//function seeDetails () {
  //  categories.innerHTML = 'See details';
//}

//categories.addEventListener("mouseenter", seeDetails);
//categories.addEventListener("mouseout", LogoHoverRemove);


let openModal = document.getElementById('openModal')
let closeModal = document.getElementById('closeModal')
let body = document.getElementsByTagName('body')[0]
let modal = document.getElementById('modal')    

function showModal() {
    modal.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden')
}

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", showModal);
