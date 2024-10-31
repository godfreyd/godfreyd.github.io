/*! For license information please see components-Accordion-Accordion-stories.b7f4a7cd.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[851],{"./src/components/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoldTitle:()=>BoldTitle,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),Icons=__webpack_require__("./src/components/Icons/index.tsx"),Typography=__webpack_require__("./src/components/Typography/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Accordion_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Accordion/Accordion.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Accordion_module.A,options);const Accordion_Accordion_module=Accordion_module.A&&Accordion_module.A.locals?Accordion_module.A.locals:void 0,clx=bind_default().bind(Accordion_Accordion_module),Accordion=({title,boldTitle=!1,children,className,tabIndex})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),contentRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{contentRef.current&&(contentRef.current.style.blockSize=isOpen?`${contentRef.current.scrollHeight}px`:"0px")}),[isOpen]),react.createElement("div",{className:clx("root",className)},react.createElement("div",{className:clx("header")},react.createElement("button",{className:clx("button"),onClick:()=>setIsOpen(!isOpen),type:"button",role:"button","aria-expanded":isOpen,tabIndex,"aria-label":"Toggle"},react.createElement(Icons.cL,{className:clx("chevron",{chevron_open:isOpen}),width:20,height:20}),react.createElement(Typography.A,{className:clx("text"),fontWeight:boldTitle?"bold":"normal"},title),react.createElement("div",{className:clx("line")}))),react.createElement("div",{ref:contentRef,className:clx("content")},children))},components_Accordion=Accordion;Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},boldTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:""}}};const Accordion_stories={title:"UI/Accordion",parameters:{},argTypes:{boldTitle:{control:{type:"boolean"},options:[!0,!1]}},args:{title:"Accordion title"},component:components_Accordion},wrapperStyles={height:"400px",width:"600px",backgroundColor:"#DFE7FA"},Default=args=>react.createElement("div",{style:wrapperStyles},react.createElement(components_Accordion,args,react.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),BoldTitle=args=>react.createElement("div",{style:wrapperStyles},react.createElement(components_Accordion,{boldTitle:!0,...args},react.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),__namedExportsOrder=["Default","BoldTitle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args): React.ReactElement => {\n  return <div style={wrapperStyles}>\n      <Accordion {...args}>\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </Accordion>\n    </div>;\n}",...Default.parameters?.docs?.source}}},BoldTitle.parameters={...BoldTitle.parameters,docs:{...BoldTitle.parameters?.docs,source:{originalSource:"(args): React.ReactElement => {\n  return <div style={wrapperStyles}>\n      <Accordion boldTitle {...args}>\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </Accordion>\n    </div>;\n}",...BoldTitle.parameters?.docs?.source}}}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Accordion/Accordion.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UqS_KriWn4mj6wIvYtlN{overflow:hidden;padding:14px}.Z_dIbv4jFQN20STBaq1t{block-size:0;overflow:hidden;transition:block-size .2s ease-in-out}.p2V3vBgHJKoC6iXS84VX{align-items:center;background:none;border:none;color:initial;cursor:pointer;display:flex;font:inherit;gap:8px;inline-size:100%;outline:none;padding:0}.p2V3vBgHJKoC6iXS84VX svg{flex:none}.SzoANk9ylxYMsivgfKtL{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.xyqLJXAMTkwYARX_mcy_{margin-block-end:14px}.RXydpJsCLq9O_MqG7569{transition:transform .2s ease-in-out}.SPltOlpxHiThERdmkTB1{transform:rotate(180deg)}.JygX3K6PjrUWbivKHAjO{background-color:var(--palette-bg-3);block-size:1px;flex:1;margin-inline-start:8px}","",{version:3,sources:["webpack://./src/components/Accordion/Accordion.module.scss"],names:[],mappings:"AAAA,sBACE,eAAA,CACA,YAAA,CAGF,sBACE,YAAA,CACA,eAAA,CACA,qCAAA,CAGF,sBACE,kBAAA,CACA,eAAA,CACA,WAAA,CACA,aAAA,CACA,cAAA,CACA,YAAA,CACA,YAAA,CACA,OAAA,CACA,gBAAA,CACA,YAAA,CACA,SAAA,CAEA,0BACE,SAAA,CAIJ,sBACE,eAAA,CACA,sBAAA,CACA,kBAAA,CAGF,sBACE,qBAAA,CAGF,sBACE,oCAAA,CAEA,sBACE,wBAAA,CAIJ,sBACE,oCAAA,CACA,cAAA,CACA,MAAA,CACA,uBAAA",sourcesContent:[".root {\n  overflow: hidden;\n  padding: 14px;\n}\n\n.content {\n  block-size: 0;\n  overflow: hidden;\n  transition: block-size 0.2s ease-in-out;\n}\n\n.button {\n  align-items: center;\n  background: none;\n  border: none;\n  color: initial;\n  cursor: pointer;\n  display: flex;\n  font: inherit;\n  gap: 8px;\n  inline-size: 100%;\n  outline: none;\n  padding: 0;\n\n  & svg {\n    flex: none;\n  }\n}\n\n.text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.header {\n  margin-block-end: 14px;\n}\n\n.chevron {\n  transition: transform 0.2s ease-in-out;\n\n  &_open {\n    transform: rotate(180deg);\n  }\n}\n\n.line {\n  background-color: var(--palette-bg-3);\n  block-size: 1px;\n  flex: 1;\n  margin-inline-start: 8px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"UqS_KriWn4mj6wIvYtlN",content:"Z_dIbv4jFQN20STBaq1t",button:"p2V3vBgHJKoC6iXS84VX",text:"SzoANk9ylxYMsivgfKtL",header:"xyqLJXAMTkwYARX_mcy_",chevron:"RXydpJsCLq9O_MqG7569",chevron_open:"SPltOlpxHiThERdmkTB1",line:"JygX3K6PjrUWbivKHAjO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);