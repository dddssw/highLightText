var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function n(t,e,n){if(!CSS.highlights)throw new Error("CSS Custom Highlight API not supported.");e=e.trim();const{isCaseSensitive:i=!1,cssName:r="default",ignoreText:o=[]}=n;if(CSS.highlights.delete(r),!e)return;i||(e=e.toLowerCase());const h=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),s=[];let l=h.nextNode();for(;l;)s.push(l),l=h.nextNode();const a=s.map((t=>({el:t,text:i?t.textContent:t.textContent.toLowerCase()}))).map((({text:t,el:n})=>{if(!t)return[];const i=[];let r=0;if(!o.includes(t))for(;r<t.length;){const n=t.indexOf(e,r);if(-1===n)break;i.push(n),r=n+e.length}return i.map((t=>{const i=new Range;return i.setStart(n,t),i.setEnd(n,t+e.length),i}))})),g=new Highlight(...a.flat());CSS.highlights.set(r,g)}function i(){CSS.highlights.clear()}function r(t){CSS.highlights.delete(t)}t.d(e,{SU:()=>r,tt:()=>n,yD:()=>i});var o=e.yD,h=e.SU,s=e.tt;export{o as cancelAllHighLight,h as cancelNameHighLight,s as highLight};