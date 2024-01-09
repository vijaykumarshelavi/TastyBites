/***************** language********************/
function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
  /******************End language********************/

   /****************** hambarger hide show ********************/
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }
   /****************** End hambarger hide show ********************/

   /****************** SLIDES ********************/

  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 4000); 
  }
   /****************** END SLIDES ********************/
  
  /**************************** animation ***************************/
  ScrollReveal({
	reset:true,
	distance:'60px',
	duration:2500,
	dealy:400
});

ScrollReveal().reveal('.logo',{delay:100,origin:'left'});
ScrollReveal().reveal('.dk',{delay:500,origin:'right'});
ScrollReveal().reveal('.column',{delay:800,origin:'left'});
	
	  
	 
    /****************** END animation ********************/
	   /****************** CHATBOT ********************/
   
	   window.watsonAssistantChatOptions = {
		integrationID: "92e7d3ed-9a24-4851-9541-69a67dcea373", // The ID of this integration.
		region: "au-syd", // The region your integration is hosted in.
		serviceInstanceID: "13ac3769-9f22-4310-8354-77c21249fa4f", // The ID of your service instance.
		onLoad: async (instance) => { await instance.render(); }
	  };
	  setTimeout(function(){
		const t=document.createElement('script');
		t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
		document.head.appendChild(t);
	  });
	   /****************** END CHATBOT ********************/