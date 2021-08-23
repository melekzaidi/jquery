$(document).ready(function(){
    let i=0 ; 
    tab=['<div class="welto">Welcome To <span class="green">Classic</span><p>This Is Test Paragraph Number One</div>',
    '<div class="welto">Welcome To <span class="green">two</span><p>This Is Test Paragraph Number two</div>',
    '<div class="welto">Welcome To <span class="green">three</span><p>This Is Test Paragraph Number three</div>',
    '<div class="welto">Welcome To <span class="green">four</span><p>This Is Test Paragraph Number four</div>']

    $(".menu").click(function(){
        $(".nav_mobile").css("display","grid");
        $(".nav_mobile").show() ; 
        $('.menu').hide() ; 
        
        
    })
    $(".hide-menu").click(function(){
        $('.menu').show() ; 
        $(".nav_mobile").hide() ; 
     
    })
        $(".fa-chevron-circle-left").click(function(){
            $(".welto").fadeOut(1000);
            if(i>0) { 
            i-- ;    console.log(i) ; 
               
                $(".welto").html(tab[i]).hide() ; 
                 $(".welto").fadeIn(1000) ; 
                 
            }else{
                console.log(i) ; 
               i=3 ; 
                $(".welto").html(tab[i]).hide() ; 
                $(".welto").fadeIn(1000) ;
            }
});        
    
$(".fa-chevron-circle-right").click(function(){
    $(".welto").fadeOut(1000);
    if(i<3) { 
    i++ ;    console.log(i) ; 
       
        $(".welto").html(tab[i]).hide() ; 
         $(".welto").fadeIn(1000) ; 
         
    }else{
        console.log(i) ; 
       i=0 ; 
        $(".welto").html(tab[i]).hide() ; 
        $(".welto").fadeIn(1000) ;
    }
})

$(".osama").hover(
    
    function(){
    $(".osama_p").css("display","flex")
    $(".osama_p").show() ; 
},
function(){
    
    $(".osama_p").hide() ; 
})
$(".hassan").hover(
    
    function(){
    $(".hassan_p").css("display","flex")
    $(".hassan_p").show() ; 
},
function(){
    
    $(".hassan_p").hide() ; 
})
$(".sayed").hover(
    
    function(){
    $(".sayed_p").css("display","flex")
    $(".sayed_p").show() ; 
},
function(){
    
    $(".sayed_p").hide() ; 
})
$(".mahmoud").hover(
    
    function(){
    $(".mahmoud_p").css("display","flex")
    $(".mahmoud_p").show() ; 
},
function(){
    
    $(".mahmoud_p").hide() ; 
})

$(".img1").hover(
    
    function(){
    $(".img1_content").css("display","flex")
    $(".img1_content").show() ; 
},
function(){
    
    $(".img1_content").hide() ; 
}) 
$(".img2").hover(
    
    function(){
    $(".img2_content").css("display","flex")
    $(".img2_content").show() ; 
},
function(){
    
    $(".img2_content").hide() ; 
}) 
$(".img3").hover(
    
    function(){
    $(".img3_content").css("display","flex")
    $(".img3_content").show() ; 
},
function(){
    
    $(".img3_content").hide() ; 
})
$(".img4").hover(
    
    function(){
    $(".img4_content").css("display","flex")
    $(".img4_content").show() ; 
},
function(){
    
    $(".img4_content").hide() ; 
}) 
$(".img5").hover(
    
    function(){
    $(".img5_content").css("display","flex")
    $(".img5_content").show() ; 
},
function(){
    
    $(".img5_content").hide() ; 
}) 
$(".img6").hover(
    
    function(){
    $(".img6_content").css("display","flex")
    $(".img6_content").show() ; 
},
function(){
    
    $(".img6_content").hide() ; 
}) 

$(".all").click(function(){
    $(".img2, .img3, .img5, .img6, .img4, .img1").hide() ;
    $(".img2, .img3, .img5, .img6, .img4, .img1").show(1000) ;
    var wid=$(window).width();
    if(wid<=768){
        
      
        $(".projects").css({
            "height": "302vh",
    "width": "100%",
    "background-color": "whitesmoke",
    "position": "relative",
    "display": "grid",
    "grid-template-rows": "4% 3% 90%",
        })
        $(".container_images").css({
            "position": "absolute",
            "left": "7%",
            "top": "8%",
            "width": "80%",
            "height": "88%",
            "display": "grid",
            "grid-template-columns": "100%",
            "grid-template-rows": "16.66% 16.66% 16.66% 16.66% 16.66% 16.66%"
        })
    }
})
$(".mobile").click(function(){
    $(".img2, .img3, .img5, .img6, .img4, .img1").hide() ;
    $(".img2, .img3, .img5, .img6").hide(1000) ;
    $(".img1, .img4").show(1000) ;
    
   var wid=$(window).width();
   if(wid<=768){
      =
     
       $(".projects").css({
        "height": "107vh",
        "width": "100%",
        "background-color": "whitesmoke",
        "position": "relative",
        "display": "grid",
        "grid-template-rows": "12% 4% 34%",
       })
       $(".container_images").css({
        "position": "absolute",
        "left": "7%",
        "top": "20%",
        "width": "80%",
        "height": "74%",
        "display": "grid",
        "grid-template-columns": "100%",
        "grid-template-rows": "50% 50%",
       })
   }
})
$(".coffee").click(function(){
    $(".img2, .img3, .img5, .img6, .img4, .img1").hide() ;
    $(".img4, .img1, .img5, .img6").hide(1000) ;
    $(".img2, .img3").show(1000) ; 
    var wid=$(window).width();
    if(wid<=768){
      
      
        $(".projects").css({
         "height": "107vh",
         "width": "100%",
         "background-color": "whitesmoke",
         "position": "relative",
         "display": "grid",
         "grid-template-rows": "12% 4% 34%",
        })
        $(".container_images").css({
         "position": "absolute",
         "left": "7%",
         "top": "20%",
         "width": "80%",
         "height": "74%",
         "display": "grid",
         "grid-template-columns": "100%",
         "grid-template-rows": "50% 50%",
        })
    }
})
$(".Video").click(function(){
    $(".img2, .img3, .img5, .img6, .img4, .img1").hide() ;
    $(".img4, .img1, .img2, .img3").hide(1000) ;
    $(".img5, .img6").show(1000) ; 
    var wid=$(window).width();
    if(wid<=768){
       
      
        $(".projects").css({
         "height": "107vh",
         "width": "100%",
         "background-color": "whitesmoke",
         "position": "relative",
         "display": "grid",
         "grid-template-rows": "12% 4% 34%",
        })
        $(".container_images").css({
         "position": "absolute",
         "left": "7%",
         "top": "20%",
         "width": "80%",
         "height": "74%",
         "display": "grid",
         "grid-template-columns": "100%",
         "grid-template-rows": "50% 50%",
        })
    }
})
(function autoSlider(){
   $(".client_op .active").each(function(){
       if(!$(this).is(':last-child')){
        $(this).delay(3000).fadeOut(1000,function(){
            $(this).removeClass('active').next().addClass('active').fadeIn(2000) ; 
            autoSlider();
        })  
    }else{
        $(this).delay(3000).fadeOut(1000,function(){
            $(this).removeClass('active') ;
            $(".client_op div").eq(0).addClass('active').fadeIn(2000)  ;
            autoSlider() ;  
        })
    }
   })
}()) ;

$(".about").click(function(){
    $('html body').animate({
scrollTop:$('.services').offset().top
    },1000) ;
})

});      

