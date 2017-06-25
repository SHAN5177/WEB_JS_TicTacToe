$(document).ready(function(){
    
    var x = "x";
    var o = "o"
    var turn = 0;
    
    var p1 = $('#p1');
    var p2 = $('#p2');
    var p3 = $('#p3');
    var p4 = $('#p4');
    var p5 = $('#p5');
    var p6 = $('#p6');
    var p7 = $('#p7');
    var p8 = $('#p8');
    var p9 = $('#p9');
                   
    
    $.fn.checkWin = function(player){
      if(p1.hasClass(player) && p2.hasClass(player) && p3.hasClass(player) ||
         p4.hasClass(player) && p5.hasClass(player) && p6.hasClass(player) ||
         p7.hasClass(player) && p8.hasClass(player) && p9.hasClass(player) ||
         p1.hasClass(player) && p4.hasClass(player) && p7.hasClass(player) ||
         p2.hasClass(player) && p5.hasClass(player) && p8.hasClass(player) ||
         p3.hasClass(player) && p6.hasClass(player) && p9.hasClass(player) ||
         p1.hasClass(player) && p5.hasClass(player) && p9.hasClass(player) ||
         p3.hasClass(player) && p5.hasClass(player) && p7.hasClass(player)
        ){ 
         return true;
        }else{
          return false; 
        }
    };
    
  $("#board li").on('click',function(){
        if($.fn.checkWin('o')){
            alert('Winner O');
            $.fn.reset();
        }
      else if($.fn.checkWin('x')){
            alert('Winner X');
            $.fn.reset();
        }
      else if($(this).hasClass('disable o')){
            alert('Already filled.');
        }
      else if(turn%2==0){
            $(this).text(o);
            $(this).addClass('disable');
          $(this).addClass('o');
          turn++;
            if($.fn.checkWin('o')){
                alert('Winner: O');
                turn=0;
            }
        }
      else if(turn%2==1){
            $(this).text(x);
            $(this).addClass('disable');
          $(this).addClass('x');
          turn++;
            if($.fn.checkWin('x')){
                alert('Winner:X');
                turn =0;
            }
        }
        if(turn==9){
            alert('Tie Game');
            $.fn.reset();
        }
    })
  

    $.fn.reset = function(){
        $("#board li").text("+");
        $("#board li").removeClass('disable');
        $("#board li").removeClass('o');
        $("#board li").removeClass('x');
        ture = 0;
    }
    
    $("#reset").on("click",function(){
        $.fn.reset();
    })
})