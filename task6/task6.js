$(function(){
	let index = 0;
	$('.img').eq(index).addClass('currentimg');/*imgクラスの中から、indexと同じ番号の要素を出して、currentimgと言うくらすをつけるみたいな感じかな？*/

	setInterval(function(){
		$('.img').eq(index).removeClass('currentimg');
		if(index == $('.img').length - 1){
			index = 0;
		}else{
			index++;
		}
		$('.img').eq(index).addClass('currentimg');
	},5000);
});