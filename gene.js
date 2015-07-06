function escapeHTML (html) {
	var elem = document.createElement('div');
	elem.appendChild(document.createTextNode(html));
	return elem.innerHTML;
}

// var getForm = "いいぜ";
var getUrl = location.href.split("?words=")[1];
var getFormData = decodeURIComponent(getUrl);
onload = function () {
	DJRNGenrate();
};
function DJRNGenrate() {
	var canvas = document.getElementById('DJRNDraw');
	if (!canvas || !canvas.getContext) return false;
	var ctx =canvas.getContext("2d");
	var img = new Image();
	img.src = "DJRNSilhouette.png?" + new Date().getTime();
	img.onload = function () {
		ctx.drawImage(img,0,0);
		ctx.fillStyle = "#000000";
		ctx.font = "60px 'MS PMincho'";
		ctx.textAlign = "center";
		ctx.fillText(escapeHTML(getFormData), 275, 95, 500);
	}
};



