(function(t){function e(e){for(var o,a,l=e[0],s=e[1],c=e[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4fc9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("952a"),i=n.n(r),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowy"},[n("div",{staticClass:"flowy-tree flex flex-row flex-no-wrap relative overflow-auto"},t._l(t.parentNodes,(function(e){return n("FlowyNode",t._g(t._b({key:e.id,attrs:{node:e}},"FlowyNode",Object.assign({},t.$props),!1),Object.assign({},t.$listeners)))})),1)])},l=[],s=n("2769"),c=n.n(s),d=n("9380"),u=n.n(d),p={props:{nodes:{type:Array,required:!1},blocks:{type:Array,required:!0}},data:function(){return{}},computed:{parentNodes:function(){return u()(this.nodes,{parentId:-1})},rows:function(){return[this.parentNodes]}},mounted:function(){},destroyed:function(){},methods:{getChildren:function(t){return u()(this.nodes,{parentId:t})},onDragEnd:function(t){},onDragStart:function(t){}}},f=p,h=(n("af83"),n("2877")),b=Object(h["a"])(f,a,l,!1,null,null,null),g=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowy-node flex flex-col flex-no-wrap items-center relative overflow-visible"},[n("flowy-block",t._b({ref:"block"},"flowy-block",Object.assign({},t.$props,t.passedProps),!1),[!t.isTopParent&&t.mounted?n("div",{staticClass:"arrowblock -mt-64px overflow-visible",style:t.arrowBlockStyle},[n("svg",{attrs:{preserveaspectratio:"none",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:t.linePath,stroke:"#C5CCD0","stroke-width":"2px"}})])]):t._e(),t.hasChildren&&t.mounted?n("div",{staticClass:"arrowblock-down overflow-visible",style:t.arrowBlockStyle},[n("svg",{attrs:{preserveaspectratio:"none",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:t.linePathDown,stroke:"#C5CCD0","stroke-width":"2px"}})])]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIndicator,expression:"showIndicator"}],staticClass:"indicator"}),n("dropzone",{staticClass:"node-dropzone",attrs:{data:t.node,group:"first_group"},on:{enter:function(e){return t.onEnterDrag(e)},leave:function(e){return t.onLeaveDrag(e)},drop:function(e){return t.onDragStop(e)},receive:function(e){return t.onDragReceive(e)}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"node-dropzone",class:e},[n("div",{},[t._v("This is a dropzone")])])]}}])})],1),n("div",{staticClass:"flowy-tree flex flex-row flex-no-wrap overflow-visible mt-64px"},[t._l(t.children,(function(e,o){return[n("FlowyNode",t._g(t._b({key:e.id,ref:e.id,refInFor:!0,attrs:{index:o,"total-children":t.children.length,node:e,"parent-x":t.xPos}},"FlowyNode",Object.assign({},t.$props),!1),Object.assign({},t.$listeners)))]}))],2)],1)},m=[];n("99af"),n("a9e3");function w(t){var e=t.getBoundingClientRect();return{left:e.left+window.scrollX,top:e.top+window.scrollY}}var x={props:{index:{type:Number,required:!1},totalChildren:{type:Number,required:!1},node:{type:Object,required:!0},blocks:{type:Array,required:!0},nodes:{type:Array,required:!0},parentX:{type:Number,required:!1}},data:function(){return{hoveringWithDrag:!1,mounted:!1,xPosProxy:0}},mounted:function(){this.mounted=!0},destroyed:function(){},updated:function(){var t=this;this.$nextTick((function(){void 0!==t.$refs.block&&(t.xPosProxy=w(t.$refs.block.$el).left)}))},computed:{xPos:function(){return this.mounted?this.xPosProxy:0},hasChildren:function(){return this.children.length>0},showIndicator:function(){return this.hoveringWithDrag},arrowBlockStyle:function(){return{marginLeft:"".concat(this.blockWidth/2,"px")}},lineTotalHeight:function(){return 64},isOddChildren:function(){return 1===Math.abs(this.totalChildren%2)},isMiddle:function(){return this.isOddChildren&&this.index+1===Math.ceil(this.totalChildren/2)},isLeftSide:function(){return this.index+1<=Math.ceil(this.totalChildren/2)},lineStartX:function(){return this.blockWidth/2},blockWidth:function(){return this.$refs.block.$el.offsetWidth},holderWidth:function(){return this.$refs.block.$el.parentElement.offsetWidth},rowWidth:function(){return this.$refs.block.$el.parentElement.parentElement.offsetWidth},isTopParent:function(){return-1===this.node.parentId},children:function(){return u()(this.nodes,{parentId:this.node.id})},passedProps:function(){return this.node.props},linePathDown:function(){return"M0 0L0 ".concat(this.lineTotalHeight/2,"L0 ").concat(this.lineTotalHeight/2,"L0 ").concat(this.lineTotalHeight/2)},linePath:function(){var t=this.lineTotalHeight/2,e=this.lengthFromMiddle,n=this.isLeftSide?"":"-";return"M".concat(n).concat(e," ").concat(t,"L").concat(n).concat(e," ").concat(t,"L0 ").concat(t,"L0 ").concat(this.lineTotalHeight)},lengthFromMiddle:function(){return Math.abs(this.xPos-this.parentX)}},methods:{onDragStop:function(t){this.hoveringWithDrag=!1},addNode:function(t){console.log(this),this.$emit("added-node",t)},onDragReceive:function(t){this.hoveringWithDrag=!1;var e=this.node;this.$emit("added-node",{node:{parentId:e.id,block:"example-block",props:{text:"Parent block"}}})},onEnterDrag:function(t){this.hoveringWithDrag=!0},onLeaveDrag:function(t){this.hoveringWithDrag=!1}}},y=x,k=Object(h["a"])(y,v,m,!1,null,null,null),_=k.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowy-block mr-24px relative"},[t._t("default"),n(t.component,t._b({ref:"block",tag:"component"},"component",Object.assign({},t.$props,t.$attrs,t.passedProps),!1))],2)},P=[],D={props:{node:{type:Object,required:!0}},data:function(){return{}},mounted:function(){},destroyed:function(){},computed:{component:function(){return this.node.block},passedProps:function(){return this.node.props}},methods:{onDragEnd:function(t){},onDragStart:function(t){}},render:function(t){var e=this.$scopedSlots.default()[0];return e}},O=D,$=Object(h["a"])(O,C,P,!1,null,null,null),j=$.exports,S={install:function(t){var e=t;e.use(i.a),e.component("Flowy",g),e.component("FlowyNode",_),e.component("FlowyBlock",j)}},I=S,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"example-block bg-white"},[t._v(" example block "),n("div",[t._v(" "+t._s(t.title))])])},M=[],T={props:{title:{type:String,required:!1}},data:function(){return{}},mounted:function(){},destroyed:function(){},methods:{}},W=T,E=(n("a492"),Object(h["a"])(W,N,M,!1,null,null,null)),F=E.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page main flex flex-row flex-no-wrap"},[n("div",{staticClass:"container overflow-auto z-40"},[n("h1",[t._v("Vue Flowy")]),n("flowy",{attrs:{nodes:t.nodes,blocks:t.blocks},on:{onDrag:t.onDragStart,"added-node":function(e){return t.addNode(e)}}})],1),n("div",{staticClass:"side z-50"},[t._v(" Drag from below "),n("draggable",{attrs:{"with-handle":!0,"draggable-mirror":{xAxis:!1,appendTo:"body"},group:"flowy"},on:{start:function(e){return t.onDragStart(e)}}},[n("example-block",{staticClass:"draggable"})],1)],1)])},q=[],z=n("5530");function B(){return Math.floor(1e4*Math.random())+1}var H={name:"app",components:{Flowy:g,FlowyNode:_},data:function(){return{holder:[],dragging:!1,blocks:[{name:"example-block"}],nodes:[{id:"1",parentId:-1,block:"example-block",props:{text:"Parent block"}},{id:"100",parentId:-1,block:"example-block",props:{text:"Parent block"}},{id:"2",parentId:"1",block:"example-block"},{id:"3",parentId:"1",block:"example-block"},{id:"4",parentId:"1",block:"example-block"},{id:"5",parentId:"1",block:"example-block"},{id:"6",parentId:"3",block:"example-block"},{id:"7",parentId:"3",block:"example-block"},{id:"8",parentId:"3",block:"example-block"}]}},methods:{addNode:function(t){var e=B();while(void 0!==c()(this.nodes,{id:e}))e=B();this.nodes.push(Object(z["a"])(Object(z["a"])({},t.node),{},{id:e}))},onDrop:function(t){this.dragging=!1},onDragStart:function(t){this.dragging=!0}},watch:{}},A=H,X=(n("5c0b"),Object(h["a"])(A,L,q,!1,null,null,null)),R=X.exports;o["a"].use(I),o["a"].component("ExampleBlock",F),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(t,e,n){},a202:function(t,e,n){},a492:function(t,e,n){"use strict";var o=n("4fc9"),r=n.n(o);r.a},af83:function(t,e,n){"use strict";var o=n("a202"),r=n.n(o);r.a}});
//# sourceMappingURL=app.56f5f97a.js.map