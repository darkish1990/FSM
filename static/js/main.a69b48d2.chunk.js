(this["webpackJsonpmy-fsm"]=this["webpackJsonpmy-fsm"]||[]).push([[0],{34:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var r,i,s,o,a,c,u,l,b,h,d,j,f,g,O,x=n(0),p=n.n(x),v=n(21),S=n.n(v),w=(n(34),n(4)),k=n(22),y=n(23),m=function(){function t(e){var n=e.initialState,r=e.states;Object(k.a)(this,t),this.error="",this.transitionSubsrcibers=new Set,this.errorSubscribers=new Set,this.state=n,this.initialState=n,this.states=r}return Object(y.a)(t,[{key:"transition",value:function(t){var e,n,r=this,i=null===(e=this.states[this.state])||void 0===e||null===(n=e.transitions)||void 0===n?void 0:n[t];i?(this.state=i,this.transitionSubsrcibers.forEach((function(t){return t(r.state)})),this.error="",this.errorSubscribers.forEach((function(t){return t(r.error)}))):(this.error="Error Can't transition ".concat(this.state," to ").concat(t),this.errorSubscribers.forEach((function(t){return t(r.error)})))}},{key:"getState",value:function(){return this.state}},{key:"getError",value:function(){if(this.error)return this.error}},{key:"subscribe",value:function(t,e){this.transitionSubsrcibers.add(t),e&&this.errorSubscribers.add(e),t(this.state),e(this.error)}},{key:"unsubscribe",value:function(t,e){this.transitionSubsrcibers.delete(t),e&&this.errorSubscribers.delete(e)}}]),t}(),E=n(2),C=n(3),F=C.a.div(r||(r=Object(E.a)(["\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n"]))),N=C.a.h1(i||(i=Object(E.a)(["\n  margin-right: 16px;\n  color: grey;\n"]))),T=C.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  align-items: center;\n"]))),J=C.a.button(o||(o=Object(E.a)(["\n  height: 30px;\n  width: 140px;\n  font-weight: 600;\n  background-color: white;\n  border: none;\n  color: grey;\n  transition: 0.3s;\n  &:hover {\n    background-color: grey;\n    color: white;\n    opacity: 0.8;\n  }\n"]))),L=C.a.div(a||(a=Object(E.a)(["\n  color: red;\n  font-weight: 600;\n"]))),P=n(27),H=n.n(P),M=n(13),z=(n(37),n(38),n(39),n(29)),D=n(5),I=n.n(D),A=["state","error","errorSubscribers","transitionSubsrcibers"],B={initialState:"up",states:{up:{transitions:{RIGHT:"right",LEFT:"left"}},right:{transitions:{DOWN:"down"}},down:{transitions:{LEFT:"left"}},left:{transitions:{UP:"up"}}}},G=I.a.object({initialState:I.a.string().lowercase(),states:I.a.object().pattern(I.a.string().lowercase(),I.a.object({transitions:I.a.object().pattern(I.a.string().uppercase(),I.a.string().lowercase())}))}).options({convert:!1}),R=n(1),U={minHeight:"500px",overflow:"auto",fontSize:"20px"},q=function(t){var e=t.parsingError,n=t.filteredFsm,r=t.clickHandler,i=Object(x.useState)(JSON.stringify(n,void 0,2)),s=Object(w.a)(i,2),o=s[0],a=s[1];return Object(R.jsxs)(F,{children:[Object(R.jsxs)(T,{children:[Object(R.jsx)(N,{children:"FSM Editor"}),Object(R.jsx)(J,{onClick:function(){return r(o)},children:"Generate Fsm"}),Object(R.jsx)(J,{onClick:function(){return a(JSON.stringify(B,void 0,2))},children:"Return to Default"})]}),e&&Object(R.jsx)(L,{children:"This is not a valid schema please reffer to the default json. the playground hasn't changed previous fsm."}),Object(R.jsx)(H.a,{value:o,onValueChange:a,highlight:function(t){return Object(M.highlight)(t,M.languages.js)},padding:10,style:U})]})},V=n(28),W="120px",K=C.a.div(c||(c=Object(E.a)(["\n  height: ",";\n  width: 160px;\n  overflow: auto;\n"])),W),Q=C.a.div(u||(u=Object(E.a)(["\n  overflow: auto;\n  max-height: calc(100% - ",");\n"])),W),X=C.a.div(l||(l=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid black;\n  background-color: whitesmoke;\n  color: grey;\n  height: 50px;\n  font-weight: 800;\n"]))),Y=C.a.div(b||(b=Object(E.a)(["\n  height: 100%;\n  width: 100%;\n"]))),Z=C.a.div(h||(h=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 120px;\n  overflow: auto;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  background-color: #ddd;\n"]))),$=C.a.button(d||(d=Object(E.a)(["\n  color: white;\n  height: 50px;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  background-color: grey;\n"]))),_=C.a.button(j||(j=Object(E.a)(["\n  min-height: 30px;\n  width: 100%;\n  font-weight: 600;\n  background-color: white;\n  border: none;\n  color: grey;\n  transition: 0.3s;\n  &:hover {\n    background-color: grey;\n    color: white;\n    opacity: 0.8;\n  }\n"]))),tt=function(t){var e,n=t.transition,r=t.filteredFsm,i=t.state,s=t.actionsStack,o=t.setActionsStack,a=null===r||void 0===r||null===(e=r.states[i])||void 0===e?void 0:e.transitions,c=Object.keys(a||[]),u=Object(x.useState)(!1),l=Object(w.a)(u,2),b=l[0],h=l[1];return Object(R.jsxs)(Y,{children:[Object(R.jsxs)(K,{onMouseLeave:function(){return h(!1)},children:[Object(R.jsx)($,{onMouseEnter:function(){return h(!0)},children:"Select Next State"}),b&&Object(R.jsx)(Z,{children:a&&c.map((function(t,e){return Object(R.jsx)(_,{onClick:function(){var e;o([].concat(Object(V.a)(s),[{state:i,nextPossibleState:null===r||void 0===r||null===(e=r.states[i])||void 0===e?void 0:e.transitions,selected:t}])),n(t)},children:t},e)}))})]}),Object(R.jsx)(Q,{children:s.map((function(t,e){var n=t.state,r=t.nextPossibleState,i=t.selected;return Object(R.jsxs)(X,{children:[e,". Current state : ",n.toUpperCase()," ====> Next possible states :[",Object.keys(r).toString(),"] ====> Selected State : ",i]},e)}))})]})},et=C.a.div(f||(f=Object(E.a)(["\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  flex: 1;\n"]))),nt=C.a.div(g||(g=Object(E.a)(["\n  background-color: whitesmoke;\n  height: 100%;\n  width: 100%;\n"]))),rt=C.a.div(O||(O=Object(E.a)(["\n  background-color: white;\n  height: 100%;\n  width: 100%;\n"]))),it=function(){var t=Object(x.useState)((function(){return new m(B)})),e=Object(w.a)(t,2),n=e[0],r=e[1],i=Object(x.useState)([]),s=Object(w.a)(i,2),o=s[0],a=s[1],c=function(t){var e=Object(x.useState)(t.getState()),n=Object(w.a)(e,2),r=n[0],i=n[1],s=Object(x.useState)(t.getError()),o=Object(w.a)(s,2),a=o[0],c=o[1],u=Object(x.useCallback)((function(t){i(t)}),[]),l=Object(x.useCallback)((function(t){c(t)}),[]);return Object(x.useEffect)((function(){return t.subscribe(u,l),function(){t.unsubscribe(u,l)}}),[t,u,l]),{state:r,error:a,transition:Object(x.useCallback)((function(e){t.transition(e)}),[t])}}(n),u=c.state,l=c.transition,b=function(t){return t.state,t.error,t.errorSubscribers,t.transitionSubsrcibers,Object(z.a)(t,A)}(n),h=Object(x.useState)(null),d=Object(w.a)(h,2),j=d[0],f=d[1];return Object(R.jsxs)(et,{children:[Object(R.jsx)(nt,{children:Object(R.jsx)(q,{parsingError:j,filteredFsm:b,clickHandler:function(t){f(null);try{var e=JSON.parse(t),n=G.validate(e,{presence:"required"});n.error?f(n.error):r(new m(e))}catch(i){f(i)}}})}),Object(R.jsx)(rt,{children:Object(R.jsx)(tt,{transition:l,filteredFsm:b,state:u,actionsStack:o,setActionsStack:a})})]})},st=function(){return Object(R.jsx)(it,{})},ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),r(t),i(t),s(t),o(t)}))};S.a.render(Object(R.jsx)(p.a.StrictMode,{children:Object(R.jsx)(st,{})}),document.getElementById("root")),ot()}},[[62,1,2]]]);
//# sourceMappingURL=main.a69b48d2.chunk.js.map