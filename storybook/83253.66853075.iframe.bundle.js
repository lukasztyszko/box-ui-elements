/*! For license information please see 83253.66853075.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[83253],{"./node_modules/exenv/index.js":(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),ExecutionEnvironment={canUseDOM,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:canUseDOM&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:canUseDOM&&!!window.screen};void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return ExecutionEnvironment}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function componentWillMount(){var state=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=state&&this.setState(state)}function componentWillReceiveProps(nextProps){this.setState(function updater(prevState){var state=this.constructor.getDerivedStateFromProps(nextProps,prevState);return null!=state?state:null}.bind(this))}function componentWillUpdate(nextProps,nextState){try{var prevProps=this.props,prevState=this.state;this.props=nextProps,this.state=nextState,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(prevProps,prevState)}finally{this.props=prevProps,this.state=prevState}}function polyfill(Component){var prototype=Component.prototype;if(!prototype||!prototype.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof Component.getDerivedStateFromProps&&"function"!=typeof prototype.getSnapshotBeforeUpdate)return Component;var foundWillMountName=null,foundWillReceivePropsName=null,foundWillUpdateName=null;if("function"==typeof prototype.componentWillMount?foundWillMountName="componentWillMount":"function"==typeof prototype.UNSAFE_componentWillMount&&(foundWillMountName="UNSAFE_componentWillMount"),"function"==typeof prototype.componentWillReceiveProps?foundWillReceivePropsName="componentWillReceiveProps":"function"==typeof prototype.UNSAFE_componentWillReceiveProps&&(foundWillReceivePropsName="UNSAFE_componentWillReceiveProps"),"function"==typeof prototype.componentWillUpdate?foundWillUpdateName="componentWillUpdate":"function"==typeof prototype.UNSAFE_componentWillUpdate&&(foundWillUpdateName="UNSAFE_componentWillUpdate"),null!==foundWillMountName||null!==foundWillReceivePropsName||null!==foundWillUpdateName){var componentName=Component.displayName||Component.name,newApiName="function"==typeof Component.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+componentName+" uses "+newApiName+" but also contains the following legacy lifecycles:"+(null!==foundWillMountName?"\n  "+foundWillMountName:"")+(null!==foundWillReceivePropsName?"\n  "+foundWillReceivePropsName:"")+(null!==foundWillUpdateName?"\n  "+foundWillUpdateName:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof Component.getDerivedStateFromProps&&(prototype.componentWillMount=componentWillMount,prototype.componentWillReceiveProps=componentWillReceiveProps),"function"==typeof prototype.getSnapshotBeforeUpdate){if("function"!=typeof prototype.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");prototype.componentWillUpdate=componentWillUpdate;var componentDidUpdate=prototype.componentDidUpdate;prototype.componentDidUpdate=function componentDidUpdatePolyfill(prevProps,prevState,maybeSnapshot){var snapshot=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:maybeSnapshot;componentDidUpdate.call(this,prevProps,prevState,snapshot)}}return Component}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{polyfill:()=>polyfill}),componentWillMount.__suppressDeprecationWarning=!0,componentWillReceiveProps.__suppressDeprecationWarning=!0,componentWillUpdate.__suppressDeprecationWarning=!0},"./node_modules/react-modal/lib/components/Modal.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bodyOpenClassName=exports.portalClassName=void 0;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_reactDom2=_interopRequireDefault(__webpack_require__("./node_modules/react-dom/index.js")),_propTypes2=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_ModalPortal2=_interopRequireDefault(__webpack_require__("./node_modules/react-modal/lib/components/ModalPortal.js")),ariaAppHider=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}(__webpack_require__("./node_modules/react-modal/lib/helpers/ariaAppHider.js")),_safeHTMLElement=__webpack_require__("./node_modules/react-modal/lib/helpers/safeHTMLElement.js"),_safeHTMLElement2=_interopRequireDefault(_safeHTMLElement),_reactLifecyclesCompat=__webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}var portalClassName=exports.portalClassName="ReactModalPortal",bodyOpenClassName=exports.bodyOpenClassName="ReactModal__Body--open",isReact16=void 0!==_reactDom2.default.createPortal,getCreatePortal=function getCreatePortal(){return isReact16?_reactDom2.default.createPortal:_reactDom2.default.unstable_renderSubtreeIntoContainer};function getParentElement(parentSelector){return parentSelector()}var Modal=function(_Component){function Modal(){var _ref,_temp,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Modal);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_ref=Modal.__proto__||Object.getPrototypeOf(Modal)).call.apply(_ref,[this].concat(args))),_this.removePortal=function(){!isReact16&&_reactDom2.default.unmountComponentAtNode(_this.node),getParentElement(_this.props.parentSelector).removeChild(_this.node)},_this.portalRef=function(ref){_this.portal=ref},_this.renderPortal=function(props){var portal=getCreatePortal()(_this,_react2.default.createElement(_ModalPortal2.default,_extends({defaultStyles:Modal.defaultStyles},props)),_this.node);_this.portalRef(portal)},_possibleConstructorReturn(_this,_temp)}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Modal,_Component),_createClass(Modal,[{key:"componentDidMount",value:function componentDidMount(){_safeHTMLElement.canUseDOM&&(isReact16||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,getParentElement(this.props.parentSelector).appendChild(this.node),!isReact16&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function getSnapshotBeforeUpdate(prevProps){return{prevParent:getParentElement(prevProps.parentSelector),nextParent:getParentElement(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,_,snapshot){if(_safeHTMLElement.canUseDOM){var _props=this.props,isOpen=_props.isOpen,portalClassName=_props.portalClassName;prevProps.portalClassName!==portalClassName&&(this.node.className=portalClassName);var prevParent=snapshot.prevParent,nextParent=snapshot.nextParent;nextParent!==prevParent&&(prevParent.removeChild(this.node),nextParent.appendChild(this.node)),(prevProps.isOpen||isOpen)&&!isReact16&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(_safeHTMLElement.canUseDOM&&this.node&&this.portal){var state=this.portal.state,now=Date.now(),closesAt=state.isOpen&&this.props.closeTimeoutMS&&(state.closesAt||now+this.props.closeTimeoutMS);closesAt?(state.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,closesAt-now)):this.removePortal()}}},{key:"render",value:function render(){return _safeHTMLElement.canUseDOM&&isReact16?(!this.node&&isReact16&&(this.node=document.createElement("div")),getCreatePortal()(_react2.default.createElement(_ModalPortal2.default,_extends({ref:this.portalRef,defaultStyles:Modal.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function setAppElement(element){ariaAppHider.setElement(element)}}]),Modal}(_react.Component);Modal.propTypes={isOpen:_propTypes2.default.bool.isRequired,style:_propTypes2.default.shape({content:_propTypes2.default.object,overlay:_propTypes2.default.object}),portalClassName:_propTypes2.default.string,bodyOpenClassName:_propTypes2.default.string,htmlOpenClassName:_propTypes2.default.string,className:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.shape({base:_propTypes2.default.string.isRequired,afterOpen:_propTypes2.default.string.isRequired,beforeClose:_propTypes2.default.string.isRequired})]),overlayClassName:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.shape({base:_propTypes2.default.string.isRequired,afterOpen:_propTypes2.default.string.isRequired,beforeClose:_propTypes2.default.string.isRequired})]),appElement:_propTypes2.default.instanceOf(_safeHTMLElement2.default),onAfterOpen:_propTypes2.default.func,onRequestClose:_propTypes2.default.func,closeTimeoutMS:_propTypes2.default.number,ariaHideApp:_propTypes2.default.bool,shouldFocusAfterRender:_propTypes2.default.bool,shouldCloseOnOverlayClick:_propTypes2.default.bool,shouldReturnFocusAfterClose:_propTypes2.default.bool,parentSelector:_propTypes2.default.func,aria:_propTypes2.default.object,data:_propTypes2.default.object,role:_propTypes2.default.string,contentLabel:_propTypes2.default.string,shouldCloseOnEsc:_propTypes2.default.bool,overlayRef:_propTypes2.default.func,contentRef:_propTypes2.default.func},Modal.defaultProps={isOpen:!1,portalClassName,bodyOpenClassName,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function parentSelector(){return document.body}},Modal.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,_reactLifecyclesCompat.polyfill)(Modal),exports.default=Modal},"./node_modules/react-modal/lib/components/ModalPortal.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_propTypes2=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),focusManager=_interopRequireWildcard(__webpack_require__("./node_modules/react-modal/lib/helpers/focusManager.js")),_scopeTab2=_interopRequireDefault(__webpack_require__("./node_modules/react-modal/lib/helpers/scopeTab.js")),ariaAppHider=_interopRequireWildcard(__webpack_require__("./node_modules/react-modal/lib/helpers/ariaAppHider.js")),classList=_interopRequireWildcard(__webpack_require__("./node_modules/react-modal/lib/helpers/classList.js")),_safeHTMLElement2=_interopRequireDefault(__webpack_require__("./node_modules/react-modal/lib/helpers/safeHTMLElement.js"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj.default=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var CLASS_NAMES={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ariaHiddenInstances=0,ModalPortal=function(_Component){function ModalPortal(props){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ModalPortal);var _this=function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(ModalPortal.__proto__||Object.getPrototypeOf(ModalPortal)).call(this,props));return _this.setOverlayRef=function(overlay){_this.overlay=overlay,_this.props.overlayRef&&_this.props.overlayRef(overlay)},_this.setContentRef=function(content){_this.content=content,_this.props.contentRef&&_this.props.contentRef(content)},_this.afterClose=function(){var _this$props=_this.props,appElement=_this$props.appElement,ariaHideApp=_this$props.ariaHideApp,htmlOpenClassName=_this$props.htmlOpenClassName,bodyOpenClassName=_this$props.bodyOpenClassName;bodyOpenClassName&&classList.remove(document.body,bodyOpenClassName),htmlOpenClassName&&classList.remove(document.getElementsByTagName("html")[0],htmlOpenClassName),ariaHideApp&&ariaHiddenInstances>0&&0===(ariaHiddenInstances-=1)&&ariaAppHider.show(appElement),_this.props.shouldFocusAfterRender&&(_this.props.shouldReturnFocusAfterClose?(focusManager.returnFocus(),focusManager.teardownScopedFocus()):focusManager.popWithoutFocus()),_this.props.onAfterClose&&_this.props.onAfterClose()},_this.open=function(){_this.beforeOpen(),_this.state.afterOpen&&_this.state.beforeClose?(clearTimeout(_this.closeTimer),_this.setState({beforeClose:!1})):(_this.props.shouldFocusAfterRender&&(focusManager.setupScopedFocus(_this.node),focusManager.markForFocusLater()),_this.setState({isOpen:!0},(function(){_this.setState({afterOpen:!0}),_this.props.isOpen&&_this.props.onAfterOpen&&_this.props.onAfterOpen()})))},_this.close=function(){_this.props.closeTimeoutMS>0?_this.closeWithTimeout():_this.closeWithoutTimeout()},_this.focusContent=function(){return _this.content&&!_this.contentHasFocus()&&_this.content.focus()},_this.closeWithTimeout=function(){var closesAt=Date.now()+_this.props.closeTimeoutMS;_this.setState({beforeClose:!0,closesAt},(function(){_this.closeTimer=setTimeout(_this.closeWithoutTimeout,_this.state.closesAt-Date.now())}))},_this.closeWithoutTimeout=function(){_this.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},_this.afterClose)},_this.handleKeyDown=function(event){9===event.keyCode&&(0,_scopeTab2.default)(_this.content,event),_this.props.shouldCloseOnEsc&&27===event.keyCode&&(event.stopPropagation(),_this.requestClose(event))},_this.handleOverlayOnClick=function(event){null===_this.shouldClose&&(_this.shouldClose=!0),_this.shouldClose&&_this.props.shouldCloseOnOverlayClick&&(_this.ownerHandlesClose()?_this.requestClose(event):_this.focusContent()),_this.shouldClose=null},_this.handleContentOnMouseUp=function(){_this.shouldClose=!1},_this.handleOverlayOnMouseDown=function(event){_this.props.shouldCloseOnOverlayClick||event.target!=_this.overlay||event.preventDefault()},_this.handleContentOnClick=function(){_this.shouldClose=!1},_this.handleContentOnMouseDown=function(){_this.shouldClose=!1},_this.requestClose=function(event){return _this.ownerHandlesClose()&&_this.props.onRequestClose(event)},_this.ownerHandlesClose=function(){return _this.props.onRequestClose},_this.shouldBeClosed=function(){return!_this.state.isOpen&&!_this.state.beforeClose},_this.contentHasFocus=function(){return document.activeElement===_this.content||_this.content.contains(document.activeElement)},_this.buildClassName=function(which,additional){var classNames="object"===(void 0===additional?"undefined":_typeof(additional))?additional:{base:CLASS_NAMES[which],afterOpen:CLASS_NAMES[which]+"--after-open",beforeClose:CLASS_NAMES[which]+"--before-close"},className=classNames.base;return _this.state.afterOpen&&(className=className+" "+classNames.afterOpen),_this.state.beforeClose&&(className=className+" "+classNames.beforeClose),"string"==typeof additional&&additional?className+" "+additional:className},_this.attributesFromObject=function(prefix,items){return Object.keys(items).reduce((function(acc,name){return acc[prefix+"-"+name]=items[name],acc}),{})},_this.state={afterOpen:!1,beforeClose:!1},_this.shouldClose=null,_this.moveFromContentToOverlay=null,_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(ModalPortal,_Component),_createClass(ModalPortal,[{key:"componentDidMount",value:function componentDidMount(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){prevProps.bodyOpenClassName!==this.props.bodyOpenClassName&&console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'),prevProps.htmlOpenClassName!==this.props.htmlOpenClassName&&console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'),this.props.isOpen&&!prevProps.isOpen?this.open():!this.props.isOpen&&prevProps.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!prevState.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function beforeOpen(){var _props=this.props,appElement=_props.appElement,ariaHideApp=_props.ariaHideApp,htmlOpenClassName=_props.htmlOpenClassName,bodyOpenClassName=_props.bodyOpenClassName;bodyOpenClassName&&classList.add(document.body,bodyOpenClassName),htmlOpenClassName&&classList.add(document.getElementsByTagName("html")[0],htmlOpenClassName),ariaHideApp&&(ariaHiddenInstances+=1,ariaAppHider.hide(appElement))}},{key:"render",value:function render(){var _props2=this.props,className=_props2.className,overlayClassName=_props2.overlayClassName,defaultStyles=_props2.defaultStyles,contentStyles=className?{}:defaultStyles.content,overlayStyles=overlayClassName?{}:defaultStyles.overlay;return this.shouldBeClosed()?null:_react2.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",overlayClassName),style:_extends({},overlayStyles,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},_react2.default.createElement("div",_extends({ref:this.setContentRef,style:_extends({},contentStyles,this.props.style.content),className:this.buildClassName("content",className),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),ModalPortal}(_react.Component);ModalPortal.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ModalPortal.propTypes={isOpen:_propTypes2.default.bool.isRequired,defaultStyles:_propTypes2.default.shape({content:_propTypes2.default.object,overlay:_propTypes2.default.object}),style:_propTypes2.default.shape({content:_propTypes2.default.object,overlay:_propTypes2.default.object}),className:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.object]),overlayClassName:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.object]),bodyOpenClassName:_propTypes2.default.string,htmlOpenClassName:_propTypes2.default.string,ariaHideApp:_propTypes2.default.bool,appElement:_propTypes2.default.instanceOf(_safeHTMLElement2.default),onAfterOpen:_propTypes2.default.func,onAfterClose:_propTypes2.default.func,onRequestClose:_propTypes2.default.func,closeTimeoutMS:_propTypes2.default.number,shouldFocusAfterRender:_propTypes2.default.bool,shouldCloseOnOverlayClick:_propTypes2.default.bool,shouldReturnFocusAfterClose:_propTypes2.default.bool,role:_propTypes2.default.string,contentLabel:_propTypes2.default.string,aria:_propTypes2.default.object,data:_propTypes2.default.object,children:_propTypes2.default.node,shouldCloseOnEsc:_propTypes2.default.bool,overlayRef:_propTypes2.default.func,contentRef:_propTypes2.default.func,testId:_propTypes2.default.string},exports.default=ModalPortal,module.exports=exports.default},"./node_modules/react-modal/lib/helpers/ariaAppHider.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.assertNodeList=assertNodeList,exports.setElement=function setElement(element){var useElement=element;if("string"==typeof useElement&&_safeHTMLElement.canUseDOM){var el=document.querySelectorAll(useElement);assertNodeList(el,useElement),useElement="length"in el?el[0]:el}return globalElement=useElement||globalElement},exports.validateElement=validateElement,exports.hide=function hide(appElement){validateElement(appElement)&&(appElement||globalElement).setAttribute("aria-hidden","true")},exports.show=function show(appElement){validateElement(appElement)&&(appElement||globalElement).removeAttribute("aria-hidden")},exports.documentNotReadyOrSSRTesting=function documentNotReadyOrSSRTesting(){globalElement=null},exports.resetForTesting=function resetForTesting(){globalElement=null};var _warning2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/warning/browser.js")),_safeHTMLElement=__webpack_require__("./node_modules/react-modal/lib/helpers/safeHTMLElement.js");var globalElement=null;function assertNodeList(nodeList,selector){if(!nodeList||!nodeList.length)throw new Error("react-modal: No elements were found for selector "+selector+".")}function validateElement(appElement){return!(!appElement&&!globalElement)||((0,_warning2.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},"./node_modules/react-modal/lib/helpers/classList.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dumpClassLists=function dumpClassLists(){var classes=document.getElementsByTagName("html")[0].className,buffer="Show tracked classes:\n\n";for(var x in buffer+="<html /> ("+classes+"):\n",htmlClassList)buffer+="  "+x+" "+htmlClassList[x]+"\n";for(var _x in buffer+="\n\ndoc.body ("+(classes=document.body.className)+"):\n",docBodyClassList)buffer+="  "+_x+" "+docBodyClassList[_x]+"\n";buffer+="\n",console.log(buffer)};var htmlClassList={},docBodyClassList={};exports.add=function add(element,classString){return function trackClass(classListRef,poll,classes){classes.forEach((function(className){!function incrementReference(poll,className){poll[className]||(poll[className]=0),poll[className]+=1}(poll,className),classListRef.add(className)}))}(element.classList,"html"==element.nodeName.toLowerCase()?htmlClassList:docBodyClassList,classString.split(" "))},exports.remove=function remove(element,classString){return function untrackClass(classListRef,poll,classes){classes.forEach((function(className){!function decrementReference(poll,className){poll[className]&&(poll[className]-=1)}(poll,className),0===poll[className]&&classListRef.remove(className)}))}(element.classList,"html"==element.nodeName.toLowerCase()?htmlClassList:docBodyClassList,classString.split(" "))}},"./node_modules/react-modal/lib/helpers/focusManager.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleBlur=handleBlur,exports.handleFocus=handleFocus,exports.markForFocusLater=function markForFocusLater(){focusLaterElements.push(document.activeElement)},exports.returnFocus=function returnFocus(){var toFocus=null;try{return void(0!==focusLaterElements.length&&(toFocus=focusLaterElements.pop()).focus())}catch(e){console.warn(["You tried to return focus to",toFocus,"but it is not in the DOM anymore"].join(" "))}},exports.popWithoutFocus=function popWithoutFocus(){focusLaterElements.length>0&&focusLaterElements.pop()},exports.setupScopedFocus=function setupScopedFocus(element){modalElement=element,window.addEventListener?(window.addEventListener("blur",handleBlur,!1),document.addEventListener("focus",handleFocus,!0)):(window.attachEvent("onBlur",handleBlur),document.attachEvent("onFocus",handleFocus))},exports.teardownScopedFocus=function teardownScopedFocus(){modalElement=null,window.addEventListener?(window.removeEventListener("blur",handleBlur),document.removeEventListener("focus",handleFocus)):(window.detachEvent("onBlur",handleBlur),document.detachEvent("onFocus",handleFocus))};var _tabbable2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react-modal/lib/helpers/tabbable.js"));var focusLaterElements=[],modalElement=null,needToFocus=!1;function handleBlur(){needToFocus=!0}function handleFocus(){if(needToFocus){if(needToFocus=!1,!modalElement)return;setTimeout((function(){modalElement.contains(document.activeElement)||((0,_tabbable2.default)(modalElement)[0]||modalElement).focus()}),0)}}},"./node_modules/react-modal/lib/helpers/safeHTMLElement.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.canUseDOM=void 0;var EE=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/exenv/index.js")).default,SafeHTMLElement=EE.canUseDOM?window.HTMLElement:{};exports.canUseDOM=EE.canUseDOM;exports.default=SafeHTMLElement},"./node_modules/react-modal/lib/helpers/scopeTab.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function scopeTab(node,event){var tabbable=(0,_tabbable2.default)(node);if(!tabbable.length)return void event.preventDefault();var target,shiftKey=event.shiftKey,head=tabbable[0],tail=tabbable[tabbable.length-1];if(node===document.activeElement){if(!shiftKey)return;target=tail}tail!==document.activeElement||shiftKey||(target=head);head===document.activeElement&&shiftKey&&(target=tail);if(target)return event.preventDefault(),void target.focus();var checkSafari=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==checkSafari||"Chrome"==checkSafari[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var x=tabbable.indexOf(document.activeElement);x>-1&&(x+=shiftKey?-1:1);if(void 0===tabbable[x])return event.preventDefault(),void(target=shiftKey?tail:head).focus();event.preventDefault(),tabbable[x].focus()};var _tabbable2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react-modal/lib/helpers/tabbable.js"));module.exports=exports.default},"./node_modules/react-modal/lib/helpers/tabbable.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function findTabbableDescendants(element){return[].slice.call(element.querySelectorAll("*"),0).filter(tabbable)};var tabbableNode=/input|select|textarea|button|object/;function hidesContents(element){var zeroSize=element.offsetWidth<=0&&element.offsetHeight<=0;if(zeroSize&&!element.innerHTML)return!0;var style=window.getComputedStyle(element);return zeroSize?"visible"!==style.getPropertyValue("overflow"):"none"==style.getPropertyValue("display")}function focusable(element,isTabIndexNotNaN){var nodeName=element.nodeName.toLowerCase();return(tabbableNode.test(nodeName)&&!element.disabled||"a"===nodeName&&element.href||isTabIndexNotNaN)&&function visible(element){for(var parentElement=element;parentElement&&parentElement!==document.body;){if(hidesContents(parentElement))return!1;parentElement=parentElement.parentNode}return!0}(element)}function tabbable(element){var tabIndex=element.getAttribute("tabindex");null===tabIndex&&(tabIndex=void 0);var isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN)}module.exports=exports.default},"./node_modules/react-modal/lib/index.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Modal2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react-modal/lib/components/Modal.js"));exports.default=_Modal2.default,module.exports=exports.default},"./node_modules/warning/browser.js":module=>{"use strict";var warning=function(){};warning=function(condition,format,args){var len=arguments.length;args=new Array(len>2?len-2:0);for(var key=2;key<len;key++)args[key-2]=arguments[key];if(void 0===format)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(format.length<10||/^[s\W]*$/.test(format))throw new Error("The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: "+format);if(!condition){var argIndex=0,message="Warning: "+format.replace(/%s/g,(function(){return args[argIndex++]}));"undefined"!=typeof console&&console.error(message);try{throw new Error(message)}catch(x){}}},module.exports=warning}}]);
//# sourceMappingURL=83253.66853075.iframe.bundle.js.map