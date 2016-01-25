function generateImage(imgVar){
	//init canvas
	var canvas = document.createElement("canvas");
	var imageObj = new Image();
	imageObj.src = "img/" + imgVar.id +".jpg";
	canvas.height = imageObj.height;
	canvas.width = imageObj.width;
	var context = canvas.getContext("2d");
	
	//gather data
	var nameKas = document.getElementById("name-kas");
	var nameKo = document.getElementById("name-ko");
	var nameKam = document.getElementById("name-kam");
	var nameKa = document.getElementById("name-ka");
	var nameKuo = document.getElementById("name-kuo");
	
	//do the drawing
	context.fillStyle = "black";
	context.font = imgVar.getAttribute('font');
	context.fillStyle = imgVar.getAttribute('textColor');
	context.drawImage(imageObj, 0, 0);
	
	for (var i = 0; i < imgVar.attributes.length; i++) {
		var attrib = imgVar.attributes[i];
		if (attrib.specified && attrib.name.substring(0,2) == "n-") {
			var textValue = '';
			if (attrib.name.substring(2, attrib.name.length-1) == "kas"){
				textValue = nameKas.value
			}
			if (attrib.name.substring(2, attrib.name.length-1) == "ko"){
				textValue = nameKo.value
			}
			if (attrib.name.substring(2, attrib.name.length-1) == "kam"){
				textValue = nameKam.value
			}
			if (attrib.name.substring(2, attrib.name.length-1) == "ka"){
				textValue = nameKa.value
			}
			if (attrib.name.substring(2, attrib.name.length-1) == "kuo"){
				textValue = nameKuo.value
			}
			context.fillText(textValue, attrib.value.split(',')[0], attrib.value.split(',')[1])
		}
	}
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
	document.getElementById("result_download").setAttribute('href',image);
	document.getElementById("result").setAttribute('src', image);
}