"use strict";(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[94461],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/label/Label.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".bdl-Label,.label{display:block;color:#6f6f6f;font-weight:bold}.bdl-Label .bdl-Label-optional,.label .bdl-Label-optional,.bdl-Label .label-optional,.label .label-optional{padding-left:3px}.bdl-Label .tooltip-icon-container,.label .tooltip-icon-container{padding-left:3px}.bdl-Label .tooltip-icon-container .tooltip-icon,.label .tooltip-icon-container .tooltip-icon{position:relative;top:3px}","",{version:3,sources:["webpack://./src/components/label/Label.scss","webpack://./src/styles/constants/_colors.scss"],names:[],mappings:"AAMA,kBACI,aAAA,CACA,aCaU,CDZV,gBAAA,CAEA,4GAEI,gBAAA,CAGJ,kEACI,gBAAA,CAEA,8FACI,iBAAA,CACA,OAAA",sourcesContent:["@import '../../styles/variables';\n\n/**************************************\n * Label\n **************************************/\n\n.bdl-Label {\n    display: block;\n    color: $bdl-gray-65;\n    font-weight: bold;\n\n    .bdl-Label-optional,\n    .label-optional {\n        padding-left: 3px;\n    }\n\n    .tooltip-icon-container {\n        padding-left: 3px;\n\n        .tooltip-icon {\n            position: relative;\n            top: 3px;\n        }\n    }\n}\n\n/*\n* Section below is for bdl-namespace backwards compatibility.\n* Do not add changes below this line.\n*/\n.label {\n    @extend .bdl-Label;\n}\n","// Box Design Language Colors\n// confirm with design before extending\n\n$white: #fff !default;\n$black: #000 !default;\n$countBadgeBackground: #e9163c !default;\n\n// Box/Primary Blues\n$bdl-box-blue: #0061d5 !default;\n$bdl-box-blue-80: #3381dd !default;\n$bdl-box-blue-50: #7fb0ea !default;\n$bdl-box-blue-40: #99c0ee !default;\n$bdl-box-blue-30: #b2cff2 !default;\n$bdl-box-blue-20: #ccdff7 !default;\n$bdl-box-blue-10: #e5effa !default;\n$bdl-box-blue-05: #f2f7fd !default;\n$bdl-box-blue-02: #fafcfe !default;\n\n// Box/Primary Grays\n$bdl-gray: #222 !default;\n$bdl-gray-80: #4e4e4e !default;\n$bdl-gray-65: #6f6f6f !default;\n$bdl-gray-50: #909090 !default;\n$bdl-gray-40: #a7a7a7 !default;\n$bdl-gray-30: #bcbcbc !default;\n$bdl-gray-20: #d3d3d3 !default;\n$bdl-gray-10: #e8e8e8 !default;\n$bdl-gray-05: #f4f4f4 !default;\n$bdl-gray-02: #fbfbfb !default;\n\n// Dark Blues\n$bdl-dark-blue: #003c84 !default;\n$bdl-dark-blue-50: #7f9dc1 !default;\n$bdl-dark-blue-20: #ccd8e6 !default;\n$bdl-dark-blue-10: #e5ebf2 !default;\n$bdl-dark-blue-05: #f2f5f9 !default;\n$bdl-dark-blue-02: #fafbfd !default;\n\n// Light Blues\n$bdl-light-blue: #2486fc !default;\n$bdl-light-blue-50: #91c2fd !default;\n$bdl-light-blue-20: #d3e7fe !default;\n$bdl-light-blue-10: #e9f2fe !default;\n$bdl-light-blue-05: #f4f9ff !default;\n$bdl-light-blue-02: #fbfdff !default;\n\n// Yelloranges\n$bdl-yellorange: #f5b31b !default;\n$bdl-yellorange-50: #fad98d !default;\n$bdl-yellorange-20: #fdf0d1 !default;\n$bdl-yellorange-10: #fef7e8 !default;\n$bdl-yellorange-05: #fefbf3 !default;\n$bdl-yellorange-02: #fffefb !default;\n\n// Yellows\n$bdl-yellow: #ffd700 !default;\n$bdl-yellow-50: #ffeb7f !default;\n$bdl-yellow-20: #fff7cc !default;\n$bdl-yellow-10: #fffbe5 !default;\n$bdl-yellow-05: #fffdf2 !default;\n$bdl-yellow-02: #fffefa !default;\n\n// Green Lights\n$bdl-green-light: #26c281 !default;\n$bdl-green-light-50: #92e0c0 !default;\n$bdl-green-light-20: #d4f3e6 !default;\n$bdl-green-light-10: #e9f8f2 !default;\n$bdl-green-light-05: #f4fcf8 !default;\n$bdl-green-light-02: #fbfefd !default;\n\n// Grimaces\n$bdl-grimace: #4826c2 !default;\n$bdl-grimace-50: #a392e0 !default;\n$bdl-grimace-20: #dad4f3 !default;\n$bdl-grimace-10: #ece9f8 !default;\n$bdl-grimace-05: #f6f4fc !default;\n$bdl-grimace-02: #fbfbfe !default;\n\n// Orange\n$bdl-orange: #f1811a !default;\n$bdl-orange-50: #f8c08c !default;\n$bdl-orange-20: #fce6d1 !default;\n$bdl-orange-10: #fdf2e8 !default;\n$bdl-orange-05: #fef8f3 !default;\n$bdl-orange-02: #fffdfb !default;\n\n// Purple Rains\n$bdl-purple-rain: #9f3fed !default;\n$bdl-purple-rain-50: #cf9ff6 !default;\n$bdl-purple-rain-20: #ecd9fb !default;\n$bdl-purple-rain-10: #f5ebfd !default;\n$bdl-purple-rain-05: #faf5fe !default;\n$bdl-purple-rain-02: #fdfbff !default;\n\n// Watermelon Reds\n$bdl-watermelon-red: #ed3757 !default;\n$bdl-watermelon-red-50: #f69bab !default;\n$bdl-watermelon-red-20: #fbd7dd !default;\n$bdl-watermelon-red-10: #fdebee !default;\n$bdl-watermelon-red-05: #fef5f6 !default;\n$bdl-watermelon-red-02: #fffbfc !default;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_label_Label});__webpack_require__("./node_modules/react/index.js");var message=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),InfoBadge16=__webpack_require__("./src/icon/fill/InfoBadge16.tsx"),components_tooltip=__webpack_require__("./src/components/tooltip/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const InfoIconWithTooltip=_ref=>{let{className="",iconProps,tooltipText}=_ref;return(0,jsx_runtime.jsx)("span",{className:"".concat(className," tooltip-icon-container"),children:(0,jsx_runtime.jsx)(components_tooltip.ZP,{position:components_tooltip.DU.TOP_CENTER,text:tooltipText,children:(0,jsx_runtime.jsx)("span",{className:"info-icon-container",children:(0,jsx_runtime.jsx)(InfoBadge16.Z,_objectSpread({},iconProps))})})},"infoIcon")};InfoIconWithTooltip.displayName="InfoIconWithTooltip";const label_InfoIconWithTooltip=InfoIconWithTooltip;try{InfoIconWithTooltip.displayName="InfoIconWithTooltip",InfoIconWithTooltip.__docgenInfo={description:"",displayName:"InfoIconWithTooltip",props:{className:{defaultValue:{value:""},description:"Custom class for the icon",name:"className",required:!1,type:{name:"string"}},iconProps:{defaultValue:null,description:"Optional props for the icon",name:"iconProps",required:!1,type:{name:"Record<string, any>"}},tooltipText:{defaultValue:null,description:"Optional tooltip text for the label",name:"tooltipText",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/label/InfoIconWithTooltip.tsx#InfoIconWithTooltip"]={docgenInfo:InfoIconWithTooltip.__docgenInfo,name:"InfoIconWithTooltip",path:"src/components/label/InfoIconWithTooltip.tsx#InfoIconWithTooltip"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function LabelPrimitive_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function LabelPrimitive_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?LabelPrimitive_ownKeys(Object(t),!0).forEach((function(r){LabelPrimitive_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):LabelPrimitive_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function LabelPrimitive_defineProperty(obj,key,value){return(key=function LabelPrimitive_toPropertyKey(t){var i=function LabelPrimitive_toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const LabelPrimitive=_ref=>{let{children,className,labelContent,labelElProps}=_ref,rest=_objectWithoutProperties(_ref,["children","className","labelContent","labelElProps"]);return(0,jsx_runtime.jsxs)("label",LabelPrimitive_objectSpread({},labelElProps,{children:[(0,jsx_runtime.jsx)("span",LabelPrimitive_objectSpread({className:classnames_default()("label bdl-Label",className)},rest,{children:labelContent})),children]}))};LabelPrimitive.displayName="LabelPrimitive";const label_LabelPrimitive=LabelPrimitive;try{LabelPrimitive.displayName="LabelPrimitive",LabelPrimitive.__docgenInfo={description:"",displayName:"LabelPrimitive",props:{children:{defaultValue:null,description:"Child for the label",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"Custom class for the label",name:"className",required:!1,type:{name:"string"}},labelContent:{defaultValue:null,description:"Text content of the label",name:"labelContent",required:!0,type:{name:"ReactNode"}},labelElProps:{defaultValue:null,description:"Optional props for the label element",name:"labelElProps",required:!1,type:{name:'Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof LabelHTMLAttributes<HTMLLabelElement>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/label/LabelPrimitive.tsx#LabelPrimitive"]={docgenInfo:LabelPrimitive.__docgenInfo,name:"LabelPrimitive",path:"src/components/label/LabelPrimitive.tsx#LabelPrimitive"})}catch(__react_docgen_typescript_loader_error){}function StandardLabel_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function StandardLabel_defineProperty(obj,key,value){return(key=function StandardLabel_toPropertyKey(t){var i=function StandardLabel_toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StandardLabel_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function StandardLabel_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const StandardLabel=_ref=>{let{children,tooltip}=_ref,rest=StandardLabel_objectWithoutProperties(_ref,["children","tooltip"]);const label=(0,jsx_runtime.jsx)(label_LabelPrimitive,function StandardLabel_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?StandardLabel_ownKeys(Object(t),!0).forEach((function(r){StandardLabel_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):StandardLabel_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},rest,{children}));return tooltip?(0,jsx_runtime.jsx)(components_tooltip.ZP,{position:components_tooltip.DU.TOP_RIGHT,text:tooltip,children:label}):label},label_StandardLabel=StandardLabel;try{StandardLabel.displayName="StandardLabel",StandardLabel.__docgenInfo={description:"",displayName:"StandardLabel",props:{children:{defaultValue:null,description:"Child for the label",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},labelContent:{defaultValue:null,description:"Text content of the label",name:"labelContent",required:!0,type:{name:"ReactNode"}},labelElProps:{defaultValue:null,description:"Optional props for the label element",name:"labelElProps",required:!1,type:{name:'Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof LabelHTMLAttributes<HTMLLabelElement>>'}},tooltip:{defaultValue:null,description:"Optional tooltip text for the label",name:"tooltip",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/label/StandardLabel.tsx#StandardLabel"]={docgenInfo:StandardLabel.__docgenInfo,name:"StandardLabel",path:"src/components/label/StandardLabel.tsx#StandardLabel"})}catch(__react_docgen_typescript_loader_error){}function HiddenLabel_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function HiddenLabel_defineProperty(obj,key,value){return(key=function HiddenLabel_toPropertyKey(t){var i=function HiddenLabel_toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HiddenLabel_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function HiddenLabel_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const HiddenLabel=_ref=>{let{children}=_ref,rest=HiddenLabel_objectWithoutProperties(_ref,["children"]);return(0,jsx_runtime.jsx)(label_LabelPrimitive,function HiddenLabel_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?HiddenLabel_ownKeys(Object(t),!0).forEach((function(r){HiddenLabel_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):HiddenLabel_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:"accessibility-hidden"},rest,{children}))};HiddenLabel.displayName="HiddenLabel";const label_HiddenLabel=HiddenLabel;try{HiddenLabel.displayName="HiddenLabel",HiddenLabel.__docgenInfo={description:"",displayName:"HiddenLabel",props:{children:{defaultValue:null,description:"Child for the label",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},labelContent:{defaultValue:null,description:"Text content of the label",name:"labelContent",required:!0,type:{name:"ReactNode"}},labelElProps:{defaultValue:null,description:"Optional props for the label element",name:"labelElProps",required:!1,type:{name:'Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof LabelHTMLAttributes<HTMLLabelElement>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/label/HiddenLabel.tsx#HiddenLabel"]={docgenInfo:HiddenLabel.__docgenInfo,name:"HiddenLabel",path:"src/components/label/HiddenLabel.tsx#HiddenLabel"})}catch(__react_docgen_typescript_loader_error){}var messages=__webpack_require__("./src/common/messages.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Label=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/label/Label.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Label.Z,options);Label.Z&&Label.Z.locals&&Label.Z.locals;function Label_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Label_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Label_ownKeys(Object(t),!0).forEach((function(r){Label_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Label_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Label_defineProperty(obj,key,value){return(key=function Label_toPropertyKey(t){var i=function Label_toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const OptionalFormattedMessage=()=>(0,jsx_runtime.jsxs)("span",{className:"label-optional bdl-Label-optional",children:["(",(0,jsx_runtime.jsx)(message.Z,Label_objectSpread({},messages.Z.optional)),")"]});OptionalFormattedMessage.displayName="OptionalFormattedMessage";const Label_Label=_ref=>{let{text,tooltip,labelElProps,infoTooltip,infoIconProps,showOptionalText,hideLabel,children}=_ref;const labelContent=[(0,jsx_runtime.jsx)("span",{children:text},"labelText"),showOptionalText?(0,jsx_runtime.jsx)(OptionalFormattedMessage,{},"optionalMessage"):null];return infoTooltip&&labelContent.push((0,jsx_runtime.jsx)(label_InfoIconWithTooltip,{iconProps:Label_objectSpread({className:"tooltip-icon"},infoIconProps),tooltipText:infoTooltip},"infoTooltip")),hideLabel?(0,jsx_runtime.jsx)(label_HiddenLabel,{labelContent,labelElProps,children}):(0,jsx_runtime.jsx)(label_StandardLabel,{labelContent,tooltip,labelElProps,children})};Label_Label.displayName="Label";const components_label_Label=Label_Label;try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{children:{defaultValue:null,description:"Child for the label",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},hideLabel:{defaultValue:null,description:"Whether the text of the label should be accessibly hidden",name:"hideLabel",required:!1,type:{name:"boolean"}},infoIconProps:{defaultValue:null,description:"Optional props for the icon",name:"infoIconProps",required:!1,type:{name:"Record<string, any>"}},infoTooltip:{defaultValue:null,description:"Tooltip text for the info icon",name:"infoTooltip",required:!1,type:{name:"ReactNode"}},labelElProps:{defaultValue:null,description:"Optional props for the label element",name:"labelElProps",required:!1,type:{name:'Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof LabelHTMLAttributes<HTMLLabelElement>>'}},showOptionalText:{defaultValue:null,description:"Whether to show the `(Optional)` text next to the label for an optional field",name:"showOptionalText",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"The label text",name:"text",required:!0,type:{name:"ReactNode"}},tooltip:{defaultValue:null,description:"Optional tooltip text for the label",name:"tooltip",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/label/Label.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"src/components/label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/fill/InfoBadge16.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _styles_variables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/variables.js"),_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/accessible-svg/AccessibleSVG.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const InfoBadge16=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_1__.Z,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({width:16,height:16,viewBox:"0 0 16 16"},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:_styles_variables__WEBPACK_IMPORTED_MODULE_3__.bdlGray50,d:"M8 1a7 7 0 110 14A7 7 0 018 1zm.5 6H7a.5.5 0 000 1h.5v3H7a.5.5 0 100 1h2.5a.5.5 0 100-1H9V7.75a.783.783 0 00-.012-.139A.502.502 0 008.5 7zM8 4a1 1 0 100 2 1 1 0 000-2z"})}));InfoBadge16.displayName="InfoBadge16";const __WEBPACK_DEFAULT_EXPORT__=InfoBadge16;try{InfoBadge16.displayName="InfoBadge16",InfoBadge16.__docgenInfo={description:"This is an auto-generated component and should not be edited\nmanually in contributor pull requests.\n\nIf you have problems with this component:\n- https://github.com/box/box-ui-elements/issues/new?template=Bug_report.md\n\nIf there are missing features in this component:\n- https://github.com/box/box-ui-elements/issues/new?template=Feature_request.md",displayName:"InfoBadge16",props:{className:{defaultValue:null,description:"Class for the svg",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height for the svg",name:"height",required:!1,type:{name:"number"}},role:{defaultValue:null,description:"Accessibility role for the svg",name:"role",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"A text-only string describing the icon if it's not purely decorative for accessibility",name:"title",required:!1,type:{name:"ReactNode"}},viewBox:{defaultValue:null,description:"View box for the svg",name:"viewBox",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width for the svg",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/fill/InfoBadge16.tsx#InfoBadge16"]={docgenInfo:InfoBadge16.__docgenInfo,name:"InfoBadge16",path:"src/icon/fill/InfoBadge16.tsx#InfoBadge16"})}catch(__react_docgen_typescript_loader_error){}}}]);