$(function(){
	let index = 0;
	$('.img').eq(index).addClass('current-img');/*imgクラスの中から、indexと同じ番号の要素を出して、currentimgと言うくらすをつけるみたいな感じかな？*/

	setInterval(function(){
		$('.img').eq(index).removeClass('current-img');
		if(index == $('.img').length - 1){
			index = 0;
		}else{
			index++;
		}
		$('.img').eq(index).addClass('current-img');
	},5000);
});

$(function(){
	$(".menu li").hover(
		function(){
			$(this).children(".dropdown-menu").addClass("open");
		}, function(){
			$(this).children(".dropdown-menu").removeClass("open");
		}
	);
});