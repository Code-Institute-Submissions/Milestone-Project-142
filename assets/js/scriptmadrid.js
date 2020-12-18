/*--------------------------------Fade animation on content when scrolling through page */
const appearOptions = {
    threshold: 0.4,
    rootMargin: "0px 0px 0px 0px"
};
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
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

$(function() {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse('hide');
    });
});


/*---------------------------------------Google Maps API */


let map;
const mediaQuery = window.matchMedia('(min-width: 1000px)')

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: new google.maps.LatLng(40.416604, -3.699516),
        mapTypeId: "roadmap",


    });




    const iconBase = src = "assets/images/";
    const icons = {
        restaurant: {
            name: "Restaurant",
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
            content: renderMarkerModal(feature)
        });

        google.maps.event.addListener(marker, 'click', function() {
            marker.info.open(map, marker);
        });
    }


    function renderMarkerModal(feature) {
        // Might move this to the top of the file.
        const googleMapsBaseLink = "https://www.google.co.uk/maps/place/"
        return `
        <h2 class='locations-link'>${feature.name}</h2>
        <br>
        <p class='locations-link' >${feature.description}</p>
        <a target=”_blank” class='locations-link' href='${googleMapsBaseLink}${feature.googleMapsLink}' >
        ${feature.address}
        </a>
      `
    }

    const features = [{
            position: new google.maps.LatLng(40.41963937438271, -3.710712092531764),
            type: "restaurant",
            name: "100 Montaditos",
            address: "Calle de Felipe V, 4, 28013",
            googleMapsLink: "Cervecer%C3%ADa+100+Montaditos/@40.4177444,-3.7105404,15z/data=!4m8!1m2!2m1!1s100+montaditos!3m4!1s0x0:0x7669f25b6792ab75!8m2!3d40.4187259!4d-3.7108389",
            description: "100 Montaditos offers a range of mini sandwiches filled with a variety of spanish tapas!"
        },
        {
            position: new google.maps.LatLng(40.41686585276432, -3.704739063563049),
            type: "restaurant",
            name: "La Mallorquina",
            address: "Puerta del Sol, 8, 28013",
            googleMapsLink: "La+Mallorquina/@40.4177437,-3.7105404,15z/data=!3m1!5s0xd42287e6125da65:0xd208870869ee8b84!4m8!1m2!2m1!1sla+mallorquina!3m4!1s0xd42287e69d15b8d:0x1501ee0d7d619ce7!8m2!3d40.4166836!4d-3.704775",
            description: "Mallorquina offer the best pastries and cakes you can get right in the center of Madrid!"
        },
        {
            position: new google.maps.LatLng(40.41285346994623, -3.709641346131572),
            type: "restaurant",
            name: "Astor Restaurant",
            address: "Calle del Almendro, 9, 28005",
            googleMapsLink: "%C3%81stor+gastro-place/@40.412688,-3.711754,17z/data=!3m1!4b1!4m5!3m4!1s0xd4227d62756f371:0x80a15bc585f4b264!8m2!3d40.412688!4d-3.7095653",
            description: "If you're looking for more of a classy dining experience Astor is one of the best to go!"
        },
        {
            position: new google.maps.LatLng(40.415544516331344, -3.7089624863842814),
            type: "sanmiguel",
            name: "Mercado San Miguel",
            address: "Plaza de San Miguel, 28005",
            googleMapsLink: "Mercado+de+San+Miguel/@40.4153794,-3.7111584,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287921196e2d:0x162fe6d34dd190e8!8m2!3d40.4153794!4d-3.7089697",
            description: "One of the best European markets, you can buy wholefoods, tapas and even wine."
        },
        {
            position: new google.maps.LatLng(40.4127662769096, -3.7090535171599766),
            type: "cavabaja",
            name: "Calle Cava Baja",
            address: "Calle de la Cava Baja, 28005",
            googleMapsLink: "Calle+de+la+Cava+Baja,+28005+Madrid,+Spain/@40.4125294,-3.7111993,17z/data=!3m1!4b1!4m5!3m4!1s0xd4227d620613c77:0xfa4f03e2f4864f07!8m2!3d40.4125294!4d-3.7090106",
            description: "All along this road you will find many trdtional Spanish tapas bars to enjoy!"
        },
        {
            position: new google.maps.LatLng(40.4153, -3.6845), //Retiro Park
            type: "landmark",
            name: "Retiro Park",
            address: "Plaza de la Independencia, 7, 28001",
            googleMapsLink: "El+Retiro+Park/@40.4152606,-3.6866882,17z/data=!3m1!4b1!4m5!3m4!1s0xd42289ff511827b:0x9e6c2716b524a3ae!8m2!3d40.4152606!4d-3.6844995",
            description: "One of the largest and most beautiful parks in the whole of Spain"
        },
        {
            position: new google.maps.LatLng(40.4180, -3.7143), //Royal Palace
            type: "landmark",
            name: "Royal Palace",
            address: "Calle de Bailén, 28071",
            googleMapsLink: "Royal+Palace+of+Madrid/@40.4152553,-3.7195188,13z/data=!4m8!1m2!2m1!1sroyal+palace!3m4!1s0xd42287e7da4a9c1:0x2e7fec79d6ce4851!8m2!3d40.417955!4d-3.714312",
            description: "Spains Royal Palace, home to one of the few Royal Familys left and available for a tour"
        },
        {
            position: new google.maps.LatLng(40.4200, -3.7021), //Gran Via
            type: "landmark",
            name: "Gran Via",
            address: "Gran Via",
            googleMapsLink: "C%2F+Gran+V%C3%ADa,+Madrid,+Spain/@40.4189435,-3.6990306,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287d6da3df33:0xe119406d894c5d21!8m2!3d40.4189435!4d-3.6968419",
            description: "One of the best shopping high streets in Spain filled with classical buildings"
        },
        {
            position: new google.maps.LatLng(40.4155, -3.7074), //Plaza Mayor
            type: "landmark",
            name: "Plaza Mayor",
            address: "Plaza Mayor, 28012",
            googleMapsLink: "Plaza+Mayor/@40.415511,-3.7095896,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287ed77a7e65:0x49a63c540111181c!8m2!3d40.415511!4d-3.7074009",
            description: "Spains most famous Plaza right in the center of Madrid filled with bars and restaurants"
        },
        {
            position: new google.maps.LatLng(40.41721306239462, -3.703508284633918), //Sol
            type: "landmark",
            name: "Sol",
            address: "Puerta Del Sol",
            googleMapsLink: "Sol,+Madrid,+Spain/@40.4169335,-3.7083759,16z/data=!3m1!4b1!4m5!3m4!1s0xd42287e1463b6cf:0x14a34120b9332d61!8m2!3d40.4166635!4d-3.7041687",
            description: "Center of Madrid leading to shops and restaurants with large Metro station"
        },
    ];
    for (var i = 0, feature; feature = features[i]; i++) {
        addMarker(feature);
    }

    // Aloows zoom and centering on specific locations on map when clicking link in maps

    //100 Montaditos
    google.maps.event.addDomListener(document.getElementById('montaditosMap'), 'click', function() {
        map.setCenter(new google.maps.LatLng(40.41963937438271, -3.710712092531764));
        map.setZoom(17)
    });
    //La Mallorquina
    google.maps.event.addDomListener(document.getElementById('mallorquinaMap'), 'click', function() {
        map.setCenter(new google.maps.LatLng(40.41686585276432, -3.704739063563049));
        map.setZoom(17)
    });
    //Astor Restaurant
    google.maps.event.addDomListener(document.getElementById('astorMap'), 'click', function() {
        map.setCenter(new google.maps.LatLng(40.41285346994623, -3.709641346131572));
        map.setZoom(17)
    });
    //Mercado San Miguel
    google.maps.event.addDomListener(document.getElementById('sanmiguelMap'), 'click', function() {
        map.setCenter(new google.maps.LatLng(40.415544516331344, -3.7089624863842814));
        map.setZoom(17)
    });
    //Calle Cava Baja
    google.maps.event.addDomListener(document.getElementById('cavaMap'), 'click', function() {
        map.setCenter(new google.maps.LatLng(40.4127662769096, -3.7090535171599766));
        map.setZoom(17)
    });
    //Sol
    google.maps.event.addDomListener(document.getElementById('solMap'), 'click', function() {
        map.setCenter(new google.maps.LatLng(40.41721306239462, -3.703508284633918));
        map.setZoom(17)
    });

    /*-Legend For Map-*/

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
    let dots = document.querySelector(`.card[id="${city}"] .dots`);
    let moreText = document.querySelector(`.card[id="${city}"] .more`);
    let btnText = document.querySelector(`.card[id="${city}"] .myBtn`);

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

function sendMail(contactForm) {
    emailjs.send("gmail", "madrid-email", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("Success", response);
            },
            function(error) {
                console.log("Failed", error);
            }
        );
    return false;
}


/*Allows alert to show message has been sent*/

function alertFunction() {
    alert("Message has been sent!");
}