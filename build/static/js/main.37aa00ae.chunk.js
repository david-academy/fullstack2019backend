(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(19),t(2)),l=function(e){var n=e.value,t=e.changeEvent;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.person,t=e.deletePersonHandler;return r.a.createElement("li",null,n.name,": ",n.number,r.a.createElement("button",{onClick:function(){t(n.id)}},"delete"))},s=function(e){var n=e.persons,t=e.filter,a=e.deletePersonHandler,o=n;t&&(o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return r.a.createElement("ul",null,o.map((function(e){return r.a.createElement(i,{key:e.name,person:e,deletePersonHandler:a})})))},d=t(3),f=t.n(d),m="/api/persons",v=function(){return f.a.get(m).then((function(e){return e.data}))},b=function(e){return f.a.post(m,e).then((function(e){return e.data})).catch((function(e){return e}))},p=function(e,n){return f.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return f.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.persons,t=e.setPersons,o=e.notify,c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],s=l[1],d=Object(a.useState)(""),f=Object(u.a)(d,2),m=f[0],v=f[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n.findIndex((function(e){return e.name===i}))>-1){if(window.confirm("".concat(i," is aleady added to phonebook, replace the old number with a new one?"))){var a=n.find((function(e){return e.name===i})).id;p(a,{name:i,number:m}).then((function(e){var r=n.map((function(n){return n.id!==a?n:e}));t(r),o("".concat(e.name,"'s number has been updated"))}))}}else{var r={name:i,number:m};b(r).then((function(e){t(n.concat(r)),s(""),v(""),o("Added ".concat(e.name))})).catch((function(e){console.log(e.response.data),console.log(e.message.error),console.log("errorrrr")}))}}},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:i,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:m,onChange:function(e){v(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.notification;if(null===n.message)return null;var t={color:"error"===n.type?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:t},n.message)},w=function(e){var n=Object(a.useState)([]),t=Object(u.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(""),d=Object(u.a)(i,2),f=d[0],m=d[1],b=Object(a.useState)({message:null}),p=Object(u.a)(b,2),w=p[0],y=p[1];Object(a.useEffect)((function(){v().then((function(e){c(e)}))}),[]);var j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";y({message:e,type:n}),setTimeout((function(){return y({message:null})}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{notification:w}),r.a.createElement(l,{filter:f,changeEvent:function(e){m(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(E,{persons:o,setPersons:c,notify:j}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:o,filter:f,deletePersonHandler:function(e){var n=o.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name,"?"))&&h(e).then((function(){c(o.filter((function(n){return n.id!==e}))),j("".concat(n.name," was removed"))})).catch((function(e){c(o.filter((function(e){return e.name!==c}))),j("".concat(c," was already removed!"))}))}}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.37aa00ae.chunk.js.map