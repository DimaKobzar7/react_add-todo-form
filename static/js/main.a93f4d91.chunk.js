(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(3),c=a(6),l=a(1),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(8),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},h=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user,r=t.id;return Object(m.jsxs)("article",{"data-id":r,className:u()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),i?Object(m.jsx)(j,{user:i}):null]})},b=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(h,{todo:e},e.id)}))})};function p(e){return o.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:p(e.userId)})})),f=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(!1),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(l.useState)(0),h=Object(s.a)(j,2),f=h[0],x=h[1],v=Object(l.useState)(!1),y=Object(s.a)(v,2),S=y[0],I=y[1],N=function(e){var t=e.target,a=t.name,i=t.value;switch(a){case"title":n(i),u(!1);break;case"userId":x(+i),I(!1);break;default:throw new Error("The title cannot start with a space.\n        Enter a valid title and select a user")}};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t={id:Math.max.apply(Math,Object(r.a)(O.map((function(e){return e.id}))))+1,title:a,completed:!1,userId:f,user:p(f)};f||I(!0),a.trim()||u(!0),f&&a.trim()&&(O.push(t),x(0),n(""),I(!1),u(!1))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["Title: ",Object(m.jsx)("input",{type:"text",name:"title","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:N})]}),d&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["User: ",Object(m.jsxs)("select",{"data-cy":"userSelect",value:f,name:"userId",onChange:N,children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]})]}),S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(b,{todos:O})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a93f4d91.chunk.js.map