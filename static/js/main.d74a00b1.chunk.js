(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),i=a.n(r),l=(a(23),function(e){var t=e.title;return n.a.createElement("div",{className:"navbar"},t)}),s=a(11),o=a(12),u=a(15),m=a(13),p=a(16),d=a(2),f=a(14),b=a.n(f),h=(a(43),function(e){var t=e.data;return n.a.createElement("a",{className:"recipe",href:t.publisher_url,target:"_blank"},n.a.createElement("img",{className:"recipe__image",src:t.image_url,alt:t.title}),n.a.createElement("div",{className:"recipe__title"},t.title),n.a.createElement("div",{className:"recipe__source"},"From: ",t.publisher))}),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={recipes:[]},a.getRecipes=a.getRecipes.bind(Object(d.a)(Object(d.a)(a))),a.getRecipes(1),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"getRecipes",value:function(e){var t=this;b.a.get("".concat("https://www.food2fork.com/api/search?key=47392cbd53afdcf2d2e54ef60fc47db6&sort=t","page=").concat(e)).then(function(e){t.setState({recipes:e.data.recipes})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return n.a.createElement("div",{className:"feed"},void 0!==this.state.recipes?this.state.recipes.map(function(e,t){return n.a.createElement(h,{key:t,data:e})}):n.a.createElement("div",null,"limit reached"))}}]),t}(c.Component),g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l,{title:"Food Feed"}),n.a.createElement(v,null))};i.a.render(n.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d74a00b1.chunk.js.map