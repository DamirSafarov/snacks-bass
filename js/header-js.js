$(document).ready((function(){$(".header__dropdown__link").click((function(){let e=$(this).parent();$(e).hasClass("active")?($(e).toggleClass("active"),$("body").toggleClass("header-toggle")):($(".header__dropdown").removeClass("active"),$(e).addClass("active"),$("body").addClass("header-toggle")),$(document).mouseup((function(a){var o=$(".header");o.is(a.target)||0!==o.has(a.target).length||($(e).removeClass("active"),$("body").removeClass("header-toggle"))}))})),$(".header__burger").on("click",function(){$("html").toggleClass("html-hidden");});$(".header__burger").click((function(){$("body").toggleClass("mob-nav-open")}))}));
