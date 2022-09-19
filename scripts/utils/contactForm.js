function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "false");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
