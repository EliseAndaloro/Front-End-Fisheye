function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", true);
    modal.setAttribute("aria-hidden", false);
	modal.style.display = "block";
    document.getElementById("firstname").focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

function validate(e) {
    e.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const values = "Nom : " + name + " Prenom : " + firstname + " Email : " + email + " Message: " + message;
    console.log(values);
    closeModal();
}

document.addEventListener("keydown", e => {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        if (keyCode === 27){
            closeModal();
        }
});
