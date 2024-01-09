/****************** NAV BAR **************/
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

  /******************************loding***************************/
     
  setTimeout(function() {
    document.querySelector('.loading-screen').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 2000);

  
  setTimeout(function() {
    location.reload();
  },100000000);
/***************** language********************/
function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
  /******************End language********************/