var initLogin = function(){
	$("form[name='login']").submit(function(evt){
		console.log("escuchando submit");
		var user = $("input[name='usuario']").val();
		var codigo = $("input[name='codigo']").val();
		var userinfo = localStorage.getItem(user);

		
		if (userinfo) {
			var storage = JSON.parse(userinfo);
			if (codigo==storage.clave) {
				sessionStorage.setItem(user, true);
              
			} else{
				alert("La clave no es correcta");
			}

		}else {
			alert("El usuario no existe");
		};

		myrouter.evalroute();
		evt.preventDefault();
	});
};


