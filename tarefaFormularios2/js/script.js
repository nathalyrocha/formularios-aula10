var fields = ["firstName", "lastName", "password", "passwordConfirmation", "coments"];
var radios = document.getElementsByName("gender");
var gender_position = null;

function validar() {
  var senha = document.getElementById("password").value;
  var confirmarSenha = document.getElementById("passwordConfirmation").value;

  fields.map(function(item) {
    var element = document.getElementById(item);

    if(element.value == "") {
      alert("O campo " + capitalize(item) + " é obrigatório!");
    }
  });

  if(senha !== confirmarSenha) {
    alert("Error: Passwords are not the same");
  }

  var dados = fields.every(function(item) {
    return document.getElementById(item).value !== "";
  });
  
  if(dados && senha == confirmarSenha) {
    fields.map(function(item) {
      var element = document.getElementById(item);
  
      console.log(capitalize(item) + ":" + " " + element.value);
    });
  }

  for(let i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      gender_position = i;
      console.log("Gender:", radios[i].value);
    }
  }
  
  event.preventDefault();
}

function capitalize(item) {
  var resultado = item.replace(/([A-Z])/g, ' $1');
  return resultado.charAt(0).toUpperCase() + resultado.slice(1);
}

$(document).ready(function() {
        
  $("#female").click(function() {
    document.getElementById("fundo").style.backgroundColor = "rgb(255, 236, 245)";
  });

  $("#male").click(function() {
    document.getElementById("fundo").style.backgroundColor = "rgb(217, 243, 251)";
  });

  $("#other").click(function() {
    document.getElementById("fundo").style.backgroundColor = "rgb(211, 230, 211)";
  });
});

function limpar() {
  fields.map(function(item) {
    document.getElementById(item).value = "";
  });
}

function ocultar(){
  $("#form").hide();

  var form2 = $("#form2");
  form2.append('<ul id="list"></ul>');
  var ul = $("#list");

  fields.map(function(item) {
    var value = document.getElementById(item).value;

    ul.append("<li>" + capitalize(item) + ":" + " " + value + "</li>");
  });

  ul.append("<li>" + 'Genero' + ":" + " " + radios[gender_position].value + "</li>")
  
  form2.show();
}