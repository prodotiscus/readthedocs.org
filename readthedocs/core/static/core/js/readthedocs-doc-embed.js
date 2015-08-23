require=function t(e,r,o){function n(a,s){if(!r[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[a]={exports:{}};e[a][0].call(p.exports,function(t){var r=e[a][1][t];return n(r?r:t)},p,p.exports,t,e,r,o)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(t,e,r){function o(){var t=a.get(),e={project:t.project,version:t.version,page:t.page,theme:t.get_theme_name(),format:"jsonp"};"docroot"in t&&(e.docroot=t.docroot),"source_suffix"in t&&(e.source_suffix=t.source_suffix),0===window.location.pathname.indexOf("/projects/")&&(e.subproject=!0),$.ajax({url:t.api_host+"/api/v2/footer_html/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:e,success:function(t){s.init(t.version_compare),n(t),i()},error:function(){console.error("Error loading Read the Docs footer")}})}function n(t){var e=a.get();if(e.is_rtd_theme()?$("div.rst-other-versions").html(t.html):$("body").append(t.html),t.version_active?!t.version_supported:$(".rst-current-version").addClass("rst-out-of-date"),t.promo&&e.show_promo()){var r=new sponsorship.Promo(t.promo_data.id,t.promo_data.text,t.promo_data.link,t.promo_data.image);r&&r.display()}}function i(){function t(t){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(t)}$.ajaxSetup({beforeSend:function(e,r){t(r.type)||e.setRequestHeader("X-CSRFToken",$("a.bookmark[token]").attr("token"))}})}var a=t("./rtd-data"),s=t("./version-compare");e.exports={init:o}},{"./rtd-data":4,"./version-compare":6}],2:[function(t,e,r){function o(){$.ajax({url:"https://api.grokthedocs.com/static/javascript/bundle-client.js",crossDomain:!0,dataType:"script"})}e.exports={init:o}},{}],3:[function(t,e,r){function o(){var t=n.get();if("builder"in t&&"mkdocs"==t.builder){$("<input>").attr({type:"hidden",name:"project",value:t.project}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"version",value:t.version}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"type",value:"file"}).appendTo("#rtd-search-form"),$("#rtd-search-form").prop("action",t.api_host+"/search/");var e=$("nav.wy-nav-side:first"),r=$(window),o="stickynav",i=function(){e.height()<=r.height()?e.addClass(o):e.removeClass(o)};r.on("resize",i),i()}}var n=t("./rtd-data");e.exports={init:o}},{"./rtd-data":4}],4:[function(t,e,r){function o(){var t=Object.create(n),e={api_host:"https://readthedocs.org"};return $.extend(t,e,window.READTHEDOCS_DATA),t}var n={is_rtd_theme:function(){return"sphinx_rtd_theme"===this.get_theme_name()},is_sphinx_builder:function(){return!("builder"in this)||"mkdocs"!=this.builder},get_theme_name:function(){return"sphinx_rtd_theme"!==this.theme&&1===$("div.rst-other-versions").length?"sphinx_rtd_theme":this.theme},show_promo:function(){return"https://readthedocs.com"!==this.api_host&&this.is_sphinx_builder()&&this.is_rtd_theme()}};e.exports={get:o}},{}],5:[function(t,e,r){function o(){function t(t){var e=t.closest("li");e.siblings("li.current").removeClass("current"),e.siblings().find("li.current").removeClass("current"),e.find("> ul li.current").removeClass("current"),e.toggleClass("current")}var e=n.get();$(document).on("click","[data-toggle='rst-current-version']",function(){var t=$("[data-toggle='rst-versions']").hasClass("shift-up")?"was_open":"was_closed";_gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Flyout","Click",t])}),(!("builder"in e)||"builder"in e&&"mkdocs"!=e.builder)&&($(document).on("click","[data-toggle='wy-nav-top']",function(){$("[data-toggle='wy-nav-shift']").toggleClass("shift"),$("[data-toggle='rst-versions']").toggleClass("shift")}),$(document).on("click",".wy-menu-vertical .current ul li a",function(){var e=$(this);$("[data-toggle='wy-nav-shift']").removeClass("shift"),$("[data-toggle='rst-versions']").toggleClass("shift"),t(e),"undefined"!=typeof window.SphinxRtdTheme&&window.SphinxRtdTheme.StickyNav.hashChange()}),$(document).on("click","[data-toggle='rst-current-version']",function(){$("[data-toggle='rst-versions']").toggleClass("shift-up")}),$("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>"),$(".wy-menu-vertical ul").siblings("a").each(function(){var e=$(this);expand=$('<span class="toctree-expand"></span>'),expand.on("click",function(r){return t(e),r.stopPropagation(),!1}),e.prepend(expand)}),window.SphinxRtdTheme=function(t){var e=function(){var e,r,o=!1,n=!1,i=0,a=function(){s(),c(),r.on("hashchange",c),r.on("scroll",function(){n||(o=!0)}),setInterval(function(){if(o){o=!1;var t=r.scrollTop(),n=e.scrollTop(),a=n+(t-i);e.scrollTop(a),i=t}},25)},s=function(){e=t("nav.wy-nav-side:first"),r=t(window)},c=function(){var t=encodeURI(window.location.hash);if(t)try{var e=$(".wy-menu-vertical").find('[href="'+t+'"]');$(".wy-menu-vertical li.toctree-l1 li.current").removeClass("current"),e.closest("li.toctree-l2").addClass("current"),e.closest("li.toctree-l3").addClass("current"),e.closest("li.toctree-l4").addClass("current")}catch(r){console.log("Error expanding nav for anchor",r)}},d=function(){n=!0,r.one("hashchange",function(){n=!1})};return t(s),{enable:a,hashChange:d}}();return{StickyNav:e}}($))}var n=t("./rtd-data");e.exports={init:o}},{"./rtd-data":4}],6:[function(t,e,r){function o(t){var e=n.get();if(!t.is_highest){var r=window.location.pathname.replace(e.version,t.slug),o=$('<div class="admonition warning"> <p class="first admonition-title">Note</p> <p class="last"> You are not using the most up to date version of the library. <a href="#"></a> is the newest version.</p></div>');o.find("a").attr("href",r).text(t.version);var i=$("div.body");i.length||(i=$("div.document")),i.prepend(o)}}var n=t("./rtd-data");e.exports={init:o}},{"./rtd-data":4}],7:[function(t,e,r){function o(t,e,r,o){this.id=t,this.text=e,this.link=r,this.image=o,this.promo=null}var n=window.$;e.exports={Promo:o},o.prototype.create=function(){function t(){_gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Promo","Click",e.id])}var e=this,r=n("nav.wy-nav-side");if(r.length){promo=n("<div />").attr("class","wy-menu rst-pro");{var o=n("<div />").attr("class","rst-pro-about"),i=n("<a />").attr("href","http://docs.readthedocs.org/en/latest/sponsors.html#sponsorship-information").appendTo(o);n("<i />").attr("class","fa fa-info-circle").appendTo(i)}if(o.appendTo(promo),e.image){{var a=n("<a />").attr("class","rst-pro-image-wrapper").attr("href",e.link).attr("target","_blank").on("click",t);n("<img />").attr("class","rst-pro-image").attr("src",e.image).appendTo(a)}promo.append(a)}var s=n("<span />").html(e.text);return n(s).find("a").each(function(){n(this).attr("class","rst-pro-link").attr("href",e.link).attr("target","_blank").on("click",t)}),promo.append(s),promo.appendTo(r),promo.wrapper=n("<div />").attr("class","rst-pro-wrapper").appendTo(r),promo}},o.prototype.display=function(){var t=this.promo;t||(t=this.promo=this.create()),t.show()},o.prototype.disable=function(){},o.from_variants=function(t){if(0==t.length)return null;var e=Math.floor(Math.random()*t.length),r=t[e],n=r.text,i=r.link,a=r.image,s=r.id;return new o(s,n,i,a)}},{}],"readthedocs-doc-embed":[function(t,e,r){var o=(t("./sponsorship"),t("./doc-embed/footer.js")),n=t("./doc-embed/grokthedocs-client"),i=t("./doc-embed/mkdocs"),a=(t("./doc-embed/rtd-data"),t("./doc-embed/sphinx")),s=t("jquery");s(document).ready(function(){o.init(),a.init(),n.init(),i.init()})},{"./doc-embed/footer.js":1,"./doc-embed/grokthedocs-client":2,"./doc-embed/mkdocs":3,"./doc-embed/rtd-data":4,"./doc-embed/sphinx":5,"./sponsorship":7,jquery:"jquery"}]},{},[]);