 /*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */

    (function($){
      "use strict";
      var
        $slideshow=$('.slideshow'),
        $images=$slideshow.find('img'),
        $prevBtn=$slideshow.find('.prev'),
        $nextBtn=$slideshow.find('.next'),
        $btns=$slideshow.find('ul.btns'),
        $lists=$btns.find('li'),
        currentSlide=0,
        autoPlayIv,
        autoPlayDelay=3000,
        go2slide=function(n){
          if(n===currentSlide) return;
          if(n>=$images.length)n=0;
          if(n<0) n=$images.length-1;
          $images.eq(n).css({zIndex:3});
          $images.eq(n).animate({opacity:1},700);
          $lists.eq(n).addClass('active');
          $images.eq(currentSlide).css({zIndex:1});
          $images.eq(currentSlide).animate({opacity:0},500);
          $lists.eq(currentSlide).removeClass('active');
          currentSlide=n;
        },
    
        nextSlide= function(){
          go2slide(currentSlide+1);
        },
        prevSlide= function(){
          go2slide(currentSlide-1);
        },
        initEvents=function(){
          $lists.click(function(){
            go2slide($(this).index());
          });
          $prevBtn.click(nextSlide);
          $nextBtn.click(prevSlide);
        },
        autoPlay= function(){
          autoPlayIv=setInterval(nextSlide,autoPlayDelay);
           $slideshow.mouseover(function(){
           clearInterval(autoPlayIv);
          });
            $slideshow.mouseout(function(){
            autoPlayIv = setInterval(nextSlide,autoPlayDelay);
          });
        },
        init= function(){
          initEvents();
          autoPlay();
          go2slide(0);
        };
      init();
  
    })(window.Zepto || window.jQuery);
