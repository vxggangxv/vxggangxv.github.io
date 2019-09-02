$(document).ready(function() {
	
	pageFn();
	headerFn();
	
});

function pageFn () {
	var deleteLog = false;
	$('#wrapper-piling').pagepiling({
		direction: 'horizontal',
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4'],
		sectionsColor: ['#f7f7f7', '#f7f7f7', '#f7f7f7', '#f7f7f7'],
		navigation: {
			'position': 'top',
			'tooltips': ['About me', 'Service', 'Portfolio', 'Contact']
		},
		afterRender: function(index){
			$('#pp-nav').addClass('custom');
		},
		afterLoad: function(anchorLink, index){
				$('.section .content').addClass("active");
			
			deleteLog = true;
		},
		onLeave: function(index, nextIndex, direction){
			$('.section .content').removeClass("active");
		}
	});

	$('.section1 .content').addClass("active");
}

function headerFn() {
	var header = $(".header"),
		wrapperGnb = $(".wrapper-gnb"),
		menu = $("#menu li a"),
		navTab = $(".nav-tab");
	
	menu.click(function() {
		toggleFn();
	});
	navTab.click(function() {
		toggleFn();
	});
	
	function toggleFn () {
		header.toggleClass("active");
		wrapperGnb.toggleClass("active");
	}
}