const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "flex";
    });
});

closes.forEach(close => {
    close.addEventListener("click", () => {
        close.closest(".modal").style.display = "none";
    });
});

window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});