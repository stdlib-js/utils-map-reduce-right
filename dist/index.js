"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=g(function(H,m){
var E=require('@stdlib/ndarray-base-vind2bind/dist'),T="throw";function p(r,e,a,t,s){var i,v,n,u,f,c,l,y,d,b,o;if(u=r.length,l=r.shape,i=r.data,y=r.strides,d=r.offset,v=r.order,f=r.accessors[0],c=r.ref,l.length===0)return t.call(s,e,a(f(i,d),0,c),0,c);for(n=e,o=u-1;o>=0;o--)b=E(l,y,d,v,o,T),n=t.call(s,n,a(f(i,b),o,c),o,c);return n}m.exports=p
});var R=g(function(I,w){
function x(r,e,a,t,s){var i,v,n,u;for(i=r.data,v=r.accessors[0],n=e,u=i.length-1;u>=0;u--)n=t.call(s,n,a(v(i,u),u,i),u,i);return n}w.exports=x
});var j=g(function(J,F){
var V=require('@stdlib/assert-is-array-like-object/dist'),L=require('@stdlib/assert-is-ndarray-like/dist'),k=require('@stdlib/assert-is-function/dist'),O=require('@stdlib/ndarray-base-ndarraylike2object/dist'),D=require('@stdlib/array-base-arraylike2object/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),M=q(),z=R();function B(r,e,a,t,s){if(!k(a))throw new TypeError(h('1VL3N',a));if(!k(t))throw new TypeError(h('1VL32',t));if(L(r))return M(O(r),e,a,t,s);if(V(r))return z(D(r),e,a,t,s);throw new TypeError(h('1VLBH',r))}F.exports=B
});var C=j();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
