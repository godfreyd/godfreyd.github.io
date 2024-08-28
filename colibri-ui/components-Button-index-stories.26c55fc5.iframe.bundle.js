(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[819],{"./src/components/Button/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Sizes:()=>Sizes,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,onlyIcon:()=>onlyIcon,withIcon:()=>withIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_Icons_More__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icons/More.tsx"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Button",parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["xs","s","m","l"]},variant:{control:{type:"select"},options:["primary","secondary","outline","pseudo","clear"]},disabled:{control:{type:"boolean"},options:[!0,!1]},fullWidth:{control:{type:"boolean"},options:[!0,!1]}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()},component:___WEBPACK_IMPORTED_MODULE_3__.A},Default={args:{children:"Click me"}},withIcon={args:{children:"Click me",iconEnd:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_More__WEBPACK_IMPORTED_MODULE_2__.A,null)}},onlyIcon={args:{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_More__WEBPACK_IMPORTED_MODULE_2__.A,null),size:"xs"}},Sizes=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"xs",...args},"size = xs"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"s",...args},"size = s"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"m",...args},"size = m"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"l",...args},"size = l")),Variants=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"m",variant:"primary",...args},"primary"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"m",variant:"secondary",...args},"secondary"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"m",variant:"outline",...args},"outline"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"m",variant:"pseudo",...args},"pseudo"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,{size:"m",variant:"clear",...args},"clear")),__namedExportsOrder=["Default","withIcon","onlyIcon","Sizes","Variants"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: TEXT\n  }\n}",...Default.parameters?.docs?.source}}},withIcon.parameters={...withIcon.parameters,docs:{...withIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: TEXT,\n    iconEnd: <More />\n  }\n}",...withIcon.parameters?.docs?.source}}},onlyIcon.parameters={...onlyIcon.parameters,docs:{...onlyIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <More />,\n    size: 'xs'\n  }\n}",...onlyIcon.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'args => <div>\n    <Button size="xs" {...args}>\n      size = xs\n    </Button>\n    <Button size="s" {...args}>\n      size = s\n    </Button>\n    <Button size="m" {...args}>\n      size = m\n    </Button>\n    <Button size="l" {...args}>\n      size = l\n    </Button>\n  </div>',...Sizes.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'args => <div>\n    <Button size="m" variant="primary" {...args}>\n      primary\n    </Button>\n    <Button size="m" variant="secondary" {...args}>\n      secondary\n    </Button>\n    <Button size="m" variant="outline" {...args}>\n      outline\n    </Button>\n    <Button size="m" variant="pseudo" {...args}>\n      pseudo\n    </Button>\n    <Button size="m" variant="clear" {...args}>\n      clear\n    </Button>\n  </div>',...Variants.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".cpeagBA1_PblpJn8Xgtv{align-items:center;border:1px solid;border-radius:var(--button-border-radius);box-sizing:border-box;color:.15s linear;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:15px;font-style:normal;font-weight:400;gap:8px;height:36px;justify-content:center;line-height:36px;overflow:hidden;padding:0 12px;text-overflow:ellipsis;transform:scale(1);transition:transform .1s ease-out;white-space:nowrap;width:fit-content}.JZ0T3cARuAH4xIBy7DGY{border-radius:50%;width:36px}.JZ0T3cARuAH4xIBy7DGY._LK4Om5HdLi0eS1LFC0z{width:29px}.JZ0T3cARuAH4xIBy7DGY.y9IBcnOzpuYW7zjRlxlg{width:32px}.JZ0T3cARuAH4xIBy7DGY.isXXoNBze0ALUc4FlB1D{width:36px}.JZ0T3cARuAH4xIBy7DGY.OzIsx53aGoLY2M05HAMl{width:42px}.iw9IiKFv2t9oYTVgI2KZ{width:100%}._8EZAkblgTGu_QG8wcwL{background-color:var(--button-primary-background-color-disabled);border-color:var(--button-primary-border-color-disabled);color:var(--button-primary-color-disabled);cursor:not-allowed;pointer-events:none}.J9wTKytjOWG73QMoN5WP{display:flex}._LK4Om5HdLi0eS1LFC0z{font-size:12px;height:29px;line-height:29px}.y9IBcnOzpuYW7zjRlxlg{font-size:13px;height:32px;line-height:32px}.isXXoNBze0ALUc4FlB1D{font-size:15px;height:36px;line-height:36px}.OzIsx53aGoLY2M05HAMl{font-size:18px;height:42px;line-height:42px}.R8_H4TLcLITfgZr8sZzI{background-color:var(--button-primary-background-color);border-color:var(--button-primary-border-color);color:var(--button-primary-color)}.R8_H4TLcLITfgZr8sZzI:hover{background-color:var(--button-primary-background-color-hovered);border-color:var(--button-primary-border-color-hovered);color:var(--button-primary-color-hovered)}.R8_H4TLcLITfgZr8sZzI:active{background-color:var(--button-primary-background-color-active);border-color:var(--button-primary-border-color-active);color:var(--button-primary-color-active)}.IsobCQJKqE8dC_oGFM7g{background-color:var(--button-secondary-background-color);border-color:var(--button-secondary-border-color);color:var(--button-secondary-color)}.IsobCQJKqE8dC_oGFM7g:hover{background-color:var(--button-secondary-background-color-hovered);border-color:var(--button-secondary-border-color-hovered);color:var(--button-secondary-color-hovered)}.IsobCQJKqE8dC_oGFM7g:active{background-color:var(--button-secondary-background-color-active);border-color:var(--button-secondary-border-color-active);color:var(--button-secondary-color-active)}.qhENJTZw36dkYkqcOAft{background-color:var(--button-pseudo-background-color);border-color:var(--button-pseudo-border-color);color:var(--button-pseudo-color)}.qhENJTZw36dkYkqcOAft:hover{background-color:var(--button-pseudo-background-color-hovered);border-color:var(--button-pseudo-border-color-hovered);color:var(--button-pseudo-color-hovered)}.qhENJTZw36dkYkqcOAft:active{background-color:var(--button-pseudo-background-color-active);border-color:var(--button-pseudo-border-color-active);color:var(--button-pseudo-color-active)}.TFe6MnzGh85Zk2OXqS4K{background-color:var(--button-outline-background-color);border-color:var(--button-outline-border-color);color:var(--button-outline-color)}.TFe6MnzGh85Zk2OXqS4K:hover{background-color:var(--button-outline-background-color-hovered);border-color:var(--button-outline-border-color-hovered);color:var(--button-outline-color-hovered)}.TFe6MnzGh85Zk2OXqS4K:active{background-color:var(--button-outline-background-color-active);border-color:var(--button-outline-border-color-active);color:var(--button-outline-color-active)}.eLB37EJ0dlPIFzkhAAFa{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:var(--button-clear-color)}.eLB37EJ0dlPIFzkhAAFa:hover{color:var(--button-clear-color-hovered)}.eLB37EJ0dlPIFzkhAAFa:active{color:var(--button-clear-color-active)}","",{version:3,sources:["webpack://./src/components/Button/Button.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAA,CACA,gBAAA,CACA,yCAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,mBAAA,CACA,aAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,OAAA,CACA,WAAA,CACA,sBAAA,CACA,gBAAA,CACA,eAAA,CACA,cAAA,CACA,sBAAA,CACA,kBAAA,CACA,iCAAA,CACA,kBAAA,CACA,iBAAA,CAEA,sBACE,iBAAA,CACA,UAAA,CAEA,2CACE,UAAA,CAGF,2CACE,UAAA,CAGF,2CACE,UAAA,CAGF,2CACE,UAAA,CAIJ,sBACE,UAAA,CAGF,sBACE,gEAAA,CACA,wDAAA,CACA,0CAAA,CACA,kBAAA,CACA,mBAAA,CAIJ,sBACE,YAAA,CAIA,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAKF,sBACE,uDAAA,CACA,+CAAA,CACA,iCAAA,CAEA,4BACE,+DAAA,CACA,uDAAA,CACA,yCAAA,CAGF,6BACE,8DAAA,CACA,sDAAA,CACA,wCAAA,CAIJ,sBACE,yDAAA,CACA,iDAAA,CACA,mCAAA,CAEA,4BACE,iEAAA,CACA,yDAAA,CACA,2CAAA,CAGF,6BACE,gEAAA,CACA,wDAAA,CACA,0CAAA,CAIJ,sBACE,sDAAA,CACA,8CAAA,CACA,gCAAA,CAEA,4BACE,8DAAA,CACA,sDAAA,CACA,wCAAA,CAGF,6BACE,6DAAA,CACA,qDAAA,CACA,uCAAA,CAIJ,sBACE,uDAAA,CACA,+CAAA,CACA,iCAAA,CAEA,4BACE,+DAAA,CACA,uDAAA,CACA,yCAAA,CAGF,6BACE,8DAAA,CACA,sDAAA,CACA,wCAAA,CAIJ,sBACE,8BAAA,CACA,0BAAA,CACA,+BAAA,CAEA,4BACE,uCAAA,CAGF,6BACE,sCAAA",sourcesContent:[".root {\n  align-items: center;\n  border: 1px solid;\n  border-radius: var(--button-border-radius);\n  box-sizing: border-box;\n  color: 0.15s linear;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  gap: 8px;\n  height: 36px;\n  justify-content: center;\n  line-height: 36px;\n  overflow: hidden;\n  padding: 0 12px;\n  text-overflow: ellipsis;\n  transform: scale(1);\n  transition: transform 0.1s ease-out;\n  white-space: nowrap;\n  width: fit-content;\n\n  &_icon {\n    border-radius: 50%;\n    width: 36px;\n\n    &.size_xs {\n      width: 29px;\n    }\n\n    &.size_s {\n      width: 32px;\n    }\n\n    &.size_m {\n      width: 36px;\n    }\n\n    &.size_l {\n      width: 42px;\n    }\n  }\n\n  &_fullWidth {\n    width: 100%;\n  }\n\n  &_disabled {\n    background-color: var(--button-primary-background-color-disabled);\n    border-color: var(--button-primary-border-color-disabled);\n    color: var(--button-primary-color-disabled);\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n}\n\n.icon {\n  display: flex;\n}\n\n.size {\n  &_xs {\n    font-size: 12px;\n    height: 29px;\n    line-height: 29px;\n  }\n\n  &_s {\n    font-size: 13px;\n    height: 32px;\n    line-height: 32px;\n  }\n\n  &_m {\n    font-size: 15px;\n    height: 36px;\n    line-height: 36px;\n  }\n\n  &_l {\n    font-size: 18px;\n    height: 42px;\n    line-height: 42px;\n  }\n}\n\n.variant {\n  &_primary {\n    background-color: var(--button-primary-background-color);\n    border-color: var(--button-primary-border-color);\n    color: var(--button-primary-color);\n\n    &:hover {\n      background-color: var(--button-primary-background-color-hovered);\n      border-color: var(--button-primary-border-color-hovered);\n      color: var(--button-primary-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-primary-background-color-active);\n      border-color: var(--button-primary-border-color-active);\n      color: var(--button-primary-color-active);\n    }\n  }\n\n  &_secondary {\n    background-color: var(--button-secondary-background-color);\n    border-color: var(--button-secondary-border-color);\n    color: var(--button-secondary-color);\n\n    &:hover {\n      background-color: var(--button-secondary-background-color-hovered);\n      border-color: var(--button-secondary-border-color-hovered);\n      color: var(--button-secondary-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-secondary-background-color-active);\n      border-color: var(--button-secondary-border-color-active);\n      color: var(--button-secondary-color-active);\n    }\n  }\n\n  &_pseudo {\n    background-color: var(--button-pseudo-background-color);\n    border-color: var(--button-pseudo-border-color);\n    color: var(--button-pseudo-color);\n\n    &:hover {\n      background-color: var(--button-pseudo-background-color-hovered);\n      border-color: var(--button-pseudo-border-color-hovered);\n      color: var(--button-pseudo-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-pseudo-background-color-active);\n      border-color: var(--button-pseudo-border-color-active);\n      color: var(--button-pseudo-color-active);\n    }\n  }\n\n  &_outline {\n    background-color: var(--button-outline-background-color);\n    border-color: var(--button-outline-border-color);\n    color: var(--button-outline-color);\n\n    &:hover {\n      background-color: var(--button-outline-background-color-hovered);\n      border-color: var(--button-outline-border-color-hovered);\n      color: var(--button-outline-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-outline-background-color-active);\n      border-color: var(--button-outline-border-color-active);\n      color: var(--button-outline-color-active);\n    }\n  }\n\n  &_clear {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--button-clear-color);\n\n    &:hover {\n      color: var(--button-clear-color-hovered);\n    }\n\n    &:active {\n      color: var(--button-clear-color-active);\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"cpeagBA1_PblpJn8Xgtv",root_icon:"JZ0T3cARuAH4xIBy7DGY",size_xs:"_LK4Om5HdLi0eS1LFC0z",size_s:"y9IBcnOzpuYW7zjRlxlg",size_m:"isXXoNBze0ALUc4FlB1D",size_l:"OzIsx53aGoLY2M05HAMl",root_fullWidth:"iw9IiKFv2t9oYTVgI2KZ",root_disabled:"_8EZAkblgTGu_QG8wcwL",icon:"J9wTKytjOWG73QMoN5WP",variant_primary:"R8_H4TLcLITfgZr8sZzI",variant_secondary:"IsobCQJKqE8dC_oGFM7g",variant_pseudo:"qhENJTZw36dkYkqcOAft",variant_outline:"TFe6MnzGh85Zk2OXqS4K",variant_clear:"eLB37EJ0dlPIFzkhAAFa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_Button});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0,clx=bind_default().bind(Button_Button_module),Button=(0,react.forwardRef)((({className,fullWidth=!1,variant="primary",iconStart,iconEnd,icon,size,children,disabled,onClick,...props},ref)=>react.createElement("button",{onClick,ref,className:clx(Button_Button_module.root,{root_icon:!!icon,root_disabled:disabled?1:0,root_fullWidth:fullWidth?1:0,[`size_${size}`]:!!size,[`variant_${variant}`]:!!variant},className),disabled,"data-cy":"button",...props},icon&&react.createElement("span",{className:clx(Button_Button_module.icon)},icon),iconStart&&react.createElement("span",{className:clx(Button_Button_module.icon)},iconStart),children&&children,iconEnd&&react.createElement("span",{className:clx(Button_Button_module.icon)},iconEnd)))),components_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1}}}},"./src/components/Icons/More.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({fill="currentColor",width=24,height=24,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill,width,height,ref,...props,viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"5",cy:"12",r:"1.75"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"12",cy:"12",r:"1.75"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"19",cy:"12",r:"1.75"}))))}}]);