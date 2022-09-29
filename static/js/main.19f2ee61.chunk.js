(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(5)),r=c.n(i),o=c(0),d=function(e){var t=e.visibelTodos,c=e.handleActiveTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"far fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.setSortFilter,c=e.sortFilter,s=e.setSortText,a=e.sortText;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){t(e.currentTarget.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:a,placeholder:"Search...",onChange:function(e){s(e.currentTarget.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:!!a&&Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"clear Filter Text",onClick:function(){return s("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.activeTodo,c=e.setActiveTodo,s=Object(l.useState)(""),a=Object(n.a)(s,2),i=a[0],r=a[1],d=Object(l.useState)(!1),j=Object(n.a)(d,2),h=j[0],m=j[1];return Object(l.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then((function(e){r(e.name)})).finally((function(){m(!0)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),h?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"close Todo Info",onClick:function(){return c(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:Sincere@april.biz",children:i})]})]})]}):Object(o.jsx)(b,{})]})};var m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),i=Object(n.a)(a,2),r=i[0],m=i[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),f=x[0],v=x[1],p=Object(l.useState)("all"),N=Object(n.a)(p,2),y=N[0],g=N[1],T=Object(l.useState)(""),S=Object(n.a)(T,2),k=S[0],w=S[1];Object(l.useEffect)((function(){u("/todos").then((function(e){s(e)})).finally((function(){m(!0)}))}),[]),console.log(c);var C=Object(l.useMemo)((function(){return function(e,t,c){return e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).filter((function(e){switch(c){case"active":return!e.completed;case"completed":return e.completed;default:return!0}}))}(c,k,y)}),[c,k,y]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{setSortFilter:g,sortFilter:y,setSortText:w,sortText:k})}),Object(o.jsx)("div",{className:"block",children:r?Object(o.jsx)(d,{visibelTodos:C,handleActiveTodo:function(e){return f!==e&&v(e)}}):Object(o.jsx)(b,{})})]})})}),null!==f&&Object(o.jsx)(h,{activeTodo:f,setActiveTodo:v})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.19f2ee61.chunk.js.map