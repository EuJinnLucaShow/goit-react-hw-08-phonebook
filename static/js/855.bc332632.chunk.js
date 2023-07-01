"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[855],{1855:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var o=t(6907),a=t(9434),r=t(2186),c=t(2639),i=t(4942),l=t(9439),s=t(1694),d=t.n(s),u=t(7462),f=t(1413),p=t(4925),m=t(5179),b=t(2791),h=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],v=(0,b.forwardRef)((function(e,n){var t,o=e.prefixCls,a=void 0===o?"rc-checkbox":o,r=e.className,c=e.style,s=e.checked,v=e.disabled,g=e.defaultChecked,x=void 0!==g&&g,y=e.type,Z=void 0===y?"checkbox":y,C=e.title,k=e.onChange,w=(0,p.Z)(e,h),S=(0,b.useRef)(null),j=(0,m.Z)(x,{value:s}),O=(0,l.Z)(j,2),E=O[0],I=O[1];(0,b.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=S.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=S.current)||void 0===e||e.blur()},input:S.current}}));var P=d()(a,r,(t={},(0,i.Z)(t,"".concat(a,"-checked"),E),(0,i.Z)(t,"".concat(a,"-disabled"),v),t));return b.createElement("span",{className:P,title:C,style:c},b.createElement("input",(0,u.Z)({},w,{className:"".concat(a,"-input"),ref:S,onChange:function(n){v||("checked"in e||I(n.target.checked),null===k||void 0===k||k({target:(0,f.Z)((0,f.Z)({},e),{},{type:Z,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:v,checked:!!E,type:Z})),b.createElement("span",{className:"".concat(a,"-inner")}))})),g=v,x=t(1929),y=t(9125),Z=t(1940),C=t(3433),k=t(1818),w=t(7119),S=t(7521),j=t(9922),O=t(5564),E=new w.E4("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),I=function(e){var n,t,o,a,r,c,l,s,d,u,f=e.checkboxCls,p="".concat(f,"-wrapper");return[(o={},(0,i.Z)(o,"".concat(f,"-group"),Object.assign(Object.assign({},(0,S.Wf)(e)),(0,i.Z)({display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS},"> ".concat(e.antCls,"-row"),{flex:1}))),(0,i.Z)(o,p,Object.assign(Object.assign({},(0,S.Wf)(e)),(n={display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"}},(0,i.Z)(n,"& + ".concat(p),{marginInlineStart:0}),(0,i.Z)(n,"&".concat(p,"-in-form-item"),{'input[type="checkbox"]':{width:14,height:14}}),n))),(0,i.Z)(o,f,Object.assign(Object.assign({},(0,S.Wf)(e)),(t={position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"center"},(0,i.Z)(t,"".concat(f,"-input"),(0,i.Z)({position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0},"&:focus-visible + ".concat(f,"-inner"),Object.assign({},(0,S.oN)(e)))),(0,i.Z)(t,"".concat(f,"-inner"),{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:"".concat(e.lineWidthBold,"px solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}}),(0,i.Z)(t,"& + span",{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}),t))),o),(0,i.Z)({},f,{"&-indeterminate":(0,i.Z)({},"".concat(f,"-inner"),{"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}})}),(r={},(0,i.Z)(r,"".concat(p,":hover ").concat(f,":after"),{visibility:"visible"}),(0,i.Z)(r,"\n        ".concat(p,":not(").concat(p,"-disabled),\n        ").concat(f,":not(").concat(f,"-disabled)\n      "),(0,i.Z)({},"&:hover ".concat(f,"-inner"),{borderColor:e.colorPrimary})),(0,i.Z)(r,"".concat(p,":not(").concat(p,"-disabled)"),(a={},(0,i.Z)(a,"&:hover ".concat(f,"-checked:not(").concat(f,"-disabled) ").concat(f,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),(0,i.Z)(a,"&:hover ".concat(f,"-checked:not(").concat(f,"-disabled):after"),{borderColor:e.colorPrimaryHover}),a)),r),(s={},(0,i.Z)(s,"".concat(f,"-checked"),(c={},(0,i.Z)(c,"".concat(f,"-inner"),{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}}),(0,i.Z)(c,"&:after",{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:"".concat(e.lineWidthBold,"px solid ").concat(e.colorPrimary),animationName:E,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:"all ".concat(e.motionDurationSlow)}),c)),(0,i.Z)(s,"\n        ".concat(p,"-checked:not(").concat(p,"-disabled),\n        ").concat(f,"-checked:not(").concat(f,"-disabled)\n      "),(l={},(0,i.Z)(l,"&:hover ".concat(f,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),(0,i.Z)(l,"&:hover ".concat(f,":after"),{borderColor:e.colorPrimaryHover}),l)),s),(u={},(0,i.Z)(u,"".concat(p,"-disabled"),{cursor:"not-allowed"}),(0,i.Z)(u,"".concat(f,"-disabled"),(d={},(0,i.Z)(d,"&, ".concat(f,"-input"),{cursor:"not-allowed",pointerEvents:"none"}),(0,i.Z)(d,"".concat(f,"-inner"),{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}}),(0,i.Z)(d,"&:after",{display:"none"}),(0,i.Z)(d,"& + span",{color:e.colorTextDisabled}),(0,i.Z)(d,"&".concat(f,"-indeterminate ").concat(f,"-inner::after"),{background:e.colorTextDisabled}),d)),u)]};function P(e,n){var t=(0,j.TS)(n,{checkboxCls:".".concat(e),checkboxSize:n.controlInteractiveSize});return[I(t)]}var N=(0,O.Z)("Checkbox",(function(e,n){return[P(n.prefixCls,e)]})),z=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},M=b.createContext(null),D=function(e,n){var t=e.defaultValue,o=e.children,a=e.options,r=void 0===a?[]:a,c=e.prefixCls,s=e.className,u=e.rootClassName,f=e.style,p=e.onChange,m=z(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),h=b.useContext(x.E_),v=h.getPrefixCls,g=h.direction,y=b.useState(m.value||t||[]),Z=(0,l.Z)(y,2),w=Z[0],S=Z[1],j=b.useState([]),O=(0,l.Z)(j,2),E=O[0],I=O[1];b.useEffect((function(){"value"in m&&S(m.value||[])}),[m.value]);var P=function(){return r.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},D=v("checkbox",c),_="".concat(D,"-group"),V=N(D),B=(0,l.Z)(V,2),R=B[0],T=B[1],W=(0,k.Z)(m,["value","disabled"]);r&&r.length>0&&(o=P().map((function(e){return b.createElement(H,{prefixCls:D,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:w.includes(e.value),onChange:e.onChange,className:"".concat(_,"-item"),style:e.style,title:e.title},e.label)})));var F={toggleOption:function(e){var n=w.indexOf(e.value),t=(0,C.Z)(w);-1===n?t.push(e.value):t.splice(n,1),"value"in m||S(t);var o=P();null===p||void 0===p||p(t.filter((function(e){return E.includes(e)})).sort((function(e,n){return o.findIndex((function(n){return n.value===e}))-o.findIndex((function(e){return e.value===n}))})))},value:w,disabled:m.disabled,name:m.name,registerValue:function(e){I((function(n){return[].concat((0,C.Z)(n),[e])}))},cancelValue:function(e){I((function(n){return n.filter((function(n){return n!==e}))}))}},L=d()(_,(0,i.Z)({},"".concat(_,"-rtl"),"rtl"===g),s,u,T);return R(b.createElement("div",Object.assign({className:L,style:f},W,{ref:n}),b.createElement(M.Provider,{value:F},o)))},_=b.forwardRef(D),V=b.memo(_),B=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},R=function(e,n){var t,o,a=e.prefixCls,r=e.className,c=e.rootClassName,s=e.children,u=e.indeterminate,f=void 0!==u&&u,p=e.style,m=e.onMouseEnter,h=e.onMouseLeave,v=e.skipGroup,C=void 0!==v&&v,k=e.disabled,w=B(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),S=b.useContext(x.E_),j=S.getPrefixCls,O=S.direction,E=b.useContext(M),I=b.useContext(Z.aM).isFormItemInput,P=b.useContext(y.Z),z=null!==(o=(null===E||void 0===E?void 0:E.disabled)||k)&&void 0!==o?o:P,D=b.useRef(w.value);b.useEffect((function(){null===E||void 0===E||E.registerValue(w.value)}),[]),b.useEffect((function(){if(!C)return w.value!==D.current&&(null===E||void 0===E||E.cancelValue(D.current),null===E||void 0===E||E.registerValue(w.value),D.current=w.value),function(){return null===E||void 0===E?void 0:E.cancelValue(w.value)}}),[w.value]);var _=j("checkbox",a),V=N(_),R=(0,l.Z)(V,2),H=R[0],T=R[1],W=Object.assign({},w);E&&!C&&(W.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),E.toggleOption&&E.toggleOption({label:s,value:w.value})},W.name=E.name,W.checked=E.value.includes(w.value));var F=d()((t={},(0,i.Z)(t,"".concat(_,"-wrapper"),!0),(0,i.Z)(t,"".concat(_,"-rtl"),"rtl"===O),(0,i.Z)(t,"".concat(_,"-wrapper-checked"),W.checked),(0,i.Z)(t,"".concat(_,"-wrapper-disabled"),z),(0,i.Z)(t,"".concat(_,"-wrapper-in-form-item"),I),t),r,c,T),L=d()((0,i.Z)({},"".concat(_,"-indeterminate"),f),T),G=f?"mixed":void 0;return H(b.createElement("label",{className:F,style:p,onMouseEnter:m,onMouseLeave:h},b.createElement(g,Object.assign({"aria-checked":G},W,{prefixCls:_,className:L,disabled:z,ref:n})),void 0!==s&&b.createElement("span",null,s)))};var H=b.forwardRef(R),T=H;T.Group=V,T.__ANT_CHECKBOX=!0;var W=T,F=t(7309),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},G=t(4291),X=function(e,n){return b.createElement(G.Z,(0,u.Z)({},e,{ref:n,icon:L}))};var q=b.forwardRef(X),A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},K=function(e,n){return b.createElement(G.Z,(0,u.Z)({},e,{ref:n,icon:A}))};var J=b.forwardRef(K),Q=t(8724),U=t(3329),Y=function(){var e=(0,a.I0)();return(0,U.jsxs)(r.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(n){e((0,Q.Ib)(n))},children:[(0,U.jsx)(r.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,U.jsx)(c.Z,{prefix:(0,U.jsx)(q,{className:"site-form-item-icon"}),placeholder:"Email"})}),(0,U.jsx)(r.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,U.jsx)(c.Z,{prefix:(0,U.jsx)(J,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),(0,U.jsx)(r.Z.Item,{children:(0,U.jsx)(r.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,U.jsx)(W,{children:"Remember me"})})}),(0,U.jsx)(r.Z.Item,{children:(0,U.jsx)(F.ZP,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})};function $(){return(0,U.jsx)(o.B6,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(o.ql,{children:(0,U.jsx)("title",{children:"Login"})}),(0,U.jsx)(Y,{})]})})}}}]);
//# sourceMappingURL=855.bc332632.chunk.js.map