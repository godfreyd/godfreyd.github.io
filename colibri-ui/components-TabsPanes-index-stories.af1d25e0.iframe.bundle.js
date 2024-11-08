/*! For license information please see components-TabsPanes-index-stories.af1d25e0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[950],{"./src/components/TabsPanes/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const TabsPanesPane=({content,className,...props})=>react.createElement("div",{...props,role:"tabpanel",className:classnames_default()(null,className)},content);TabsPanesPane.__docgenInfo={description:"",methods:[],displayName:"TabsPanesPane",props:{content:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const TabsPanes=({activePane,className,innerRef,panes,...props})=>{const currentPane=panes.reduce(((acc,pane)=>null!==acc?acc:pane.id===activePane?pane:null),null),{id,...paneProps}=currentPane||{};return react.createElement("div",{...props,ref:innerRef,role:"menutabpanes",className:classnames_default()(null,[className])},currentPane&&react.createElement(TabsPanesPane,paneProps))},components_TabsPanes=TabsPanes;TabsPanes.__docgenInfo={description:"",methods:[],displayName:"TabsPanes",props:{activePane:{required:!1,tsType:{name:"string"},description:""},panes:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  content?: ReactNode;\n  disabled?: boolean;\n  className?: string;\n  id?: string;\n}",signature:{properties:[{key:"content",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}}]}}],raw:"PaneProps[]"},description:""},innerRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLDivElement"}],raw:"RefObject<HTMLDivElement>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const index_stories={title:"UI/TabsPanes",parameters:{layout:"centered"},argTypes:{},component:components_TabsPanes},Default=args=>react.createElement(components_TabsPanes,{...args,activePane:"2",panes:[{id:"1",content:"Pane 1 content"},{id:"2",content:"Pane 2 content"}]}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: Story) => {\n  return <TabsPanes {...args} activePane=\"2\" panes={[{\n    id: '1',\n    content: 'Pane 1 content'\n  }, {\n    id: '2',\n    content: 'Pane 2 content'\n  }]} />;\n}",...Default.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);