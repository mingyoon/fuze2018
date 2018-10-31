/* global $ */
$(document).ready(function(){
    $(function(){ var lastScrollTop = 0, delta = 15; 
    $(window).scroll(function(event){ var st = $(this).scrollTop(); if(Math.abs(lastScrollTop - st) <= delta) return; 
    // 스크롤값을 받아서 리턴한다. 
    if ((st > lastScrollTop) && (lastScrollTop>-1)) 
    { $("#header").addClass('hide'); 
      $('.symbol').addClass('show-item');
      $('.nav-bottom').addClass('nar-nav');
      $('.top-btn').addClass('up');
    // 스크롤을 내렸을때 
    } else { 
        $("#header").removeClass('hide');
        $('.symbol').removeClass('show-item');
        $('.nav-bottom').removeClass('nar-nav');
        $('.top-btn').removeClass('up');
        
    // 스크롤을 올렸을때
    } lastScrollTop = st; }); });
    
    $('#session1').hover(function(){
        $('#s-title1').toggleClass('color');
        $('#d-line1').toggleClass('color');
    });
    $('#session2').hover(function(){
        $('#s-title2').toggleClass('color');
        $('#d-line2').toggleClass('color');
    });
    $('#session3').hover(function(){
        $('#s-title3').toggleClass('color');
        $('#d-line3').toggleClass('color');
    });
    $('#session4').hover(function(){
        $('#s-title4').toggleClass('color');
        $('#d-line4').toggleClass('color');
    });
    $('#session5').hover(function(){
        $('#s-title5').toggleClass('color');
        $('#d-line5').toggleClass('color');
    });
    $('#session6').hover(function(){
        $('#s-title6').toggleClass('color');
        $('#d-line6').toggleClass('color');
    });
    $('#session7').hover(function(){
        $('#s-title7').toggleClass('color');
        $('#d-line7').toggleClass('color');
    });
    $('#session8').hover(function(){
        $('#s-title8').toggleClass('color');
        $('#d-line8').toggleClass('color');
    });
    
    $('#ticket1').hover(function(){
        $('#price1').toggleClass('color');
        $('#d-line-ticket1').toggleClass('ticketLine');
        $('#eventbox1').toggleClass('hover');
    });
    $('#ticket2').hover(function(){
        $('#price2').toggleClass('color');
        $('#d-line-ticket2').toggleClass('ticketLine');
        $('#eventbox2').toggleClass('hover');
    });
    $('#ticket3').hover(function(){
        $('#price3').toggleClass('color');
        $('#d-line-ticket3').toggleClass('ticketLine');
        $('#eventbox3').toggleClass('hover');
    });
    
    $('.mobile-menu').click(function(){
        $('.menu').addClass('show');
    });
    
    $('.menu').click(function(){
        $('.menu').removeClass('show');
    })
    
    $('.top-btn').click(function(){
        $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
    });
    
    for( var i = 0; i <= $('.speaker-grid li').last().index() ; i++)	{
		$('.speaker-grid li').eq(i).children('.speaker-box').css('background-image', 'url(/images/speaker'+i+'.png?ver=1.3)');
	}
	for( var i = 0; i <= $('.artist-grid li').last().index() ; i++)	{
		$('.artist-grid li').eq(i).children('.artist-box').css('background-image', 'url(/images/artist'+i+'.png?ver=1.1)');
	}
	
	$('#KR, #EN').click(function(){
	    $('#EN, .en').toggleClass('lang-hide');
	    $('#KR, .kr').toggleClass(' lang-hide');
	});

});

