var St=Object.create;var Ze=Object.defineProperty;var kt=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Ct=Object.getPrototypeOf,Ot=Object.prototype.hasOwnProperty;var b=(e,r)=>Ze(e,"name",{value:r,configurable:!0});var jt=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Et=(e,r,t,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Mt(r))!Ot.call(e,n)&&n!==t&&Ze(e,n,{get:()=>r[n],
enumerable:!(a=kt(r,n))||a.enumerable});return e};var At=(e,r,t)=>(t=e!=null?St(Ct(e)):{},Et(r||!e||!e.__esModule?Ze(t,"default",{value:e,enumerable:!0}):t,e));var Cr=jt((yo,Mr)=>{"use strict";var Nt=b(function(r){return Pt(r)&&!It(r)},"isMergeableObject");function Pt(e){return!!e&&
typeof e=="object"}b(Pt,"isNonNullObject");function It(e){var r=Object.prototype.toString.call(e);return r==="[object Re\
gExp]"||r==="[object Date]"||Tt(e)}b(It,"isSpecial");var $t=typeof Symbol=="function"&&Symbol.for,Wt=$t?Symbol.for("reac\
t.element"):60103;function Tt(e){return e.$$typeof===Wt}b(Tt,"isReactElement");function Rt(e){return Array.isArray(e)?[]:
{}}b(Rt,"emptyTarget");function xe(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ue(Rt(e),e,r):e}b(xe,"cloneUnlessOth\
erwiseSpecified");function Yt(e,r,t){return e.concat(r).map(function(a){return xe(a,t)})}b(Yt,"defaultArrayMerge");function Ft(e,r){
if(!r.customMerge)return ue;var t=r.customMerge(e);return typeof t=="function"?t:ue}b(Ft,"getMergeFunction");function Dt(e){
return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.
call(e,r)}):[]}b(Dt,"getEnumerableOwnPropertySymbols");function Sr(e){return Object.keys(e).concat(Dt(e))}b(Sr,"getKeys");
function kr(e,r){try{return r in e}catch{return!1}}b(kr,"propertyIsOnObject");function Lt(e,r){return kr(e,r)&&!(Object.
hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}b(Lt,"propertyIsUnsafe");function Bt(e,r,t){var a={};return t.
isMergeableObject(e)&&Sr(e).forEach(function(n){a[n]=xe(e[n],t)}),Sr(r).forEach(function(n){Lt(e,n)||(kr(e,n)&&t.isMergeableObject(
r[n])?a[n]=Ft(n,t)(e[n],r[n],t):a[n]=xe(r[n],t))}),a}b(Bt,"mergeObject");function ue(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||
Yt,t.isMergeableObject=t.isMergeableObject||Nt,t.cloneUnlessOtherwiseSpecified=xe;var a=Array.isArray(r),n=Array.isArray(
e),i=a===n;return i?a?t.arrayMerge(e,r,t):Bt(e,r,t):xe(r,t)}b(ue,"deepmerge");ue.all=b(function(r,t){if(!Array.isArray(r))
throw new Error("first argument should be an array");return r.reduce(function(a,n){return ue(a,n,t)},{})},"deepmergeAll");
var Ut=ue;Mr.exports=Ut});var Nr=At(Cr(),1);import{readFileSync as Xt}from"node:fs";import{resolve as Qt}from"node:path";import{readFile as Gt}from"node:fs/promises";import{isAbsolute as Ht}from"node:path";import{fileURLToPath as Vt}from"node:url";var Kt=/^{(?:\w+)(?:.\w+)+}$/,jr=b(async e=>{if(Jt(e)&&(e.startsWith(".")?e=import.meta.resolve("../assets/"+e):e=import.meta.
resolve(e),Or(e)&&(e=Vt(e)),Ht(e)))return await Gt(e,{encoding:"utf8"});if(Or(e))return await fetch(e).then(r=>r.json());
throw new Error("Wrong Reference: "+e.toString())},"deref"),Te=b(e=>typeof e=="string"&&Kt.test(e),"isInternalReference"),
Jt=b(e=>(e.startsWith("file:")||e.startsWith("node:")||e.endsWith("://"))===!1,"isSpecifierOrPath"),Or=b(e=>{try{let{protocol:r}=new URL(
e);return r.startsWith("file:")||r.startsWith("node:")||r.endsWith("://")}catch{return!1}},"isURL");var Er=b(e=>ze(e)&&le(e.$value)&&e.$type==="color","isColorToken"),le=b(e=>e!==null&&typeof e=="object","isObject"),ze=b(
e=>le(e)&&"$type"in e&&"$value"in e,"isToken");var Re=new Map,er=b(e=>{if(Re.has(e))return Re.get(e);throw new Error(`Token "${e}" not found`)},"getToken");var Ar=b((e,r)=>{if(Te(r)){let t=er(r.slice(1,-1));Re.set(e,t);return}if(ze(r)){let t={$type:r.$type,$value:r.$value};"$\
description"in r&&(t.$description=r.$description),"$metadata"in r&&(t.$metadata=r.$metadata),Re.set(e,t);return}throw new Error(
`Failed setting: token '${e}' is ${JSON.stringify(r)}. See https://tr.designtokens.org/format/`)},"setToken");var qt=["$description","$metadata","$type","$value"],rr=b(async e=>{let r=Object.keys(e).sort(),t={};for(let a of r)if(a===
"$ref"){let n=await jr(e.$ref);n=await rr(JSON.parse(n)),Object.assign(t,n)}else if(qt.includes(a))t[a]=e[a];else{let n=le(
e[a])?await rr(e[a]):e[a];le(t[a])&&le(n)?t[a]=(0,Nr.default)(t[a],n):t[a]=n}return Object.seal(t)},"parseSourceContent"),
Pr=b((e,r=[])=>{let t=Object.keys(e);for(let a of t){let n=[...r,a],i=e[a];(Te(i)||ze(i))&&Ar(n.join("."),i),le(i)&&Pr(i,
n)}},"retrieveDesignTokens"),Ir=b(async e=>{let r=Qt(import.meta.dirname,"../assets",e+".tokens"),t=Xt(r,{encoding:"utf8"}),
a=await rr(JSON.parse(t));Pr(a)},"importDesignTokens");var Zt=Object.defineProperty,o=b((e,r)=>Zt(e,"name",{value:r,configurable:!0}),"o"),ea=Object.defineProperty,G=o((e,r)=>ea(
e,"name",{value:r,configurable:!0}),"r");function Ye(...e){let[r,t]=e.length===1?Array.of(0,e[0]):Array.of(Math.min(...e),
Math.max(...e)),a=Object.create(null,{0:{value:r},1:{value:t},[Symbol.iterator]:{value:G(function*(){yield this[0],yield this[1]},
"value")},[Symbol.toStringTag]:{get(){return`Range: ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){return this[0]+
this.value/2}},length:{value:2},value:{enumerable:!0,get(){return this[1]-this[0]}},toString:{value:G(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(a,{from:{enumerable:!0,value:r},to:{enumerable:!0,value:t},allot:{
value:G(function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+this.from:this.to-(this.from-n)%this.value},
"allocateOuterValue")},clamp:{value:G(function(n){return this.test(n)?n:Math.max(Math.min(n,this.to),this.from)},"restri\
ctOuterValue")},test:{value:G(function(n){return this.from<=n&&n<=this.to},"value")}}),a}b(Ye,"fo");o(Ye,"g");G(Ye,"init\
Range");function sr(e=[0,100],r=[0,1]){let[t,a]=r,[n,i]=e,[s,_]=[a-t,i-n];function l(u){return typeof u=="string"&&(u=parseFloat(
u)),p.domain.test(u)===!1&&(u=u>a?(u-a)%s+t:a-(t-u)%s),_*(u-t)/s+n}b(l,"_"),o(l,"c"),G(l,"invert");function p(u){return typeof u==
"string"&&(u=parseFloat(u)),p.range.test(u)===!1&&(u=u>i?(u-i)%_+n:i-(n-u)%_),s*(u-n)/_+t}return b(p,"l"),o(p,"l"),G(p,"\
calculator"),Object.defineProperties(p,{domain:{enumerable:!0,value:Ye(t,a)},range:{enumerable:!0,value:Ye(n,i)},invert:{
enumerable:!0,value:l}})}b(sr,"xo");o(sr,"y");G(sr,"initScale");var ra=Object.defineProperty,ta=o((e,r)=>ra(e,"name",{value:r,
configurable:!0}),"o"),aa=ta((e,r=12)=>{let t=r>0?10**r:1;return Math.sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/
t},"round"),m=aa,tr=sr([0,360],[-Math.PI,Math.PI]),lr=Object.freeze({bytes:8,domain:tr.domain,ident:"angle",input:o(e=>tr.
domain.allot(m(e*Math.PI/180)),"input"),output:o(e=>tr.range.allot(m(e*180/Math.PI)),"output"),short:"phi",tcoord:"polar",
tgeom:"azimuth",unit:"rad"}),oa=Object.defineProperty,ce=o((e,r)=>oa(e,"name",{value:r,configurable:!0}),"e");function w(...e){
let[r,t]=e.length===1?Array.of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),a=Object.create(null,{0:{value:r},1:{value:t},
[Symbol.iterator]:{value:ce(function*(){yield this[0],yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range:\
 ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){return this[0]+this.value/2}},length:{value:2},value:{
enumerable:!0,get(){return this[1]-this[0]}},toString:{value:ce(function(){return this[0]+","+this[1]},"value")}});return Object.
defineProperties(a,{from:{enumerable:!0,value:r},to:{enumerable:!0,value:t},allot:{value:ce(function(n){return this.test(
n)?n:n>this.from?(n-this.to)%this.value+this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},clamp:{value:ce(
function(n){return this.test(n)?n:Math.max(Math.min(n,this.to),this.from)},"restrictOuterValue")},test:{value:ce(function(n){
return this.from<=n&&n<=this.to},"value")}}),a}b(w,"h");o(w,"l");ce(w,"initRange");var Ce=Object.freeze({$coord:lr,bytes:8,
domain:w(0,360),ident:"hue",short:"h",input:o(e=>Ce.domain.allot(e),"input"),output:o(e=>isNaN(e)?NaN:e<1e-6?0:m(e,6),"o\
utput"),precision:2,unit:"deg"}),Oe=Object.freeze({bytes:8,domain:w(0,1),ident:"applicate",short:"z",tcoord:"cartesian-c\
oordinate-axis",tgeom:"directed-line"}),je=Object.freeze({$coord:Oe,bytes:8,domain:w(0,100),ident:"lightness",input:o(e=>m(
e/100),"input"),output:o(e=>m(e*100),"output"),short:"L",precision:2,unit:"%"}),ye=Object.freeze({bytes:8,domain:w(0,1),
ident:"radius",short:"rho",tcoord:"polar",tgeom:"reference-ray"}),na=Object.freeze({$coord:ye,bytes:8,domain:w(0,100),ident:"\
saturation",input:o(e=>m(e/100),"input"),output:o(e=>m(e*100),"output"),short:"S",precision:2,unit:"%"}),ia=Object.defineProperty,
de=o((e,r)=>ia(e,"name",{value:r,configurable:!0}),"n"),sa=de(e=>e!==null&&typeof e=="object","isObject"),la=de(e=>sa(e)&&
"ident"in e&&"short"in e&&"domain"in e,"isDimension");function N(e,r,t){let a=Iterator.from(t===void 0?[e,r]:[e,r,t]),n=t===
void 0?2:3;for(let _ of a.take(n))if(la(_)===!1)throw new TypeError("Passed wrong space dimension: "+JSON.stringify(_,void 0,
2));let i=a.take(n).filter(_=>_.tgeom==="azimuth"||_.tgeom==="reference-ray").toArray().length===2?n===3?"cylinder":"cir\
cle":n===3?"cube":"plane",s=Object.create(null,{0:{enumerable:!0,value:e},1:{enumerable:!0,value:r},length:{enumerable:!0,
value:n},tgeom:{enumerable:!0,value:i},entries:{value:de(function*(){yield[0,this[0]],yield[1,this[1]],this.length===3&&
(yield[2,this[2]])},"value")},toArray:{value:de(function(){return Array.of(...this)},"value")},[Symbol.iterator]:{value:de(
function*(){yield this[0],yield this[1],this.length===3&&(yield this[2])},"value")}});return n===3&&Object.defineProperty(
s,2,{enumerable:!0,value:t}),_=>_===void 0?s:Object.defineProperties(s,_)}b(N,"v");o(N,"j");de(N,"defCSYS");var To=N(ye,
lr)({adapt:{enumerable:!0,value:_r}});function _r(e=0,r=NaN){return[e*Math.cos(r),e*Math.sin(r)]}b(_r,"bo");o(_r,"calcCa\
rtesianCoordinates");var Ge=N(ye,lr,Oe)({adapt:{value:$r}});function $r(e,r,t){return[..._r(e,r),t]}b($r,"xr");o($r,"cal\
cCubeCoordinates");var B=Float64Array.of(.9642956764295677,1,.8251046025104602);Object.defineProperty(B,"ident",{value:"\
d50"});Object.freeze(B.buffer);var Q=Float64Array.of(.3127/.329,1,(1-.3127-.329)/.329);Object.defineProperty(Q,"ident",{
value:"d65"});Object.freeze(Q.buffer);var M={CAM:N(Ce,na,je)(),CSYS:Ge,ident:"hsl",whp:Q},_a=Object.freeze({$coord:Oe,bytes:8,
domain:w(0,100),ident:"blackness",input:o(e=>m(e/100),"input"),output:o(e=>m(e*100),"output"),short:"B",precision:2,unit:"\
%"}),pa=Object.freeze({$coord:ye,ident:"whiteness",bytes:8,domain:w(0,100),input:o(e=>m(e/100),"input"),output:o(e=>m(e*
100),"output"),short:"W",precision:2,unit:"%"}),C={CAM:N(Ce,pa,_a)(),CSYS:Ge,ident:"hwb",whp:Q},Ee=Object.freeze({bytes:8,
domain:w(-1,1),ident:"abscissa",short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"}),ha=Object.freeze({$coord:Ee,
bytes:8,domain:w(-125,125),ident:"green-red",input:o(e=>m(e/125),"input"),output:o(e=>m(e*125),"output"),precision:2,short:"\
a"}),ba=Object.freeze({$coord:Ee,bytes:8,domain:w(-.4,.4),ident:"green-red",precision:6,short:"a"}),Ae=Object.freeze({bytes:8,
domain:w(-1,1),ident:"ordinate",short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"}),ua=Object.freeze({$coord:Ae,
domain:w(-125,125),ident:"blue-yellow",input:o(e=>m(e/125),"input"),output:o(e=>m(e*125),"output"),precision:2,short:"b"}),
ca=Object.freeze({$coord:Ae,domain:w(-.4,.4),ident:"blue-yellow",precision:6,short:"b"}),Ro=N(Ee,Ae)({adapt:{value:pr}});
function pr(e,r){let t=0,a=NaN;return(e!==0||r!==0)&&(t=Math.sqrt(e**2+r**2),e!==0&&!r||r!==0&&!e?a=r/Math.abs(r)*(Math.
PI/2):a=Math.atan(r/e)),[t,a]}b(pr,"ho");o(pr,"calcPolarCoordinates");var Ne=N(Ee,Ae,Oe)({adapt:{value:Wr}});function Wr(e,r,t){
return[...pr(e,r),t]}b(Wr,"dr");o(Wr,"calcCylindricalCoordinates");var Fe=Object.freeze({CAM:N(je,ha,ua)(),CSYS:Ne,ident:"\
lab",whp:B}),da=Object.freeze({$coord:ye,bytes:8,domain:w(0,150),ident:"chroma",input:o(e=>m(e/150),"input"),output:o(e=>m(
e*150),"output"),precision:2,short:"C"}),ga=Object.freeze({$coord:ye,bytes:8,domain:w(0,.4),ident:"chroma",precision:6,short:"\
c"}),ar=Object.freeze({CAM:N(je,da,Ce)(),CSYS:Ge,ident:"lch",whp:B}),Se=Object.freeze({CAM:N(je,ba,ca)(),CSYS:Ne,ident:"\
oklab",whp:Q}),ke={CAM:N(je,ga,Ce)(),CSYS:Ge,ident:"oklch",whp:Q},ya=Object.freeze({$coord:Oe,bytes:1,domain:w(0,255),ident:"\
blue",input:o(e=>m(e/255),"input"),output:o(e=>m(e*255,0)&255,"output"),short:"B"}),ma=Object.freeze({$coord:Ae,bytes:1,
domain:w(0,255),ident:"green",input:o(e=>m(e/255),"input"),output:o(e=>m(e*255,0)&255,"output"),short:"G"}),fa=Object.freeze(
{$coord:Ee,bytes:1,domain:w(0,255),ident:"red",input:o(e=>m(e/255),"input"),output:o(e=>m(e*255,0)&255,"output"),short:"\
R"}),_e=Ne,De=Object.freeze({ident:"prophoto-rgb",CSYS:_e,luminance:w(160,640),whp:B}),me=Q,or=Object.freeze({ident:"rgb",
CAM:N(fa,ma,ya)(),CSYS:_e,whp:me}),R=Object.freeze({ident:"srgb",CSYS:_e,whp:me}),ge=Object.freeze({ident:"srgb-linear",
CSYS:_e,whp:me}),Me=Object.freeze({ident:"a98-rgb",CSYS:_e,whp:me}),Le=Object.freeze({ident:"display-p3",CSYS:_e,whp:me}),
Be=Object.freeze({ident:"rec2020",CSYS:_e,whp:me}),Y=Object.freeze({ident:"xyz-d65",CSYS:Ne,whp:Q}),F=Object.freeze({ident:"\
xyz-d50",CSYS:Ne,whp:B}),hr=new Map([[M.ident,M],[C.ident,C],[Fe.ident,Fe],[ar.ident,ar],[Se.ident,Se],[ke.ident,ke],[Be.
ident,Be],[Le.ident,Le],[Me.ident,Me],[De.ident,De],[or.ident,or],[ge.ident,ge],[R.ident,R],[F.ident,F],[Y.ident,Y]]),br=o(
e=>Math.sign(e)*Math.pow(Math.abs(e),2.19921875),"to_linear"),ur=o(e=>Math.sign(e)*Math.pow(Math.abs(e),256/563),"to_gam\
ut"),q=o(e=>{let r=Math.abs(e);return r<=.04045?e/12.92:Math.sign(e)*m(Math.pow((r+.055)/1.055,2.4))},"to_linear"),Z=o(e=>{
let r=Math.abs(e);return r>.0031308?Math.sign(e)*m(1.055*Math.pow(r,1/2.4)-.055):12.92*e},"to_gamut"),S={d65:{d50:Float64Array.
of(1.0479297925449969,.02962780877005599,-.009243040646204504,.022946870601609652,.9904344267538799,.015055191490298152,
-.05019226628920524,-.017073799063418826,.7518742814281371)},d50:{d65:Float64Array.of(.955473421488075,-.0283697093338637,
.012314014864481998,-.02309845494876471,1.0099953980813041,-.020507649298898964,.06325924320057072,.021041441191917323,1.330365926242124)}},
va=Object.defineProperty,k=o((e,r)=>va(e,"name",{value:r,configurable:!0}),"t"),Tr=k(e=>typeof e=="number"||e instanceof
Number,"isNumber"),wa=k((e,r=12)=>{let t=r>0?10**r:1;return Math.sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"\
round"),Rr=k(e=>nr(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableObject"),nr=k(e=>e!==null&&
typeof e=="object","isObject"),xa=k(e=>typeof e=="string","isString"),za=k(e=>xa(e)&&Sa.has(e),"isSpaceID"),Yr=k(e=>nr(e)&&
"ident"in e&&za(e.ident)&&"CSYS"in e&&nr(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),Sa=new Set(["a98-\
rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz\
-d50","xyz-d65"]),c=k(e=>Rr(e)&&Iterator.from(e).every(r=>Tr(r))&&"length"in e&&e.length===3&&"space"in e&&Yr(e.space),"\
isPointInSpace");function h(e,r){if(Yr(e)===!1)throw new TypeError("Point must be declared in a valid color space instea\
d of "+JSON.stringify(e,void 0,2));if((Rr(r)&&Iterator.from(r).every(l=>Tr(l)))===!1)throw new TypeError("Point in space\
 has valid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,2));let t=e.CSYS.length,a=new Float64Array(t),n=e.CAM===
void 0?Array.of(0,1,2):e.CAM.toArray().map(l=>e.CSYS.toArray().findIndex(p=>l.$coord===p)),i={[Symbol.iterator]:{value:k(
function*(){yield this[0],yield this[1],yield this[2]},"value")},length:{value:t}},s=(l=>({adapted:{get(){if(typeof this.
space.CSYS.adapt=="function"){let[p,u,v]=this.position;return Iterator.from(this.space.CSYS.adapt(p,u,v))}else return this.
position}},position:{get(){return Object.defineProperties(l.values(),{length:{value:3},space:{value:e}})},set(p){l.set(p)}},
set:{value:k(function(p){let u=Array.from(p),v=Math.min(u.length,3);for(let y=0;y<v;y++)this[y]=u[y];return this},"value")}}))(
a);for(let l=0;l<t;l++)((p,u,v)=>{s[p]={get(){let{CAM:y,CSYS:E}=this.space,j=v[u],A=E[u];"output"in A&&typeof A.output==
"function"&&(j=A.output(j));let T=y!==void 0&&y[p];T&&typeof T.output=="function"&&(j=T.output(j));let{precision:We=9,unit:be=""}=T||
A;return Object.defineProperties(new Number(j),{digits:{enumerable:!0,value:We},toString:{value:k(function(){return isNaN(
this)?"none":(Number.isInteger(this)?this:wa(this,We))+be},"value")},unit:{enumerable:!0,value:be}})},set(y){let{CAM:E,CSYS:j}=this.
space,A=j[u],T=E!==void 0?E[p]:null;T!==null&&"input"in T&&typeof T.input=="function"&&(y=T.input(y)),"input"in A&&typeof A.
input=="function"&&(y=A.input(y)),typeof y=="string"&&(y=parseFloat(y)),v[u]=y}}})(l,n[l],a);let _={buffer:{value:a.buffer},
equals:{value:k(function(l,p=1e-12){let[u,v,y]=this.position,[E,j,A]=l.position;return this.space.ident===l.space.ident&&
Math.abs(u-E)<=p*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(v-j)<=p*Math.max(1,Math.abs(v),Math.abs(j))&&Math.abs(y-A)<=
p*Math.max(1,Math.abs(y),Math.abs(A))},"value")},entries:{value:k(function(){let l=this.space.CAM??this.space.CSYS;return Iterator.
from([[l[0],this[0]],[l[1],this[1]],[l[2],this[2]]])},"value")},space:{value:e},values:{value:k(function(){return Iterator.
from(this).map(l=>l.valueOf())},"value")}};return Object.create(null,{..._,...i,...s,[Symbol.toStringTag]:{get(){return`\
PointInSpace: [${this.toString()}] \u2208 ${this.space.ident.toUpperCase()}`}},toString:{value:k(function(){return Iterator.
from(this).toArray().toString()},"value")}}).set(r)}b(h,"p");o(h,"_");k(h,"initPointInSpace");var ka=Object.defineProperty,
z=o((e,r)=>ka(e,"name",{value:r,configurable:!0}),"t"),Ma=z(e=>typeof e=="number"||e instanceof Number,"isNumber"),Fr=z(
e=>ir(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableObject"),ir=z(e=>e!==null&&typeof e=="o\
bject","isObject"),Ca=z(e=>typeof e=="string","isString"),Oa=z(e=>Ca(e)&&Ea.has(e),"isSpaceID"),ja=z(e=>ir(e)&&"ident"in
e&&Oa(e.ident)&&"CSYS"in e&&ir(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),Ea=new Set(["a98-rgb","disp\
lay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz\
-d65"]),Aa=z(e=>Fr(e)&&Iterator.from(e).every(r=>Ma(r))&&"length"in e&&e.length===3&&"space"in e&&ja(e.space),"isPointIn\
Space"),Na=z((e,r=12)=>{let t=r>0?10**r:1;return Math.sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"round");function d(e,r=0,t=0){
let a=Aa(e)?new Float64Array(e.buffer):Float64Array.of(e,r,t),{length:n}=a,i={each:{value:z(function(l){for(let p=0;p<this.
length;p++)l(this[p],p,this);return this},"value")},multiply:{value:z(function(l){if(Fr(l)){let[p,u,v,y,E,j,A,T,We]=l,[be,
Qe,qe]=this.head;return this.update(be*p+Qe*y+qe*A,be*u+Qe*E+qe*T,be*v+Qe*j+qe*We)}else throw new TypeError("Unsupported\
 Multiplicator: "+l)},"multiply")},update:{value:z(function(l,p,u){let[v,y,E]=(Array.isArray(l)?l.slice(3):Array.of(l,p,
u)).filter(j=>typeof j=="number");return this.head=Array.of(v??this[0],y??this[1],E??this[2]),this},"value")}},s={base:{
get:z(()=>Iterator.from([0,0,0]),"get")},head:{enumerable:!0,get:z(()=>Iterator.from(a),"get"),set:z(l=>a.set(l),"set")},
magnitude:{enumerable:!0,get(){return Na(Math.hypot(...this.head))}}},_={[Symbol.iterator]:{value:z(function*(){for(let l of this.
head)yield l},"value")},length:{enumerable:!0,value:n}};for(let l=0;l<n;l++)(p=>{_[p]={enumerable:!0,get:z(()=>a[p],"get"),
set:z(u=>{if(typeof u=="number")a[l]=u;else throw new TypeError("Expected Number")},"set")}})(l);return Object.create(null,
Object.assign({},i,s,_))}b(d,"d");o(d,"$");z(d,"makeVectorQuantity");var Dr=Float64Array.of(608311/1250200,35783/156275,
0,189793/714400,247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/5000800),ee=o(e=>{if(c(e)&&e.space.ident===
"display-p3"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=q(_)).multiply(Dr);return h(Y,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"display_p3_into_xyz_d65"),Pa=o(e=>{if(c(e)&&e.space.ident==="display-p3"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=q(_)).multiply(Dr).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error("Wro\
ng parameter passed: "+e)},"display_p3_into_xyz_d50"),Lr=Float64Array.of(1829569/896150,-851781/878810,16779/1248040,-506331/
896150,1648619/878810,-147721/1248040,-308931/896150,36519/878810,1266979/1248040),H=o(e=>{if(c(e)&&e.space.ident==="xyz\
-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(Lr).each((_,l,p)=>p[l]=ur(_));return h(Me,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"xyz_d65_into_a98_rgb"),Yo=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(Lr).each((_,l,p)=>p[l]=ur(_));return h(Me,[n,i,s])}else throw new Error("W\
rong parameter passed: "+e)},"xyz_d50_into_a98_rgb"),Fo=o(e=>H(ee(e)),"display_p3_into_a98_rgb"),Br=Float64Array.of(573536/
994567,591459/1989134,53769/1989134,263643/1420810,6239551/9945670,351524/4972835,187206/994567,374412/4972835,4929758/4972835),
re=o(e=>{if(c(e)&&e.space.ident==="a98-rgb"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=br(_)).multiply(Br);
return h(Y,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"a98_rgb_into_xyz_d65"),Ia=o(e=>{if(c(e)&&e.space.
ident==="a98-rgb"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=br(_)).multiply(Br).multiply(S.d65.d50);return h(
F,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"a98_rgb_into_xyz_d50"),He=Float64Array.of(12831/3959,-851781/
878810,705/12673,-329/214,1648619/878810,-2585/12673,-1974/3959,36519/878810,705/667),te=o(e=>{if(c(e)&&e.space.ident===
"xyz-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(He).each((_,l,p)=>p[l]=Z(_));return h(R,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"xyz_d65_into_srgb"),fe=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[r,t,a]=e.position,[
n,i,s]=d(r,t,a).multiply(He);return h(ge,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d65_into_srgb\
_linear"),Ve=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(
He).each((_,l,p)=>p[l]=Z(_));return h(R,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d50_into_srgb"),
Ur=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(He);return h(
ge,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d50_into_srgb_linear"),Gr=o(e=>te(re(e)),"a98_rgb_i\
nto_srgb"),Do=o(e=>fe(re(e)),"a98_rgb_into_srgb_linear"),Hr=o(e=>te(ee(e)),"display_p3_into_srgb"),Lo=o(e=>fe(ee(e)),"di\
splay_p3_into_srgb_linear"),ae=o((e,r,t)=>{let a=2*Math.PI,n=Math.PI/6;e<0&&(e+=a),e=e%a;let i=o(s=>{let _=(s+e/n)%12,l=r*
Math.min(t,1-t);return t-l*Math.max(-1,Math.min(_-3,9-_,1))},"f");return[i(0),i(8),i(4)]},"hsl_to_rgb"),Bo=o(e=>{if(c(e)&&
e.space.ident==="hsl"){let[r,t,a]=e.position,n=ae(t,r,a).map(i=>Math.min(Math.max(Math.round(i*255),0),255));return h(or,
n)}else throw new Error("Wrong parameter passed: "+e)},"hsl_into_rgb"),$a=o(e=>{if(c(e)&&e.space.ident==="hsl"){let[r,t,
a]=e.position,n=ae(t,r,a);return h(R,n)}else throw new Error("Wrong parameter passed: "+e)},"hsl_into_srgb"),Uo=o(e=>{if(c(
e)&&e.space.ident==="hsl"){let[r,t,a]=e.position,n=ae(t,r,a).map(i=>q(i));return h(ge,n)}else throw new Error("Wrong par\
ameter passed: "+e)},"hsl_into_srgb_linear"),Pe=o((e,r,t)=>{if(r+t>=1){let a=r/(r+t);return[a,a,a]}else{let[a,n,i]=ae(e,
1,.5).map(s=>s*(1-r-t)+r);return[a,n,i]}},"hwb_to_rgb"),Go=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,n=Pe(
t,r,a);return h(R,n)}else throw new Error("Wrong parameter passed: "+e)},"hwb_into_srgb"),Ho=o(e=>{if(c(e)&&e.space.ident===
"hwb"){let[r,t,a]=e.position,n=Pe(t,r,a).map(i=>q(i));return h(ge,n)}else throw new Error("Wrong parameter passed: "+e)},
"hwb_into_srgb_linear"),P=o(e=>{if(c(e)&&e.space.ident==="lab"){let r=903.2962962962963,t=216/24389,[a,n,i]=e,s=(a+16)/116,
_=n/500+s,l=Math.pow(_,3),p=s-i/200,u=Math.pow(p,3),v=(l>t?l:(116*_-16)/r)*B[0],y=(a>r*t?Math.pow((a+16)/116,3):a/r)*B[1],
E=(u>t?u:(116*p-16)/r)*B[2];return h(F,[v,y,E])}else throw new Error("Wrong parameter passed: "+e)},"lab_into_xyz_d50"),
cr=o(e=>{let r=P(e),[t,a,n]=d(r).multiply(S.d50.d65);return h(Y,[t,a,n])},"lab_into_xyz_d65"),Vr=o(e=>Ve(P(e)),"lab_into\
_srgb"),Vo=o(e=>Ur(P(e)),"lab_into_srgb_linear"),V=o(e=>{if(c(e)&&e.space.ident==="lch"){let[r,t]=e,a=e.position.drop(1).
next().value??NaN,n=t*Math.cos(a),i=t*Math.sin(a);return h(Fe,[r,n,i])}else throw new Error("Wrong parameter passed: "+e)},
"lch_into_lab"),Kr=o(e=>Ve(P(V(e))),"lch_into_srgb"),Ko=o(e=>Ur(P(V(e))),"lch_into_srgb_linear"),O=o(e=>{if(c(e)&&e.space.
ident==="oklab"){let r=Float64Array.of(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,.2158037573099136,-.0638541728258133,
-1.2914855480194092),t=Float64Array.of(1.2268798758459243,-.0405757452148008,-.0763729366746601,-.5578149944602171,1.112286803280317,
-.4214933324022432,.2813910456659647,-.0717110580655164,1.5869240198367816),[a,n,i]=e.position,[s,_,l]=d(i,a,n).multiply(
r).each((p,u,v)=>v[u]=p**3).multiply(t);return h(Y,[s,_,l])}else throw new Error("Wrong parameter passed: "+e)},"oklab_i\
nto_xyz_d65"),Jr=o(e=>{let[r,t,a]=d(O(e)).multiply(S.d65.d50);return h(F,[r,t,a])},"oklab_into_xyz_d50"),Xr=o(e=>te(O(e)),
"oklab_into_srgb"),Jo=o(e=>fe(O(e)),"oklab_into_srgb_linear"),oe=o(e=>{if(c(e)&&e.space.ident==="oklch"){let[r,t]=e,a=e.
position.drop(1).next().value??NaN,n=isNaN(a)?0:t*Math.cos(a),i=isNaN(a)?0:t*Math.sin(a);return h(Se,[r,n,i])}else throw new Error(
"Wrong parameter passed: "+e)},"oklch_into_oklab"),Qr=o(e=>te(O(oe(e))),"oklch_into_srgb"),Xo=o(e=>fe(O(oe(e))),"oklch_i\
nto_srgb_linear"),qr=o(e=>{let r=Math.abs(e);return r<=.03125?e/16:Math.sign(e)*Math.pow(r,1.8)},"to_linear"),dr=o(e=>{let r=Math.
abs(e);return r>=1/512?Math.sign(e)*Math.pow(r,1/1.8):16*e},"to_gamut"),Wa=Float64Array.of(.7977666449006423,.2880748288194013,
0,.13518129740053308,.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),gr=o(e=>{if(c(e)&&e.space.
ident==="prophoto-rgb"){let r=h(F,e.position.toArray());return d(r).each((t,a,n)=>n[a]=qr(t)).multiply(Wa),r}else throw new Error(
"Wrong parameter passed: "+e)},"prophoto_rgb_into_xyz_d50"),pe=o(e=>{let r=gr(e),t=h(Y,r.position.toArray());return d(t).
multiply(S.d50.d65),t},"prophoto_rgb_into_xyz_d65"),Zr=o(e=>te(pe(e)),"prophoto_rgb_into_srgb"),Qo=o(e=>fe(pe(e)),"proph\
oto_rgb_into_srgb_linear"),Ue=1.09929682680944,et=.018053968510807,yr=o(e=>{let r=Math.abs(e);return r<et*4.5?e/4.5:Math.
sign(e)*Math.pow((r+Ue-1)/Ue,1/.45)},"to_linear"),mr=o(e=>{let r=Math.abs(e);return r>et?Math.sign(e)*(Ue*Math.pow(r,.45)-
(Ue-1)):4.5*e},"to_gamut"),rt=Float64Array.of(63426534/99577255,26158966/99577255,4994106574466076e-32,20160776/139408157,
472592308/697040785,19567812/697040785,47086771/278816314,8267143/139408157,295819943/278816314),ne=o(e=>{if(c(e)&&e.space.
ident==="rec2020"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=yr(_)).multiply(rt);return h(Y,[n,i,s])}else
throw new Error("Wrong parameter passed: "+e)},"rec2020_into_xyz_d65"),Ta=o(e=>{if(c(e)&&e.space.ident==="rec2020"){let[
r,t,a]=e.position,[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=yr(_)).multiply(rt).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"rec2020_into_xyz_d50"),tt=o(e=>te(ne(e)),"rec2020_into_srgb"),qo=o(e=>fe(ne(e)),"rec2020\
_into_srgb_linear"),Zo=o(e=>e.position.map(Z),"gam_srgb"),en=o(e=>e.position.map(q),"lin_srgb"),Ke=Float64Array.of(506752/
1228815,87098/409605,7918/409605,87881/245763,175762/245763,87881/737289,12673/70218,12673/175545,1001167/1053270),K=o(e=>{
if(c(e)&&["rgb","srgb"].includes(e.space.ident)){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=q(_)).multiply(
Ke);return h(Y,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"srgb_into_xyz_d65"),he=o(e=>{if(c(e)&&e.space.
ident==="srgb-linear"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(Ke);return h(Y,[n,i,s])}else throw new Error("Wro\
ng parameter passed: "+e)},"srgb_linear_into_xyz_d65"),fr=o(e=>{if(c(e)&&["rgb","srgb"].includes(e.space.ident)){let[r,t,
a]=e.position,[n,i,s]=d(r,t,a).each((_,l,p)=>p[l]=q(_)).multiply(Ke).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"srgb_into_xyz_d50"),Ra=o(e=>{if(c(e)&&e.space.ident==="srgb-linear"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).multiply(Ke).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},
"srgb_linear_into_xyz_d50"),at=o(e=>H(K(e)),"srgb_into_a98_rgb"),rn=o(e=>H(he(e)),"srgb_linear_into_a98_rgb"),tn=o(e=>at(
$a(e)),"hsl_into_a98_rgb"),an=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position;if(r+a>=1){let n=r/(r+a);return h(
Me,[n,n,n])}else{let n=ae(t,1,.5).map(i=>i*(1-r-a)+r);return at(h(R,n))}}else throw new Error("Wrong parameter passed: "+
e)},"hwb_into_a98_rgb"),on=o(e=>H(cr(e)),"lab_into_a98_rgb"),nn=o(e=>H(cr(V(e))),"lch_into_a98_rgb"),sn=o(e=>H(O(e)),"ok\
lab_into_a98_rgb"),Ya=o(e=>Jr(oe(e)),"oklch_into_xyz_d50"),Fa=o(e=>O(oe(e)),"oklch_into_xyz_d65"),ln=o(e=>H(Fa(e)),"oklc\
h_into_a98_rgb"),_n=o(e=>H(pe(e)),"prophoto_rgb_into_a98_rgb"),pn=o(e=>H(ne(e)),"rec2020_into_a98_rgb"),hn=o(e=>e.position.
map(ur),"gam_a98"),bn=o(e=>e.position.map(br),"lin_a98"),ot=Float64Array.of(446124/178915,-14852/17905,11844/330415,-333277/
357830,63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),J=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[
r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(ot).each((_,l,p)=>p[l]=Z(_));return h(Le,[n,i,s])}else throw new Error("Wron\
g parameter passed: "+e)},"xyz_d65_into_display_p3"),nt=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(ot).each((_,l,p)=>p[l]=Z(_));return h(Le,[n,i,s])}else throw new Error("Wr\
ong parameter passed: "+e)},"xyz_d50_into_display_p3"),un=o(e=>J(re(e)),"a98_rgb_into_display_p3"),Da=o(e=>{if(c(e)&&e.space.
ident==="hsl"){let[r,t,a]=e.position,n=ae(t,r,a),i=h(R,n);return fr(i)}else throw new Error("Wrong parameter passed: "+e)},
"hsl_into_xyz_d50"),ve=o(e=>{if(c(e)&&e.space.ident==="hsl"){let[r,t,a]=e.position,n=ae(t,r,a),i=h(R,n);return K(i)}else
throw new Error("Wrong parameter passed: "+e)},"hsl_into_xyz_d65"),cn=o(e=>J(ve(e)),"hsl_into_display_p3"),La=o(e=>{if(c(
e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,n=Pe(t,r,a),i=h(R,n);return fr(i)}else throw new Error("Wrong parameter\
 passed: "+e)},"hwb_into_xyz_d50"),we=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,n=Pe(t,r,a),i=h(R,n);return K(
i)}else throw new Error("Wrong parameter passed: "+e)},"hwb_into_xyz_d65"),dn=o(e=>J(we(e)),"hwb_into_display_p3"),gn=o(
e=>nt(P(e)),"lab_into_display_p3"),yn=o(e=>nt(P(V(e))),"lch_into_display_p3"),mn=o(e=>J(O(e)),"oklab_into_display_p3"),fn=o(
e=>J(O(oe(e))),"oklch_into_display_p3"),vn=o(e=>J(pe(e)),"prophoto_rgb_into_display_p3"),wn=o(e=>J(ne(e)),"rec2020_into_\
display_p3"),xn=o(e=>J(K(e)),"srgb_into_display_p3"),zn=o(e=>J(he(e)),"srgb_linear_into_display_p3"),Sn=o(e=>e.position.
map(Z),"gam_p3"),kn=o(e=>e.position.map(q),"lin_p3"),Mn=o((e,r,t)=>"#"+Array.of(e,r,t).map(a=>a.toString(16).padStart(2,
"0")).join(""),"rgb_to_hex"),I=o((e,r,t)=>{let a=Math.max(e,r,t),n=Math.min(e,r,t),i=a-n,s=it(e,r,t),_=0,l=(n+a)/2;return i!==
0&&(_=l===0||l===1?0:(a-l)/Math.min(l,1-l)),_<0&&(s+=Math.PI,_=Math.abs(_)),_<=1e-5&&(s=NaN),[s*180/Math.PI,_*100,l*100]},
"rgb_to_hsl"),it=o((e,r,t)=>{let a=Math.max(e,r,t),n=Math.min(e,r,t),i=NaN,s=a-n;if(s!==0){switch(a){case e:i=(r-t)/s+(r<
t?6:0);break;case r:i=(t-e)/s+2;break;case t:i=(e-r)/s+4}i*=Math.PI/3}return i},"rgb_to_hue"),$=o((e,r,t)=>{let a=it(e,r,
t),n=Math.min(e,Math.min(r,t)),i=1-Math.max(e,Math.max(r,t));return[a*180/Math.PI,n*100,i*100]},"rgb_to_hwb"),Cn=o(e=>{let[
r,t,a]=Gr(e).position;return h(M,I(r,t,a))},"a98_rgb_into_hsl"),On=o(e=>{let[r,t,a]=Hr(e).position;return h(M,I(r,t,a))},
"display_p3_into_hsl"),jn=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,[n,i,s]=Pe(t,r,a),[_,l,p]=I(n,i,s);
return h(M,[_,l,p])}else throw new Error("Wrong parameter passed: "+e)},"hwb_into_hsl"),En=o(e=>{let[r,t,a]=Vr(e).position;
return h(M,I(r,t,a))},"lab_into_hsl"),An=o(e=>{let[r,t,a]=Kr(e).position;return h(M,I(r,t,a))},"lch_into_hsl"),Nn=o(e=>{
let[r,t,a]=Xr(e).position;return h(M,I(r,t,a))},"oklab_into_hsl"),Pn=o(e=>{let[r,t,a]=Qr(e).position;return h(M,I(r,t,a))},
"oklch_into_hsl"),In=o(e=>{let[r,t,a]=Zr(e).position;return h(M,I(r,t,a))},"prophoto_rgb_into_hsl"),$n=o(e=>{let[r,t,a]=tt(
e).position,[n,i,s]=I(r,t,a);return h(M,[n,i,s])},"rec2020_into_hsl"),Wn=o(e=>{if(c(e)&&["rgb","srgb"].includes(e.space.
ident)){let[r,t,a]=e.position,[n,i,s]=I(r,t,a);return h(M,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"\
srgb_into_hsl"),Tn=o(e=>{if(c(e)&&e.space.ident==="srgb-linear"){let[r,t,a]=e.position.map(_=>Z(_)),[n,i,s]=I(r,t,a);return h(
M,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"srgb_linear_into_hsl"),Rn=o(e=>{let[r,t,a]=Ve(e).position;
return h(M,I(r,t,a))},"xyz_d50_into_hsl"),Yn=o(e=>{let[r,t,a]=te(e).position;return h(M,I(r,t,a))},"xyz_d65_into_hsl"),Fn=o(
e=>{let[r,t,a]=Gr(e).position;return h(C,$(r,t,a))},"a98_rgb_into_hwb"),Dn=o(e=>{let[r,t,a]=Hr(e).position;return h(C,$(
r,t,a))},"display_p3_into_hwb"),Ln=o(e=>{if(c(e)&&e.space.ident==="hsl"){let[r,t,a]=e.position,[n,i,s]=ae(t,r,a);return h(
C,$(n,i,s))}else throw new Error("Wrong parameter passed: "+e)},"hsl_into_hwb"),Bn=o(e=>{let[r,t,a]=Vr(e).position;return h(
C,$(r,t,a))},"lab_into_hwb"),Un=o(e=>{let[r,t,a]=Kr(e).position;return h(C,$(r,t,a))},"lch_into_hwb"),Gn=o(e=>{let[r,t,a]=Xr(
e).position;return h(C,$(r,t,a))},"oklab_into_hwb"),Hn=o(e=>{let[r,t,a]=Qr(e).position;return h(C,$(r,t,a))},"oklch_into\
_hwb"),Vn=o(e=>{let[r,t,a]=Zr(e).position;return h(C,$(r,t,a))},"prophoto_rgb_into_hwb"),Kn=o(e=>{let[r,t,a]=tt(e).position;
return h(C,$(r,t,a))},"rec2020_into_hwb"),Jn=o(e=>{if(c(e)&&["rgb","srgb"].includes(e.space.ident)){let[r,t,a]=e.position;
return h(C,$(r,t,a))}else throw new Error("Wrong parameter passed: "+e)},"srgb_into_hwb"),Xn=o(e=>{if(c(e)&&e.space.ident===
"srgb-linear"){let[r,t,a]=e.position.map(n=>Z(n));return h(C,$(r,t,a))}else throw new Error("Wrong parameter passed: "+e)},
"srgb_linear_into_hwb"),Qn=o(e=>{let[r,t,a]=Ve(e).position;return h(C,$(r,t,a))},"xyz_d50_into_hwb"),qn=o(e=>{let[r,t,a]=te(
e).position;return h(C,$(r,t,a))},"xyz_d65_into_hwb"),st=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let r=h(Y,e.position.
toArray());return d(r).multiply(S.d50.d65),r}else throw new Error("Wrong parameter passed: "+e)},"xyz_d50_into_xyz_d65"),
x=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let r=h(F,e.position.toArray());return d(r).multiply(S.d65.d50),r}else throw new Error(
"Wrong parameter passed: "+e)},"xyz_d65_into_xyz_d50"),Ba=o(e=>f(x(e)),"xyz_d65_into_lab"),f=o(e=>{if(c(e)&&e.space.ident===
"xyz-d50"){let r=.008856451679035631,t=29**3/3**3,[a,n,i]=e.position.map((p,u)=>p/B[u]).map(p=>p>r?Math.cbrt(p):(t*p+16)/
116),s=116*n-16,_=500*(a-n),l=200*(n-i);return h(Fe,[s,_,l])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d5\
0_into_lab"),Zn=o(e=>{let r=re(e),t=x(r);return f(t)},"a98_rgb_into_lab"),ei=o(e=>{let r=ee(e),t=x(r);return f(t)},"disp\
lay_p3_into_lab"),ri=o(e=>{let r=ve(e),t=x(r);return f(t)},"hsl_into_lab"),ti=o(e=>{let r=we(e),t=x(r);return f(t)},"hwb\
_into_lab"),ai=o(e=>{let r=O(e),t=x(r);return f(t)},"oklab_into_lab"),oi=o(e=>{let r=oe(e),t=O(r),a=x(t);return f(a)},"o\
klch_into_lab"),ni=o(e=>{let r=gr(e);return f(r)},"prophoto_rgb_into_lab"),ii=o(e=>{let r=ne(e),t=x(r);return f(t)},"rec\
2020_into_lab"),si=o(e=>{let r=K(e),t=x(r);return f(t)},"srgb_into_lab"),li=o(e=>{let r=he(e),t=x(r);return f(t)},"srgb_\
linear_into_lab"),W=o(e=>{if(c(e)&&e.space.ident==="lab"){let[r,t,a]=e,n=Math.atan2(a,t)*(180/Math.PI),i=Math.hypot(t,a);
return h(ar,[r,i,n])}else throw new Error("Wrong parameter passed: "+e)},"lab_into_lch"),_i=o(e=>{let r=re(e),t=x(r),a=f(
t);return W(a)},"a98_rgb_into_lch"),pi=o(e=>{let r=ee(e),t=x(r),a=f(t);return W(a)},"display_p3_into_lch"),hi=o(e=>{let r=ve(
e),t=x(r),a=f(t);return W(a)},"hsl_into_lch"),bi=o(e=>{let r=we(e),t=x(r),a=f(t);return W(a)},"hwb_into_lch"),ui=o(e=>{let r=O(
e),t=x(r),a=f(t);return W(a)},"oklab_into_lch"),ci=o(e=>{let r=oe(e),t=O(r),a=x(t),n=f(a);return W(n)},"oklch_into_lch"),
di=o(e=>{let r=gr(e),t=f(r);return W(t)},"prophoto_rgb_into_lch"),gi=o(e=>{let r=ne(e),t=x(r),a=f(t);return W(a)},"rec20\
20_into_lch"),yi=o(e=>{let r=K(e),t=x(r),a=f(t);return W(a)},"srgb_into_lch"),mi=o(e=>{let r=he(e),t=x(r),a=f(t);return W(
a)},"srgb_linear_into_lch"),fi=o(e=>W(f(e)),"xyz_d50_into_lch"),vi=o(e=>W(Ba(e)),"xyz_d65_into_lch"),D=o(e=>{if(c(e)&&e.
space.ident==="xyz-d65"){let[r,t]=vr(),[a,n,i]=e.position,[s,_,l]=d(a,n,i).multiply(r).each((p,u,v)=>v[u]=Math.cbrt(p)).
multiply(t);return h(Se,[s*100,_,l])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d65_into_oklab"),Ua=o(e=>{
if(c(e)&&e.space.ident==="xyz-d50"){let[r,t]=vr(),[a,n,i]=e.position,[s,_,l]=d(a,n,i).multiply(S.d50.d65).multiply(r).each(
(p,u,v)=>v[u]=Math.cbrt(p)).multiply(t);return h(Se,[s*100,_,l])}else throw new Error("Wrong parameter passed: "+e)},"xy\
z_d50_into_oklab");function vr(){return[Float64Array.of(.819022437996703,.0329836539323885,.0481771893596242,.3619062600528904,
.9292868615863434,.2642395317527308,-.1288737815209879,.0361446663506424,.6335478284694309),Float64Array.of(.210454268309314,
1.9779985324311684,.0259040424655478,.7936177747023054,-2.42859224204858,.7827717124575296,-.0040720430116193,.450593709617411,
-.8086757549230774)]}b(vr,"tr");o(vr,"useTransitionMatrices");var wi=o(e=>D(re(e)),"a98_rgb_into_oklab"),xi=o(e=>D(ee(e)),
"display_p3_into_oklab"),zi=o(e=>{let r=ve(e);return D(r)},"hsl_into_oklab"),Si=o(e=>D(we(e)),"hwb_into_oklab"),lt=o(e=>{
let r=P(e),t=st(r);return D(t)},"lab_into_oklab"),ki=o(e=>{let r=V(e),t=P(r),a=st(t);return D(a)},"lch_into_oklab"),Mi=o(
e=>D(pe(e)),"prophoto_rgb_into_oklab"),Ci=o(e=>D(ne(e)),"rec2020_into_oklab"),Oi=o(e=>{let r=K(e);return D(r)},"srgb_int\
o_oklab"),ji=o(e=>{let r=he(e);return D(r)},"srgb_linear_into_oklab"),ie=o(e=>{let[r,t,a]=D(e),n=Math.hypot(t,a),i=n<.001?
NaN:Math.atan2(a,t)*180/Math.PI;return h(ke,[r,n,i])},"xyz_d65_into_oklch"),Ei=o(e=>{let[r,t,a]=Ua(e),n=Math.hypot(t,a),
i=n<.001?NaN:Math.atan2(a,t)*180/Math.PI;return h(ke,[r,n,i])},"xyz_d50_into_oklch"),Ai=o(e=>{let r=re(e);return ie(r)},
"a98_rgb_into_oklch"),Ni=o(e=>{let r=ee(e);return ie(r)},"display_p3_into_oklch"),Pi=o(e=>{let r=ve(e);return ie(r)},"hs\
l_into_oklch"),Ii=o(e=>{let r=we(e);return ie(r)},"hwb_into_oklch"),_t=o(e=>{if(c(e)&&e.space.ident==="oklab"){let[r,t,a]=e,
n=Math.hypot(t,a),i=n<.001?NaN:Math.atan2(a,t)*180/Math.PI;return h(ke,[r,n,i])}else throw new Error("Wrong parameter pa\
ssed: "+e)},"oklab_into_oklch"),$i=o(e=>_t(lt(e)),"lab_into_oklch"),Wi=o(e=>{let r=V(e),t=lt(r);return _t(t)},"lch_into_\
oklch"),Ti=o(e=>{let r=pe(e);return ie(r)},"prophoto_rgb_into_oklch"),Ri=o(e=>{let r=ne(e);return ie(r)},"rec2020_into_o\
klch"),Yi=o(e=>{let r=K(e);return ie(r)},"srgb_into_oklch"),Fi=o(e=>{let r=he(e);return ie(r)},"srgb_linear_into_oklch"),
pt=Float64Array.of(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,1.5082477428451468,0,-.05110186497554526,
.02052744743642139,1.2119675456389452),Di=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,
a).multiply(S.d65.d50).multiply(pt).each((_,l,p)=>p[l]=dr(_));return h(De,[n,i,s])}else throw new Error("Wrong parameter\
 passed: "+e)},"xyz_d65_into_prophoto_rgb"),L=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(
r,t,a).multiply(pt).each((_,l,p)=>p[l]=dr(_));return h(De,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"\
xyz_d50_into_prophoto_rgb"),Li=o(e=>L(Ia(e)),"a98_rgb_into_prophoto_rgb"),Bi=o(e=>L(Pa(e)),"display_p3_into_prophoto_rgb"),
Ga=o(e=>P(V(e)),"lch_into_xyz_d50"),Ui=o(e=>cr(V(e)),"lch_into_xyz_d65"),Gi=o(e=>L(Da(e)),"hsl_into_prophoto_rgb"),Hi=o(
e=>L(La(e)),"hwb_into_prophoto_rgb"),Vi=o(e=>L(P(e)),"lab_into_prophoto_rgb"),Ki=o(e=>L(Ga(e)),"lch_into_prophoto_rgb"),
Ji=o(e=>L(Jr(e)),"oklab_into_prophoto_rgb"),Xi=o(e=>L(Ya(e)),"oklch_into_prophoto_rgb"),Qi=o(e=>L(Ta(e)),"rec2020_into_p\
rophoto_rgb"),qi=o(e=>L(fr(e)),"srgb_into_prophoto_rgb"),Zi=o(e=>L(Ra(e)),"srgb_linear_into_prophoto_rgb"),es=o(e=>e.position.
map(dr),"gam_prophoto"),rs=o(e=>e.position.map(qr),"lin_prophoto"),ht=Float64Array.of(30757411/17917100,-19765991/29648200,
792561/44930125,-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/17917100,467509/29648200,42328811/44930125),
X=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(ht).each((_,l,p)=>p[l]=mr(_));
return h(Be,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d65_into_rec2020"),bt=o(e=>{if(c(e)&&e.space.
ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(ht).each((_,l,p)=>p[l]=mr(_));return h(
Be,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d50_into_rec2020"),ts=o(e=>X(re(e)),"a98_rgb_into_r\
ec2020"),as=o(e=>X(ee(e)),"display_p3_into_rec2020"),os=o(e=>X(ve(e)),"hsl_into_rec2020"),ns=o(e=>X(we(e)),"hwb_into_rec\
2020"),is=o(e=>bt(P(e)),"lab_into_rec2020"),ss=o(e=>bt(P(V(e))),"lch_into_rec2020"),ls=o(e=>X(O(e)),"oklab_into_rec2020"),
_s=o(e=>X(O(oe(e))),"oklch_into_rec2020"),ps=o(e=>X(pe(e)),"prophoto_rgb_into_rec2020"),hs=o(e=>X(K(e)),"srgb_into_rec20\
20"),bs=o(e=>X(he(e)),"srgb_linear_into_rec2020"),us=o(e=>e.position.map(mr),"gam_rec2020"),cs=o(e=>e.position.map(yr),"\
lin_rec2020");var Ha=Object.defineProperty,g=b((e,r)=>Ha(e,"name",{value:r,configurable:!0}),"r"),zr=g((e,r=12)=>{let t=r>0?10**r:1;return Math.
sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"round"),U=zr;function Va(e,r){if(!e)throw r??"Exception: somethin\
g unexpected happened."}b(Va,"_");g(Va,"assert");var ut=g(e=>typeof e=="number"||e instanceof Number,"isNumber"),Ka=g(e=>se(
e)&&Iterator.from(["minimum","maximum","from","to","value","length"]).every(r=>r in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(r=>r in e&&typeof e[r]=="function"),"isRange"),Ja=g(e=>e===!0||e===!1||e==="true"||
e==="on"||e==="off","isBoolean"),Xa=g(e=>se(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableO\
bject"),se=g(e=>e!==null&&typeof e=="object","isObject"),$e=g(e=>typeof e=="string","isString"),ys=g(e=>e===!0||e==="tru\
e"||e==="on","isTruthy"),Qa=g(e=>{if(ct(e)){let r=Iterator.from(["hsl","hwb","lab","lch","oklab","oklch","rgb"]);for(let t of r)
if(t===e)return!0}return!1},"isCAM"),qa=g(e=>$e(e)&&ro.has(e),"isColorChannelKey"),Za=g(e=>$e(e)&&eo.has(e),"isSpaceDime\
nsionID"),ct=g(e=>$e(e)&&to.has(e),"isSpaceID"),ms=g(e=>se(e)&&"ident"in e&&ct(e.ident)&&"CSYS"in e&&se(e.CSYS)&&"length"in
e.CSYS&&e.CSYS.length===3,"isColorSpace"),fs=g(e=>se(e)&&"ident"in e&&Za(e.ident)&&"short"in e&&qa(e.short)&&"domain"in e&&
Ka(e.domain),"isSpaceDimension"),vs=g(e=>se(e)&&e instanceof Iterator&&"alpha"in e&&ut(e.alpha),"isColorChannel"),eo=new Set(
["abscissa","angle","applicate","blackness","blue-yellow","blue","chroma","green","hue","lightness","ordinate","radius",
"green-red","red","saturation","whiteness"]),ro=new Set(["a","b","B","C","c","G","g","h","L","phi","R","r","rho","S","W",
"x","y","z","rho","phi"]),to=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec\
2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]);function ao(){let e=g(i=>Ja(i)||ut(i)||$e(i)||Xa(i)||i===null,
"isValidValue"),r=g(i=>se(i)&&Object.values(i).every(s=>e(s)),"isAditionalProperties"),t=!0,a=Array.from(arguments).filter(
i=>e(i)),n={};return Object.entries(Iterator.from(arguments).filter(i=>r(i)).next().value??{}).forEach(([i,s])=>n[i]={enumerable:t,
value:s}),Object.defineProperties(a,n)}b(ao,"ce");g(ao,"createTuple");var oo=g(e=>{let r=Object.getOwnPropertyNames(e);for(let t of r){
let a=e[t];se(a)&&oo(a)}return Object.freeze(e)},"deepFreeze"),no=(e=>(e.Rd="red",e.YlRd="yellow-red",e.Yl="yellow",e.GrYl=
"green-yellow",e.Gr="green",e.CyGr="cyan-green",e.Cy="cyan",e.BlCy="blue-cyan",e.Bl="blue",e.PrBl="purple-blue",e.Pr="pu\
rple",e.RdPr="red-purple",e))(no||{}),ws=g(e=>{let r=Math.PI/6,t=Math.trunc(e/r),a=U(e-t*r);t<0&&(t+=12),t>12&&(t-=12);let n=Iterator.
from(["red","yellow-red","yellow","green-yellow","green","cyan-green","cyan","blue-cyan","blue","purple-blue","purple","\
red-purple"]).drop(t).next().value,i=U(e/(2*Math.PI),9);return i<0&&(i+=1),i>1&&(i=U(i%1,9)),Object.defineProperties(new Number(
e),{angle:{enumerable:!0,value:Object.create(null,{signed:{enumerable:!0,value:e>Math.PI?-(Math.PI-e%Math.PI):e},unsigned:{
enumerable:!0,value:e<0?2*Math.PI+e:e},unit:{enumerable:!0,value:"rad"}})},as:{enumerable:!0,value:Object.create(null,{deg:{
enumerable:!0,value:U(360*i,2)},grad:{enumerable:!0,value:U(400*i,2)},rad:{enumerable:!0,value:U(e,9)},turn:{enumerable:!0,
value:U(i,9)}})},deviation:{enumerable:!0,value:a},family:{enumerable:!0,value:n},toString:{value:g(function(){return this.
angle.signed+this.angle.unit},"value")}})},"makeHueAttribute"),xs=g(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),zs=g((e,r="",t=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]+/,
"g"),"").trim().split(" ").map((a,n)=>t||0<n?a[0].toUpperCase().concat(a.slice(1)):a).join(r),"toPascalCase"),Je=String.
raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,dt=`${Je}${Je}${Je}(?:/${Je})?`,Ie=String.raw`a-f\d`,io=String.
raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,so=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
wr=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),gt=new RegExp(`^${io}\\(${dt}\\)$`,"i"),xr=new RegExp(`^col\
or\\(${so} ${dt}\\)$`,"i"),lo=`#?[${Ie}]{3}[${Ie}]?`,_o=`#?[${Ie}]{6}([${Ie}]{2})?`,yt=new RegExp(`[^#${Ie}]`,"gi"),mt=new RegExp(
`^${lo}$|^${_o}$`,"i"),ft=g(e=>yt.test(e)===!1&&mt.test(e),"isHEXColor"),po=g(e=>typeof e=="string"&&(ft(e)||gt.test(e)||
xr.test(e)),"isCSSColor"),Ss=g(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),vt=g((e,r=[NaN,NaN,NaN],t=1)=>{let a=t<1?" / "+(t<1e-4?"none":t):"",[n,i,s]=r.map(_=>_.toString());
return Qa(e)?`${e}(${n} ${i} ${s}${a})`:`color(${e} ${n} ${i} ${s}${a})`},"makeCSSColor"),ks=g(e=>{if(ft(e))return ho(e);
if(po(e)){let r=(xr.test(e)?xr.exec(e)?.slice(1):gt.exec(e)?.slice(1))??Array.of("none","none","none",void 0),t=r.pop()??
1;$e(t)&&(t=Xe(t));let a=r.shift(),n=a==="rgb",i=Iterator.from(r.map(s=>s?wr.test(s)?wt(s):n?Xe(s,255):Xe(s):NaN));return[
a,i,t]}throw new TypeError(`Expected a valid representation that defined as the <color> CSS data type, but passed "${e}"\
.`)},"parseCSSColor"),ho=g(e=>{if(yt.test(e)||!mt.test(e))throw new TypeError("Expected a valid hex string");e.startsWith(
"#")&&(e=e.slice(1));let r=1;e.length===8&&(r=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(r=parseInt(e.
slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(2));let t=parseInt(
e,16);return["rgb",Iterator.from([t>>16&255,t>>8&255,t&255]),r]},"parseHEXColor");function wt(e){let r=NaN;if(wr.test(e)){
let t=wr.exec(e).slice(1),a=t[1],n=a==="grad",i=a==="rad",s=a==="turn";r=U(parseFloat(t[0])*(n?180/200:i?180/Math.PI:s?360:
1)),Math.abs(r)>360&&(r=U(r%360)),r<0&&(r+=360)}return r}b(wt,"F");g(wt,"parseCSSAngleValue");function Xe(e,r=1){if(e===
"none")return NaN;let t=parseFloat(e);return e.endsWith("%")&&(t=U(t*r/100)),t}b(Xe,"d");g(Xe,"parseCSSColorComponent");var xt=b(e=>{let r=er(e);if(Er(r)){let{colorSpace:t,components:a,alpha:n}=r.$value;if(hr.has(t)){let i=hr.get(t),s=i.CAM??
i.CSYS;a=a.map((_,l)=>(s[l].precision?zr(_,s[l].precision):_)+(s[l].unit??""))}return vt(t,a,n)}return r},"token");var bo="import-design-tokens",uo="token",zt="postcss-protosite-design-tokens",co=b((e={})=>{let r={importAtRuleName:bo,valueFunctionName:uo,
...e},t=new RegExp(r.valueFunctionName+"\\(\\W?((?:\\w+)(?:.\\w+)+)\\W?\\)","g");return{postcssPlugin:zt,async Once(a,n){
let i=new Map;a.walkAtRules(s=>{if(s.name.toLowerCase()!==r.importAtRuleName)return;let _=s.params.replace(/[^\s\w-]+/g,
"").replace(/[\s]+/g," ").trim().split(" ").at(0);i.set(_,{filePath:s.source.input.file,node:s}),s.remove()});for(let[s,
_]of i.entries()){try{await Ir(s)}catch(l){_.node.warn(n.result,`Failed to import design tokens from "${s}" with error:
	`+(l instanceof Error?l.message:l));continue}n.result.messages.push({type:"dependency",plugin:zt,file:s,parent:_.filePath})}},
Declaration(a,{result:n}){if(a.value.toLowerCase().startsWith(r.valueFunctionName))try{let i=a.value.matchAll(t).toArray().
at(0).at(1);a.value=xt(i).toString()}catch(i){a.warn(n,`Failed to parse and transform "${a.value}" with error:
	`+(i instanceof Error?i.message:i))}}}},"PostCSSPlugin");co.postcss=!0;export{co as PostCSSPlugin,Ir as importDesignTokens,xt as token};
