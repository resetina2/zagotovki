//4istui javaScript
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();

//jQuery
  function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

//scss pod kartinky
    .ibg {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      img{display: none;}
    }
.main-screen {
  flex: 1 0 100%;
  position: relative;
}

.main-screen__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

//html
<div class="main-screen">
        <div class="main-screen__bg ibg">
          <img src="img/header/main.jpg" alt="">
        </div>
      </div>
