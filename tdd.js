function TestBlock(id) {
//create a new div  element using 
	 	var Mila = document.createElement("div");

	 	// style the new div that you have created 
	 	Mila.id="mila_wam" + id;
	 	Mila.style.height="300px";
	 	Mila.style.width="300px";
	 	Mila.style.border="5px solid black";
	 	Mila.style.display="inline-block";

		document.body.appendChild(Mila);
		

		this.id=Mila.id;
		this.message= function(msg){
			Mila.innerHTML=msg;
		}
}



var assert = {
	i:0,
	pass:0,

	 equals: function(massage,result,newmsg)
	 {
	 	
		var tb = new TestBlock (this.i);
	 	//append the div you have created to the body of the HTML so that it can show
	 
		//this will check if the square is red or it's green.
		var rg = new RedOrGreen(tb.id);
		if(massage === result) {
			tb.message(newmsg);
			rg.makeGreen();
			this.pass++;
			//the pass++ is there so it can increment.
		}
		else {
			tb.message(newmsg);
			rg.makeRed();
		}
			this.i++;//same as here it's for it to increment...
	}
}
var TestMyCode = { // this is an object literal and it has a method which is run
	run:function(name,assertTest){
		this.name=name;
		assertTest(assert);
	}
}

//function used to store the results.
function results() {
	//create paragraph(p)
	var amzo = document.createElement("p");
	//append p element into the body of HTML.
	document.body.appendChild(amzo);
	//set to specified text 
	amzo.innerHTML = "Passed tests are " + assert.pass + " out of " +assert.i;
}