// JavaScript Document
$(document).ready(function(){
	function selectDataByType(alldata,type) {
		const selectedDdata = [];
		for (let i = 0; i < alldata.length; i++) {
			if (alldata[i].type == type) {
				selectedDdata.push(alldata[i]);
			}
		}
		return selectedDdata;
	}
	 //AJAX service request to get the main text data from the json data store
	 $.getJSON('./index.php?action=getTextData', function(jsonObj) {
		var allText = jsonObj.allText;
		//Get the home page main text data
		var homeText = selectDataByType(allText,'home');
		$('#title_home').html('<h2>' + homeText[0].title + '<h2>');
		$('#subTitle_home').html('<h3>' + homeText[0].subTitle + '</h3>');
		$('#description_home').html('<p>' + homeText[0].description + '</p>');
		
         //Get the brand text
		 var brandText = selectDataByType(allText,'brand');
		
		brandText.forEach(brand=>{
			
			$('#title_'+brand.mark).html('<h2>' + brand.title + '<h2>');
			$('#subTitle_'+brand.mark).html('<h3>' + brand.subTitle + '</h3>');
			$('#description_'+brand.mark).html('<p>' + brand.description + '</p>');	
		});
				
	  
	// 	//Get all model text data
	
		 var modelsText = selectDataByType(allText,'models');
		
		modelsText.forEach(model=>{
			
			var mark = model.mark.toLowerCase();
			
			$('#x3dModelTitle_'+mark).html('<h2>' + model.x3dModelTitle + '<h2>');
			$('#x3dCreationMethod_'+mark).html('<p>' + model.x3dCreationMethod + '<p>');
			$('#title_'+mark).html('<h2>' + model.title + '<h2>');
			$('#subTitle_'+mark).html('<h3>' + model.subTitle + '</h3>');
			$('#description_'+mark).html('<p>' + model.description + '</p>');
			
		});
	
		
	// 	//Get the gallery contents data
	    var galleryText = selectDataByType(allText,'gallery');
		// console.log(galleryText);
		$('.title_gallery').html('<h2>' + galleryText[0].title + '<h2>');
		$('.description_gallery').html('<p>' + galleryText[0].description + '</p>');

	// 	//Get camera contents data
	var cameraText = selectDataByType(allText,'camera');
		$('.x3dCameraTitle').html('<h2>' + cameraText[0].title + '<h2>');
		$('.x3dCameraSubtitle').html('<p>' + cameraText[0].Subtitle + '<p');

	 });
});








