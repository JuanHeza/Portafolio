(this.webpackJsonphexagon=this.webpackJsonphexagon||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(17),c=s.n(i),r=(s(25),s(20)),o=(s(26),s(27),s(28),s(8)),l=s(6),j=s(2),d=s(3),b=s(5),u=s(4),p=s(0),h=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"nav-bar title",children:[Object(p.jsx)(o.b,{to:"/Home",children:Object(p.jsx)("span",{className:"name",children:"Juan Heza"})}),Object(p.jsx)("nav",{className:"nav-bar-options",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/List/Projects",children:"Projects"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/List/Blog",children:"Blog"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/List/Skills",children:"Skills"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/About",children:"About"})}),Object(p.jsx)("li",{})]})})]})})}}]),s}(a.a.Component),m=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsxs)("div",{className:"media",children:[Object(p.jsx)("div",{children:Object(p.jsx)("i",{class:"devicon-github-original"})}),Object(p.jsx)("div",{children:"telegram"}),Object(p.jsx)("div",{children:"replit"}),Object(p.jsx)("div",{children:"email"})]}),Object(p.jsxs)("p",{children:[" Developed By ",Object(p.jsx)("span",{className:"title",children:Object(p.jsx)("i",{children:"Future Star"})})]})]})}}]),s}(a.a.Component),x=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"coin",id:this.props.id,children:[Object(p.jsxs)("svg",{className:"face",xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:"100%",width:"100%",viewBox:"0 0 300 300",children:[Object(p.jsx)("polygon",{className:"border",transform:"rotate(270 0 0)","transform-origin":"center",points:"300,150 225,280 75,280 0,150 75,20 225,20"}),Object(p.jsx)("polygon",{className:"hex",transform:"scale(0.85) rotate(270 0 0)","transform-origin":"center",points:"300,150 225,280 75,280 0,150 75,20 225,20"}),Object(p.jsx)("image",{loading:"lazy",href:this.props.front,x:"25%",y:"25%",height:"50%",width:"50%"})]}),Object(p.jsxs)("svg",{className:"face backface",xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:"100%",width:"100%",viewBox:"0 0 300 300",children:[Object(p.jsx)("polygon",{className:"border",transform:"rotate(270 0 0)","transform-origin":"center",points:"300,150 225,280 75,280 0,150 75,20 225,20"}),Object(p.jsx)("polygon",{className:"hex",transform:"scale(0.85) rotate(270 0 0)","transform-origin":"center",points:"300,150 225,280 75,280 0,150 75,20 225,20"}),Object(p.jsx)("image",{loading:"lazy",href:this.props.back,x:"25%",y:"25%",height:"50%",width:"50%"})]})]})}}]),s}(a.a.Component);x.defaultProps={front:"",back:"",id:""};var O=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return console.log(this.props),Object(p.jsxs)("div",{className:"honeycomb",children:[Object(p.jsxs)("div",{className:"row border",children:[Object(p.jsx)("div",{className:"hexagon-container",children:Object(p.jsx)(x,{front:this.props.data.h1.front,id:"honey-comb-1"})}),Object(p.jsx)("div",{className:"hexagon-container",children:Object(p.jsx)(x,{front:this.props.data.h2.front,id:"honey-comb-2"})})]}),Object(p.jsxs)("div",{className:"row middle",children:[Object(p.jsx)("div",{className:"hexagon-container",children:Object(p.jsx)(x,{front:this.props.data.h3.front,id:"honey-comb-3"})}),Object(p.jsx)("div",{id:"center-hexagon",className:"hexagon-container",children:Object(p.jsx)(x,{back:this.props.data.h4.back,id:"honey-comb-4"})}),Object(p.jsx)("div",{className:"hexagon-container",children:Object(p.jsx)(x,{front:this.props.data.h5.front,id:"honey-comb-5"})})]}),Object(p.jsxs)("div",{className:"row border",children:[Object(p.jsx)("div",{className:"hexagon-container",children:Object(p.jsx)(x,{front:this.props.data.h6.front,id:"honey-comb-6"})}),Object(p.jsx)("div",{className:"hexagon-container",children:Object(p.jsx)(x,{front:this.props.data.h7.front,id:"honey-comb-7"})})]})]})}}]),s}(a.a.Component),g=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("article",{className:"flex wrap row jc-evenly",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(x,{})}),Object(p.jsxs)("div",{className:"info flex row wrap jc-evenly",children:[Object(p.jsx)("h4",{className:"flex column jc-center ai-center text title",children:this.props.title}),Object(p.jsx)("span",{className:"flex badge plataforma column jc-center ai-center text "+this.props.type,children:this.props.type}),Object(p.jsx)("span",{className:"flex badge estado column jc-center ai-center text "+this.props.status,children:this.props.status})]}),Object(p.jsx)(o.b,{to:"/Project/00/Demo",children:Object(p.jsx)("div",{className:"link badge jc-center ai-center flex ",children:" Ir "})})]})}}]),s}(a.a.Component);g.defaultProps={title:"",icon:"",type:"",status:""};var v=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("article",{className:"flex wrap row jc-evenly",children:[Object(p.jsx)("img",{loading:"lazy",className:"banner",src:this.props.banner,alt:"Banner",onerror:"this.onerror=null; this.src='icons/background.jpg';"}),Object(p.jsxs)("div",{className:"info flex row wrap",children:[Object(p.jsx)("h4",{className:"title",children:this.props.title}),Object(p.jsx)("sub",{className:"date",children:this.props.date}),Object(p.jsx)("p",{className:"body",children:this.props.body})]}),Object(p.jsxs)(o.b,{to:"/Blog/00/Demo",children:[" ",Object(p.jsx)("div",{className:"link badge jc-center ai-center flex ",children:"Ir"})," "]})]})}}]),s}(a.a.Component);v.defaultProps={title:"",date:"",banner:"../../img/background.jpg",body:""};var f={android:"/devicon/android-original.svg",angular:"/devicon/angularjs-original.svg",arduino:"/devicon/arduino-original.svg",bootstrap:"/devicon/bootstrap-original.svg",c:"/devicon/c-original.svg","c++":"/devicon/cplusplus-original.svg","c#":"/devicon/csharp-original.svg",css:"/devicon/css3-original-wordmark.svg",django:"/devicon/django-original.svg",docker:"/devicon/docker-original.svg",".net":"/devicon/dot-net-original.svg",".net core":"/devicon/dotnetcore-original.svg",electron:"/devicon/electron-original.svg",firebase:"/devicon/firebase-original.svg",flask:"/devicon/flask-original.svg",flutter:"/devicon/flutter-original.svg",gatsby:"/devicon/gatsby-original.svg",gimp:"/devicon/gimp-original.svg",git:"/devicon/git-original.svg",github:"/devicon/github-original.svg",go:"/devicon/go-original.svg",godot:"/devicon/godot-original.svg","google cloud":"/devicon/googlecloud-original.svg",graphql:"/devicon/graphql-original.svg",heroku:"/devicon/heroku-original.svg",html:"/devicon/html5-original-wordmark.svg",java:"/devicon/java-original.svg",javascript:"/devicon/javascript-original.svg",jira:"/devicon/jira-original.svg",jquery:"/devicon/jquery-original.svg",kotlin:"/devicon/kotlin-original.svg",laravel:"/devicon/laravel-original.svg",less:"/devicon/less-plain-wordmark.svg",markdown:"/devicon/markdown-original.svg",materialui:"/devicon/materialui-original.svg",mongodb:"/devicon/mongodb-original.svg",mysql:"/devicon/mysql-original.svg",nextjs:"/devicon/nextjs-original.svg",nodejs:"/devicon/nodejs-original.svg",npm:"/devicon/npm-original-wordmark.svg",php:"/devicon/php-original.svg",postgresql:"/devicon/postgresql-original.svg",python:"/devicon/python-original.svg","ruby on rails":"/devicon/rails-original-wordmark.svg","raspberry pi":"/devicon/raspberrypi-original.svg",react:"/devicon/react-original.svg",redux:"/devicon/redux-original.svg",ruby:"/devicon/ruby-original.svg",sass:"/devicon/sass-original.svg",swift:"/devicon/swift-original.svg",tailwind:"/devicon/tailwindcss-plain.svg",tensorflow:"/devicon/tensorflow-original.svg",typescript:"/devicon/typescript-original.svg",vuejs:"/devicon/vuejs-original.svg",webpack:"/devicon/webpack-original.svg",yarn:"/devicon/yarn-original.svg"},y=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("article",{children:[Object(p.jsx)("h4",{className:"title",children:this.props.level}),Object(p.jsx)("div",{className:"skills flex row wrap",children:this.props.skills.map((function(e){return Object(p.jsx)(x,{front:f[e.toLowerCase()]})}))})]})}}]),s}(a.a.Component);y.defaultProps={level:"",skills:[]};var N=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"purple section projectSection",children:[Object(p.jsx)("h1",{className:"sectionTitle title",children:"Projects"}),Object(p.jsx)("p",{className:"sectionDescription",children:"Algunos projectos en los que he trabajado recientemente"}),Object(p.jsx)("div",{className:"cards flex wrap jc-evenly",children:this.props.data.map((function(e){return Object(p.jsx)(g,{title:e.title,icon:e.icon,type:e.type,status:e.status})}))})]})}}]),s}(a.a.Component);N.defaultProps=[{title:"",icon:"",type:"",status:""}];var k=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"green section aboutSection flex column wrap",children:[Object(p.jsx)("h4",{className:"sectionTitle title",children:"About"}),Object(p.jsxs)("div",{className:"content flex row jc-evenly wrap",children:[Object(p.jsx)("p",{className:"description",children:"Este texto lo terminare poniendo como un mensaje secreto pero se acerca la fecha en la que quiero tener esto en demo ya funcionando asi que estara aqui. La verdad es que quiero agradecer a todos aquiellos que me han apoyado dandome consejos o simplemente escuchandome hablar incansablemente sobre mis proyectos aun cuando no tienen idea de lo que les estoy diciendo. Citlali, Erika, Arali, Guadalupe, Alejandra & Jezzania son quienes mas me han escuchado hablar y las quiero muchisimo por eso."}),Object(p.jsxs)("div",{className:"links flex jc-center ai-center",children:[Object(p.jsx)(x,{}),Object(p.jsx)("div",{className:"link flex jc-center ai-baseline",children:"Link"}),Object(p.jsx)("div",{className:"link flex jc-center ai-baseline",children:"Link"}),Object(p.jsx)("div",{className:"link flex jc-center ai-baseline",children:"Link"}),Object(p.jsx)("div",{className:"link flex jc-center ai-baseline",children:"Link"})]})]}),Object(p.jsxs)(o.b,{to:"About",children:[" ",Object(p.jsx)("div",{className:"link badge jc-center ai-center flex ",children:"Ir"})," "]})]})}}]),s}(a.a.Component),w=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"orange section skillSection flex row wrap jc-evenly",children:[Object(p.jsx)("h1",{className:"sectionTitle title",children:"Skills"}),this.props.data.map((function(e){return Object(p.jsx)(y,{level:e.level,skills:e.skills})}))]})}}]),s}(a.a.Component);w.defaultProps=[{level:"",skills:[]}];var C=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"blue section blogSection",children:[Object(p.jsx)("h1",{className:"sectionTitle title",children:"Blog"}),Object(p.jsx)("p",{className:"sectionDescription",children:"Algunos redacciones en los que he trabajado recientemente"}),Object(p.jsx)("div",{className:"cards flex wrap jc-evenly",children:this.props.data.map((function(e){return Object(p.jsx)(v,{title:e.title,date:e.date,banner:e.banner,body:e.body})}))})]})}}]),s}(a.a.Component);C.defaultProps=[{title:"",date:"",banner:"",body:""}];var A=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"home",children:[Object(p.jsxs)("section",{className:"home_head flex row ai-center",children:[Object(p.jsx)("p",{className:"text_right",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"}),Object(p.jsx)("div",{id:"big",children:Object(p.jsx)(x,{})}),Object(p.jsx)("p",{className:"text_left",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"})]}),Object(p.jsxs)("article",{id:"home_flex",children:[Object(p.jsxs)("div",{className:"home_card green",children:[Object(p.jsx)(x,{}),Object(p.jsx)("h2",{className:"title",children:"About"}),Object(p.jsx)("p",{children:"Descripcion"})]}),Object(p.jsxs)("div",{className:"home_card orange",children:[Object(p.jsx)(x,{}),Object(p.jsx)("h2",{className:"title",children:"Skills"}),Object(p.jsx)("p",{children:"Descripcion"})]}),Object(p.jsxs)("div",{className:"home_card purple",children:[Object(p.jsx)(x,{}),Object(p.jsx)("h2",{className:"title",children:"Projects"}),Object(p.jsx)("p",{children:"Descripcion"})]}),Object(p.jsxs)("div",{className:"home_card blue",children:[Object(p.jsx)(x,{}),Object(p.jsx)("h2",{className:"title",children:"Blog"}),Object(p.jsx)("p",{children:"Descripcion"})]})]}),Object(p.jsxs)("article",{id:"home_sections",children:[Object(p.jsx)(k,{}),Object(p.jsx)(w,{data:[{level:"Aprendiendo",skills:["Angular","Sass","Swift","Tailwind","VueJS"]},{level:"Basico",skills:["Android","C++","C#","Java","MongoDB","PHP","Python"]},{level:"Intermedio",skills:["Arduino","Javascript","Jquery","MySQL","PostgreSQL","Ruby","ruby on Rails"]},{level:"Avanzado",skills:["CSS","Go","HTML","React"]}]}),Object(p.jsx)(N,{data:[{icon:"",title:"Fluffy Dragon",type:"movil",status:"idea"},{icon:"",title:"Artemiss",type:"multi",status:"planeacion"},{icon:"",title:"Hungry Ajolote",type:"desktop",status:"desarrollo"},{icon:"",title:"Watt-a-Bot",type:"software",status:"completado"},{icon:"",title:"Elements",type:"hardware",status:"cancelado"},{icon:"",title:"Notebook",type:"web",status:"suspendido"}]}),Object(p.jsx)(C,{data:[{title:"Aprendiendo CSS Grid",date:"28/10/2021",banner:"./icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},{title:"Go to the future",date:"18/10/2021",banner:"./icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},{title:"React-ing",date:"30/10/2021",banner:"./icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},{title:"Python and pandas",date:"12/10/2012",banner:"./icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"}]})]})]})}}]),s}(a.a.Component),S=A,P=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).state={redirect:!1},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({redirect:!0})}),11e3)}},{key:"componentWillUnmount",value:function(){this.setState({redirect:!1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{class:"loading",children:[Object(p.jsx)(O,{data:{h1:{front:"./icons/aarch64-original.svg"},h2:{front:"./icons/aftereffects-original.svg"},h3:{front:"./icons/amazonwebservices-original.svg"},h4:{back:"./icons/android-original.svg"},h5:{front:"./icons/angularjs-original.svg"},h6:{front:"./icons/apache-original.svg"},h7:{front:"./icons/appcelerator-original.svg"}}}),Object(p.jsxs)("div",{className:"lema",children:[Object(p.jsxs)("div",{id:"row-1",className:"lema-row",children:[" ",Object(p.jsx)("span",{class:"hexal",children:Object(p.jsx)(x,{})})," ",Object(p.jsx)("span",{className:"text",children:"Idea"}),"  ",Object(p.jsx)("span",{class:"hexal",children:Object(p.jsx)(x,{})})," "]}),Object(p.jsxs)("div",{id:"row-2",className:"lema-row",children:[" ",Object(p.jsx)("span",{class:"hexal",children:Object(p.jsx)(x,{})})," ",Object(p.jsx)("span",{className:"text",children:"Design"}),"  ",Object(p.jsx)("span",{class:"hexal",children:Object(p.jsx)(x,{})})," "]}),Object(p.jsxs)("div",{id:"row-3",className:"lema-row",children:[" ",Object(p.jsx)("span",{class:"hexal",children:Object(p.jsx)(x,{})})," ",Object(p.jsx)("span",{className:"text",children:"Create"}),"  ",Object(p.jsx)("span",{class:"hexal",children:Object(p.jsx)(x,{})})," "]})]}),this.state.redirect&&Object(p.jsx)(l.a,{to:"/Home"})]})}}]),s}(a.a.Component),q=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{id:"intro",className:"flex row wrap jc-evenly",children:[Object(p.jsxs)("div",{className:" identity ta-center flex column js-center ai-center",children:[Object(p.jsx)(x,{}),Object(p.jsx)("h2",{className:"name ",children:"Juan Enrique Hernandez Zavala"}),Object(p.jsx)("h4",{className:"grade",children:"Ingeniero en Tecnologia de Software"})]}),Object(p.jsxs)("p",{className:"body",children:[" ",this.props.body," "]})]})}}]),s}(a.a.Component);q.defaultProps={body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"};var L=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)("section",{id:"links",class:"flex row wrap jc-evenly",children:this.props.links.map((function(e){return Object(p.jsxs)("a",{className:"card flex  row jc-center ai-center",target:"_blank",rel:"noreferrer",href:e.url,children:[Object(p.jsx)("img",{className:"icon",src:e.icon,alt:""}),Object(p.jsxs)("div",{className:"link",children:[Object(p.jsx)("span",{className:"web title",children:e.link}),Object(p.jsx)("span",{className:"print",children:e.url})]})]})}))})}}]),s}(a.a.Component);L.defaultProps={links:[{icon:"",link:"Github",url:"#"},{icon:"",link:"ReplIt",url:"#"},{icon:"",link:"Correo",url:"#"},{icon:"",link:"Telefono",url:"#"},{icon:"",link:"Notebook",url:"#"},{icon:"",link:"Telegram",url:"#"}]};var B=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{id:"experiencia",children:[Object(p.jsx)("h3",{className:"heading",children:"Experiencia"}),Object(p.jsx)("div",{className:"flex row wrap",children:this.props.jobs.map((function(e){return Object(p.jsxs)("div",{className:"card flex row jc-evenly",children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:"info flex column jc-between",children:[Object(p.jsx)("h5",{className:"job",children:e.title}),Object(p.jsx)("h5",{className:"place",children:e.place}),Object(p.jsxs)("h6",{className:"period",children:[e.start," ","->"," ",e.end]})]})]})}))})]})}}]),s}(a.a.Component);B.defaultProps={jobs:[{title:"Tester - Servicio Social",place:"UANL - DTI",start:"Junio 2018",end:"Diciembre 2018"},{title:"Desarrollador Front End",place:"Inelco",start:"Septiembre 2021",end:"Actualidad"}]};var D=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{id:"estudios",children:[Object(p.jsx)("h3",{children:"Estudios"}),Object(p.jsxs)("div",{className:"jobCard",children:[Object(p.jsx)("img",{ClassName:"icon",src:"",alt:""}),Object(p.jsx)("h4",{className:"course",children:Object(p.jsx)("b",{children:"."})}),Object(p.jsx)("h4",{className:"place",children:"."})]})]})}}]),s}(a.a.Component),T=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{id:"skills",children:[Object(p.jsx)("h3",{className:"heading",children:"Skills"}),Object(p.jsx)("div",{className:"level flex row jc-evenly",children:this.props.list.map((function(e){return Object(p.jsxs)("div",{className:"flex column",children:[Object(p.jsx)("h4",{className:"title",children:e.level}),e.skills.map((function(e){return Object(p.jsxs)("div",{className:"card flex row jc-between ai-center",children:[Object(p.jsx)(x,{front:f[e.toLowerCase()]}),Object(p.jsx)("h5",{className:"name",children:e})]})}))]})}))})]})}}]),s}(a.a.Component);T.defaultProps={list:[{level:"Aprendiendo",skills:["Angular","Sass","Swift","Tailwind","VueJS"]},{level:"Basico",skills:["Android","C++","C#","Java","MongoDB","PHP","Python"]},{level:"Intermedio",skills:["Arduino","Javascript","Jquery","MySQL","PostgreSQL","Ruby","ruby on Rails"]},{level:"Avanzado",skills:["CSS","Go","HTML","React"]}]};var J=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{id:"projects",children:[Object(p.jsx)("h3",{className:"heading",children:"Algunos Proyectos"}),Object(p.jsx)("div",{className:"flex row wrap",children:this.props.list.map((function(e){return Object(p.jsxs)("div",{className:"card flex row wrap",children:[Object(p.jsx)("h4",{className:"name",children:e.title}),Object(p.jsx)("h5",{className:"status "+e.status,children:e.detail}),Object(p.jsxs)("p",{className:"body",children:[" ",e.body]}),Object(p.jsx)("h5",{className:"heading",children:"Skills"}),Object(p.jsx)("div",{className:"skillList flex row wrap jc-between ai-center",children:e.tools.map((function(e){return Object(p.jsxs)("h5",{className:"skill",children:[" ",e]})}))})]})}))})]})}}]),s}(a.a.Component);J.defaultProps={list:[{detail:"terminado",title:"Fluffy Dragon",body:"movil",status:"idea",tools:["A","B","C"]},{detail:"suspendido - 20%",title:"Artemiss",body:"multi",status:"planeacion",tools:["A","B","C"]},{detail:"desarrollo - 1 dispositivo",title:"Hungry Ajolote",body:"desktop",status:"desarrollo",tools:["A","B","C"]},{detail:"cancelado",title:"Watt-a-Bot",body:"software",status:"completado",tools:["A","B","C"]},{detail:"desarrollo - 20%",title:"Elements",body:"hardware",status:"cancelado",tools:["A","B","C"]},{detail:"idea",title:"Notebook",body:"web",status:"suspendido",tools:["A","B","C"]}]};var H=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{id:"about",children:[Object(p.jsx)(q,{}),Object(p.jsx)(L,{}),Object(p.jsx)(B,{}),Object(p.jsx)(D,{}),Object(p.jsx)(T,{}),Object(p.jsx)(J,{})]})}}]),s}(a.a.Component),I=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return console.log(this.props),Object(p.jsx)("section",{children:this.props.data.map((function(e){return Object(p.jsxs)("div",{className:"skillRow",children:[Object(p.jsxs)("div",{className:"flex row ai-center jc-between head",children:[Object(p.jsx)(x,{front:f[e.skill.toLowerCase()]}),Object(p.jsx)("h2",{className:"title",children:e.skill}),Object(p.jsxs)(o.b,{to:"./Skill/"+e.skill,children:[" ",">>"," "]})]}),Object(p.jsxs)("div",{className:"skillProjects flex row wrap",children:[Object(p.jsx)("h3",{className:"skillTitle",children:"Projects"}),Object(p.jsxs)("button",{children:[" ","<"," "]}),Object(p.jsx)("div",{className:"flex row projectSection",children:e.projects.map((function(e){return Object(p.jsx)(g,{title:e.title,icon:e.icon,status:e.status,type:e.type})}))}),Object(p.jsxs)("button",{children:[" ",">"," "]})]}),Object(p.jsxs)("div",{className:"skillBlogs flex row wrap",children:[Object(p.jsx)("h3",{className:"skillTitle",children:"Blogs"}),Object(p.jsxs)("button",{children:[" ","<"," "]}),Object(p.jsx)("div",{className:"flex row blogSection",children:e.blogs.map((function(e){return Object(p.jsx)(v,{banner:e.banner,title:e.title,date:e.date,body:e.body})}))}),Object(p.jsxs)("button",{children:[" ",">"," "]})]})]})}))})}}]),s}(a.a.Component);I.defaultProps={data:[{skill:"React",projects:[{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"}],blogs:[{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"}]},{skill:"C#",projects:[{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"},{icon:"",title:"title",status:"x",type:"y"}],blogs:[{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"},{banner:"",title:"text",date:"00/00/0000",body:"a really large text"}]}]};var R=[{icon:"",title:"Fluffy Dragon",type:"movil",status:"idea"},{icon:"",title:"Artemiss",type:"multi",status:"planeacion"},{icon:"",title:"Hungry Ajolote",type:"desktop",status:"desarrollo"},{icon:"",title:"Watt-a-Bot",type:"software",status:"completado"},{icon:"",title:"Elements",type:"hardware",status:"cancelado"},{icon:"",title:"Notebook",type:"web",status:"suspendido"}],z=[{title:"Aprendiendo CSS Grid",date:"28/10/2021",banner:"/icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},{title:"Go to the future",date:"18/10/2021",banner:"/icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},{title:"React-ing",date:"30/10/2021",banner:"/icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"},{title:"Python and pandas",date:"12/10/2012",banner:"/icons/background.jpg",body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen"}],E=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{className:"title",children:"Projects"}),Object(p.jsx)("div",{className:"flex row wrap content jc-evenly projectSection",children:this.props.projects.map((function(e){return Object(p.jsx)(g,{title:e.title,icon:e.icon,status:e.status,type:e.type})}))})]})}}]),s}(a.a.Component);E.defaultProps={projects:R};var M=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{className:"title",children:"Blogs"}),Object(p.jsx)("div",{className:"flex row wrap content jc-evenly blogSection",children:this.props.blogs.map((function(e){return Object(p.jsx)(v,{banner:e.banner,title:e.title,date:e.date,body:e.body})}))})]})}}]),s}(a.a.Component);M.defaultProps={blogs:z};var _=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("section",{className:"skill flex column jc-center",children:[Object(p.jsxs)("div",{className:"flex row wrap jc-between head",children:[Object(p.jsx)(x,{front:f[this.props.skill.toLowerCase()]}),Object(p.jsxs)("div",{className:"text",children:[Object(p.jsxs)("h2",{className:"title",children:[" ",this.props.skill]}),Object(p.jsx)("h4",{className:"intro",children:this.props.intro})]})]}),Object(p.jsxs)("div",{className:"skillProjects flex row wrap",children:[Object(p.jsx)("h3",{className:"skillTitle title",children:"Projects"}),Object(p.jsx)("div",{className:"flex row wrap content jc-evenly projectSection",children:this.props.projects.map((function(e){return Object(p.jsx)(g,{title:e.title,icon:e.icon,status:e.status,type:e.type})}))})]}),Object(p.jsxs)("div",{className:"skillBlogs flex row wrap",children:[Object(p.jsx)("h3",{className:"skillTitle title",children:"Blogs"}),Object(p.jsx)("div",{className:"flex row wrap content jc-evenly blogSection",children:this.props.blogs.map((function(e){return Object(p.jsx)(v,{banner:e.banner,title:e.title,date:e.date,body:e.body})}))})]})]})}}]),s}(a.a.Component);_.defaultProps={skill:"Test",intro:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen",projects:R,blogs:z};var F=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).state={type:n.props.match.params.type},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.setState({type:this.props.match.params.type})}},{key:"render",value:function(){return Object(p.jsx)("section",{className:"list",children:"Skills"===this.props.match.params.type?Object(p.jsx)(I,{}):"Blog"===this.props.match.params.type?Object(p.jsx)(M,{}):"Projects"===this.props.match.params.type?Object(p.jsx)(E,{}):null!==this.props.match.params.Skill?Object(p.jsx)(_,{skill:this.props.match.params.skill}):""})}}]),s}(a.a.Component),G=Object(l.g)(F);var Q=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),s=t[0],a=t[1],i=function(){a("light"===s?"dark":"light")};return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(o.a,{children:Object(p.jsx)("section",{className:"Main",children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/",children:Object(p.jsx)(P,{})}),Object(p.jsxs)(l.b,{exact:!0,path:"/Home",children:[Object(p.jsx)(h,{function:i}),Object(p.jsx)(S,{}),Object(p.jsx)(m,{})]}),Object(p.jsxs)(l.b,{path:"/List/:type/:skill",children:[Object(p.jsx)(h,{function:i}),Object(p.jsx)(G,{}),Object(p.jsx)(m,{})]}),Object(p.jsxs)(l.b,{path:"/List/:type",children:[Object(p.jsx)(h,{function:i}),Object(p.jsx)(G,{}),Object(p.jsx)(m,{})]}),Object(p.jsxs)(l.b,{path:"/About",children:[Object(p.jsx)(h,{function:i}),Object(p.jsx)(H,{}),Object(p.jsx)(m,{})]}),Object(p.jsxs)(l.b,{path:"/Contact",children:[Object(p.jsx)(h,{function:i}),"Contact",Object(p.jsx)(m,{})]}),Object(p.jsxs)(l.b,{path:"/Blog/:id/:Name",children:[Object(p.jsx)(h,{function:i}),"Blog",Object(p.jsx)(m,{})]}),Object(p.jsxs)(l.b,{path:"/Project/:id/:Name",children:[Object(p.jsx)(h,{function:i}),"Project",Object(p.jsx)(m,{})]})]})})})})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),W()}},[[38,1,2]]]);
//# sourceMappingURL=main.7be73fbd.chunk.js.map