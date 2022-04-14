(function (global) {
	// SET UP A MESSAGE FOR OUR UTILITY
	var ajaxUtils = {};

	// RETURNS AN HTTP REQUESTS OBJECT
	function getRequestObject(){
		if (window.XMLHttpRequest)
		{
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject)
		{
			// FOR VERY OLD IE BROWSER
			return(new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else
		{
			global.alert("Ajax is not supported");
			return(null);
		}
	}

	// MAKE AN AJAX GET REQUEST  TO "REQUESRURL"

	ajaxUtils.sendGetRequest = function(requestUrl,responseHandler, isJsonResponse){
		var request = getRequestObject();
		request.onreadystatechange = function(){
			handleResponse(request, responseHandler,isJsonResponse);
		};
			request.open("GET", requestUrl,true);
			request.send(null); //FOR POST ONLY

	}

	// ONLY CALLS USER PROVIDED "RESPOSNE HANDLER"
	// FUNCTION IF RESPONSE IS READY
	// NOT AN ERROR

	function handleResponse(request,responseHandler,isJsonResponse){
		if((request.readyState == 4) && (request.status==200))
		{
			// responseHandler(request);
			//DEFUALT JSONRESPONSE TO TRUE

			if (isJsonResponse == undefined) {
				isJsonResponse = true;
			}
			if (isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else
			{
				responseHandler(request.responseText);
			}
		}
	}

	// EXPOSE UTILITY TO GLOBAL OBJECT
	global.$ajaxUtils = ajaxUtils;
})(window);