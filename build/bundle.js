var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const i="undefined"!=typeof window;let u=i?()=>window.performance.now():()=>Date.now(),a=i?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&a(d)}function h(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function p(t){const e=w("style");return function(t,e){h(t.head||t,e)}(g(t),e),e.sheet}function m(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function k(){return b(" ")}function x(){return b("")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function z(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const N=new Map;let T,A=0;function M(t,e,n,o,r,c,s,l=0){const i=16.666/o;let u="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*c(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,d=g(t),{stylesheet:h,rules:m}=N.get(d)||function(t,e){const n={stylesheet:p(e),rules:{}};return N.set(t,n),n}(d,t);m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,A+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),A-=r,A||a((()=>{A||(N.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),N.clear())})))}function j(t){T=t}function D(){const t=function(){if(!T)throw new Error("Function called outside component initialization");return T}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=z(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function R(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const q=[],B=[],O=[],P=[],H=Promise.resolve();let F=!1;function G(t){O.push(t)}const V=new Set;let W,I=0;function J(){const t=T;do{for(;I<q.length;){const t=q[I];I++,j(t),K(t.$$)}for(j(null),q.length=0,I=0;B.length;)B.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];V.has(e)||(V.add(e),e())}O.length=0}while(q.length);for(;P.length;)P.pop()();F=!1,V.clear(),j(t)}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function Q(t,e,n){t.dispatchEvent(z(`${e?"intro":"outro"}${n}`))}const U=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,e){t&&t.i&&(U.delete(t),t.i(e))}function et(t,e,n,o){if(t&&t.o){if(U.has(t))return;U.add(t),X.c.push((()=>{U.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const nt={duration:0};function ot(n,o,s){let l,i=o(n,s),h=!0;const g=X;function p(){const{delay:o=0,duration:c=300,easing:s=e,tick:p=t,css:m}=i||nt;m&&(l=M(n,1,0,c,o,s,m));const $=u()+o,y=$+c;G((()=>Q(n,!1,"start"))),function(t){let e;0===f.size&&a(d),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(h){if(t>=y)return p(0,1),Q(n,!1,"end"),--g.r||r(g.c),!1;if(t>=$){const e=s((t-$)/c);p(1-e,e)}}return h}))}return g.r+=1,c(i)?(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then((()=>{i=i(),p()})):p(),{end(t){t&&i.tick&&i.tick(1,0),h&&(l&&L(n,l),h=!1)}}}function rt(t){t&&t.c()}function ct(t,e,o,s){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,o),s||G((()=>{const e=i.map(n).filter(c);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(G)}function st(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(q.push(t),F||(F=!0,H.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,c,s,l,i,u,a=[-1]){const f=T;j(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let h=!1;if(d.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&lt(e,t)),n})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();n.intro&&tt(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),J()}j(f)}class ut{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function at(e){let n;return{c(){n=w("header"),n.innerHTML='<h1 class="svelte-1krzot9">Wordle</h1>',_(n,"class","svelte-1krzot9")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class ft extends ut{constructor(t){super(),it(this,t,null,at,s,{})}}const dt=[];let ht=function(e,n=t){let o;const r=new Set;function c(t){if(s(e,t)&&(e=t,o)){const t=!dt.length;for(const t of r)t[1](),dt.push(t,e);if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,l=t){const i=[s,l];return r.add(i),1===r.size&&(o=n(c)||t),s(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}(!1);function gt(){ht.set(!0),setTimeout((()=>ht.set(!1)),500)}function pt(t,e,n){const o=t.slice();return o[5]=e[n],o}function mt(t,e,n){const o=t.slice();return o[5]=e[n],o}function $t(t,e,n){const o=t.slice();return o[5]=e[n],o[11]=n,o}function yt(t,e,n){const o=t.slice();return o[12]=e[n],o}function wt(t,e,n){const o=t.slice();return o[15]=e[n],o[11]=n,o}function vt(t){let e,n,o,r=t[12][t[11]]+"";return{c(){e=w("div"),n=b(r),_(e,"class",o="tile "+(t[15]==t[12][t[11]]?"correct":t[0].includes(t[12][t[11]])?"contains":"wrong")+" svelte-wbp29y"),S(e,"animation-delay",.2*t[11]+"s")},m(t,o){m(t,e,o),h(e,n)},p(t,c){2&c&&r!==(r=t[12][t[11]]+"")&&E(n,r),3&c&&o!==(o="tile "+(t[15]==t[12][t[11]]?"correct":t[0].includes(t[12][t[11]])?"contains":"wrong")+" svelte-wbp29y")&&_(e,"class",o)},d(t){t&&$(e)}}}function bt(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=vt(wt(t,o,e));return{c(){e=w("div");for(let t=0;t<r.length;t+=1)r[t].c();n=k(),_(e,"class","grid-row svelte-wbp29y")},m(t,o){m(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);h(e,n)},p(t,c){if(3&c){let s;for(o=t[0],s=0;s<o.length;s+=1){const l=wt(t,o,s);r[s]?r[s].p(l,c):(r[s]=vt(l),r[s].c(),r[s].m(e,n))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},d(t){t&&$(e),y(r,t)}}}function kt(e){let n;return{c(){n=b(" ")},m(t,e){m(t,n,e)},p:t,d(t){t&&$(n)}}}function xt(t){let e,n=t[1][t[3]][t[11]]+"";return{c(){e=b(n)},m(t,n){m(t,e,n)},p(t,o){10&o&&n!==(n=t[1][t[3]][t[11]]+"")&&E(e,n)},d(t){t&&$(e)}}}function Ct(t){let e,n,o;function r(t,e){return t[11]<t[1][t[3]].length?xt:kt}let c=r(t),s=c(t);return{c(){e=w("div"),s.c(),n=k(),_(e,"class",o="tile "+(t[11]<t[1][t[3]].length?"filled":"empty")+" svelte-wbp29y")},m(t,o){m(t,e,o),s.m(e,null),h(e,n)},p(t,l){c===(c=r(t))&&s?s.p(t,l):(s.d(1),s=c(t),s&&(s.c(),s.m(e,n))),10&l&&o!==(o="tile "+(t[11]<t[1][t[3]].length?"filled":"empty")+" svelte-wbp29y")&&_(e,"class",o)},d(t){t&&$(e),s.d()}}}function _t(t){let e;return{c(){e=w("div"),e.textContent=" ",_(e,"class","tile empty svelte-wbp29y")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function Et(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=_t(mt(t,o,e));return{c(){e=w("div");for(let t=0;t<r.length;t+=1)r[t].c();n=k(),_(e,"class","grid-row svelte-wbp29y")},m(t,o){m(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);h(e,n)},p(t,c){if(1&c){const c=o.length;let s;for(o=t[0],s=c;s<o.length;s+=1)mt(t,o,s),r[s]||(r[s]=_t(),r[s].c(),r[s].m(e,n));for(s=o.length;s<c;s+=1)r[s].d(1);r.length=o.length}},d(t){t&&$(e),y(r,t)}}}function St(e){let n,o,r,c,s,l=e[1].slice(0,-1),i=[];for(let t=0;t<l.length;t+=1)i[t]=bt(yt(e,l,t));let u=e[0],a=[];for(let t=0;t<u.length;t+=1)a[t]=Ct($t(e,u,t));let f=Array(e[2]-e[3]-1),d=[];for(let t=0;t<f.length;t+=1)d[t]=Et(pt(e,f,t));return{c(){n=w("div");for(let t=0;t<i.length;t+=1)i[t].c();o=k(),r=w("div");for(let t=0;t<a.length;t+=1)a[t].c();s=k();for(let t=0;t<d.length;t+=1)d[t].c();_(r,"class",c="grid-row curr "+(e[4]?"shake":"")+" svelte-wbp29y"),_(n,"class","board svelte-wbp29y")},m(t,e){m(t,n,e);for(let t=0;t<i.length;t+=1)i[t].m(n,null);h(n,o),h(n,r);for(let t=0;t<a.length;t+=1)a[t].m(r,null);h(n,s);for(let t=0;t<d.length;t+=1)d[t].m(n,null)},p(t,[e]){if(3&e){let r;for(l=t[1].slice(0,-1),r=0;r<l.length;r+=1){const c=yt(t,l,r);i[r]?i[r].p(c,e):(i[r]=bt(c),i[r].c(),i[r].m(n,o))}for(;r<i.length;r+=1)i[r].d(1);i.length=l.length}if(11&e){let n;for(u=t[0],n=0;n<u.length;n+=1){const o=$t(t,u,n);a[n]?a[n].p(o,e):(a[n]=Ct(o),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=u.length}if(16&e&&c!==(c="grid-row curr "+(t[4]?"shake":"")+" svelte-wbp29y")&&_(r,"class",c),13&e){let o;for(f=Array(t[2]-t[3]-1),o=0;o<f.length;o+=1){const r=pt(t,f,o);d[o]?d[o].p(r,e):(d[o]=Et(r),d[o].c(),d[o].m(n,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=f.length}},i:t,o:t,d(t){t&&$(n),y(i,t),y(a,t),y(d,t)}}}function zt(t,e,n){let o,r;l(t,ht,(t=>n(4,r=t)));let{word:c=""}=e,{guesses:s=[""]}=e,{nTries:i=6}=e;return t.$$set=t=>{"word"in t&&n(0,c=t.word),"guesses"in t&&n(1,s=t.guesses),"nTries"in t&&n(2,i=t.nTries)},t.$$.update=()=>{2&t.$$.dirty&&n(3,o=s.length-1)},[c,s,i,o,r]}class Nt extends ut{constructor(t){super(),it(this,t,zt,St,s,{word:0,guesses:1,nTries:2})}}function Tt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*c}}function At(t){let e,n,o,r;return{c(){e=w("div"),n=b(t[0]),_(e,"class","popup-box svelte-7j5g76")},m(t,o){m(t,e,o),h(e,n),r=!0},p(t,e){(!r||1&e)&&E(n,t[0])},i(t){r||(o&&o.end(1),r=!0)},o(t){o=ot(e,Tt,{duration:200}),r=!1},d(t){t&&$(e),t&&o&&o.end()}}}function Mt(t){let e,n,o=t[1]&&At(t);return{c(){o&&o.c(),e=x()},m(t,r){o&&o.m(t,r),m(t,e,r),n=!0},p(t,[n]){t[1]?o?(o.p(t,n),2&n&&tt(o,1)):(o=At(t),o.c(),tt(o,1),o.m(e.parentNode,e)):o&&(Y(),et(o,1,1,(()=>{o=null})),Z())},i(t){n||(tt(o),n=!0)},o(t){et(o),n=!1},d(t){o&&o.d(t),t&&$(e)}}}function Lt(t,e,n){let{msg:o=""}=e,r=!1;return t.$$set=t=>{"msg"in t&&n(0,o=t.msg)},t.$$.update=()=>{1&t.$$.dirty&&o&&(n(1,r=!0),setTimeout((()=>{n(1,r=!1),n(0,o="")}),1e3))},[o,r]}class jt extends ut{constructor(t){super(),it(this,t,Lt,Mt,s,{msg:0})}}function Dt(t){let e,n,o,r,c;return{c(){e=w("button"),n=b(t[0]),_(e,"class",o="key "+(t[2]?"correct":t[1]?"contains":"")+" svelte-cwau6x"),_(e,"data-key",t[0])},m(o,s){m(o,e,s),h(e,n),r||(c=C(e,"click",t[3]),r=!0)},p(t,r){1&r&&E(n,t[0]),6&r&&o!==(o="key "+(t[2]?"correct":t[1]?"contains":"")+" svelte-cwau6x")&&_(e,"class",o),1&r&&_(e,"data-key",t[0])},d(t){t&&$(e),r=!1,c()}}}function Rt(t){let e,n,o,r,c,s;return{c(){e=w("button"),n=v("svg"),o=v("path"),_(o,"fill","var(--color-tone-1)"),_(o,"d","M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"),_(n,"xmlns","http://www.w3.org/2000/svg"),_(n,"height","24"),_(n,"viewBox","0 0 24 24"),_(n,"width","24"),_(e,"class",r="key "+(t[2]?"correct":t[1]?"contains":"")+" svelte-cwau6x"),_(e,"data-key",t[0])},m(r,l){m(r,e,l),h(e,n),h(n,o),c||(s=C(e,"click",t[3]),c=!0)},p(t,n){6&n&&r!==(r="key "+(t[2]?"correct":t[1]?"contains":"")+" svelte-cwau6x")&&_(e,"class",r),1&n&&_(e,"data-key",t[0])},d(t){t&&$(e),c=!1,s()}}}function qt(e){let n;return{c(){n=w("div"),S(n,"flex","0.5")},m(t,e){m(t,n,e)},p:t,d(t){t&&$(n)}}}function Bt(e){let n;function o(t,e){return"Spacer"===t[0]?qt:"Delete"==t[0]?Rt:Dt}let r=o(e),c=r(e);return{c(){c.c(),n=x()},m(t,e){c.m(t,e),m(t,n,e)},p(t,[e]){r===(r=o(t))&&c?c.p(t,e):(c.d(1),c=r(t),c&&(c.c(),c.m(n.parentNode,n)))},i:t,o:t,d(t){c.d(t),t&&$(n)}}}function Ot(t,e,n){let o,r,{charsCorrect:c=new Set}=e,{charsContains:s=new Set}=e,{key:l=""}=e;const i=D();return t.$$set=t=>{"charsCorrect"in t&&n(4,c=t.charsCorrect),"charsContains"in t&&n(5,s=t.charsContains),"key"in t&&n(0,l=t.key)},t.$$.update=()=>{17&t.$$.dirty&&n(2,o=c.has(l)),33&t.$$.dirty&&n(1,r=s.has(l))},[l,r,o,function(t){console.log(l),i("key",{key:l})},c,s]}class Pt extends ut{constructor(t){super(),it(this,t,Ot,Bt,s,{charsCorrect:4,charsContains:5,key:0})}}function Ht(t,e,n){const o=t.slice();return o[4]=e[n],o}function Ft(t,e,n){const o=t.slice();return o[7]=e[n],o}function Gt(t){let e,n;return e=new Pt({props:{key:t[7],charsCorrect:t[0],charsContains:t[1]}}),e.$on("key",t[3]),{c(){rt(e.$$.fragment)},m(t,o){ct(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.key=t[7]),1&n&&(o.charsCorrect=t[0]),2&n&&(o.charsContains=t[1]),e.$set(o)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function Vt(t){let e,n,o,r=t[4],c=[];for(let e=0;e<r.length;e+=1)c[e]=Gt(Ft(t,r,e));const s=t=>et(c[t],1,1,(()=>{c[t]=null}));return{c(){e=w("div");for(let t=0;t<c.length;t+=1)c[t].c();n=k(),_(e,"class","row svelte-1kaptn2")},m(t,r){m(t,e,r);for(let t=0;t<c.length;t+=1)c[t].m(e,null);h(e,n),o=!0},p(t,o){if(7&o){let l;for(r=t[4],l=0;l<r.length;l+=1){const s=Ft(t,r,l);c[l]?(c[l].p(s,o),tt(c[l],1)):(c[l]=Gt(s),c[l].c(),tt(c[l],1),c[l].m(e,n))}for(Y(),l=r.length;l<c.length;l+=1)s(l);Z()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)tt(c[t]);o=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)et(c[t]);o=!1},d(t){t&&$(e),y(c,t)}}}function Wt(t){let e,n,o=t[2],r=[];for(let e=0;e<o.length;e+=1)r[e]=Vt(Ht(t,o,e));const c=t=>et(r[t],1,1,(()=>{r[t]=null}));return{c(){e=w("div");for(let t=0;t<r.length;t+=1)r[t].c();_(e,"class","keyboard svelte-1kaptn2")},m(t,o){m(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(7&n){let s;for(o=t[2],s=0;s<o.length;s+=1){const c=Ht(t,o,s);r[s]?(r[s].p(c,n),tt(r[s],1)):(r[s]=Vt(c),r[s].c(),tt(r[s],1),r[s].m(e,null))}for(Y(),s=o.length;s<r.length;s+=1)c(s);Z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)tt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)et(r[t]);n=!1},d(t){t&&$(e),y(r,t)}}}function It(t,e,n){let{charsCorrect:o=new Set}=e,{charsContains:r=new Set}=e;const c=["qwertyuiop","asdfghjkl","zxcvbnm"];return c[1]=["Spacer",...c[1],"Spacer"],c[2]=["Enter",...c[2],"Delete"],t.$$set=t=>{"charsCorrect"in t&&n(0,o=t.charsCorrect),"charsContains"in t&&n(1,r=t.charsContains)},[o,r,c,function(e){R.call(this,t,e)}]}class Jt extends ut{constructor(t){super(),it(this,t,It,Wt,s,{charsCorrect:0,charsContains:1})}}function Kt(t){let e,n,o,r,c,s,l,i,u,a,f,d,g;function p(e){t[7](e)}let y={};return void 0!==t[4]&&(y.msg=t[4]),e=new jt({props:y}),B.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,"msg",p))),c=new ft({}),i=new Nt({props:{word:t[1],guesses:t[0],nTries:Qt}}),a=new Jt({props:{charsContains:t[3],charsCorrect:t[2]}}),a.$on("key",t[6]),{c(){rt(e.$$.fragment),o=k(),r=w("main"),rt(c.$$.fragment),s=k(),l=w("div"),rt(i.$$.fragment),u=k(),rt(a.$$.fragment),_(l,"id","game"),_(l,"class","svelte-1nifnqk"),_(r,"class","svelte-1nifnqk")},m(n,p){ct(e,n,p),m(n,o,p),m(n,r,p),ct(c,r,null),h(r,s),h(r,l),ct(i,l,null),h(l,u),ct(a,l,null),f=!0,d||(g=C(window,"keydown",t[5]),d=!0)},p(t,[o]){const r={};var c;!n&&16&o&&(n=!0,r.msg=t[4],c=()=>n=!1,P.push(c)),e.$set(r);const s={};2&o&&(s.word=t[1]),1&o&&(s.guesses=t[0]),i.$set(s);const l={};8&o&&(l.charsContains=t[3]),4&o&&(l.charsCorrect=t[2]),a.$set(l)},i(t){f||(tt(e.$$.fragment,t),tt(c.$$.fragment,t),tt(i.$$.fragment,t),tt(a.$$.fragment,t),f=!0)},o(t){et(e.$$.fragment,t),et(c.$$.fragment,t),et(i.$$.fragment,t),et(a.$$.fragment,t),f=!1},d(t){st(e,t),t&&$(o),t&&$(r),st(c),st(i),st(a),d=!1,g()}}}let Qt=6;function Ut(t,e,n){let o,r="",c=[],s=[""],l=new Set,i=new Set;function u(){n(2,l=new Set(s.flatMap((t=>[...t].filter(((t,e)=>t===r[e])))))),n(3,i=new Set(s.flatMap((t=>[...t].filter((t=>r.includes(t))))))),console.log(l,i)}let a=!1,f="";function d(t){var e;/^[a-z]$/i.test(t)?(e=t,s[o].length<r.length&&n(0,s[o]+=e.toLowerCase(),s)):"Backspace"===t||"Delete"==t?n(0,s[o]=s[o].slice(0,-1),s):"Enter"===t&&function(){const t=s[o];console.log("Guess:",t),t.length===r.length?t===r?(n(4,f="Success"),u(),n(0,s[o+1]="",s),a=!0):c.includes(t)?(console.log("Guess in wordlist but incorrect"),u(),n(0,s[o+1]="",s)):(n(4,f="Not in word list"),console.log(f),gt()):(n(4,f="Not enough letters"),console.log(f),gt()),s.length==Qt&&(a=!0)}()}return async function(){const t=await fetch("./wordlist.txt");c=(await t.text()).split("\n"),n(1,r=c[Math.floor(Math.random()*c.length)]),console.log("word:",r)}(),t.$$.update=()=>{1&t.$$.dirty&&(o=s.length-1)},[s,r,l,i,f,function(t){a||d(t.key)},function(t){a||d(t.detail.key)},function(t){f=t,n(4,f)}]}return new class extends ut{constructor(t){super(),it(this,t,Ut,Kt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
