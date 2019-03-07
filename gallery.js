$(document).ready(function(){
    $('#drawerH').click(function(){
		$('#drawer').toggle();
		$('#centerContainer').toggleClass('marginTop');
	});
	
    $('#next').click(function(){
		 var currentImage= $('.active');
		 var nextImage=currentImage.next();
			
			if(nextImage.length){          //check if there is next image
				nextImage.addClass('active');
				currentImage.removeClass('active');
				// ('#container').css('background-image','url("nextImage")');

			 }else {                       //set the first image as next image
				 $('#slider img').first().addClass('active');
				 currentImage.removeClass('active');}
   });
    
	$('#previous').click(function(){
		var currentImage=$('.active');
		var previousImage=currentImage.prev();
		
		  if(previousImage.length){
			  previousImage.addClass('active');
			  currentImage.removeClass('active');
		  }else{
			  $('#slider img').last().addClass('active');
				 currentImage.removeClass('active');
		  }
		
	});//end previous function
	
	$('#sliderbtn').click(function(){
	         setInterval(function(){
			 var currentImage= $('.active');
			 var nextImage=currentImage.next();
			
			 if(nextImage.length){          //check if there is next image
				nextImage.addClass('active');
				currentImage.removeClass('active');
			 }else {                       //set the first image as next image
				 $('#slider img').first().addClass('active');
				 currentImage.removeClass('active');}
		},3000);
	});
});

 