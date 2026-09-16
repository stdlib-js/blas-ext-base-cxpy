"use strict";var p=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(s){throw (t=0, s)}};};var y=p(function(I,l){
var d=require('@stdlib/strided-base-reinterpret-complex64/dist'),o=5;function h(v,t,s,q,n,j,g){var a,i,r,e,x,c,f,u;if(v<=0)return n;if(a=d(t,0),i=d(n,0),r=q*2,e=g*2,x=s*2,c=j*2,s===1&&j===1){if(f=v%o,f>0)for(u=0;u<f;u++)i[e]+=a[r],i[e+1]+=a[r+1],r+=x,e+=c;if(v<o)return n;for(u=f;u<v;u+=o)i[e]+=a[r],i[e+1]+=a[r+1],i[e+2]+=a[r+2],i[e+3]+=a[r+3],i[e+4]+=a[r+4],i[e+5]+=a[r+5],i[e+6]+=a[r+6],i[e+7]+=a[r+7],i[e+8]+=a[r+8],i[e+9]+=a[r+9],r+=o*2,e+=o*2;return n}for(u=0;u<v;u++)i[e]+=a[r],i[e+1]+=a[r+1],r+=x,e+=c;return n}l.exports=h
});var _=p(function(J,R){
var w=require('@stdlib/strided-base-stride2offset/dist'),k=y();function z(v,t,s,q,n){return k(v,t,s,w(v,s),q,n,w(v,n))}R.exports=z
});var O=p(function(K,M){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=y();A(E,"ndarray",B);M.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),m,b=D(C(__dirname,"./native.js"));F(b)?m=G:m=b;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
