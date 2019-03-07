
$('document').ready(function(){

	 $('#drawerH').click(function(){
		$('#drawer').toggle();
		$('form').toggleClass('marginTop');
 });
 
 
   
  $('#share').click(function(){ 
	 var datab = firebase.database().ref().child('story');//firebase reference
	 var title=$('#title').val();
	 var Author=$('#author').val();
	 var story=$('#story').val();
			if(title !=='' & Author!=='' & story!=='') {
			   datab.push().set({
					title:title,
					Author:Author,
					story:story
			});
			$('#share').click(function(){
			$('form').hide();
			$('#dialog').show();
		   return false;
			});
	}//end if
	else $('#error').text('All input must be field');
 });
 
});
	