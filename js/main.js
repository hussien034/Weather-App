// More information about this technique/pen:
// https://medium.com/@electerious/parallax-scrolling-with-js-controlled-css-variables-63cfe96820c7#.o1kkd4cte
/*
document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`
			}
		}
	}).start()
		
})
kkkkkkkkkkkkkkkkkk
const $window = $(window);
const $body = $('body');

class Slideshow {
	constructor (userOptions = {}) {
    const defaultOptions = {
      $el: $('.slideshow'),
      showArrows: false,
      showPagination: true,
      duration: 10000,
      autoplay: true
    }
    
    let options = Object.assign({}, defaultOptions, userOptions);
    
		this.$el = options.$el;
		this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
    this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
    this.showPagination = options.showPagination;
		this.currentSlide = 1;
		this.isAnimating = false;
		this.animationDuration = 1200;
		this.autoplaySpeed = options.duration;
		this.interval;
		this.$controls = this.$el.find('.js-slider-home-button');
    this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

		this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
		this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
    this.$el.on('click', '.js-pagination-item', event => {
      if (!this.isAnimating) {
        this.preventClick();
  this.goToSlide(event.target.dataset.slide);
      }
    });

		this.init();
	}
  
  init() {
    this.goToSlide(1);
    if (this.autoplay) {
      this.startAutoplay();
    }
    
    if (this.showPagination) {
      let paginationNumber = this.maxSlide;
      let pagination = '<div class="pagination"><div class="container">';
      
      for (let i = 0; i < this.maxSlide; i++) {
        let item = `<span class="pagination__item js-pagination-item ${ i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
        pagination  = pagination + item;
      }
      
      pagination = pagination + '</div></div>';
      
      this.$el.append(pagination);
    }
  }
  
  preventClick() {
		this.isAnimating = true;
		this.$controls.prop('disabled', true);
		clearInterval(this.interval);

		setTimeout(() => {
			this.isAnimating = false;
			this.$controls.prop('disabled', false);
      if (this.autoplay) {
			  this.startAutoplay();
      }
		}, this.animationDuration);
	}

	goToSlide(index) {    
    this.currentSlide = parseInt(index);
    
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = 1;
    }
    
    if (this.currentSlide === 0) {
      this.currentSlide = this.maxSlide;
    }
    
    const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="'+ this.currentSlide +'"]');
    const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
    const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');
    
    this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
    this.$el.find('.js-pagination-item').removeClass('is-current');
    
		if (this.maxSlide > 1) {
      newPrev.addClass('is-prev');
      newNext.addClass('is-next');
    }
    
    newCurrent.addClass('is-current');
    this.$el.find('.js-pagination-item[data-slide="'+this.currentSlide+'"]').addClass('is-current');
  }
  
  nextSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide + 1);
	}
   
	prevSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide - 1);
	}

	startAutoplay() {
		this.interval = setInterval(() => {
			if (!this.isAnimating) {
				this.nextSlide();
			}
		}, this.autoplaySpeed);
	}

	destroy() {
		this.$el.off();
	}
}

(function() {
	let loaded = false;
	let maxLoad = 3000;  
  
	function load() {
		const options = {
      showPagination: true
    };

    let slideShow = new Slideshow(options);
	}
  
	function addLoadClass() {
		$body.addClass('is-loaded');

		setTimeout(function() {
			$body.addClass('is-animated');
		}, 600);
	}
  
	$window.on('load', function() {
		if(!loaded) {
			loaded = true;
			load();
		}
	});
  
	setTimeout(function() {
		if(!loaded) {
			loaded = true;
			load();
		}
	}, maxLoad);

	addLoadClass();
})();
*/
const elems = document.querySelectorAll('.laya-please');
const layer2 = document.querySelector('.layer-2');
const layer3 = document.querySelector('.layer-3');
const layer4 = document.querySelector('.layer-4');
const layer5 = document.querySelector('.layer-5');
const layer6 = document.querySelector('.layer-6');
const layer7 = document.querySelector('.layer-7');
const layer8 = document.querySelector('.layer-8');


setTimeout(function () {
    elems.forEach(function (elem, index) {
        elem.style.animation = "none";
    });
}, 1500);



document.body.addEventListener('mousemove', function (e) {
    if (!e.currentTarget.dataset.triggered) {
        elems.forEach(function (elem, index) {
            if (elem.getAttribute('style')) {
                elem.style.transition = "all .5s";
                elem.style.transform = "none";
            }
        });
    }
    e.currentTarget.dataset.triggered = true;
    
    let width = window.innerWidth / 2;
    let mouseMoved2 = ((width - e.pageX) / 50);
    let mouseMoved3 = ((width - e.pageX) / 40);
    let mouseMoved4 = ((width - e.pageX) / 30);
    let mouseMoved5 = ((width - e.pageX) / 20);
    let mouseMoved6 = ((width - e.pageX) / 10);
    let mouseMoved7 = ((width - e.pageX) / 5);

    layer3.style.transform = "translateX(" + mouseMoved2 + "px)";
    layer4.style.transform = "translateX(" + mouseMoved3 + "px)";
    layer5.style.transform = "translateX(" + mouseMoved4 + "px)";
    layer6.style.transform = "translateX(" + mouseMoved5 + "px)";
    layer7.style.transform = "translateX(" + mouseMoved6 + "px)";
    layer8.style.transform = "translateX(" + mouseMoved7 + "px)";
});

