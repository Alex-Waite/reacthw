(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),m=(a(22),a(23),a(24),a(2)),o=a(3),s=a(5),i=a(4),u=a(16),E=a.n(u);var d=function(){return E.a.get("https://randomuser.me/api/?results=15")};var h=function(){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"display-4 CenteredJumbotron"},"Employee Directory"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",{className:"lead CenteredJumbotron"},"Use this simple React App to view and sort a list of employees from a Directory!"))},v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,"hmmm")),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,"hmmm")),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,"hmmm")),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,"hmmm")),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,"hmmm")),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,"hmmm")))}}]),a}(l.a.Component);var p=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,l.a.createElement("strong",null,"Pic"))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,l.a.createElement("strong",null,"First"))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,l.a.createElement("strong",null,"Last"))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,l.a.createElement("strong",null,"Email"))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,l.a.createElement("strong",null,"Phone"))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("h5",null,l.a.createElement("strong",null,"Age"))))},f=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={Employees:[]},e.CreateEmployees=function(){d().then((function(t){e.setState({Employees:t.data.results}),console.log("Employees Succesful generation"),console.log(e.state.Employees)})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.CreateEmployees()}},{key:"render",value:function(){return l.a.createElement("div",{className:"MainContain"},l.a.createElement(h,null),l.a.createElement("div",{className:"container"},l.a.createElement(p,null),this.state.Employees.map((function(e){var t=e.picture,a=e.name,n=e.cell,c=e.location,r=e.id;return l.a.createElement(v,{image:t.thumbnail,name:a,contact:n,address:c,key:r.value})}))))}}]),a}(l.a.Component);var y=function(){return l.a.createElement("div",null,l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.034a28c9.chunk.js.map