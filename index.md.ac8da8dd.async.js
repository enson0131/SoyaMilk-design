"use strict";(self.webpackChunkSoyaMilk_design=self.webpackChunkSoyaMilk_design||[]).push([[506],{98076:function(b,j,n){n.r(j);var M=n(39502),S=n(25438),O=n(10948),y=n(24138),A=n(92004),T=n(51134),m=n(29429),x=n(82055),h=n(67294),_=n(85893);function g(){var p=(0,x.eL)(),o=p.texts;return(0,_.jsx)(x.dY,{children:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h1",{id:"\u7EC4\u4EF6\u603B\u89C8",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7EC4\u4EF6\u603B\u89C8",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u7EC4\u4EF6\u603B\u89C8"]})})})})}j.default=g},39502:function(b,j,n){var M=n(97857),S=n.n(M),O=n(5574),y=n.n(O),A=n(82055),T=n(67294),m=n(51134),x=n(85893),h={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var a=this,l=[];return Object.entries(e.properties||{}).forEach(function(s){var t,r=y()(s,2),i=r[0],d=r[1];l.push("".concat(i).concat((t=e.required)!==null&&t!==void 0&&t.includes(i)?"":"?",": ").concat(d.type==="object"?"object":a.toString(d)))}),l.length?"{ ".concat(l.join("; ")," }"):"{}"},array:function(e){if(e.items){var a=this.getValidClassName(e.items);return a?"".concat(a,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var a=this,l=e.signature;if(!l)return"Function";var s="oneOf"in l?l.oneOf:[l];return s.map(function(t){return"".concat(t.isAsync?"async ":"","(").concat(t.arguments.map(function(r){return"".concat(r.key,": ").concat(a.toString(r))}).join(", "),") => ").concat(a.toString(t.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(a){return JSON.stringify(a)}).join(" | ")},oneOf:function(e){var a=this;return e.oneOf.map(function(l){return a.getValidClassName(l)||a.toString(l)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},_=function(e){var a=useState(function(){return h.toString(e)}),l=_slicedToArray(a,2),s=l[0],t=l[1];return useEffect(function(){t(h.toString(e))},[e]),_jsx("code",{children:s})},g=function(e){var a,l=useRouteMeta(),s=l.frontmatter,t=useAtomAssets(),r=t.components,i=e.id||s.atomId,d=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var u=r==null?void 0:r[i];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:d.formatMessage({id:"api.component.name"})}),_jsx("th",{children:d.formatMessage({id:"api.component.description"})}),_jsx("th",{children:d.formatMessage({id:"api.component.type"})}),_jsx("th",{children:d.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:u&&(a=u.propsConfig)!==null&&a!==void 0&&a.properties?Object.entries(u.propsConfig.properties).map(function(v){var f,C=_slicedToArray(v,2),E=C[0],c=C[1];return _jsxs("tr",{children:[_jsx("td",{children:E}),_jsx("td",{children:c.description||"--"}),_jsx("td",{children:_jsx(_,_objectSpread({},c))}),_jsx("td",{children:_jsx("code",{children:(f=u.propsConfig.required)!==null&&f!==void 0&&f.includes(E)?d.formatMessage({id:"api.component.required"}):JSON.stringify(c.default)||"--"})})]},E)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:d.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i})})})})]})})},p=null},25438:function(b,j,n){var M=n(97857),S=n(67294),O=n(85893),y=function(m){return _jsx("span",_objectSpread({className:"dumi-default-badge"},m))},A=null},51134:function(b,j,n){n.d(j,{Z:function(){return o}});var M=n(97857),S=n.n(M),O=n(5574),y=n.n(O),A=n(13769),T=n.n(A),m=n(93096),x=n.n(m),h=n(67294),_=n(85893),g=["children"],p=function(a){var l=a.children,s=T()(a,g),t=(0,h.useRef)(null),r=(0,h.useState)(!1),i=y()(r,2),d=i[0],u=i[1],v=(0,h.useState)(!1),f=y()(v,2),C=f[0],E=f[1];return(0,h.useEffect)(function(){var c=t.current;if(c){var P=x()(function(){u(c.scrollLeft>0),E(c.scrollLeft<c.scrollWidth-c.offsetWidth)},100);return P(),c.addEventListener("scroll",P),window.addEventListener("resize",P),function(){c.removeEventListener("scroll",P),window.removeEventListener("resize",P)}}},[]),(0,_.jsx)("div",{className:"dumi-default-table",children:(0,_.jsx)("div",{className:"dumi-default-table-content",ref:t,"data-left-folded":d||void 0,"data-right-folded":C||void 0,children:(0,_.jsx)("table",S()(S()({},s),{},{children:l}))})})},o=p},29429:function(b,j,n){var M=n(97857),S=n(5574),O=n(19632),y=n(3190),A=n(67294),T=n(85893);function m(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(s).forEach(function(i,d){var u="".concat(t?"".concat(t,"-"):"").concat(d);switch(i==null?void 0:i.type){case"ul":{var v,f=((v=r[r.length-1])===null||v===void 0?void 0:v.children)||r,C=m(i.props.children||[],u);f.push.apply(f,_toConsumableArray(C));break}case"li":{var E=m(i.props.children,u);r.push({title:[].concat(i.props.children).filter(function(c){return c.type!=="ul"}),key:u,children:E,isLeaf:!E.length});break}default:}}),r}var x=function(t){var r=useState(m(t)),i=_slicedToArray(r,2),d=i[0],u=i[1];return useEffect(function(){u(m(t))},[t]),d},h=function(t){var r=t.isLeaf,i=t.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},_=function(t){var r=t.isLeaf,i=t.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):i?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},g=function(){return{height:0,opacity:0}},p=function(t){var r=t.scrollHeight;return{height:r,opacity:1}},o=function(t){return{height:t?t.offsetHeight:0}},e=function(t,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},a={motionName:"ant-motion-collapse",onAppearStart:g,onEnterStart:g,onAppearActive:p,onEnterActive:p,onLeaveStart:o,onLeaveActive:g,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},l=function(s){var t=x(s.children),r=createRef(),i=function(u,v){var f=v.isLeaf;f||u.shiftKey||u.metaKey||u.ctrlKey||r.current.onNodeExpand(u,v)};return _jsx(Tree,{className:"dumi-default-tree",icon:h,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},a),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:s.title||"<root>",children:t}],defaultExpandAll:!0,switcherIcon:_})}}}]);
