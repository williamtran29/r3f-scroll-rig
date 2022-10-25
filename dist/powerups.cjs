var e=require("react"),r=require("three"),t=require("@react-three/fiber"),i=require("@react-three/drei"),n=require("@14islands/r3f-scroll-rig");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/l(e);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r.indexOf(t=l[i])>=0||(n[t]=e[t]);return n}var c=["el","children","material","scale","font","fontOffsetY","fontOffsetX","overrideEmissive","color"],s=["el","scale","scrollState","vertexShader","fragmentShader","invalidateFrameLoop","widthSegments","heightSegments"],f=e.forwardRef(function(i,l){var c=i.el,f=i.scale,v=i.scrollState,p=i.vertexShader,d=i.fragmentShader,h=i.invalidateFrameLoop,m=void 0!==h&&h,g=i.widthSegments,S=void 0===g?128:g,w=i.heightSegments,y=void 0===w?128:w,x=a(i,s),_=e.useRef(null),E=e.useRef(null),k=t.useThree(),b=k.invalidate,F=k.gl,z=k.size,M=t.useThree(function(e){return e.viewport.dpr}),T=n.useScrollbar().scroll,L=n.useScrollRig().scaleMultiplier,R=n.useImageAsTexture(c),V=e.useMemo(function(){return{u_color:{value:new r.Color("black")},u_time:{value:0},u_pixelRatio:{value:M},u_progress:{value:0},u_visibility:{value:0},u_viewport:{value:0},u_velocity:{value:0},u_res:{value:new r.Vector2},u_rect:{value:new r.Vector2},u_size:{value:new r.Vector2},u_texture:{value:null},u_loaded:{value:!1},u_scaleMultiplier:{value:L}}},[M]);e.useEffect(function(){R&&_.current&&(_.current.uniforms.u_texture.value=R,_.current.uniforms.u_size.value.set(R.image.width,R.image.height),_.current.uniforms.u_loaded.value=!0)},[R,F]),e.useEffect(function(){_.current&&(_.current.uniforms.u_res.value.set(z.width,z.height),_.current.uniforms.u_rect.value.set(null==f?void 0:f[0],null==f?void 0:f[1]))},[z,f]),t.useFrame(function(e,r){v.inViewport&&E.current&&_.current&&_.current.uniforms.u_loaded.value&&(_.current.uniforms.u_time.value+=r,_.current.uniforms.u_rect.value.set(E.current.scale.x,E.current.scale.y),_.current.uniforms.u_velocity.value=T.velocity,_.current.uniforms.u_progress.value=v.progress,_.current.uniforms.u_visibility.value=v.visibility,_.current.uniforms.u_viewport.value=v.viewport,m&&b())});var O,C=e.useMemo(function(){return[{vertexShader:p,fragmentShader:d}]},[p,d]);return u.default.createElement(u.default.Fragment,null,u.default.createElement("mesh",o({ref:(O=[E,l],function(e){O.forEach(function(r){"function"==typeof r?r(e):null!=r&&(r.current=e)})})},x),u.default.createElement("planeGeometry",{attach:"geometry",args:[1,1,S,y]}),u.default.createElement("shaderMaterial",{ref:_,args:C,transparent:!0,uniforms:V})))}),v=["children","speed"],p=function(r){var i=r.children,l=r.scrollState,o=r.parallax,a=e.useRef(null),c=t.useThree(function(e){return e.size}),s=n.useScrollRig().scaleMultiplier;return t.useFrame(function(){l.inViewport&&(a.current.position.y=o*(2*l.progress-1)*s*c.height)}),u.default.createElement("mesh",{ref:a},i)},d=["scale"],h=["children","track","stickyLerp","fillViewport"],m=function(r){var i=r.children,n=r.childTop,l=r.childBottom,o=r.scrollState,a=r.parentScale,c=r.childScale,s=r.priority,f=r.stickyLerp,v=void 0===f?1:f,p=e.useRef(null),d=t.useThree(function(e){return e.size});return t.useFrame(function(e,r){if(o.inViewport){var t=.5*a[1]-.5*c[1];p.current.position.y=function(e,r,t,i,n=60){return l=r,e*(1-(u=void 0===i?t:1-Math.pow(1-t,i/(1/n))))+l*u;var l,u}(p.current.position.y,o.viewport+n/d.height<1?t:o.visibility-l/a[1]<1?-n+t-(o.viewport-1)*d.height:.5*-a[1]+.5*c[1],v,r)}},s),u.default.createElement("group",{ref:p},i)};exports.ParallaxScrollScene=function(e){var r=e.children,t=e.speed,i=void 0===t?1:t,l=a(e,v),c=i-1;return u.default.createElement(n.ScrollScene,o({scissor:!1,inViewportMargin:200*Math.max(0,.5)+50+"%"},l),function(e){return u.default.createElement(p,o({parallax:c},e),r(e))})},exports.StickyScrollScene=function(r){var i=r.children,l=r.track,c=r.stickyLerp,s=r.fillViewport,f=a(r,h),v=t.useThree(function(e){return e.size}),p=e.useRef(l.current),g=e.useMemo(function(){var e=getComputedStyle(l.current);return"sticky"===e.position?p.current=l.current.parentElement:console.error("StickyScrollScene: tracked element is not position:sticky"),e},[l]);return u.default.createElement(n.ScrollScene,o({track:p},f),function(e,r,t,i){var n=i.stickyLerp,l=i.fillViewport;return function(i){var c=i.scale,s=a(i,d),f=[parseFloat(t.width),parseFloat(t.height),1],v=parseFloat(t.top),p=r.height-v-f[1];return l&&(f=[r.width,r.height,1],v=0,p=0),u.default.createElement(m,o({parentScale:c,childScale:f,stickyLerp:n,childTop:v,childBottom:p},s),e(o({scale:f},s)))}}(i,v,g,{stickyLerp:c,fillViewport:s}))},exports.WebGLImage=f,exports.WebGLText=function(l){var s=l.el,f=l.children,v=l.material,p=l.scale,d=l.font,h=l.fontOffsetY,m=void 0===h?0:h,g=l.fontOffsetX,S=void 0===g?0:g,w=l.overrideEmissive,y=void 0!==w&&w,x=l.color,_=a(l,c),E=t.useThree().size,k=n.useScrollRig().scaleMultiplier,b=e.useMemo(function(){if(!s.current)return{};var e=window.getComputedStyle(s.current);return{letterSpacing:(parseFloat(e.letterSpacing)||0)/parseFloat(e.fontSize),lineHeight:(parseFloat(e.lineHeight)||0)/parseFloat(e.fontSize),textColor:new r.Color(x||e.color).convertSRGBToLinear(),fontSize:parseFloat(e.fontSize)*k,textAlign:e.textAlign}},[s,E,p,x,k]),F=b.textColor,z=b.fontSize,M=b.textAlign,T=b.lineHeight,L=b.letterSpacing;e.useEffect(function(){v&&y&&(v.emissive=x)},[v,x,y]);var R=0;return"left"===M||"start"===M?R=-.5*p[0]:"right"!==M&&"end"!==M||(R=.5*p[0]),u.default.createElement(i.Text,o({fontSize:z,maxWidth:p?p[0]:E.width,lineHeight:T,textAlign:M,letterSpacing:L,overflowWrap:"break-word",font:d,color:F,anchorX:M,anchorY:"top",position:[R+z*S,(p?.5*p[1]:.5*E.height)+z*m,0],material:v},_),f)};
//# sourceMappingURL=powerups.cjs.map