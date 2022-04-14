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

	ajaxUtils.sendGetRequest = function(requestUrl,responseHandler){
		var request = getRequestObject();
		request.onreadystatechange = function(){
			handleResponse(request, responseHandler);
		};
			request.open("GET", requestUrl,true);
			request.send(null); //FOR POST ONLY

	}

	// ONLY CALLS USER PROVIDED "RESPOSNE HANDLER"
	// FUNCTION IF RESPONSE IS READY
	// NOT AN ERROR

	function handleResponse(request,responseHandler){
		if((request.readyState == 4) && (request.status==200))
		{
			responseHandler(request);
		}
	}

	// EXPOSE UTILITY TO GLOBAL OBJECT
	global.$ajaxUtils = ajaxUtils;
})(window);