


  var abrirRespiracion = document.getElementById('btn_respirar'),
      fertilizar = document.getElementById('btn_fertilizar'),
      abrirMacetas = document.getElementById('btn_macetas'),
      concejo2v = document.getElementById('concejo2'),
      concejo3 = document.getElementById('concejo3');

fertilizar.addEventListener('click', function(){
            concejo2v.classList.add('active');
            concejo3.classList.remove('active');
 });
 abrirMacetas.addEventListener('click', function(){
      concejo3.classList.add('active');
});
 
 abrirRespiracion.addEventListener('click', function(){
      concejo2v.classList.remove('active');
      concejo3.classList.remove('active');
});




var abrir_popup = document.getElementById('abrir_popup'),
    overlay = document.getElementById('overlay'),
   /* popup = document.getElementsByClassName('popup'),*/
    cerrar_popup = document.getElementById('btn_cerrar_popup'),
    submit = document.getElementById('btn_submit');

  abrir_popup.addEventListener('click', function(){
        overlay.classList.add('active');
  });
  cerrar_popup.addEventListener('click', function(){
        overlay.classList.remove('active');
  });
