webpackJsonp([9],{"3mpV":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("Zx67"),o=e.n(r),i=e("Zrlr"),a=e.n(i),s=e("wxAW"),l=e.n(s),u=e("zwoO"),c=e.n(u),h=e("Pf15"),m=e.n(h),d=e("U7vG"),f=e.n(d),v=e("pKXO"),p=(e.n(v),function(t){function n(){a()(this,n);var t=c()(this,(n.__proto__||o()(n)).call(this));return t.state={list:[]},document.title="党史辞典",t}return m()(n,t),l()(n,[{key:"componentWillMount",value:function(){var t=this,n={method:"GET"};fetch("http://hongyan.cqupt.edu.cn/red-wx/RedWeb/RedWeb/TextUrl.php",n).then(function(t){return t.json()}).then(function(n){t.setState({list:n})})}},{key:"hoverStart",value:function(t){t.target.classList.add("hover")}},{key:"hoverEnd",value:function(t){t.target.classList.remove("hover")}},{key:"render",value:function(){var t=this,n=this.state.list.map(function(n,e){return f.a.createElement("li",{className:"history-list-li",key:e,onTouchStart:function(n){return t.hoverStart(n)},onTouchEnd:function(n){return t.hoverEnd(n)}},f.a.createElement("a",{className:"history-list-a",href:n.url},n.name))});return f.a.createElement("ul",{className:"history-list"},n)}}]),n}(d.Component));n.default=p},nAVI:function(t,n,e){n=t.exports=e("bKW+")(void 0),n.push([t.i,".history-list {\n  width: 9.16rem;\n  margin: 0 auto 0.26666667rem;\n}\n.history-list-li {\n  width: 9.16rem;\n  margin-top: 0.26666667rem;\n  text-align: center;\n}\n.history-list-a {\n  font-size: 0.4rem;\n  line-height: 0.90666667rem;\n}\n.hover {\n  color: #d52918;\n  text-decoration: underline;\n}\n",""])},pKXO:function(t,n,e){var r=e("nAVI");"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;e("P2Jt")(r,o);r.locals&&(t.exports=r.locals)}});
//# sourceMappingURL=9.d4425.js.map