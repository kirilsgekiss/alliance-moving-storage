// import Swiper JS
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

var swiper_init = false;
var swiper;
function swiperCard() {
    if (window.innerWidth <= 576) {
        if (!swiper_init) {
            swiper_init = true;
            swiper = new Swiper(".swiper__main", {
                modules: [Pagination],
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 32,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (swiper_init) {
        swiper.destroy();
        swiper_init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

// Burger menu
document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector(".header__burger")
        .addEventListener("click", function () {
            document.querySelector(".header__menu").classList.toggle("active");
            document.querySelector(".header__btn").classList.toggle("active");
            document
                .querySelector(".header__burger")
                .classList.toggle("active");
            document.querySelector("body").classList.toggle("lock");
        });
});

// Yandex map
let mapLoaded = false;

window.addEventListener("scroll", lazyLoadMap);

function lazyLoadMap() {
    let scrollY = window.scrollY;
    let viewHeight = document.documentElement.clientHeight;
    let mapOffset = document.querySelector("#map").offsetTop;

    if (scrollY >= mapOffset - 500 - viewHeight && !mapLoaded) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                    center: [42.088403, -88.004589],
                    zoom: 13,
                }),
                myPlacemark = new ymaps.Placemark(
                    myMap.getCenter(),
                    {
                        hintContent: "We are here",
                        balloonContent:
                            "3201 TOLLVIEW DRIVE ROLLING MEADOWS, IL 60008",
                    },
                    {
                        iconLayout: "default#image",
                        iconImageHref: "dist/assets/img/svg/location-pin.svg",
                        iconImageSize: [40, 40],
                        iconImageOffset: [-5, -38],
                    }
                );

            myMap.geoObjects.add(myPlacemark);

            myMap.controls.remove("searchControl");
            myMap.controls.remove("trafficControl");
            myMap.controls.remove("fullscreenControl");
            myMap.controls.remove("rulerControl");
            myMap.controls.remove("typeSelector");
            myMap.controls.remove("zoomControl");
            myMap.controls.remove("geolocationControl");
        });
        mapLoaded = true;
    }
}
