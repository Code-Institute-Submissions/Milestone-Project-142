/*--------------------------------Fade animation on content when scrolling through page */
const appearOptions = {
	threshold: 0.4,
	rootMargin: "0px 0px 0px 0px"
};
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target);
			}
		})
	},
	appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
})

/*---------------------------------Back to top button */
backToTopButton = document.querySelector('#back-to-top-btn');


backToTopButton.addEventListener("click", backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/*---------------------------------Navbar hide on click */

$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });


/*---------------------------------------Google Maps API */


function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 40.426775, lng: -3.703790 },
  };


// Code as instructed by Google Documentation along with following the YouTube Tutorial by Traversy Media. Link in README

  var map = new google.maps.Map(document.getElementById("map"), options);

	/*Setting the coordinates of different locations in Madrid for my markers */
	var markers = [
        {
            latlong: {lat: 40.4530, lng: -3.6883},
            iconImage: "assets/images/orange30.png",
            content: "<img src='assets/images/bernabeu.png' height=60% width=60%><h4>Santiago Bernabeu</h4>"
        },
        {
            latlong: {lat: 40.4153, lng: -3.6845},
            iconImage: "assets/images/orange30.png",
            content: "<img src='assets/images/retiro.png' height=60% width=60%><h4>Retiro Park</h4>",
        },
        {
            latlong: {lat: 40.4017, lng: -3.7206},
            iconImage: "assets/images/orange30.png",
            content: "<img src='assets/images/calderon.png' height=60% width=60%><h4>Estadio Calderon</h4>",
        },
        {
            latlong: {lat: 40.4180, lng: -3.7143},
            iconImage: "assets/images/orange30.png",
            content: "<img src='assets/images/madridmain.png' height=60% width=60%><h4>Royal Palace</h4>",
        },
        {
            latlong: {lat: 40.4200, lng: -3.7021},
            iconImage: "assets/images/orange30.png",
            content: "<img src='assets/images/granvia.png' height=60% width=60%><h4>Gran Via</h4>",
        },
		{
            latlong: {lat: 40.4155, lng: -3.7074},
            iconImage: "assets/images/orange30.png",
            content: "<img src='assets/images/plazamayor.png' height=60% width=60%><h4>Plaza Mayor</h4>",
        },
	];

for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

function addMarker(props) {
    var marker = new google.maps.Marker({
        position: props.latlong,
        map: map,
    });

    if (props.iconImage) {
        marker.setIcon(props.iconImage);
        }

    if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: props.content,
        });
    

        marker.addListener("click", function(){
            infoWindow.open(map, marker);
            
        });
    }
}




/*----------------------------------Read more function*/
function readMore(city) {
	let dots = document.querySelector(`.card[card-num="${city}"] .dots`);
	let moreText = document.querySelector(`.card[card-num="${city}"] .more`);
	let btnText = document.querySelector(`.card[card-num="${city}"] .myBtn`);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.textContent = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.textContent = "Read less";
		moreText.style.display = "inline";
	}
}


/*----------------------------------Email function*/

function sendMail(contactForm){
    emailjs.send("gmail","madrid-email",{
        "from_name":contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("Success", response);
        },
        function(error) {
            console.log("Failed",error);
        }
    );
    return false;
}
}


