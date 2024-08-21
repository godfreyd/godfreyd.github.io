/*! For license information please see components-Input-index-stories.91ae6abe.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[667],{"./src/components/Input/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,TypePassword:()=>TypePassword,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),Chevron=__webpack_require__("./src/components/Icons/Chevron.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),FormField=__webpack_require__("./src/components/base/FormField/index.tsx"),InputRoot=__webpack_require__("./src/components/base/InputRoot/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BaseInput_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/base/BaseInput/BaseInput.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BaseInput_module.A,options);const BaseInput_BaseInput_module=BaseInput_module.A&&BaseInput_module.A.locals?BaseInput_module.A.locals:void 0,BaseInput=(0,react.forwardRef)((({className,onChange,...props},ref)=>react.createElement("input",{className:classnames_default()(BaseInput_BaseInput_module.baseInput,className),onChange:e=>{onChange&&onChange(e,e.target.value)},ref,...props}))),base_BaseInput=BaseInput;BaseInput.__docgenInfo={description:"",methods:[],displayName:"BaseInput"};const Input=(0,react.forwardRef)((({className,startIcon,endIcon,label,hint,error,onChange,variant="primary",size="m",...props},ref)=>react.createElement(FormField.A,{className:classnames_default()(className),label,hint,error},react.createElement(InputRoot.A,{ref,startIcon,endIcon,variant,size,disabled:!!props.disabled,error},react.createElement(base_BaseInput,{onChange,type:"text",...props}))))),components_Input=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"m"',computed:!1},required:!1}}};const index_stories={title:"UI/Input",parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["s","m","l"]},variant:{control:{type:"select"},options:["primary"]}},args:{onChange:(0,dist.fn)()},component:components_Input},Default={args:{placeholder:"Name",error:!1,disabled:!1,label:"Label",variant:"primary",hint:"hint"}},TypePassword={args:{placeholder:"Name",error:!1,disabled:!1,label:"Label",type:"password",variant:"primary",hint:"hint"}},Error={args:{placeholder:"Name",error:!0,disabled:!1,label:"Label",variant:"primary",hint:"hint"}},WithIcon={args:{placeholder:"Name",error:!1,disabled:!1,label:"Label",variant:"primary",hint:"hint",endIcon:react.createElement(Chevron.A,null)}},__namedExportsOrder=["Default","TypePassword","Error","WithIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: false,\n    disabled: false,\n    label: "Label",\n    variant: "primary",\n    hint: "hint"\n  }\n}',...Default.parameters?.docs?.source}}},TypePassword.parameters={...TypePassword.parameters,docs:{...TypePassword.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: false,\n    disabled: false,\n    label: "Label",\n    type: \'password\',\n    variant: "primary",\n    hint: "hint"\n  }\n}',...TypePassword.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: true,\n    disabled: false,\n    label: "Label",\n    variant: "primary",\n    hint: "hint"\n  }\n}',...Error.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: PLACEHOLDER,\n    error: false,\n    disabled: false,\n    label: "Label",\n    variant: "primary",\n    hint: "hint",\n    endIcon: <Chevron />\n  }\n}',...WithIcon.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/base/BaseInput/BaseInput.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rwSvpjSC4lo59odbRIrg{margin:7px 0;background:rgba(0,0,0,0);border:none;outline:none;flex:1;overflow:hidden;text-overflow:ellipsis}.rwSvpjSC4lo59odbRIrg ::placeholder{color:var(--palette-bg-2)}","",{version:3,sources:["webpack://./src/components/base/BaseInput/BaseInput.module.scss"],names:[],mappings:"AAAA,sBACI,YAAA,CACA,wBAAA,CACA,WAAA,CACA,YAAA,CACA,MAAA,CACA,eAAA,CACA,sBAAA,CAEA,oCACE,yBAAA",sourcesContent:[".baseInput {\n    margin: 7px 0;\n    background: transparent;\n    border: none;\n    outline: none;\n    flex: 1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  \n    ::placeholder {\n      color: var(--palette-bg-2);\n    }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={baseInput:"rwSvpjSC4lo59odbRIrg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);