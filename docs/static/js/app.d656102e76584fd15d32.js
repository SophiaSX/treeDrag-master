webpackJsonp([1],{"9h0J":function(e,n){},NHnr:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("7+uW"),i=a("DAYN"),r={name:"treeDrag",components:{draggable:a.n(i).a},data:()=>({data:[{name:"我是一级分类1",id:1,children:[{name:"我是二级分类10",id:10,children:[{name:"我是三级分类100",id:100},{name:"我是三级分类101",id:101}]},{name:"我是二级分类11",id:11,children:[{name:"我是三级分类110",id:110},{name:"我是三级分类111",id:101}]}]},{name:"我是一级分类2",id:2,children:[{name:"我是二级分类20",id:20,children:[{name:"我是三级分类210",id:200}]}]}]})},s={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"treeDrag"},[a("draggable",{attrs:{list:e.data,options:{forceFallback:!0}}},e._l(e.data,function(n){return a("div",{key:n.id,staticClass:"firstLevel"},[a("div",{staticClass:"leverFirst"},[e._v("\n          "+e._s(n.name)+"\n        ")]),e._v(" "),a("draggable",{attrs:{list:n.children,options:{forceFallback:!0}}},e._l(n.children,function(n){return a("div",{key:n.id,staticClass:"SecondLevel"},[a("div",{staticClass:"leverSecond"},[e._v("\n            "+e._s(n.name)+"\n          ")]),e._v(" "),a("draggable",{attrs:{list:n.children,options:{forceFallback:!0}}},e._l(n.children,function(n){return a("div",{key:n.id,staticClass:"ThirdLevel"},[a("div",{staticClass:"leverThird"},[e._v("\n                  "+e._s(n.name)+"\n                ")])])}),0)],1)}),0)],1)}),0)],1)},staticRenderFns:[]};var l={name:"App",components:{treeDrag:a("VU/8")(r,s,!1,function(e){a("9h0J")},"data-v-28498f56",null).exports}},d={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("treeDrag")],1)},staticRenderFns:[]};var c=a("VU/8")(l,d,!1,function(e){a("e/9Z")},null,null).exports;t.a.config.productionTip=!1,new t.a({el:"#app",components:{App:c},template:"<App/>"})},"e/9Z":function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.d656102e76584fd15d32.js.map