(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},52:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(15),l=n.n(i),r=(n(42),n(43),n(44),n(45),n(17)),o=n(5),s=n(11),j=n(10),d="SET_COUNTRY",u="SET_CITY",h="SET_REGION",b=[],p=[],O={},x=Object(j.combineReducers)({city:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case u:return c;default:return t}},country:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case d:return c;default:return t}},region:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case h:return c;default:return t}}}),v=n(25),g=n(35),f=n(36),y=n.n(f),C=n(37),m=[g.a],N={key:"datalab",storage:y.a,whitelist:["city","country"]},k=Object(v.a)(N,x),T=Object(j.createStore)(k,Object(C.composeWithDevTools)(j.applyMiddleware.apply(void 0,m))),R={store:T,persistor:Object(v.b)(T)},w=n(2),P=n(18),S=(n(52),n(4)),A=n.n(S),E=n(0),F=Object(s.b)(null,{setCountry:function(t){return function(e){e({type:d,payload:t})}},setRegion:function(t){return function(e){e({type:h,payload:t})}}})((function(t){var e=t.setCountry,n=t.setRegion,a=Object(c.useState)({country:"",continent:"",region:"",world:0,n:0,flag:!1}),i=Object(P.a)(a,2),l=i[0],r=i[1],s=l.country,j=l.continent,d=l.region,u=l.n,h=l.flag,b=l.world,p=Object(o.f)(),O="http://localhost:8080/population",x={headers:{"Access-Control-Allow-Origin":"*"},params:{country:s,continent:j,region:d,top:u}};return h||A.a.get(O+"/world").then((function(t){return r(Object(w.a)(Object(w.a)({},l),{},{world:t.data}))})),Object(E.jsxs)("div",{className:"main",children:[Object(E.jsx)("div",{children:Object(E.jsxs)("h5",{children:["World Population:",b," "]})}),Object(E.jsx)("div",{className:"card-panel",onClick:function(t){return A.a.get(O+"/continents").then((function(t){n(t.data),p.push("/region")}))},children:Object(E.jsx)("h5",{children:"Continents Populations"})}),Object(E.jsx)("div",{className:"card-panel",onClick:function(t){return A.a.get(O+"/regions").then((function(t){n(t.data),p.push("/region")}))},children:Object(E.jsx)("h5",{children:"Regions Populations"})}),Object(E.jsx)("div",{onClick:function(t){A.a.get(O+"/country/all").then((function(t){e(t.data),p.push("/country")}))},className:"card-panel",children:Object(E.jsx)("h5",{children:"World Countries"})}),Object(E.jsxs)("div",{onClick:function(t){""!==j&&A.a.get("".concat(O,"/country/continent"),x).then((function(t){e(t.data),p.push("/country")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Countries in a Continent"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:j,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{continent:t.target.value}))},placeholder:"Continent",type:"text",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){""!==d&&A.a.get("".concat(O,"/country/region"),x).then((function(t){e(t.data),p.push("/country")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Countries in a Region"}),Object(E.jsx)("input",{value:d,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{continent:t.target.value}))},placeholder:"Region",type:"text",class:"validate"})]}),Object(E.jsxs)("div",{onClick:function(t){0!==u&&A.a.get("".concat(O,"/country/top"),x).then((function(t){e(t.data),p.push("/country")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top n Countries in the world"}),Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"Top",type:"number",class:"validate"})]}),Object(E.jsxs)("div",{onClick:function(t){0!==u&&A.a.get("".concat(O,"/country/continent/top"),x).then((function(t){e(t.data),p.push("/country")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top n Countries in the Continent"}),Object(E.jsx)("input",{value:j,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{continent:t.target.value}))},placeholder:"Continent",type:"text",class:"validate"}),Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"Top",type:"number",class:"validate"})]}),Object(E.jsxs)("div",{onClick:function(t){""!==d&&A.a.get("".concat(O,"/country/region/top"),x).then((function(t){e(t.data),p.push("/country")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top n Countries in the Region"}),Object(E.jsx)("input",{value:d,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{region:t.target.value}))},placeholder:"Region",type:"text",class:"validate"}),Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"Top",type:"number",class:"validate"})]})]})})),W=Object(s.b)(null,{setCity:function(t){return function(e){e({type:u,payload:t})}}})((function(t){var e=t.setCity,n=Object(o.f)(),a=Object(c.useState)({country:"",continent:"",region:"",n:0}),i=Object(P.a)(a,2),l=i[0],r=i[1],s="http://localhost:8080/population",j=l.country,d=l.continent,u=l.region,h=l.n,b={headers:{"Access-Control-Allow-Origin":"*"},params:{country:j,continent:d,top:h,region:u}};return Object(E.jsxs)("div",{className:"main",children:[Object(E.jsx)("div",{onClick:function(t){A.a.get(s+"/city/all").then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:Object(E.jsx)("h5",{children:"World Cities"})}),Object(E.jsxs)("div",{onClick:function(t){""!==d&&A.a.get("".concat(s,"/city/continent"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Cities in a Continent"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:d,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{continent:t.target.value}))},placeholder:"Continent",type:"text",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){""!==j&&A.a.get("".concat(s,"/city/country"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Cities in a Country"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:j,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{country:t.target.value}))},placeholder:"Country",type:"text",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){0!==h&&A.a.get("".concat(s,"/city/top/world"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top world Cities"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:h,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"n",type:"number",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){0!==h&&A.a.get("".concat(s,"/city/top/continent/top"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top in a Continent"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:d,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{continent:t.target.value}))},placeholder:"Continent",type:"text",class:"validate"})}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:h,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"n",type:"number",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){0!==h&&A.a.get("".concat(s,"/city/top/country/top"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top in a Country"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:j,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{country:t.target.value}))},placeholder:"Country",type:"text",class:"validate"})}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:h,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"n",type:"number",class:"validate"})})]}),Object(E.jsx)("div",{onClick:function(t){A.a.get(s+"/capital/all").then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:Object(E.jsx)("h5",{children:"World Capital Cities"})}),Object(E.jsxs)("div",{onClick:function(t){""!==d&&A.a.get("".concat(s,"/capital/continent"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Capital Cities in a Continent"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:d,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{continent:t.target.value}))},placeholder:"Continent",type:"text",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){0!==h&&A.a.get("".concat(s,"/capital/top"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top world Capital Cities"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:h,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"n",type:"number",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){0!==h&&A.a.get("".concat(s,"/capital/top/continent"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top Capital Cities in a Continent"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:d,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{continent:t.target.value}))},placeholder:"Continent",type:"text",class:"validate"})}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:h,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"n",type:"number",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){""!==u&&A.a.get("".concat(s,"/capital/region"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Capital Cities in a Region"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{region:t.target.value}))},placeholder:"Continent",type:"text",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){""!==u&&A.a.get("".concat(s,"/capital/region/top"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top Capital Cities in a Region"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{region:t.target.value}))},placeholder:"Region",type:"text",class:"validate"})}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:h,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"n",type:"number",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){""!==u&&A.a.get("".concat(s,"/city/region"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:" Cities in a Region"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{region:t.target.value}))},placeholder:"region",type:"text",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){""!==u&&A.a.get("".concat(s,"/country/region"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:" Countries in a Region"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{region:t.target.value}))},placeholder:"region",type:"text",class:"validate"})})]}),Object(E.jsxs)("div",{onClick:function(t){""!==u&&A.a.get("".concat(s,"/country/region/top"),b).then((function(t){e(t.data),n.push("/city")}))},className:"card-panel",children:[Object(E.jsx)("h5",{children:"Top Countries in a Region"}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:u,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{region:t.target.value}))},placeholder:"Region",type:"text",class:"validate"})}),Object(E.jsx)("div",{class:"input-field",children:Object(E.jsx)("input",{value:h,onChange:function(t){return r(Object(w.a)(Object(w.a)({},l),{},{n:t.target.value}))},placeholder:"n",type:"number",class:"validate"})})]})]})})),I=Object(s.b)((function(t){return{city:t.city}}))((function(t){var e=t.city;return Object(E.jsx)("div",{className:"city",children:Object(E.jsxs)("table",{children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:"Name"}),Object(E.jsx)("th",{children:"Country"}),Object(E.jsx)("th",{children:"District"}),Object(E.jsx)("th",{children:"Population"})]})}),Object(E.jsx)("tbody",{children:e.map((function(t,e){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:++e}),Object(E.jsx)("td",{children:t.name}),Object(E.jsx)("td",{children:t.country}),Object(E.jsx)("td",{children:t.district}),Object(E.jsx)("td",{children:t.population})]},t.id)}))})]})})})),D=Object(s.b)((function(t){return{country:t.country}}))((function(t){var e=t.country;return Object(E.jsx)("div",{className:"country",children:Object(E.jsxs)("table",{className:"responsive-table ",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:"Code"}),Object(E.jsx)("th",{children:"Name"}),Object(E.jsx)("th",{children:"Continent"}),Object(E.jsx)("th",{children:"Region"}),Object(E.jsx)("th",{children:"Population"}),Object(E.jsx)("th",{children:"Capital"})]})}),Object(E.jsx)("tbody",{children:e.map((function(t,e){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:++e}),Object(E.jsx)("td",{children:t.code}),Object(E.jsx)("td",{children:t.name}),Object(E.jsx)("td",{children:t.continent}),Object(E.jsx)("td",{children:t.region}),Object(E.jsx)("td",{children:t.population}),Object(E.jsx)("td",{children:t.capital})]},t.id)}))})]})})})),_=Object(s.b)((function(t){return{region:t.region}}))((function(t){var e=t.region;return Object(E.jsx)("div",{className:"city",children:Object(E.jsxs)("table",{children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Name"}),Object(E.jsx)("th",{children:"Population"})]})}),Object(E.jsx)("tbody",{children:Object.keys(e).map((function(t,n){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:t}),Object(E.jsx)("td",{children:e[t]})]},n)}))})]})})}));var B=function(){return Object(E.jsx)(s.a,{store:R.store,children:Object(E.jsx)("div",{className:"App",children:Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(r.a,{basename:"app",children:Object(E.jsxs)(c.Fragment,{children:[Object(E.jsx)(o.a,{exact:!0,path:"/",component:F}),Object(E.jsx)(o.a,{exact:!0,path:"/",component:W}),Object(E.jsxs)(o.c,{children:[Object(E.jsx)(o.a,{exact:!0,path:"/city",component:I}),Object(E.jsx)(o.a,{exact:!0,path:"/country",component:D}),Object(E.jsx)(o.a,{exact:!0,path:"/region",component:_})]})]})})})})})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,l=e.getTTFB;n(t),c(t),a(t),i(t),l(t)}))};l.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(B,{})}),document.getElementById("root")),J()}},[[73,1,2]]]);
//# sourceMappingURL=main.99763fbf.chunk.js.map