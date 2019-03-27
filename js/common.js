$(document).on('mouseenter mouseleave', '#gnb .dep1 > li', gnbRoll);

function gnbRoll(e){
	if (e.type == 'mouseenter'){
		$(this).find('hr').stop().animate({ width: '100%', left: 0 }, 200);
		$('.dep2').stop().animate({ height: 330 }, 200);
		$('#menubg').stop().animate({ height: 330 }, 200);
	} else{
		$(this).find('hr').stop().animate({ width: 0, left: '50%' }, 100);
		$('.dep2').stop().animate({ height: 0 }, 100);
		$('#menubg').stop().animate({ height: 0 }, 100);
	}
}
