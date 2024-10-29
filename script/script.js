function openModal(cupcake) {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var txt3 = document.getElementById("txt3");

    switch(cupcake) {
        case "CupFlavor1":
            txt1.innerHTML = "Baunilha com Morango";
            txt2.innerHTML = "Creme de morango no bolo de baunilha";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor2":
            txt1.innerHTML = "Beijinho com Tutti Frutti";
            txt2.innerHTML = "Creme de tutti fruti no bolo de beijinho";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor3":
            txt1.innerHTML = "Cenoura americano";
            txt2.innerHTML = "Creme de baunilha no carrot cake (bolo de cenoura americano com nozes na massa)";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor4":
            txt1.innerHTML = "Chocolate";
            txt2.innerHTML = "Creme de chocolate no bolo de chocolate";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor5":
            txt1.innerHTML = "Baunilha";
            txt2.innerHTML = "Creme de baunilha no bolo de baunilha";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor6":
            txt1.innerHTML = "Red Velvet";
            txt2.innerHTML = "Creme de chocolate branco no bolo de red velvet";
            txt3.innerHTML = "R$15,00";
            break;
        default:
            txt1.innerHTML = "Baunilha com morango";
            txt2.innerHTML = "Baunilha com morango";txt1.innerHTML = "Delicioso cupcake";
            txt3.innerHTML = "R$15,00"
    }

    document.getElementById("knowMore").style.display = "block";
}

function closeModal() {
    document.getElementById("knowMore").style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("CupFlavor1Button").addEventListener("click", function() {
        openModal("CupFlavor1");
    });
    document.getElementById("CupFlavor2Button").addEventListener("click", function() {
        openModal("CupFlavor2");
    });
    document.getElementById("CupFlavor3Button").addEventListener("click", function() {
        openModal("CupFlavor3");
    });
    document.getElementById("CupFlavor4Button").addEventListener("click", function() {
        openModal("CupFlavor4");
    });
    document.getElementById("CupFlavor5Button").addEventListener("click", function() {
        openModal("CupFlavor5");
    });
    document.getElementById("CupFlavor6Button").addEventListener("click", function() {
        openModal("CupFlavor6");
    });
    document.getElementById("closeModalButton").addEventListener("click", closeModal);
});