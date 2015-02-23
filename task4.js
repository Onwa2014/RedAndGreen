(function () {
  var count=1;

  document.getElementById("button").addEventListener('click',function () {
  	count++;

  	if (count%2 === 0) {
  		document.getElementById("square").style.backgroundColor="red";
  		document.getElementById("button").innerHTML = "Make Green";
  	}
  	else {
  		document.getElementById("square").style.backgroundColor="Green";
  		document.getElementById("button").innerHTML = "Make Red";
  	}
  });
})();