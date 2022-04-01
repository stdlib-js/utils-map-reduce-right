// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r=Math.floor,e=r;var n=function(t){return e(t)===t},i=n;var o=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&i(t.length)&&t.length>=0&&t.length<=4294967295},a="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return a({},"x",{}),!0}catch(t){return!1}},f=Object.defineProperty,s=Object.prototype,c=s.toString,l=s.__defineGetter__,h=s.__defineSetter__,p=s.__lookupGetter__,g=s.__lookupSetter__;var v=function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===c.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===c.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(p.call(t,r)||g.call(t,r)?(n=t.__proto__,t.__proto__=s,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&l&&l.call(t,r,e.get),a&&h&&h.call(t,r,e.set),t},d=f,y=v,m=u()?d:y,_=m;var b=function(t,r,e){_(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},w=b;var O=function(t){return"boolean"==typeof t};var E=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return E&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,I=j;var P=function(t){return I.call(t)},T=Object.prototype.hasOwnProperty;var U=function(t,r){return null!=t&&T.call(t,r)},x="function"==typeof Symbol?Symbol.toStringTag:"",S=U,N=x,V=j;var R=P,B=function(t){var r,e,n;if(null==t)return V.call(t);e=t[N],r=S(t,N);try{t[N]=void 0}catch(r){return V.call(t)}return n=V.call(t),r?t[N]=e:delete t[N],n},F=A()?B:R,L=Boolean.prototype.toString;var M=F,C=function(t){try{return L.call(t),!0}catch(t){return!1}},k=A();var G=function(t){return"object"==typeof t&&(t instanceof Boolean||(k?C(t):"[object Boolean]"===M(t)))},D=O,Y=G;var $=w,J=function(t){return D(t)||Y(t)},W=G;$(J,"isPrimitive",O),$(J,"isObject",W);var X="object"==typeof self?self:null,Z="object"==typeof window?window:null,z=J.isPrimitive,H=function(){return new Function("return this;")()},q=X,K=Z,Q=t(Object.freeze({__proto__:null}));var tt=function(t){if(arguments.length){if(!z(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return H()}if(q)return q;if(K)return K;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")},rt=tt,et=rt();var nt=function(){return"function"==typeof et.BigInt&&"function"==typeof BigInt&&"bigint"==typeof et.BigInt("1")&&"bigint"==typeof BigInt("1")},it=m;var ot=function(t,r,e){it(t,r,{configurable:!1,enumerable:!1,get:e})},at=ot,ut={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var ft=function(t){return ut[t]||null};var st=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0};var ct=function(t){return Math.abs(t)},lt=ct;var ht=function(t){var r,e,n,i,o,a;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=lt(t[0]),a=1;a<e;a++){if(o=lt(t[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2};var pt=function(t,r){return r&&(2===t||3===t)};var gt=function(t,r){return r&&(1===t||3===t)};var vt=function(t,r,e){var n,i,o,a,u;for(n=t.length,i=e,o=e,u=0;u<n;u++){if(0===t[u])return[e,e];(a=r[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]};w(vt,"assign",(function(t,r,e,n){var i,o,a,u,f;for(i=t.length,o=e,a=e,f=0;f<i;f++){if(0===t[f])return n[0]=e,n[1]=e,n;(u=r[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var dt=vt;var yt=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=dt(r,e,n))[1]-o[0]+1};var mt=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var _t=function(t){var r,e,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]};var bt=function(t,r){var e,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this};var wt=function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this};var Ot=function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]};var Et=function(t){return t.re};var At=function(t){return t.im},jt=Et,It=At;var Pt=function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(jt(e),It(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t};var Tt=function(t){return"string"==typeof t},Ut=String.prototype.valueOf;var xt=F,St=function(t){try{return Ut.call(t),!0}catch(t){return!1}},Nt=A();var Vt=function(t){return"object"==typeof t&&(t instanceof String||(Nt?St(t):"[object String]"===xt(t)))},Rt=Tt,Bt=Vt;var Ft=w,Lt=function(t){return Rt(t)||Bt(t)},Mt=Vt;Ft(Lt,"isPrimitive",Tt),Ft(Lt,"isObject",Mt);var Ct=Lt,kt=Ct.isPrimitive,Gt=/[-\/\\^$*+?.()|[\]{}]/g;var Dt=function(t){var r,e;if(!kt(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(Gt,"\\$&"):(r=(r=t.substring(1,e)).replace(Gt,"\\$&"),t=t[0]+r+t.substring(e))},Yt=/./,$t=rt(),Jt=$t.document&&$t.document.childNodes,Wt=Int8Array,Xt=Yt,Zt=Jt,zt=Wt;var Ht=function(){return"function"==typeof Xt||"object"==typeof zt||"function"==typeof Zt};var qt=function(){return/^\s*function\s*([^(]*)/i},Kt=qt;w(Kt,"REGEXP",qt());var Qt=Kt,tr=F;var rr=Array.isArray?Array.isArray:function(t){return"[object Array]"===tr(t)},er=rr;var nr=function(t){return null!==t&&"object"==typeof t};w(nr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!er(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(nr));var ir=nr,or=ir;var ar=F,ur=Qt.REGEXP,fr=function(t){return or(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var sr=function(t){var r,e,n;if(("Object"===(e=ar(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ur.exec(n.toString()))return r[1]}return fr(t)?"Buffer":e},cr=sr;var lr=sr;var hr=function(t){var r;return null===t?"null":"object"===(r=typeof t)?cr(t).toLowerCase():r},pr=function(t){return lr(t).toLowerCase()},gr=Ht()?pr:hr,vr=gr;var dr=function(t){return"function"===vr(t)},yr=RegExp.prototype.exec;var mr=F,_r=function(t){try{return yr.call(t),!0}catch(t){return!1}},br=A();var wr=Dt,Or=dr,Er=Ct.isPrimitive,Ar=function(t){return"object"==typeof t&&(t instanceof RegExp||(br?_r(t):"[object RegExp]"===mr(t)))};var jr=function(t,r,e){if(!Er(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(Er(r))r=wr(r),r=new RegExp(r,"g");else if(!Ar(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!Er(e)&&!Or(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return t.replace(r,e)},Ir=jr,Pr=Et,Tr=At,Ur={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var xr=function(){var t,r,e,n,i,o,a;if(r=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(a=0;a<this._length;a++)o=this.iget(a),t+=Pr(o)+", "+Tr(o),a<this._length-1&&(t+=", ");else for(a=0;a<this._length;a++)t+=this.iget(a),a<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(a=0;a<3;a++)o=this.iget(a),t+=Pr(o)+", "+Tr(o),a<2&&(t+=", ");else for(a=0;a<3;a++)t+=this.iget(a),a<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(a=2;a>=0;a--)o=this.iget(this._length-1-a),t+=Pr(o)+", "+Tr(o),a>0&&(t+=", ");else for(a=2;a>=0;a--)t+=this.iget(this._length-1-a),a>0&&(t+=", ")}if(e=Ur[this.dtype],n+=Ir(e,"{{data}}",t),n+=", ",n+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===r)n+="0";else for(a=0;a<r;a++)this._strides[a]<0?n+=-this._strides[a]:n+=this._strides[a],a<r-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},Sr=F,Nr="function"==typeof Uint8Array;var Vr="function"==typeof Uint8Array?Uint8Array:null,Rr=function(t){return Nr&&t instanceof Uint8Array||"[object Uint8Array]"===Sr(t)},Br=Vr;var Fr=function(){var t,r;if("function"!=typeof Br)return!1;try{r=new Br(r=[1,3.14,-3.14,256,257]),t=Rr(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Lr="function"==typeof Uint8Array?Uint8Array:void 0,Mr=function(){throw new Error("not implemented")},Cr=Fr()?Lr:Mr,kr=F,Gr="function"==typeof Uint16Array;var Dr="function"==typeof Uint16Array?Uint16Array:null,Yr=function(t){return Gr&&t instanceof Uint16Array||"[object Uint16Array]"===kr(t)},$r=Dr;var Jr=function(){var t,r;if("function"!=typeof $r)return!1;try{r=new $r(r=[1,3.14,-3.14,65536,65537]),t=Yr(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Wr,Xr="function"==typeof Uint16Array?Uint16Array:void 0,Zr=function(){throw new Error("not implemented")},zr={uint16:Jr()?Xr:Zr,uint8:Cr};(Wr=new zr.uint16(1))[0]=4660;var Hr=52===new zr.uint8(Wr.buffer)[0],qr=F,Kr="function"==typeof ArrayBuffer;var Qr=function(t){return Kr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===qr(t)},te=F,re="function"==typeof Float64Array;var ee="function"==typeof Float64Array?Float64Array:null,ne=function(t){return re&&t instanceof Float64Array||"[object Float64Array]"===te(t)},ie=ee;var oe=function(){var t,r;if("function"!=typeof ie)return!1;try{r=new ie([1,3.14,-3.14,NaN]),t=ne(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var ae,ue="function"==typeof Float64Array?Float64Array:void 0,fe=function(){throw new Error("not implemented")};ae=oe()?ue:fe;var se="function"==typeof ArrayBuffer?ArrayBuffer:null,ce=Qr,le=ae,he=se;var pe=function(){var t,r,e;if("function"!=typeof he)return!1;try{e=new he(16),(t=ce(e)&&"function"==typeof he.isView)&&((r=new le(e))[0]=-3.14,r[1]=NaN,t=t&&he.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t};var ge="function"==typeof ArrayBuffer?ArrayBuffer:void 0,ve=function(){throw new Error("not implemented")},de=pe()?ge:ve,ye=F,me="function"==typeof DataView;var _e="function"==typeof DataView?DataView:null,be=function(t){return me&&t instanceof DataView||"[object DataView]"===ye(t)},we=de,Oe=_e;var Ee=function(){var t,r,e;if("function"!=typeof Oe)return!1;try{e=new we(24),r=new Oe(e,8),(t=be(r)&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t};var Ae="function"==typeof DataView?DataView:void 0,je=function(){throw new Error("not implemented")},Ie=Ee()?Ae:je,Pe="function"==typeof BigInt?BigInt:void 0,Te=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Ue=function(){return Te.slice()};var xe=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Se=m;var Ne=function(t,r,e){Se(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},Ve=Ne;var Re=function(t){return Object.keys(Object(t))},Be=Re;var Fe=function(){return function(){return 2!==(Be(arguments)||"").length}(1,2)},Le=void 0!==Object.keys,Me=F;var Ce=function(t){return"[object Arguments]"===Me(t)},ke=Ce;var Ge=function(){return ke(arguments)}();var De=function(t){return"number"==typeof t},Ye=Number,$e=Ye.prototype.toString;var Je=F,We=Ye,Xe=function(t){try{return $e.call(t),!0}catch(t){return!1}},Ze=A();var ze=function(t){return"object"==typeof t&&(t instanceof We||(Ze?Xe(t):"[object Number]"===Je(t)))},He=De,qe=ze;var Ke=w,Qe=function(t){return He(t)||qe(t)},tn=ze;Ke(Qe,"isPrimitive",De),Ke(Qe,"isObject",tn);var rn=Qe;var en=function(t){return t!=t},nn=rn.isPrimitive,on=en;var an=function(t){return nn(t)&&on(t)},un=rn.isObject,fn=en;var sn=function(t){return un(t)&&fn(t.valueOf())},cn=an,ln=sn;var hn=w,pn=function(t){return cn(t)||ln(t)},gn=sn;hn(pn,"isPrimitive",an),hn(pn,"isObject",gn);var vn=pn,dn=Number.POSITIVE_INFINITY,yn=Ye.NEGATIVE_INFINITY,mn=dn,_n=yn,bn=n;var wn=function(t){return t<mn&&t>_n&&bn(t)},On=rn.isPrimitive,En=wn;var An=function(t){return On(t)&&En(t)},jn=rn.isObject,In=wn;var Pn=function(t){return jn(t)&&In(t.valueOf())},Tn=An,Un=Pn;var xn=w,Sn=function(t){return Tn(t)||Un(t)},Nn=Pn;xn(Sn,"isPrimitive",An),xn(Sn,"isObject",Nn);var Vn,Rn=Sn,Bn=Object.prototype.propertyIsEnumerable;Vn=!Bn.call("beep","0");var Fn=Ct,Ln=vn.isPrimitive,Mn=Rn.isPrimitive,Cn=Bn,kn=Vn;var Gn=function(t,r){var e;return null!=t&&(!(e=Cn.call(t,r))&&kn&&Fn(t)?!Ln(r=+r)&&Mn(r)&&r>=0&&r<t.length:e)},Dn=Gn,Yn=U,$n=Dn,Jn=rr,Wn=n;var Xn=Ge?Ce:function(t){return null!==t&&"object"==typeof t&&!Jn(t)&&"number"==typeof t.length&&Wn(t.length)&&t.length>=0&&t.length<=4294967295&&Yn(t,"callee")&&!$n(t,"callee")},Zn=Xn,zn=Re,Hn=Array.prototype.slice;var qn=function(t){return Zn(t)?zn(Hn.call(t)):zn(t)};var Kn=Dn((function(){}),"prototype"),Qn=!Dn({toString:null},"toString"),ti=n;var ri=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ti(t.length)&&t.length>=0&&t.length<=9007199254740991},ei=vn,ni=ri,ii=Ct.isPrimitive,oi=Rn.isPrimitive;var ai,ui=function(t){return t.constructor&&t.constructor.prototype===t},fi="undefined"==typeof window?void 0:window,si=U,ci=function(t,r,e){var n,i;if(!ni(t)&&!ii(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!oi(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(ei(r)){for(;i<n;i++)if(ei(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1},li=gr,hi=ui,pi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],gi=fi;ai=function(){var t;if("undefined"===li(gi))return!1;for(t in gi)try{-1===ci(pi,t)&&si(gi,t)&&null!==gi[t]&&"object"===li(gi[t])&&hi(gi[t])}catch(t){return!0}return!1}();var vi="undefined"!=typeof window,di=ai,yi=ui,mi=vi;var _i=ir,bi=U,wi=Xn,Oi=Kn,Ei=Qn,Ai=function(t){if(!1===mi&&!di)return yi(t);try{return yi(t)}catch(t){return!1}},ji=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ii,Pi=Re,Ti=qn,Ui=function(t){var r,e,n,i,o,a,u;if(i=[],wi(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!bi(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof t)&&!_i(t))return i;e=Oi&&n}for(o in t)e&&"prototype"===o||!bi(t,o)||i.push(String(o));if(Ei)for(r=Ai(t),u=0;u<ji.length;u++)a=ji[u],r&&"constructor"===a||!bi(t,a)||i.push(String(a));return i};Ii=Le?Fe()?Ti:Pi:Ui;var xi=Ve,Si=Ii;var Ni=function(t,r){var e,n,i;for(e=Si(r),i=0;i<e.length;i++)n=e[i],xi(t,n,r[n]);return t},Vi=Ue,Ri=xe,Bi=Ni;w(Vi,"enum",Ri),Bi(Vi,Ri());var Fi=Vi,Li=["row-major","column-major"];var Mi=function(){return Li.slice()};w(Mi,"enum",(function(){return{"row-major":1,"column-major":2}}));var Ci=Mi,ki=["throw","clamp","wrap"];var Gi=function(){return ki.slice()};w(Gi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Di=Gi,Yi=Hr,$i=de,Ji=Ie,Wi=Pe,Xi=Ci.enum,Zi=Di.enum,zi=(0,Fi.enum)(),Hi=Xi(),qi=Zi();var Ki=function(){var t,r,e,n,i,o,a,u,f,s,c,l,h,p;if(f=this._mode||"throw",a=this._submode||[f],e=33+16*(l=this._ndims)+(h=a.length),(u=this.__meta_dataview__)&&u.byteLength===e)return u;for(u=new Ji(new $i(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,Yi?1:0),s+=1,u.setInt16(s,zi[n],Yi),s+=2,u.setBigInt64(s,Wi(l),Yi),c=8*l,s+=8,p=0;p<l;p++)u.setBigInt64(s,Wi(i[p]),Yi),u.setBigInt64(s+c,Wi(o[p]*t),Yi),s+=8;for(s+=c,u.setBigInt64(s,Wi(this._offset*t),Yi),s+=8,u.setInt8(s,Hi[this._order]),s+=1,u.setInt8(s,qi[f]),s+=1,u.setBigInt64(s,Wi(h),Yi),s+=8,p=0;p<h;p++)u.setInt8(s,qi[a[p]]),s+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(s,r,Yi),this.__meta_dataview__=u,u},Qi=Hr,to=Cr,ro=Ie,eo=r;var no=function(t){var r,e,n,i;return r=new to(8),0===t||(i=(4294967295&t)>>>0,n=eo(t/4294967296),e=new ro(r.buffer),Qi?(e.setUint32(0,i,Qi),e.setUint32(4,n,Qi)):(e.setUint32(0,n,Qi),e.setUint32(4,i,Qi))),r},io=Hr,oo=Ie,ao=r,uo=new Cr(8),fo=new oo(uo.buffer);var so=no;w(so,"assign",(function(t,r,e,n){var i,o,a;if(0===t){for(a=0;a<uo.length;a++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=ao(t/4294967296),io?(fo.setUint32(0,o,io),fo.setUint32(4,i,io)):(fo.setUint32(0,i,io),fo.setUint32(4,o,io)),a=0;a<uo.length;a++)r[n]=uo[a],n+=e;return r}));var co=Hr,lo=de,ho=Ie,po=Cr,go=Ci.enum,vo=Di.enum,yo=so.assign,mo=(0,Fi.enum)(),_o=go(),bo=vo();var wo=nt,Oo=w,Eo=at,Ao=ft,jo=st,Io=ht,Po=pt,To=gt,Uo=yt,xo=mt,So=_t,No=bt,Vo=wt,Ro=Ot,Bo=Pt,Fo=xr,Lo=Ki,Mo=function(){var t,r,e,n,i,o,a,u,f,s,c,l,h,p,g;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(h=this._ndims)+(p=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new ho(new lo(n)),r=new po(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,co?1:0),c+=1,f.setInt16(c,mo[i],co),yo(h,r,1,c+=2),l=8*h,c+=8,g=0;g<h;g++)yo(o[g],r,1,c),yo(a[g]*t,r,1,c+l),c+=8;for(c+=l,yo(this._offset*t,r,1,c),c+=8,f.setInt8(c,_o[this._order]),c+=1,f.setInt8(c,bo[s]),yo(p,r,1,c+=1),c+=8,g=0;g<p;g++)f.setInt8(c,bo[u[g]]),c+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(c,e,co),this.__meta_dataview__=f,f};function Co(t,r,e,n,i,o){var a,u,f,s,c;if(!(this instanceof Co))return new Co(t,r,e,n,i,o);for(s=1,c=0;c<e.length;c++)s*=e[c];return u=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=Ao(t),this._buffer=r,this._dtype=t,this._length=s,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=Boolean(r.get&&r.set),this._iterationOrder=jo(n),a=Uo(s,e,n,i,this._iterationOrder),f=Io(n),this._flags={ROW_MAJOR_CONTIGUOUS:To(f,a),COLUMN_MAJOR_CONTIGUOUS:Po(f,a),READONLY:!1},this.__meta_dataview__=null,this}Oo(Co,"name","ndarray"),Eo(Co.prototype,"byteLength",(function(){return this._byteLength})),Eo(Co.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),Eo(Co.prototype,"data",(function(){return this._buffer})),Eo(Co.prototype,"dtype",(function(){return this._dtype})),Eo(Co.prototype,"flags",(function(){return xo(this._flags)})),Eo(Co.prototype,"length",(function(){return this._length})),Eo(Co.prototype,"ndims",(function(){return this._ndims})),Eo(Co.prototype,"offset",(function(){return this._offset})),Eo(Co.prototype,"order",(function(){return this._order})),Eo(Co.prototype,"shape",(function(){return this._shape.slice()})),Eo(Co.prototype,"strides",(function(){return this._strides.slice()})),Oo(Co.prototype,"get",Ro),Oo(Co.prototype,"iget",So),Oo(Co.prototype,"set",Vo),Oo(Co.prototype,"iset",No),Oo(Co.prototype,"toString",Fo),Oo(Co.prototype,"toJSON",Bo),Oo(Co.prototype,"__array_meta_dataview__",wo()?Lo:Mo);var ko=Co;var Go=function(t){return t instanceof ko||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set};var Do=function(t){var r,e,n;if(0===(r=t.length))return 0;for(e=1,n=0;n<r;n++)e*=t[n];return e},Yo=function(t,r){return t[r]},$o=function(t,r){return t.get(r)},Jo=function(t,r,e){t[r]=e},Wo=function(t,r,e){t.set(e,r)};var Xo=function(t){var r,e,n;return r=t.data,n=t.shape,e=Boolean(r.get&&r.set),{ref:t,dtype:t.dtype,data:r,length:Do(n),shape:n,strides:t.strides,offset:t.offset,order:t.order,accessors:e,getter:e?$o:Yo,setter:e?Wo:Jo}},Zo=Xo;var zo=function(t,r){return t[r]},Ho=function(t,r){return t.get(r)},qo=function(t,r,e){t[r]=e},Ko=function(t,r,e){t.set(e,r)};var Qo=function(t){var r=Boolean(t.get&&t.set);return{data:t,accessors:r,getter:r?Ho:zo,setter:r?Ko:qo}},ta=Qo,ra=ri,ea=Rn.isPrimitive,na=Ct.isPrimitive,ia=vn.isPrimitive;var oa=function(t,r,e){var n,i,o;if(!ra(t)&&!na(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ea(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");(i=e)<0&&(i=0)}else i=0;if(na(t)){if(!na(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==t.indexOf(r,i)}if(n=t.length,ia(r)){for(o=i;o<n;o++)if(ia(t[o]))return!0;return!1}for(o=i;o<n;o++)if(t[o]===r)return!0;return!1},aa=Ct.isPrimitive;var ua=function(t){if(!aa(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toLowerCase()},fa=Ct.isPrimitive;var sa=function(t){if(!fa(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toUpperCase()},ca=ua,la=sa,ha=Ct.isPrimitive;var pa=function(t){return ha(t)&&t===la(t)&&t!==ca(t)},ga=dn,va=yn;var da=function(t){return t==t&&t>va&&t<ga},ya=Rn.isPrimitive;var ma=function(t){return ya(t)&&t>=0},_a=Rn.isObject;var ba=function(t){return _a(t)&&t.valueOf()>=0},wa=ma,Oa=ba;var Ea=w,Aa=function(t){return wa(t)||Oa(t)},ja=ba;Ea(Aa,"isPrimitive",ma),Ea(Aa,"isObject",ja);var Ia=Aa.isPrimitive,Pa=Ct.isPrimitive;var Ta=function(t,r){var e,n;if(!Pa(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!Ia(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(0===t.length||0===r)return"";if(t.length*r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=r;1==(1&n)&&(e+=t),0!==(n>>>=1);)t+=t;return e},Ua=Rn.isPrimitive,xa=Ct.isPrimitive;var Sa=Ta,Na=function(t,r,e){var n,i;if(!xa(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!xa(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");if(arguments.length>2){if(!Ua(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");n=e<0?t.length+e:e}else n=0;if(0===r.length)return!0;if(n<0||n+r.length>t.length)return!1;for(i=0;i<r.length;i++)if(t.charCodeAt(n+i)!==r.charCodeAt(i))return!1;return!0};var Va=function(t,r,e){var n=!1,i=r-t.length;return i<0||(Na(t,"-")&&(n=!0,t=t.substr(1)),t=e?t+Sa("0",i):Sa("0",i)+t,n&&(t="-"+t)),t},Ra=pa,Ba=sa,Fa=ua,La=da,Ma=rn.isPrimitive,Ca=Va;var ka=pa,Ga=sa,Da=ua,Ya=jr,$a=da,Ja=rn.isPrimitive,Wa=ct,Xa=/e\+(\d)$/,Za=/e-(\d)$/,za=/^(\d+)$/,Ha=/^(\d+)e/,qa=/\.0$/,Ka=/\.0*e/,Qa=/(\..*[^0])0*e/;var tu=function(t){var r,e,n=parseFloat(t.arg);if(!$a(n)){if(!Ja(t.arg))throw new Error("invalid floating-point number. Value: "+e);n=t.arg}switch(t.specifier){case"e":case"E":e=n.toExponential(t.precision);break;case"f":case"F":e=n.toFixed(t.precision);break;case"g":case"G":Wa(n)<1e-4?((r=t.precision)>0&&(r-=1),e=n.toExponential(r)):e=n.toPrecision(t.precision),t.alternate||(e=Ya(e,Qa,"$1e"),e=Ya(e,Ka,"e"),e=Ya(e,qa,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=Ya(e,Xa,"e+0$1"),e=Ya(e,Za,"e-0$1"),t.alternate&&(e=Ya(e,za,"$1."),e=Ya(e,Ha,"$1.e")),n>=0&&t.sign&&(e=t.sign+e),e=ka(t.specifier)?Ga(e):Da(e)},ru=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var eu=Ta;var nu=Ct.isPrimitive,iu=oa,ou=en,au=function(t){var r,e,n;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,n=parseInt(e,10),!La(n)){if(!Ma(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===t.specifier||10!==r)&&(n=4294967295+n+1),n<0?(e=(-n).toString(r),t.precision&&(e=Ca(e,t.precision,t.padRight)),e="-"+e):(e=n.toString(r),n||t.precision?t.precision&&(e=Ca(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=Ra(t.specifier)?Ba(e):Fa(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e},uu=tu,fu=function(t){var r,e,n,i,o;for(r=0,n=[],o=ru.exec(t);o;)(e=t.slice(r,ru.lastIndex-o[0].length)).length&&n.push(e),(i=a(o,n.length))&&n.push(i),r=ru.lastIndex,o=ru.exec(t);return(e=t.slice(r)).length&&n.push(e),n;function a(t){return{mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],hasPeriod:"."===t[4],precision:t[5],specifier:t[6]}}},su=function(t,r,e){var n=r-t.length;return n<0?t:t=e?t+eu(" ",n):eu(" ",n)+t},cu=Va,lu=String.fromCharCode;var hu=function(t,r,e,n,i,o){var a,u,f,s,c;for(a=t.length,u=1,c=0;c<a;c++)u*=t[c];if("clamp"===o)i<0?i=0:i>=u&&(i=u-1);else if("wrap"===o)i<0?(i+=u)<0&&0!==(i%=u)&&(i+=u):i>=u&&(i-=u)>=u&&(i%=u);else if(i<0||i>=u)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+u+". Value: `"+i+"`.");if(f=e,"column-major"===n){for(c=0;c<a;c++)i-=s=i%t[c],i/=t[c],f+=s*r[c];return f}for(c=a-1;c>=0;c--)i-=s=i%t[c],i/=t[c],f+=s*r[c];return f};var pu=function(t,r,e,n,i){var o,a,u,f,s,c,l,h,p,g,v;if(f=t.length,l=t.shape,o=t.data,h=t.strides,p=t.offset,a=t.order,s=t.getter,c=t.ref,0===l.length)return n.call(i,r,e(s(o,p),0,c),0,c);for(u=r,v=f-1;v>=0;v--)g=hu(l,h,p,a,v,"throw"),u=n.call(i,u,e(s(o,g),v,c),v,c);return u};var gu=function(t,r,e,n,i){var o,a,u,f;for(o=t.data,a=t.getter,u=r,f=o.length-1;f>=0;f--)u=n.call(i,u,e(a(o,f),f,o),f,o);return u},vu=o,du=Go,yu=dr,mu=Zo,_u=ta,bu=function(t){var r,e,n,i,o,a,u,f,s;if(!nu(t))throw new TypeError("invalid argument. Must provide a string. Value: `"+t+"`.");for(r=fu(t),a="",u=1,f=0;f<r.length;f++)if(n=r[f],nu(n))a+=n;else{for(n.mapping&&(u=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!iu(e,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ou(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,ou(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=au(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!ou(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ou(o)?String(n.arg):lu(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=uu(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=cu(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=su(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},wu=pu,Ou=gu;var Eu=function(t,r,e,n,i){if(!yu(e))throw new TypeError(bu("invalid argument. Third argument must be a function. Value: `%s`.",e));if(!yu(n))throw new TypeError(bu("invalid argument. Fourth argument must be a function. Value: `%s`.",n));if(du(t))return wu(mu(t),r,e,n,i);if(vu(t))return Ou(_u(t),r,e,n,i);throw new TypeError(bu("invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.",t))};export{Eu as default};
//# sourceMappingURL=mod.js.map
