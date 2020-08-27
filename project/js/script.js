$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {  //500 is the time in milliseconds after which the gif will fade out  
	/*first the icon will fade out after 500 milliseconds then after another 250 milliseconds the background will dissappear  */
		$(".loader").fadeOut(750);
	});

	/*placed here to prevent the bug which causes overlapping of images when the webisted is first opened for the first time and when refreshed the bug dissappears  */  
	/*calling the isotope plug-in*/
	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

})


/*typing the document.ready function  */


$(document).ready(function()  /*this function executes the code in the 
curly braces when the webpage gets ready */  /*play 5000*/
{
	$('#slides').superslides({animation:'fade',play: 5000,pagination: false});  /*the activation of the superslides which was done from the wbsite console can be now done directly from here  */
	/* # indicates for the id  */
	/*inside the superslides if we use animation inside a curly bracket and using colon if we use fade then it will give a fade effect to the superslides image in the website*/
	/*the above option animation can be obtained from the github page in the options section  */
	/* in the play we can use the total milliseconds after which the images will automaticaly change to the other  */
	/*if we set the pagination as false then we wont get the changinging slides button on the bootom of the website  */


	var typed = new Typed(".typed",
	{
		strings: ["Web-Developer","Programmer","STUDENT"],
		//strings: ["STUDENT","Android-Developer","Web-Developer"],  /*all this inside the strings will be displayed one after the other in the sub heading  */
		typeSpeed: 60,  /*all this are the properties of the typed.min.js folder which can be obtained from the respective github page  */
		loop: true, //true
		startDelay: 100,
		showCursor: false
	}
	);   /*inside the tped we will put reference to the element  */



	/*the below is the setup code of owl-carousel which is available in the basic part of demo section of its github page  */
	$('.owl-carousel').owlCarousel(
		{
	    loop:true,
	    //margin:10, /*dont need when we want to add different items with different pie charts */
	    //nav:true,
	    items: 4,
	    responsive:{  // change the number of items based on the screen size 
	        0:{
	            items:1    //this means when the screen sie is between 0 and 480 pixels then it will show only one item at once.
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
    	}
	});


	/*the pie-chart will show the actual percentage and the track line will activate only when we will scroll down to the pie chart section  */
	var skillsTopOffset = $(".skillsSection").offset().top;   //it will store the position of the skill section
	//offset will the give the vertical as well as the horizontal position of the respective class
	/*console.log(skillsTopOffset);  --> will give the position of the skills section from the top on the console section of the inspect page  */
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;


	$(window).scroll(function()
	{
		//window.pageYOffset gives the position of the current screen from the top 
		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200)  /*200 is added to delay it a bit because otherwise as soon as the 
		 skill section is reached the pie chart will activate which we dont want as we want the user to see it   */
		{
			/*getting started code for the easy pie chart got from the github page  */
			$('.chart').easyPieChart({   /* this was the original code which was not inside the if statement which is 
			later copied to activate the pie chart on scroll  */
            //your options goes here
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false, //'#0d0c0b',  /*false to remove the color for the non-selected portion in the pie chart  */
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent)  /*will increase the percentage number from zero to the required percentage along with the pie-chart line circling from zero  */
            {  /* got from the callbacks part of the github page of easy pie-chart  */
            	$(this.el).find('.percent').text(Math.round(percent));
		    }


    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});


	/*for the fancy-box plug-in  */
	$("[data-fancybox").fancybox();

	/*earlier isotope code was placed here  */


	/*for the execution of the filter buttons  */
	$("#filters a").click(function()
	{	

		$("#filters .current").removeClass("current");
		$(this).addClass("current");  //this refers to the button which is clicked

		var	selector = $(this).attr("data-filter");

		/*calling the isotope plug-in when the buttons are clicked */
		$(".items").isotope({
		filter: selector,
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}


	});

		//inside a click handler return false means dont do anything else 
		return false;


	});

/*
	const nav = $("#navigation");  //const can never be over-written
	const navTop = nav.offset().top;


	$(window.on("scroll", stickyNavigation))   //means when windows is scrolled then execute this code

	function stickyNavigation()
	{

		var body = $("body");

		if($(window).scrollTop() >= navTop)
		{
			body.addClass("fixedNav");
		}
		else
		{
			body.removeClass("fixedNav");
		}

	}




});

*/

$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");  /*slow--> speed of the animation */

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});


