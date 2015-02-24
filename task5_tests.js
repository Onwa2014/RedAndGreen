(function () {
	setBackgroundColor("mySquare","red");

		if(document.getElementById("mySquare").style.backgroundColor==="red") {
			window.alert("success");
		}
		else {
			window.alert("failure");
		}
}) ();