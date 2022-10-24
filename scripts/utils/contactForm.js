// Affiche la modale qui contient le formulaire de contact
function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", true);
    modal.setAttribute("aria-hidden", false);
	modal.style.display = "block";
    // on met le focus sur l'input prénom
    document.getElementById("firstname").focus();
}

// Ferme la modale qui contient le formulaire de contact
function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

// Fonction appelée à la soumission du formulaire qui vérifie les datas envoyées, les affiches en console et ferme la modale
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

// Si on appuie sur Echap, on ferme la modale de contact
document.addEventListener("keydown", e => {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        if (keyCode === 27){
            closeModal();
        }
});
