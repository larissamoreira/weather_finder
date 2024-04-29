(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(2),o=a.n(i);a(11),a(12);var c=()=>n.a.createElement("div",null,n.a.createElement("h1",{className:"title-container__title"}," Weather Finder "),n.a.createElement("p",{className:"title-container__subtitle"}," Find out temperature conditions and more. "));var s=e=>n.a.createElement("form",{onSubmit:e.getWeather,className:"form"},n.a.createElement("input",{type:"text",name:"city",placeholder:"City"}),n.a.createElement("input",{type:"text",name:"country",placeholder:"Country"}),n.a.createElement("button",null,"Get Weather"));var l=e=>n.a.createElement("div",{className:"weather__info"},e.city&&e.country&&n.a.createElement("p",{className:"weather__key"},"Location:",n.a.createElement("span",{className:"weather__value"}," ",e.city,", ",e.country)),e.temperature&&n.a.createElement("p",{className:"weather__key"},"Temperature:",n.a.createElement("span",{className:"weather__value"}," ",e.temperature)),e.humidity&&n.a.createElement("p",{className:"weather__key"},"Humidity:",n.a.createElement("span",{className:"weather__value"}," ",e.humidity)),e.description&&n.a.createElement("p",{className:"weather__key"},"Conditions:",n.a.createElement("span",{className:"weather__value"}," ",e.description)),e.error&&n.a.createElement("p",{className:"weather__error"},e.error));var m=()=>{const[e,t]=Object(r.useState)({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0});return n.a.createElement("div",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col title-container"},n.a.createElement(c,null)),n.a.createElement("div",{className:"col form-container"},n.a.createElement(s,{getWeather:async e=>{e.preventDefault();const a=e.target.elements.city.value,r=e.target.elements.country.value,n=await fetch("https://api.openweathermap.org/data/2.5/find?q=".concat(a,",").concat(r,"&appid=").concat("d2283662ab9b692fc4f461a95c137ff2","&units=metric")),i=await n.json();i&&i.list.length>0?t({temperature:i.list[0].main.temp,city:i.list[0].name,country:i.list[0].sys.country,humidity:i.list[0].main.humidity,description:i.list[0].weather[0].description,error:""}):t({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter a valid city and country."})}}),n.a.createElement(l,{temperature:e.temperature,city:e.city,country:e.country,humidity:e.humidity,description:e.description,error:e.error})))))))};const d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}o.a.render(n.a.createElement(m,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/weather_finder",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/weather_finder","/service-worker.js");d?(function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):u(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):u(e)})}}()},3:function(e,t,a){e.exports=a(13)}},[[3,1,2]]]);
//# sourceMappingURL=main.f8f452cb.chunk.js.map