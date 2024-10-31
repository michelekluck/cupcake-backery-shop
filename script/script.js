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


function mascaraTelefone(event) {
  // Remove todos os caracteres que não sejam dígitos
  let telefone = event.target.value.replace(/\D+/g, "");

  // Limita o número de dígitos para 11 (formato: (XX) XXXXX-XXXX)
  telefone = telefone.substring(0, 11);

  // Aplica a máscara conforme o número de dígitos
  if (telefone.length > 10) {
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (telefone.length > 6) {
    telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else if (telefone.length > 2) {
    telefone = telefone.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else {
    telefone = telefone.replace(/^(\d*)/, "($1");
  }

  // Atualiza o valor do campo com o telefone formatado
  event.target.value = telefone;
}

// Adiciona o event listener ao campo de telefone
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("celular")
    .addEventListener("input", mascaraTelefone);
});