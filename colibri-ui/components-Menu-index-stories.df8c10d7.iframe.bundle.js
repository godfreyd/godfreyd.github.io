/*! For license information please see components-Menu-index-stories.df8c10d7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[738],{"./src/components/Menu/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Menu/index.tsx"),_components_MenuItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/components/MenuItem/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Menu",parameters:{layout:"centered"},argTypes:{},component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=(args=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["2"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,selected,onClick:k=>setSelected([k])},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MenuItem__WEBPACK_IMPORTED_MODULE_2__.A,{key:"1"},"Menu item 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MenuItem__WEBPACK_IMPORTED_MODULE_2__.A,{key:"2"},"Menu item 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MenuItem__WEBPACK_IMPORTED_MODULE_2__.A,{disabled:!0,key:"3"},"Menu item 3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MenuItem__WEBPACK_IMPORTED_MODULE_2__.A,{key:"4"},"Menu item 4"))}).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [selected, setSelected] = useState<string[]>([\'2\']);\n  return <Menu {...args} selected={selected} onClick={k => setSelected([k])}>\n      <MenuItem key="1">Menu item 1</MenuItem>\n      <MenuItem key="2">Menu item 2</MenuItem>\n      <MenuItem disabled key="3">\n        Menu item 3\n      </MenuItem>\n      <MenuItem key="4">Menu item 4</MenuItem>\n    </Menu>;\n}',...Default.parameters?.docs?.source}}}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Menu/Menu.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".s7_MO4NdsYs7nPQALD8W{background:var(--palette-white);color:var(--palette-black);margin:0;padding:0;text-align:left;user-select:none}","",{version:3,sources:["webpack://./src/components/Menu/Menu.module.scss"],names:[],mappings:"AAAA,sBACE,+BAAA,CACA,0BAAA,CACA,QAAA,CACA,SAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:[".menu {\n  background: var(--palette-white);\n  color: var(--palette-black);\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  user-select: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={menu:"s7_MO4NdsYs7nPQALD8W"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Menu/components/MenuItem/MenuItem.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CowQ96KwiFuelERVvLdU{align-items:center;cursor:pointer;display:flex;font-size:16px;font-style:normal;font-weight:400;justify-content:space-between;line-height:22px;list-style:none;padding:8px 6px}.CowQ96KwiFuelERVvLdU>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ee6P988pqDvk8vLpxdjg{background-color:var(--palette-white)}.ee6P988pqDvk8vLpxdjg:hover{background-color:var(--palette-primary-2)}.ee6P988pqDvk8vLpxdjg:active{background-color:var(--palette-primary-2)}.ee6P988pqDvk8vLpxdjg:focus,.ee6P988pqDvk8vLpxdjg:focus-within{background-color:var(--palette-primary-2)}.MJ_62VAiKeHi1SdVvWD9{background-color:var(--palette-white);color:var(--palette-bg-2);cursor:not-allowed;pointer-events:none}","",{version:3,sources:["webpack://./src/components/Menu/components/MenuItem/MenuItem.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAA,CACA,cAAA,CACA,YAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,6BAAA,CACA,gBAAA,CACA,eAAA,CACA,eAAA,CAEA,wBACE,eAAA,CACA,sBAAA,CACA,kBAAA,CAKF,sBACE,qCAAA,CAEA,4BACE,yCAAA,CAGF,6BACE,yCAAA,CAGF,+DAEE,yCAAA,CAKN,sBACE,qCAAA,CACA,yBAAA,CACA,kBAAA,CACA,mBAAA",sourcesContent:[".item {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  justify-content: space-between;\n  line-height: 22px;\n  list-style: none;\n  padding: 8px 6px;\n\n  & > * {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.variant {\n  &_primary {\n    background-color: var(--palette-white);\n\n    &:hover {\n      background-color: var(--palette-primary-2);\n    }\n\n    &:active {\n      background-color: var(--palette-primary-2);\n    }\n\n    &:focus,\n    &:focus-within {\n      background-color: var(--palette-primary-2);\n    }\n  }\n}\n\n.disabled {\n  background-color: var(--palette-white);\n  color: var(--palette-bg-2);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={item:"CowQ96KwiFuelERVvLdU",variant_primary:"ee6P988pqDvk8vLpxdjg",disabled:"MJ_62VAiKeHi1SdVvWD9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/components/Menu/components/MenuItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_MenuItem});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),MenuItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Menu/components/MenuItem/MenuItem.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MenuItem_module.A,options);const MenuItem_MenuItem_module=MenuItem_module.A&&MenuItem_module.A.locals?MenuItem_module.A.locals:void 0,clx=bind_default().bind(MenuItem_MenuItem_module),MenuItem=(0,react.forwardRef)((({className,isSelected,variant="primary",disabled,onClick,children},ref)=>react.createElement("li",{ref,"data-component":"menu-item",style:{backgroundColor:isSelected?"var(--palette-primary-1)":"var(--palette-white)"},className:clx(MenuItem_MenuItem_module.item,{disabled,[`variant_${variant}`]:!!variant},className),onClick},children))),components_MenuItem=MenuItem;MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"literal",value:'"primary"'},description:"",defaultValue:{value:'"primary"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/components/Menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Menu});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Menu_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Menu/Menu.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Menu_module.A,options);const Menu_Menu_module=Menu_module.A&&Menu_module.A.locals?Menu_module.A.locals:void 0,Menu=(0,react.forwardRef)((({selected,variant,className,onClick,children},ref)=>{const renderChild=(0,react.useMemo)((()=>react.Children.map(children,(child=>{if((0,react.isValidElement)(child)){const isSelected=selected?selected.includes(String(child.key)):void 0,onClickHandler=e=>{child.props.onClick&&child.props.onClick(e),onClick&&child.key&&onClick(child.key.toString(),e)};return(0,react.cloneElement)(child,{isSelected,onClick:onClickHandler,variant})}return child}))),[children,selected,onClick]);return react.createElement("ul",{ref,className:classnames_default()(Menu_Menu_module.menu,className)},renderChild)})),components_Menu=Menu;Menu.__docgenInfo={description:"",methods:[],displayName:"Menu"}}}]);