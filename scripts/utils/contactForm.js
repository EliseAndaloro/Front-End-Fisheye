const contactForm = document.getElementsByTagName("form");
function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const closeModalImg = document.getElementById('closeModal');
    main.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "false");
	modal.style.display = "block";
    /*document.addEventListener("keydown", e => {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        console.log(keyCode);
        if (document.getElementById("contact_modal").getAttribute("aria-hidden") === false && keyCode === 27){
            closeModal();
        }
    });*/
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
