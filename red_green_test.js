var rg = new RedOrGreen("mysquare");

   rg.makeGreen();
   // myElements backgound color should be green now
   if(document.getElementById("mysquare").style.backgroundColor === "green") {
   		window.alert("sucess");
   }
   else {
   		window.alert("Failure");
   }
    
   rg.makeRed();
   // myElements backgound should be red now
   if(document.getElementById("mysquare").style.backgroundColor === "red") {
   		window.alert("sucess");
   }
   else {
   		window.alert("Failure");
   }