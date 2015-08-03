// function escapeHTML (html) {
// 	var elem = document.createElement('div');
// 	elem.appendChild(document.createTextNode(html));
// 	return elem.innerHTML;
// }

// var getForm = "いいぜ";
var getUrl = location.href.split("?words=")[1];
var getFormData = decodeURIComponent(getUrl);
onload = function () {
	DJRNGenrate();
};
function getGenerateDate(){
	var geneTime = new Date();
	var geneYear = geneTime.getFullYear();
	var geneMonth = geneTime.getMonth();
	var geneDate = geneTime.getDate();
	var geneHours = geneTime.getHours();
	var geneMinutes = geneTime.getMinutes();

	var generateTime = [geneYear, geneMonth, geneDate, geneHours, geneMinutes].join("-");
	return generateTime;
}
function DJRNGenrate() {
	var canvas = document.getElementById('DJRNDraw');
	if (!canvas || !canvas.getContext) return false;
	var ctx =canvas.getContext("2d");
	var img = new Image();
	img.crossOrigin = "Anonymous";
	img.src = "DJRNSilhouette.png?" + Date.now();
	img.onload = function () {
		ctx.drawImage(img,0,0);
		ctx.fillStyle = "#000000";
		ctx.font = "60px 'MS PMincho'";
		ctx.textAlign = "center";
		ctx.fillText(getFormData, 275, 95, 500);
		// png生成
		var img_png = canvas.toDataURL("image/png");
		document.getElementById("pngDL").href = img_png;
		document.getElementById("pngDL").download = "DJRN-PNG-" + getGenerateDate();
		// JPG生成
		var img_jpg = canvas.toDataURL("image/jpeg", "0.5");
		document.getElementById("jpgDL").href = img_jpg;
		document.getElementById("jpgDL").download = "DJRN-JPG-" + getGenerateDate();
		// IE対応
		// if (!HTMLCanvasElement.prototype.toBlob) {
		// 	Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
		// 		value: function (callback, type, quality) {
		// 			var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
		// 			    len = binStr.length,
		// 			    arr = new Uint8Array(len);

		// 			for (var i=0; i<len; i++ ) {
		// 			 arr[i] = binStr.charCodeAt(i);
		// 			}
		// 			callback( new Blob( [arr], {type: type || 'image/png'} ) );
		// 		}
		// 	});
		// 	var userAsent = window.navigator.userAgent.toLowerCase();
		// 	if (userAsent.indexOf('msie') != -1) {
		// 		var ieImgPng = canvas.iePng();
		// 		document.getElementById("pngDL").href = ieImgPng;
		// 	}
		// }
	}
};