webpackJsonp([9],{"3mpV":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Zx67"),o=n.n(r),i=n("Zrlr"),a=n.n(i),s=n("wxAW"),l=n.n(s),u=n("zwoO"),c=n.n(u),h=n("Pf15"),m=n.n(h),f=n("U7vG"),v=n.n(f),d=n("pKXO"),p=(n.n(d),function(t){function e(){a()(this,e);var t=c()(this,(e.__proto__||o()(e)).call(this));return t.state={list:[]},document.title="党史辞典",t}return m()(e,t),l()(e,[{key:"componentWillMount",value:function(){var t=this,e={method:"GET"};fetch("/red-wx/RedWeb/RedWeb/TextUrl.php",e).then(function(t){return t.json()}).then(function(e){t.setState({list:e})})}},{key:"hoverStart",value:function(t){t.target.classList.add("hover")}},{key:"hoverEnd",value:function(t){t.target.classList.remove("hover")}},{key:"render",value:function(){var t=this,e=this.state.list.map(function(e,n){return v.a.createElement("li",{className:"history-list-li",key:n,onTouchStart:function(e){return t.hoverStart(e)},onTouchEnd:function(e){return t.hoverEnd(e)}},v.a.createElement("a",{className:"history-list-a",href:e.url},e.name))});return v.a.createElement("ul",{className:"history-list"},e)}}]),e}(f.Component));e.default=p},nAVI:function(t,e,n){e=t.exports=n("bKW+")(void 0),e.push([t.i,".history-list {\n  width: 9.16rem;\n  margin: 0 auto 0.26666667rem;\n}\n.history-list-li {\n  width: 9.16rem;\n  margin-top: 0.26666667rem;\n  text-align: center;\n}\n.history-list-a {\n  font-size: 0.4rem;\n  line-height: 0.90666667rem;\n}\n.hover {\n  color: #d52918;\n  text-decoration: underline;\n}\n",""])},pKXO:function(t,e,n){var r=n("nAVI");"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n("P2Jt")(r,o);r.locals&&(t.exports=r.locals)}});
//# sourceMappingURL=9.127a0.js.map