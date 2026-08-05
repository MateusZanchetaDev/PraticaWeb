

//Estudo com Switch

function pedirItem() {
    var valor = prompt('Digite um valor de 1 a 4: ');

    switch(Number(valor)) {
      case 1:
        alert('Você escolheu 1 = Suco');
        break;
      case 2:
        alert('Você escolheu 2 = Água gelada');
        break;
      case 3:
        alert('Você escolheu 3 = Sorvete');
        break;
      case 4:
        alert('Você escolheu 4 = Chamar o garçom');
        break;

      default:
        alert('Opção inválida! Escolha um número entre 1 a 4.');
        break;
    }
}