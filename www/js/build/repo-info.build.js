(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{540:function(e,n,t){},547:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var a=t(1),i=t.n(a),o=t(71),r=t(194),c=t(5);t(540);function d(e,n){var t=Object(o.a)(e),a=r.a.GitHub(),d=a.getRepo(n,e);c.a.loader.create(e,strings.loading+"..."),d.getReadme("master",!1).then((function(e){if("OK"===e.statusText){var n=e.data,t=n.content;return"base64"===n.encoding&&(t=atob(t)),a.getMarkdown().render({text:t})}return Promise.reject(e)})).then((function(e){if("OK"===e.statusText){var n=e.data;t.append(i()("div",{id:"info-page",className:"main",innerHTML:n}))}else t.hide()})).catch((function(e){c.a.alert(strings.error,e.message),console.log(e),t.hide()})).finally((function(){c.a.loader.destroy()})),actionStack.push({id:"info",action:t.hide}),t.onhide=function(){actionStack.remove("info")},app.appendChild(t)}}}]);