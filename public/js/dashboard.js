dashboardInit = function(){
	$.ajax({
		url: "http://swapi.co/api/people/1/",
		succes: function(data){
			console.log(data);
			$(".luke").html(data.name);
		},
		error: function(err){
			console.log(err);
		}

	})

};