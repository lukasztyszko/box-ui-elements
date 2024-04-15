(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[67423],{"./src/elements/content-explorer/stories/ShareDialog.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,shareDialog:()=>shareDialog});__webpack_require__("./node_modules/react/index.js");var _shareDialog$paramete,_shareDialog$paramete2,_shareDialog$paramete3,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/primary-button/PrimaryButton.tsx"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants.js"),_utils_storybook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/storybook.js"),_ShareDialog__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/elements/content-explorer/ShareDialog.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./src/elements/common/modal.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const shareDialog={render:args=>{const[,setArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),{appElement,rootElement}=(0,_utils_storybook__WEBPACK_IMPORTED_MODULE_4__.Ic)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ShareDialog__WEBPACK_IMPORTED_MODULE_5__.Z,_objectSpread({appElement,item:{id:"abcdefg",shared_link:{access:_constants__WEBPACK_IMPORTED_MODULE_3__.G3v,url:"https://cloud.box.com/s/abcdefg"}},onCancel:()=>setArgs({isOpen:!1}),parentElement:rootElement},args)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:()=>setArgs({isOpen:!0}),children:"Launch ShareDialog"})]})}},__WEBPACK_DEFAULT_EXPORT__={title:"Elements/ContentExplorer",component:_ShareDialog__WEBPACK_IMPORTED_MODULE_5__.Z,args:{canSetShareAccess:!1,isLoading:!1,isOpen:!1}};shareDialog.parameters=_objectSpread({},shareDialog.parameters,{docs:_objectSpread({},null===(_shareDialog$paramete=shareDialog.parameters)||void 0===_shareDialog$paramete?void 0:_shareDialog$paramete.docs,{source:_objectSpread({originalSource:"{\n  render: (args: any) => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [, setArgs] = useArgs();\n    const handleOpenModal = () => setArgs({\n      isOpen: true\n    });\n    const handleCloseModal = () => setArgs({\n      isOpen: false\n    });\n    const {\n      appElement,\n      rootElement\n    } = addRootElement();\n    return <div>\n                <ShareDialog appElement={appElement} item={{\n        id: 'abcdefg',\n        shared_link: {\n          access: ACCESS_OPEN,\n          url: 'https://cloud.box.com/s/abcdefg'\n        }\n      }} onCancel={handleCloseModal} parentElement={rootElement} {...args} />\n                <PrimaryButton onClick={handleOpenModal}>Launch ShareDialog</PrimaryButton>\n            </div>;\n  }\n}"},null===(_shareDialog$paramete2=shareDialog.parameters)||void 0===_shareDialog$paramete2||null===(_shareDialog$paramete3=_shareDialog$paramete2.docs)||void 0===_shareDialog$paramete3?void 0:_shareDialog$paramete3.source)})});const __namedExportsOrder=["shareDialog"]},"./src/utils/storybook.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Ic:()=>addRootElement,X:()=>SLEEP_TIMEOUT,tK:()=>defaultVisualConfig});const addRootElement=()=>{let appElement=document.getElementById("rootElement"),rootElement=document.getElementById("rootElement");return document.body&&null===rootElement&&(rootElement=document.createElement("div"),rootElement.setAttribute("id","rootElement"),document.body.appendChild(rootElement)),null!==rootElement&&null===appElement&&(appElement=document.createElement("div"),appElement.setAttribute("id","appElement"),rootElement.appendChild(appElement)),{appElement,rootElement}},SLEEP_TIMEOUT=500,defaultVisualConfig={parameters:function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},{chromatic:{disableSnapshot:!1}})}},"./node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"./node_modules/react-intl/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ji:()=>FormattedDate,BK:()=>FormattedNumber,vU:()=>defineMessages});var DisplayName,DisplayNameParts,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),components_useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");!function(DisplayName){DisplayName.formatDate="FormattedDate",DisplayName.formatTime="FormattedTime",DisplayName.formatNumber="FormattedNumber",DisplayName.formatList="FormattedList",DisplayName.formatDisplayName="FormattedDisplayName"}(DisplayName||(DisplayName={})),function(DisplayNameParts){DisplayNameParts.formatDate="FormattedDateParts",DisplayNameParts.formatTime="FormattedTimeParts",DisplayNameParts.formatNumber="FormattedNumberParts",DisplayNameParts.formatList="FormattedListParts"}(DisplayNameParts||(DisplayNameParts={}));var FormattedNumberParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]);return children(intl.formatNumberToParts(value,formatProps))};FormattedNumberParts.displayName="FormattedNumberParts";function createFormattedDateTimePartsComponent(name){var ComponentParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),date="string"==typeof value?new Date(value||0):value;return children("formatDate"===name?intl.formatDateToParts(date,formatProps):intl.formatTimeToParts(date,formatProps))};return ComponentParts.displayName=DisplayNameParts[name],ComponentParts}function createFormattedComponent(name){var Component=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),formattedValue=intl[name](value,formatProps);if("function"==typeof children)return children(formattedValue);var Text=intl.textComponent||react.Fragment;return react.createElement(Text,null,formattedValue)};return Component.displayName=DisplayName[name],Component}function defineMessages(msgs){return msgs}FormattedNumberParts.displayName="FormattedNumberParts";var FormattedDate=createFormattedComponent("formatDate"),FormattedNumber=(createFormattedComponent("formatTime"),createFormattedComponent("formatNumber"));createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"./node_modules/react-intl/lib/src/components/message.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIntl__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function FormattedMessage(props){var intl=(0,_useIntl__WEBPACK_IMPORTED_MODULE_3__.Z)(),formatMessage=intl.formatMessage,_a=intl.textComponent,Text=void 0===_a?react__WEBPACK_IMPORTED_MODULE_0__.Fragment:_a,id=props.id,description=props.description,defaultMessage=props.defaultMessage,values=props.values,children=props.children,_b=props.tagName,Component=void 0===_b?Text:_b,nodes=formatMessage({id,description,defaultMessage},values,{ignoreTag:props.ignoreTag});return"function"==typeof children?children(Array.isArray(nodes)?nodes:[nodes]):Component?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null,react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(nodes)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,nodes)}FormattedMessage.displayName="FormattedMessage";var MemoizedFormattedMessage=react__WEBPACK_IMPORTED_MODULE_0__.memo(FormattedMessage,(function areEqual(prevProps,nextProps){var values=prevProps.values,otherProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(prevProps,["values"]),nextValues=nextProps.values,nextOtherProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(nextProps,["values"]);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.wU)(nextValues,values)&&(0,_utils__WEBPACK_IMPORTED_MODULE_2__.wU)(otherProps,nextOtherProps)}));MemoizedFormattedMessage.displayName="MemoizedFormattedMessage";const __WEBPACK_DEFAULT_EXPORT__=MemoizedFormattedMessage},"./node_modules/react-intl/lib/src/components/useIntl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useIntl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_injectIntl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function useIntl(){var intl=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__._y);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.lq)(intl),intl}}}]);