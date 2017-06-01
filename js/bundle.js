/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	$(function () {
	    __webpack_require__(1);
	    __webpack_require__(2);
	    __webpack_require__(3);
	    __webpack_require__(4);
	    __webpack_require__(5);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = (function (){
	    //导航按钮选中样式映射页面滚动所在区块方法
	    var y = 0, arr = [], h = $('.header').height(),sectionArr=$('.main_left>section'),liArr=$('.nav>li');
	    window.onscroll = function () {
	        y = window.scrollY || document.documentElement.scrollTop || window.pageYOffset;
	        sectionArr.each(function () {
	            arr[$(this).index()] = parseInt($(this).height() + this.offsetTop - h);
	        });
	        liArr.eq(getIndex(y, arr)).addClass('active').siblings().removeClass('active');
	    }
	    function getIndex(y, arr) {
	        for (var i = 0; i < arr.length; i++) {
	            if (y < arr[i]) {
	                return i;
	            }
	        }
	    }
	}());

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports=(function (){
	    //导航按钮点击选中样式
	    $('.nav>li>a').click(function(){
	        $(this).parent().addClass('active').siblings().removeClass('active');
	    });
	}());
	    

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports=(function (){
	    //项目作品切换事件
	    $('.project_show_1>div,.project_show_2>div').hover(function(){
	        $(this).addClass('projectCur').find('span').removeClass('label-default').parent().parent().siblings().removeClass('projectCur').find('span').addClass('label-default');
	        if($(this).parent().hasClass('project_show_1')){
	            $('.project_intro_1>div').eq($(this).index()).show().siblings().hide();
	        }
	       else if($(this).parent().hasClass('project_show_2')){
	            $('.project_intro_2>div').eq($(this).index()).show().siblings().hide();
	        }
	    });
	}());
	    

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports =(function (){
	    //返回顶部、底部过渡效果
	    var w = $(window).width() || window.screen.width;//获取窗口宽度
	    $("a.topLink").click(function () {
	        $("html, body").animate({
	            scrollTop: $($(this).attr("href")).offset().top - 70 + "px",
	            easing: "swing"
	        }, 666, function () {
	            w < 768 && $('.header button').trigger('click');
	        });
	    });
	}());

/***/ }
/******/ ]);