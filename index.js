$(document).ready(function() {
    $('input[type=radio][name=big-menu-radio]').change(function() {
        if (this.value == 'tree')
            {
                $('.big-menu').css("background-image", "url(tree.jpg)");
            }
        else if (this.value == 'ball') 
        {
            $('.big-menu').css("background-image", "url(winter.jpg");
        }
        else if (this.value == 'flower') 
        {
           $('.big-menu').css("background-image", "url(cleaner.jpg");
        }
    });
});
$(window).resize(function(){
    if($(window).width()>=1300)
    {
    $('.wraper').css({'width': 1200+"px", 'position': "absolute", 'left': 50+"%", 'margin-left': -600+"px"});
    $('.gallery li:nth-child(odd)').css({'padding-right': 3+'%', 'padding-left': 0+'%'});
    }
    else if($(window).width()<1200)
    {
        $('.wraper').css({'width': 'inherit', 'margin': 0+'px', 'left': 0+"%", 'position': 'relative'});
        $('.gallery li:nth-child(odd)').css({'padding-right': 15+'%', 'padding-left': 5+'%'});
        $('.form').css({'left': 50+'%'});
        
        if($(window).width()<990)
        {
            $('.gallery li:nth-child(odd)').css({'padding-right': 8+'%', 'padding-left': 0+'%'});
            $('.form').css({'top': -100+'px', 'left': 40+'%'});
            $('.contacts').css({'height': 250+'px'});
            $('.contact-info').css({'top': 0+'px', 'width': 40+'%'});
            $('.team-about>li').css({'display': 'table-cell', 'padding': 0+"px"});
            
            if($(window).width()<840)
            {
               $('.team-about>li').css({'display': 'inline-block', 'padding': 5+"%"});
                
                if($(window).width()<770)
                    {
                    $('.contacts').css({'height': 600+'px'});
                    $('.contact-info').css({'top': 320+'px', 'width': 'inherit'});
                    $('.form').css({'top': 20+'px', 'left': 55+'px'});
                    $('.main-info').css({'left': 70+'px'});
                    
                    if($(window).width()<550)
                        {
                        $('.main-info').css({'left': 5+'%','width': 400+'px'});
                        $('.bg-main-info').css({'height': 170+'px'});  
                        $('.radio').css({'left': 80+'%'});
                            
                                if($(window).width()<490)
                                {
                                $('.main-info').css({'left': 5+'%', 'width': 250+'px'});
                                $('.bg-main-info').css({'height': 240+'px'});
                                $('.radio').css({'left': 5+'%'});
                                
                                }//закрывается на меньше 490
                         }//закрывается на меньше 550 
                      }//закрывается на меньше 770 
              }//закрывается на меньше 840 
        }//закрывается на меньше 990
     } //закрывается на меньше 1200
      
   
});

$(document).ready(function(){
   $('.gallery li:gt(5)').hide();
$('.show_button').click(function() {
    $('.gallery li:gt(5)').slideToggle();
}); 
});

$(function() 
{
$(window).scroll(function() 
{
 if($(this).scrollTop() != 0) 
    {
    $('.to-up').fadeIn();
    } 
else 
    {
    $('.to-up').fadeOut();
    }
});
 
$('.to-up').click(function() 
    {
    $('body,html').animate({scrollTop:0},800);
    });
});

//$(".team-about").hover(function(){
//     $( this ).find(".shadow1").css({'opacity': 0.4});
//},function(){
//    $( this ).find(".shadow1").css({'opacity': 0});
//});



