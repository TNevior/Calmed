$(document).ready(function () {

  $("#calcular").click(function () {
    var matricula = $("#matricula").val();

    if (matricula === "") {
      alert("Por favor, insira uma matrícula.");
      return;
    }

    var notasMatematica = [];
    notasMatematica.push(parseFloat($("#matematica1").val()));
    notasMatematica.push(parseFloat($("#matematica2").val()));

    var notasIngles = [];
    notasIngles.push(parseFloat($("#ingles1").val()));
    notasIngles.push(parseFloat($("#ingles2").val()));

    var notasPortugues = [];
    notasPortugues.push(parseFloat($("#portugues1").val()));
    notasPortugues.push(parseFloat($("#portugues2").val()));

    var notasArtes = [];
    notasArtes.push(parseFloat($("#artes1").val()));
    notasArtes.push(parseFloat($("#artes2").val()));

    var notasGeografia = [];
    notasGeografia.push(parseFloat($("#geografia1").val()));
    notasGeografia.push(parseFloat($("#geografia2").val()));

    var notasHistoria = [];
    notasHistoria.push(parseFloat($("#historia1").val()));
    notasHistoria.push(parseFloat($("#historia2").val()));

    if (
      validarNotas(notasMatematica) &&
      validarNotas(notasIngles) &&
      validarNotas(notasPortugues) &&
      validarNotas(notasArtes) &&
      validarNotas(notasGeografia) &&
      validarNotas(notasHistoria)
    ) {
      var mediaMatematica = calcularMedia(notasMatematica);
      var mediaIngles = calcularMedia(notasIngles);
      var mediaPortugues = calcularMedia(notasPortugues);
      var mediaArtes = calcularMedia(notasArtes);
      var mediaGeografia = calcularMedia(notasGeografia);
      var mediaHistoria = calcularMedia(notasHistoria);

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
  });

  $("#sobre").click(function () {
    window.location.href = "sobre.html";
  });

  function validarNotas(notas) {
    for (var i = 0; i < notas.length; i++) {
      if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
        return false;
      }
    }
    return true;
  }

  function calcularMedia(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    return soma / notas.length;
  }
});
