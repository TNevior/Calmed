$(document).ready(function () {
  $("#calcular").click(function () {
    var matricula = $("#matricula").val();
    var matematica1 = parseFloat($("#matematica1").val());
    var matematica2 = parseFloat($("#matematica2").val());
    var ingles1 = parseFloat($("#ingles1").val());
    var ingles2 = parseFloat($("#ingles2").val());
    var portugues1 = parseFloat($("#portugues1").val());
    var portugues2 = parseFloat($("#portugues2").val());
    var artes1 = parseFloat($("#artes1").val());
    var artes2 = parseFloat($("#artes2").val());
    var geografia1 = parseFloat($("#geografia1").val());
    var geografia2 = parseFloat($("#geografia2").val());
    var historia1 = parseFloat($("#historia1").val());
    var historia2 = parseFloat($("#historia2").val());

    if (!isNaN(matematica1) && !isNaN(matematica2) && !isNaN(ingles1) && !isNaN(ingles2) && !isNaN(portugues1) && !isNaN(portugues2) && !isNaN(artes1) && !isNaN(artes2) && !isNaN(geografia1) && !isNaN(geografia2) && !isNaN(historia1) && !isNaN(historia2)) {
      if (matematica1 >= 0 && matematica1 <= 10 && matematica2 >= 0 && matematica2 <= 10 &&
        ingles1 >= 0 && ingles1 <= 10 && ingles2 >= 0 && ingles2 <= 10 &&
        portugues1 >= 0 && portugues1 <= 10 && portugues2 >= 0 && portugues2 <= 10 &&
        artes1 >= 0 && artes1 <= 10 && artes2 >= 0 && artes2 <= 10 &&
        geografia1 >= 0 && geografia1 <= 10 && geografia2 >= 0 && geografia2 <= 10 &&
        historia1 >= 0 && historia1 <= 10 && historia2 >= 0 && historia2 <= 10) {

        var mediaMatematica = (matematica1 + matematica2) / 2;
        var mediaIngles = (ingles1 + ingles2) / 2;
        var mediaPortugues = (portugues1 + portugues2) / 2;
        var mediaArtes = (artes1 + artes2) / 2;
        var mediaGeografia = (geografia1 + geografia2) / 2;
        var mediaHistoria = (historia1 + historia2) / 2;

        var notasAbaixoDeCinco = 0;
        var mensagem = "";
        var resultado = "Matrícula: " + matricula + "<br><br>";
        resultado += "Médias das Matérias:<br>";

        if (mediaMatematica < 5) {
          resultado += '<span style="color: red;">Matemática: ' + mediaMatematica.toFixed(2) + '</span><br>';
          notasAbaixoDeCinco++;
        } else {
          resultado += '<span style="color: green;">Matemática: ' + mediaMatematica.toFixed(2) + '</span><br>';
        }

        if (mediaIngles < 5) {
          resultado += '<span style="color: red;">Inglês: ' + mediaIngles.toFixed(2) + '</span><br>';
          notasAbaixoDeCinco++;
        } else {
          resultado += '<span style="color: green;">Inglês: ' + mediaIngles.toFixed(2) + '</span><br>';
        }

        if (mediaPortugues < 5) {
          resultado += '<span style="color: red;">Português: ' + mediaPortugues.toFixed(2) + '</span><br>';
          notasAbaixoDeCinco++;
        } else {
          resultado += '<span style="color: green;">Português: ' + mediaPortugues.toFixed(2) + '</span><br>';
        }

        if (mediaArtes < 5) {
          resultado += '<span style="color: red;">Artes: ' + mediaArtes.toFixed(2) + '</span><br>';
          notasAbaixoDeCinco++;
        } else {
          resultado += '<span style="color: green;">Artes: ' + mediaArtes.toFixed(2) + '</span><br>';
        }

        if (mediaGeografia < 5) {
          resultado += '<span style="color: red;">Geografia: ' + mediaGeografia.toFixed(2) + '</span><br>';
          notasAbaixoDeCinco++;
        } else {
          resultado += '<span style="color: green;">Geografia: ' + mediaGeografia.toFixed(2) + '</span><br>';
        }

        if (mediaHistoria < 5) {
          resultado += '<span style="color: red;">História: ' + mediaHistoria.toFixed(2) + '</span><br>';
          notasAbaixoDeCinco++;
        } else {
          resultado += '<span style="color: green;">História: ' + mediaHistoria.toFixed(2) + '</span><br>';
        }

        if (notasAbaixoDeCinco >= 4) {
          mensagem = '<span style="color: red;">Reprovado</span>';
        } else if (notasAbaixoDeCinco > 0) {
          mensagem = '<span style="color: orange;">Recuperação Pendente</span>';
        } else {
          mensagem = '<span style="color: green;">Aprovado</span>';
        }

        resultado += "<br>" + mensagem;

        $("#resultado").html(resultado);
        $("#resultado").removeClass("is-hidden");
      } else {
        $("#resultado").addClass("is-hidden");
        alert("Por favor, insira notas válidas entre 0 e 10 em todas as matérias.");
      }
    } else {
      $("#resultado").addClass("is-hidden");
      alert("Por favor, insira notas válidas em todas as matérias.");
    }
  });

  $("#sobre").click(function () {
    window.location.href = "sobre.html";
  });
});