(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(10),a=n.n(s),o=(n(17),n.p,n(18),n(2)),r=n(3),d=n(5),l=n(4),u=(n(19),n(0));var j=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{children:"Header"})})};c.a.Component,n(21);var b=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsxs)("div",{style:{display:"inline"},children:[Object(u.jsx)("div",{style:{height:"200px",backgroundColor:"red",border:"5px solid green"}}),Object(u.jsx)("div",{style:{height:"400px",backgroundColor:"green",border:"5px solid black"}})]})})};c.a.Component,n(22);var h=function(){return Object(u.jsx)("div",{className:"menu",children:Object(u.jsxs)("ul",{className:"menulist",onClick:this.handleMenu,children:[Object(u.jsx)("li",{id:"home",className:"home"==this.state.id&&"active",children:"Home"}),Object(u.jsx)("li",{id:"about",className:"about"==this.state.id&&"active",children:"About"}),Object(u.jsx)("li",{id:"contact",className:"contact"==this.state.id&&"active",children:"Contact"})]})})},p=(c.a.Component,c.a.Component,n(11)),m=(c.a.Component,n(9)),x=n(12),O=function(){var e=Object(i.useState)([{id:"1",name:"React js",status:"done"},{id:"2",name:"React Native",status:"pending"},{id:"3",name:"Javascript",status:"pending"}]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)("div",{children:n.map((function(e,t){return Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",border:"1px solid green",backgroundColor:"pink",padding:"10px"},children:[Object(u.jsx)("li",{children:e.id}),Object(u.jsx)("li",{children:e.name}),Object(u.jsx)("li",{style:{color:"done"==e.status?"green":"red"},children:e.status}),Object(u.jsx)("button",{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!=e}));console.log(t),c(t)}(t+1)},children:"delete"}),Object(u.jsx)("button",{onClick:function(){return function(e){var t=n.map((function(t){return t.id==e?(console.log("inside"),Object(m.a)(Object(m.a)({},t),{},{status:"pending"==t.status?"done":"pending"})):t}));c(t)}(t+1)},children:"edit"})]})}))})};var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),g()}},[[23,1,2]]]);
//# sourceMappingURL=main.c2dd066a.chunk.js.map