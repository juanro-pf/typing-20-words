(this["webpackJsonptyping-app"]=this["webpackJsonptyping-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=n(1),u=n(2),i=n.n(u),s=n(5),b=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://random-word-api.herokuapp.com/word?number=".concat(t),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={button:{backgroundColor:"blue",border:"1px solid white",borderRadius:"5px",color:"white",cursor:"pointer",fontSize:"25px",textDecoration:"none"}},f=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),i=u[0],s=u[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),y=g[0],d=g[1],h=Object(a.useState)(0),m=Object(l.a)(h,2),E=m[0],j=m[1],x=Object(a.useState)(-500),v=Object(l.a)(x,2),O=v[0],k=v[1],S=Object(a.useState)(),A=Object(l.a)(S,2),w=A[0],C=A[1],I=Object(a.useRef)(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0,n=Object(a.useState)([]),r=Object(l.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){b(e).then((function(e){o(e)}))}),[e,t]),c}(20,n),R=z.join(" "),T=R.split(""),B=Math.floor(O/100);Object(a.useEffect)((function(){0!==z.length&&(k(-300),C(setInterval((function(){k((function(e){return e+1}))}),10)))}),[z]),Object(a.useEffect)((function(){y==="".concat(R," ")&&clearInterval(w)}),[y,R,w]);var D=function(){c((function(e){return!e})),clearInterval(w),s(""),d(""),j(0),k(-500)};return r.a.createElement("div",null,r.a.createElement("p",{style:{fontSize:"30px",textAlign:"center"}},T.map((function(e,t){return y.length+i.length<=t?r.a.createElement("span",{key:t},e):e===i[t-y.length]||y.length>t?r.a.createElement("span",{key:t,style:{color:"blue"}},e):r.a.createElement("span",{key:t,style:{color:"red"}},e)}))),0!==z.length&&r.a.createElement("input",{ref:I,autoFocus:!0,onBlur:function(){I.current.focus()},disabled:E===z.length||O<=0?"disabled":"",style:{fontSize:"30px",textAlign:"center",margin:"0 auto",display:"block"},type:"text",value:i,onChange:function(e){e.target.value==="".concat(z[E]," ")?(s(""),d((function(e){return"".concat(e).concat(z[E]," ")})),j((function(e){return e+1}))):s(e.target.value)}}),y==="".concat(R," ")?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{fontSize:"30px",textAlign:"center"}},"It took you ",r.a.createElement("span",{style:{color:"red"}},B<10&&"0",B,":",O-100*B<10&&"0",O-100*B)," seconds to type 20 words"),r.a.createElement("button",{onClick:D,style:p.button},"Try again")):-500===O?r.a.createElement("h1",{style:{textAlign:"center"}},"READY?"):O>=0?(I.current.focus(),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{textAlign:"left"}},B<10&&"0",B,":",O-100*B<10&&"0",O-100*B),r.a.createElement("button",{onClick:D,style:p.button},"Try again"))):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{textAlign:"center"}},Math.abs(B)),r.a.createElement("button",{onClick:D,style:p.button},"Try again")))};o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.112137e6.chunk.js.map