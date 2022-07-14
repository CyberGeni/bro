let categories = document.getElementById('category')

function seeDetails () {
    categories.innerHTML = 'See details';
}

categories.addEventListener("mouseenter", seeDetails);
categories.addEventListener("mouseout", LogoHoverRemove);


let connectWalletModal = document.getElementById('connectWalletModal')