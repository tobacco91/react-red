webpackJsonp([0],{MwFL:function(e,t,n){e.exports=n.p+"static/img/carousel1.e53f105.jpg"},"P/Jh":function(e,t,n){t=e.exports=n("bKW+")(void 0),t.push([e.i,"header {\n  display: block;\n}\n.title-image {\n  width: 100%;\n}\n.carousel {\n  margin-top: -0.10666667rem;\n  width: 100%;\n  height: 4.97333333rem;\n  overflow: hidden;\n}\n.carousel-ul {\n  position: relative;\n  width: 500%;\n  height: 4.97333333rem;\n}\n.carousel-li {\n  float: left;\n  width: 20%;\n  height: 4.97333333rem;\n}\n.carousel-img {\n  width: 100%;\n  height: 4.97333333rem;\n}\n.carousel-a {\n  display: block;\n  width: 100%;\n  height: 4.97333333rem;\n}\n",""])},PLCE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Zx67"),l=n.n(a),r=n("Zrlr"),c=n.n(r),i=n("wxAW"),s=n.n(i),u=n("zwoO"),o=n.n(u),h=n("Pf15"),p=n.n(h),m=n("U7vG"),f=n.n(m),d=n("F8kA"),g=n("WBcq"),v=n("cZ53"),x=n.i(g.a)(function(){return n.e(6).then(n.bind(null,"W+5T")).then(function(e){return e.default})}),w=n.i(g.a)(function(){return n.e(5).then(n.bind(null,"nwe4")).then(function(e){return e.default})}),b=n.i(g.a)(function(){return n.e(8).then(n.bind(null,"5KLQ")).then(function(e){return e.default})}),E=n.i(g.a)(function(){return n.e(9).then(n.bind(null,"3mpV")).then(function(e){return e.default})}),y=n.i(g.a)(function(){return n.e(4).then(n.bind(null,"KpPh")).then(function(e){return e.default})}),j=n.i(g.a)(function(){return n.e(7).then(n.bind(null,"zmc/")).then(function(e){return e.default})}),k=function(e){function t(){return c()(this,t),o()(this,(t.__proto__||l()(t)).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement(v.a,null),f.a.createElement(d.b,null,f.a.createElement(d.c,{path:"/list",exact:!0,component:x}),f.a.createElement(d.c,{path:"/list/dynamic",component:w}),f.a.createElement(d.c,{path:"/list/era/:type",component:b}),f.a.createElement(d.c,{path:"/list/history",component:E}),f.a.createElement(d.c,{path:"/list/www",component:y}),f.a.createElement(d.c,{path:"/list/movie",component:j})))}}]),t}(m.Component);t.default=k},"b+iQ":function(e,t,n){e.exports=n.p+"static/img/carousel3.c1924ad.jpg"},cZ53:function(e,t,n){"use strict";var a=n("Zx67"),l=n.n(a),r=n("Zrlr"),c=n.n(r),i=n("wxAW"),s=n.n(i),u=n("zwoO"),o=n.n(u),h=n("Pf15"),p=n.n(h),m=n("U7vG"),f=n.n(m),d=n("y+i4"),g=(n.n(d),n("hzuk")),v=n.n(g),x=n("hQbx"),w=(x.keys().map(x),"https://wx.idsbllp.cn/red-wx/RedWeb/public/"),b=function(e){function t(){c()(this,t);var e=o()(this,(t.__proto__||l()(t)).call(this));return e.state={list:[{img:w+"carousel1.jpg",url:"http://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=706JG61J98M6DQ65"},{img:w+"carousel2.jpg",url:"http://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=71UC5RKU2W141868"},{img:w+"carousel2.jpg",url:"http://mp.weixin.qq.com/s/bmqEWlK-f6vGx8vvjYTgfg"}]},e}return p()(t,e),s()(t,[{key:"componentWillMount",value:function(){var e=this,t={method:"GET"};fetch("https://wx.idsbllp.cn/red-wx/RedWeb/RedWeb/imgsUrl.php",t).then(function(e){return e.json()}).then(function(t){e.setState({list:t})})}},{key:"componentDidMount",value:function(){var e=this,t=this.refs.carousel,n=void 0,a=void 0,l=void 0,r=void 0,c=void 0,i=void 0,s=1,u=this.state.list.length+1,o=parseInt(window.getComputedStyle(this.refs.carousel).width);setInterval(function(){s<u?(e.refs.carouselUl.style.left=-o*s+"px",s++):(e.refs.carouselUl.style.left="0px",s=0)},3e3),t.addEventListener("touchstart",function(e){n=e.touches[0].pageX,a=e.touches[0].pageY}),t.addEventListener("touchend",function(t){l=t.changedTouches[0].pageX,r=t.changedTouches[0].pageY,c=l-n,i=r-a,Math.abs(c)>Math.abs(i)&&Math.abs(c)>5?s<u?(s++,e.refs.carouselUl.style.left=-o*s+"px"):(e.refs.carouselUl.style.left="0px",s=0):Math.abs(c)>Math.abs(i)&&c<-5&&(s>1?(s--,e.refs.carouselUl.style.left=-o*s+"px"):1==s&&(e.refs.carouselUl.style.left="0px",s=0))})}},{key:"render",value:function(){var e=this.state.list,t=e.map(function(e,t){return f.a.createElement("li",{className:"carousel-li",key:t},f.a.createElement("a",{className:"carousel-a",href:e.url},f.a.createElement("img",{src:e.img,alt:"",className:"carousel-img"})))});return f.a.createElement("header",null,f.a.createElement("img",{className:"title-image",src:v.a,alt:""}),f.a.createElement("div",{className:"carousel",ref:"carousel"},f.a.createElement("ul",{className:"carousel-ul",ref:"carouselUl"},f.a.createElement("li",{className:"carousel-li"},f.a.createElement("a",{className:"carousel-a",href:e[0].url},f.a.createElement("img",{src:e[0].img,alt:"",className:"carousel-img"}))),t,f.a.createElement("li",{className:"carousel-li"},f.a.createElement("a",{className:"carousel-a",href:e[e.length-1].url},f.a.createElement("img",{src:e[e.length-1].img,alt:"",className:"carousel-img"}))))))}}]),t}(m.Component);t.a=b},hQbx:function(e,t,n){function a(e){return n(l(e))}function l(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./carousel1.jpg":"MwFL","./carousel2.jpg":"spyI","./carousel3.jpg":"b+iQ"};a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id="hQbx"},hzuk:function(e,t,n){e.exports=n.p+"static/img/title.13a1048.png"},spyI:function(e,t,n){e.exports=n.p+"static/img/carousel2.55e73b6.jpg"},"y+i4":function(e,t,n){var a=n("P/Jh");"string"==typeof a&&(a=[[e.i,a,""]]);var l={};l.transform=void 0;n("P2Jt")(a,l);a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=0.7c22b.js.map