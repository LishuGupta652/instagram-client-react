(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,a,t){e.exports=t(28)},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(15),c=t.n(r),m=t(5),o=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header-inner"},n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"left"},n.a.createElement(m.b,{to:"/"},n.a.createElement("p",null,"Baten"))),n.a.createElement("div",{className:"right"},n.a.createElement(m.b,{to:"/login"},n.a.createElement("p",{className:"login"},"Login")),n.a.createElement(m.b,{to:"/signup"},n.a.createElement("p",{className:"signup"},"Sign up")),n.a.createElement(m.b,{to:"/profile"},n.a.createElement("p",{className:"profile"},"Profile")),n.a.createElement(m.b,{to:"/createpost"},n.a.createElement("p",{className:"profile"},"Create post"))))))))},s=t(1),i=function(e){var a=e.url;return(n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"post"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"post-header"},n.a.createElement("h3",null,"Footer")),n.a.createElement("div",{className:"post-content"},n.a.createElement("div",{className:"post-image"},n.a.createElement("img",{src:a?"".concat(a):"http://unsplash.it/500"}))),n.a.createElement("div",{className:"post-footer"},n.a.createElement("label",{htmlFor:"comment"},"Comments"),n.a.createElement("input",{type:"text",id:"comment"}))))))},u=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"home-posts"},n.a.createElement(i,{url:"https://unsplash.it/501"}),n.a.createElement(i,null),n.a.createElement(i,null),n.a.createElement(i,null),n.a.createElement(i,null)))},E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form login-form"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"inner-form"},n.a.createElement("form",null,n.a.createElement("h2",null,"Baten login"),n.a.createElement("section",null,n.a.createElement("label",{for:"email"}),n.a.createElement("input",{type:"email",placeholder:"Enter your email",id:"email"})),n.a.createElement("section",null,n.a.createElement("label",{for:"password"}," "),n.a.createElement("input",{type:"password",placeholder:"Enter your Password",id:"password"})),n.a.createElement("button",{type:"submit"},"Log in"),n.a.createElement("h5",{className:"log"},n.a.createElement(m.b,{to:"/signup"}," Don't have a account? Register here")))))))},p=t(8),d=function(){var e=Object(s.e)(""),a=Object(l.useState)(localStorage.getItem("name")?localStorage.getItem("name"):""),t=Object(p.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)(localStorage.getItem("email")?localStorage.getItem("email"):""),i=Object(p.a)(o,2),u=i[0],E=i[1],d=Object(l.useState)(""),h=Object(p.a)(d,2),g=h[0],v=h[1],f=Object(l.useState)(""),N=Object(p.a)(f,2),b=N[0],y=N[1],w=Object(l.useState)(""),S=Object(p.a)(w,2),j=S[0],F=S[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"form signup-form"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"inner-form"},n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:u,password:g})}).then((function(e){return console.log(e),e.json()})).then((function(a){if(console.log(a),a.error)return y(a.error);F(a.message),c(""),E(""),v(""),e.push("/login")}))}},n.a.createElement("h2",null,"Baten Sign up"),n.a.createElement("h5",{className:"error"},b),n.a.createElement("h5",{className:"success"},j),n.a.createElement("section",null,n.a.createElement("label",{htmlFor:"name"}),n.a.createElement("input",{id:"name",type:"text",value:r,placeholder:"Enter your name",onChange:function(e){c(e.target.value),localStorage.setItem("name",e.target.value)}})),n.a.createElement("section",null,n.a.createElement("label",{htmlFor:"email"}),n.a.createElement("input",{id:"email",type:"email",value:u,placeholder:"Enter your email",onChange:function(e){E(e.target.value),localStorage.setItem("email",e.target.value)}})),n.a.createElement("section",null,n.a.createElement("label",{htmlFor:"password"}," "),n.a.createElement("input",{id:"password",type:"password",value:g,placeholder:"Enter your Password",onChange:function(e){v(e.target.value)}})),n.a.createElement("button",{type:"submit"},"Log in"),n.a.createElement("h5",{className:"log"},n.a.createElement(m.b,{to:"/login"},"Already have a account? Login here")))))))},h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"profile-inner"},n.a.createElement("div",{className:"profile-header"},n.a.createElement("div",{className:"ph-flex"},n.a.createElement("div",{className:"ph-image"},n.a.createElement("img",{src:"http://unsplash.it/300",alt:"Profile_picture"})),n.a.createElement("div",{className:"ph-content"},n.a.createElement("h1",null,"User name"),n.a.createElement("div",{className:"ph-tabs"},n.a.createElement("p",null,"Followers ",n.a.createElement("span",null,"99+")),n.a.createElement("p",null,"Following ",n.a.createElement("span",null,"99+")),n.a.createElement("p",null,"Requests ",n.a.createElement("span",null,"99+")))))),n.a.createElement("div",{className:"profile-posts"},n.a.createElement(i,{url:"https://unsplash.it/501"}),n.a.createElement(i,null),n.a.createElement(i,null),n.a.createElement(i,null),n.a.createElement(i,null))))))},g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"createpost"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"createpost-inner"},n.a.createElement("div",{className:"card"},n.a.createElement("input",{type:"text",placeholder:"title"}),n.a.createElement("input",{type:"text",placeholder:"body"}),n.a.createElement("input",{type:"file",name:"file",id:"file"}),n.a.createElement("button",{type:"submit"},"Create Post"))))))};var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m.a,null,n.a.createElement(o,null),n.a.createElement(s.a,{exact:!0,path:"/"},n.a.createElement(u,null)),n.a.createElement(s.a,{path:"/login"},n.a.createElement(E,null)),n.a.createElement(s.a,{path:"/signup"},n.a.createElement(d,null)),n.a.createElement(s.a,{path:"/profile"},n.a.createElement(h,null)),n.a.createElement(s.a,{path:"/createpost"},n.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(27);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.1458ff1f.chunk.js.map