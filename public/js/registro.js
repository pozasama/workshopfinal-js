var registroInit = function(){
	$("form[name='registro']").submit(function(evt){
		console.log("escuchando submit")

		var name = $("input[name='name']").val();
		var apell = $("input[name='apell']").val();
		var user = $("input[name='user']").val();
		var email = $("input[name='email']").val();
		var clave = $("input[name='codigo']").val();



		if (localStorage.getItem(user)) {
			alert("Este usuario ya existe");

		} else {
			
			var obt = {name:name, apell:apell, user:user, email:email, clave:clave};
			localStorage.setItem(user, JSON.stringify(obt));
		};





		myrouter.evalroute();

		evt.preventDefault();

	});

};