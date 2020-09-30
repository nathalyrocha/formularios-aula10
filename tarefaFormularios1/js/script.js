var fields = ["nome", "sobrenome", "senha", "confirmarSenha"];

function validar() {
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;

  fields.map(function(item) {
    var element = document.getElementById(item);

    if(element.value == "") {
      alert("O campo " + capitalize(item) + " é obrigatório!");
    }
  });

  if(senha !== confirmarSenha) {
    alert("Erro: As senhas não são iguais");
  }

  var dados = fields.every(function(item) {
    return document.getElementById(item).value !== "";
  });
  
  if(dados && senha == confirmarSenha) {
    fields.map(function(item) {
      var element = document.getElementById(item);
  
      console.log(item, element.value);
    });
  }
  event.preventDefault();
}

function capitalize(item) {
  var resultado = item.replace(/([A-Z])/g, ' $1');
  return resultado.charAt(0).toUpperCase() + resultado.slice(1);
}