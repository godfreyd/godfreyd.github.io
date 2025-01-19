/*! For license information please see components-Input-index-stories.bddd44bc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[667],{"./src/components/Input/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,Required:()=>Required,TypePassword:()=>TypePassword,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),Chevron=__webpack_require__("./src/components/Icons/Chevron.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),FormField=__webpack_require__("./src/components/base/FormField/index.tsx"),InputRoot=__webpack_require__("./src/components/base/InputRoot/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BaseInput_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/base/BaseInput/BaseInput.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BaseInput_module.A,options);const BaseInput_BaseInput_module=BaseInput_module.A&&BaseInput_module.A.locals?BaseInput_module.A.locals:void 0,BaseInput=({className,onChange,ref,...props})=>react.createElement("input",{className:classnames_default()(BaseInput_BaseInput_module["base-input"],className),onChange:e=>{onChange&&onChange(e,e.target.value)},ref,...props}),base_BaseInput=BaseInput;BaseInput.__docgenInfo={description:"",methods:[],displayName:"BaseInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>, value: string) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}},composes:["Omit"]};const Input=({className,startIcon,endIcon,label,hint,error,required,onChange,inputRef,disabled,variant="primary",size="m",ref,...props})=>react.createElement(FormField.A,{className:classnames_default()(className),label,required,hint,error},react.createElement(InputRoot.A,{ref,startIcon,endIcon,variant,size,disabled:!!disabled,error},react.createElement(base_BaseInput,{ref:inputRef,onChange,type:"text",...props}))),components_Input=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>, value: string) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"literal",value:'"primary"'},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},hint:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},inputRef:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLInputElement"}],raw:"ForwardedRef<HTMLInputElement>"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}},composes:["Omit"]};const index_stories={title:"UI/Input",parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["s","m","l"]},variant:{control:{type:"select"},options:["primary"]}},args:{onChange:(0,dist.fn)()},component:components_Input},Default={args:{placeholder:"Name",error:!1,disabled:!1,label:"Label",variant:"primary",hint:"hint"}},Required={args:{placeholder:"Name",error:!1,required:!0,disabled:!1,label:"Label",variant:"primary",hint:"hint"}},TypePassword={args:{placeholder:"Name",error:!1,disabled:!1,label:"Label",type:"password",variant:"primary",hint:"hint"}},Error={args:{placeholder:"Name",error:!0,disabled:!1,label:"Label",variant:"primary",hint:"hint"}},WithIcon={args:{placeholder:"Name",error:!1,disabled:!1,label:"Label",variant:"primary",hint:"hint",endIcon:react.createElement(Chevron.A,null)}},__namedExportsOrder=["Default","Required","TypePassword","Error","WithIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: false,\n    disabled: false,\n    label: "Label",\n    variant: "primary",\n    hint: "hint"\n  }\n}',...Default.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: false,\n    required: true,\n    disabled: false,\n    label: "Label",\n    variant: "primary",\n    hint: "hint"\n  }\n}',...Required.parameters?.docs?.source}}},TypePassword.parameters={...TypePassword.parameters,docs:{...TypePassword.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: false,\n    disabled: false,\n    label: "Label",\n    type: \'password\',\n    variant: "primary",\n    hint: "hint"\n  }\n}',...TypePassword.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: true,\n    disabled: false,\n    label: "Label",\n    variant: "primary",\n    hint: "hint"\n  }\n}',...Error.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: false,\n    disabled: false,\n    label: "Label",\n    variant: "primary",\n    hint: "hint",\n    endIcon: <Chevron />\n  }\n}',...WithIcon.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/base/BaseInput/BaseInput.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".KS5TCj8Wwa6d1MQ6FXda{background:rgba(0,0,0,0);border:none;flex:1;margin:7px 0;outline:none;overflow:hidden;text-overflow:ellipsis}.KS5TCj8Wwa6d1MQ6FXda::placeholder{color:var(--palette-bg-3)}","",{version:3,sources:["webpack://./src/components/base/BaseInput/BaseInput.module.scss"],names:[],mappings:"AAAA,sBACE,wBAAA,CACA,WAAA,CACA,MAAA,CACA,YAAA,CACA,YAAA,CACA,eAAA,CACA,sBAAA,CAEA,mCACE,yBAAA",sourcesContent:[".base-input {\n  background: transparent;\n  border: none;\n  flex: 1;\n  margin: 7px 0;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &::placeholder {\n    color: var(--palette-bg-3);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"base-input":"KS5TCj8Wwa6d1MQ6FXda"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/components/Icons/Chevron.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=({fill="currentColor",width=24,height=24,ref,...props})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill,width,height,ref,...props,viewBox:"0 0 16 16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5492 5.50873C3.82061 5.25994 4.24232 5.27827 4.49111 5.54968C5.08905 6.20198 6.07747 7.19075 6.9255 8.02488C7.34221 8.43475 7.72193 8.80427 7.99968 9.07343C8.27742 8.80427 8.65715 8.43475 9.07385 8.02488C9.92189 7.19075 10.9103 6.20198 11.5082 5.54968C11.757 5.27827 12.1787 5.25994 12.4502 5.50873C12.7216 5.75753 12.7399 6.17924 12.4911 6.45065C11.8668 7.13169 10.8552 8.14292 10.0088 8.97545C9.58374 9.39358 9.19708 9.76978 8.91672 10.0414C8.7765 10.1773 8.66281 10.2871 8.58411 10.3629L8.46141 10.481C8.46138 10.4811 8.46137 10.4811 7.99968 10.0002C7.53799 10.4811 7.53797 10.4811 7.53794 10.481L7.41525 10.3629C7.33655 10.2871 7.22285 10.1773 7.08264 10.0414C6.80227 9.76978 6.41562 9.39358 5.99052 8.97545C5.14411 8.14292 4.13253 7.13169 3.50824 6.45065C3.25945 6.17924 3.27778 5.75753 3.5492 5.50873ZM7.99968 10.0002L7.53794 10.481C7.79592 10.7287 8.20344 10.7287 8.46141 10.481L7.99968 10.0002Z",fill:"currentColor"}))}}]);