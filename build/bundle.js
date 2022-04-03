var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function p(t){g=t}const m=[],$=[],y=[],b=[],v=Promise.resolve();let _=!1;function x(t){y.push(t)}const w=new Set;let k=0;function E(){const t=g;do{for(;k<m.length;){const t=m[k];k++,p(t),A(t.$$)}for(p(null),m.length=0,k=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];w.has(e)||(w.add(e),e())}y.length=0}while(m.length);for(;b.length;)b.pop()();_=!1,w.clear(),p(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const G=new Set;function N(t,e){t&&t.i&&(G.delete(t),t.i(e))}function j(t,n,s,c){const{fragment:l,on_mount:u,on_destroy:i,after_update:f}=t.$$;l&&l.m(n,s),c||x((()=>{const n=u.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(x)}function C(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,r,s,c,l,i,f,a=[-1]){const d=g;p(e);const h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:a,skip_bound:!1,root:r.target||d.$$.root};f&&f(h.root);let m=!1;if(h.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&L(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();r.intro&&N(e.$$.fragment),j(e,r.target,r.anchor,r.customElement),E()}p(d)}class T{$destroy(){C(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(t,e,n){const o=t.slice();return o[3]=e[n],o[5]=n,o}function M(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function S(e){let n;return{c(){n=f("div"),n.textContent=" ",h(n,"class","tile tile-empty svelte-1m34rcf")},m(t,e){l(t,n,e)},p:t,d(t){t&&u(n)}}}function q(t){let e,n,o=t[1][t[5]][t[8]]+"";return{c(){e=f("div"),n=a(o),h(e,"class","tile tile-used svelte-1m34rcf")},m(t,o){l(t,e,o),c(e,n)},p(t,e){2&e&&o!==(o=t[1][t[5]][t[8]]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,o)},d(t){t&&u(e)}}}function z(t){let e;function n(t,e){return t[5]<t[1].length&&t[8]<t[1][t[5]].length?q:S}let o=n(t),r=o(t);return{c(){r.c(),e=a("")},m(t,n){r.m(t,n),l(t,e,n)},p(t,s){o===(o=n(t))&&r?r.p(t,s):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&u(e)}}}function D(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=z(M(t,o,e));return{c(){e=f("div");for(let t=0;t<r.length;t+=1)r[t].c();n=d(),h(e,"class","grid-row svelte-1m34rcf")},m(t,o){l(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);c(e,n)},p(t,s){if(3&s){let c;for(o=t[0],c=0;c<o.length;c+=1){const l=M(t,o,c);r[c]?r[c].p(l,s):(r[c]=z(l),r[c].c(),r[c].m(e,n))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},d(t){t&&u(e),i(r,t)}}}function H(e){let n,o=Array(e[2]),r=[];for(let t=0;t<o.length;t+=1)r[t]=D(B(e,o,t));return{c(){n=f("div");for(let t=0;t<r.length;t+=1)r[t].c();h(n,"class","board svelte-1m34rcf")},m(t,e){l(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(7&e){let s;for(o=Array(t[2]),s=0;s<o.length;s+=1){const c=B(t,o,s);r[s]?r[s].p(c,e):(r[s]=D(c),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){t&&u(n),i(r,t)}}}function P(t,e,n){let{word:o="hello"}=e,{guesses:r=[""]}=e,{nGuesses:s=6}=e;return t.$$set=t=>{"word"in t&&n(0,o=t.word),"guesses"in t&&n(1,r=t.guesses),"nGuesses"in t&&n(2,s=t.nGuesses)},[o,r,s]}class W extends T{constructor(t){super(),O(this,t,P,H,s,{word:0,guesses:1,nGuesses:2})}}function F(t){let e,n,o,r,s,c,i;return r=new W({props:{word:I,guesses:t[0],nGuesses:6}}),{c(){var t;e=f("header"),e.innerHTML="<h1>Wordle</h1>",n=d(),o=f("main"),(t=r.$$.fragment)&&t.c(),h(e,"class","svelte-1rt5a7k")},m(u,f){var a,d,h,g;l(u,e,f),l(u,n,f),l(u,o,f),j(r,o,null),s=!0,c||(a=window,d="keydown",h=t[1],a.addEventListener(d,h,g),i=()=>a.removeEventListener(d,h,g),c=!0)},p(t,[e]){const n={};1&e&&(n.guesses=t[0]),r.$set(n)},i(t){s||(N(r.$$.fragment,t),s=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),(void 0).c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(r.$$.fragment,t),s=!1},d(t){t&&u(e),t&&u(n),t&&u(o),C(r),c=!1,i()}}}let I="hello";function J(t,e,n){let o=[""];return[o,function(t){let e=t.key;/^[a-z]$/i.test(e)?function(t){const e=o.length-1;o[e].length<I.length&&n(0,o[e]+=t,o)}(e):"Backspace"===e||"Delete"==e?function(){const t=o.length-1;n(0,o[t]=o[t].slice(0,-1),o)}():"Enter"===e&&console.log("boo")}]}return new class extends T{constructor(t){super(),O(this,t,J,F,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
