(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=(t(19),t(2)),i=function(e){var n=e.value,t=e.changeEvent;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},l=function(e){var n=e.person,t=e.deletePersonHandler;return r.a.createElement("li",null,n.name,": ",n.number,r.a.createElement("button",{onClick:function(){t(n.id)}},"delete"))},s=function(e){var n=e.persons,t=e.filter,a=e.deletePersonHandler,o=n;t&&(o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return r.a.createElement("ul",null,o.map((function(e){return r.a.createElement(l,{key:e.name,person:e,deletePersonHandler:a})})))},d=t(3),f=t.n(d),m="/api/persons",p=function(){return f.a.get(m).then((function(e){return e.data}))},v=function(e){return f.a.post(m,e).then((function(e){return e.data}))},b=function(e,n){return f.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return f.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.persons,t=e.setPersons,o=e.notify,u=Object(a.useState)(""),i=Object(c.a)(u,2),l=i[0],s=i[1],d=Object(a.useState)(""),f=Object(c.a)(d,2),m=f[0],p=f[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n.findIndex((function(e){return e.name===l}))>-1){if(window.confirm("".concat(l," is aleady added to phonebook, replace the old number with a new one?"))){var a=n.find((function(e){return e.name===l})).id;b(a,{name:l,number:m}).then((function(e){var r=n.map((function(n){return n.id!==a?n:e}));t(r),o("".concat(e.name,"'s number has been updated"))})).catch((function(e){console.log(e.response.data.error),o(e.response.data.error)}))}}else{var r={name:l,number:m};v(r).then((function(e){t(n.concat(r)),s(""),p(""),o("Added ".concat(e.name))}))}}},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:l,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:m,onChange:function(e){p(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.notification;if(null===n.message)return null;var t={color:"error"===n.type?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:t},n.message)},w=function(e){var n=Object(a.useState)([]),t=Object(c.a)(n,2),o=t[0],u=t[1],l=Object(a.useState)(""),d=Object(c.a)(l,2),f=d[0],m=d[1],v=Object(a.useState)({message:null}),b=Object(c.a)(v,2),w=b[0],y=b[1];Object(a.useEffect)((function(){p().then((function(e){u(e)}))}),[]);var j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";y({message:e,type:n}),setTimeout((function(){return y({message:null})}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{notification:w}),r.a.createElement(i,{filter:f,changeEvent:function(e){m(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(E,{persons:o,setPersons:u,notify:j}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:o,filter:f,deletePersonHandler:function(e){var n=o.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name,"?"))&&h(e).then((function(){u(o.filter((function(n){return n.id!==e}))),j("".concat(n.name," was removed"))})).catch((function(e){u(o.filter((function(e){return e.name!==u}))),j("".concat(u," was already removed!"))}))}}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.981558e5.chunk.js.map