
  function myFunctionDiv1() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck1");
    var wrappingBox = document.getElementById("myCheck3");
    var walletBox = document.getElementById("myCheck4");
    var serviceBox = document.getElementById("myCheck5");
    // Get the output text
    var div1 = document.getElementById("div1");
    var arrow1 = document.getElementById("arrow1");
    var arrow2 = document.getElementById("arrow2");
    var arrow3 = document.getElementById("arrow3");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      div1.style.display = "block";		  
	  if (serviceBox.checked == true){
		arrow1.style.display = "block";
	  }
	  if (walletBox.checked == true){
		arrow2.style.display = "block";
	  }
	  if (wrappingBox.checked == true){
		arrow3.style.display = "block";
	  }
    } else {
      div1.style.display = "none";
	  arrow1.style.display = "none";
	  arrow2.style.display = "none";
	  arrow3.style.display = "none";
    }
	
  }
  function myFunctionDiv2() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck2");
    var wrappingBox = document.getElementById("myCheck3");
    var walletBox = document.getElementById("myCheck4");
    var serviceBox = document.getElementById("myCheck5");
    // Get the output text
    var div2 = document.getElementById("div2");
    var arrow4 = document.getElementById("arrow4");
    var arrow5 = document.getElementById("arrow5");
    var arrow6 = document.getElementById("arrow6");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      div2.style.display = "block";		  
	  if (serviceBox.checked == true){
		arrow6.style.display = "block";
	  }
	  if (walletBox.checked == true){
		arrow5.style.display = "block";
	  }
	  if (wrappingBox.checked == true){
		arrow4.style.display = "block";
	  }
    } else {

      div2.style.display = "none";
	  arrow6.style.display = "none";
	  arrow5.style.display = "none";
	  arrow4.style.display = "none";
    }
  }
  function myFunctionDiv3() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck3");
	var exchangeBox = document.getElementById("myCheck2");
	var networkexchangeBox = document.getElementById("myCheck6");
    var walletBox = document.getElementById("myCheck4");
	var paymentBox = document.getElementById("myCheck1");
    // Get the output text
    var div3 = document.getElementById("div3");
    var arrow4 = document.getElementById("arrow4");
    var arrow3 = document.getElementById("arrow3");
    var arrow7 = document.getElementById("arrow7");
    var arrow9 = document.getElementById("arrow9");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      div3.style.display = "block";		  
	  if (exchangeBox.checked == true){
		arrow4.style.display = "block";
	  }
	  if (walletBox.checked == true){
		arrow7.style.display = "block";
	  }
	  if (paymentBox.checked == true){
		arrow3.style.display = "block";
	  }
	  if (networkexchangeBox.checked == true){
		arrow9.style.display = "block";
	  }
    } else {

      div3.style.display = "none";
	  arrow3.style.display = "none";
	  arrow4.style.display = "none";
	  arrow9.style.display = "none";
	  arrow7.style.display = "none";
    }
  }
  function myFunctionDiv4() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck4");
	var exchangeBox = document.getElementById("myCheck2");
    var wrappingBox = document.getElementById("myCheck3");
    var serviceBox = document.getElementById("myCheck5");
    var paymentBox = document.getElementById("myCheck1");
    // Get the output text
    var div4 = document.getElementById("div4");
    var arrow7 = document.getElementById("arrow7");
    var arrow8 = document.getElementById("arrow8");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      div4.style.display = "block";		  
	  if (paymentBox.checked == true){
		arrow2.style.display = "block";
	  }
	  if (exchangeBox.checked == true){
		arrow5.style.display = "block";
	  }		  
	  if (wrappingBox.checked == true){
		arrow7.style.display = "block";
	  }
	  if (serviceBox.checked == true){
		arrow8.style.display = "block";
	  }
    } else {

      div4.style.display = "none";
	  arrow2.style.display = "none";
	  arrow5.style.display = "none";
	  arrow7.style.display = "none";
	  arrow8.style.display = "none";
    }
  }

  function myFunctionDiv5() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck5");
	var exchangeBox = document.getElementById("myCheck2");
    var walletBox = document.getElementById("myCheck4");
	var paymentBox = document.getElementById("myCheck1");
    // Get the output text
    var div5 = document.getElementById("div5");
    var arrow1 = document.getElementById("arrow1");
    var arrow6 = document.getElementById("arrow6");
    var arrow8 = document.getElementById("arrow8");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      div5.style.display = "block";
	  if (exchangeBox.checked == true){
		  arrow6.style.display = "block";
	  }
	  if (paymentBox.checked == true){
		  arrow1.style.display = "block";
	  }
	  if (walletBox.checked == true){
		  arrow8.style.display = "block";
	  }
    } else {

      div5.style.display = "none";
	  arrow1.style.display = "none";
	  arrow6.style.display = "none";
	  arrow8.style.display = "none";
    }
  }
  
  function myFunctionDiv6() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck6");
    var wrappingBox = document.getElementById("myCheck3");
    // Get the output text
    var div6 = document.getElementById("div6");
    var arrow9 = document.getElementById("arrow9");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      div6.style.display = "block";
	  if (wrappingBox.checked == true){
		  arrow9.style.display = "block";
	  }
    } else {

      div6.style.display = "none";
	  arrow9.style.display = "none";
    }
  }
  
function getVal() {
  const val = document.querySelector('customRange3').value;
  var x = document.getElementById("customRange3").value;
  var elements = document.getElementsByClassName('overview').style.transform = "scale(0.85)";
}

function myFunction() {
  var x = document.getElementById("customRange3");
  var elements = document.getElementById("overview")
  var defaultVal = x.defaultValue;
  var currentVal = x.value;
  var currentVal2 = currentVal / 100
  elements.style.transform = "scale("+ currentVal2 + ")";
}