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
const mediaQuery = window.matchMedia('(min-width: 1000px)')
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.LatLng(40.41733521420438, -3.7065231865401853),
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

function addMarker(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map,
        });
        marker.info = new google.maps.InfoWindow({
          content: feature.infoContent
        });

        google.maps.event.addListener(marker, 'click', function() {
          marker.info.open(map, marker);
        });
      }

  const features = [
    {
      position: new google.maps.LatLng(40.41963937438271, -3.710712092531764),
      type: "montaditos",
      infoContent: "<h2 class='locations-link'>100 Montaditos</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/Cervecer%C3%ADa+100+Montaditos/@40.4177444,-3.7105404,15z/data=!4m8!1m2!2m1!1s100+montaditos!3m4!1s0x0:0x7669f25b6792ab75!8m2!3d40.4187259!4d-3.7108389' >Calle de Felipe V, 4, 28013</a>",
    },
    {
      position: new google.maps.LatLng(40.41686585276432, -3.704739063563049),
      type: "mallorquina",
      infoContent: "<h2 class='locations-link'>La Mallorquina</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/La+Mallorquina/@40.4177437,-3.7105404,15z/data=!3m1!5s0xd42287e6125da65:0xd208870869ee8b84!4m8!1m2!2m1!1sla+mallorquina!3m4!1s0xd42287e69d15b8d:0x1501ee0d7d619ce7!8m2!3d40.4166836!4d-3.704775' >Puerta del Sol, 8, 28013</a>",
    },
    {
      position: new google.maps.LatLng(40.41285346994623, -3.709641346131572),
      type: "astor",
      infoContent: "<h2 class='locations-link'>Astor Restaurant</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/%C3%81stor+gastro-place/@40.412688,-3.711754,17z/data=!3m1!4b1!4m5!3m4!1s0xd4227d62756f371:0x80a15bc585f4b264!8m2!3d40.412688!4d-3.7095653' >Calle del Almendro, 9, 28005</a>",
    },
    {
      position: new google.maps.LatLng(40.415544516331344, -3.7089624863842814),
      type: "sanmiguel",
      infoContent: "<h2 class='locations-link'>Mercado San Miguel</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/Mercado+de+San+Miguel/@40.4153794,-3.7111584,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287921196e2d:0x162fe6d34dd190e8!8m2!3d40.4153794!4d-3.7089697' >Plaza de San Miguel, 28005</a>",
    },
    {
      position: new google.maps.LatLng(40.4127662769096, -3.7090535171599766),
      type: "cavabaja",
      infoContent: "<h2 class='locations-link'>Calle Cava Baja</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/Calle+de+la+Cava+Baja,+28005+Madrid,+Spain/@40.4125294,-3.7111993,17z/data=!3m1!4b1!4m5!3m4!1s0xd4227d620613c77:0xfa4f03e2f4864f07!8m2!3d40.4125294!4d-3.7090106' >Calle de la Cava Baja, 28005</a>",
    },
    {
      position: new google.maps.LatLng(40.4153, -3.6845), //Retiro Park
      type: "landmark",
      infoContent: "<h2 class='locations-link'>Retiro Park</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/El+Retiro+Park/@40.4152606,-3.6866882,17z/data=!3m1!4b1!4m5!3m4!1s0xd42289ff511827b:0x9e6c2716b524a3ae!8m2!3d40.4152606!4d-3.6844995' >Plaza de la Independencia, 7, 28001</a>",
    },
    {
      position: new google.maps.LatLng(40.4180, -3.7143), //Royal Palace
      type: "landmark",
      infoContent: "<h2 class='locations-link'>Royal Palace</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/Royal+Palace+of+Madrid/@40.4152553,-3.7195188,13z/data=!4m8!1m2!2m1!1sroyal+palace!3m4!1s0xd42287e7da4a9c1:0x2e7fec79d6ce4851!8m2!3d40.417955!4d-3.714312' >Calle de Bailén, 28071</a>",
    },
    {
      position: new google.maps.LatLng(40.4200, -3.7021), //Gran Via
      type: "landmark",
      infoContent: "<h2 class='locations-link'>Royal Palace</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/C%2F+Gran+V%C3%ADa,+Madrid,+Spain/@40.4189435,-3.6990306,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287d6da3df33:0xe119406d894c5d21!8m2!3d40.4189435!4d-3.6968419' >Gran Via,</a>",
    },
    {
      position: new google.maps.LatLng(40.4155, -3.7074), //Plaza Mayor
      type: "landmark",
      infoContent: "<h2 class='locations-link'>Plaza Mayor</h2><br> <a target=”_blank” class='locations-link' href='https://www.google.co.uk/maps/place/Plaza+Mayor/@40.415511,-3.7095896,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287ed77a7e65:0x49a63c540111181c!8m2!3d40.415511!4d-3.7074009' >Plaza Mayor, 28012</a>",
    },
  ];
      for (var i = 0, feature; feature = features[i]; i++) {
        addMarker(feature);
      }

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
google.maps.event.addDomListener(window, 'load', initialize);


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

