"use strict";(self.webpackChunktenis_ball=self.webpackChunktenis_ball||[]).push([[162],{5162:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var s=t(885),r=t(7313),i=t(3222),a=t(5861),c=t(7757),l=t.n(c),o=t(1881),d=t.n(o),u=function(){var e=(0,a.Z)(l().mark((function e(){var n,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/api/players");case 2:return n=e.sent,t=n.data.players,e.abrupt("return",{players:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=t(3618),m=function(e,n,t){return e.sort((function(e,s){return e["".concat(n)].points<s["".concat(n)].points?-1*t:e["".concat(n)].points>s["".concat(n)].points?1*t:0}))},f=function(e,n){return function(t){t({type:n,payload:e})}},p=t(6337),x=t(6417),j=function(e){var n=e.showModal,t=e.setShowModal,s=e.item,i=s.firstname,a=s.lastname,c=s.picture,l=s.sex,o=s.country,d=o.code,u=o.picture,h=s.data,m=h.rank,f=h.points,j=h.age,v=h.weight,y=h.height;(0,r.useEffect)((function(){}),[]);var g=[{className:"one",title:"Rank",value:"# "+m},{className:"two",title:"Points",value:f},{className:"three",title:"Country",value:d},{className:"four",title:"Sex",value:l},{className:"five",title:"Age",value:j},{className:"six",title:"Weight",value:function(e){return e/1e3}(v)+" kg"},{className:"seven",title:"Height",value:y+" cm"}];return(0,x.jsxs)(p.Z,{show:n,onHide:function(){t(!1)},keyboard:!1,className:"custom__modal",children:[(0,x.jsx)(p.Z.Header,{closeButton:!0}),(0,x.jsxs)(p.Z.Body,{children:[(0,x.jsx)("div",{className:"border-photo",children:(0,x.jsx)("img",{src:c,alt:"photo of tenises"})}),(0,x.jsxs)("div",{className:"modal-body-upper",children:[(0,x.jsxs)("div",{className:"tenises__name",children:[(0,x.jsx)("span",{children:i}),(0,x.jsx)("p",{children:a})]}),(0,x.jsxs)("div",{className:"tenises__flag",children:[(0,x.jsx)("img",{src:u,alt:"flag of country"}),(0,x.jsx)("span",{children:d})]})]}),(0,x.jsxs)("div",{className:"modal-body-down",children:[(0,x.jsx)("div",{className:"body-down-info",children:g.map((function(e){var n=e.className,t=e.title,s=e.value;return(0,x.jsxs)("div",{className:n,children:[(0,x.jsx)("span",{children:t}),(0,x.jsx)("p",{children:s})]},n)}))}),(0,x.jsxs)("div",{className:"body-down-career",children:[(0,x.jsx)("span",{children:"Career Title"}),(0,x.jsx)("p",{})]})]})]})]})},v=(0,r.memo)(j),y=function(e){var n=e.item,t=(0,r.useState)(!1),i=(0,s.Z)(t,2),a=i[0],c=i[1],l=n.firstname,o=n.lastname,d=n.picture,u=n.country.code,h=n.data,m=h.rank,f=h.points;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"card",onClick:function(){return c(!0)},children:[(0,x.jsx)("div",{className:"card__photo",children:(0,x.jsx)("img",{src:d,className:"card__photo_player"})}),(0,x.jsxs)("div",{className:"card__content",children:[(0,x.jsx)("div",{className:"card__content_name",children:(0,x.jsxs)("span",{children:[l," ",o]})}),(0,x.jsxs)("div",{className:"card__content_info",children:[(0,x.jsxs)("div",{className:"title__info",children:[(0,x.jsx)("span",{children:"Rank"}),(0,x.jsxs)("p",{children:["#",m]})]}),(0,x.jsxs)("div",{className:"title__info",children:[(0,x.jsx)("span",{children:"Points"}),(0,x.jsx)("p",{children:f})]}),(0,x.jsxs)("div",{className:"title__info",children:[(0,x.jsx)("span",{children:"Country"}),(0,x.jsx)("p",{children:u})]})]})]})]}),(0,x.jsx)(v,{showModal:a,setShowModal:c,item:n})]})},g=(0,r.memo)(y),_=function(e){var n=e.activeFilters,t=e.filterItems,s=e.items;return(0,x.jsx)(x.Fragment,{children:0===Object.keys(n).length?s.length>0?s.map((function(e){return(0,x.jsx)(g,{item:e},e.lastname)})):(0,x.jsx)("div",{children:(0,x.jsx)("h3",{children:"No Items"})}):t.map((function(e){return(0,x.jsx)(g,{item:e},e.lastname)}))})},w=(0,r.memo)(_),N=function(){var e=(0,r.useState)({width:window.innerWidth,height:window.innerHeight}),n=(0,s.Z)(e,2),t=n[0],i=n[1],a=function(){i({width:window.innerWidth,height:window.innerHeight})};return(0,r.useEffect)((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[]),t},Z=t(3849),k=function(e){var n=e.children,t=e.loading;return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)("h1",{children:"Is Loading..."}),(0,x.jsx)("div",{className:"container_body",children:(0,x.jsx)(Z.Z,{children:n})})]})},b=t(4942),F=t(2982),I=t(1413),L=function(e,n,t,s,r,i,a){e.preventDefault(),0===Object.keys(s).length?i(f({},n)):(i(f(s,n)),i(function(e,n,t){return function(s){var r=n.filter((function(n){return Object.keys(e).every((function(t){return e[t].some((function(e){return e===String(n[t])}))}))}));s({type:t,payload:r})}}(s,r,t))),void 0!==a&&a(!1)},S=function(e,n,t){var s;if(Object.keys(e).length>=0)return(null===(s=e[t])||void 0===s?void 0:s.indexOf(n))>=0},C=function(e,n,t){if(e[n].length>1)return E(e,n,t);var s=E(e,n,t);return delete s[n],s},E=function(e,n,t){return(0,I.Z)((0,I.Z)({},e),{},(0,b.Z)({},n,e[n].filter((function(e){return e!==t}))))},M=function(e){var n=e.keyList,t=e.dataFilters,s=e.liClass,r=e.filters,i=e.setFilters;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h6",{children:n}),(0,x.jsx)("ul",{className:"filter",children:t[n].map((function(e,n){return(0,x.jsxs)("li",{className:s,children:[(0,x.jsx)("input",{type:"checkbox",value:e.type,onChange:function(n){return function(e,n,t){var s=e.value;t(e.checked?function(e){return Object.keys(e).indexOf(n)>=0?(0,I.Z)((0,I.Z)({},e),{},(0,b.Z)({},n,(0,F.Z)(new Set(e[n].concat(s))))):(0,I.Z)((0,I.Z)({},e),{},(0,b.Z)({},n,[s]))}:function(e){return C(e,n,s)})}(n.target,e.property,i)},checked:S(r,e.type,e.property)}),e.name]},n)}))})]})},T=(0,r.memo)(M),O=t(2641),H=t(5838),R=function(e){var n=e.showModal,t=e.setShowModal,a=e.tenisesList,c=e.dataFilters,l=e.typeFilters,o=l.ACTIVE_FILTER_LIST,d=l.FILTER_LIST,u=(0,i.I0)(),h=(0,r.useState)({}),m=(0,s.Z)(h,2),f=m[0],j=m[1];return(0,x.jsxs)(p.Z,{show:n,onHide:function(){t(!1)},keyboard:!1,className:"custom__modal",children:[(0,x.jsx)(p.Z.Header,{closeButton:!0}),(0,x.jsx)(p.Z.Body,{children:(0,x.jsxs)(O.Z,{className:"contact-form",onSubmit:function(e){return L(e,o,d,f,a,u,t)},children:[(0,x.jsx)("div",{className:"filter-body",children:Object.keys(c).map((function(e,n){return(0,x.jsx)(O.Z.Group,{controlId:"filter".concat(e),children:(0,x.jsx)(T,{keyList:e,dataFilters:c,liClass:"filter-row",filters:f,setFilters:j})},n)}))}),(0,x.jsx)(p.Z.Footer,{children:(0,x.jsx)(H.Z,{variant:"secondary",type:"submit",children:"Filtrer"})})]})})]})},B=[{name:"Man",type:"M",property:"sex"},{name:"Woman",type:"F",property:"sex"}],W=function(){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),t=n[0],c=n[1],o=(0,i.v9)((function(e){return e.tenisesList})),d=(o.loading,o.tenisesList),f=o.activeFilters,p=o.filterItems,j=(0,r.useState)(640),v=(0,s.Z)(j,2),y=v[0],g=v[1],_=(0,r.useState)(!0),Z=(0,s.Z)(_,2),b=Z[0],F=Z[1],I=N().width,L=(0,i.I0)();(0,r.useEffect)((function(){L(function(){var e=(0,a.Z)(l().mark((function e(n,t){var s,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:h.Mb}),e.next=4,u();case 4:s=e.sent,r=s.players,n({type:h.hg,payload:m(r,"data",-1)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:h.QE,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}()),S(),function(e,n,t){e<1920&&t(e/1920*n)}(I,640,g)}),[I]);var S=function(){return F(!(I<768))};return(0,x.jsxs)(k,{loading:!1,children:[(0,x.jsxs)("div",{className:"home",children:[(0,x.jsxs)("div",{className:"home_players",children:[(0,x.jsx)("h1",{onClick:function(){return c(!0)},children:"List tenises players - click me"}),(0,x.jsx)("div",{className:"home_players_content",children:(0,x.jsx)(w,{activeFilters:f,filterItems:p,items:d})})]}),b&&(0,x.jsx)("div",{className:"home_logo",children:(0,x.jsx)("img",{src:"tenisball.png",alt:"tenis ball",width:y,height:y})})]}),(0,x.jsx)(R,{showModal:t,setShowModal:c,dataFilters:{genders:B},tenisesList:d,typeFilters:{ACTIVE_FILTER_LIST:h.z9,FILTER_LIST:h.Y8}})]})}}}]);