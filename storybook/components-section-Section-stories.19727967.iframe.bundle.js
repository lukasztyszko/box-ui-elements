"use strict";(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[36601],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/section/Section.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".section{display:flex;margin:40px 0}.section .section-title{margin:0 0 10px;font-weight:bold;font-size:13px}.section .section-description{width:270px;padding-right:35px;color:#4e4e4e}.section .section-content{flex:1}","",{version:3,sources:["webpack://./src/components/section/Section.scss","webpack://./src/styles/constants/_colors.scss"],names:[],mappings:"AAMA,SACI,YAAA,CACA,aAAA,CAEA,wBACI,eAAA,CACA,gBAAA,CACA,cAAA,CAGJ,8BACI,WAAA,CACA,kBAAA,CACA,aCCM,CDEV,0BACI,MAAA",sourcesContent:["@import '../../styles/variables';\n\n/**************************************\n * Section\n **************************************/\n\n.section {\n    display: flex;\n    margin: 40px 0;\n\n    .section-title {\n        margin: 0 0 10px;\n        font-weight: bold;\n        font-size: 13px;\n    }\n\n    .section-description {\n        width: 270px;\n        padding-right: 35px;\n        color: $bdl-gray-80;\n    }\n\n    .section-content {\n        flex: 1;\n    }\n}\n","// Box Design Language Colors\n// confirm with design before extending\n\n$white: #fff !default;\n$black: #000 !default;\n$countBadgeBackground: #e9163c !default;\n\n// Box/Primary Blues\n$bdl-box-blue: #0061d5 !default;\n$bdl-box-blue-80: #3381dd !default;\n$bdl-box-blue-50: #7fb0ea !default;\n$bdl-box-blue-40: #99c0ee !default;\n$bdl-box-blue-30: #b2cff2 !default;\n$bdl-box-blue-20: #ccdff7 !default;\n$bdl-box-blue-10: #e5effa !default;\n$bdl-box-blue-05: #f2f7fd !default;\n$bdl-box-blue-02: #fafcfe !default;\n\n// Box/Primary Grays\n$bdl-gray: #222 !default;\n$bdl-gray-80: #4e4e4e !default;\n$bdl-gray-65: #6f6f6f !default;\n$bdl-gray-50: #909090 !default;\n$bdl-gray-40: #a7a7a7 !default;\n$bdl-gray-30: #bcbcbc !default;\n$bdl-gray-20: #d3d3d3 !default;\n$bdl-gray-10: #e8e8e8 !default;\n$bdl-gray-05: #f4f4f4 !default;\n$bdl-gray-02: #fbfbfb !default;\n\n// Dark Blues\n$bdl-dark-blue: #003c84 !default;\n$bdl-dark-blue-50: #7f9dc1 !default;\n$bdl-dark-blue-20: #ccd8e6 !default;\n$bdl-dark-blue-10: #e5ebf2 !default;\n$bdl-dark-blue-05: #f2f5f9 !default;\n$bdl-dark-blue-02: #fafbfd !default;\n\n// Light Blues\n$bdl-light-blue: #2486fc !default;\n$bdl-light-blue-50: #91c2fd !default;\n$bdl-light-blue-20: #d3e7fe !default;\n$bdl-light-blue-10: #e9f2fe !default;\n$bdl-light-blue-05: #f4f9ff !default;\n$bdl-light-blue-02: #fbfdff !default;\n\n// Yelloranges\n$bdl-yellorange: #f5b31b !default;\n$bdl-yellorange-50: #fad98d !default;\n$bdl-yellorange-20: #fdf0d1 !default;\n$bdl-yellorange-10: #fef7e8 !default;\n$bdl-yellorange-05: #fefbf3 !default;\n$bdl-yellorange-02: #fffefb !default;\n\n// Yellows\n$bdl-yellow: #ffd700 !default;\n$bdl-yellow-50: #ffeb7f !default;\n$bdl-yellow-20: #fff7cc !default;\n$bdl-yellow-10: #fffbe5 !default;\n$bdl-yellow-05: #fffdf2 !default;\n$bdl-yellow-02: #fffefa !default;\n\n// Green Lights\n$bdl-green-light: #26c281 !default;\n$bdl-green-light-50: #92e0c0 !default;\n$bdl-green-light-20: #d4f3e6 !default;\n$bdl-green-light-10: #e9f8f2 !default;\n$bdl-green-light-05: #f4fcf8 !default;\n$bdl-green-light-02: #fbfefd !default;\n\n// Grimaces\n$bdl-grimace: #4826c2 !default;\n$bdl-grimace-50: #a392e0 !default;\n$bdl-grimace-20: #dad4f3 !default;\n$bdl-grimace-10: #ece9f8 !default;\n$bdl-grimace-05: #f6f4fc !default;\n$bdl-grimace-02: #fbfbfe !default;\n\n// Orange\n$bdl-orange: #f1811a !default;\n$bdl-orange-50: #f8c08c !default;\n$bdl-orange-20: #fce6d1 !default;\n$bdl-orange-10: #fdf2e8 !default;\n$bdl-orange-05: #fef8f3 !default;\n$bdl-orange-02: #fffdfb !default;\n\n// Purple Rains\n$bdl-purple-rain: #9f3fed !default;\n$bdl-purple-rain-50: #cf9ff6 !default;\n$bdl-purple-rain-20: #ecd9fb !default;\n$bdl-purple-rain-10: #f5ebfd !default;\n$bdl-purple-rain-05: #faf5fe !default;\n$bdl-purple-rain-02: #fdfbff !default;\n\n// Watermelon Reds\n$bdl-watermelon-red: #ed3757 !default;\n$bdl-watermelon-red-50: #f69bab !default;\n$bdl-watermelon-red-20: #fbd7dd !default;\n$bdl-watermelon-red-10: #fdebee !default;\n$bdl-watermelon-red-05: #fef5f6 !default;\n$bdl-watermelon-red-02: #fffbfc !default;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/section/Section.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>Section_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Section=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/section/Section.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Section.Z,options);Section.Z&&Section.Z.locals&&Section.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Section_Section=_ref=>{let{children,id="",className="",description="",title=""}=_ref,rest=_objectWithoutProperties(_ref,["children","id","className","description","title"]);return(0,jsx_runtime.jsxs)("section",function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:"section ".concat(className),id},rest,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h5",{className:"section-title",children:title}),(0,jsx_runtime.jsx)("div",{className:"section-description",children:description})]}),(0,jsx_runtime.jsx)("div",{className:"section-content",children})]}))};Section_Section.displayName="Section";const components_section_Section=Section_Section;try{Section_Section.displayName="Section",Section_Section.__docgenInfo={description:"",displayName:"Section",props:{children:{defaultValue:null,description:"Contents of the section",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class for the section",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"Description of the section",name:"description",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"Custom id for the section",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"Title of the section",name:"title",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/section/Section.tsx#Section"]={docgenInfo:Section_Section.__docgenInfo,name:"Section",path:"src/components/section/Section.tsx#Section"})}catch(__react_docgen_typescript_loader_error){}var _basic$parameters,_basic$parameters2,_basic$parameters2$do;function Section_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Section_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Section_stories_ownKeys(Object(t),!0).forEach((function(r){Section_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Section_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Section_stories_defineProperty(obj,key,value){return(key=function Section_stories_toPropertyKey(t){var i=function Section_stories_toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const basic=()=>(0,jsx_runtime.jsx)(components_section_Section,{title:"User Info",description:"Your account info",children:(0,jsx_runtime.jsx)("input",{name:"textinput",type:"email",placeholder:"Enter email here"})});basic.displayName="basic";const Section_stories={title:"Components/Section",component:components_section_Section,parameters:{notes:"`import Section from 'box-ui-elements/es/components/section';`\n"}};basic.parameters=Section_stories_objectSpread({},basic.parameters,{docs:Section_stories_objectSpread({},null===(_basic$parameters=basic.parameters)||void 0===_basic$parameters?void 0:_basic$parameters.docs,{source:Section_stories_objectSpread({originalSource:'() => <Section title="User Info" description="Your account info">\n        <input name="textinput" type="email" placeholder="Enter email here" />\n    </Section>'},null===(_basic$parameters2=basic.parameters)||void 0===_basic$parameters2||null===(_basic$parameters2$do=_basic$parameters2.docs)||void 0===_basic$parameters2$do?void 0:_basic$parameters2$do.source)})});const __namedExportsOrder=["basic"]}}]);