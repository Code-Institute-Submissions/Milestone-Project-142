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


/*---------------------------------------Google Maps API */

let map;
/*Function calling google maps and center coordinates of Madrid */
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 40.426775,
			lng: -3.703790
		},
		zoom: 13,
	});
	/*Setting the coordinates of different locations in Madrid for my markers */
	var locations = [
		['<b>Santiago Bernabeu</b>' + "<br>Real Madrid's Stadium <br><img src='assets/images/bernabeu.png' alt='' width='250px' height='150px'><br><a class='nav-items' href='https://www.realmadrid.com/en'><b>VISIT REAL MADRID WEBSITE</b></a>", 40.4530, -3.6883, 4],
		['<b>Retiro Park</b>' + "<br>One of the largest and prettiest parks in all of Madrid <br><img src='assets/images/retiro.png' alt='' width='300px' height='150px'>", 40.4153, -3.6845, 6],
		['<b>Vicente Calderon</b>' + "<br>Atletico Madrid's Stadium" + "<br><img src='assets/images/calderon.png' alt='' width='300px' height='150px'>", 40.4017, -3.7206, 5],
		['<b>Royal Palace</b>' + '<br>Home to the Spanish Royal Family' + "<br><img src='assets/images/madridmain.png' alt='' width='300px' height='150px'>", 40.4180, -3.7143, 3],
		['<b>Gran Via</b>' + '<br>Main Shoping high street in Madrid' + "<br><img src='assets/images/granvia.png' alt='' width='300px' height='200px'>", 40.4200, -3.7021, 2],
		["<b>Plaza Mayor</b>" + "<br>Most famous plaza in all of spain<br> located in the center of Madrid with many restaurants" + "<br><img src='assets/images/plazamayor.png' alt='' width='300px' height='150px'>", 40.4155, -3.7074, 1]
	];

	var infowindow = new google.maps.InfoWindow();
	/*Changing the marker icon image */
	var marker, i;
	const image = src = 'assets/images/orange30.png';
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: image
		});
		/*Opens mini info window when clicking on each marker*/
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
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
        "project_request": contactForm.projectsummary.value,
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