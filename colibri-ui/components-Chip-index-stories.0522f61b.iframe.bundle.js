/*! For license information please see components-Chip-index-stories.0522f61b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[121],{"./src/components/Chip/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Deletable:()=>Deletable,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Chip/index.tsx"),_helpers_generateUniqID__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/helpers/generateUniqID.ts"),_Icons_CrossFill__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icons/CrossFill.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Chip",parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["s","m","l"]}},component:___WEBPACK_IMPORTED_MODULE_1__.A},menuItems=[{href:"#",text:"Best sellers",isActive:!1},{href:"#",text:"Fiction",isActive:!1},{href:"#",text:"Education",isActive:!1}],Default=args=>{const[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(menuItems),handleClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index=>{setItems((prevState=>(prevState[index].isActive=!prevState[index].isActive,[...prevState])))}),[items]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,items.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{key:(0,_helpers_generateUniqID__WEBPACK_IMPORTED_MODULE_3__.A)(index),isActive:item.isActive,onClick:()=>handleClick(index),...args},item.text)," "))))},Sizes=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{size:"s",...args},"Chip s")," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{size:"m",...args},"Chip m")," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{size:"l",...args},"Chip l")),Deletable=args=>{const handleDelete=()=>{alert("Click")};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{size:"s",iconEnd:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_CrossFill__WEBPACK_IMPORTED_MODULE_2__.A,null),onClickIcon:handleDelete,...args},"Chip 1")," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{size:"s",iconEnd:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_CrossFill__WEBPACK_IMPORTED_MODULE_2__.A,null),onClickIcon:handleDelete,...args},"Chip 2")," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A,{size:"s",iconEnd:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_CrossFill__WEBPACK_IMPORTED_MODULE_2__.A,null),onClickIcon:handleDelete,...args},"Long long chip 3"))},__namedExportsOrder=["Default","Sizes","Deletable"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: Story) => {\n  const [items, setItems] = useState(menuItems);\n  const handleClick = useCallback((index: number) => {\n    setItems(prevState => {\n      prevState[index].isActive = !prevState[index].isActive;\n      return [...prevState];\n    });\n  }, [items]);\n  return <div>\n    {items.map((item, index) => <>\n    <Chip key={generateUniqID(index)} isActive={item.isActive} onClick={() => handleClick(index)} {...args}>\n      {item.text}\n    </Chip>{' '}</>)}\n  </div>;\n}",...Default.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'(args: Story) => {\n  return <>\n    <Chip size="s" {...args}>\n      Chip s\n    </Chip>{\' \'}\n    <Chip size="m" {...args}>\n      Chip m\n    </Chip>{\' \'}\n    <Chip size="l" {...args}>\n      Chip l\n    </Chip>\n  </>;\n}',...Sizes.parameters?.docs?.source}}},Deletable.parameters={...Deletable.parameters,docs:{...Deletable.parameters?.docs,source:{originalSource:"(args: Story) => {\n  const handleDelete = () => {\n    alert('Click');\n  };\n  return <>\n      <Chip size=\"s\" iconEnd={<CrossFill />} onClickIcon={handleDelete} {...args}>\n        Chip 1\n      </Chip>{' '}\n      <Chip size=\"s\" iconEnd={<CrossFill />} onClickIcon={handleDelete} {...args}>\n        Chip 2\n      </Chip>{' '}\n      <Chip size=\"s\" iconEnd={<CrossFill />} onClickIcon={handleDelete} {...args}>\n        Long long chip 3\n      </Chip>\n    </>;\n}",...Deletable.parameters?.docs?.source}}}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Chip/Chip.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".mQ7Pr1OHtNM_Nuxrxoxk{cursor:pointer;display:inline-block}.xnRU5VRwAR9IHNwMNU0i{box-sizing:border-box;display:flex;font:inherit;min-width:0;place-items:stretch flex-start;transition-duration:.3s;transition-property:background,box-shadow,transform;transition-timing-function:ease}.IsC1tkzLi9Xp9jQffK7w{background:var(--palette-bg-1)}.PlduMOnJ6XeLJ0UqNzhe{background:var(--palette-white);box-shadow:rgba(193,193,193,.4) 0 5px 20px}.PlduMOnJ6XeLJ0UqNzhe:hover{box-shadow:rgba(193,193,193,.4) 0 5px 20px;transform:translateY(-2px)}.PlduMOnJ6XeLJ0UqNzhe:active{background:rgba(0,0,0,.02);box-shadow:rgba(193,193,193,.4) 0 1px 3px;outline:0;transition-duration:.15s}@media(hover: none){.PlduMOnJ6XeLJ0UqNzhe:hover{box-shadow:rgba(193,193,193,.4) 0 5px 20px;transform:translateY(0)}.PlduMOnJ6XeLJ0UqNzhe:active{box-shadow:rgba(193,193,193,.4) 0 1px 3px}}.xnRU5VRwAR9IHNwMNU0i[data-size=s]{border-radius:32px;font-size:.875rem;line-height:2.2}.xnRU5VRwAR9IHNwMNU0i[data-size=m]{border-radius:36px;font-size:1rem;line-height:2.3}.xnRU5VRwAR9IHNwMNU0i[data-size=l]{border-radius:44px;font-size:1.15rem;line-height:2.4}.P9MRpEL2LEJkCDeoQntl{align-items:center;display:flex;justify-content:flex-start;max-width:200px;padding:0 1rem;user-select:none}.e0AnOzvdHaDp2BqQgXc5{display:block;overflow:hidden;text-overflow:ellipsis}.aKxx6ksxxAlOgFqVdwlc{align-items:center;color:var(--palette-bg-5);display:flex;justify-content:center;margin-left:-11px;padding-right:.8rem}.aKxx6ksxxAlOgFqVdwlc:hover{color:var(--palette-black)}","",{version:3,sources:["webpack://./src/components/Chip/Chip.module.scss"],names:[],mappings:"AAAA,sBACE,cAAA,CACA,oBAAA,CAGF,sBACE,qBAAA,CACA,YAAA,CACA,YAAA,CACA,WAAA,CACA,8BAAA,CACA,uBAAA,CACA,mDAAA,CACA,+BAAA,CAEA,sBACE,8BAAA,CAGF,sBACE,+BAAA,CACA,0CAAA,CAEA,4BACE,0CAAA,CACA,0BAAA,CAGF,6BACE,0BAAA,CACA,yCAAA,CACA,SAAA,CACA,wBAAA,CAGF,oBACE,4BACE,0CAAA,CACA,uBAAA,CAGF,6BACE,yCAAA,CAAA,CAKN,mCACE,kBAAA,CACA,iBAAA,CACA,eAAA,CAGF,mCACE,kBAAA,CACA,cAAA,CACA,eAAA,CAGF,mCACE,kBAAA,CACA,iBAAA,CACA,eAAA,CAIJ,sBACE,kBAAA,CACA,YAAA,CACA,0BAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAGF,sBACE,aAAA,CACA,eAAA,CACA,sBAAA,CAGF,sBACE,kBAAA,CACA,yBAAA,CACA,YAAA,CACA,sBAAA,CACA,iBAAA,CACA,mBAAA,CAEA,4BACE,0BAAA",sourcesContent:['.chip {\n  cursor: pointer;\n  display: inline-block;\n}\n\n.inner {\n  box-sizing: border-box;\n  display: flex;\n  font: inherit;\n  min-width: 0;\n  place-items: stretch flex-start;\n  transition-duration: 0.3s;\n  transition-property: background, box-shadow, transform;\n  transition-timing-function: ease;\n\n  &_active {\n    background: var(--palette-bg-1);\n  }\n\n  &_inactive {\n    background: var(--palette-white);\n    box-shadow: rgb(193 193 193 / 40%) 0 5px 20px;\n\n    &:hover {\n      box-shadow: rgb(193 193 193 / 40%) 0 5px 20px;\n      transform: translateY(-2px);\n    }\n\n    &:active {\n      background: rgb(0 0 0 / 2%);\n      box-shadow: rgb(193 193 193 / 40%) 0 1px 3px;\n      outline: 0;\n      transition-duration: 0.15s;\n    }\n\n    @media (hover: none) {\n      &:hover {\n        box-shadow: rgb(193 193 193 / 40%) 0 5px 20px;\n        transform: translateY(0);\n      }\n\n      &:active {\n        box-shadow: rgb(193 193 193 / 40%) 0 1px 3px;\n      }\n    }\n  }\n\n  &[data-size="s"] {\n    border-radius: 32px;\n    font-size: 0.875rem;\n    line-height: 2.2;\n  }\n\n  &[data-size="m"] {\n    border-radius: 36px;\n    font-size: 1rem;\n    line-height: 2.3;\n  }\n\n  &[data-size="l"] {\n    border-radius: 44px;\n    font-size: 1.15rem;\n    line-height: 2.4;\n  }\n}\n\n.content {\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n  max-width: 200px;\n  padding: 0 1rem;\n  user-select: none;\n}\n\n.content-inner {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.icon-right {\n  align-items: center;\n  color: var(--palette-bg-5);\n  display: flex;\n  justify-content: center;\n  margin-left: -11px;\n  padding-right: 0.8rem;\n\n  &:hover {\n    color: var(--palette-black);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={chip:"mQ7Pr1OHtNM_Nuxrxoxk",inner:"xnRU5VRwAR9IHNwMNU0i",inner_active:"IsC1tkzLi9Xp9jQffK7w",inner_inactive:"PlduMOnJ6XeLJ0UqNzhe",content:"P9MRpEL2LEJkCDeoQntl","content-inner":"e0AnOzvdHaDp2BqQgXc5","icon-right":"aKxx6ksxxAlOgFqVdwlc"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/components/Chip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Chip});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Chip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Chip/Chip.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Chip_module.A,options);const Chip_Chip_module=Chip_module.A&&Chip_module.A.locals?Chip_module.A.locals:void 0,clx=bind_default().bind(Chip_Chip_module),Chip=({children,iconEnd,isActive,onClick,onClickIcon,size="m",testID="chip",...props})=>react.createElement("span",{className:clx("chip"),"data-testid":testID,...props},react.createElement("span",{className:clx("inner",{inner_active:iconEnd||isActive,inner_inactive:!iconEnd&&!isActive}),"data-size":size},react.createElement("span",{className:clx("content"),"aria-pressed":isActive,role:"button",tabIndex:0,onClick},react.createElement("span",{className:clx("content-inner")},children)),iconEnd&&react.createElement("span",{className:clx("icon-right"),role:"button",tabIndex:0,onClick:onClickIcon},iconEnd))),components_Chip=Chip;Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},testID:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"chip"',computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:""},iconEnd:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/components/Icons/CrossFill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({fill="currentColor",width=24,height=24,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width,height,fill,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}))))},"./src/components/helpers/generateUniqID.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=index=>{const rand=Math.pow(index+1,2)+77;return`uniq-id-${Math.floor(rand)}`}}}]);