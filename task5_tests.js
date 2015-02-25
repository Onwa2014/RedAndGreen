var color = getComputedStyle(document.getElementById("mySquare")).backgroundColor;

	if(color === "rgb(0, 128, 0)") {
		window.alert("success");
	}

	else {
		window.alert("failure");
	}


	setBackgroundColor("mySquare","red");



		if(document.getElementById("mySquare").style.backgroundColor==="red") {
			window.alert("success");
		}

		else {
			window.alert("failure");
		}