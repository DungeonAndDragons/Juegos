// FUNCIÓN PARA MOSTRAR MENÚS
function showMenu(menu) {
    // Ocultar todos los menús
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("credits").style.display = "none";

    // Mostrar solo el seleccionado
    document.getElementById(menu).style.display = "block";

    if (menu === "credits") {
        showCredits();
    }
}

// FUNCIÓN PARA VOLVER AL MENÚ PRINCIPAL
function goBack() {
    document.getElementById("settings").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("mainMenu").style.display = "block";
}

// FUNCIÓN PARA SALIR A GOOGLE
function exitGame() {
    window.location.href = "https://www.google.com";
}

// FUNCIÓN PARA MOSTRAR CRÉDITOS CON ANIMACIÓN
function showCredits() {
    const creditsList = document.getElementById("creditsList");
    const items = creditsList.querySelectorAll("p");

    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 1000);
    });
}

// FUNCIÓN PARA "JUGAR"
function startGame() {
    alert("¡Aquí comenzará tu aventura en D&D!");
}

