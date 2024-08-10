/*! For license information please see components-Typography-index-stories.d99c3bc4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[232],{"./src/components/Typography/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Typography",parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["secondary","alert","success"]}},component:__webpack_require__("./src/components/Typography/index.tsx").A},Default={args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: TEXT\n  }\n}",...Default.parameters?.docs?.source}}}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"._MWOVuZRvUQdXKTMcOPx{color:var(--palette-black)}.UOWeNpnVDEaMiH7WH3ry{font-size:12px;line-height:16px}.QlsrSmpdBNEZ3gjfWI3A{font-size:14px;line-height:18px}.ZZ8ne_XlKWYDV_QixTVa{font-size:16px;line-height:22px}.AMPCdEXiljEZGcV5j2f9{font-size:18px;line-height:28px}.WTmkvKerbC4SPJuRcyij{font-size:40px;line-height:56px}.Fr3qhMvnAYX5pfxSOnOL{font-size:32px;line-height:40px}.NnQdQyQw3SjtfkMXu2cr{font-size:24px;line-height:32px}.adLdy0HatQS25RYlvD0Q{font-size:20px;line-height:28px}.CvrYZHq38cDPXcXUZ8Ku{font-size:16px;line-height:24px}.FOBZJTQCm5VdahSY2MLd{font-size:12px;line-height:16px}.yksX1F7PwgxdHB2tSkOi{font-weight:400}.rSLKaLXS98ZcYxRiVKG2{font-weight:500}.Cj2kuPtxKrJWGokAs_Yw{font-weight:700}.kxNEK4o9Ty5pSLH48mve{color:var(--typography-alert)}.ggxhPabpGcoTopKL7IQq{color:var(--typography-success)}.iMjZlGUF4ZkEOwwkcWF8{color:var(--typography-secondary)}","",{version:3,sources:["webpack://./src/components/Typography/Typography.module.scss"],names:[],mappings:"AAAA,sBACE,0BAAA,CAIA,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,gBAAA,CAKF,sBACE,eAAA,CAGF,sBACE,eAAA,CAGF,sBACE,eAAA,CAKF,sBACE,6BAAA,CAGF,sBACE,+BAAA,CAGF,sBACE,iCAAA",sourcesContent:[".root {\n  color: var(--palette-black);\n}\n\n.size {\n  &_xs {\n    font-size: 12px;\n    line-height: 16px;\n  }\n\n  &_s {\n    font-size: 14px;\n    line-height: 18px;\n  }\n\n  &_m {\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  &_l {\n    font-size: 18px;\n    line-height: 28px;\n  }\n\n  &_h1 {\n    font-size: 40px;\n    line-height: 56px;\n  }\n\n  &_h2 {\n    font-size: 32px;\n    line-height: 40px;\n  }\n\n  &_h3 {\n    font-size: 24px;\n    line-height: 32px;\n  }\n\n  &_h4 {\n    font-size: 20px;\n    line-height: 28px;\n  }\n\n  &_h5 {\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  &_h6 {\n    font-size: 12px;\n    line-height: 16px;\n  }\n}\n\n.fontWeight {\n  &_normal {\n    font-weight: 400;\n  }\n  \n  &_medium {\n    font-weight: 500;\n  }\n  \n  &_bold {\n    font-weight: 700;\n  }\n}\n\n.variant {\n  &_alert {\n    color: var(--typography-alert);\n  }\n  \n  &_success {\n    color: var(--typography-success);\n  }\n  \n  &_secondary {\n    color: var(--typography-secondary);\n  }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"_MWOVuZRvUQdXKTMcOPx",size_xs:"UOWeNpnVDEaMiH7WH3ry",size_s:"QlsrSmpdBNEZ3gjfWI3A",size_m:"ZZ8ne_XlKWYDV_QixTVa",size_l:"AMPCdEXiljEZGcV5j2f9",size_h1:"WTmkvKerbC4SPJuRcyij",size_h2:"Fr3qhMvnAYX5pfxSOnOL",size_h3:"NnQdQyQw3SjtfkMXu2cr",size_h4:"adLdy0HatQS25RYlvD0Q",size_h5:"CvrYZHq38cDPXcXUZ8Ku",size_h6:"FOBZJTQCm5VdahSY2MLd",fontWeight_normal:"yksX1F7PwgxdHB2tSkOi",fontWeight_medium:"rSLKaLXS98ZcYxRiVKG2",fontWeight_bold:"Cj2kuPtxKrJWGokAs_Yw",variant_alert:"kxNEK4o9Ty5pSLH48mve",variant_success:"ggxhPabpGcoTopKL7IQq",variant_secondary:"iMjZlGUF4ZkEOwwkcWF8"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/components/Typography/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Typography});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Typography_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Typography_module.A,options);const Typography_Typography_module=Typography_module.A&&Typography_module.A.locals?Typography_module.A.locals:void 0,clx=bind_default().bind(Typography_Typography_module),Typography=({tag:Element="span",children,variant,size,style,fontWeight,className,...props})=>react.createElement(Element,{...props,style,className:clx({root:!0,[`size_${size}`]:!!size,[`fontWeight_${fontWeight}`]:!!fontWeight,[`variant_${variant}`]:!!variant},className)},children),components_Typography=Typography;Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{className:{required:!1,tsType:{name:"string"},description:""},tag:{required:!1,tsType:{name:"union",raw:'| "span"\n| "label"\n| "legend"\n| "p"\n| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"\n| "s"',elements:[{name:"literal",value:'"span"'},{name:"literal",value:'"label"'},{name:"literal",value:'"legend"'},{name:"literal",value:'"p"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"s"'}]},description:"",defaultValue:{value:'"span"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"alert" | "success" | "secondary"',elements:[{name:"literal",value:'"alert"'},{name:"literal",value:'"success"'},{name:"literal",value:'"secondary"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'| "xs"\n| "s"\n| "m"\n| "l"\n| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:""},fontWeight:{required:!1,tsType:{name:"union",raw:'"normal" | "medium" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"bold"'}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}}}]);