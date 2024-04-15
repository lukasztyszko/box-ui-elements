"use strict";(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[31881],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/close-button/CloseButton.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".btn.bdl-CloseButton{width:32px;height:32px;padding:0;background-color:#e8e8e8;border:none;border-radius:6px}","",{version:3,sources:["webpack://./src/components/close-button/CloseButton.scss","webpack://./src/styles/constants/_buttons.scss","webpack://./src/styles/constants/_colors.scss","webpack://./src/styles/constants/_layout.scss"],names:[],mappings:"AAEA,qBACI,UCFa,CDGb,WCHa,CDIb,SAAA,CACA,wBEoBU,CFnBV,WAAA,CACA,iBGEyB",sourcesContent:["@import '../../styles/variables';\n\n.btn.bdl-CloseButton {\n    width: $bdl-btn-height;\n    height: $bdl-btn-height;\n    padding: 0;\n    background-color: $bdl-gray-10;\n    border: none;\n    border-radius: $bdl-border-radius-size-med;\n}\n","$bdl-btn-border-width: 1px;\n$bdl-btn-height: 32px;\n$bdl-btn-height-large: 40px;\n$bdl-btn-icon-size: 20px;\n$bdl-btn-text-icon-size: 16px;\n$bdl-btn-padding-horizontal: $bdl-grid-unit * 4;\n$bdl-btn-primary-box-shadow: inset 0 0 0 1px fade-out($white, .2), 0 1px 2px fade-out($black, .9);\n","// Box Design Language Colors\n// confirm with design before extending\n\n$white: #fff !default;\n$black: #000 !default;\n$countBadgeBackground: #e9163c !default;\n\n// Box/Primary Blues\n$bdl-box-blue: #0061d5 !default;\n$bdl-box-blue-80: #3381dd !default;\n$bdl-box-blue-50: #7fb0ea !default;\n$bdl-box-blue-40: #99c0ee !default;\n$bdl-box-blue-30: #b2cff2 !default;\n$bdl-box-blue-20: #ccdff7 !default;\n$bdl-box-blue-10: #e5effa !default;\n$bdl-box-blue-05: #f2f7fd !default;\n$bdl-box-blue-02: #fafcfe !default;\n\n// Box/Primary Grays\n$bdl-gray: #222 !default;\n$bdl-gray-80: #4e4e4e !default;\n$bdl-gray-65: #6f6f6f !default;\n$bdl-gray-50: #909090 !default;\n$bdl-gray-40: #a7a7a7 !default;\n$bdl-gray-30: #bcbcbc !default;\n$bdl-gray-20: #d3d3d3 !default;\n$bdl-gray-10: #e8e8e8 !default;\n$bdl-gray-05: #f4f4f4 !default;\n$bdl-gray-02: #fbfbfb !default;\n\n// Dark Blues\n$bdl-dark-blue: #003c84 !default;\n$bdl-dark-blue-50: #7f9dc1 !default;\n$bdl-dark-blue-20: #ccd8e6 !default;\n$bdl-dark-blue-10: #e5ebf2 !default;\n$bdl-dark-blue-05: #f2f5f9 !default;\n$bdl-dark-blue-02: #fafbfd !default;\n\n// Light Blues\n$bdl-light-blue: #2486fc !default;\n$bdl-light-blue-50: #91c2fd !default;\n$bdl-light-blue-20: #d3e7fe !default;\n$bdl-light-blue-10: #e9f2fe !default;\n$bdl-light-blue-05: #f4f9ff !default;\n$bdl-light-blue-02: #fbfdff !default;\n\n// Yelloranges\n$bdl-yellorange: #f5b31b !default;\n$bdl-yellorange-50: #fad98d !default;\n$bdl-yellorange-20: #fdf0d1 !default;\n$bdl-yellorange-10: #fef7e8 !default;\n$bdl-yellorange-05: #fefbf3 !default;\n$bdl-yellorange-02: #fffefb !default;\n\n// Yellows\n$bdl-yellow: #ffd700 !default;\n$bdl-yellow-50: #ffeb7f !default;\n$bdl-yellow-20: #fff7cc !default;\n$bdl-yellow-10: #fffbe5 !default;\n$bdl-yellow-05: #fffdf2 !default;\n$bdl-yellow-02: #fffefa !default;\n\n// Green Lights\n$bdl-green-light: #26c281 !default;\n$bdl-green-light-50: #92e0c0 !default;\n$bdl-green-light-20: #d4f3e6 !default;\n$bdl-green-light-10: #e9f8f2 !default;\n$bdl-green-light-05: #f4fcf8 !default;\n$bdl-green-light-02: #fbfefd !default;\n\n// Grimaces\n$bdl-grimace: #4826c2 !default;\n$bdl-grimace-50: #a392e0 !default;\n$bdl-grimace-20: #dad4f3 !default;\n$bdl-grimace-10: #ece9f8 !default;\n$bdl-grimace-05: #f6f4fc !default;\n$bdl-grimace-02: #fbfbfe !default;\n\n// Orange\n$bdl-orange: #f1811a !default;\n$bdl-orange-50: #f8c08c !default;\n$bdl-orange-20: #fce6d1 !default;\n$bdl-orange-10: #fdf2e8 !default;\n$bdl-orange-05: #fef8f3 !default;\n$bdl-orange-02: #fffdfb !default;\n\n// Purple Rains\n$bdl-purple-rain: #9f3fed !default;\n$bdl-purple-rain-50: #cf9ff6 !default;\n$bdl-purple-rain-20: #ecd9fb !default;\n$bdl-purple-rain-10: #f5ebfd !default;\n$bdl-purple-rain-05: #faf5fe !default;\n$bdl-purple-rain-02: #fdfbff !default;\n\n// Watermelon Reds\n$bdl-watermelon-red: #ed3757 !default;\n$bdl-watermelon-red-50: #f69bab !default;\n$bdl-watermelon-red-20: #fbd7dd !default;\n$bdl-watermelon-red-10: #fdebee !default;\n$bdl-watermelon-red-05: #fef5f6 !default;\n$bdl-watermelon-red-02: #fffbfc !default;\n","// Z-Indexes\n$modal-dialog-z-index: 160 !default;\n$menu-z-index: 170 !default;\n$submenu-z-index: 171 !default;\n$overlay-z-index: 190 !default;\n$tooltip-z-index: 190 !default;\n$notifications-wrapper-z-index: 200 !default;\n\n// Borders\n$bdl-border-radius-size: 4px;\n$bdl-border-radius-size-med: $bdl-border-radius-size * 1.5;\n$bdl-border-radius-size-large: $bdl-border-radius-size * 2;\n$bdl-border-radius-size-xlarge: $bdl-border-radius-size * 3;\n\n// Drop shadows\n$bdl-header-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);\n\n// Spacing\n$bdl-grid-unit: 4px !default;\n$bdl-grid-unit-px: 4 !default; // unitless grid unit (defined in pixels for manual multiplication in JS)\n\n// Headers\n$bdl-header-height: 64px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/close-button/CloseButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>CloseButton_stories,regular:()=>regular});__webpack_require__("./node_modules/react/index.js");var CloseButton=__webpack_require__("./src/components/close-button/CloseButton.tsx");var _regular$parameters,_regular$parameters2,_regular$parameters2$,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const regular=()=>(0,jsx_runtime.jsx)(CloseButton.Z,{});regular.displayName="regular";const CloseButton_stories={title:"Components/Buttons/CloseButton",component:CloseButton.Z,parameters:{notes:"`import CloseButton from 'box-ui-elements/es/components/close-button';`\n"}};regular.parameters=_objectSpread({},regular.parameters,{docs:_objectSpread({},null===(_regular$parameters=regular.parameters)||void 0===_regular$parameters?void 0:_regular$parameters.docs,{source:_objectSpread({originalSource:"() => <CloseButton />"},null===(_regular$parameters2=regular.parameters)||void 0===_regular$parameters2||null===(_regular$parameters2$=_regular$parameters2.docs)||void 0===_regular$parameters2$?void 0:_regular$parameters2$.source)})});const __namedExportsOrder=["regular"]},"./src/common/messages.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/react-intl/lib/index.js").vU)({cancel:{id:"boxui.core.cancel",defaultMessage:"Cancel"},close:{id:"boxui.core.close",defaultMessage:"Close"},copy:{id:"boxui.core.copy",defaultMessage:"Copy"},copied:{id:"boxui.core.copied",defaultMessage:"Copied"},done:{id:"boxui.core.done",defaultMessage:"Done"},okay:{id:"boxui.core.okay",defaultMessage:"Okay"},save:{id:"boxui.core.save",defaultMessage:"Save"},send:{id:"boxui.core.send",defaultMessage:"Send"},optional:{id:"boxui.core.optional",defaultMessage:"optional"},pillSelectorPlaceholder:{id:"boxui.share.pillSelectorPlaceholder",defaultMessage:"Add names or email addresses"},messageSelectorPlaceholder:{id:"boxui.share.messageSelectorPlaceholder",defaultMessage:"Add a message"},invalidInputError:{id:"boxui.validation.genericError",defaultMessage:"Invalid Input"},minLengthError:{id:"boxui.validation.tooShortError",defaultMessage:"Input must be at least {min} characters"},maxLengthError:{id:"boxui.validation.tooLongError",defaultMessage:"Input cannot exceed {max} characters"},invalidEmailError:{id:"boxui.validation.emailError",defaultMessage:"Invalid Email Address"},invalidURLError:{id:"boxui.validation.URLError",defaultMessage:"Invalid URL"},invalidUserError:{id:"boxui.validation.invalidUserError",defaultMessage:"Invalid User"},requiredFieldError:{id:"boxui.validation.requiredError",defaultMessage:"Required Field"},invalidDateError:{id:"boxui.validation.invalidDateError",defaultMessage:"Invalid Date"}})},"./src/components/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.L,Z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.Z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/button/Button.tsx")},"./src/components/close-button/CloseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_close_button_CloseButton});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),components_button=__webpack_require__("./src/components/button/index.ts"),IconClose=__webpack_require__("./src/icons/general/IconClose.tsx"),variables=__webpack_require__("./src/styles/variables.js"),messages=__webpack_require__("./src/common/messages.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CloseButton=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/close-button/CloseButton.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CloseButton.Z,options);CloseButton.Z&&CloseButton.Z.locals&&CloseButton.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseButton_CloseButton=_ref=>{let{className,intl,onClick}=_ref;return(0,jsx_runtime.jsx)(components_button.Z,{"aria-label":intl.formatMessage(messages.Z.close),className:classnames_default()("bdl-CloseButton",className),"data-testid":"bdl-CloseButton",onClick,type:components_button.L.BUTTON,children:(0,jsx_runtime.jsx)(IconClose.Z,{color:variables.bdlGray65,height:18,width:18})})};CloseButton_CloseButton.displayName="CloseButton";const components_close_button_CloseButton=(0,injectIntl.ZP)(CloseButton_CloseButton);try{CloseButton_CloseButton.displayName="CloseButton",CloseButton_CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{className:{defaultValue:null,description:"Custom class for the close button",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"onClick handler for the close button",name:"onClick",required:!1,type:{name:"Function"}},forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"Ref<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/close-button/CloseButton.tsx#CloseButton"]={docgenInfo:CloseButton_CloseButton.__docgenInfo,name:"CloseButton",path:"src/components/close-button/CloseButton.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/accessible-svg/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>accessible_svg_AccessibleSVG});var react=__webpack_require__("./node_modules/react/index.js"),omit=__webpack_require__("./node_modules/lodash/omit.js"),omit_default=__webpack_require__.n(omit),uniqueId=__webpack_require__("./node_modules/lodash/uniqueId.js"),uniqueId_default=__webpack_require__.n(uniqueId),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class AccessibleSVG extends react.Component{constructor(){super(...arguments),_defineProperty(this,"id",uniqueId_default()("icon"))}render(){const _this$props=this.props,{children,title}=_this$props,rest=_objectWithoutProperties(_this$props,["children","title"]),titleID="".concat(this.id,"-title"),svgProps=omit_default()(rest,["role","aria-labelledby"]);return svgProps.focusable="false",title?(svgProps["aria-labelledby"]=titleID,svgProps.role="img"):(svgProps["aria-hidden"]="true",svgProps.role="presentation"),(0,jsx_runtime.jsxs)("svg",function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},svgProps,{children:[title?(0,jsx_runtime.jsx)("title",{id:titleID,children:title}):null,children]}))}}AccessibleSVG.displayName="AccessibleSVG";const accessible_svg_AccessibleSVG=AccessibleSVG;try{AccessibleSVG.displayName="AccessibleSVG",AccessibleSVG.__docgenInfo={description:"",displayName:"AccessibleSVG",props:{"aria-hidden":{defaultValue:null,description:"",name:"aria-hidden",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},focusable:{defaultValue:null,description:"",name:"focusable",required:!1,type:{name:'boolean | "true" | "false" | "auto"'}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Class for the svg",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height for the svg",name:"height",required:!1,type:{name:"number"}},role:{defaultValue:null,description:"Accessibility role for the svg",name:"role",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"A text-only string describing the icon if it's not purely decorative for accessibility",name:"title",required:!1,type:{name:"ReactNode"}},viewBox:{defaultValue:null,description:"View box for the svg",name:"viewBox",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width for the svg",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/accessible-svg/AccessibleSVG.tsx#AccessibleSVG"]={docgenInfo:AccessibleSVG.__docgenInfo,name:"AccessibleSVG",path:"src/icons/accessible-svg/AccessibleSVG.tsx#AccessibleSVG"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/general/IconClose.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icons/accessible-svg/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconClose=_ref=>{let{className="",color="#000000",height=24,title,width=24}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"icon-close ".concat(className),height,title,viewBox:"0 0 24 24",width,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{className:"fill-color",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})};IconClose.displayName="IconClose";const __WEBPACK_DEFAULT_EXPORT__=IconClose;try{IconClose.displayName="IconClose",IconClose.__docgenInfo={description:"",displayName:"IconClose",props:{color:{defaultValue:{value:"#000000"},description:"A string describing the color for the icon",name:"color",required:!1,type:{name:"string"}},fillColor:{defaultValue:null,description:"A string describing the fill color for the icon",name:"fillColor",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"A number specifying the opacity of the icon",name:"opacity",required:!1,type:{name:"number"}},strokeColor:{defaultValue:null,description:"A string describing the color of the icon's stroke",name:"strokeColor",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:null,description:"A number specifying the width of the icon's stroke",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Class name for the icon",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:{value:"24"},description:"A number specifying the height of the icon",name:"height",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"A string describing the icon if it's not purely decorative for accessibility",name:"title",required:!1,type:{name:"string | ReactElement<string, string | JSXElementConstructor<any>>"}},width:{defaultValue:{value:"24"},description:"A number specifying the width of the icon",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/general/IconClose.tsx#IconClose"]={docgenInfo:IconClose.__docgenInfo,name:"IconClose",path:"src/icons/general/IconClose.tsx#IconClose"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/variables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{avatarColors:()=>avatarColors,bdlBorderRadiusSize:()=>bdlBorderRadiusSize,bdlBorderRadiusSizeLarge:()=>bdlBorderRadiusSizeLarge,bdlBorderRadiusSizeMed:()=>bdlBorderRadiusSizeMed,bdlBorderRadiusSizeXlarge:()=>bdlBorderRadiusSizeXlarge,bdlBoxBlue:()=>bdlBoxBlue,bdlBoxBlue02:()=>bdlBoxBlue02,bdlBoxBlue05:()=>bdlBoxBlue05,bdlBoxBlue10:()=>bdlBoxBlue10,bdlBoxBlue20:()=>bdlBoxBlue20,bdlBoxBlue30:()=>bdlBoxBlue30,bdlBoxBlue40:()=>bdlBoxBlue40,bdlBoxBlue50:()=>bdlBoxBlue50,bdlBoxBlue80:()=>bdlBoxBlue80,bdlBtnBorderWidth:()=>bdlBtnBorderWidth,bdlBtnHeight:()=>bdlBtnHeight,bdlBtnHeightLarge:()=>bdlBtnHeightLarge,bdlBtnIconSize:()=>bdlBtnIconSize,bdlBtnPaddingHorizontal:()=>bdlBtnPaddingHorizontal,bdlBtnTextIconSize:()=>bdlBtnTextIconSize,bdlDarkBlue:()=>bdlDarkBlue,bdlDarkBlue02:()=>bdlDarkBlue02,bdlDarkBlue05:()=>bdlDarkBlue05,bdlDarkBlue10:()=>bdlDarkBlue10,bdlDarkBlue20:()=>bdlDarkBlue20,bdlDarkBlue50:()=>bdlDarkBlue50,bdlFontSize:()=>bdlFontSize,bdlFontSizeDejaBlue:()=>bdlFontSizeDejaBlue,bdlFontSizeMinimum:()=>bdlFontSizeMinimum,bdlGray:()=>bdlGray,bdlGray02:()=>bdlGray02,bdlGray05:()=>bdlGray05,bdlGray10:()=>bdlGray10,bdlGray20:()=>bdlGray20,bdlGray30:()=>bdlGray30,bdlGray40:()=>bdlGray40,bdlGray50:()=>bdlGray50,bdlGray65:()=>bdlGray65,bdlGray80:()=>bdlGray80,bdlGreenLight:()=>bdlGreenLight,bdlGreenLight02:()=>bdlGreenLight02,bdlGreenLight05:()=>bdlGreenLight05,bdlGreenLight10:()=>bdlGreenLight10,bdlGreenLight20:()=>bdlGreenLight20,bdlGreenLight50:()=>bdlGreenLight50,bdlGridUnit:()=>bdlGridUnit,bdlGridUnitPx:()=>bdlGridUnitPx,bdlGrimace:()=>bdlGrimace,bdlGrimace02:()=>bdlGrimace02,bdlGrimace05:()=>bdlGrimace05,bdlGrimace10:()=>bdlGrimace10,bdlGrimace20:()=>bdlGrimace20,bdlGrimace50:()=>bdlGrimace50,bdlHeaderBoxShadow:()=>bdlHeaderBoxShadow,bdlHeaderHeight:()=>bdlHeaderHeight,bdlLightBlue:()=>bdlLightBlue,bdlLightBlue02:()=>bdlLightBlue02,bdlLightBlue05:()=>bdlLightBlue05,bdlLightBlue10:()=>bdlLightBlue10,bdlLightBlue20:()=>bdlLightBlue20,bdlLightBlue50:()=>bdlLightBlue50,bdlLineHeight:()=>bdlLineHeight,bdlOrange:()=>bdlOrange,bdlOrange02:()=>bdlOrange02,bdlOrange05:()=>bdlOrange05,bdlOrange10:()=>bdlOrange10,bdlOrange20:()=>bdlOrange20,bdlOrange50:()=>bdlOrange50,bdlPurpleRain:()=>bdlPurpleRain,bdlPurpleRain02:()=>bdlPurpleRain02,bdlPurpleRain05:()=>bdlPurpleRain05,bdlPurpleRain10:()=>bdlPurpleRain10,bdlPurpleRain20:()=>bdlPurpleRain20,bdlPurpleRain50:()=>bdlPurpleRain50,bdlTimingFunction:()=>bdlTimingFunction,bdlTransitionDurationBase:()=>bdlTransitionDurationBase,bdlWatermelonRed:()=>bdlWatermelonRed,bdlWatermelonRed02:()=>bdlWatermelonRed02,bdlWatermelonRed05:()=>bdlWatermelonRed05,bdlWatermelonRed10:()=>bdlWatermelonRed10,bdlWatermelonRed20:()=>bdlWatermelonRed20,bdlWatermelonRed50:()=>bdlWatermelonRed50,bdlYellorange:()=>bdlYellorange,bdlYellorange02:()=>bdlYellorange02,bdlYellorange05:()=>bdlYellorange05,bdlYellorange10:()=>bdlYellorange10,bdlYellorange20:()=>bdlYellorange20,bdlYellorange50:()=>bdlYellorange50,bdlYellow:()=>bdlYellow,bdlYellow02:()=>bdlYellow02,bdlYellow05:()=>bdlYellow05,bdlYellow10:()=>bdlYellow10,bdlYellow20:()=>bdlYellow20,bdlYellow50:()=>bdlYellow50,black:()=>black,countBadgeBackground:()=>countBadgeBackground,largeScreen:()=>largeScreen,mediumScreen:()=>mediumScreen,menuZIndex:()=>menuZIndex,modalDialogZIndex:()=>modalDialogZIndex,notificationsWrapperZIndex:()=>notificationsWrapperZIndex,overlayZIndex:()=>overlayZIndex,sizeLargeMax:()=>sizeLargeMax,sizeLargeMin:()=>sizeLargeMin,sizeMediumMax:()=>sizeMediumMax,sizeMediumMin:()=>sizeMediumMin,sizeSmallMax:()=>sizeSmallMax,sizeSmallMediumMax:()=>sizeSmallMediumMax,sizeSmallMediumMin:()=>sizeSmallMediumMin,sizeXlargeMax:()=>sizeXlargeMax,smallMediumScreen:()=>smallMediumScreen,smallScreen:()=>smallScreen,submenuZIndex:()=>submenuZIndex,tooltipZIndex:()=>tooltipZIndex,white:()=>white,xlargeScreen:()=>xlargeScreen});const white="#fff",black="#000",countBadgeBackground="#e9163c",bdlBoxBlue="#0061d5",bdlBoxBlue80="#3381dd",bdlBoxBlue50="#7fb0ea",bdlBoxBlue40="#99c0ee",bdlBoxBlue30="#b2cff2",bdlBoxBlue20="#ccdff7",bdlBoxBlue10="#e5effa",bdlBoxBlue05="#f2f7fd",bdlBoxBlue02="#fafcfe",bdlGray="#222",bdlGray80="#4e4e4e",bdlGray65="#6f6f6f",bdlGray50="#909090",bdlGray40="#a7a7a7",bdlGray30="#bcbcbc",bdlGray20="#d3d3d3",bdlGray10="#e8e8e8",bdlGray05="#f4f4f4",bdlGray02="#fbfbfb",bdlDarkBlue="#003c84",bdlDarkBlue50="#7f9dc1",bdlDarkBlue20="#ccd8e6",bdlDarkBlue10="#e5ebf2",bdlDarkBlue05="#f2f5f9",bdlDarkBlue02="#fafbfd",bdlLightBlue="#2486fc",bdlLightBlue50="#91c2fd",bdlLightBlue20="#d3e7fe",bdlLightBlue10="#e9f2fe",bdlLightBlue05="#f4f9ff",bdlLightBlue02="#fbfdff",bdlYellorange="#f5b31b",bdlYellorange50="#fad98d",bdlYellorange20="#fdf0d1",bdlYellorange10="#fef7e8",bdlYellorange05="#fefbf3",bdlYellorange02="#fffefb",bdlYellow="#ffd700",bdlYellow50="#ffeb7f",bdlYellow20="#fff7cc",bdlYellow10="#fffbe5",bdlYellow05="#fffdf2",bdlYellow02="#fffefa",bdlGreenLight="#26c281",bdlGreenLight50="#92e0c0",bdlGreenLight20="#d4f3e6",bdlGreenLight10="#e9f8f2",bdlGreenLight05="#f4fcf8",bdlGreenLight02="#fbfefd",bdlGrimace="#4826c2",bdlGrimace50="#a392e0",bdlGrimace20="#dad4f3",bdlGrimace10="#ece9f8",bdlGrimace05="#f6f4fc",bdlGrimace02="#fbfbfe",bdlOrange="#f1811a",bdlOrange50="#f8c08c",bdlOrange20="#fce6d1",bdlOrange10="#fdf2e8",bdlOrange05="#fef8f3",bdlOrange02="#fffdfb",bdlPurpleRain="#9f3fed",bdlPurpleRain50="#cf9ff6",bdlPurpleRain20="#ecd9fb",bdlPurpleRain10="#f5ebfd",bdlPurpleRain05="#faf5fe",bdlPurpleRain02="#fdfbff",bdlWatermelonRed="#ed3757",bdlWatermelonRed50="#f69bab",bdlWatermelonRed20="#fbd7dd",bdlWatermelonRed10="#fdebee",bdlWatermelonRed05="#fef5f6",bdlWatermelonRed02="#fffbfc",bdlLineHeight="20px",bdlFontSize="13px",bdlFontSizeMinimum="11px",bdlFontSizeDejaBlue="14px",avatarColors=["#0061d5","#003c84","#6f6f6f","#222","#4826c2","#9f3fed"],modalDialogZIndex="160",menuZIndex="170",submenuZIndex="171",overlayZIndex="190",tooltipZIndex="190",notificationsWrapperZIndex="200",bdlBorderRadiusSize="4px",bdlBorderRadiusSizeMed="6px",bdlBorderRadiusSizeLarge="8px",bdlBorderRadiusSizeXlarge="12px",bdlHeaderBoxShadow=["0 0 10px 0 rgba(0","0","0","0.05)"],bdlGridUnit="4px",bdlGridUnitPx="4",bdlHeaderHeight="64px",bdlBtnBorderWidth="1px",bdlBtnHeight="32px",bdlBtnHeightLarge="40px",bdlBtnIconSize="20px",bdlBtnTextIconSize="16px",bdlBtnPaddingHorizontal="16px",bdlTransitionDurationBase="0.15s",bdlTimingFunction=["cubic-bezier(0","0","0.6","1)"],sizeSmallMediumMin="375px",sizeMediumMin="461px",sizeLargeMin="768px",sizeSmallMax="374px",sizeSmallMediumMax="460px",sizeMediumMax="767px",sizeLargeMax="1023px",sizeXlargeMax="1219px",smallScreen="(max-width: 374px)",smallMediumScreen="(max-width: 460px)",mediumScreen="(max-width: 767px)",largeScreen="(max-width: 1023px)",xlargeScreen="(max-width: 1219px)"},"./node_modules/react-intl/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ji:()=>FormattedDate,BK:()=>FormattedNumber,vU:()=>defineMessages});var DisplayName,DisplayNameParts,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),components_useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");!function(DisplayName){DisplayName.formatDate="FormattedDate",DisplayName.formatTime="FormattedTime",DisplayName.formatNumber="FormattedNumber",DisplayName.formatList="FormattedList",DisplayName.formatDisplayName="FormattedDisplayName"}(DisplayName||(DisplayName={})),function(DisplayNameParts){DisplayNameParts.formatDate="FormattedDateParts",DisplayNameParts.formatTime="FormattedTimeParts",DisplayNameParts.formatNumber="FormattedNumberParts",DisplayNameParts.formatList="FormattedListParts"}(DisplayNameParts||(DisplayNameParts={}));var FormattedNumberParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]);return children(intl.formatNumberToParts(value,formatProps))};FormattedNumberParts.displayName="FormattedNumberParts";function createFormattedDateTimePartsComponent(name){var ComponentParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),date="string"==typeof value?new Date(value||0):value;return children("formatDate"===name?intl.formatDateToParts(date,formatProps):intl.formatTimeToParts(date,formatProps))};return ComponentParts.displayName=DisplayNameParts[name],ComponentParts}function createFormattedComponent(name){var Component=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),formattedValue=intl[name](value,formatProps);if("function"==typeof children)return children(formattedValue);var Text=intl.textComponent||react.Fragment;return react.createElement(Text,null,formattedValue)};return Component.displayName=DisplayName[name],Component}function defineMessages(msgs){return msgs}FormattedNumberParts.displayName="FormattedNumberParts";var FormattedDate=createFormattedComponent("formatDate"),FormattedNumber=(createFormattedComponent("formatTime"),createFormattedComponent("formatNumber"));createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"./node_modules/react-intl/lib/src/components/useIntl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useIntl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_injectIntl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function useIntl(){var intl=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__._y);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.lq)(intl),intl}}}]);