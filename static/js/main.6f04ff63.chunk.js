(this["webpackJsonpvaccine-finder-fe"]=this["webpackJsonpvaccine-finder-fe"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(28),i=c.n(s),r=(c(35),c(36),c.p,c(37),c(67)),l=c(10),d=c(18),j=c(15),o=c.n(j),b=c(3);var h=function(e){return new URLSearchParams(Object(b.f)().search).get(e)},O=c(1);var x=function(e){console.log(Object(b.g)());var t=Object(b.g)().id,c=void 0===t?"363":t,n=h("age")||"18",s=h("dummy"),i=Object(a.useState)([]),r=Object(d.a)(i,2),l=r[0],j=r[1],x=Object(a.useState)(!1),m=Object(d.a)(x,2),p=m[0],v=m[1];return Object(a.useEffect)((function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),i=e.getFullYear();e=t+"-"+a+"-"+i;var r="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=".concat(c,"&date=").concat(e);return v(!0),o.a.get(r).then((function(e){var t={data:e.data,age:n,dummy:s?"YES":"No",id:c};o.a.post("https://vaccine-in.herokuapp.com/",t).then((function(e){console.log(e.data),j(e.data),v(!1)})).catch((function(e){return console.log(e)}))}))}),[n,c]),Object(O.jsx)("div",{className:"col-md-12",children:p?Object(O.jsx)("h2",{children:"Loading...."}):l.length?Object(O.jsx)("div",{className:"table-wrap table-wrapper-scroll-y",children:Object(O.jsxs)("table",{className:"table table-striped",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",children:"#"}),Object(O.jsx)("th",{scope:"col",children:"Center"}),Object(O.jsx)("th",{scope:"col",children:"Address"}),Object(O.jsx)("th",{scope:"col",children:"Details"}),Object(O.jsx)("th",{scope:"col",children:"Fees"})]})}),Object(O.jsxs)("tbody",{children:[console.log(l),l.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t}),Object(O.jsxs)("td",{children:[e.name," ",Object(O.jsx)("span",{className:"badge badge-info",children:e.fee_type})]}),Object(O.jsxs)("td",{children:[e.address,", ",e.block_name,", ",e.pincode]}),Object(O.jsx)("td",{children:Object(O.jsx)("table",{className:"table table-striped",children:e.sessions.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.date}),Object(O.jsx)("td",{children:e.vaccine}),Object(O.jsx)("td",{className:"bg-success",children:e.available_capacity}),Object(O.jsxs)("td",{children:["Dose1: ",e.available_capacity_dose1]}),Object(O.jsxs)("td",{children:["Dose2: ",e.available_capacity_dose2]})]})}))})})]})}))]})]})}):Object(O.jsx)("h2",{children:"No Vaccine Available"})})};var m=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"col-sm-12 mb-5",children:Object(O.jsxs)(r.a,{className:"divbar navbar-expand-lg navbar-dark bg-dark",children:[Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("a",{className:"navbar-brand ml-2",href:"/",children:Object(O.jsx)("h2",{className:"heading-div text-center",children:"Vaccine Finder"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:Object(O.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(O.jsx)("li",{className:"nav-item {{ 'active' if id == '363'}}",children:Object(O.jsx)(l.b,{to:"/",children:"Pune"})}),Object(O.jsx)("li",{className:"nav-item {{ 'active' if id == '395' }}",children:Object(O.jsx)(l.b,{to:"/395",children:"Mumbai"})}),Object(O.jsx)("li",{className:"nav-item {{ 'active' if id == '154' }}",children:Object(O.jsx)(l.b,{to:"/154",children:"Ahmedabad"})})]})})]})}),Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsx)(x,{})}),Object(O.jsxs)("div",{className:"text-center footer",children:[Object(O.jsx)("span",{className:"foot",children:"\xa9Copyright 2021 by Pranav Shah"}),Object(O.jsx)("span",{className:"note",children:"**Note: This is only for reference purpose. Data shown here might not be accurate. Please visit government website."})]})]})};var p=function(){return Object(O.jsx)(l.a,{children:Object(O.jsx)("div",{className:"pad-3 main-body",children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{exact:!0,path:"/",component:m}),Object(O.jsx)(b.a,{path:"/:id",component:m})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),v()}},[[65,1,2]]]);
//# sourceMappingURL=main.6f04ff63.chunk.js.map