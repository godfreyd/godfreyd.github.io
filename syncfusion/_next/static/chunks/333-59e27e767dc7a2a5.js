"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{1719:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1902:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},3434:(e,t,r)=>{r.d(t,{UC:()=>eM,YJ:()=>eA,In:()=>eP,q7:()=>e_,VF:()=>eV,p4:()=>eB,JU:()=>eH,ZL:()=>eD,bL:()=>eE,wn:()=>eF,PP:()=>eO,wv:()=>eG,l9:()=>eI,WT:()=>eR,LM:()=>eL});var n=r(2115),l=r(7650);function o(e,[t,r]){return Math.min(r,Math.max(t,e))}var a=r(3610),i=r(2576),s=r(8068),u=r(8166),d=r(4256),c=r(9674),p=r(2292),v=r(196),f=r(7668),h=r(7379),m=r(7323),g=r(3360),w=r(2317),x=r(1524),y=r(1488),b=r(6611),S=r(3543),C=r(5587),j=r(4065),k=r(5155),T=[" ","Enter","ArrowUp","ArrowDown"],N=[" ","Enter"],E="Select",[I,R,P]=(0,i.N)(E),[D,M]=(0,u.A)(E,[P,h.Bk]),L=(0,h.Bk)(),[A,H]=D(E),[_,B]=D(E),V=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:a,value:i,defaultValue:s,onValueChange:u,dir:c,name:p,autoComplete:v,disabled:m,required:g,form:w}=e,x=L(t),[b,S]=n.useState(null),[C,j]=n.useState(null),[T,N]=n.useState(!1),E=(0,d.jH)(c),[R=!1,P]=(0,y.i)({prop:l,defaultProp:o,onChange:a}),[D,M]=(0,y.i)({prop:i,defaultProp:s,onChange:u}),H=n.useRef(null),B=!b||w||!!b.closest("form"),[V,O]=n.useState(new Set),F=Array.from(V).map(e=>e.props.value).join(";");return(0,k.jsx)(h.bL,{...x,children:(0,k.jsxs)(A,{required:g,scope:t,trigger:b,onTriggerChange:S,valueNode:C,onValueNodeChange:j,valueNodeHasChildren:T,onValueNodeHasChildrenChange:N,contentId:(0,f.B)(),value:D,onValueChange:M,open:R,onOpenChange:P,dir:E,triggerPointerDownPosRef:H,disabled:m,children:[(0,k.jsx)(I.Provider,{scope:t,children:(0,k.jsx)(_,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{O(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{O(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),B?(0,k.jsxs)(ek,{"aria-hidden":!0,required:g,tabIndex:-1,name:p,autoComplete:v,value:D,onChange:e=>M(e.target.value),disabled:m,form:w,children:[void 0===D?(0,k.jsx)("option",{value:""}):null,Array.from(V)]},F):null]})})};V.displayName=E;var O="SelectTrigger",F=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,i=L(r),u=H(O,r),d=u.disabled||l,c=(0,s.s)(t,u.onTriggerChange),p=R(r),v=n.useRef("touch"),[f,m,w]=eT(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===u.value),n=eN(t,e,r);void 0!==n&&u.onValueChange(n.value)}),x=e=>{d||(u.onOpenChange(!0),w()),e&&(u.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,k.jsx)(h.Mz,{asChild:!0,...i,children:(0,k.jsx)(g.sG.button,{type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":ej(u.value)?"":void 0,...o,ref:c,onClick:(0,a.m)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==v.current&&x(e)}),onPointerDown:(0,a.m)(o.onPointerDown,e=>{v.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())}),onKeyDown:(0,a.m)(o.onKeyDown,e=>{let t=""!==f.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&T.includes(e.key)&&(x(),e.preventDefault())})})})});F.displayName=O;var G="SelectValue",K=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:a="",...i}=e,u=H(G,r),{onValueNodeHasChildrenChange:d}=u,c=void 0!==o,p=(0,s.s)(t,u.onValueNodeChange);return(0,b.N)(()=>{d(c)},[d,c]),(0,k.jsx)(g.sG.span,{...i,ref:p,style:{pointerEvents:"none"},children:ej(u.value)?(0,k.jsx)(k.Fragment,{children:a}):o})});K.displayName=G;var U=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,k.jsx)(g.sG.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});U.displayName="SelectIcon";var W=e=>(0,k.jsx)(m.Z,{asChild:!0,...e});W.displayName="SelectPortal";var z="SelectContent",q=n.forwardRef((e,t)=>{let r=H(z,e.__scopeSelect),[o,a]=n.useState();return((0,b.N)(()=>{a(new DocumentFragment)},[]),r.open)?(0,k.jsx)(Z,{...e,ref:t}):o?l.createPortal((0,k.jsx)(X,{scope:e.__scopeSelect,children:(0,k.jsx)(I.Slot,{scope:e.__scopeSelect,children:(0,k.jsx)("div",{children:e.children})})}),o):null});q.displayName=z;var[X,Y]=D(z),Z=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:u,side:d,sideOffset:f,align:h,alignOffset:m,arrowPadding:g,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:T,...N}=e,E=H(z,r),[I,P]=n.useState(null),[D,M]=n.useState(null),L=(0,s.s)(t,e=>P(e)),[A,_]=n.useState(null),[B,V]=n.useState(null),O=R(r),[F,G]=n.useState(!1),K=n.useRef(!1);n.useEffect(()=>{if(I)return(0,C.Eq)(I)},[I]),(0,p.Oh)();let U=n.useCallback(e=>{let[t,...r]=O().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&D&&(D.scrollTop=0),r===n&&D&&(D.scrollTop=D.scrollHeight),null==r||r.focus(),document.activeElement!==l))return},[O,D]),W=n.useCallback(()=>U([A,I]),[U,A,I]);n.useEffect(()=>{F&&W()},[F,W]);let{onOpenChange:q,triggerPointerDownPosRef:Y}=E;n.useEffect(()=>{if(I){let e={x:0,y:0},t=t=>{var r,n,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(r=Y.current)||void 0===r?void 0:r.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(n=Y.current)||void 0===n?void 0:n.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():I.contains(r.target)||q(!1),document.removeEventListener("pointermove",t),Y.current=null};return null!==Y.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[I,q,Y]),n.useEffect(()=>{let e=()=>q(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[q]);let[Z,$]=eT(e=>{let t=O().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eN(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!K.current&&!r;(void 0!==E.value&&E.value===t||n)&&(_(e),n&&(K.current=!0))},[E.value]),et=n.useCallback(()=>null==I?void 0:I.focus(),[I]),er=n.useCallback((e,t,r)=>{let n=!K.current&&!r;(void 0!==E.value&&E.value===t||n)&&V(e)},[E.value]),en="popper"===l?Q:J,el=en===Q?{side:d,sideOffset:f,align:h,alignOffset:m,arrowPadding:g,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:T}:{};return(0,k.jsx)(X,{scope:r,content:I,viewport:D,onViewportChange:M,itemRefCallback:ee,selectedItem:A,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:W,selectedItemText:B,position:l,isPositioned:F,searchRef:Z,children:(0,k.jsx)(j.A,{as:w.DX,allowPinchZoom:!0,children:(0,k.jsx)(v.n,{asChild:!0,trapped:E.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,a.m)(o,e=>{var t;null===(t=E.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,k.jsx)(c.qW,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>E.onOpenChange(!1),children:(0,k.jsx)(en,{role:"listbox",id:E.contentId,"data-state":E.open?"open":"closed",dir:E.dir,onContextMenu:e=>e.preventDefault(),...N,...el,onPlaced:()=>G(!0),ref:L,style:{display:"flex",flexDirection:"column",outline:"none",...N.style},onKeyDown:(0,a.m)(N.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||$(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=O().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});Z.displayName="SelectContentImpl";var J=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...a}=e,i=H(z,r),u=Y(z,r),[d,c]=n.useState(null),[p,v]=n.useState(null),f=(0,s.s)(t,e=>v(e)),h=R(r),m=n.useRef(!1),w=n.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:S,focusSelectedItem:C}=u,j=n.useCallback(()=>{if(i.trigger&&i.valueNode&&d&&p&&x&&y&&S){let e=i.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),n=S.getBoundingClientRect();if("rtl"!==i.dir){let l=n.left-t.left,a=r.left-l,i=e.left-a,s=e.width+i,u=Math.max(s,t.width),c=o(a,[10,Math.max(10,window.innerWidth-10-u)]);d.style.minWidth=s+"px",d.style.left=c+"px"}else{let l=t.right-n.right,a=window.innerWidth-r.right-l,i=window.innerWidth-e.right-a,s=e.width+i,u=Math.max(s,t.width),c=o(a,[10,Math.max(10,window.innerWidth-10-u)]);d.style.minWidth=s+"px",d.style.right=c+"px"}let a=h(),s=window.innerHeight-20,u=x.scrollHeight,c=window.getComputedStyle(p),v=parseInt(c.borderTopWidth,10),f=parseInt(c.paddingTop,10),g=parseInt(c.borderBottomWidth,10),w=v+f+u+parseInt(c.paddingBottom,10)+g,b=Math.min(5*y.offsetHeight,w),C=window.getComputedStyle(x),j=parseInt(C.paddingTop,10),k=parseInt(C.paddingBottom,10),T=e.top+e.height/2-10,N=y.offsetHeight/2,E=v+f+(y.offsetTop+N);if(E<=T){let e=a.length>0&&y===a[a.length-1].ref.current;d.style.bottom="0px";let t=Math.max(s-T,N+(e?k:0)+(p.clientHeight-x.offsetTop-x.offsetHeight)+g);d.style.height=E+t+"px"}else{let e=a.length>0&&y===a[0].ref.current;d.style.top="0px";let t=Math.max(T,v+x.offsetTop+(e?j:0)+N);d.style.height=t+(w-E)+"px",x.scrollTop=E-T+x.offsetTop}d.style.margin="".concat(10,"px 0"),d.style.minHeight=b+"px",d.style.maxHeight=s+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,i.trigger,i.valueNode,d,p,x,y,S,i.dir,l]);(0,b.N)(()=>j(),[j]);let[T,N]=n.useState();(0,b.N)(()=>{p&&N(window.getComputedStyle(p).zIndex)},[p]);let E=n.useCallback(e=>{e&&!0===w.current&&(j(),null==C||C(),w.current=!1)},[j,C]);return(0,k.jsx)($,{scope:r,contentWrapper:d,shouldExpandOnScrollRef:m,onScrollButtonChange:E,children:(0,k.jsx)("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:T},children:(0,k.jsx)(g.sG.div,{...a,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});J.displayName="SelectItemAlignedPosition";var Q=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,a=L(r);return(0,k.jsx)(h.UC,{...a,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Q.displayName="SelectPopperPosition";var[$,ee]=D(z,{}),et="SelectViewport",er=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,i=Y(et,r),u=ee(et,r),d=(0,s.s)(t,i.onViewportChange),c=n.useRef(0);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,k.jsx)(I.Slot,{scope:r,children:(0,k.jsx)(g.sG.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:d,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,a.m)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=u;if((null==n?void 0:n.current)&&r){let e=Math.abs(c.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,a=Math.min(n,o),i=o-a;r.style.height=a+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}c.current=t.scrollTop})})})]})});er.displayName=et;var en="SelectGroup",[el,eo]=D(en),ea=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,f.B)();return(0,k.jsx)(el,{scope:r,id:l,children:(0,k.jsx)(g.sG.div,{role:"group","aria-labelledby":l,...n,ref:t})})});ea.displayName=en;var ei="SelectLabel",es=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=eo(ei,r);return(0,k.jsx)(g.sG.div,{id:l.id,...n,ref:t})});es.displayName=ei;var eu="SelectItem",[ed,ec]=D(eu),ep=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:i,...u}=e,d=H(eu,r),c=Y(eu,r),p=d.value===l,[v,h]=n.useState(null!=i?i:""),[m,w]=n.useState(!1),x=(0,s.s)(t,e=>{var t;return null===(t=c.itemRefCallback)||void 0===t?void 0:t.call(c,e,l,o)}),y=(0,f.B)(),b=n.useRef("touch"),S=()=>{o||(d.onValueChange(l),d.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,k.jsx)(ed,{scope:r,value:l,disabled:o,textId:y,isSelected:p,onItemTextChange:n.useCallback(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[]),children:(0,k.jsx)(I.ItemSlot,{scope:r,value:l,disabled:o,textValue:v,children:(0,k.jsx)(g.sG.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":p&&m,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:x,onFocus:(0,a.m)(u.onFocus,()=>w(!0)),onBlur:(0,a.m)(u.onBlur,()=>w(!1)),onClick:(0,a.m)(u.onClick,()=>{"mouse"!==b.current&&S()}),onPointerUp:(0,a.m)(u.onPointerUp,()=>{"mouse"===b.current&&S()}),onPointerDown:(0,a.m)(u.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,a.m)(u.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,a.m)(u.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}}),onKeyDown:(0,a.m)(u.onKeyDown,e=>{var t;(null===(t=c.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(N.includes(e.key)&&S()," "===e.key&&e.preventDefault())})})})})});ep.displayName=eu;var ev="SelectItemText",ef=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:a,...i}=e,u=H(ev,r),d=Y(ev,r),c=ec(ev,r),p=B(ev,r),[v,f]=n.useState(null),h=(0,s.s)(t,e=>f(e),c.onItemTextChange,e=>{var t;return null===(t=d.itemTextRefCallback)||void 0===t?void 0:t.call(d,e,c.value,c.disabled)}),m=null==v?void 0:v.textContent,w=n.useMemo(()=>(0,k.jsx)("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=p;return(0,b.N)(()=>(x(w),()=>y(w)),[x,y,w]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g.sG.span,{id:c.textId,...i,ref:h}),c.isSelected&&u.valueNode&&!u.valueNodeHasChildren?l.createPortal(i.children,u.valueNode):null]})});ef.displayName=ev;var eh="SelectItemIndicator",em=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ec(eh,r).isSelected?(0,k.jsx)(g.sG.span,{"aria-hidden":!0,...n,ref:t}):null});em.displayName=eh;var eg="SelectScrollUpButton",ew=n.forwardRef((e,t)=>{let r=Y(eg,e.__scopeSelect),l=ee(eg,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,s.s)(t,l.onScrollButtonChange);return(0,b.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){a(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,k.jsx)(eb,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ew.displayName=eg;var ex="SelectScrollDownButton",ey=n.forwardRef((e,t)=>{let r=Y(ex,e.__scopeSelect),l=ee(ex,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,s.s)(t,l.onScrollButtonChange);return(0,b.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;a(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,k.jsx)(eb,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});ey.displayName=ex;var eb=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,i=Y("SelectScrollButton",r),s=n.useRef(null),u=R(r),d=n.useCallback(()=>{null!==s.current&&(window.clearInterval(s.current),s.current=null)},[]);return n.useEffect(()=>()=>d(),[d]),(0,b.N)(()=>{var e;let t=u().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[u]),(0,k.jsx)(g.sG.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,a.m)(o.onPointerDown,()=>{null===s.current&&(s.current=window.setInterval(l,50))}),onPointerMove:(0,a.m)(o.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===s.current&&(s.current=window.setInterval(l,50))}),onPointerLeave:(0,a.m)(o.onPointerLeave,()=>{d()})})}),eS=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,k.jsx)(g.sG.div,{"aria-hidden":!0,...n,ref:t})});eS.displayName="SelectSeparator";var eC="SelectArrow";function ej(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=L(r),o=H(eC,r),a=Y(eC,r);return o.open&&"popper"===a.position?(0,k.jsx)(h.i3,{...l,...n,ref:t}):null}).displayName=eC;var ek=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),a=(0,s.s)(t,o),i=function(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[i,r]),(0,k.jsx)(S.s,{asChild:!0,children:(0,k.jsx)("select",{...l,ref:a,defaultValue:r})})});function eT(e){let t=(0,x.c)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),a=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,a]}function eN(e,t,r){var n;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===l.length&&(o=o.filter(e=>e!==r));let a=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==r?a:void 0}ek.displayName="BubbleSelect";var eE=V,eI=F,eR=K,eP=U,eD=W,eM=q,eL=er,eA=ea,eH=es,e_=ep,eB=ef,eV=em,eO=ew,eF=ey,eG=eS},9827:(e,t,r)=>{r.d(t,{v:()=>s});var n=r(2115);let l=e=>{let t;let r=new Set,n=(e,n)=>{let l="function"==typeof e?e(t):e;if(!Object.is(l,t)){let e=t;t=(null!=n?n:"object"!=typeof l||null===l)?l:Object.assign({},t,l),r.forEach(r=>r(t,e))}},l=()=>t,o={setState:n,getState:l,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e))},a=t=e(n,l,o);return o},o=e=>e?l(e):l,a=e=>e,i=e=>{let t=o(e),r=e=>(function(e,t=a){let r=n.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return n.useDebugValue(r),r})(t,e);return Object.assign(r,t),r},s=e=>e?i(e):i}}]);