document.addEventListener ("DOMContentLoaded",
	function(event){
		//UNOBSTRUcitVE EVENT BULTDING
		document.querySelector("button").addEventListener("click",function() {

			//CSLL SERVER TO GET NAME
			$ajaxUtils.sendGetRequest("C:/Users/ranki/Coursera_Test/Coursera_Test/JSON/name.json",
				function(res){
					var message = res.firstName + " " + res.lastName
					if (res.likesChineseFood) {
						message += " likes Chinese Food";
					}
					else {
						message += " doesn't likes Chinese Food";
					}
					message += " and uses ";
					message += res.numberOfDisplays + 1;
					message += " display for coding";

					document.querySelector("#content").innerHTML = "<h2>" + message + "</h2"
				});
		});
	}
);