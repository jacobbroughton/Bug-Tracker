(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){e.exports=n(48)},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),o=n(11),l=n(10),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},u=Object(l.b)({reducer:s}),d=Object(l.c)(u),m=n(9),g=n.n(m),h=n(23),v=n(24),p=n(29),f=n(25),E=n(30),b=n(26),w=n.n(b),k=Object(a.createContext)(),C=function(){return Object(a.useContext)(k)},N=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={auth0Client:null,isLoading:!0,isAuthenticated:!1,user:null},n.config={domain:"jlb1999.auth0.com",client_id:"piWchDvXGOycCbEuR95WgYqkX0BvC6cQ",redirect_uri:window.location.origin},n.initializeAuth0=function(){var e,t,a;return g.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,g.a.awrap(w()(n.config));case 2:if(e=c.sent,n.setState({auth0Client:e}),!window.location.search.includes("code=")){c.next=6;break}return c.abrupt("return",n.handleRedirectCallback());case 6:return c.next=9,g.a.awrap(e.isAuthenticated());case 9:if(!(t=c.sent)){c.next=16;break}return c.next=13,g.a.awrap(e.getUser());case 13:c.t0=c.sent,c.next=17;break;case 16:c.t0=null;case 17:a=c.t0,n.setState({isLoading:!1,isAuthenticated:t,user:a});case 19:case"end":return c.stop()}}))},n.handleRedirectCallback=function(){var e;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoading:!0}),t.next=3,g.a.awrap(n.state.auth0Client.handleRedirectCallback());case 3:return t.next=5,g.a.awrap(n.state.auth0Client.getUser());case 5:e=t.sent,n.setState({user:e,isAuthenticated:!0,isLoading:!1}),window.history.replaceState({},document.title,window.location.pathname);case 8:case"end":return t.stop()}}))},n}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){console.log("jlb1999.auth0.com"),console.log("piWchDvXGOycCbEuR95WgYqkX0BvC6cQ"),this.initializeAuth0()}},{key:"render",value:function(){var e=this.state,t=e.auth0Client,n=e.isLoading,a=e.isAuthenticated,i=e.user,r=this.props.children,o={isLoading:n,isAuthenticated:a,user:i,loginWithRedirect:function(){return t.loginWithRedirect.apply(t,arguments)},getTokenSilently:function(){return t.getTokenSilently.apply(t,arguments)},getIdTokenClaims:function(){return t.getIdTokenClaims.apply(t,arguments)},logout:function(){return t.logout.apply(t,arguments)}};return c.a.createElement(k.Provider,{value:o},r)}}]),t}(a.Component),y=n(3),O=(Object(y.a)(),n(44),n(17)),j=n(8);n(28);var x=function(){Object(o.c)((function(e){return e.reducer})),Object(o.b)();return c.a.createElement("div",{className:"Home"})},L=(n(45),function(){var e=C(),t=e.isLoading,n=e.loginWithRedirect,a=e.logout,i=e.user;return c.a.createElement("nav",{className:"navMother"},c.a.createElement("div",{className:"navMain"},c.a.createElement("section",{className:"leftNav"},c.a.createElement("div",{className:"logoDiv"},c.a.createElement("div",{className:"logo"},"Bug Tracker"))),c.a.createElement("section",{className:"rightNav"},c.a.createElement("div",{className:"loginLogoutSect"},!t&&!i&&c.a.createElement("div",{className:"loggedOutSect"},c.a.createElement("button",{className:"navLogIn",onClick:n},"Log In")),!t&&i&&c.a.createElement("div",{className:"loggedInSect"},c.a.createElement("h2",{className:"navGreeting"},"Hello, ",i.given_name?i.given_name:i.nickname,"!"),c.a.createElement("button",{className:"navLogOut",onClick:a}," Log Out"))))))}),R=function(){return c.a.createElement("div",null,"Profile")},A=(n(46),function(){var e=C(),t=e.isLoading;e.user,e.loginWithRedirect,e.logout;return t?c.a.createElement("div",null,"Loading..."):c.a.createElement(O.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(L,null),c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/",component:x}),c.a.createElement(j.a,{path:"/profile",component:R}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null,c.a.createElement(o.a,{store:d},c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e5d90ff6.chunk.js.map