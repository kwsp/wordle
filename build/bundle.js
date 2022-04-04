var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}const i="undefined"!=typeof window;let u=i?()=>window.performance.now():()=>Date.now(),f=i?t=>requestAnimationFrame(t):t;const a=new Set;function d(t){a.forEach((n=>{n.c(t)||(a.delete(n),n.f())})),0!==a.size&&f(d)}function h(t,n){t.appendChild(n)}function g(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function p(t){const n=w("style");return function(t,n){h(t.head||t,n)}(g(t),n),n.sheet}function m(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function b(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function v(){return y(" ")}function x(){return y("")}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}const E=new Map;let T,C=0;function A(t,n,e,o,r,s,l,c=0){const i=16.666/o;let u="{\n";for(let t=0;t<=1;t+=i){const o=n+(e-n)*s(t);u+=100*t+`%{${l(o,1-o)}}\n`}const f=u+`100% {${l(e,1-e)}}\n}`,a=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${c}`,d=g(t),{stylesheet:h,rules:m}=E.get(d)||function(t,n){const e={stylesheet:p(n),rules:{}};return E.set(t,e),e}(d,t);m[a]||(m[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${a} ${o}ms linear ${r}ms 1 both`,C+=1,a}function N(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),C-=r,C||f((()=>{C||(E.forEach((t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={}})),E.clear())})))}function z(t){T=t}const M=[],R=[],S=[],O=[],j=Promise.resolve();let D=!1;function L(t){S.push(t)}const G=new Set;let P,q=0;function B(){const t=T;do{for(;q<M.length;){const t=M[q];q++,z(t),W(t.$$)}for(z(null),M.length=0,q=0;R.length;)R.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];G.has(n)||(G.add(n),n())}S.length=0}while(M.length);for(;O.length;)O.pop()();D=!1,G.clear(),z(t)}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}function F(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const H=new Set;let I;function J(t,n){t&&t.i&&(H.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),I.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const Q={duration:0};function U(e,o,l,c){let i=o(e,l),h=c?0:1,g=null,p=null,m=null;function $(){m&&N(e,m)}function b(t,n){const e=t.b-h;return n*=Math.abs(e),{a:h,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function w(o){const{delay:s=0,duration:l=300,easing:c=n,tick:w=t,css:y}=i||Q,v={start:u()+s,b:o};o||(v.group=I,I.r+=1),g||p?p=v:(y&&($(),m=A(e,h,o,l,s,c,y)),o&&w(0,1),g=b(v,l),L((()=>F(e,o,"start"))),function(t){let n;0===a.size&&f(d),new Promise((e=>{a.add(n={c:t,f:e})}))}((t=>{if(p&&t>p.start&&(g=b(p,l),p=null,F(e,g.b,"start"),y&&($(),m=A(e,h,g.b,g.duration,0,c,i.css))),g)if(t>=g.end)w(h=g.b,1-h),F(e,g.b,"end"),p||(g.b?$():--g.group.r||r(g.group.c)),g=null;else if(t>=g.start){const n=t-g.start;h=g.a+g.d*c(n/g.duration),w(h,1-h)}return!(!g&&!p)})))}return{run(t){s(i)?(P||(P=Promise.resolve(),P.then((()=>{P=null}))),P).then((()=>{i=i(),w(t)})):w(t)},end(){$(),g=p=null}}}function V(t){t&&t.c()}function X(t,n,o,l){const{fragment:c,on_mount:i,on_destroy:u,after_update:f}=t.$$;c&&c.m(n,o),l||L((()=>{const n=i.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(L)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(M.push(t),D||(D=!0,j.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tt(n,e,s,l,c,i,u,f=[-1]){const a=T;z(n);const d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};u&&u(d.root);let h=!1;if(d.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&Z(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();e.intro&&J(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),B()}z(a)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];let ot=function(n,e=t){let o;const r=new Set;function s(t){if(l(n,t)&&(n=t,o)){const t=!et.length;for(const t of r)t[1](),et.push(t,n);if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(l,c=t){const i=[l,c];return r.add(i),1===r.size&&(o=e(s)||t),l(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}(!1);function rt(){ot.set(!0),setTimeout((()=>ot.set(!1)),500)}function st(t,n,e){const o=t.slice();return o[5]=n[e],o}function lt(t,n,e){const o=t.slice();return o[5]=n[e],o}function ct(t,n,e){const o=t.slice();return o[5]=n[e],o[11]=e,o}function it(t,n,e){const o=t.slice();return o[12]=n[e],o}function ut(t,n,e){const o=t.slice();return o[15]=n[e],o[11]=e,o}function ft(t){let n,e,o,r=t[12][t[11]]+"";return{c(){n=w("div"),e=y(r),_(n,"class",o="tile tile-filled "+(t[15]==t[12][t[11]]?"correct":t[0].includes(t[12][t[11]])?"contains":"wrong")+" svelte-1biw0hh")},m(t,o){m(t,n,o),h(n,e)},p(t,s){2&s&&r!==(r=t[12][t[11]]+"")&&k(e,r),3&s&&o!==(o="tile tile-filled "+(t[15]==t[12][t[11]]?"correct":t[0].includes(t[12][t[11]])?"contains":"wrong")+" svelte-1biw0hh")&&_(n,"class",o)},d(t){t&&$(n)}}}function at(t){let n,e,o=t[0],r=[];for(let n=0;n<o.length;n+=1)r[n]=ft(ut(t,o,n));return{c(){n=w("div");for(let t=0;t<r.length;t+=1)r[t].c();e=v(),_(n,"class","grid-row svelte-1biw0hh")},m(t,o){m(t,n,o);for(let t=0;t<r.length;t+=1)r[t].m(n,null);h(n,e)},p(t,s){if(3&s){let l;for(o=t[0],l=0;l<o.length;l+=1){const c=ut(t,o,l);r[l]?r[l].p(c,s):(r[l]=ft(c),r[l].c(),r[l].m(n,e))}for(;l<r.length;l+=1)r[l].d(1);r.length=o.length}},d(t){t&&$(n),b(r,t)}}}function dt(n){let e;return{c(){e=w("div"),e.textContent=" ",_(e,"class","tile empty svelte-1biw0hh")},m(t,n){m(t,e,n)},p:t,d(t){t&&$(e)}}}function ht(t){let n,e,o=t[1][t[3]][t[11]]+"";return{c(){n=w("div"),e=y(o),_(n,"class","tile filled svelte-1biw0hh")},m(t,o){m(t,n,o),h(n,e)},p(t,n){10&n&&o!==(o=t[1][t[3]][t[11]]+"")&&k(e,o)},d(t){t&&$(n)}}}function gt(t){let n;function e(t,n){return t[11]<t[1][t[3]].length?ht:dt}let o=e(t),r=o(t);return{c(){r.c(),n=x()},m(t,e){r.m(t,e),m(t,n,e)},p(t,s){o===(o=e(t))&&r?r.p(t,s):(r.d(1),r=o(t),r&&(r.c(),r.m(n.parentNode,n)))},d(t){r.d(t),t&&$(n)}}}function pt(t){let n;return{c(){n=w("div"),n.textContent=" ",_(n,"class","tile empty svelte-1biw0hh")},m(t,e){m(t,n,e)},d(t){t&&$(n)}}}function mt(t){let n,e,o=t[0],r=[];for(let n=0;n<o.length;n+=1)r[n]=pt(lt(t,o,n));return{c(){n=w("div");for(let t=0;t<r.length;t+=1)r[t].c();e=v(),_(n,"class","grid-row svelte-1biw0hh")},m(t,o){m(t,n,o);for(let t=0;t<r.length;t+=1)r[t].m(n,null);h(n,e)},p(t,s){if(1&s){const s=o.length;let l;for(o=t[0],l=s;l<o.length;l+=1)lt(t,o,l),r[l]||(r[l]=pt(),r[l].c(),r[l].m(n,e));for(l=o.length;l<s;l+=1)r[l].d(1);r.length=o.length}},d(t){t&&$(n),b(r,t)}}}function $t(n){let e,o,r,s,l,c=n[1].slice(0,-1),i=[];for(let t=0;t<c.length;t+=1)i[t]=at(it(n,c,t));let u=n[0],f=[];for(let t=0;t<u.length;t+=1)f[t]=gt(ct(n,u,t));let a=Array(n[2]-n[3]-1),d=[];for(let t=0;t<a.length;t+=1)d[t]=mt(st(n,a,t));return{c(){e=w("div");for(let t=0;t<i.length;t+=1)i[t].c();o=v(),r=w("div");for(let t=0;t<f.length;t+=1)f[t].c();l=v();for(let t=0;t<d.length;t+=1)d[t].c();_(r,"class",s="grid-row curr "+(n[4]?"shake":"")+" svelte-1biw0hh"),_(e,"class","board svelte-1biw0hh")},m(t,n){m(t,e,n);for(let t=0;t<i.length;t+=1)i[t].m(e,null);h(e,o),h(e,r);for(let t=0;t<f.length;t+=1)f[t].m(r,null);h(e,l);for(let t=0;t<d.length;t+=1)d[t].m(e,null)},p(t,[n]){if(3&n){let r;for(c=t[1].slice(0,-1),r=0;r<c.length;r+=1){const s=it(t,c,r);i[r]?i[r].p(s,n):(i[r]=at(s),i[r].c(),i[r].m(e,o))}for(;r<i.length;r+=1)i[r].d(1);i.length=c.length}if(11&n){let e;for(u=t[0],e=0;e<u.length;e+=1){const o=ct(t,u,e);f[e]?f[e].p(o,n):(f[e]=gt(o),f[e].c(),f[e].m(r,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=u.length}if(16&n&&s!==(s="grid-row curr "+(t[4]?"shake":"")+" svelte-1biw0hh")&&_(r,"class",s),13&n){let o;for(a=Array(t[2]-t[3]-1),o=0;o<a.length;o+=1){const r=st(t,a,o);d[o]?d[o].p(r,n):(d[o]=mt(r),d[o].c(),d[o].m(e,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=a.length}},i:t,o:t,d(t){t&&$(e),b(i,t),b(f,t),b(d,t)}}}function bt(t,n,e){let o,r;c(t,ot,(t=>e(4,r=t)));let{word:s="hello"}=n,{guesses:l=[""]}=n,{nTries:i=6}=n;return t.$$set=t=>{"word"in t&&e(0,s=t.word),"guesses"in t&&e(1,l=t.guesses),"nTries"in t&&e(2,i=t.nTries)},t.$$.update=()=>{1&t.$$.dirty&&console.log("Word",s),2&t.$$.dirty&&e(3,o=l.length-1)},[s,l,i,o,r]}class wt extends nt{constructor(t){super(),tt(this,t,bt,$t,l,{word:0,guesses:1,nTries:2})}}function yt(t){const n=t-1;return n*n*n+1}function vt(t,{delay:n=0,duration:e=400,easing:o=yt,x:r=0,y:s=0,opacity:l=0}={}){const c=getComputedStyle(t),i=+c.opacity,u="none"===c.transform?"":c.transform,f=i*(1-l);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${i-f*n}`}}function xt(t){let n,e,o,r,s;return{c(){n=w("div"),e=w("span"),o=y(t[0]),_(n,"class","popup-box svelte-16vvxzy")},m(t,r){m(t,n,r),h(n,e),h(e,o),s=!0},p(t,n){(!s||1&n)&&k(o,t[0])},i(t){s||(L((()=>{r||(r=U(n,vt,{y:20,duration:500},!0)),r.run(1)})),s=!0)},o(t){r||(r=U(n,vt,{y:20,duration:500},!1)),r.run(0),s=!1},d(t){t&&$(n),t&&r&&r.end()}}}function _t(t){let n,e,o=t[1]&&xt(t);return{c(){o&&o.c(),n=x()},m(t,r){o&&o.m(t,r),m(t,n,r),e=!0},p(t,[e]){t[1]?o?(o.p(t,e),2&e&&J(o,1)):(o=xt(t),o.c(),J(o,1),o.m(n.parentNode,n)):o&&(I={r:0,c:[],p:I},K(o,1,1,(()=>{o=null})),I.r||r(I.c),I=I.p)},i(t){e||(J(o),e=!0)},o(t){K(o),e=!1},d(t){o&&o.d(t),t&&$(n)}}}function kt(t,n,e){let{msg:o=""}=n,r=!1;return t.$$set=t=>{"msg"in t&&e(0,o=t.msg)},t.$$.update=()=>{1&t.$$.dirty&&o&&(e(1,r=!0),setTimeout((()=>{e(1,r=!1)}),1500))},[o,r]}class Et extends nt{constructor(t){super(),tt(this,t,kt,_t,l,{msg:0})}}function Tt(t){let n,e,o,r,s,l,c,i,u,f;function a(n){t[4](n)}r=new wt({props:{word:t[0],guesses:t[1],nTries:6}});let d={};return void 0!==t[2]&&(d.msg=t[2]),l=new Et({props:d}),R.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(l,"msg",a))),{c(){n=w("header"),n.innerHTML="<h1>Wordle</h1>",e=v(),o=w("main"),V(r.$$.fragment),s=v(),V(l.$$.fragment),_(n,"class","svelte-1rt5a7k")},m(c,a){var d,g,p,$;m(c,n,a),m(c,e,a),m(c,o,a),X(r,o,null),h(o,s),X(l,o,null),i=!0,u||(d=window,g="keydown",p=t[3],d.addEventListener(g,p,$),f=()=>d.removeEventListener(g,p,$),u=!0)},p(t,[n]){const e={};1&n&&(e.word=t[0]),2&n&&(e.guesses=t[1]),r.$set(e);const o={};var s;!c&&4&n&&(c=!0,o.msg=t[2],s=()=>c=!1,O.push(s)),l.$set(o)},i(t){i||(J(r.$$.fragment,t),J(l.$$.fragment,t),i=!0)},o(t){K(r.$$.fragment,t),K(l.$$.fragment,t),i=!1},d(t){t&&$(n),t&&$(e),t&&$(o),Y(r),Y(l),u=!1,f()}}}function Ct(t,n,e){let o="hello",r=[],s=[""],l="";return async function(){const t=await fetch("./wordlist.txt");r=(await t.text()).split("\n"),e(0,o=r[Math.floor(Math.random()*r.length)]),console.log("word:",o)}(),[o,s,l,function(t){let n=t.key;/^[a-z]$/i.test(n)?function(t){const n=s.length-1;s[n].length<o.length&&e(1,s[n]+=t.toLowerCase(),s)}(n):"Backspace"===n||"Delete"==n?function(){const t=s.length-1;e(1,s[t]=s[t].slice(0,-1),s)}():"Enter"===n&&function(){const t=s.length-1,n=s[t];console.log("Guess:",n),n.length===o.length?n===o?(e(2,l="Success"),e(1,s[t+1]="",s)):r.includes(n)?(e(2,l="Guess in wordlist but incorrect"),console.log(l),e(1,s[t+1]="",s)):(e(2,l="Guess not in the wordlist"),console.log(l),rt()):(e(2,l="Not enough letters"),console.log(l),rt())}()},function(t){l=t,e(2,l)}]}return new class extends nt{constructor(t){super(),tt(this,t,Ct,Tt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map