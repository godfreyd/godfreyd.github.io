"use strict";(self.webpackChunkcolibri_ui=self.webpackChunkcolibri_ui||[]).push([[358],{"./src/components/Tooltip/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),Portal=__webpack_require__("./src/components/Portal/index.tsx"),on=__webpack_require__("./src/components/helpers/on.ts"),ClickOutside=__webpack_require__("./src/components/ClickOutside/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tooltip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tooltip_module.A,options);const Tooltip_Tooltip_module=Tooltip_module.A&&Tooltip_module.A.locals?Tooltip_module.A.locals:void 0,clx=bind_default().bind(Tooltip_Tooltip_module),Tooltip=({children,zIndex,content,withTail=!1,placement="bottom",strategy="absolute"})=>{const[controlElement,setControlElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),[visible,setVisible]=(0,react.useState)(!1),{styles,attributes,update}=(0,usePopper.E)(controlElement,popperElement,{placement,strategy,modifiers:[{name:"flip",enabled:!0},{name:"preventOverflow",enabled:!0}]}),isNotComponent="string"==typeof children,reference=(0,react.useMemo)((()=>react.Children.only(isNotComponent?react.createElement("button",null,children):children)),[children,isNotComponent]),onToggle=(0,react.useCallback)((e=>{e.stopPropagation(),setVisible((state=>!state))}),[setVisible]),onShow=(0,react.useCallback)((()=>{setVisible(!0)}),[setVisible]),onHide=(0,react.useCallback)((()=>{setVisible(!1)}),[setVisible]),onClickOutside=(0,react.useCallback)((e=>{controlElement?.contains(e.target)||onHide()}),[onHide,controlElement]),onClickOverlay=(0,react.useCallback)((e=>{e.stopPropagation(),onHide()}),[onHide]);return(0,react.useEffect)((()=>{const unsubscribes=[];return unsubscribes.push((0,on.on)(controlElement,"mouseenter",onShow,!1)),unsubscribes.push((0,on.on)(controlElement,"mouseleave",onHide,!1)),unsubscribes.push((0,on.on)(popperElement,"mouseenter",onShow,!1)),unsubscribes.push((0,on.on)(popperElement,"mouseleave",onHide,!1)),()=>unsubscribes.forEach((un=>un()))}),[controlElement,popperElement,onToggle,onShow,onHide]),(0,react.useEffect)((()=>{update&&update()}),[update,visible]),react.createElement(react.Fragment,null,react.createElement(reference.type,{ref:setControlElement,...reference.props}),visible&&react.createElement(Portal.A,null,react.createElement(ClickOutside.A,{onClick:onClickOutside},react.createElement("div",{className:clx("root",{tail:!!withTail}),ref:setPopperElement,style:{...styles.popper,zIndex},...attributes.popper},react.createElement("div",{className:clx("overlay"),onClick:onClickOverlay},content)))))},components_Tooltip=Tooltip;Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},placement:{required:!1,tsType:{name:"Extract",elements:[{name:"PopperPlacement"},{name:"union",raw:'| "bottom-start"\n| "bottom"\n| "bottom-end"\n| "top-start"\n| "top"\n| "top-end"\n| "right-start"\n| "right"\n| "right-end"\n| "left-start"\n| "left"\n| "left-end"',elements:[{name:"literal",value:'"bottom-start"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"bottom-end"'},{name:"literal",value:'"top-start"'},{name:"literal",value:'"top"'},{name:"literal",value:'"top-end"'},{name:"literal",value:'"right-start"'},{name:"literal",value:'"right"'},{name:"literal",value:'"right-end"'},{name:"literal",value:'"left-start"'},{name:"literal",value:'"left"'},{name:"literal",value:'"left-end"'}]}],raw:'Extract<\n  PopperPlacement,\n  | "bottom-start"\n  | "bottom"\n  | "bottom-end"\n  | "top-start"\n  | "top"\n  | "top-end"\n  | "right-start"\n  | "right"\n  | "right-end"\n  | "left-start"\n  | "left"\n  | "left-end"\n>'},description:"",defaultValue:{value:'"bottom"',computed:!1}},strategy:{required:!1,tsType:{name:"PositioningStrategy"},description:"",defaultValue:{value:'"absolute"',computed:!1}},withTail:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const index_stories={title:"UI/Tooltip",parameters:{layout:"centered"},argTypes:{withTail:{control:{type:"boolean"},options:[!0,!1]}},component:components_Tooltip},Default={args:{children:react.createElement(Button.A,{variant:"primary"},"Кнопка"),content:react.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),placement:"top-end"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Button variant="primary">Кнопка</Button>,\n    content: <span>\n        {TEXT}\n      </span>,\n    placement: "top-end"\n  }\n}',...Default.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".cpeagBA1_PblpJn8Xgtv{align-items:center;border:1px solid;border-radius:var(--button-border-radius);box-sizing:border-box;color:.15s linear;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:15px;font-style:normal;font-weight:400;gap:8px;height:36px;justify-content:center;line-height:36px;overflow:hidden;padding:0 12px;text-overflow:ellipsis;transform:scale(1);transition:transform .1s ease-out;white-space:nowrap;width:fit-content}.JZ0T3cARuAH4xIBy7DGY{border-radius:50%;width:36px}.JZ0T3cARuAH4xIBy7DGY._LK4Om5HdLi0eS1LFC0z{width:29px}.JZ0T3cARuAH4xIBy7DGY.y9IBcnOzpuYW7zjRlxlg{width:32px}.JZ0T3cARuAH4xIBy7DGY.isXXoNBze0ALUc4FlB1D{width:36px}.JZ0T3cARuAH4xIBy7DGY.OzIsx53aGoLY2M05HAMl{width:42px}.iw9IiKFv2t9oYTVgI2KZ{width:100%}.J9wTKytjOWG73QMoN5WP{display:flex}._LK4Om5HdLi0eS1LFC0z{font-size:12px;height:29px;line-height:29px}.y9IBcnOzpuYW7zjRlxlg{font-size:13px;height:32px;line-height:32px}.isXXoNBze0ALUc4FlB1D{font-size:15px;height:36px;line-height:36px}.OzIsx53aGoLY2M05HAMl{font-size:18px;height:42px;line-height:42px}.R8_H4TLcLITfgZr8sZzI{background-color:var(--button-primary-background-color);border-color:var(--button-primary-border-color);color:var(--button-primary-color)}.R8_H4TLcLITfgZr8sZzI:hover{background-color:var(--button-primary-background-color-hovered);border-color:var(--button-primary-border-color-hovered);color:var(--button-primary-color-hovered)}.R8_H4TLcLITfgZr8sZzI:active{background-color:var(--button-primary-background-color-active);border-color:var(--button-primary-border-color-active);color:var(--button-primary-color-active)}.Ll9odppU45HpaYF4f3S5{background-color:var(--button-primary-background-color-disabled);border-color:var(--button-primary-border-color-disabled);color:var(--button-primary-color-disabled);cursor:not-allowed;pointer-events:none}.IsobCQJKqE8dC_oGFM7g{background-color:var(--button-secondary-background-color);border-color:var(--button-secondary-border-color);color:var(--button-secondary-color)}.IsobCQJKqE8dC_oGFM7g:hover{background-color:var(--button-secondary-background-color-hovered);border-color:var(--button-secondary-border-color-hovered);color:var(--button-secondary-color-hovered)}.IsobCQJKqE8dC_oGFM7g:active{background-color:var(--button-secondary-background-color-active);border-color:var(--button-secondary-border-color-active);color:var(--button-secondary-color-active)}.VB3JwuGBwx4hOL9c7ABM{background-color:var(--button-secondary-background-color-disabled);border-color:var(--button-secondary-border-color-disabled);color:var(--button-secondary-color-disabled);cursor:not-allowed;pointer-events:none}.qhENJTZw36dkYkqcOAft{background-color:var(--button-pseudo-background-color);border-color:var(--button-pseudo-border-color);color:var(--button-pseudo-color)}.qhENJTZw36dkYkqcOAft:hover{background-color:var(--button-pseudo-background-color-hovered);border-color:var(--button-pseudo-border-color-hovered);color:var(--button-pseudo-color-hovered)}.qhENJTZw36dkYkqcOAft:active{background-color:var(--button-pseudo-background-color-active);border-color:var(--button-pseudo-border-color-active);color:var(--button-pseudo-color-active)}.FT3lEK1JbhMmEJe_f9Dq{background-color:var(--button-pseudo-background-color-disabled);border-color:var(--button-pseudo-border-color-disabled);color:var(--button-pseudo-color-disabled);cursor:not-allowed;pointer-events:none}.TFe6MnzGh85Zk2OXqS4K{background-color:var(--button-outline-background-color);border-color:var(--button-outline-border-color);color:var(--button-outline-color)}.TFe6MnzGh85Zk2OXqS4K:hover{background-color:var(--button-outline-background-color-hovered);border-color:var(--button-outline-border-color-hovered);color:var(--button-outline-color-hovered)}.TFe6MnzGh85Zk2OXqS4K:active{background-color:var(--button-outline-background-color-active);border-color:var(--button-outline-border-color-active);color:var(--button-outline-color-active)}.Z0kOj_ytkDFL8UW5Rr3P{background-color:var(--button-outline-background-color-disabled);border-color:var(--button-outline-border-color-disabled);color:var(--button-outline-color-disabled);cursor:not-allowed;pointer-events:none}.eLB37EJ0dlPIFzkhAAFa{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:var(--button-clear-color)}.eLB37EJ0dlPIFzkhAAFa:hover{color:var(--button-clear-color-hovered)}.eLB37EJ0dlPIFzkhAAFa:active{color:var(--button-clear-color-active)}.egYD_RF2JU4s3GfUndfv{background-color:var(--button-clear-background-color-disabled);border-color:var(--button-clear-border-color-disabled);color:var(--button-clear-color-disabled);cursor:not-allowed;pointer-events:none}.Kg7tE2QVl8NIE7lUIRVu{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}","",{version:3,sources:["webpack://./src/components/Button/Button.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAA,CACA,gBAAA,CACA,yCAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,mBAAA,CACA,aAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,OAAA,CACA,WAAA,CACA,sBAAA,CACA,gBAAA,CACA,eAAA,CACA,cAAA,CACA,sBAAA,CACA,kBAAA,CACA,iCAAA,CACA,kBAAA,CACA,iBAAA,CAEA,sBACE,iBAAA,CACA,UAAA,CAEA,2CACE,UAAA,CAGF,2CACE,UAAA,CAGF,2CACE,UAAA,CAGF,2CACE,UAAA,CAIJ,sBACE,UAAA,CAIJ,sBACE,YAAA,CAIA,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAGF,sBACE,cAAA,CACA,WAAA,CACA,gBAAA,CAKF,sBACE,uDAAA,CACA,+CAAA,CACA,iCAAA,CAEA,4BACE,+DAAA,CACA,uDAAA,CACA,yCAAA,CAGF,6BACE,8DAAA,CACA,sDAAA,CACA,wCAAA,CAGF,sBACE,gEAAA,CACA,wDAAA,CACA,0CAAA,CACA,kBAAA,CACA,mBAAA,CAIJ,sBACE,yDAAA,CACA,iDAAA,CACA,mCAAA,CAEA,4BACE,iEAAA,CACA,yDAAA,CACA,2CAAA,CAGF,6BACE,gEAAA,CACA,wDAAA,CACA,0CAAA,CAGF,sBACE,kEAAA,CACA,0DAAA,CACA,4CAAA,CACA,kBAAA,CACA,mBAAA,CAIJ,sBACE,sDAAA,CACA,8CAAA,CACA,gCAAA,CAEA,4BACE,8DAAA,CACA,sDAAA,CACA,wCAAA,CAGF,6BACE,6DAAA,CACA,qDAAA,CACA,uCAAA,CAGF,sBACE,+DAAA,CACA,uDAAA,CACA,yCAAA,CACA,kBAAA,CACA,mBAAA,CAIJ,sBACE,uDAAA,CACA,+CAAA,CACA,iCAAA,CAEA,4BACE,+DAAA,CACA,uDAAA,CACA,yCAAA,CAGF,6BACE,8DAAA,CACA,sDAAA,CACA,wCAAA,CAGF,sBACE,gEAAA,CACA,wDAAA,CACA,0CAAA,CACA,kBAAA,CACA,mBAAA,CAIJ,sBACE,8BAAA,CACA,0BAAA,CACA,+BAAA,CAEA,4BACE,uCAAA,CAGF,6BACE,sCAAA,CAGF,sBACE,8DAAA,CACA,sDAAA,CACA,wCAAA,CACA,kBAAA,CACA,mBAAA,CAKN,sBACE,eAAA,CACA,sBAAA,CACA,kBAAA",sourcesContent:[".root {\n  align-items: center;\n  border: 1px solid;\n  border-radius: var(--button-border-radius);\n  box-sizing: border-box;\n  color: 0.15s linear;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  gap: 8px;\n  height: 36px;\n  justify-content: center;\n  line-height: 36px;\n  overflow: hidden;\n  padding: 0 12px;\n  text-overflow: ellipsis;\n  transform: scale(1);\n  transition: transform 0.1s ease-out;\n  white-space: nowrap;\n  width: fit-content;\n\n  &_icon {\n    border-radius: 50%;\n    width: 36px;\n\n    &.size_xs {\n      width: 29px;\n    }\n\n    &.size_s {\n      width: 32px;\n    }\n\n    &.size_m {\n      width: 36px;\n    }\n\n    &.size_l {\n      width: 42px;\n    }\n  }\n\n  &_fullWidth {\n    width: 100%;\n  }\n}\n\n.icon {\n  display: flex;\n}\n\n.size {\n  &_xs {\n    font-size: 12px;\n    height: 29px;\n    line-height: 29px;\n  }\n\n  &_s {\n    font-size: 13px;\n    height: 32px;\n    line-height: 32px;\n  }\n\n  &_m {\n    font-size: 15px;\n    height: 36px;\n    line-height: 36px;\n  }\n\n  &_l {\n    font-size: 18px;\n    height: 42px;\n    line-height: 42px;\n  }\n}\n\n.variant {\n  &_primary {\n    background-color: var(--button-primary-background-color);\n    border-color: var(--button-primary-border-color);\n    color: var(--button-primary-color);\n\n    &:hover {\n      background-color: var(--button-primary-background-color-hovered);\n      border-color: var(--button-primary-border-color-hovered);\n      color: var(--button-primary-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-primary-background-color-active);\n      border-color: var(--button-primary-border-color-active);\n      color: var(--button-primary-color-active);\n    }\n\n    &_disabled {\n      background-color: var(--button-primary-background-color-disabled);\n      border-color: var(--button-primary-border-color-disabled);\n      color: var(--button-primary-color-disabled);\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n  }\n\n  &_secondary {\n    background-color: var(--button-secondary-background-color);\n    border-color: var(--button-secondary-border-color);\n    color: var(--button-secondary-color);\n\n    &:hover {\n      background-color: var(--button-secondary-background-color-hovered);\n      border-color: var(--button-secondary-border-color-hovered);\n      color: var(--button-secondary-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-secondary-background-color-active);\n      border-color: var(--button-secondary-border-color-active);\n      color: var(--button-secondary-color-active);\n    }\n\n    &_disabled {\n      background-color: var(--button-secondary-background-color-disabled);\n      border-color: var(--button-secondary-border-color-disabled);\n      color: var(--button-secondary-color-disabled);\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n  }\n\n  &_pseudo {\n    background-color: var(--button-pseudo-background-color);\n    border-color: var(--button-pseudo-border-color);\n    color: var(--button-pseudo-color);\n\n    &:hover {\n      background-color: var(--button-pseudo-background-color-hovered);\n      border-color: var(--button-pseudo-border-color-hovered);\n      color: var(--button-pseudo-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-pseudo-background-color-active);\n      border-color: var(--button-pseudo-border-color-active);\n      color: var(--button-pseudo-color-active);\n    }\n\n    &_disabled {\n      background-color: var(--button-pseudo-background-color-disabled);\n      border-color: var(--button-pseudo-border-color-disabled);\n      color: var(--button-pseudo-color-disabled);\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n  }\n\n  &_outline {\n    background-color: var(--button-outline-background-color);\n    border-color: var(--button-outline-border-color);\n    color: var(--button-outline-color);\n\n    &:hover {\n      background-color: var(--button-outline-background-color-hovered);\n      border-color: var(--button-outline-border-color-hovered);\n      color: var(--button-outline-color-hovered);\n    }\n\n    &:active {\n      background-color: var(--button-outline-background-color-active);\n      border-color: var(--button-outline-border-color-active);\n      color: var(--button-outline-color-active);\n    }\n\n    &_disabled {\n      background-color: var(--button-outline-background-color-disabled);\n      border-color: var(--button-outline-border-color-disabled);\n      color: var(--button-outline-color-disabled);\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n  }\n\n  &_clear {\n    background-color: transparent;\n    border-color: transparent;\n    color: var(--button-clear-color);\n\n    &:hover {\n      color: var(--button-clear-color-hovered);\n    }\n\n    &:active {\n      color: var(--button-clear-color-active);\n    }\n\n    &_disabled {\n      background-color: var(--button-clear-background-color-disabled);\n      border-color: var(--button-clear-border-color-disabled);\n      color: var(--button-clear-color-disabled);\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n  }\n}\n\n.text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"cpeagBA1_PblpJn8Xgtv",root_icon:"JZ0T3cARuAH4xIBy7DGY",size_xs:"_LK4Om5HdLi0eS1LFC0z",size_s:"y9IBcnOzpuYW7zjRlxlg",size_m:"isXXoNBze0ALUc4FlB1D",size_l:"OzIsx53aGoLY2M05HAMl",root_fullWidth:"iw9IiKFv2t9oYTVgI2KZ",icon:"J9wTKytjOWG73QMoN5WP",variant_primary:"R8_H4TLcLITfgZr8sZzI",variant_primary_disabled:"Ll9odppU45HpaYF4f3S5",variant_secondary:"IsobCQJKqE8dC_oGFM7g",variant_secondary_disabled:"VB3JwuGBwx4hOL9c7ABM",variant_pseudo:"qhENJTZw36dkYkqcOAft",variant_pseudo_disabled:"FT3lEK1JbhMmEJe_f9Dq",variant_outline:"TFe6MnzGh85Zk2OXqS4K",variant_outline_disabled:"Z0kOj_ytkDFL8UW5Rr3P",variant_clear:"eLB37EJ0dlPIFzkhAAFa",variant_clear_disabled:"egYD_RF2JU4s3GfUndfv",text:"Kg7tE2QVl8NIE7lUIRVu"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.QteBaLGrS2zmzacpAwJp[data-popper-placement=bottom-start]{padding-top:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=bottom-start]::before{left:6px;top:0}.QteBaLGrS2zmzacpAwJp[data-popper-placement=bottom-end]{padding-top:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=bottom-end]::before{right:6px;top:0}.QteBaLGrS2zmzacpAwJp[data-popper-placement=bottom]{padding-top:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=bottom]::before{left:50%;top:0;transform:translate(-50%, 0)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=right]{padding-left:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=right]::before{left:-6px;top:50%;transform:translate(0, -50%) rotate(-90deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=right-start]{padding-left:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=right-start]::before{left:-6px;top:6px;transform:rotate(-90deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=right-end]{padding-left:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=right-end]::before{bottom:6px;left:-6px;transform:rotate(-90deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=left]{padding-right:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=left]::before{right:-6px;top:50%;transform:translate(0, -50%) rotate(90deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=left-start]{padding-right:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=left-start]::before{right:-6px;top:6px;transform:rotate(90deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=left-end]{padding-right:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=left-end]::before{bottom:6px;right:-6px;transform:rotate(90deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=top]{padding-bottom:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=top]::before{bottom:0;left:50%;transform:translate(-50%, 0) rotate(180deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=top-start]{padding-bottom:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=top-start]::before{bottom:0;left:6px;transform:rotate(180deg)}.QteBaLGrS2zmzacpAwJp[data-popper-placement=top-end]{padding-bottom:4px}.QteBaLGrS2zmzacpAwJp[data-popper-placement=top-end]::before{bottom:0;right:6px;transform:rotate(180deg)}.i7N_o_yVgLEYrq6sGgo_{position:relative}.i7N_o_yVgLEYrq6sGgo_::before{border-bottom:5px solid var(--tooltip-background-color);border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);content:"";height:0;position:absolute;width:0;z-index:3000}.CVHH7DVD_hBIFGOnyjpP{background-color:var(--tooltip-background-color);border-radius:var(--tooltip-border-radius);color:var(--tooltip-color);font-size:14px;font-style:normal;font-weight:400;line-height:18px;max-width:200px;overflow:hidden;padding:4px 10px;position:relative}',"",{version:3,sources:["webpack://./src/components/Tooltip/Tooltip.module.scss"],names:[],mappings:"AACE,0DACE,eAAA,CAEA,kEACE,QAAA,CACA,KAAA,CAIJ,wDACE,eAAA,CAEA,gEACE,SAAA,CACA,KAAA,CAIJ,oDACE,eAAA,CAEA,4DACE,QAAA,CACA,KAAA,CACA,4BAAA,CAIJ,mDACE,gBAAA,CAEA,2DACE,SAAA,CACA,OAAA,CACA,2CAAA,CAIJ,yDACE,gBAAA,CAEA,iEACE,SAAA,CACA,OAAA,CACA,wBAAA,CAIJ,uDACE,gBAAA,CAEA,+DACE,UAAA,CACA,SAAA,CACA,wBAAA,CAIJ,kDACE,iBAAA,CAEA,0DACE,UAAA,CACA,OAAA,CACA,0CAAA,CAIJ,wDACE,iBAAA,CAEA,gEACE,UAAA,CACA,OAAA,CACA,uBAAA,CAIJ,sDACE,iBAAA,CAEA,8DACE,UAAA,CACA,UAAA,CACA,uBAAA,CAIJ,iDACE,kBAAA,CAEA,yDACE,QAAA,CACA,QAAA,CACA,2CAAA,CAIJ,uDACE,kBAAA,CAEA,+DACE,QAAA,CACA,QAAA,CACA,wBAAA,CAIJ,qDACE,kBAAA,CAEA,6DACE,QAAA,CACA,SAAA,CACA,wBAAA,CAKN,sBACE,iBAAA,CAEA,8BACE,uDAAA,CACA,mCAAA,CACA,oCAAA,CACA,UAAA,CACA,QAAA,CACA,iBAAA,CACA,OAAA,CACA,YAAA,CAIJ,sBACE,gDAAA,CACA,0CAAA,CACA,0BAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA",sourcesContent:['.root {\n  &[data-popper-placement="bottom-start"] {\n    padding-top: 4px;\n\n    &::before {\n      left: 6px;\n      top: 0;\n    }\n  }\n\n  &[data-popper-placement="bottom-end"] {\n    padding-top: 4px;\n\n    &::before {\n      right: 6px;\n      top: 0;\n    }\n  }\n\n  &[data-popper-placement="bottom"] {\n    padding-top: 4px;\n\n    &::before {\n      left: 50%;\n      top: 0;\n      transform: translate(-50%, 0);\n    }\n  }\n\n  &[data-popper-placement="right"] {\n    padding-left: 4px;\n\n    &::before {\n      left: -6px;\n      top: 50%;\n      transform: translate(0, -50%) rotate(-90deg);\n    }\n  }\n\n  &[data-popper-placement="right-start"] {\n    padding-left: 4px;\n\n    &::before {\n      left: -6px;\n      top: 6px;\n      transform: rotate(-90deg);\n    }\n  }\n\n  &[data-popper-placement="right-end"] {\n    padding-left: 4px;\n\n    &::before {\n      bottom: 6px;\n      left: -6px;\n      transform: rotate(-90deg);\n    }\n  }\n\n  &[data-popper-placement="left"] {\n    padding-right: 4px;\n\n    &::before {\n      right: -6px;\n      top: 50%;\n      transform: translate(0, -50%) rotate(90deg);\n    }\n  }\n\n  &[data-popper-placement="left-start"] {\n    padding-right: 4px;\n\n    &::before {\n      right: -6px;\n      top: 6px;\n      transform: rotate(90deg);\n    }\n  }\n\n  &[data-popper-placement="left-end"] {\n    padding-right: 4px;\n\n    &::before {\n      bottom: 6px;\n      right: -6px;\n      transform: rotate(90deg);\n    }\n  }\n\n  &[data-popper-placement="top"] {\n    padding-bottom: 4px;\n\n    &::before {\n      bottom: 0;\n      left: 50%;\n      transform: translate(-50%, 0) rotate(180deg);\n    }\n  }\n\n  &[data-popper-placement="top-start"] {\n    padding-bottom: 4px;\n\n    &::before {\n      bottom: 0;\n      left: 6px;\n      transform: rotate(180deg);\n    }\n  }\n\n  &[data-popper-placement="top-end"] {\n    padding-bottom: 4px;\n\n    &::before {\n      bottom: 0;\n      right: 6px;\n      transform: rotate(180deg);\n    }\n  }\n}\n\n.tail {\n  position: relative;\n\n  &::before {\n    border-bottom: 5px solid var(--tooltip-background-color);\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    content: "";\n    height: 0;\n    position: absolute;\n    width: 0;\n    z-index: 3000;\n  }\n}\n\n.overlay {\n  background-color: var(--tooltip-background-color);\n  border-radius: var(--tooltip-border-radius);\n  color: var(--tooltip-color);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  max-width: 200px;\n  overflow: hidden;\n  padding: 4px 10px;\n  position: relative;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"QteBaLGrS2zmzacpAwJp",tail:"i7N_o_yVgLEYrq6sGgo_",overlay:"CVHH7DVD_hBIFGOnyjpP"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Button});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0,clx=bind_default().bind(Button_Button_module),Button=(0,react.forwardRef)((({className,fullWidth=!1,variant="primary",iconStart,iconEnd,icon,size,children,disabled,onClick,type,...props},ref)=>react.createElement("button",{onClick,ref,className:clx(Button_Button_module.root,{root_icon:!!icon,root_fullWidth:!!fullWidth,[`size_${size}`]:!!size,[`variant_${variant}`]:!!variant,[`variant_${variant}_disabled`]:!!disabled},className),disabled,"data-cy":"button",type:type||"button",role:"button",...props},icon&&react.createElement("span",{className:clx(Button_Button_module.icon)},icon),iconStart&&react.createElement("span",{className:clx(Button_Button_module.icon)},iconStart),children&&react.createElement("span",{className:clx(Button_Button_module.text)},children),iconEnd&&react.createElement("span",{className:clx(Button_Button_module.icon)},iconEnd)))),components_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1}}}},"./src/components/ClickOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ClickOutside});var react=__webpack_require__("./node_modules/react/index.js");let useOnClickOutside_element={current:void 0};const hooks_useOnClickOutside=function useOnClickOutside(ref,handler){(0,react.useEffect)((()=>{const previous=useOnClickOutside_element;useOnClickOutside_element=ref;const listener=event=>{ref?.current===useOnClickOutside_element?.current&&(useOnClickOutside_element.current?.contains(event.target)||handler(event))};return document.addEventListener("mousedown",listener,!1),document.addEventListener("touchstart",listener,!1),()=>{document.removeEventListener("mousedown",listener,!1),document.removeEventListener("touchstart",listener,!1),useOnClickOutside_element=previous}}),[handler,ref])},ClickOutside=({children,onClick})=>{const childRef=(0,react.useRef)();return hooks_useOnClickOutside(childRef,onClick),react.isValidElement(children)?react.cloneElement(children,{ref:node=>{childRef.current=node;const{ref}=children;"function"==typeof children.ref&&ref(node)}}):null},components_ClickOutside=ClickOutside;ClickOutside.__docgenInfo={description:"",methods:[],displayName:"ClickOutside",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent | TouchEvent) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent | TouchEvent",elements:[{name:"MouseEvent"},{name:"TouchEvent"}]},name:"e"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/components/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const __WEBPACK_DEFAULT_EXPORT__=({children,node})=>{const[mountNode,setMountNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setMountNode(node||document.body)})),mountNode?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children,mountNode):mountNode}},"./src/components/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{on:()=>on});const on=(element,type,listener,options)=>(element?.addEventListener(type,listener,options),()=>{element?.removeEventListener(type,listener,options)})}}]);