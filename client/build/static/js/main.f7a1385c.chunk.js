(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){e.exports=a(84)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),o=a.n(l),s=a(42),i=a(16),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},u=Object(i.b)({reducer:r}),m=Object(i.c)(u),d=a(15),p=a.n(d),f=a(36),v=a(37),g=a(43),E=a(38),h=a(44),b=a(39),N=a.n(b),O=a(3),S=a(13),j=Object(n.createContext)(),k=function(){return Object(n.useContext)(j)},y=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={auth0Client:null,isLoading:!0,isAuthenticated:!1,user:null,dbUser:null,statusUrl:""},a.config={domain:"jlb1999.auth0.com",client_id:"piWchDvXGOycCbEuR95WgYqkX0BvC6cQ",redirect_uri:window.location.origin},a.addUser=function(e,t,n,c){e.given_name?O.get("".concat(a.state.statusUrl,"/api/newuser/").concat(t,"/").concat(e.email,"/").concat(e.given_name,"/").concat(e.family_name,"/").concat(e.nickname,"/","null","/","null","/").concat(n,"/").concat(c),{timeout:200}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})):e.email&&O.get("".concat(a.state.statusUrl,"/api/newuser/").concat(t,"/").concat(e.email,"/","null","/","null","/").concat(e.nickname,"/","null","/","null","/").concat(n,"/").concat(c),{timeout:200}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},a.findUser=function(e){a.setState({isLoading:!0}),O.get("".concat(a.state.statusUrl,"/api/finduser/").concat(e.email)).then((function(t){if(console.log(t),console.log(t.data),console.log(typeof t.data),""===t.data){var n=a.getRandomInt(1e8,1e9),c=S().format("LT"),l=S().format("L"),o=c.replace(/\s/,""),s=l.replace(/\//g,"-");a.addUser(e,n,s,o),console.log(t),a.findUserAgain(),a.setState({isLoading:!1})}else console.log("User already exists!"),a.setState({dbUser:t.data,isLoading:!1})})).catch((function(e){return console.log(e.toJSON())}))},a.findUserAgain=function(){var e=a.state.user;e?O.get("".concat(a.state.statusUrl,"/api/finduser/").concat(e.email)).then((function(e){return a.setState({dbUser:e.data,isLoading:!1})})).catch((function(e){return console.log(e)})):(console.log("no user, cant do it"),a.setState({isLoading:!1}))},a.initializeAuth0=function(){var e,t,n;return p.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,p.a.awrap(N()(a.config));case 2:if(e=c.sent,a.setState({auth0Client:e}),!window.location.search.includes("code=")){c.next=6;break}return c.abrupt("return",a.handleRedirectCallback());case 6:return c.next=9,p.a.awrap(e.isAuthenticated());case 9:if(!(t=c.sent)){c.next=16;break}return c.next=13,p.a.awrap(e.getUser());case 13:c.t0=c.sent,c.next=17;break;case 16:c.t0=null;case 17:n=c.t0,a.setState({isAuthenticated:t,user:n}),a.findUserAgain();case 20:case"end":return c.stop()}}))},a.handleRedirectCallback=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({isLoading:!0}),t.next=3,p.a.awrap(a.state.auth0Client.handleRedirectCallback());case 3:return t.next=5,p.a.awrap(a.state.auth0Client.getUser());case 5:e=t.sent,a.setState({user:e,isAuthenticated:!0,isLoading:!1}),a.findUser(e),window.history.replaceState({},document.title,window.location.pathname);case 9:case"end":return t.stop()}}))},a}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){console.log(this.config),this.setState({statusUrl:"https://bug-tracker-jb.herokuapp.com"}),this.initializeAuth0()}},{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"render",value:function(){var e=this.state,t=e.auth0Client,a=e.isLoading,n=e.isAuthenticated,l=e.user,o=e.dbUser,s=e.statusUrl,i=this.props.children,r={isLoading:a,isAuthenticated:n,user:l,dbUser:o,statusUrl:s,loginWithRedirect:function(){return t.loginWithRedirect.apply(t,arguments)},getTokenSilently:function(){return t.getTokenSilently.apply(t,arguments)},getIdTokenClaims:function(){return t.getIdTokenClaims.apply(t,arguments)},logout:function(){return t.logout.apply(t,arguments)}};return c.a.createElement(j.Provider,{value:r},i)}}]),t}(n.Component),w=(Object(n.createContext)(),a(74),a(4)),_=(a(75),function(){return c.a.createElement("div",{className:"loadingMother"},c.a.createElement("div",{className:"loadingMain"},c.a.createElement("h1",null,"Loading...")))}),C=(a(76),function(){var e=k(),t=e.isLoading,a=e.loginWithRedirect,n=e.logout,l=e.user;return t?c.a.createElement(_,null):c.a.createElement("nav",{className:"navMother"},c.a.createElement("div",{className:"navMain"},c.a.createElement("section",{className:"leftNav"},c.a.createElement("div",{className:"logoDiv"},c.a.createElement(w.b,{to:"/",className:"logo"},"Bug Tracker"))),c.a.createElement("section",{className:"rightNav"},c.a.createElement("div",{className:"loginLogoutSect"},!t&&!l&&c.a.createElement("div",{className:"loggedOutSect"},c.a.createElement("button",{className:"navLogIn",onClick:a},"Log In")),!t&&l&&c.a.createElement("div",{className:"loggedInSect"},c.a.createElement("button",{className:"navLogOut",onClick:n}," Log Out"),c.a.createElement(w.b,{to:"/profile"},c.a.createElement("img",{className:"navPicture",src:l.picture,alt:l.given_name?l.given_name:l.nickname+"'s picture"})))))))}),L=a(41),U=a(14),M=a(11),x=a(2),T=(a(78),a(3)),I=a.n(T),D=function(){var e=k(),t=e.isLoading,a=e.user,l=e.dbUser,o=e.statusUrl,s=Object(n.useState)([]),i=Object(x.a)(s,2),r=i[0],u=i[1];return Object(n.useEffect)((function(){I.a.get("".concat(o,"/api/getallissues")).then((function(e){return u(Object(M.a)(e.data).reverse())})).catch((function(e){return console.log(e)}))}),[]),t?c.a.createElement(_,null):c.a.createElement("div",{className:"home1Mother"},c.a.createElement("div",{className:"home1Main"},!t&&!a&&c.a.createElement("div",{className:"noUserCont"},c.a.createElement("h1",null,"Welcome to Bug Tracker!")),!t&&l&&c.a.createElement("div",{className:"userCont"},c.a.createElement("div",{className:"userContChild"},c.a.createElement("div",{className:"headDiv"},c.a.createElement("h1",{className:"homeHead"},"Welcome, ","null"!=l.given_name?l.given_name:l.nickname,"!"),c.a.createElement(w.b,{to:"/post"},c.a.createElement("div",{className:"promptBtnDiv"},c.a.createElement("button",{className:"issuePromptBtn"}," Post an issue? ")))),c.a.createElement("div",{className:"recentIssuesDiv"},c.a.createElement("div",{className:"recentHeadDiv"},c.a.createElement("h3",{className:"recentHead"},"Recent Open Issues")),c.a.createElement("div",{className:"recentIssuesList"},r.map((function(e){return c.a.createElement(w.b,{key:e.uid,to:"/issues/".concat(e.uid)},c.a.createElement("div",{className:"issuePost"},c.a.createElement("h3",{className:"issueTitle"},e.issue_title),c.a.createElement("div",{className:"recentDateTime"},c.a.createElement("p",{className:"issueNickname"},e.nickname),c.a.createElement("p",{className:"issueDate"},e.date_created),c.a.createElement("p",{className:"issueTime"},e.time_created))))}))))))))},P=function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"homeMain"},c.a.createElement(D,null)))},A=(a(79),function(){var e=k(),t=e.isLoading,a=e.user,l=e.dbUser,o=e.statusUrl,s=Object(n.useState)(""),i=Object(x.a)(s,2),r=i[0],u=i[1],m=Object(n.useState)(""),d=Object(x.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(""),g=Object(x.a)(v,2),E=g[0],h=g[1],b=Object(n.useState)(""),N=Object(x.a)(b,2),O=N[0],S=N[1],j=Object(n.useState)([]),y=Object(x.a)(j,2),C=y[0],L=y[1],U=Object(n.useState)([]),T=Object(x.a)(U,2);T[0],T[1];if(Object(n.useEffect)((function(){I.a.get("".concat(o,"/api/issues/").concat(l.uid)).then((function(e){return L((function(){return Object(M.a)(e.data).reverse()}))})).catch((function(e){return console.log(e)}))}),[]),t)return c.a.createElement(_,null);var D=function(){I.a.get("".concat(o,"/api/addname/").concat(r,"/").concat(p,"/").concat(a.email),{timeout:200}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},P=function(){I.a.get("".concat(o,"/api/addcomprole/").concat(E,"/").concat(O,"/").concat(a.email),{timeout:200}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",{className:"profile1Mother"},c.a.createElement("div",{className:"profile1Main"},c.a.createElement("section",{className:"bioSection"},c.a.createElement("img",{className:"profilePic",src:a.picture,alt:l.nickname}),c.a.createElement("div",{className:"bioInfo"},c.a.createElement("h1",{className:"profileName"},"null"!==l.given_name?l.given_name:l.nickname,"'s Profile"),"null"!==l.company&&"null"!==l.role&&c.a.createElement("h3",{className:"profileRoleComp"},l.role," at ",l.company)),"null"===l.given_name&&"null"===l.family_name&&c.a.createElement("form",{onSubmit:function(e){console.log("Submitting name: ".concat(r," ").concat(p)),D()},value:"Submit"},c.a.createElement("input",{className:"profileInput",placeholder:"first name",type:"text",value:r,name:"firstname",onChange:function(e){return u(e.target.value)}}),c.a.createElement("input",{className:"profileInput",placeholder:"last name",type:"text",value:p,name:"lastname",onChange:function(e){return f(e.target.value)}}),c.a.createElement("input",{className:"profileSubmit",placeholder:"submit",type:"submit"}))," ","null"===l.company&&"null"===l.role&&c.a.createElement("form",{onSubmit:function(e){console.log("Submitting company and role: ".concat(O," at ").concat(E)),P()},value:"submit"},c.a.createElement("input",{className:"profileInput",type:"text",placeholder:"Company",value:E,name:"company",onChange:function(e){return h(e.target.value)}}),c.a.createElement("input",{className:"profileInput",type:"text",placeholder:"Role",value:O,name:"role",onChange:function(e){return S(e.target.value)}}),c.a.createElement("input",{className:"profileSubmit",type:"submit",placeholder:"submit"}))),c.a.createElement("div",{className:"issuesWrapper"},c.a.createElement("div",{className:"issuesDiv"},C.length<=5?C.map((function(e){return c.a.createElement("div",{key:e.uid,className:"issuePost"},c.a.createElement(w.b,{to:"/issues/".concat(e.uid)},c.a.createElement("h2",{className:"issueTitle"},e.issue_title)),c.a.createElement("p",{className:"issuePara"},"".concat(e.date_created," | ").concat(e.time_created)))})):c.a.createElement("div",null,C.slice(0,5).map((function(e){return c.a.createElement("div",{key:e.uid,className:"issuePost"},c.a.createElement(w.b,{to:"/issues/".concat(e.uid)},c.a.createElement("h2",{className:"issueTitle"},e.issue_title)),c.a.createElement("p",{className:"issuePara"},"".concat(e.date_created," | ").concat(e.time_created)))})),c.a.createElement(w.b,{to:"/all/".concat(l.uid,"/")},c.a.createElement("button",{className:"issueViewBtn"},"View All")))))))}),R=function(){return c.a.createElement("div",null,c.a.createElement(A,null))},B=a(13),W=a.n(B),H=(a(80),function(){var e=Object(n.useState)({}),t=Object(x.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),s=Object(x.a)(o,2),i=s[0],r=s[1],u=k(),m=u.statusUrl,d=u.dbUser,p=(u.user,Object(n.useState)([])),f=Object(x.a)(p,2),v=f[0],g=f[1],E=Object(n.useState)([]),h=Object(x.a)(E,2),b=h[0],N=h[1],O=Object(n.useState)(),S=Object(x.a)(O,2),j=(S[0],S[1],Object(n.useState)()),y=Object(x.a)(j,2),_=(y[0],y[1],d.uid.toString());Object(n.useEffect)((function(){var e=window.location.pathname.replace("/issues/","");I.a.get("".concat(m,"/api/getissue/").concat(e)).then((function(e){return l(e.data)})).catch((function(e){return console.log(e)})),L(e),C(e)}),[]);var C=function(e){I.a.get("".concat(m,"/api/getcomments/").concat(e),{timeout:500}).then((function(e){return g(Object(M.a)(e.data))})).catch((function(e){return console.log(e)}))},L=function(e){I.a.get("".concat(m,"/api/getvotes/").concat(e),{timeout:300}).then((function(e){return N(Object(M.a)(e.data))})).catch((function(e){return console.log(e)}))},U=function(e){var t=document.getElementById("overlay");null!=e&&(e.classList.add("active"),t.classList.add("active"))},T=function(e,t){var a=document.getElementById("overlay");"modalClose"===e.target.id?(e.target.closest(".deleteModal").classList.remove("active"),a.classList.remove("active")):(t.classList.remove("active"),a.classList.remove("active"))},D=function(e,t,a){var n=W()().format("LT"),c=W()().format("L"),l=n.replace(/\s/,""),o=c.replace(/\//g,"-");if(0===b.length)P(a,_,e,t,o,l),window.location.reload();else for(var s=0;s<b.length;s++){if(b[s].user_uid===_){A(e,t,a,_);break}P(a,_,e,t,o,l);break}},P=function(e,t,a,n,c,l){I.a.post("".concat(m,"/api/postvote"),{issue_uid:e,user_uid:t,upvoted:a,downvoted:n,date_voted:c,time_voted:l},{timeout:300}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),window.location.reload()},A=function(e,t,a,n){I.a.get("".concat(m,"/api/updatevote/").concat(e,"/").concat(t,"/").concat(a,"/").concat(n),{timeout:300}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),window.location.reload()},R=function(e){var t=window.location.pathname.replace("/issues/",""),a=e.target.parentNode.parentNode.id;console.log(a),I.a.get("".concat(m,"/api/updatesolved/").concat(t,"/").concat(a)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),window.location.reload()};return c.a.createElement("div",{className:"singleMother"},c.a.createElement("div",{className:"singleMain"},c.a.createElement("section",{className:"titleTextSection"},c.a.createElement("h1",{className:"singleTitle"},a.issue_title),c.a.createElement("p",{className:"singleText"},a.issue_text)),c.a.createElement("div",{onClick:function(e){var t=document.querySelector(".deleteModal.active");T(e,t)},className:"",id:"overlay"}),c.a.createElement("hr",null),c.a.createElement("section",{className:"descSection"},c.a.createElement("div",{className:"deleteDiv"},c.a.createElement("div",{id:"deleteModal",className:"deleteModal"},c.a.createElement("div",{className:"modalHead"},c.a.createElement("h4",{className:"modalTitle"},"Notice!"),c.a.createElement("button",{onClick:T,id:"modalClose",className:"modalClose"},"\xd7")),c.a.createElement("div",{className:"modalPara"},'If you would like to delete this post, please press the "Delete" button. If not, click the "X".'),c.a.createElement(w.b,{to:"/profile"},c.a.createElement("button",{onClick:function(e){I.a.get("".concat(m,"/api/deleteissue/").concat(a.uid),{timeout:300}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},className:"deleteBtnModal"},"Delete"))),d.nickname===a.nickname?c.a.createElement("button",{"data-modal-target":"#deleteModal",className:"deleteBtn",onClick:function(e){var t=e.target,a=document.querySelector(t.dataset.modalTarget);U(a)}},"Delete"):c.a.createElement("div",null,c.a.createElement("button",{onClick:function(e){var t=window.location.pathname.replace("/issues/","");D(1,0,t)}},"Up"),c.a.createElement("button",{onClick:function(e){var t=window.location.pathname.replace("/issues/","");D(0,1,t)}},"Down"))),c.a.createElement("div",{className:"descDiv"},c.a.createElement("p",{className:"singleNickname"},a.nickname),c.a.createElement("div",{className:"dateTime"},c.a.createElement("p",{className:"singleTime"},a.time_created),c.a.createElement("p",{className:"singleDate"},a.date_created)),1===a.solved&&c.a.createElement("div",{className:"solvedDiv"},c.a.createElement("p",null,"Solved!")))),c.a.createElement("section",{className:"commentSection"},c.a.createElement("h2",{className:"commentsHead"},"Comments"),c.a.createElement("form",{className:"commentForm",onSubmit:function(e){var t,n,c=window.location.pathname.replace("/issues/",""),l=(t=1e7,n=1e8,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t)+n)),o=d.uid.toString(),s=a.uid.toString(),r=W()().format("LT"),u=W()().format("L"),p=r.replace(/\s/,""),f=u.replace(/\//g,"-");I.a.post("".concat(m,"/api/addcomment/").concat(c),{comm_uid:l,user_uid:o,issue_uid:s,comm_nickname:d.nickname,comm_text:i,date_created:f,time_created:p,upvotes:0,downvotes:0,solved:0})},type:"submit"},c.a.createElement("textarea",{className:"commentInput",onChange:function(e){r(e.target.value)},placeholder:"Add a informative and helpful comment..."}),c.a.createElement("input",{className:"commentSubmit",placeholder:"Submit",type:"submit"})),c.a.createElement("div",{className:"commentList"},v.reverse().map((function(e){return c.a.createElement("div",{className:"commItem ".concat(e.solved?" solved":""),id:"".concat(e.comm_uid),key:e.comm_uid},c.a.createElement("p",{className:"commText"},e.comm_text," - ",c.a.createElement("strong",null,e.comm_nickname)),c.a.createElement("div",{className:"dateTimeNameDiv"},0===a.solved&&c.a.createElement("button",{className:"solvedBtn",onClick:R},"Solved"),c.a.createElement("p",{className:"commTime"},e.time_created),c.a.createElement("p",{className:"commDate"},e.date_created)))}))))))}),q=function(){return c.a.createElement(H,null)},F=(a(81),function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),s=Object(x.a)(o,2),i=s[0],r=s[1],u=k(),m=u.dbUser,d=u.statusUrl,p=Object(n.useState)(""),f=Object(x.a)(p,2),v=(f[0],f[1]),g=Object(n.useState)(!0),E=Object(x.a)(g,2);E[0],E[1];Object(n.useEffect)((function(){console.log(d)}));return c.a.createElement("div",{className:"issuePost1Mother"},c.a.createElement("div",{className:"issuePost1Main"},c.a.createElement("h1",{className:"issueHead"},"Post an issue?"),c.a.createElement("form",{id:"issueForm",className:"issueForm",onSubmit:function(e){var t,n,c=(t=1e7,n=1e8,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t)+n));!function(e){var t=e.toString(),n=m.uid.toString(),c=W()().format("LT"),l=W()().format("L"),o=c.replace(/\s/,""),s=l.replace(/\//g,"-");I.a.post("".concat(d,"/api/issue/post"),{uid:t,user_uid:n,nickname:m.nickname,issue_title:a,issue:i,date_created:s,time_created:o},{timeout:300}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}(c),v(c),window.location.href="".concat(d,"/profile")}},c.a.createElement("input",{className:"issueTitleInput",placeholder:"Title your issue...",type:"text",value:a,onChange:function(e){return l(e.target.value)}}),c.a.createElement("textarea",{className:"issueTextInput",value:i,type:"text",placeholder:"Explain your issue...",onChange:function(e){return r(e.target.value)}}),c.a.createElement("input",{className:"issueSubmit",type:"submit"}))))}),J=function(){return c.a.createElement("div",null,c.a.createElement(F,null))},X=(a(82),function(){var e=k(),t=e.isLoading,a=e.user,l=e.dbUser,o=e.statusUrl,s=Object(n.useState)([]),i=Object(x.a)(s,2),r=i[0],u=i[1];return Object(n.useEffect)((function(){I.a.get("".concat(o,"/api/issues/").concat(l.uid)).then((function(e){return u(Object(M.a)(e.data))})).catch((function(e){return console.log(e)}))}),[]),t?c.a.createElement(_,null):c.a.createElement("div",null,c.a.createElement("section",{className:"bioSection"},c.a.createElement("img",{className:"profilePic",src:a.picture,alt:l.nickname}),c.a.createElement("div",{className:"bioInfo"},c.a.createElement("h1",{className:"profileName"},"null"!==l.given_name?l.given_name:l.nickname,"'s Profile"),"null"!==l.company&&"null"!==l.role&&c.a.createElement("h1",{className:"profileRoleComp"},l.role," at ",l.company))),c.a.createElement("section",{className:"issuesSection"},r.reverse().map((function(e){return c.a.createElement("div",{key:e.uid,className:"issuePost"},console.log("not slicing"),c.a.createElement(w.b,{to:"/issues/".concat(e.uid)},c.a.createElement("h2",{className:"issueTitle"},e.issue_title)),c.a.createElement("p",{className:"issuePara"},"".concat(e.date_created," | ").concat(e.time_created)))}))))}),z=function(){return c.a.createElement("div",null,c.a.createElement(X,null))},V=function(e){var t=e.component,a=Object(L.a)(e,["component"]),n=k().user;return c.a.createElement(U.b,Object.assign({},a,{render:function(e){return n?c.a.createElement(t,e):c.a.createElement(U.a,{to:{pathname:"/"}})}}))},G=function(){return c.a.createElement(U.d,null,c.a.createElement(U.b,{exact:!0,path:"/",component:P}),c.a.createElement(U.b,{path:"/post",component:J}),c.a.createElement(U.b,{path:"/issues/:issueuid",component:q}),c.a.createElement(U.b,{path:"/all/:useruid",component:z}),c.a.createElement(V,{path:"/profile",component:R}))},Q=(a(83),function(){var e=k(),t=e.isLoading;e.user;return t?c.a.createElement(_,null):c.a.createElement(w.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(C,null),c.a.createElement(G,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null,c.a.createElement(s.a,{store:m},c.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.f7a1385c.chunk.js.map