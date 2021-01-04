const openButton = document.querySelectorAll('[data-modal-target]');
const closeButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");


openButton.forEach(button => {
    button.addEventListener("click", () => {
       const modal = document.querySelector(button.dataset.modalTarget);
       openModal(modal);
    })
})
closeButton.forEach(button => {
    button.addEventListener("click", () => {
       const modal = button.closest('.modal');
       closeModal(modal);
    })
})
function openModal(modal) {
    if(modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}


function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}



function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
  }


//input tekst 


