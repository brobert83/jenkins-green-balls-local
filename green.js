// ==UserScript==
// @name         Jenkins 1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  If management does not want green balls, I get green balls anywayz :p
// @author       You
// @match        http://*/*
// @include        http://*/jenkins*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var beautify = function(className,src){
        let elems = document.getElementsByClassName(className);
        for (let i = 0; i < elems.length; i+= 1) {
            elems[i].src = src;
        }
    };
    beautify("icon-blue","https://raw.githubusercontent.com/jenkinsci/greenballs-plugin/master/src/main/webapp/32x32/green.png");
    beautify("icon-blue-anime icon-sm","https://raw.githubusercontent.com/jenkinsci/greenballs-plugin/master/src/main/webapp/16x16/green_anime.gif");
    beautify("icon-blue-anime icon-lg","https://raw.githubusercontent.com/jenkinsci/greenballs-plugin/master/src/main/webapp/32x32/green_anime.gif");
    beautify("icon-blue-anime icon-xlg","https://raw.githubusercontent.com/jenkinsci/greenballs-plugin/master/src/main/webapp/48x48/green_anime.gif");
    document.getElementById("jenkins-head-icon").src='https://jenkins.io/images/angry-jenkins_128.png';
    document.getElementById("jenkins-head-icon").height='40';

})();
