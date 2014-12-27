/**
 * Based on http://www.emagix.net/academic/mscs-project/item/camera-sync-with-css3-and-webgl-threejs
 * @author mrdoob / http://mrdoob.com/
 */
THREE.CSS3DObject=function(e){THREE.Object3D.call(this),this.element=e,this.element.style.position="absolute",this.addEventListener("removed",function(){null!==this.element.parentNode&&this.element.parentNode.removeChild(this.element)})},THREE.CSS3DObject.prototype=Object.create(THREE.Object3D.prototype),THREE.CSS3DSprite=function(e){THREE.CSS3DObject.call(this,e)},THREE.CSS3DSprite.prototype=Object.create(THREE.CSS3DObject.prototype),THREE.CSS3DRenderer=function(){console.log("THREE.CSS3DRenderer",THREE.REVISION);var e,t,n,o,r=new THREE.Matrix4,i={camera:{fov:0,style:""},objects:{}},a=document.createElement("div");a.style.overflow="hidden",a.style.WebkitTransformStyle="preserve-3d",a.style.MozTransformStyle="preserve-3d",a.style.oTransformStyle="preserve-3d",a.style.transformStyle="preserve-3d",this.domElement=a;var s=document.createElement("div");s.style.WebkitTransformStyle="preserve-3d",s.style.MozTransformStyle="preserve-3d",s.style.oTransformStyle="preserve-3d",s.style.transformStyle="preserve-3d",a.appendChild(s),this.setClearColor=function(){},this.setSize=function(r,i){e=r,t=i,n=e/2,o=t/2,a.style.width=r+"px",a.style.height=i+"px",s.style.width=r+"px",s.style.height=i+"px"};var c=function(e){return Math.abs(e)<1e-6?0:e},l=function(e){var t=e.elements;return"matrix3d("+c(t[0])+","+c(-t[1])+","+c(t[2])+","+c(t[3])+","+c(t[4])+","+c(-t[5])+","+c(t[6])+","+c(t[7])+","+c(t[8])+","+c(-t[9])+","+c(t[10])+","+c(t[11])+","+c(t[12])+","+c(-t[13])+","+c(t[14])+","+c(t[15])+")"},d=function(e){var t=e.elements;return"translate3d(-50%,-50%,0) matrix3d("+c(t[0])+","+c(t[1])+","+c(t[2])+","+c(t[3])+","+c(-t[4])+","+c(-t[5])+","+c(-t[6])+","+c(-t[7])+","+c(t[8])+","+c(t[9])+","+c(t[10])+","+c(t[11])+","+c(t[12])+","+c(t[13])+","+c(t[14])+","+c(t[15])+")"},u=function(e,t){if(e instanceof THREE.CSS3DObject){var n;e instanceof THREE.CSS3DSprite?(r.copy(t.matrixWorldInverse),r.transpose(),r.copyPosition(e.matrixWorld),r.scale(e.scale),r.elements[3]=0,r.elements[7]=0,r.elements[11]=0,r.elements[15]=1,n=d(r)):n=d(e.matrixWorld);var o=e.element,a=i.objects[e.id];(void 0===a||a!==n)&&(o.style.WebkitTransform=n,o.style.MozTransform=n,o.style.oTransform=n,o.style.transform=n,i.objects[e.id]=n),o.parentNode!==s&&s.appendChild(o)}for(var c=0,l=e.children.length;l>c;c++)u(e.children[c],t)};this.render=function(e,r){var c=.5/Math.tan(THREE.Math.degToRad(.5*r.fov))*t;i.camera.fov!==c&&(a.style.WebkitPerspective=c+"px",a.style.MozPerspective=c+"px",a.style.oPerspective=c+"px",a.style.perspective=c+"px",i.camera.fov=c),e.updateMatrixWorld(),void 0===r.parent&&r.updateMatrixWorld(),r.matrixWorldInverse.getInverse(r.matrixWorld);var d="translate3d(0,0,"+c+"px)"+l(r.matrixWorldInverse)+" translate3d("+n+"px,"+o+"px, 0)";i.camera.style!==d&&(s.style.WebkitTransform=d,s.style.MozTransform=d,s.style.oTransform=d,s.style.transform=d,i.camera.style=d),u(e,r)}},THREE.Vector4.prototype.setAxisAngleFromQuaternion2=function(e){var t=e.clone();t.w<0&&(t.x*=-1,t.y*=-1,t.z*=-1,t.w*=-1),this.w=2*Math.acos(t.w);var n=Math.sqrt(1-t.w*t.w);return 1e-13>n?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this},THREE.DeviceOrientationControls=function(e){window.debug=this,this.updateDegree=function(e){this.old_rates=[],this.rates=[],this.axisAngles=[],this.lastT=+new Date;for(var t=0;e>t;t++)this.old_rates.push(new THREE.Quaternion),this.rates.push(new THREE.Quaternion),this.axisAngles.push(new THREE.Vector4)},this.updateDegree(2),this.predictms=-20,this.errorQuaternion=new THREE.Quaternion,this.object=e,this.object.rotation.reorder("YXZ"),this.freeze=!0,this.movementSpeed=1,this.rollSpeed=.005,this.autoAlign=!0,this.autoForward=!1,this.alpha=0,this.beta=0,this.gamma=0,this.orient=0,this.alignQuaternion=new THREE.Quaternion,this.orientationQuaternion=new THREE.Quaternion;var t=(new THREE.Quaternion,new THREE.Quaternion,new THREE.Vector3),n=new THREE.Matrix4,o=new THREE.Euler(0,0,0,"YXZ"),r=new THREE.Quaternion,i=new THREE.Vector3(0,0,1),a=new THREE.Vector3(0,1,0),s=new THREE.Vector3(0,0,0),c=(new THREE.Euler,new THREE.Quaternion),l=new THREE.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5));this.deviceOrientation={},this.screenOrientation=window.orientation||0,this.onDeviceOrientationChangeEvent=function(){var e,t,n,o,r=new THREE.Euler(0,0,0,"YXZ"),a=new THREE.Quaternion,s=new THREE.Quaternion;return function(l){if(!this.freeze&&(this.alpha=THREE.Math.degToRad(l.alpha||0),this.beta=THREE.Math.degToRad(l.beta||0),this.gamma=THREE.Math.degToRad(l.gamma||0),this.orient=THREE.Math.degToRad(this.screenOrientation||0),0!==this.alpha&&0!==this.beta&&0!==this.gamma)){for(e=l.t||+new Date,t=e-this.lastT,predictms=-t,n=this.old_rates,this.old_rates=this.rates,this.rates=n,n=void 0,r.set(this.beta,this.alpha,-this.gamma,"YXZ"),this.orientationQuaternion.multiply(c.setFromAxisAngle(i,-this.orient)),this.rates[0].setFromEuler(r),this.axisAngles[0].setAxisAngleFromQuaternion2(this.rates[0]),o=1;o<this.rates.length;o++)a.copy(this.old_rates[o-1]).conjugate(),s.copy(this.rates[o-1]).multiply(a),s.normalize(),this.axisAngles[o].setAxisAngleFromQuaternion2(s),this.axisAngles[o].w*=1/t,this.rates[o].setFromAxisAngle(this.axisAngles[o],this.axisAngles[o].w);for(window.test=window.test||[],sample=[],window.test.push(sample),o=0;o<this.rates.length;o++)sample.push(this.axisAngles[o].w);this.lastT=e}}.bind(this)}.bind(this)();var d=function(){switch(window.screen.orientation||window.screen.mozOrientation){case"landscape-primary":return 90;case"landscape-secondary":return-90;case"portrait-secondary":return 180;case"portrait-primary":return 0}return window.orientation||0};this.onScreenOrientationChangeEvent=function(){this.screenOrientation=d()}.bind(this),this.extrapolate=function(){var e,t,n,o,r,i,a=new THREE.Quaternion,s=new THREE.Quaternion;return function(){for(e=+new Date,t=e-this.lastT,t>60&&(t=60),t+=this.predictms,a.copy(this.rates[0]),o=1,r=1;r<this.axisAngles.length;r++)o*=r,i=Math.pow(t,r)/o,s.setFromAxisAngle(this.axisAngles[r],this.axisAngles[r].w*i),s.multiply(a),n=a,a=s,s=n;return a}}(),this.update=function(){var e=new THREE.Quaternion;return function(){if(!this.freeze){var n=d();n!==this.screenOrientation&&(this.screenOrientation=n,this.autoAlign=!0),e.copy(this.extrapolate()),this.orientationQuaternion.copy(this.autoAlign?this.rates[0]:e),this.orientationQuaternion.multiply(l),this.orientationQuaternion.multiply(c.setFromAxisAngle(i,-this.orient)),this.object.quaternion.copy(this.alignQuaternion),this.object.quaternion.multiply(this.orientationQuaternion),this.autoForward&&(t.set(0,0,-1).applyQuaternion(this.object.quaternion,"ZXY").setLength(this.movementSpeed/50),this.object.position.add(t)),this.autoAlign&&0!==this.alpha&&(this.autoAlign=!1,this.align())}}}(),this.align=function(){t.set(0,0,-1).applyQuaternion(r.copy(this.orientationQuaternion).inverse(),"ZXY"),o.setFromQuaternion(r.setFromRotationMatrix(n.lookAt(t,s,a))),o.set(0,o.y,0),this.alignQuaternion.setFromEuler(o)},this.connect=function(){return this.onScreenOrientationChangeEvent(),window.addEventListener("deviceorientation",this.onDeviceOrientationChangeEvent,!1),this.freeze=!1,this},this.disconnect=function(){this.freeze=!0,window.removeEventListener("deviceorientation",this.onDeviceOrientationChangeEvent,!1)}},THREE.OrbitControls=function(e,t){function n(){return 2*Math.PI/60/60*p.autoRotateSpeed}function o(){return Math.pow(.95,p.zoomSpeed)}function r(e){if(p.enabled!==!1){if(e.preventDefault(),0===e.button){if(p.noRotate===!0)return;A=O.ROTATE,m.set(e.clientX,e.clientY)}else if(1===e.button){if(p.noZoom===!0)return;A=O.DOLLY,x.set(e.clientX,e.clientY)}else if(2===e.button){if(p.noPan===!0)return;A=O.PAN,v.set(e.clientX,e.clientY)}p.domElement.addEventListener("mousemove",i,!1),p.domElement.addEventListener("mouseup",a,!1),p.dispatchEvent(D)}}function i(e){if(p.enabled!==!1){e.preventDefault();var t=p.domElement===document?p.domElement.body:p.domElement;if(A===O.ROTATE){if(p.noRotate===!0)return;f.set(e.clientX,e.clientY),g.subVectors(f,m),p.rotateLeft(2*Math.PI*g.x/t.clientWidth*p.rotateSpeed),p.rotateUp(2*Math.PI*g.y/t.clientHeight*p.rotateSpeed),m.copy(f)}else if(A===O.DOLLY){if(p.noZoom===!0)return;T.set(e.clientX,e.clientY),R.subVectors(T,x),R.y>0?p.dollyIn():p.dollyOut(),x.copy(T)}else if(A===O.PAN){if(p.noPan===!0)return;w.set(e.clientX,e.clientY),E.subVectors(w,v),p.pan(E.x,E.y),v.copy(w)}p.update()}}function a(){p.enabled!==!1&&(p.domElement.removeEventListener("mousemove",i,!1),p.domElement.removeEventListener("mouseup",a,!1),p.dispatchEvent(L),A=O.NONE)}function s(e){if(p.enabled!==!1&&p.noZoom!==!0){e.preventDefault(),e.stopPropagation();var t=0;void 0!==e.wheelDelta?t=e.wheelDelta:void 0!==e.detail&&(t=-e.detail),t>0?p.dollyOut():p.dollyIn(),p.update(),p.dispatchEvent(D),p.dispatchEvent(L)}}function c(e){if(p.enabled!==!1&&p.noKeys!==!0&&p.noPan!==!0)switch(e.keyCode){case p.keys.UP:p.pan(0,p.keyPanSpeed),p.update();break;case p.keys.BOTTOM:p.pan(0,-p.keyPanSpeed),p.update();break;case p.keys.LEFT:p.pan(p.keyPanSpeed,0),p.update();break;case p.keys.RIGHT:p.pan(-p.keyPanSpeed,0),p.update()}}function l(e){if(p.enabled!==!1){switch(e.touches.length){case 1:if(p.noRotate===!0)return;A=O.TOUCH_ROTATE,m.set(e.touches[0].pageX,e.touches[0].pageY);break;case 2:if(p.noZoom===!0)return;A=O.TOUCH_DOLLY;var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);x.set(0,o);break;case 3:if(p.noPan===!0)return;A=O.TOUCH_PAN,v.set(e.touches[0].pageX,e.touches[0].pageY);break;default:A=O.NONE}p.dispatchEvent(D)}}function d(e){if(p.enabled!==!1){e.preventDefault(),e.stopPropagation();var t=p.domElement===document?p.domElement.body:p.domElement;switch(e.touches.length){case 1:if(p.noRotate===!0)return;if(A!==O.TOUCH_ROTATE)return;f.set(e.touches[0].pageX,e.touches[0].pageY),g.subVectors(f,m),p.rotateLeft(2*Math.PI*g.x/t.clientWidth*p.rotateSpeed),p.rotateUp(2*Math.PI*g.y/t.clientHeight*p.rotateSpeed),m.copy(f),p.update();break;case 2:if(p.noZoom===!0)return;if(A!==O.TOUCH_DOLLY)return;var n=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(n*n+o*o);T.set(0,r),R.subVectors(T,x),R.y>0?p.dollyOut():p.dollyIn(),x.copy(T),p.update();break;case 3:if(p.noPan===!0)return;if(A!==O.TOUCH_PAN)return;w.set(e.touches[0].pageX,e.touches[0].pageY),E.subVectors(w,v),p.pan(E.x,E.y),v.copy(w),p.update();break;default:A=O.NONE}}}function u(){p.enabled!==!1&&(p.dispatchEvent(L),A=O.NONE)}this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.center=this.target,this.noZoom=!1,this.zoomSpeed=1,this.minDistance=0,this.maxDistance=1/0,this.noRotate=!1,this.rotateSpeed=1,this.noPan=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.noKeys=!1,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40};var p=this,h=1e-6,m=new THREE.Vector2,f=new THREE.Vector2,g=new THREE.Vector2,v=new THREE.Vector2,w=new THREE.Vector2,E=new THREE.Vector2,b=new THREE.Vector3,y=new THREE.Vector3,x=new THREE.Vector2,T=new THREE.Vector2,R=new THREE.Vector2,C=0,H=0,j=1,S=new THREE.Vector3,M=new THREE.Vector3,O={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},A=O.NONE;this.target0=this.target.clone(),this.position0=this.object.position.clone();var P=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),k=P.clone().inverse(),z={type:"change"},D={type:"start"},L={type:"end"};this.rotateLeft=function(e){void 0===e&&(e=n()),H-=e},this.rotateUp=function(e){void 0===e&&(e=n()),C-=e},this.panLeft=function(e){var t=this.object.matrix.elements;b.set(t[0],t[1],t[2]),b.multiplyScalar(-e),S.add(b)},this.panUp=function(e){var t=this.object.matrix.elements;b.set(t[4],t[5],t[6]),b.multiplyScalar(e),S.add(b)},this.pan=function(e,t){var n=p.domElement===document?p.domElement.body:p.domElement;if(void 0!==p.object.fov){var o=p.object.position,r=o.clone().sub(p.target),i=r.length();i*=Math.tan(p.object.fov/2*Math.PI/180),p.panLeft(2*e*i/n.clientHeight),p.panUp(2*t*i/n.clientHeight)}else void 0!==p.object.top?(p.panLeft(e*(p.object.right-p.object.left)/n.clientWidth),p.panUp(t*(p.object.top-p.object.bottom)/n.clientHeight)):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")},this.dollyIn=function(e){void 0===e&&(e=o()),j/=e},this.dollyOut=function(e){void 0===e&&(e=o()),j*=e},this.update=function(){var e=this.object.position;y.copy(e).sub(this.target),y.applyQuaternion(P);var t=Math.atan2(y.x,y.z),o=Math.atan2(Math.sqrt(y.x*y.x+y.z*y.z),y.y);this.autoRotate&&this.rotateLeft(n()),t+=H,o+=C,o=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,o)),o=Math.max(h,Math.min(Math.PI-h,o));var r=y.length()*j;r=Math.max(this.minDistance,Math.min(this.maxDistance,r)),this.target.add(S),y.x=r*Math.sin(o)*Math.sin(t),y.y=r*Math.cos(o),y.z=r*Math.sin(o)*Math.cos(t),y.applyQuaternion(k),e.copy(this.target).add(y),this.object.lookAt(this.target),H=0,C=0,j=1,S.set(0,0,0),M.distanceToSquared(this.object.position)>h&&(this.dispatchEvent(z),M.copy(this.object.position))},this.reset=function(){A=O.NONE,this.target.copy(this.target0),this.object.position.copy(this.position0),this.update()},this.domElement.addEventListener("contextmenu",function(e){e.preventDefault()},!1),this.domElement.addEventListener("mousedown",r,!1),this.domElement.addEventListener("mousewheel",s,!1),this.domElement.addEventListener("DOMMouseScroll",s,!1),this.domElement.addEventListener("touchstart",l,!1),this.domElement.addEventListener("touchend",u,!1),this.domElement.addEventListener("touchmove",d,!1),window.addEventListener("keydown",c,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.StereoEffect=function(e){this.separation=1;var t,n,o=new THREE.Vector3,r=new THREE.Quaternion,i=new THREE.Vector3,a=new THREE.PerspectiveCamera,s=new THREE.PerspectiveCamera;e.autoClear=!1,this.setSize=function(o,r){t=o/2,n=r,e.setSize(o,r)},this.render=function(c,l){c.updateMatrixWorld(),void 0===l.parent&&l.updateMatrixWorld(),l.matrixWorld.decompose(o,r,i),a.fov=l.fov,a.aspect=.5*l.aspect,a.near=l.near,a.far=l.far,a.updateProjectionMatrix(),a.position.copy(o),a.quaternion.copy(r),a.translateX(-this.separation),a.updateMatrixWorld(),s.near=l.near,s.far=l.far,s.projectionMatrix=a.projectionMatrix,s.position.copy(o),s.quaternion.copy(r),s.translateX(this.separation),s.updateMatrixWorld(),e.setViewport(0,0,2*t,n),e.clear(),e.setViewport(0,0,t,n),e.render(c,a),e.setViewport(t,0,t,n),e.render(c,s)}},applicationCache=applicationCache||{},applicationCache.onupdateready=function(){document.body.innerHTML="app cache updated. will reload.",window.applicationCache.status===window.applicationCache.UPDATEREADY&&(window.applicationCache.swapCache(),setTimeout(function(){window.location.reload()},100))},applicationCache.onobsolete=function(){document.body.innerHTML="app cache obsolete. will update.",window.applicationCache.update()},function(){angular.module("ngCardboard",["ngRoute"]).config(["$routeProvider","$locationProvider",function(e){return e.when("/intro",{templateUrl:"app/intro/intro.html"}),e.when("/vr",{templateUrl:"app/demo/demo.html"}),e.otherwise({redirectTo:"/intro"})}]).constant("Modernizr",window.Modernizr).constant("THREE",window.THREE).run(["$window","$location","$rootScope","$document",function(e,t,n,o){var r,i,a;return t.path("/vr").replace(),/iPhone|iPad|iPod/i.test(navigator.userAgent)&&(window.AudioContext=window.AudioContext||window.webkitAudioContext,r=new AudioContext,window.AudioContext=function(){return r},a=angular.element('<div style="color: white;position: absolute;text-align: center;top:0;left:0;right:0;">Berühren um Ton zu aktivieren</div>'),angular.element(document.body).append(a),i=!1,angular.element(o).on("touchstart",function(){var e,t,n;if(!i)return t=new AudioContext,e=t.createBuffer(1,1,22050),n=t.createBufferSource(),n.buffer=e,n.connect(t.destination),n.noteOn(0),setTimeout(function(){return n.playbackState===n.PLAYING_STATE||n.playbackState===n.FINISHED_STATE?(i=!0,a.remove()):void 0},0)})),e.addEventListener("orientationchange",function(){var e,o,r;return/iPhone|iPad|iPod/i.test(navigator.userAgent)?90===(o=window.orientation)||-90===o?t.path("/vr").replace():t.path("/intro").replace():(e=window.screen.orientation||window.screen.mozOrientation,"landscape-primary"===(r=e.type)||"landscape-secondary"===r?t.path("/vr").replace():t.path("/intro").replace()),n.$apply()})}])}.call(this),function(){angular.module("ngCardboard").directive("vrCamera",["THREE",function(e){return{scope:{fov:"=",eyeDistance:"@",stereo:"="},restrict:"E",require:["^vrScene","?^vrContainer"],link:function(t,n,o,r){var i,a,s,c,l,d,u,p,h;return h=r[0],u=r[1],i=new e.PerspectiveCamera(t.fov,1,.001,700),t.$watch("fov",function(e){return i.fov=e}),i.position.set(0,0,0),null!=u?u.object3d.add(i):h.scene.add(i),h.camera=i,a=null,c={width:0,height:0},d=h.$on("resize",function(e,t){return c=t,i.aspect=t.width/t.height,s.setSize(t.width,t.height),i.updateProjectionMatrix()}),p=new e.StereoEffect(h.renderer),s=null,t.$watch("stereo",function(e){return s=e?p:h.renderer,s.setSize(c.width,c.height),i.aspect=c.width/c.height,i.updateProjectionMatrix()}),l=h.$on("render",function(){return null!=s?s.render(h.scene,i):void 0}),t.$on("$destroy",function(){return null!=u&&u.object3d.remove(i),i=null,s=null,d(),l()})}}}])}.call(this),function(){var e;e=Math.PI,angular.module("ngCardboard").directive("vrContainer",["THREE",function(t){return{scope:{orientation:"=",lat:"=","long":"=",altitude:"="},require:["vrContainer","^vrScene","?^^vrContainer"],restrict:"E",controller:["$scope",function(){return this.object3d=new t.Object3D}],link:function(n,o,r,i){var a,s,c,l,d,u,p;return u=i[0],p=i[1],c=i[2],null!=c?c.object3d.add(u.object3d):p.scene.add(u.object3d),a=null,"mouse"===n.orientation&&(a=new t.OrbitControls(u.object3d,p.renderer.domElement),a.rotateUp(Math.PI/4),a.target.set(u.object3d.position.x+.1,u.object3d.position.y,u.object3d.position.z),a.noZoom=!0,a.noPan=!0),"imu"===n.orientation&&(a=new t.DeviceOrientationControls(u.object3d,!0),a.connect(),a.update()),l=new t.Euler,d=new t.Matrix4,n.$watchGroup(["altitude","lat","long","roll"],function(){var t,o,r,i;if(null==n.orientation)return o=n.lat||0,r=n.long||0,t=n.altitude||0,i=n.roll||0,u.object3d.matrixAutoUpdate=!1,l.set(r/180*e,o/180*e,i/180*e,"XYZ"),d.identity().setPosition({x:0,y:0,z:t}),u.object3d.matrix.identity().makeRotationFromEuler(l).multiply(d),u.object3d.matrixWorldNeedsUpdate=!0}),s=p.$on("update",function(e,t){return null!=a?a.update(t):void 0}),p.$on("$destroy",function(){return s(),null!=c&&c.object3d.remove(vrContainerj.object3d),a=null})}}}])}.call(this),function(){var e;e=Math.PI,angular.module("ngCardboard").directive("vrFotoFrame",["THREE",function(e){return{scope:{height:"=",width:"=",texture:"@"},restrict:"E",require:["^vrScene","?^vrContainer"],link:function(t,n,o,r){var i,a,s,c,l,d;return d=r[0],c=r[1],l=e.ImageUtils.loadTexture(t.texture),a=new e.MeshBasicMaterial({map:l,overdraw:!0,transparent:!0}),a.side=e.DoubleSide,i=new e.PlaneBufferGeometry(t.width,t.height),s=new e.Mesh(i,a),null!=c?c.object3d.add(s):d.scene.add(s)}}}])}.call(this),function(){var e;e=Math.PI,angular.module("ngCardboard").directive("vrImage",["THREE",function(e){return{scope:{height:"=",width:"=",texture:"@"},restrict:"E",require:["^vrScene","?^vrContainer"],link:function(t,n,o,r){var i,a,s,c,l,d;return d=r[0],c=r[1],l=e.ImageUtils.loadTexture(t.texture),a=new e.MeshBasicMaterial({map:l,overdraw:!0,transparent:!0}),a.side=e.DoubleSide,i=new e.PlaneBufferGeometry(t.width,t.height),s=new e.Mesh(i,a),null!=c?c.object3d.add(s):d.scene.add(s)}}}])}.call(this),function(){var e;e=Math.PI,angular.module("ngCardboard").directive("vrModel",["THREE",function(e){return{scope:{scale:"=",json:"@",texture:"@"},restrict:"E",require:["^vrScene","?^vrContainer"],link:function(t,n,o,r){var i,a,s;return s=r[0],a=r[1],i=new e.JSONLoader,i.load(t.json,function(n){var o,r,i;return r=new e.MeshLambertMaterial({map:e.ImageUtils.loadTexture(t.texture),colorAmbient:[.480000026226044,.480000026226044,.480000026226044],colorDiffuse:[.480000026226044,.480000026226044,.480000026226044],colorSpecular:[.8999999761581421,.8999999761581421,.8999999761581421]}),i=new e.Mesh(n,r),i.rotation.y=-Math.PI/5,i.receiveShadow=!0,i.castShadow=!0,i.scale.x=t.scale,i.scale.y=t.scale,i.scale.z=t.scale,null!=a?a.object3d.add(i):s.scene.add(i),o=new e.DirectionalLight(16777215),o.position.set(0,100,60),o.castShadow=!0,o.shadowCameraLeft=-60,o.shadowCameraTop=-60,o.shadowCameraRight=60,o.shadowCameraBottom=60,o.shadowCameraNear=1,o.shadowCameraFar=1e3,o.shadowBias=-1e-4,o.shadowMapWidth=o.shadowMapHeight=1024,o.shadowDarkness=.7,s.scene.add(o)})}}}])}.call(this),function(){angular.module("ngCardboard").directive("vrScene",["$window","THREE","$timeout","Modernizr",function(e,t,n){return{scope:{update:"&"},restrict:"E",controller:["$scope",function(e){return this.$on=e.$on.bind(e),this.$emit=e.$emit.bind(e),this.renderer=new t.WebGLRenderer,this.scene=new t.Scene}],link:function(o,r,i,a){var s,c,l,d,u;return r.append(a.renderer.domElement),c=new t.Clock,l=!1,s=function(){var e;if(!l)return requestAnimationFrame(s),e=c.getDelta(),a.$emit("update",e),a.$emit("render",e)},s(),a.$on("update",function(e,t){return o.update({dt:t})}),u=function(){var e,t;return t=r[0].offsetWidth,e=r[0].offsetHeight,o.$emit("resize",{width:t,height:e})},angular.element(e).on("resize",u),d=a.$on("resize",function(e,t){return a.renderer.setSize(t.width,t.height)}),n(function(){return u()}),a.$on("$destroy",function(){var t,n,r,i,a,s;for(angular.element(e).off("resize",u),d(),l=!0,c=null,o.renderer=null,i=o.scene.children,n=0,r=i.length;r>n;n++)t=i[n],null!=t&&null!=(a=t.geometry)&&a.dispose(),null!=t&&null!=(s=t.material)&&s.dispose(),o.scene.remove(t);return o.scene=null})}}}])}.call(this),function(){angular.module("ngCardboard").directive("vrSound",["vrAudio","THREE",function(e,t){return{scope:{file:"@",playing:"="},restrict:"E",require:["^vrScene","?^vrContainer"],link:function(n,o,r,i){var a,s,c,l,d,u;return u=i[0],s=i[1],c=e.loadSound(n.file),n.$watch("playing",function(e){return e?c.start():c.stop()}),l=new t.Matrix4,d=new t.Vector3,a=u.$on("update",function(){return n.playing?(e.setListenerPosition(u.camera),l.getInverse(u.camera.matrixWorld),l.multiply(s.object3d.matrixWorld),d.setFromMatrixPosition(l),c.panner.setPosition(d.x,d.y,d.z)):void 0}),n.$on("$destroy",function(){var t;return e.destroy(c),c=null,t=null,d=null,a()})}}}]).factory("vrAudio",["THREE","$window",function(e){var t,n,o,r,i,a,s;return t={},window.AudioContext=window.AudioContext||window.webkitAudioContext,t.context=new AudioContext,t.convolver=t.context.createConvolver(),t.volume=t.context.createGain(),t.mixer=t.context.createGain(),t.flatGain=t.context.createGain(),t.convolverGain=t.context.createGain(),t.destination=t.mixer,t.mixer.connect(t.flatGain),t.convolver.connect(t.convolverGain),t.flatGain.connect(t.volume),t.convolverGain.connect(t.volume),t.volume.connect(t.context.destination),o=function(e,n){var o,r;return r=new XMLHttpRequest,r.open("GET",e,!0),r.responseType="arraybuffer",o=t.context,r.onload=function(){o.decodeAudioData(r.response,n,function(){alert("Decoding the audio buffer failed")})},r.send()},r=function(e){var n,r;return n=t.context,r={},r.source=n.createBufferSource(),r.source.loop=!0,r.panner=n.createPanner(),r.volume=n.createGain(),r.source.connect(r.volume),r.volume.connect(r.panner),r.start=function(){return r.panner.connect(t.destination)},r.stop=function(){return r.panner.disconnect()},o(e,function(e){return r.source.buffer=e,r.source.start(n.currentTime+.02)}),r},a=new e.Vector3,s=new e.Vector3,i=function(e){var n,o,r,i;return a.setFromMatrixPosition(e.matrixWorld),t.context.listener.setPosition(a.x,a.y,a.z),a.set(0,0,1),n=e.matrix,o=n.elements[12],r=n.elements[13],i=n.elements[14],n.elements[12]=n.elements[13]=n.elements[14]=0,a.applyProjection(n),a.normalize(),s.set(0,-1,0),s.applyProjection(n),s.normalize(),t.context.listener.setOrientation(a.x,a.y,a.z,s.x,s.y,s.z),n.elements[12]=o,n.elements[13]=r,n.elements[14]=i},n=function(e){return e.source.disconnect(),e.volume.disconnect(),e.panner.disconnect()},{destroy:n,loadBuffer:o,loadSound:r,setListenerPosition:i}}])}.call(this),function(){angular.module("ngCardboard").directive("vrSphere",["THREE",function(e){return{scope:{radius:"=",texture:"@"},restrict:"E",require:["^vrScene","?^vrContainer"],link:function(t,n,o,r){var i,a,s,c,l,d,u;return u=r[0],l=r[1],s=new e.MeshBasicMaterial({overdraw:!0}),a=d=32,i=new e.SphereGeometry(1,a,d),c=new e.Mesh(i,s),t.$watch("radius",function(e){return c.scale.set(e,e,e)}),s.side=e.DoubleSide,t.$watch("texture",function(t){var n;return n=e.ImageUtils.loadTexture(t),s.map=n}),null==l&&u.scene.add(c),null!=l&&l.object3d.add(c),t.$on("$destroy",function(){var e;return null!=l&&l.object3d.remove(c),c.geometry.dispose(),c.material.dispose(),null!=(e=u.scene)&&e.remove(c),s=null,i=null,c=null})}}}])}.call(this),function(){angular.module("ngCardboard").controller("DemoCtrl",["$scope","Modernizr",function(e,t){return e.stereo=t.touch,e.useIMU=t.touch,window.s=e,e.lat=0,e.long=0}])}.call(this),function(){angular.module("ngCardboard").controller("IntroCtrl",["$scope","$timeout",function(e){return e.isSmartphone=Modernizr.touch,e.isWebGL=Modernizr.webgl,e.isRightBrowser="onorientationchange"in window&&"ondeviceorientation"in window}])}.call(this),function(e){try{e=angular.module("ngCardboard")}catch(t){e=angular.module("ngCardboard",[])}e.run(["$templateCache",function(e){e.put("404.html",'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Page Not Found :(</title><style>\n            ::-moz-selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            ::selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            html {\n                padding: 30px 10px;\n                font-size: 20px;\n                line-height: 1.4;\n                color: #737373;\n                background: #f0f0f0;\n                -webkit-text-size-adjust: 100%;\n                -ms-text-size-adjust: 100%;\n            }\n\n            html,\n            input {\n                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n            }\n\n            body {\n                max-width: 500px;\n                _width: 500px;\n                padding: 30px 20px 50px;\n                border: 1px solid #b3b3b3;\n                border-radius: 4px;\n                margin: 0 auto;\n                box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n                background: #fcfcfc;\n            }\n\n            h1 {\n                margin: 0 10px;\n                font-size: 50px;\n                text-align: center;\n            }\n\n            h1 span {\n                color: #bbb;\n            }\n\n            h3 {\n                margin: 1.5em 0 0.5em;\n            }\n\n            p {\n                margin: 1em 0;\n            }\n\n            ul {\n                padding: 0 0 0 40px;\n                margin: 1em 0;\n            }\n\n            .container {\n                max-width: 380px;\n                _width: 380px;\n                margin: 0 auto;\n            }\n\n            /* google search */\n\n            #goog-fixurl ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n\n            #goog-fixurl form {\n                margin: 0;\n            }\n\n            #goog-wm-qt,\n            #goog-wm-sb {\n                border: 1px solid #bbb;\n                font-size: 16px;\n                line-height: normal;\n                vertical-align: top;\n                color: #444;\n                border-radius: 2px;\n            }\n\n            #goog-wm-qt {\n                width: 220px;\n                height: 20px;\n                padding: 5px;\n                margin: 5px 10px 0 0;\n                box-shadow: inset 0 1px 1px #ccc;\n            }\n\n            #goog-wm-sb {\n                display: inline-block;\n                height: 32px;\n                padding: 0 10px;\n                margin: 5px 0 0;\n                white-space: nowrap;\n                cursor: pointer;\n                background-color: #f5f5f5;\n                background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                -webkit-appearance: none;\n                -moz-appearance: none;\n                appearance: none;\n                *overflow: visible;\n                *display: inline;\n                *zoom: 1;\n            }\n\n            #goog-wm-sb:hover,\n            #goog-wm-sb:focus {\n                border-color: #aaa;\n                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n                background-color: #f8f8f8;\n            }\n\n            #goog-wm-qt:hover,\n            #goog-wm-qt:focus {\n                border-color: #105cb6;\n                outline: 0;\n                color: #222;\n            }\n\n            input::-moz-focus-inner {\n                padding: 0;\n                border: 0;\n            }\n        </style></head><body><div class="container"><h1>Not found <span>:(</span></h1><p>Sorry, but the page you were trying to view does not exist.</p><p>It looks like this was the result of either:</p><ul><li>a mistyped address</li><li>an out-of-date link</li></ul><script>\n                var GOOG_FIXURL_LANG = (navigator.language || \'\').slice(0,2),GOOG_FIXURL_SITE = location.host;\n            </script><script src="//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js"></script></div></body></html>')}])}(),function(e){try{e=angular.module("ngCardboard")}catch(t){e=angular.module("ngCardboard",[])}e.run(["$templateCache",function(e){e.put("index.html",'<!doctype html><html class="no-js" manifest="/cache.manifest" ng-app="ngCardboard"><head><title>ng-cardboard</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="ng-cardboard"><link rel="stylesheet" href="index.css"><link rel="stylesheet" href="app/demo/demo.css"><link rel="stylesheet" href="app/intro/intro.css"><script src="bower_components/modernizr/modernizr.js"></script></head><body><div ng-view=""></div><div class="myself">by David Buezas</div><a href="https://github.com/dbuezas/ng-cardboard"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"></a><script src="bower_components/angular/angular.js"></script><script src="bower_components/threejs/build/three.js"></script><script src="bower_components/angular-route/angular-route.js"></script><script src="libs/CSS3DRenderer.js"></script><script src="libs/DeviceOrientationControls2.js"></script><script src="libs/OrbitControls.js"></script><script src="libs/StereoEffect.js"></script><script src="libs/appcache.js"></script><script src="app/ng-cardboard.js"></script><script src="components/vr-camera.directive.js"></script><script src="components/vr-container.directive.js"></script><script src="components/vr-foto-frame.directive.js"></script><script src="components/vr-image.directive.js"></script><script src="components/vr-model.directive.js"></script><script src="components/vr-scene.directive.js"></script><script src="components/vr-sound.directive.js"></script><script src="components/vr-sphere.directive.js"></script><script src="app/demo/demo.controller.js"></script><script src="app/intro/intro.controller.js"></script></body></html>')
}])}(),function(e){try{e=angular.module("ngCardboard")}catch(t){e=angular.module("ngCardboard",[])}e.run(["$templateCache",function(e){e.put("app/demo/demo.html",'<div ng-controller="DemoCtrl"><vr-scene update="update(dt)"><vr-container orientation="useIMU ? \'imu\' : \'mouse\'"><vr-camera fov="70" stereo="stereo"></vr-camera></vr-container><vr-sphere radius="600" texture="assets/images/pano.jpg"></vr-sphere><vr-container lat="0" long="0" altitude="150"><vr-model json="assets/auto.json" texture="assets/textures/gtare.jpg" scale="0.5"></vr-model></vr-container><vr-container lat="-30" long="-90" altitude="40"><vr-sound file="assets/birds.mp3" playing="true"></vr-sound><vr-image width="40" height="20" texture="assets/images/birds.png"></vr-image></vr-container><vr-container lat="180" long="0" altitude="20"><vr-sound file="assets/dogs.mp3" playing="true"></vr-sound><vr-image width="1" height="2" texture="assets/images/dog.png"></vr-image></vr-container></vr-scene><label class="stereoModeToggle"><input type="checkbox" ng-model="stereo">Stereo</label></div>')}])}(),function(e){try{e=angular.module("ngCardboard")}catch(t){e=angular.module("ngCardboard",[])}e.run(["$templateCache",function(e){e.put("app/intro/intro.html",'<div ng-controller="IntroCtrl"></div>')}])}();