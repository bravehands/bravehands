window.onload = choosePic;

var myPix = new Array("slideout/1.jpg","slideout/2.jpg","slideout/3.jpg","slideout/4.jpg","slideout/5.jpg","slideout/6.jpg","slideout/7.jpg","slideout/8.jpg","slideout/9.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}