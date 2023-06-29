function adicionarEvento() {
    var eventoInput = document.getElementById('evento');
    var horarioInput = document.getElementById('horario');
    
    var evento = eventoInput.value;
    var horario = horarioInput.value;
    
    var novoEvento = {
      evento: evento,
      horario: horario
    };
    
    eventos.push(novoEvento);
    eventos.sort(function(a, b) {
      return new Date(a.horario) - new Date(b.horario);
    });
    
    mostrarEventos();
    
    eventoInput.value = '';
    horarioInput.value = '';
  }
  
  function mostrarEventos() {
    var listaEventos = document.getElementById('lista-eventos');
    listaEventos.replaceChildren();
  
    eventos.forEach(function(evento) {
      var listItem = document.createElement('li');
      var textNode = document.createTextNode(evento.evento + ' - ' + evento.horario);
      listItem.appendChild(textNode);
      listaEventos.appendChild(listItem);
    });
  }
  
  var eventos = [];
