(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[58174],{"./src/icon/fill/InfoBadge16.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,infoBadge16:()=>infoBadge16});__webpack_require__("./node_modules/react/index.js");var _infoBadge16$paramete,_infoBadge16$paramete2,_infoBadge16$paramete3,_InfoBadge16__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/fill/InfoBadge16.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const infoBadge16=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InfoBadge16__WEBPACK_IMPORTED_MODULE_1__.Z,{});infoBadge16.displayName="infoBadge16";const __WEBPACK_DEFAULT_EXPORT__={title:"Icon/Fill/InfoBadge16",component:_InfoBadge16__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{notes:"`import InfoBadge16 from 'box-ui-elements/es/icon/fill/InfoBadge16';`"}};infoBadge16.parameters=_objectSpread({},infoBadge16.parameters,{docs:_objectSpread({},null===(_infoBadge16$paramete=infoBadge16.parameters)||void 0===_infoBadge16$paramete?void 0:_infoBadge16$paramete.docs,{source:_objectSpread({originalSource:"() => <InfoBadge16 />"},null===(_infoBadge16$paramete2=infoBadge16.parameters)||void 0===_infoBadge16$paramete2||null===(_infoBadge16$paramete3=_infoBadge16$paramete2.docs)||void 0===_infoBadge16$paramete3?void 0:_infoBadge16$paramete3.source)})});const __namedExportsOrder=["infoBadge16"]},"./src/components/accessible-svg/AccessibleSVG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_omit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/omit.js"),lodash_omit__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class AccessibleSVG extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),_defineProperty(this,"id",lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("icon"))}render(){const _this$props=this.props,{children,title}=_this$props,rest=_objectWithoutProperties(_this$props,["children","title"]),titleID="".concat(this.id,"-title"),svgProps=lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest,["role","aria-labelledby"]);return svgProps.focusable="false",title?(svgProps["aria-labelledby"]=titleID,svgProps.role="img"):(svgProps["aria-hidden"]="true",svgProps.role="presentation"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg",function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},svgProps,{children:[title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title",{id:titleID,children:title}):null,children]}))}}AccessibleSVG.displayName="AccessibleSVG";const __WEBPACK_DEFAULT_EXPORT__=AccessibleSVG;try{AccessibleSVG.displayName="AccessibleSVG",AccessibleSVG.__docgenInfo={description:"",displayName:"AccessibleSVG",props:{children:{defaultValue:null,description:"SVG dom elements for the component",name:"children",required:!1,type:{name:"(ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]) & ReactNode"}},title:{defaultValue:null,description:"A text-only string describing the icon if it's not purely decorative for accessibility",name:"title",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Class for the svg",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height for the svg",name:"height",required:!1,type:{name:"number"}},role:{defaultValue:null,description:"Accessibility role for the svg",name:"role",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"View box for the svg",name:"viewBox",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width for the svg",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accessible-svg/AccessibleSVG.tsx#AccessibleSVG"]={docgenInfo:AccessibleSVG.__docgenInfo,name:"AccessibleSVG",path:"src/components/accessible-svg/AccessibleSVG.tsx#AccessibleSVG"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/fill/InfoBadge16.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _styles_variables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/variables.js"),_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/accessible-svg/AccessibleSVG.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const InfoBadge16=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_1__.Z,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({width:16,height:16,viewBox:"0 0 16 16"},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:_styles_variables__WEBPACK_IMPORTED_MODULE_3__.bdlGray50,d:"M8 1a7 7 0 110 14A7 7 0 018 1zm.5 6H7a.5.5 0 000 1h.5v3H7a.5.5 0 100 1h2.5a.5.5 0 100-1H9V7.75a.783.783 0 00-.012-.139A.502.502 0 008.5 7zM8 4a1 1 0 100 2 1 1 0 000-2z"})}));InfoBadge16.displayName="InfoBadge16";const __WEBPACK_DEFAULT_EXPORT__=InfoBadge16;try{InfoBadge16.displayName="InfoBadge16",InfoBadge16.__docgenInfo={description:"This is an auto-generated component and should not be edited\nmanually in contributor pull requests.\n\nIf you have problems with this component:\n- https://github.com/box/box-ui-elements/issues/new?template=Bug_report.md\n\nIf there are missing features in this component:\n- https://github.com/box/box-ui-elements/issues/new?template=Feature_request.md",displayName:"InfoBadge16",props:{className:{defaultValue:null,description:"Class for the svg",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height for the svg",name:"height",required:!1,type:{name:"number"}},role:{defaultValue:null,description:"Accessibility role for the svg",name:"role",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"A text-only string describing the icon if it's not purely decorative for accessibility",name:"title",required:!1,type:{name:"ReactNode"}},viewBox:{defaultValue:null,description:"View box for the svg",name:"viewBox",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width for the svg",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/fill/InfoBadge16.tsx#InfoBadge16"]={docgenInfo:InfoBadge16.__docgenInfo,name:"InfoBadge16",path:"src/icon/fill/InfoBadge16.tsx#InfoBadge16"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/variables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{avatarColors:()=>avatarColors,bdlBorderRadiusSize:()=>bdlBorderRadiusSize,bdlBorderRadiusSizeLarge:()=>bdlBorderRadiusSizeLarge,bdlBorderRadiusSizeMed:()=>bdlBorderRadiusSizeMed,bdlBorderRadiusSizeXlarge:()=>bdlBorderRadiusSizeXlarge,bdlBoxBlue:()=>bdlBoxBlue,bdlBoxBlue02:()=>bdlBoxBlue02,bdlBoxBlue05:()=>bdlBoxBlue05,bdlBoxBlue10:()=>bdlBoxBlue10,bdlBoxBlue20:()=>bdlBoxBlue20,bdlBoxBlue30:()=>bdlBoxBlue30,bdlBoxBlue40:()=>bdlBoxBlue40,bdlBoxBlue50:()=>bdlBoxBlue50,bdlBoxBlue80:()=>bdlBoxBlue80,bdlBtnBorderWidth:()=>bdlBtnBorderWidth,bdlBtnHeight:()=>bdlBtnHeight,bdlBtnHeightLarge:()=>bdlBtnHeightLarge,bdlBtnIconSize:()=>bdlBtnIconSize,bdlBtnPaddingHorizontal:()=>bdlBtnPaddingHorizontal,bdlBtnTextIconSize:()=>bdlBtnTextIconSize,bdlDarkBlue:()=>bdlDarkBlue,bdlDarkBlue02:()=>bdlDarkBlue02,bdlDarkBlue05:()=>bdlDarkBlue05,bdlDarkBlue10:()=>bdlDarkBlue10,bdlDarkBlue20:()=>bdlDarkBlue20,bdlDarkBlue50:()=>bdlDarkBlue50,bdlFontSize:()=>bdlFontSize,bdlFontSizeDejaBlue:()=>bdlFontSizeDejaBlue,bdlFontSizeMinimum:()=>bdlFontSizeMinimum,bdlGray:()=>bdlGray,bdlGray02:()=>bdlGray02,bdlGray05:()=>bdlGray05,bdlGray10:()=>bdlGray10,bdlGray20:()=>bdlGray20,bdlGray30:()=>bdlGray30,bdlGray40:()=>bdlGray40,bdlGray50:()=>bdlGray50,bdlGray65:()=>bdlGray65,bdlGray80:()=>bdlGray80,bdlGreenLight:()=>bdlGreenLight,bdlGreenLight02:()=>bdlGreenLight02,bdlGreenLight05:()=>bdlGreenLight05,bdlGreenLight10:()=>bdlGreenLight10,bdlGreenLight20:()=>bdlGreenLight20,bdlGreenLight50:()=>bdlGreenLight50,bdlGridUnit:()=>bdlGridUnit,bdlGridUnitPx:()=>bdlGridUnitPx,bdlGrimace:()=>bdlGrimace,bdlGrimace02:()=>bdlGrimace02,bdlGrimace05:()=>bdlGrimace05,bdlGrimace10:()=>bdlGrimace10,bdlGrimace20:()=>bdlGrimace20,bdlGrimace50:()=>bdlGrimace50,bdlHeaderBoxShadow:()=>bdlHeaderBoxShadow,bdlHeaderHeight:()=>bdlHeaderHeight,bdlLightBlue:()=>bdlLightBlue,bdlLightBlue02:()=>bdlLightBlue02,bdlLightBlue05:()=>bdlLightBlue05,bdlLightBlue10:()=>bdlLightBlue10,bdlLightBlue20:()=>bdlLightBlue20,bdlLightBlue50:()=>bdlLightBlue50,bdlLineHeight:()=>bdlLineHeight,bdlOrange:()=>bdlOrange,bdlOrange02:()=>bdlOrange02,bdlOrange05:()=>bdlOrange05,bdlOrange10:()=>bdlOrange10,bdlOrange20:()=>bdlOrange20,bdlOrange50:()=>bdlOrange50,bdlPurpleRain:()=>bdlPurpleRain,bdlPurpleRain02:()=>bdlPurpleRain02,bdlPurpleRain05:()=>bdlPurpleRain05,bdlPurpleRain10:()=>bdlPurpleRain10,bdlPurpleRain20:()=>bdlPurpleRain20,bdlPurpleRain50:()=>bdlPurpleRain50,bdlTimingFunction:()=>bdlTimingFunction,bdlTransitionDurationBase:()=>bdlTransitionDurationBase,bdlWatermelonRed:()=>bdlWatermelonRed,bdlWatermelonRed02:()=>bdlWatermelonRed02,bdlWatermelonRed05:()=>bdlWatermelonRed05,bdlWatermelonRed10:()=>bdlWatermelonRed10,bdlWatermelonRed20:()=>bdlWatermelonRed20,bdlWatermelonRed50:()=>bdlWatermelonRed50,bdlYellorange:()=>bdlYellorange,bdlYellorange02:()=>bdlYellorange02,bdlYellorange05:()=>bdlYellorange05,bdlYellorange10:()=>bdlYellorange10,bdlYellorange20:()=>bdlYellorange20,bdlYellorange50:()=>bdlYellorange50,bdlYellow:()=>bdlYellow,bdlYellow02:()=>bdlYellow02,bdlYellow05:()=>bdlYellow05,bdlYellow10:()=>bdlYellow10,bdlYellow20:()=>bdlYellow20,bdlYellow50:()=>bdlYellow50,black:()=>black,countBadgeBackground:()=>countBadgeBackground,largeScreen:()=>largeScreen,mediumScreen:()=>mediumScreen,menuZIndex:()=>menuZIndex,modalDialogZIndex:()=>modalDialogZIndex,notificationsWrapperZIndex:()=>notificationsWrapperZIndex,overlayZIndex:()=>overlayZIndex,sizeLargeMax:()=>sizeLargeMax,sizeLargeMin:()=>sizeLargeMin,sizeMediumMax:()=>sizeMediumMax,sizeMediumMin:()=>sizeMediumMin,sizeSmallMax:()=>sizeSmallMax,sizeSmallMediumMax:()=>sizeSmallMediumMax,sizeSmallMediumMin:()=>sizeSmallMediumMin,sizeXlargeMax:()=>sizeXlargeMax,smallMediumScreen:()=>smallMediumScreen,smallScreen:()=>smallScreen,submenuZIndex:()=>submenuZIndex,tooltipZIndex:()=>tooltipZIndex,white:()=>white,xlargeScreen:()=>xlargeScreen});const white="#fff",black="#000",countBadgeBackground="#e9163c",bdlBoxBlue="#0061d5",bdlBoxBlue80="#3381dd",bdlBoxBlue50="#7fb0ea",bdlBoxBlue40="#99c0ee",bdlBoxBlue30="#b2cff2",bdlBoxBlue20="#ccdff7",bdlBoxBlue10="#e5effa",bdlBoxBlue05="#f2f7fd",bdlBoxBlue02="#fafcfe",bdlGray="#222",bdlGray80="#4e4e4e",bdlGray65="#6f6f6f",bdlGray50="#909090",bdlGray40="#a7a7a7",bdlGray30="#bcbcbc",bdlGray20="#d3d3d3",bdlGray10="#e8e8e8",bdlGray05="#f4f4f4",bdlGray02="#fbfbfb",bdlDarkBlue="#003c84",bdlDarkBlue50="#7f9dc1",bdlDarkBlue20="#ccd8e6",bdlDarkBlue10="#e5ebf2",bdlDarkBlue05="#f2f5f9",bdlDarkBlue02="#fafbfd",bdlLightBlue="#2486fc",bdlLightBlue50="#91c2fd",bdlLightBlue20="#d3e7fe",bdlLightBlue10="#e9f2fe",bdlLightBlue05="#f4f9ff",bdlLightBlue02="#fbfdff",bdlYellorange="#f5b31b",bdlYellorange50="#fad98d",bdlYellorange20="#fdf0d1",bdlYellorange10="#fef7e8",bdlYellorange05="#fefbf3",bdlYellorange02="#fffefb",bdlYellow="#ffd700",bdlYellow50="#ffeb7f",bdlYellow20="#fff7cc",bdlYellow10="#fffbe5",bdlYellow05="#fffdf2",bdlYellow02="#fffefa",bdlGreenLight="#26c281",bdlGreenLight50="#92e0c0",bdlGreenLight20="#d4f3e6",bdlGreenLight10="#e9f8f2",bdlGreenLight05="#f4fcf8",bdlGreenLight02="#fbfefd",bdlGrimace="#4826c2",bdlGrimace50="#a392e0",bdlGrimace20="#dad4f3",bdlGrimace10="#ece9f8",bdlGrimace05="#f6f4fc",bdlGrimace02="#fbfbfe",bdlOrange="#f1811a",bdlOrange50="#f8c08c",bdlOrange20="#fce6d1",bdlOrange10="#fdf2e8",bdlOrange05="#fef8f3",bdlOrange02="#fffdfb",bdlPurpleRain="#9f3fed",bdlPurpleRain50="#cf9ff6",bdlPurpleRain20="#ecd9fb",bdlPurpleRain10="#f5ebfd",bdlPurpleRain05="#faf5fe",bdlPurpleRain02="#fdfbff",bdlWatermelonRed="#ed3757",bdlWatermelonRed50="#f69bab",bdlWatermelonRed20="#fbd7dd",bdlWatermelonRed10="#fdebee",bdlWatermelonRed05="#fef5f6",bdlWatermelonRed02="#fffbfc",bdlLineHeight="20px",bdlFontSize="13px",bdlFontSizeMinimum="11px",bdlFontSizeDejaBlue="14px",avatarColors=["#0061d5","#003c84","#6f6f6f","#222","#4826c2","#9f3fed"],modalDialogZIndex="160",menuZIndex="170",submenuZIndex="171",overlayZIndex="190",tooltipZIndex="190",notificationsWrapperZIndex="200",bdlBorderRadiusSize="4px",bdlBorderRadiusSizeMed="6px",bdlBorderRadiusSizeLarge="8px",bdlBorderRadiusSizeXlarge="12px",bdlHeaderBoxShadow=["0 0 10px 0 rgba(0","0","0","0.05)"],bdlGridUnit="4px",bdlGridUnitPx="4",bdlHeaderHeight="64px",bdlBtnBorderWidth="1px",bdlBtnHeight="32px",bdlBtnHeightLarge="40px",bdlBtnIconSize="20px",bdlBtnTextIconSize="16px",bdlBtnPaddingHorizontal="16px",bdlTransitionDurationBase="0.15s",bdlTimingFunction=["cubic-bezier(0","0","0.6","1)"],sizeSmallMediumMin="375px",sizeMediumMin="461px",sizeLargeMin="768px",sizeSmallMax="374px",sizeSmallMediumMax="460px",sizeMediumMax="767px",sizeLargeMax="1023px",sizeXlargeMax="1219px",smallScreen="(max-width: 374px)",smallMediumScreen="(max-width: 460px)",mediumScreen="(max-width: 767px)",largeScreen="(max-width: 1023px)",xlargeScreen="(max-width: 1219px)"},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);