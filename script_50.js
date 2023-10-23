//Async, defer, динамические скрипты 

"use strict";

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src){
	const script = document.createElement('script');
	script.defer = src;
	script.src = src;
	document.body.append(script);
}

loadScript('script_50_test.js');
loadScript('script_50_test_2.js');