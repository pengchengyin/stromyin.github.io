var mybutton = document.querySelector('button');
var myHanding = document.querySelector('h1');
myHanding.textContent = "Hello world!";

mybutton.onclick = function(){
	setName();
}
function setName(){
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name',myName);
	myHanding.textContent = 'Hello,' + localStorage.getItem('name') + '!';
}

if(!localStorage.getItem('name')){
	setName();
}else{
	myHanding.textContent = 'Hello,' + localStorage.getItem('name') + '!';
}

var myHtml = document.querySelector('html');
myHtml.onclick = function(){
	var imgSrc = document.querySelector('img').getAttribute('src');
	if(imgSrc === 'img/IMG_20180903_202752.jpg'){
		imgSrc = 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015031302.jpg';
	}else{
		imgSrc = 'img/IMG_20180903_202752.jpg';
	}
	document.querySelector('img').setAttribute('src',imgSrc);
}