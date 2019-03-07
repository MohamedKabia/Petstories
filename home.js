$(document).ready(function(){
    var datab = firebase.database().ref().child('story');//firebase reference
	datab.once('value',function(snapshot){
	snapshot.forEach(function(childSnapshot) {
    var data = childSnapshot.val();//get snapshot of database
	 
	 let result='';
	 var insta='<a href="instagram.com" target="_blank"><i class=" icon fab fa-instagram"></i></a>';
	 var faceb='<a href="facebook.com" target="_blank"><i class=" icon fab fa-facebook-square"></i></a>';
	 var snapc='<a href="#"><i class=" icon fab fa-snapchat"></i></a>';
	 
	 result +='<ul>';
	 result +='<li>Title: '+ data.title +'</li>';
	 result +='<li>'+ data.story +'</li>';
	 result +='<li>Author: '+ data.Author +'</li>';
	 result +='<li style="background:rgba(0,0,0,0.6); color:white; padding-left:0;">Share on: ' +' '+ insta +' '+ faceb +' '+ snapc + ' </li>';	
	 result +='</ul>';
	
     $('#stories').append(result);
	
		});
	});
	
	
	 $('#drawerH').click(function(){
		$('#drawer').toggle();
		$('h1').toggleClass('marginTop');
 });
 
});