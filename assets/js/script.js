$(function(){


  $('.arrow_right').click(nextImg);
  $('.arrow_left').click(prevImg);


  // FUNZIONI

  // funzione per cambiare immagine e pallini
  function nextImg(){
    var activeImg = $('img.active');
    var activeCircle = $('.pallini i.active');

    // rimuovo active
    activeImg.removeClass('active');
    activeCircle.removeClass('active');
    
    //se presenta la classe last aggiungo first
    if(activeImg.hasClass('last')){

      $('img.first').addClass('active');
      $('.pallini i.first').addClass('active');
    }else{
      // se no aggiungo active al successivo
      activeImg.next('img').addClass('active');
      activeCircle.next('i').addClass('active');
    }
  }


  function prevImg(){
    var activeImg = $('img.active');
    var activeCircle = $('.pallini i.active');

    // rimuovo active
    activeImg.removeClass('active');
    activeCircle.removeClass('active');
    
    //se presenta la classe first aggiungo last
    if(activeImg.hasClass('first')){

      $('img.last').addClass('active');
      $('.pallini i.last').addClass('active');
    }else{
      // se no aggiungo active al successivo
      activeImg.prev('img').addClass('active');
      activeCircle.prev('i').addClass('active');
    }
  }





});