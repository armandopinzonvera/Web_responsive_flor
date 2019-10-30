
var abrir_popup = document.getElementById('abrir_popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementsByClassName('popup'),
    cerrar_popup = document.getElementById('btn_cerrar_popup'),
    submit = document.getElementById('btn_submit');

  abrir_popup.addEventListener('click', function(){
        overlay.classList.add('active');
  });
  cerrar_popup.addEventListener('click', function(){
        overlay.classList.remove('active');
  });