(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{28:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,s,b,u,j,d,l,f,O,m,h,p,g,x,v,y,w,k,C,T,S,E,A,D,I,M,N,F,z,J,V,P=t(0),R=t.n(P),H=t(9),L=t.n(H),B=t(5),K=t(3),W=t(2),q=t(4),G=W.d.div(r||(r=Object(K.a)(["\n  padding: 1.4rem;\n  margin: 5rem auto 0;\n  border-radius: 50%;\n  background: linear-gradient(315deg, #2E325A 0%, #0E112A 100%);\n  box-shadow: -50px -50px 100px #272C5A, 50px 50px 100px #121530;\n  ","\n"])),q.e),Q=W.d.div(c||(c=Object(K.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #161932;\n  color: #d7e0ff;\n"]))),U=W.d.div(o||(o=Object(K.a)(["\n  width: 90%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),X=Object(W.d)(U)(i||(i=Object(K.a)(["\n  text-align: center;\n  z-index: 2;\n"]))),Y=W.d.h2(a||(a=Object(K.a)(["\n  font-size: 5.5rem;\n  font-weight: 700;\n  ","\n"])),q.d),Z=W.d.h2(s||(s=Object(K.a)(["\n  cursor: pointer;\n  margin-top: 2rem;\n  font-size: 1rem;\n  letter-spacing: 15px;\n  \n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.color})),$=t(12),_=t(1),nn=function(){return function(n){return function(e){var t=e.toggleTimer,r=e.timerType,c=e.initValue,o=Object(P.useState)(0),i=Object(B.a)(o,2),a=i[0],s=i[1],b=Object(P.useState)(!1),u=Object(B.a)(b,2),j=u[0],d=u[1],l=Object(P.useState)(!1),f=Object(B.a)(l,2),O=f[0],m=f[1];Object(P.useEffect)((function(){return s(c),function(){d(!1),m(!1)}}),[c,r]),Object(P.useEffect)((function(){a<=0&&j&&h()}),[a,t]),Object(P.useEffect)((function(){if(j){var n=setInterval((function(){s((function(e){return e<=0?(clearInterval(n),0):e-1}))}),1e3);return function(){return clearInterval(n)}}}),[j]);var h=function(){s(c),m(!0),d(!1)},p=function(n){return n<10?"0".concat(n):n};return Object(_.jsx)(n,{pauseHandler:function(){O&&m(!1),d((function(n){return!n}))},actionContent:j?"STOP":O?"RESTART":"START",timePart:100*a/c,time:function(n){var e=Math.floor(n/60),t=n%60;return"".concat(p(e),":").concat(p(t))}(a)})}}},en=(t(26),nn()(Object(W.e)((function(n){var e=n.time,t=n.timePart,r=n.pauseHandler,c=n.actionContent,o=n.theme;return Object(_.jsx)(G,{width:[250,270,370,450],height:[250,270,370,450],children:Object(_.jsxs)(Q,{children:[Object(_.jsx)(U,{children:Object(_.jsx)($.a,{strokeWidth:4,styles:Object($.b)({trailColor:"none",pathColor:o.primaryColor}),value:t})}),Object(_.jsxs)(X,{children:[Object(_.jsx)(Y,{fontSize:["5.2rem","5.4rem","5.4rem","5.4rem"],children:e}),Object(_.jsx)(Z,{onClick:r,children:c})]})]})})})))),tn=W.d.h1(b||(b=Object(K.a)(["\n  padding-top: 2rem;\n  text-align: center;\n  color: #fff;\n"]))),rn=W.d.div(u||(u=Object(K.a)(["\n  text-align: center;\n  margin-top: 5rem\n"]))),cn=W.d.button(j||(j=Object(K.a)(["\n  background: none;\n  border: none;\n  display: block;\n  margin: 5rem auto 0;\n  cursor: pointer;\n"]))),on=W.d.button(d||(d=Object(K.a)(["\n  min-height: 3rem;\n  border-radius: 27px;\n  border: none;\n  cursor: pointer;\n  background-color: ",";\n\n  ","\n"])),(function(n){return n.theme.primaryColor}),q.e),an=W.d.div(l||(l=Object(K.a)(["\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  ","\n"])),q.e),sn=W.d.div(f||(f=Object(K.a)(["\n  background-color: #161932;\n  border-radius: 5rem;\n  display: inline-block;\n  padding: .5rem;\n"]))),bn=Object(W.d)(on)(O||(O=Object(K.a)(["\n  font-weight: 700;\n  background-color: ",";\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.active?"":"transparent"}),(function(n){return n.active?"#1e213f":"#8c8c8c"}),(function(n){return n.active?"":"#d7e0ff"})),un=function(n){var e,t=n.switchActiveTimerType,r=n.activeTimerType;return Object(_.jsx)(sn,{onClick:function(n){var e=n.target;e.dataset.type&&t(e.dataset.type)},children:(e=["pomodoro","short break","long break"],e.map((function(n){return Object(_.jsx)(bn,{className:"focus","data-type":n,active:r===n,width:[90,120,150,200],children:n},n)})))})},jn=t.p+"static/media/icon-settings.e0a317db.svg",dn=function(n){var e=n.openModal,t=n.config,r=Object(P.useState)("pomodoro"),c=Object(B.a)(r,2),o=c[0],i=c[1];return Object(_.jsxs)(an,{width:1,children:[Object(_.jsx)(tn,{children:"pomodoro"}),Object(_.jsx)(rn,{children:Object(_.jsx)(un,{activeTimerType:o,switchActiveTimerType:i})}),Object(_.jsx)(en,{initValue:t[o],timerType:o,toggleTimer:i}),Object(_.jsx)(cn,{onClick:e,className:"focus",children:Object(_.jsx)("img",{src:jn,alt:"settings"})})]})},ln=function(n){var e=n.id,t=n.children,r=document.createElement("div");return r.id=e,Object(P.useEffect)((function(){return document.body.prepend(r),document.body.style.overflow="hidden",function(){r.remove(),document.body.style.overflow=""}}),[r]),L.a.createPortal(t,r)},fn=Object(W.c)(m||(m=Object(K.a)(["\n  margin-top: 2rem;\n"]))),On=Object(W.c)(h||(h=Object(K.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),mn=W.d.div(p||(p=Object(K.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: rgba(0, 0, 0, .5);\n  z-index: 9;\n"]))),hn=W.d.div(g||(g=Object(K.a)(["\n  ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  border-radius: 25px;\n  color: #161932;\n  padding: 1.5rem 0 4rem;\n"])),q.f),pn=W.d.header(x||(x=Object(K.a)(["\n  ",";\n"])),On),gn=W.d.hr(v||(v=Object(K.a)(["\n  ",";\n  border-top: 1px solid #e3e1e1;\n"])),fn),xn=W.d.h3(y||(y=Object(K.a)(["\n  letter-spacing: 5px;\n  text-transform: uppercase;\n"]))),vn=W.d.main(w||(w=Object(K.a)(["\n  ",";\n"])),fn),yn=W.d.section(k||(k=Object(K.a)(["\n  ",";\n  ",";\n  ",";\n  gap: 10px;\n"])),On,fn,q.b),wn=Object(W.d)(yn)(C||(C=Object(K.a)(["\n  ",";\n"])),q.b),kn=Object(W.d)(yn)(T||(T=Object(K.a)([""]))),Cn=Object(W.d)(yn)(S||(S=Object(K.a)([""]))),Tn=W.d.div(E||(E=Object(K.a)(["\n  ",";\n  gap: 1rem;\n"])),On),Sn=W.d.button(A||(A=Object(K.a)(["\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n"]))),En=Object(W.d)(Sn)(D||(D=Object(K.a)(["\n  ",";\n  background-color: ",";\n  color: ",";\n  justify-content: center;\n  ","\n"])),On,(function(n){return n.active?"#161932":"#e3e1e1"}),(function(n){return n.active?"#fff":""}),q.c),An=Object(W.d)(Sn)(I||(I=Object(K.a)(["\n  ",";\n  position: relative;\n\n  &:before {\n    content: '\u2714';\n    display: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])),q.a,(function(n){return n.active?"":"none"})),Dn=Object(W.d)(on)(M||(M=Object(K.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  color: #fff;\n  font-weight: 700;\n"]))),In=W.d.button(N||(N=Object(K.a)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),Mn=t.p+"static/media/icon-close.79cfecaf.svg",Nn=t(7),Fn=t(8),zn=W.d.label(F||(F=Object(K.a)(["\n  ",";\n  ",";\n"])),q.e,q.b),Jn=W.d.input(z||(z=Object(K.a)(["\n  ",";\n  \n  background: #EFF1FA;\n  border-radius: 10px;\n  border: none;\n  min-height: 2.3rem;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n"])),q.e),Vn=W.d.span(J||(J=Object(K.a)(["\n  ",";\n  \n  display: block;\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: #858585;\n"])),q.e),Pn=function(n){var e=n.label,t=n.value,r=n.changeTimeConfig;return Object(_.jsxs)(zn,{display:["flex","block","block","block"],justifyContent:["space-between","","",""],alignItems:["center","","",""],width:[1,.4,.4,.4],children:[Object(_.jsx)(Vn,{width:["30%","100%","100%","100%"],children:e}),Object(_.jsx)(Jn,{value:t,onInput:function(n){var t=60*+n.currentTarget.value;r((function(n){return Object(Fn.a)(Object(Fn.a)({},n),{},Object(Nn.a)({},e,t))}))},min:"1",max:"100",type:"number",width:["60%","100%","100%","100%"]})]})},Rn=mn,Hn=hn,Ln=pn,Bn=xn,Kn=vn,Wn=gn,qn=wn,Gn=kn,Qn=Cn,Un=En,Xn=Tn,Yn=An,Zn=Dn,$n=In,_n=Object(W.e)((function(n){var e=n.closeModal,t=n.themeList,r=n.switchThemeValue,c=n.theme,o=n.timerConfig,i=n.changeTimerConfig,a=function(n){return t[n].findIndex((function(e){return e===c[n]}))},s=Object(P.useState)(a("font")),b=Object(B.a)(s,2),u=b[0],j=b[1],d=Object(P.useState)(a("primaryColor")),l=Object(B.a)(d,2),f=l[0],O=l[1],m=Object(P.useState)(o),h=Object(B.a)(m,2),p=h[0],g=h[1];return Object(_.jsx)(Rn,{children:Object(_.jsxs)(Hn,{width:[.9,.8,.6,.4],children:[Object(_.jsx)(an,{children:Object(_.jsxs)(Ln,{children:[Object(_.jsx)("h2",{children:"Settings"}),Object(_.jsx)($n,{className:"focus",onClick:e,children:Object(_.jsx)("img",{src:Mn,alt:"close"})})]})}),Object(_.jsx)(Wn,{}),Object(_.jsx)(an,{children:Object(_.jsxs)(Kn,{children:[Object(_.jsx)(Bn,{children:"Time (Minutes)"}),Object(_.jsx)(qn,{flexDirection:["column","row","row","row"],alignItems:["flex-start","","",""],children:Object.entries(p).map((function(n){var e=Object(B.a)(n,2),t=e[0],r=e[1];return Object(_.jsx)(Pn,{changeTimeConfig:g,value:r/60,label:t},t)}))}),Object(_.jsx)(Wn,{}),Object(_.jsxs)(Gn,{flexDirection:["column","row","row","row"],children:[Object(_.jsx)(Bn,{children:"Font"}),Object(_.jsx)(Xn,{children:t.font.map((function(n,e){return Object(_.jsx)(Un,{active:u===e,fontFamily:n,className:"focus",onClick:function(){return j(e)},children:"Aa"},n)}))})]}),Object(_.jsx)(Wn,{}),Object(_.jsxs)(Qn,{flexDirection:["column","row","row","row"],children:[Object(_.jsx)(Bn,{children:"Color"}),Object(_.jsx)(Xn,{children:t.primaryColor.map((function(n,e){return Object(_.jsx)(Yn,{active:f===e,onClick:function(){return O(e)},className:"focus",backgroundColor:n},n)}))})]})]})}),Object(_.jsx)(Zn,{onClick:function(){t.font[u]!==c.font&&r("font",u),t.primaryColor[f]!==c.primaryColor&&r("primaryColor",f),Object.is(p,o)||i(p),e()},className:"focus",width:140,children:"Apply"})]})})})),ne=t(17),ee=t(18),te=function(){function n(e){Object(ne.a)(this,n),this.key=e,this.storage=window.localStorage}return Object(ee.a)(n,[{key:"getData",value:function(){return this.storage.getItem(this.key)}},{key:"setData",value:function(n){this.storage.setItem(this.key,n)}}]),n}(),re={font:["Kumbh Sans","Roboto Slab","Space Mono"],primaryColor:["#F87070","#70F3F8","#D881F8"]},ce=function(){var n=Object(P.useMemo)((function(){return new te("default-theme")}),[]),e={font:re.font[0],primaryColor:re.primaryColor[0]},t=Object(P.useState)(e),r=Object(B.a)(t,2),c=r[0],o=r[1];return Object(P.useEffect)((function(){var e=n.getData();e&&o(JSON.parse(e))}),[n]),Object(P.useEffect)((function(){n.setData(JSON.stringify(c))}),[c,n]),{theme:c,switchThemeValue:function(n,e){o((function(t){return Object(Fn.a)(Object(Fn.a)({},t),{},Object(Nn.a)({},n,re[n][e]))}))}}},oe=function(){var n=Object(P.useMemo)((function(){return new te("timer-config")}),[]),e=Object(P.useState)({pomodoro:1500,"short break":300,"long break":900}),t=Object(B.a)(e,2),r=t[0],c=t[1];return Object(P.useEffect)((function(){var e=n.getData();e&&c(JSON.parse(e))}),[n]),Object(P.useEffect)((function(){n.setData(JSON.stringify(r))}),[r,n]),{timerConfig:r,changeTimerConfig:function(n){c(n)}}},ie=Object(W.b)(V||(V=Object(K.a)(["\n  * {\n    box-sizing: border-box;\n    font-family: ",";\n  }\n\n  body {\n    background-color: #1e213f;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n    line-height: 1;\n  }\n\n  .focus {\n    outline: none;\n\n    &:focus-visible {\n      outline: #888 2px solid;\n    }\n  }\n\n  &:root {\n    ","\n  }\n"])),(function(n){return n.font}),q.d),ae=function(){var n=ce(),e=n.theme,t=n.switchThemeValue,r=oe(),c=r.timerConfig,o=r.changeTimerConfig,i=Object(P.useState)(!1),a=Object(B.a)(i,2),s=a[0],b=a[1],u=s?Object(_.jsx)(ln,{id:"modal-root",children:Object(_.jsx)(_n,{changeTimerConfig:o,switchThemeValue:t,themeList:re,closeModal:function(){return b(!1)},timerConfig:c})}):null;return Object(_.jsxs)(W.a,{theme:e,children:[Object(_.jsx)(ie,{fontSize:[9,11,13,15,16],font:e.font}),Object(_.jsx)(dn,{config:c,openModal:function(){return b(!0)}}),u]})};t(27);L.a.render(Object(_.jsx)(R.a.StrictMode,{children:Object(_.jsx)(ae,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c19cc5bc.chunk.js.map