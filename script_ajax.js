// EVENT HANDLER
document.addEventListener("DOMContentLoaded",
	function(event){
		// UNOBSTUCTIVE EVENT BINDING
		document.querySelector("button").addEventListener("click",function() {
			//  CALL SERVER TO GET NAME

			$ajaxUtils.sendGetRequest("C:/Users/ranki/Coursera_Test/Coursera_Test/data/name.txt",
				function(request){
					var name = request.responseText;
					document.querySelector("#content").innerHTML = "<h2> Hello " + name + "!</h2>";
				});

			
		});
	});