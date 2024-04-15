(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[71369,60812],{"./node_modules/gud/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var key="__global_unique_id__";module.exports=function(){return __webpack_require__.g[key]=(__webpack_require__.g[key]||0)+1}},"./node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),now=__webpack_require__("./node_modules/lodash/now.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/lodash/get.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js");module.exports=function get(object,path,defaultValue){var result=null==object?void 0:baseGet(object,path);return void 0===result?defaultValue:result}},"./node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"./node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("./node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/react-intl/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ji:()=>FormattedDate,BK:()=>FormattedNumber,vU:()=>defineMessages});var DisplayName,DisplayNameParts,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),components_useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");!function(DisplayName){DisplayName.formatDate="FormattedDate",DisplayName.formatTime="FormattedTime",DisplayName.formatNumber="FormattedNumber",DisplayName.formatList="FormattedList",DisplayName.formatDisplayName="FormattedDisplayName"}(DisplayName||(DisplayName={})),function(DisplayNameParts){DisplayNameParts.formatDate="FormattedDateParts",DisplayNameParts.formatTime="FormattedTimeParts",DisplayNameParts.formatNumber="FormattedNumberParts",DisplayNameParts.formatList="FormattedListParts"}(DisplayNameParts||(DisplayNameParts={}));var FormattedNumberParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]);return children(intl.formatNumberToParts(value,formatProps))};FormattedNumberParts.displayName="FormattedNumberParts";function createFormattedDateTimePartsComponent(name){var ComponentParts=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),date="string"==typeof value?new Date(value||0):value;return children("formatDate"===name?intl.formatDateToParts(date,formatProps):intl.formatTimeToParts(date,formatProps))};return ComponentParts.displayName=DisplayNameParts[name],ComponentParts}function createFormattedComponent(name){var Component=function(props){var intl=(0,components_useIntl.Z)(),value=props.value,children=props.children,formatProps=(0,tslib_es6._T)(props,["value","children"]),formattedValue=intl[name](value,formatProps);if("function"==typeof children)return children(formattedValue);var Text=intl.textComponent||react.Fragment;return react.createElement(Text,null,formattedValue)};return Component.displayName=DisplayName[name],Component}function defineMessages(msgs){return msgs}FormattedNumberParts.displayName="FormattedNumberParts";var FormattedDate=createFormattedComponent("formatDate"),FormattedNumber=(createFormattedComponent("formatTime"),createFormattedComponent("formatNumber"));createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"./node_modules/react-intl/lib/src/components/message.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIntl__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function FormattedMessage(props){var intl=(0,_useIntl__WEBPACK_IMPORTED_MODULE_3__.Z)(),formatMessage=intl.formatMessage,_a=intl.textComponent,Text=void 0===_a?react__WEBPACK_IMPORTED_MODULE_0__.Fragment:_a,id=props.id,description=props.description,defaultMessage=props.defaultMessage,values=props.values,children=props.children,_b=props.tagName,Component=void 0===_b?Text:_b,nodes=formatMessage({id,description,defaultMessage},values,{ignoreTag:props.ignoreTag});return"function"==typeof children?children(Array.isArray(nodes)?nodes:[nodes]):Component?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null,react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(nodes)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,nodes)}FormattedMessage.displayName="FormattedMessage";var MemoizedFormattedMessage=react__WEBPACK_IMPORTED_MODULE_0__.memo(FormattedMessage,(function areEqual(prevProps,nextProps){var values=prevProps.values,otherProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(prevProps,["values"]),nextValues=nextProps.values,nextOtherProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(nextProps,["values"]);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.wU)(nextValues,values)&&(0,_utils__WEBPACK_IMPORTED_MODULE_2__.wU)(otherProps,nextOtherProps)}));MemoizedFormattedMessage.displayName="MemoizedFormattedMessage";const __WEBPACK_DEFAULT_EXPORT__=MemoizedFormattedMessage},"./node_modules/react-intl/lib/src/components/useIntl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useIntl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_injectIntl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function useIntl(){var intl=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__._y);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.lq)(intl),intl}},"./node_modules/scroll-into-view-if-needed/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isElement(el){return null!=el&&"object"==typeof el&&1===el.nodeType}function canOverflow(overflow,skipOverflowHiddenElements){return(!skipOverflowHiddenElements||"hidden"!==overflow)&&("visible"!==overflow&&"clip"!==overflow)}function isScrollable(el,skipOverflowHiddenElements){if(el.clientHeight<el.scrollHeight||el.clientWidth<el.scrollWidth){var style=getComputedStyle(el,null);return canOverflow(style.overflowY,skipOverflowHiddenElements)||canOverflow(style.overflowX,skipOverflowHiddenElements)}return!1}function alignNearest(scrollingEdgeStart,scrollingEdgeEnd,scrollingSize,scrollingBorderStart,scrollingBorderEnd,elementEdgeStart,elementEdgeEnd,elementSize){return elementEdgeStart<scrollingEdgeStart&&elementEdgeEnd>scrollingEdgeEnd||elementEdgeStart>scrollingEdgeStart&&elementEdgeEnd<scrollingEdgeEnd?0:elementEdgeStart<=scrollingEdgeStart&&elementSize<=scrollingSize||elementEdgeEnd>=scrollingEdgeEnd&&elementSize>=scrollingSize?elementEdgeStart-scrollingEdgeStart-scrollingBorderStart:elementEdgeEnd>scrollingEdgeEnd&&elementSize<scrollingSize||elementEdgeStart<scrollingEdgeStart&&elementSize>scrollingSize?elementEdgeEnd-scrollingEdgeEnd+scrollingBorderEnd:0}__webpack_require__.d(__webpack_exports__,{Z:()=>scroll_into_view_if_needed_es});const es=function(target,options){var scrollMode=options.scrollMode,block=options.block,inline=options.inline,boundary=options.boundary,skipOverflowHiddenElements=options.skipOverflowHiddenElements,checkBoundary="function"==typeof boundary?boundary:function(node){return node!==boundary};if(!isElement(target))throw new TypeError("Invalid target");for(var scrollingElement=document.scrollingElement||document.documentElement,frames=[],cursor=target;isElement(cursor)&&checkBoundary(cursor);){if((cursor=cursor.parentNode)===scrollingElement){frames.push(cursor);break}cursor===document.body&&isScrollable(cursor)&&!isScrollable(document.documentElement)||isScrollable(cursor,skipOverflowHiddenElements)&&frames.push(cursor)}for(var viewportWidth=window.visualViewport?visualViewport.width:innerWidth,viewportHeight=window.visualViewport?visualViewport.height:innerHeight,viewportX=window.scrollX||pageXOffset,viewportY=window.scrollY||pageYOffset,_target$getBoundingCl=target.getBoundingClientRect(),targetHeight=_target$getBoundingCl.height,targetWidth=_target$getBoundingCl.width,targetTop=_target$getBoundingCl.top,targetRight=_target$getBoundingCl.right,targetBottom=_target$getBoundingCl.bottom,targetLeft=_target$getBoundingCl.left,targetBlock="start"===block||"nearest"===block?targetTop:"end"===block?targetBottom:targetTop+targetHeight/2,targetInline="center"===inline?targetLeft+targetWidth/2:"end"===inline?targetRight:targetLeft,computations=[],index=0;index<frames.length;index++){var frame=frames[index],_frame$getBoundingCli=frame.getBoundingClientRect(),_height=_frame$getBoundingCli.height,_width=_frame$getBoundingCli.width,_top=_frame$getBoundingCli.top,right=_frame$getBoundingCli.right,bottom=_frame$getBoundingCli.bottom,_left=_frame$getBoundingCli.left;if("if-needed"===scrollMode&&targetTop>=0&&targetLeft>=0&&targetBottom<=viewportHeight&&targetRight<=viewportWidth&&targetTop>=_top&&targetBottom<=bottom&&targetLeft>=_left&&targetRight<=right)return computations;var frameStyle=getComputedStyle(frame),borderLeft=parseInt(frameStyle.borderLeftWidth,10),borderTop=parseInt(frameStyle.borderTopWidth,10),borderRight=parseInt(frameStyle.borderRightWidth,10),borderBottom=parseInt(frameStyle.borderBottomWidth,10),blockScroll=0,inlineScroll=0,scrollbarWidth="offsetWidth"in frame?frame.offsetWidth-frame.clientWidth-borderLeft-borderRight:0,scrollbarHeight="offsetHeight"in frame?frame.offsetHeight-frame.clientHeight-borderTop-borderBottom:0;if(scrollingElement===frame)blockScroll="start"===block?targetBlock:"end"===block?targetBlock-viewportHeight:"nearest"===block?alignNearest(viewportY,viewportY+viewportHeight,viewportHeight,borderTop,borderBottom,viewportY+targetBlock,viewportY+targetBlock+targetHeight,targetHeight):targetBlock-viewportHeight/2,inlineScroll="start"===inline?targetInline:"center"===inline?targetInline-viewportWidth/2:"end"===inline?targetInline-viewportWidth:alignNearest(viewportX,viewportX+viewportWidth,viewportWidth,borderLeft,borderRight,viewportX+targetInline,viewportX+targetInline+targetWidth,targetWidth),blockScroll=Math.max(0,blockScroll+viewportY),inlineScroll=Math.max(0,inlineScroll+viewportX);else{blockScroll="start"===block?targetBlock-_top-borderTop:"end"===block?targetBlock-bottom+borderBottom+scrollbarHeight:"nearest"===block?alignNearest(_top,bottom,_height,borderTop,borderBottom+scrollbarHeight,targetBlock,targetBlock+targetHeight,targetHeight):targetBlock-(_top+_height/2)+scrollbarHeight/2,inlineScroll="start"===inline?targetInline-_left-borderLeft:"center"===inline?targetInline-(_left+_width/2)+scrollbarWidth/2:"end"===inline?targetInline-right+borderRight+scrollbarWidth:alignNearest(_left,right,_width,borderLeft,borderRight+scrollbarWidth,targetInline,targetInline+targetWidth,targetWidth);var scrollLeft=frame.scrollLeft,scrollTop=frame.scrollTop;targetBlock+=scrollTop-(blockScroll=Math.max(0,Math.min(scrollTop+blockScroll,frame.scrollHeight-_height+scrollbarHeight))),targetInline+=scrollLeft-(inlineScroll=Math.max(0,Math.min(scrollLeft+inlineScroll,frame.scrollWidth-_width+scrollbarWidth)))}computations.push({el:frame,top:blockScroll,left:inlineScroll})}return computations};function isOptionsObject(options){return options===Object(options)&&0!==Object.keys(options).length}const scroll_into_view_if_needed_es=function scrollIntoView(target,options){var targetIsDetached=!target.ownerDocument.documentElement.contains(target);if(isOptionsObject(options)&&"function"==typeof options.behavior)return options.behavior(targetIsDetached?[]:es(target,options));if(!targetIsDetached){var computeOptions=function getOptions(options){return!1===options?{block:"end",inline:"nearest"}:isOptionsObject(options)?options:{block:"start",inline:"nearest"}}(options);return function defaultBehavior(actions,behavior){void 0===behavior&&(behavior="auto");var canSmoothScroll="scrollBehavior"in document.body.style;actions.forEach((function(_ref){var el=_ref.el,top=_ref.top,left=_ref.left;el.scroll&&canSmoothScroll?el.scroll({top,left,behavior}):(el.scrollTop=top,el.scrollLeft=left)}))}(es(target,computeOptions),computeOptions.behavior)}}}}]);