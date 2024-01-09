"use strict";(self.webpackChunkSoyaMilk_design=self.webpackChunkSoyaMilk_design||[]).push([[506],{98076:function(S,p,t){t.r(p);var x=t(39502),b=t(25438),y=t(10948),M=t(98987),C=t(42622),D=t(51134),m=t(29429),g=t(20235),j=t(67294),f=t(85893);function h(){var v=(0,g.eL)(),l=v.texts;return(0,f.jsx)(g.dY,{children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"markdown",children:(0,f.jsxs)("h1",{id:"\u7EC4\u4EF6\u603B\u89C8",children:[(0,f.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7EC4\u4EF6\u603B\u89C8",children:(0,f.jsx)("span",{className:"icon icon-link"})}),"\u7EC4\u4EF6\u603B\u89C8"]})})})})}p.default=h},39502:function(S,p,t){var x=t(97857),b=t.n(x),y=t(5574),M=t.n(y),C=t(20235),D=t(67294),m=t(51134),g=t(85893),j={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,o=[];return Object.entries(e.properties||{}).forEach(function(a){var n,r=M()(a,2),i=r[0],u=r[1];o.push("".concat(i).concat((n=e.required)!==null&&n!==void 0&&n.includes(i)?"":"?",": ").concat(u.type==="object"?"object":s.toString(u)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,o=e.signature;if(!o)return"Function";var a="oneOf"in o?o.oneOf:[o];return a.map(function(n){return"".concat(n.isAsync?"async ":"","(").concat(n.arguments.map(function(r){return"".concat(r.key,": ").concat(s.toString(r))}).join(", "),") => ").concat(s.toString(n.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(o){return s.getValidClassName(o)||s.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},f=function(e){var s=useState(function(){return j.toString(e)}),o=_slicedToArray(s,2),a=o[0],n=o[1];return useEffect(function(){n(j.toString(e))},[e]),_jsx("code",{children:a})},h=function(e){var s,o=useRouteMeta(),a=o.frontmatter,n=useAtomAssets(),r=n.components,i=e.id||a.atomId,u=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var _=r==null?void 0:r[i];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:u.formatMessage({id:"api.component.name"})}),_jsx("th",{children:u.formatMessage({id:"api.component.description"})}),_jsx("th",{children:u.formatMessage({id:"api.component.type"})}),_jsx("th",{children:u.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:_&&(s=_.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(_.propsConfig.properties).map(function(c){var d,A=_slicedToArray(c,2),E=A[0],O=A[1];return _jsxs("tr",{children:[_jsx("td",{children:E}),_jsx("td",{children:O.description||"--"}),_jsx("td",{children:_jsx(f,_objectSpread({},O))}),_jsx("td",{children:_jsx("code",{children:(d=_.propsConfig.required)!==null&&d!==void 0&&d.includes(E)?u.formatMessage({id:"api.component.required"}):JSON.stringify(O.default)||"--"})})]},E)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:u.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i})})})})]})})},v=null},25438:function(S,p,t){var x=t(97857),b=t(67294),y=t(85893),M=function(m){return _jsx("span",_objectSpread({className:"dumi-default-badge"},m))},C=null},51134:function(S,p,t){var x=t(97857),b=t(5574),y=t(13769),M=t(93096),C=t(67294),D=t(85893),m=null,g=function(h){var v=h.children,l=_objectWithoutProperties(h,m),e=useRef(null),s=useState(!1),o=_slicedToArray(s,2),a=o[0],n=o[1],r=useState(!1),i=_slicedToArray(r,2),u=i[0],_=i[1];return useEffect(function(){var c=e.current;if(c){var d=throttle(function(){n(c.scrollLeft>0),_(c.scrollLeft<c.scrollWidth-c.offsetWidth)},100);return d(),c.addEventListener("scroll",d),window.addEventListener("resize",d),function(){c.removeEventListener("scroll",d),window.removeEventListener("resize",d)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":a||void 0,"data-right-folded":u||void 0,children:_jsx("table",_objectSpread(_objectSpread({},l),{},{children:v}))})})},j=null},29429:function(S,p,t){var x=t(97857),b=t(5574),y=t(19632),M=t(3190),C=t(67294),D=t(85893);function m(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(a).forEach(function(i,u){var _="".concat(n?"".concat(n,"-"):"").concat(u);switch(i==null?void 0:i.type){case"ul":{var c,d=((c=r[r.length-1])===null||c===void 0?void 0:c.children)||r,A=m(i.props.children||[],_);d.push.apply(d,_toConsumableArray(A));break}case"li":{var E=m(i.props.children,_);r.push({title:[].concat(i.props.children).filter(function(O){return O.type!=="ul"}),key:_,children:E,isLeaf:!E.length});break}default:}}),r}var g=function(n){var r=useState(m(n)),i=_slicedToArray(r,2),u=i[0],_=i[1];return useEffect(function(){_(m(n))},[n]),u},j=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},f=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):i?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},h=function(){return{height:0,opacity:0}},v=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},l=function(n){return{height:n?n.offsetHeight:0}},e=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},s={motionName:"ant-motion-collapse",onAppearStart:h,onEnterStart:h,onAppearActive:v,onEnterActive:v,onLeaveStart:l,onLeaveActive:h,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},o=function(a){var n=g(a.children),r=createRef(),i=function(_,c){var d=c.isLeaf;d||_.shiftKey||_.metaKey||_.ctrlKey||r.current.onNodeExpand(_,c)};return _jsx(Tree,{className:"dumi-default-tree",icon:j,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},s),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:a.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:f})}}}]);