document.body.addEventListener('mouseleave', function (e) {
    elems.forEach(function (elem, index) {
        elem.style.transition = "all .5s";
        elem.style.transform = "none";
    });
});

document.body.addEventListener('mouseenter', function (e) {
    elems.forEach(function (elem, index) {
        setTimeout(function () {
            elem.style.transition = "none";
        }, 500);
    });
});
//Today's Card Variables:
let today = document.getElementById("today"),
    todayDate = document.getElementById("today-date"),
    cityLocation = document.getElementById("location"),
    todayDegree = document.getElementById("today-degree"),
    todayIcon = document.getElementById("today-icon"),
    description = document.getElementById("today-description"),
    humidty = document.getElementById("humidty"),
    wind = document.getElementById("wind"),
    compass = document.getElementById("compass"),
    searchBar = document.getElementById("search-bar"),
    currentCity = "Cairo",
    apiResponse,
    responseData,
    date = new Date(),
    weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

//Next Days Variables:
let nextDay = document.getElementsByClassName("nextDay"),
    afterNextDay = document.getElementsByClassName("afterNextDay"),
    nextDate = document.getElementsByClassName("nextDate"),
    nextDayIcon = document.getElementsByClassName("nextDay-icon"),
    maxDegree = document.getElementsByClassName("max-degree"),
    minDegree = document.getElementsByClassName("min-degree"),
    nextDayDescription = document.getElementsByClassName("nextDay-description");
	//Get Data from API:
async function getWeatherData() {
    apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=848e4c9efef048e494f100521210205&q=${currentCity}&days=3&aqi=no&alerts=no`);
    responseData = await apiResponse.json();
    console.log(responseData);
    displayTodayWeather();
    displayNextDaysWeather();
};
//Display Today's Data:
function displayTodayWeather() {

    let dateApi = responseData.forecast.forecastday[0].date;
    let date_components = dateApi.split("-");
    let current_day = date_components[2];

    today.innerHTML = weekDays[date.getDay()];
    todayDate.innerText = `${current_day} ${monthName[date.getMonth()]}`;
    cityLocation.innerHTML = responseData.location.name;
    todayDegree.innerHTML = Math.round(responseData.current.temp_c);
    todayIcon.setAttribute("src", `https:${responseData.current.condition.icon}`);
    description.innerHTML = responseData.current.condition.text;
    humidty.innerHTML = responseData.current.humidity;
    wind.innerHTML = responseData.current.wind_kph;
    compass.innerText =responseData.current.wind_dir
};

//Next Day - Name Function;
function getNextDays(nextDateApi) {

	let d = new Date(nextDateApi);
	return d && weekDays[d.getDay()];
 };
 
 //Next Day - Month Function;
 function getNextDayMonth(nextDateApi) {
 
	 let m = new Date(nextDateApi);
	 return m && monthName[m.getMonth()];
  };
 
 //Display Next Days Data:
 function displayNextDaysWeather() {
	 for(let i = 0;  i < nextDay.length; i++)
	 {   
		 let nextDateApi = responseData.forecast.forecastday[i+1].date;
		 let nextDate_components = nextDateApi.split("-");
		 let next_day = nextDate_components[2];
 
		 nextDay[i].innerHTML = getNextDays(nextDateApi);
		 nextDate[i].innerHTML = `${next_day} ${getNextDayMonth(nextDateApi)}`;
		 nextDayIcon[i].setAttribute("src", `https:${responseData.forecast.forecastday[i+1].day.condition.icon}`);
		 maxDegree[i].innerHTML = Math.round(responseData.forecast.forecastday[i+1].day.maxtemp_c);
		 minDegree[i].innerHTML = Math.round(responseData.forecast.forecastday[i+1].day.mintemp_c);
		 nextDayDescription[i].innerHTML= responseData.forecast.forecastday[i+1].day.condition.text;
		 
	 }
 };
 
 //Live Search City Function:
 searchBar.addEventListener("keyup", function() {
	 currentCity = searchBar.value;
	 getWeatherData();
 });
 
 //Onload Calling Function:
 getWeatherData();
 
 
 //Submit Subscribe LightBox:
 let subscribeBtn = document.getElementById("subscribeBtn"),
	 closeBtn = document.getElementById("closeBtn"),
	 submitLighBox = document.getElementById("submit-lighBox"),
	 emailInput = document.getElementById("emailInput"),
	 emailInputAlert = document.getElementById("emailInputAlert");
 
 
 subscribeBtn.addEventListener("click", function() {
	 if(validateEmail() == true) {
		 
		 submitLighBox.style.display = "flex";
	 }
	 else {
		 subscribeBtn.disabled = true;
	 }
 });
 
 closeBtn.addEventListener("click", function() {
	 submitLighBox.style.display = "none";
	 emailInput.value = "";
 });
 $(window).scroll(function(){
    let current=$(window).scrollTop();
    if(current>300){
        $(".navbar").css({"backgroundColor":"rgba(12, 11, 9, 0.6)", "transition":"all 0.5s"})

    }
    else{
        $(".navbar").css("background","transparent")
    }
})