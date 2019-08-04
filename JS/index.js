window.onload = function () {
	var odiv = document.getElementById('pic');
	var oul = odiv.getElementsByTagName('ul')[0];
	var oli = odiv.getElementsByTagName('li');
	oul.innerHTML = oul.innerHTML + oul.innerHTML;
	oul.style.width = oli[0].offsetWidth * oli.length +
		'px';

	function move() {
		if (oul.offsetLeft < -oul.offsetWidth / 2) {
			oul.style.left = '0';
		}
		oul.style.left = oul.offsetLeft - 2 + 'px';
		/*if(oul.offsetLeft>0){
			oul.offsetLeft=-oul.offsetWidth/2+'px';
		}
			oul.style.left = oul.offsetLeft + 2 + 'px';
			向右滚动时
*/

	}

	var timer = setInterval(move, 30);
	odiv.onmouseover = function () {
		clearInterval(timer);
	}
	odiv.onmouseout = function () {
		timer = setInterval(move, 30);
	}


	init();
	var position = 0; /*获取当前点击圆圈的位置*/
	function init() {
		var rollimg = document.getElementById('rollimg');
		var imgCon = document.getElementById('imgCon');
		var one = document.getElementById('one');
		var lilist = Array.from(document.getElementsByTagName('li'));

		for (var i = 0; i < lilist.length; i++) {
			lilist[i].addEventListener("click", liclickHander);
		}

    setInterval(function(){
			imgCon.style.left = -50 * position + "px";
		},30);
		function liclickHander(e) {
			position = lilist.indexOf(this); /*查当前点击的在数组中占第几位*/
			imgConmove();
		}

		function imgConmove() {
			imgCon.style.left = -60 * position + "px";
		}

	}
}