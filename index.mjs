// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@esm/index.mjs";function o(o,a,m,l,j){if(!e(m))throw new TypeError(n("0kW3Z",m));if(!e(l))throw new TypeError(n("0kW3E",l));if(t(o))return function(r,t,e,s,i){var n,o,a,m,l,j,f,h,p,c,b;if(m=r.length,f=r.shape,n=r.data,h=r.strides,p=r.offset,o=r.order,l=r.getter,j=r.ref,0===f.length)return s.call(i,t,e(l(n,p),0,j),0,j);for(a=t,b=m-1;b>=0;b--)c=d(f,h,p,o,b,"throw"),a=s.call(i,a,e(l(n,c),b,j),b,j);return a}(s(o),a,m,l,j);if(r(o))return function(r,t,e,s,i){var n,d,o,a;for(n=r.data,d=r.getter,o=t,a=n.length-1;a>=0;a--)o=s.call(i,o,e(d(n,a),a,n),a,n);return o}(i(o),a,m,l,j);throw new TypeError(n("0kWC4",o))}export{o as default};
//# sourceMappingURL=index.mjs.map
