(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(e,t,s){},62:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(14),r=s.n(c),i=s(10),o=s(12),l=s(15),j=s(18),d=s.n(j),b="https://signuplogin01.herokuapp.com/auth/",p=s(8),u=s(2),m=s(11),h=(s(52),s(1)),O={username:"",email:"",password:"",confirmpassword:""};var x=function(){var e=Object(n.useState)(O),t=Object(l.a)(e,2),s=t[0],a=t[1],c=Object(u.f)(),r=function(e){var t=e.target,n=t.name,c=t.value;a(Object(o.a)(Object(o.a)({},s),{},Object(i.a)({},n,c)))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"register-header",children:Object(h.jsxs)("div",{className:"register-main-path",children:[Object(h.jsx)("div",{className:"register-title",children:Object(h.jsx)("h3",{children:"REGISTER"})}),Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{className:"input-forms",children:Object(h.jsx)("input",{type:"text",value:s.username,placeholder:"Username",name:"username",onChange:r})}),Object(h.jsx)("div",{className:"input-forms",children:Object(h.jsx)("input",{type:"email",value:s.email,placeholder:"Email",name:"email",onChange:r})}),Object(h.jsx)("div",{className:"input-forms",children:Object(h.jsx)("input",{type:"password",value:s.password,placeholder:"Password",name:"password",onChange:r})}),Object(h.jsx)("div",{className:"input-forms",children:Object(h.jsx)("input",{type:"password",value:s.confirmpassword,placeholder:"Confirm Password",name:"confirmpassword",onChange:r})}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(e){var t;e.preventDefault(),console.log(s),(t=s,d.a.post(b+"register",t)).then((function(e){c.push("/login"),p.b.success("saved successfully"),a({username:"",email:"",password:"",confirmpassword:""})})).catch((function(e){p.b.error(e.response.data.message)}))},type:"submit",children:"SignUp"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["Already signup? ",Object(h.jsx)(m.b,{className:"link",to:"/login",children:"Login"})]})]})]})})})},g=(s(62),{email:"",password:""});var f=function(){var e=Object(n.useState)(g),t=Object(l.a)(e,2),s=t[0],a=t[1],c=Object(u.f)(),r=function(e){var t=e.target,n=t.name,c=t.value;a(Object(o.a)(Object(o.a)({},s),{},Object(i.a)({},n,c)))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"register-header",children:Object(h.jsxs)("div",{className:"register-main-path",children:[Object(h.jsx)("div",{className:"register-title",children:Object(h.jsx)("h3",{children:"LOGIN"})}),Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{className:"input-forms",children:Object(h.jsx)("input",{type:"email",value:s.email,placeholder:"Email",name:"email",onChange:r})}),Object(h.jsx)("div",{className:"input-forms",children:Object(h.jsx)("input",{type:"password",value:s.password,placeholder:"Password",name:"password",onChange:r})}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(e){var t;e.preventDefault(),console.log(s),(t=s,d.a.post(b+"login",t)).then((function(e){localStorage.setItem("auth",JSON.stringify(e.data)),p.b.success("Login successfully"),a({email:"",password:""}),c.push("/")})).catch((function(e){p.b.error(e.response.data.message)}))},type:"submit",children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["Didn't SignUp? ",Object(h.jsx)(m.b,{className:"link",to:"/register",children:"Register"})]})]})]})})})};s(63),s(64);var v=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(m.a,{children:[Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(u.a,{exact:!0,path:"/register",component:x}),Object(h.jsx)(u.a,{exact:!0,path:"/login",component:f})]}),Object(h.jsx)(p.a,{})]})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.3031ccfa.chunk.js.map