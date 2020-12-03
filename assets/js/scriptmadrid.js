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


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: new google.maps.LatLng(40.4155, -3.7074),
    mapTypeId: "roadmap",
  });
const iconBase = src="assets/images/";
  const icons = {
    montaditos: {
        name: "100 Montaditos",
        icon: iconBase + "100icon.png",
    },
    mallorquina: {
        name: "La Mallorquina",
        icon: iconBase + "cakeicon.png",
    },
    astor: {
      name: "Astor Restaurant",
      icon: iconBase + "cutleryicon.png",
    },
    sanmiguel: {
        name: "Mercado San Miguel",
        icon: iconBase + "marketicon.png",
    },
    cavabaja: {
        name: "Calle Cava Baja",
        icon: iconBase + "tapasicon.png",
    },
    landmark: {
      name: "Landmark",
      icon: iconBase + "icon.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(40.416433990191045, -3.7068666593985657),
      type: "montaditos",
    },
    {
      position: new google.maps.LatLng(40.41686585276432, -3.704739063563049),
      type: "mallorquina",
    },
    {
      position: new google.maps.LatLng(40.41285346994623, -3.709641346131572),
      type: "astor",
    },
    {
      position: new google.maps.LatLng(40.415544516331344, -3.7089624863842814),
      type: "sanmiguel",
    },
    {
      position: new google.maps.LatLng(40.4127662769096, -3.7090535171599766),
      type: "cavabaja",
    },
    {
      position: new google.maps.LatLng(40.4153, -3.6845), //Retiro Park
      type: "landmark",
    },
    {
      position: new google.maps.LatLng(40.4017, -3.7206), //Calderon
      type: "landmark",
    },
    {
      position: new google.maps.LatLng(40.4180, -3.7143), //Royal Palace
      type: "landmark",
    },
    {
      position: new google.maps.LatLng(40.4200, -3.7021), //Gran Via
      type: "landmark",
    },
    {
      position: new google.maps.LatLng(40.4155, -3.7074), //Plaza Mayor
      type: "landmark",
      place: "Plaza Mayor",
    },
  ];
  features.forEach((feature) => {
    new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map,
    });
  });



  const legend = document.getElementById("legend");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(legend);
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


/*Allows alert to show message has been sent*/

function alertFunction() {
    alert("Message has been sent!");
}

