var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function l(){return a(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}const m=[],h=[],$=[],g=[],b=Promise.resolve();let y=!1;function _(t){$.push(t)}let x=!1;const v=new Set;function k(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];p(e),w(e.$$)}for(p(null),m.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];v.has(e)||(v.add(e),e())}$.length=0}while(m.length);for(;g.length;)g.pop()();y=!1,x=!1,v.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const E=new Set;function j(t,e){-1===t.$$.dirty[0]&&(m.push(t),y||(y=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(i,c,s,a,l,f,m,h=[-1]){const $=d;p(i);const g=i.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||($?$.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:c.target||$.$$.root};m&&m(g.root);let b=!1;if(g.ctx=s?s(i,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&j(i,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();c.intro&&((y=i.$$.fragment)&&y.i&&(E.delete(y),y.i(x))),function(t,n,i,c){const{fragment:u,on_mount:s,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,i),c||_((()=>{const n=s.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(_)}(i,c.target,c.anchor,c.customElement),k()}var y,x;p($)}function C(e){let n,o,r,i,d,p,m,h,$,g,b;return{c(){n=s("main"),o=s("h1"),r=a("Hello "),i=a(e[0]),d=a("!"),p=l(),m=s("p"),m.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',h=l(),$=s("p"),$.textContent="Man im having so much fun here, gh pages is free",g=l(),b=s("p"),b.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis.  this is line 4",f(o,"class","svelte-1tky8bj"),f(n,"class","svelte-1tky8bj")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),c(n,o),c(o,r),c(o,i),c(o,d),c(n,p),c(n,m),c(n,h),c(n,$),c(n,g),c(n,b)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,t[0])},i:t,o:t,d(t){t&&u(n)}}}function N(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,N,C,i,{name:0})}}({target:document.body,props:{name:"Kimi number two"}})}();
//# sourceMappingURL=bundle.js.map
