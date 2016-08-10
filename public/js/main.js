router = function(){
	var myrouter = {};
	
	myrouter.evalroute = function(){
		if (app.isRegistered())
		{		  
		
			if (app.isLoged()) {
				app.loadTemplate("dashboard", dashboardInit)
			} else {
				app.loadTemplate("login", initLogin)
			}			
		
		} else {
			app.loadTemplate("registro", registroInit)
		}
		
	};
	
	return myrouter;

}();


 app = function(myrouter){

	 var myapp = {};

	
	 myapp.init = function(){
	 	$(document).ready(function(){
	 		console.log('--init app--');
	 		myrouter.evalroute();
	 	});
	 };

	 myapp.init();

	 myapp.loadTemplate = function(partialName, cbk){
	 	$( "#main-container" ).load("partials/"+partialName+".html", cbk);

	 };

	 myapp.isRegistered = function(){
	 	if (localStorage)
	 		for (var i=0; i<localStorage.length ; i++) {
	 			var key = localStorage.key(i);
	 			return true;
	 		}
	 		return false;
	 };

	 myapp.isLoged = function(){
	 	if (sessionStorage.length>0)
	 	{	 			 
	 		return true;	 	
	 	}
	 	return false;
	};


	
	return myapp; 	

 }(router);
	