window.addEventListener('load',function(){
    var carousel = this.document.querySelector('.carousel');
    var ul = carousel.children[0];
    var width = carousel.offsetWidth;
    var index = 0;
    var flag = false;
    var ol = this.document.querySelector('ol');
    var timer = setInterval(function(){
        index++;
        var translatex = -index *width;
        ul.style.transform = 'translateX('+translatex+'px)';
        ul.style.transition = 'all .3s';
    },2000);
    //过渡完成后再判断
    ul.addEventListener('transitionend',function(){
        
        if(index>=3){
            index=0;
            ul.style.transition = 'none';
            var translatex = -index *width;
            ul.style.transform = 'translateX('+translatex+'px)';
            
        }
         if(index<0){
             index=2;
             ul.style.transition = 'none';
             var translatex = -index *width;
             ul.style.transform = 'translateX('+translatex+'px)';
         }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');

    });
    var startX =0;
    var moveX=0;
    ul.addEventListener('touchstart',function(e){
        startX=e.targetTouches[0].pageX;
    });
    ul.addEventListener('touchmove',function(e){
        flag=ture;
         e.preventDefault();
         clearInterval(timer);
        moveX=e.targetTouches[0].pageX-startX;
        var translatex = -index*width +moveX;
        ul.style.transition = 'none';
         ul.style.transform = 'translateX('+translatex+'px)';
    });
    ul.addEventListener('touchend',function(e){
        if(flag){
            if(Math.abs(moveX) > 50){
                if(moveX > 0){
                    index--;
                }
                else{
                    index++;
                }
                var translatex = -index*width ;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX('+translatex+'px)';
            }
             else{
                 var translatex = -index*width ;
                 ul.style.transition = 'all .2s';
                 ul.style.transform = 'translateX('+translatex+'px)';
             }
             clearInterval(timer);
                  timer = setInterval(function(){
                  index++;
                  var translatex = -index *width;
                  ul.style.transform = 'translateX('+translatex+'px)';
                  ul.style.transition = 'all .3s';
              },2000);
        }
    });




})