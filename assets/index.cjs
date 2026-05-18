
const importMetaUrl = /* @__PURE__ */ require("node:url").pathToFileURL(__filename).toString();
const importMetaFilename = /* @__PURE__ */ __filename;
const importMetaDirname = /* @__PURE__ */ __dirname;
const importMetaResolve = /* @__PURE__ */ require.resolve;
var Nt=Object.create;var ze=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var It=Object.getOwnPropertyNames;var $t=Object.getPrototypeOf,Wt=Object.prototype.hasOwnProperty;var u=(e,r)=>ze(e,"name",{value:r,configurable:!0});var Tt=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Rt=(e,r)=>{for(var t in r)ze(e,t,{get:r[t],enumerable:!0})},
Mr=(e,r,t,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of It(r))!Wt.call(e,n)&&n!==t&&ze(e,n,{get:()=>r[n],
enumerable:!(a=Pt(r,n))||a.enumerable});return e};var Yt=(e,r,t)=>(t=e!=null?Nt($t(e)):{},Mr(r||!e||!e.__esModule?ze(t,"default",{value:e,enumerable:!0}):t,e)),Ft=e=>Mr(ze(
{},"__esModule",{value:!0}),e);var Er=Tt((wo,jr)=>{"use strict";var Dt=u(function(r){return Lt(r)&&!Bt(r)},"isMergeableObject");function Lt(e){return!!e&&
typeof e=="object"}u(Lt,"isNonNullObject");function Bt(e){var r=Object.prototype.toString.call(e);return r==="[object Re\
gExp]"||r==="[object Date]"||Ht(e)}u(Bt,"isSpecial");var Ut=typeof Symbol=="function"&&Symbol.for,Gt=Ut?Symbol.for("reac\
t.element"):60103;function Ht(e){return e.$$typeof===Gt}u(Ht,"isReactElement");function Vt(e){return Array.isArray(e)?[]:
{}}u(Vt,"emptyTarget");function Se(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ue(Vt(e),e,r):e}u(Se,"cloneUnlessOth\
erwiseSpecified");function Kt(e,r,t){return e.concat(r).map(function(a){return Se(a,t)})}u(Kt,"defaultArrayMerge");function Jt(e,r){
if(!r.customMerge)return ue;var t=r.customMerge(e);return typeof t=="function"?t:ue}u(Jt,"getMergeFunction");function Xt(e){
return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.
call(e,r)}):[]}u(Xt,"getEnumerableOwnPropertySymbols");function Cr(e){return Object.keys(e).concat(Xt(e))}u(Cr,"getKeys");
function Or(e,r){try{return r in e}catch{return!1}}u(Or,"propertyIsOnObject");function Qt(e,r){return Or(e,r)&&!(Object.
hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}u(Qt,"propertyIsUnsafe");function qt(e,r,t){var a={};return t.
isMergeableObject(e)&&Cr(e).forEach(function(n){a[n]=Se(e[n],t)}),Cr(r).forEach(function(n){Qt(e,n)||(Or(e,n)&&t.isMergeableObject(
r[n])?a[n]=Jt(n,t)(e[n],r[n],t):a[n]=Se(r[n],t))}),a}u(qt,"mergeObject");function ue(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||
Kt,t.isMergeableObject=t.isMergeableObject||Dt,t.cloneUnlessOtherwiseSpecified=Se;var a=Array.isArray(r),n=Array.isArray(
e),i=a===n;return i?a?t.arrayMerge(e,r,t):qt(e,r,t):Se(r,t)}u(ue,"deepmerge");ue.all=u(function(r,t){if(!Array.isArray(r))
throw new Error("first argument should be an array");return r.reduce(function(a,n){return ue(a,n,t)},{})},"deepmergeAll");
var Zt=ue;jr.exports=Zt});var fo={};Rt(fo,{PostCSSPlugin:()=>At,importDesignTokens:()=>tr,token:()=>kr});module.exports=Ft(fo);var Yr=Yt(Er(),1),Fr=require("node:fs"),Dr=require("node:path");var Nr=require("node:fs/promises"),Pr=require("node:path"),Ir=require("node:url");var ea=/^{(?:\w+)(?:.\w+)+}$/,$r=u(async e=>{if(ra(e)&&(e.startsWith(".")?e=importMetaResolve("../assets/"+e):e=importMetaResolve(
e),Ar(e)&&(e=(0,Ir.fileURLToPath)(e)),(0,Pr.isAbsolute)(e)))return await(0,Nr.readFile)(e,{encoding:"utf8"});if(Ar(e))return await fetch(
e).then(r=>r.json());throw new Error("Wrong Reference: "+e.toString())},"deref"),Re=u(e=>typeof e=="string"&&ea.test(e),
"isInternalReference"),ra=u(e=>(e.startsWith("file:")||e.startsWith("node:")||e.endsWith("://"))===!1,"isSpecifierOrPath"),
Ar=u(e=>{try{let{protocol:r}=new URL(e);return r.startsWith("file:")||r.startsWith("node:")||r.endsWith("://")}catch{return!1}},
"isURL");var Wr=u(e=>ce(e)&&Q(e.$value)&&e.$type==="color","isColorToken"),Q=u(e=>e!==null&&typeof e=="object","isObject"),ce=u(e=>Q(
e)&&"$type"in e&&"$value"in e,"isToken"),Tr=u(e=>ce(e)&&Q(e.$value)&&e.$type==="shadow","isShadowToken");var Ye=new Map,er=u(e=>{if(Ye.has(e))return Ye.get(e);throw new Error(`Token "${e}" not found`)},"getToken");var Rr=u((e,r)=>{if(Re(r)){let t=er(r.slice(1,-1));Ye.set(e,t);return}if(ce(r)){let t={$type:r.$type,$value:r.$value};"$\
description"in r&&(t.$description=r.$description),"$metadata"in r&&(t.$metadata=r.$metadata),Ye.set(e,t);return}throw new Error(
`Failed setting: token '${e}' is ${JSON.stringify(r)}. See https://tr.designtokens.org/format/`)},"setToken");var ta=["$description","$metadata","$type","$value"],rr=u(async e=>{let r=Object.keys(e).sort(),t={};for(let a of r)if(a===
"$ref"){let n=await $r(e.$ref);n=await rr(JSON.parse(n)),Object.assign(t,n)}else if(ta.includes(a))t[a]=e[a];else{let n=Q(
e[a])?await rr(e[a]):e[a];Q(t[a])&&Q(n)?t[a]=(0,Yr.default)(t[a],n):t[a]=n}return Object.seal(t)},"parseSourceContent"),
Lr=u((e,r=[])=>{let t=Object.keys(e);for(let a of t){let n=[...r,a],i=e[a];(Re(i)||ce(i))&&Rr(n.join("."),i),Q(i)&&Lr(i,
n)}},"retrieveDesignTokens"),tr=u(async e=>{let r=(0,Dr.resolve)(importMetaDirname,"../assets",e+".tokens"),t=(0,Fr.readFileSync)(
r,{encoding:"utf8"}),a=await rr(JSON.parse(t));Lr(a)},"importDesignTokens");var aa=Object.defineProperty,o=u((e,r)=>aa(e,"name",{value:r,configurable:!0}),"o"),oa=Object.defineProperty,G=o((e,r)=>oa(
e,"name",{value:r,configurable:!0}),"r");function Fe(...e){let[r,t]=e.length===1?Array.of(0,e[0]):Array.of(Math.min(...e),
Math.max(...e)),a=Object.create(null,{0:{value:r},1:{value:t},[Symbol.iterator]:{value:G(function*(){yield this[0],yield this[1]},
"value")},[Symbol.toStringTag]:{get(){return`Range: ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){return this[0]+
this.value/2}},length:{value:2},value:{enumerable:!0,get(){return this[1]-this[0]}},toString:{value:G(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(a,{from:{enumerable:!0,value:r},to:{enumerable:!0,value:t},allot:{
value:G(function(n){return this.test(n)?n:n>this.from?(n-this.to)%this.value+this.from:this.to-(this.from-n)%this.value},
"allocateOuterValue")},clamp:{value:G(function(n){return this.test(n)?n:Math.max(Math.min(n,this.to),this.from)},"restri\
ctOuterValue")},test:{value:G(function(n){return this.from<=n&&n<=this.to},"value")}}),a}u(Fe,"fo");o(Fe,"g");G(Fe,"init\
Range");function lr(e=[0,100],r=[0,1]){let[t,a]=r,[n,i]=e,[s,p]=[a-t,i-n];function l(b){return typeof b=="string"&&(b=parseFloat(
b)),_.domain.test(b)===!1&&(b=b>a?(b-a)%s+t:a-(t-b)%s),p*(b-t)/s+n}u(l,"_"),o(l,"c"),G(l,"invert");function _(b){return typeof b==
"string"&&(b=parseFloat(b)),_.range.test(b)===!1&&(b=b>i?(b-i)%p+n:i-(n-b)%p),s*(b-n)/p+t}return u(_,"l"),o(_,"l"),G(_,"\
calculator"),Object.defineProperties(_,{domain:{enumerable:!0,value:Fe(t,a)},range:{enumerable:!0,value:Fe(n,i)},invert:{
enumerable:!0,value:l}})}u(lr,"xo");o(lr,"y");G(lr,"initScale");var na=Object.defineProperty,ia=o((e,r)=>na(e,"name",{value:r,
configurable:!0}),"o"),sa=ia((e,r=12)=>{let t=r>0?10**r:1;return Math.sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/
t},"round"),m=sa,ar=lr([0,360],[-Math.PI,Math.PI]),_r=Object.freeze({bytes:8,domain:ar.domain,ident:"angle",input:o(e=>ar.
domain.allot(m(e*Math.PI/180)),"input"),output:o(e=>ar.range.allot(m(e*180/Math.PI)),"output"),short:"phi",tcoord:"polar",
tgeom:"azimuth",unit:"rad"}),la=Object.defineProperty,de=o((e,r)=>la(e,"name",{value:r,configurable:!0}),"e");function w(...e){
let[r,t]=e.length===1?Array.of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),a=Object.create(null,{0:{value:r},1:{value:t},
[Symbol.iterator]:{value:de(function*(){yield this[0],yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range:\
 ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,get(){return this[0]+this.value/2}},length:{value:2},value:{
enumerable:!0,get(){return this[1]-this[0]}},toString:{value:de(function(){return this[0]+","+this[1]},"value")}});return Object.
defineProperties(a,{from:{enumerable:!0,value:r},to:{enumerable:!0,value:t},allot:{value:de(function(n){return this.test(
n)?n:n>this.from?(n-this.to)%this.value+this.from:this.to-(this.from-n)%this.value},"allocateOuterValue")},clamp:{value:de(
function(n){return this.test(n)?n:Math.max(Math.min(n,this.to),this.from)},"restrictOuterValue")},test:{value:de(function(n){
return this.from<=n&&n<=this.to},"value")}}),a}u(w,"h");o(w,"l");de(w,"initRange");var Oe=Object.freeze({$coord:_r,bytes:8,
domain:w(0,360),ident:"hue",short:"h",input:o(e=>Oe.domain.allot(e),"input"),output:o(e=>isNaN(e)?NaN:e<1e-6?0:m(e,6),"o\
utput"),precision:2,unit:"deg"}),je=Object.freeze({bytes:8,domain:w(0,1),ident:"applicate",short:"z",tcoord:"cartesian-c\
oordinate-axis",tgeom:"directed-line"}),Ee=Object.freeze({$coord:je,bytes:8,domain:w(0,100),ident:"lightness",input:o(e=>m(
e/100),"input"),output:o(e=>m(e*100),"output"),short:"L",precision:2,unit:"%"}),me=Object.freeze({bytes:8,domain:w(0,1),
ident:"radius",short:"rho",tcoord:"polar",tgeom:"reference-ray"}),_a=Object.freeze({$coord:me,bytes:8,domain:w(0,100),ident:"\
saturation",input:o(e=>m(e/100),"input"),output:o(e=>m(e*100),"output"),short:"S",precision:2,unit:"%"}),pa=Object.defineProperty,
ge=o((e,r)=>pa(e,"name",{value:r,configurable:!0}),"n"),ha=ge(e=>e!==null&&typeof e=="object","isObject"),ba=ge(e=>ha(e)&&
"ident"in e&&"short"in e&&"domain"in e,"isDimension");function N(e,r,t){let a=Iterator.from(t===void 0?[e,r]:[e,r,t]),n=t===
void 0?2:3;for(let p of a.take(n))if(ba(p)===!1)throw new TypeError("Passed wrong space dimension: "+JSON.stringify(p,void 0,
2));let i=a.take(n).filter(p=>p.tgeom==="azimuth"||p.tgeom==="reference-ray").toArray().length===2?n===3?"cylinder":"cir\
cle":n===3?"cube":"plane",s=Object.create(null,{0:{enumerable:!0,value:e},1:{enumerable:!0,value:r},length:{enumerable:!0,
value:n},tgeom:{enumerable:!0,value:i},entries:{value:ge(function*(){yield[0,this[0]],yield[1,this[1]],this.length===3&&
(yield[2,this[2]])},"value")},toArray:{value:ge(function(){return Array.of(...this)},"value")},[Symbol.iterator]:{value:ge(
function*(){yield this[0],yield this[1],this.length===3&&(yield this[2])},"value")}});return n===3&&Object.defineProperty(
s,2,{enumerable:!0,value:t}),p=>p===void 0?s:Object.defineProperties(s,p)}u(N,"v");o(N,"j");ge(N,"defCSYS");var Wo=N(me,
_r)({adapt:{enumerable:!0,value:pr}});function pr(e=0,r=NaN){return[e*Math.cos(r),e*Math.sin(r)]}u(pr,"bo");o(pr,"calcCa\
rtesianCoordinates");var He=N(me,_r,je)({adapt:{value:Br}});function Br(e,r,t){return[...pr(e,r),t]}u(Br,"xr");o(Br,"cal\
cCubeCoordinates");var B=Float64Array.of(.9642956764295677,1,.8251046025104602);Object.defineProperty(B,"ident",{value:"\
d50"});Object.freeze(B.buffer);var q=Float64Array.of(.3127/.329,1,(1-.3127-.329)/.329);Object.defineProperty(q,"ident",{
value:"d65"});Object.freeze(q.buffer);var M={CAM:N(Oe,_a,Ee)(),CSYS:He,ident:"hsl",whp:q},ua=Object.freeze({$coord:je,bytes:8,
domain:w(0,100),ident:"blackness",input:o(e=>m(e/100),"input"),output:o(e=>m(e*100),"output"),short:"B",precision:2,unit:"\
%"}),ca=Object.freeze({$coord:me,ident:"whiteness",bytes:8,domain:w(0,100),input:o(e=>m(e/100),"input"),output:o(e=>m(e*
100),"output"),short:"W",precision:2,unit:"%"}),C={CAM:N(Oe,ca,ua)(),CSYS:He,ident:"hwb",whp:q},Ae=Object.freeze({bytes:8,
domain:w(-1,1),ident:"abscissa",short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"}),da=Object.freeze({$coord:Ae,
bytes:8,domain:w(-125,125),ident:"green-red",input:o(e=>m(e/125),"input"),output:o(e=>m(e*125),"output"),precision:2,short:"\
a"}),ga=Object.freeze({$coord:Ae,bytes:8,domain:w(-.4,.4),ident:"green-red",precision:6,short:"a"}),Ne=Object.freeze({bytes:8,
domain:w(-1,1),ident:"ordinate",short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed-line"}),ya=Object.freeze({$coord:Ne,
domain:w(-125,125),ident:"blue-yellow",input:o(e=>m(e/125),"input"),output:o(e=>m(e*125),"output"),precision:2,short:"b"}),
ma=Object.freeze({$coord:Ne,domain:w(-.4,.4),ident:"blue-yellow",precision:6,short:"b"}),To=N(Ae,Ne)({adapt:{value:hr}});
function hr(e,r){let t=0,a=NaN;return(e!==0||r!==0)&&(t=Math.sqrt(e**2+r**2),e!==0&&!r||r!==0&&!e?a=r/Math.abs(r)*(Math.
PI/2):a=Math.atan(r/e)),[t,a]}u(hr,"ho");o(hr,"calcPolarCoordinates");var Pe=N(Ae,Ne,je)({adapt:{value:Ur}});function Ur(e,r,t){
return[...hr(e,r),t]}u(Ur,"dr");o(Ur,"calcCylindricalCoordinates");var De=Object.freeze({CAM:N(Ee,da,ya)(),CSYS:Pe,ident:"\
lab",whp:B}),fa=Object.freeze({$coord:me,bytes:8,domain:w(0,150),ident:"chroma",input:o(e=>m(e/150),"input"),output:o(e=>m(
e*150),"output"),precision:2,short:"C"}),va=Object.freeze({$coord:me,bytes:8,domain:w(0,.4),ident:"chroma",precision:6,short:"\
c"}),or=Object.freeze({CAM:N(Ee,fa,Oe)(),CSYS:He,ident:"lch",whp:B}),ke=Object.freeze({CAM:N(Ee,ga,ma)(),CSYS:Pe,ident:"\
oklab",whp:q}),Me={CAM:N(Ee,va,Oe)(),CSYS:He,ident:"oklch",whp:q},wa=Object.freeze({$coord:je,bytes:1,domain:w(0,255),ident:"\
blue",input:o(e=>m(e/255),"input"),output:o(e=>m(e*255,0)&255,"output"),short:"B"}),xa=Object.freeze({$coord:Ne,bytes:1,
domain:w(0,255),ident:"green",input:o(e=>m(e/255),"input"),output:o(e=>m(e*255,0)&255,"output"),short:"G"}),za=Object.freeze(
{$coord:Ae,bytes:1,domain:w(0,255),ident:"red",input:o(e=>m(e/255),"input"),output:o(e=>m(e*255,0)&255,"output"),short:"\
R"}),_e=Pe,Le=Object.freeze({ident:"prophoto-rgb",CSYS:_e,luminance:w(160,640),whp:B}),fe=q,nr=Object.freeze({ident:"rgb",
CAM:N(za,xa,wa)(),CSYS:_e,whp:fe}),R=Object.freeze({ident:"srgb",CSYS:_e,whp:fe}),ye=Object.freeze({ident:"srgb-linear",
CSYS:_e,whp:fe}),Ce=Object.freeze({ident:"a98-rgb",CSYS:_e,whp:fe}),Be=Object.freeze({ident:"display-p3",CSYS:_e,whp:fe}),
Ue=Object.freeze({ident:"rec2020",CSYS:_e,whp:fe}),Y=Object.freeze({ident:"xyz-d65",CSYS:Pe,whp:q}),F=Object.freeze({ident:"\
xyz-d50",CSYS:Pe,whp:B}),br=new Map([[M.ident,M],[C.ident,C],[De.ident,De],[or.ident,or],[ke.ident,ke],[Me.ident,Me],[Ue.
ident,Ue],[Be.ident,Be],[Ce.ident,Ce],[Le.ident,Le],[nr.ident,nr],[ye.ident,ye],[R.ident,R],[F.ident,F],[Y.ident,Y]]),ur=o(
e=>Math.sign(e)*Math.pow(Math.abs(e),2.19921875),"to_linear"),cr=o(e=>Math.sign(e)*Math.pow(Math.abs(e),256/563),"to_gam\
ut"),Z=o(e=>{let r=Math.abs(e);return r<=.04045?e/12.92:Math.sign(e)*m(Math.pow((r+.055)/1.055,2.4))},"to_linear"),ee=o(
e=>{let r=Math.abs(e);return r>.0031308?Math.sign(e)*m(1.055*Math.pow(r,1/2.4)-.055):12.92*e},"to_gamut"),S={d65:{d50:Float64Array.
of(1.0479297925449969,.02962780877005599,-.009243040646204504,.022946870601609652,.9904344267538799,.015055191490298152,
-.05019226628920524,-.017073799063418826,.7518742814281371)},d50:{d65:Float64Array.of(.955473421488075,-.0283697093338637,
.012314014864481998,-.02309845494876471,1.0099953980813041,-.020507649298898964,.06325924320057072,.021041441191917323,1.330365926242124)}},
Sa=Object.defineProperty,k=o((e,r)=>Sa(e,"name",{value:r,configurable:!0}),"t"),Gr=k(e=>typeof e=="number"||e instanceof
Number,"isNumber"),ka=k((e,r=12)=>{let t=r>0?10**r:1;return Math.sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"\
round"),Hr=k(e=>ir(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableObject"),ir=k(e=>e!==null&&
typeof e=="object","isObject"),Ma=k(e=>typeof e=="string","isString"),Ca=k(e=>Ma(e)&&Oa.has(e),"isSpaceID"),Vr=k(e=>ir(e)&&
"ident"in e&&Ca(e.ident)&&"CSYS"in e&&ir(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),Oa=new Set(["a98-\
rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz\
-d50","xyz-d65"]),c=k(e=>Hr(e)&&Iterator.from(e).every(r=>Gr(r))&&"length"in e&&e.length===3&&"space"in e&&Vr(e.space),"\
isPointInSpace");function h(e,r){if(Vr(e)===!1)throw new TypeError("Point must be declared in a valid color space instea\
d of "+JSON.stringify(e,void 0,2));if((Hr(r)&&Iterator.from(r).every(l=>Gr(l)))===!1)throw new TypeError("Point in space\
 has valid coordinates. Wrong parameters: "+JSON.stringify(r,void 0,2));let t=e.CSYS.length,a=new Float64Array(t),n=e.CAM===
void 0?Array.of(0,1,2):e.CAM.toArray().map(l=>e.CSYS.toArray().findIndex(_=>l.$coord===_)),i={[Symbol.iterator]:{value:k(
function*(){yield this[0],yield this[1],yield this[2]},"value")},length:{value:t}},s=(l=>({adapted:{get(){if(typeof this.
space.CSYS.adapt=="function"){let[_,b,f]=this.position;return Iterator.from(this.space.CSYS.adapt(_,b,f))}else return this.
position}},position:{get(){return Object.defineProperties(l.values(),{length:{value:3},space:{value:e}})},set(_){l.set(_)}},
set:{value:k(function(_){let b=Array.from(_),f=Math.min(b.length,3);for(let y=0;y<f;y++)this[y]=b[y];return this},"value")}}))(
a);for(let l=0;l<t;l++)((_,b,f)=>{s[_]={get(){let{CAM:y,CSYS:E}=this.space,j=f[b],A=E[b];"output"in A&&typeof A.output==
"function"&&(j=A.output(j));let T=y!==void 0&&y[_];T&&typeof T.output=="function"&&(j=T.output(j));let{precision:Te=9,unit:be=""}=T||
A;return Object.defineProperties(new Number(j),{digits:{enumerable:!0,value:Te},toString:{value:k(function(){return isNaN(
this)?"none":(Number.isInteger(this)?this:ka(this,Te))+be},"value")},unit:{enumerable:!0,value:be}})},set(y){let{CAM:E,CSYS:j}=this.
space,A=j[b],T=E!==void 0?E[_]:null;T!==null&&"input"in T&&typeof T.input=="function"&&(y=T.input(y)),"input"in A&&typeof A.
input=="function"&&(y=A.input(y)),typeof y=="string"&&(y=parseFloat(y)),f[b]=y}}})(l,n[l],a);let p={buffer:{value:a.buffer},
equals:{value:k(function(l,_=1e-12){let[b,f,y]=this.position,[E,j,A]=l.position;return this.space.ident===l.space.ident&&
Math.abs(b-E)<=_*Math.max(1,Math.abs(b),Math.abs(E))&&Math.abs(f-j)<=_*Math.max(1,Math.abs(f),Math.abs(j))&&Math.abs(y-A)<=
_*Math.max(1,Math.abs(y),Math.abs(A))},"value")},entries:{value:k(function(){let l=this.space.CAM??this.space.CSYS;return Iterator.
from([[l[0],this[0]],[l[1],this[1]],[l[2],this[2]]])},"value")},space:{value:e},values:{value:k(function(){return Iterator.
from(this).map(l=>l.valueOf())},"value")}};return Object.create(null,{...p,...i,...s,[Symbol.toStringTag]:{get(){return`\
PointInSpace: [${this.toString()}] \u2208 ${this.space.ident.toUpperCase()}`}},toString:{value:k(function(){return Iterator.
from(this).toArray().toString()},"value")}}).set(r)}u(h,"p");o(h,"_");k(h,"initPointInSpace");var ja=Object.defineProperty,
z=o((e,r)=>ja(e,"name",{value:r,configurable:!0}),"t"),Ea=z(e=>typeof e=="number"||e instanceof Number,"isNumber"),Kr=z(
e=>sr(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableObject"),sr=z(e=>e!==null&&typeof e=="o\
bject","isObject"),Aa=z(e=>typeof e=="string","isString"),Na=z(e=>Aa(e)&&Ia.has(e),"isSpaceID"),Pa=z(e=>sr(e)&&"ident"in
e&&Na(e.ident)&&"CSYS"in e&&sr(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),Ia=new Set(["a98-rgb","disp\
lay-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz\
-d65"]),$a=z(e=>Kr(e)&&Iterator.from(e).every(r=>Ea(r))&&"length"in e&&e.length===3&&"space"in e&&Pa(e.space),"isPointIn\
Space"),Wa=z((e,r=12)=>{let t=r>0?10**r:1;return Math.sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"round");function d(e,r=0,t=0){
let a=$a(e)?new Float64Array(e.buffer):Float64Array.of(e,r,t),{length:n}=a,i={each:{value:z(function(l){for(let _=0;_<this.
length;_++)l(this[_],_,this);return this},"value")},multiply:{value:z(function(l){if(Kr(l)){let[_,b,f,y,E,j,A,T,Te]=l,[be,
qe,Ze]=this.head;return this.update(be*_+qe*y+Ze*A,be*b+qe*E+Ze*T,be*f+qe*j+Ze*Te)}else throw new TypeError("Unsupported\
 Multiplicator: "+l)},"multiply")},update:{value:z(function(l,_,b){let[f,y,E]=(Array.isArray(l)?l.slice(3):Array.of(l,_,
b)).filter(j=>typeof j=="number");return this.head=Array.of(f??this[0],y??this[1],E??this[2]),this},"value")}},s={base:{
get:z(()=>Iterator.from([0,0,0]),"get")},head:{enumerable:!0,get:z(()=>Iterator.from(a),"get"),set:z(l=>a.set(l),"set")},
magnitude:{enumerable:!0,get(){return Wa(Math.hypot(...this.head))}}},p={[Symbol.iterator]:{value:z(function*(){for(let l of this.
head)yield l},"value")},length:{enumerable:!0,value:n}};for(let l=0;l<n;l++)(_=>{p[_]={enumerable:!0,get:z(()=>a[_],"get"),
set:z(b=>{if(typeof b=="number")a[l]=b;else throw new TypeError("Expected Number")},"set")}})(l);return Object.create(null,
Object.assign({},i,s,p))}u(d,"d");o(d,"$");z(d,"makeVectorQuantity");var Jr=Float64Array.of(608311/1250200,35783/156275,
0,189793/714400,247089/357200,32229/714400,198249/1000160,198249/2500400,5220557/5000800),re=o(e=>{if(c(e)&&e.space.ident===
"display-p3"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=Z(p)).multiply(Jr);return h(Y,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"display_p3_into_xyz_d65"),Ta=o(e=>{if(c(e)&&e.space.ident==="display-p3"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=Z(p)).multiply(Jr).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error("Wro\
ng parameter passed: "+e)},"display_p3_into_xyz_d50"),Xr=Float64Array.of(1829569/896150,-851781/878810,16779/1248040,-506331/
896150,1648619/878810,-147721/1248040,-308931/896150,36519/878810,1266979/1248040),H=o(e=>{if(c(e)&&e.space.ident==="xyz\
-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(Xr).each((p,l,_)=>_[l]=cr(p));return h(Ce,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"xyz_d65_into_a98_rgb"),Ro=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(Xr).each((p,l,_)=>_[l]=cr(p));return h(Ce,[n,i,s])}else throw new Error("W\
rong parameter passed: "+e)},"xyz_d50_into_a98_rgb"),Yo=o(e=>H(re(e)),"display_p3_into_a98_rgb"),Qr=Float64Array.of(573536/
994567,591459/1989134,53769/1989134,263643/1420810,6239551/9945670,351524/4972835,187206/994567,374412/4972835,4929758/4972835),
te=o(e=>{if(c(e)&&e.space.ident==="a98-rgb"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=ur(p)).multiply(Qr);
return h(Y,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"a98_rgb_into_xyz_d65"),Ra=o(e=>{if(c(e)&&e.space.
ident==="a98-rgb"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=ur(p)).multiply(Qr).multiply(S.d65.d50);return h(
F,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"a98_rgb_into_xyz_d50"),Ve=Float64Array.of(12831/3959,-851781/
878810,705/12673,-329/214,1648619/878810,-2585/12673,-1974/3959,36519/878810,705/667),ae=o(e=>{if(c(e)&&e.space.ident===
"xyz-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(Ve).each((p,l,_)=>_[l]=ee(p));return h(R,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"xyz_d65_into_srgb"),ve=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[r,t,a]=e.position,[
n,i,s]=d(r,t,a).multiply(Ve);return h(ye,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d65_into_srgb\
_linear"),Ke=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(
Ve).each((p,l,_)=>_[l]=ee(p));return h(R,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d50_into_srgb"),
qr=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(Ve);return h(
ye,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d50_into_srgb_linear"),Zr=o(e=>ae(te(e)),"a98_rgb_i\
nto_srgb"),Fo=o(e=>ve(te(e)),"a98_rgb_into_srgb_linear"),et=o(e=>ae(re(e)),"display_p3_into_srgb"),Do=o(e=>ve(re(e)),"di\
splay_p3_into_srgb_linear"),oe=o((e,r,t)=>{let a=2*Math.PI,n=Math.PI/6;e<0&&(e+=a),e=e%a;let i=o(s=>{let p=(s+e/n)%12,l=r*
Math.min(t,1-t);return t-l*Math.max(-1,Math.min(p-3,9-p,1))},"f");return[i(0),i(8),i(4)]},"hsl_to_rgb"),Lo=o(e=>{if(c(e)&&
e.space.ident==="hsl"){let[r,t,a]=e.position,n=oe(t,r,a).map(i=>Math.min(Math.max(Math.round(i*255),0),255));return h(nr,
n)}else throw new Error("Wrong parameter passed: "+e)},"hsl_into_rgb"),Ya=o(e=>{if(c(e)&&e.space.ident==="hsl"){let[r,t,
a]=e.position,n=oe(t,r,a);return h(R,n)}else throw new Error("Wrong parameter passed: "+e)},"hsl_into_srgb"),Bo=o(e=>{if(c(
e)&&e.space.ident==="hsl"){let[r,t,a]=e.position,n=oe(t,r,a).map(i=>Z(i));return h(ye,n)}else throw new Error("Wrong par\
ameter passed: "+e)},"hsl_into_srgb_linear"),Ie=o((e,r,t)=>{if(r+t>=1){let a=r/(r+t);return[a,a,a]}else{let[a,n,i]=oe(e,
1,.5).map(s=>s*(1-r-t)+r);return[a,n,i]}},"hwb_to_rgb"),Uo=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,n=Ie(
t,r,a);return h(R,n)}else throw new Error("Wrong parameter passed: "+e)},"hwb_into_srgb"),Go=o(e=>{if(c(e)&&e.space.ident===
"hwb"){let[r,t,a]=e.position,n=Ie(t,r,a).map(i=>Z(i));return h(ye,n)}else throw new Error("Wrong parameter passed: "+e)},
"hwb_into_srgb_linear"),P=o(e=>{if(c(e)&&e.space.ident==="lab"){let r=903.2962962962963,t=216/24389,[a,n,i]=e,s=(a+16)/116,
p=n/500+s,l=Math.pow(p,3),_=s-i/200,b=Math.pow(_,3),f=(l>t?l:(116*p-16)/r)*B[0],y=(a>r*t?Math.pow((a+16)/116,3):a/r)*B[1],
E=(b>t?b:(116*_-16)/r)*B[2];return h(F,[f,y,E])}else throw new Error("Wrong parameter passed: "+e)},"lab_into_xyz_d50"),
dr=o(e=>{let r=P(e),[t,a,n]=d(r).multiply(S.d50.d65);return h(Y,[t,a,n])},"lab_into_xyz_d65"),rt=o(e=>Ke(P(e)),"lab_into\
_srgb"),Ho=o(e=>qr(P(e)),"lab_into_srgb_linear"),V=o(e=>{if(c(e)&&e.space.ident==="lch"){let[r,t]=e,a=e.position.drop(1).
next().value??NaN,n=t*Math.cos(a),i=t*Math.sin(a);return h(De,[r,n,i])}else throw new Error("Wrong parameter passed: "+e)},
"lch_into_lab"),tt=o(e=>Ke(P(V(e))),"lch_into_srgb"),Vo=o(e=>qr(P(V(e))),"lch_into_srgb_linear"),O=o(e=>{if(c(e)&&e.space.
ident==="oklab"){let r=Float64Array.of(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,.2158037573099136,-.0638541728258133,
-1.2914855480194092),t=Float64Array.of(1.2268798758459243,-.0405757452148008,-.0763729366746601,-.5578149944602171,1.112286803280317,
-.4214933324022432,.2813910456659647,-.0717110580655164,1.5869240198367816),[a,n,i]=e.position,[s,p,l]=d(i,a,n).multiply(
r).each((_,b,f)=>f[b]=_**3).multiply(t);return h(Y,[s,p,l])}else throw new Error("Wrong parameter passed: "+e)},"oklab_i\
nto_xyz_d65"),at=o(e=>{let[r,t,a]=d(O(e)).multiply(S.d65.d50);return h(F,[r,t,a])},"oklab_into_xyz_d50"),ot=o(e=>ae(O(e)),
"oklab_into_srgb"),Ko=o(e=>ve(O(e)),"oklab_into_srgb_linear"),ne=o(e=>{if(c(e)&&e.space.ident==="oklch"){let[r,t]=e,a=e.
position.drop(1).next().value??NaN,n=isNaN(a)?0:t*Math.cos(a),i=isNaN(a)?0:t*Math.sin(a);return h(ke,[r,n,i])}else throw new Error(
"Wrong parameter passed: "+e)},"oklch_into_oklab"),nt=o(e=>ae(O(ne(e))),"oklch_into_srgb"),Jo=o(e=>ve(O(ne(e))),"oklch_i\
nto_srgb_linear"),it=o(e=>{let r=Math.abs(e);return r<=.03125?e/16:Math.sign(e)*Math.pow(r,1.8)},"to_linear"),gr=o(e=>{let r=Math.
abs(e);return r>=1/512?Math.sign(e)*Math.pow(r,1/1.8):16*e},"to_gamut"),Fa=Float64Array.of(.7977666449006423,.2880748288194013,
0,.13518129740053308,.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),yr=o(e=>{if(c(e)&&e.space.
ident==="prophoto-rgb"){let r=h(F,e.position.toArray());return d(r).each((t,a,n)=>n[a]=it(t)).multiply(Fa),r}else throw new Error(
"Wrong parameter passed: "+e)},"prophoto_rgb_into_xyz_d50"),pe=o(e=>{let r=yr(e),t=h(Y,r.position.toArray());return d(t).
multiply(S.d50.d65),t},"prophoto_rgb_into_xyz_d65"),st=o(e=>ae(pe(e)),"prophoto_rgb_into_srgb"),Xo=o(e=>ve(pe(e)),"proph\
oto_rgb_into_srgb_linear"),Ge=1.09929682680944,lt=.018053968510807,mr=o(e=>{let r=Math.abs(e);return r<lt*4.5?e/4.5:Math.
sign(e)*Math.pow((r+Ge-1)/Ge,1/.45)},"to_linear"),fr=o(e=>{let r=Math.abs(e);return r>lt?Math.sign(e)*(Ge*Math.pow(r,.45)-
(Ge-1)):4.5*e},"to_gamut"),_t=Float64Array.of(63426534/99577255,26158966/99577255,4994106574466076e-32,20160776/139408157,
472592308/697040785,19567812/697040785,47086771/278816314,8267143/139408157,295819943/278816314),ie=o(e=>{if(c(e)&&e.space.
ident==="rec2020"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=mr(p)).multiply(_t);return h(Y,[n,i,s])}else
throw new Error("Wrong parameter passed: "+e)},"rec2020_into_xyz_d65"),Da=o(e=>{if(c(e)&&e.space.ident==="rec2020"){let[
r,t,a]=e.position,[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=mr(p)).multiply(_t).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"rec2020_into_xyz_d50"),pt=o(e=>ae(ie(e)),"rec2020_into_srgb"),Qo=o(e=>ve(ie(e)),"rec2020\
_into_srgb_linear"),qo=o(e=>e.position.map(ee),"gam_srgb"),Zo=o(e=>e.position.map(Z),"lin_srgb"),Je=Float64Array.of(506752/
1228815,87098/409605,7918/409605,87881/245763,175762/245763,87881/737289,12673/70218,12673/175545,1001167/1053270),K=o(e=>{
if(c(e)&&["rgb","srgb"].includes(e.space.ident)){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=Z(p)).multiply(
Je);return h(Y,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"srgb_into_xyz_d65"),he=o(e=>{if(c(e)&&e.space.
ident==="srgb-linear"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(Je);return h(Y,[n,i,s])}else throw new Error("Wro\
ng parameter passed: "+e)},"srgb_linear_into_xyz_d65"),vr=o(e=>{if(c(e)&&["rgb","srgb"].includes(e.space.ident)){let[r,t,
a]=e.position,[n,i,s]=d(r,t,a).each((p,l,_)=>_[l]=Z(p)).multiply(Je).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error(
"Wrong parameter passed: "+e)},"srgb_into_xyz_d50"),La=o(e=>{if(c(e)&&e.space.ident==="srgb-linear"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).multiply(Je).multiply(S.d65.d50);return h(F,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},
"srgb_linear_into_xyz_d50"),ht=o(e=>H(K(e)),"srgb_into_a98_rgb"),en=o(e=>H(he(e)),"srgb_linear_into_a98_rgb"),rn=o(e=>ht(
Ya(e)),"hsl_into_a98_rgb"),tn=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position;if(r+a>=1){let n=r/(r+a);return h(
Ce,[n,n,n])}else{let n=oe(t,1,.5).map(i=>i*(1-r-a)+r);return ht(h(R,n))}}else throw new Error("Wrong parameter passed: "+
e)},"hwb_into_a98_rgb"),an=o(e=>H(dr(e)),"lab_into_a98_rgb"),on=o(e=>H(dr(V(e))),"lch_into_a98_rgb"),nn=o(e=>H(O(e)),"ok\
lab_into_a98_rgb"),Ba=o(e=>at(ne(e)),"oklch_into_xyz_d50"),Ua=o(e=>O(ne(e)),"oklch_into_xyz_d65"),sn=o(e=>H(Ua(e)),"oklc\
h_into_a98_rgb"),ln=o(e=>H(pe(e)),"prophoto_rgb_into_a98_rgb"),_n=o(e=>H(ie(e)),"rec2020_into_a98_rgb"),pn=o(e=>e.position.
map(cr),"gam_a98"),hn=o(e=>e.position.map(ur),"lin_a98"),bt=Float64Array.of(446124/178915,-14852/17905,11844/330415,-333277/
357830,63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),J=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[
r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(bt).each((p,l,_)=>_[l]=ee(p));return h(Be,[n,i,s])}else throw new Error("Wro\
ng parameter passed: "+e)},"xyz_d65_into_display_p3"),ut=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,
[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(bt).each((p,l,_)=>_[l]=ee(p));return h(Be,[n,i,s])}else throw new Error("W\
rong parameter passed: "+e)},"xyz_d50_into_display_p3"),bn=o(e=>J(te(e)),"a98_rgb_into_display_p3"),Ga=o(e=>{if(c(e)&&e.
space.ident==="hsl"){let[r,t,a]=e.position,n=oe(t,r,a),i=h(R,n);return vr(i)}else throw new Error("Wrong parameter passe\
d: "+e)},"hsl_into_xyz_d50"),we=o(e=>{if(c(e)&&e.space.ident==="hsl"){let[r,t,a]=e.position,n=oe(t,r,a),i=h(R,n);return K(
i)}else throw new Error("Wrong parameter passed: "+e)},"hsl_into_xyz_d65"),un=o(e=>J(we(e)),"hsl_into_display_p3"),Ha=o(
e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,n=Ie(t,r,a),i=h(R,n);return vr(i)}else throw new Error("Wrong \
parameter passed: "+e)},"hwb_into_xyz_d50"),xe=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,n=Ie(t,r,a),i=h(
R,n);return K(i)}else throw new Error("Wrong parameter passed: "+e)},"hwb_into_xyz_d65"),cn=o(e=>J(xe(e)),"hwb_into_disp\
lay_p3"),dn=o(e=>ut(P(e)),"lab_into_display_p3"),gn=o(e=>ut(P(V(e))),"lch_into_display_p3"),yn=o(e=>J(O(e)),"oklab_into_\
display_p3"),mn=o(e=>J(O(ne(e))),"oklch_into_display_p3"),fn=o(e=>J(pe(e)),"prophoto_rgb_into_display_p3"),vn=o(e=>J(ie(
e)),"rec2020_into_display_p3"),wn=o(e=>J(K(e)),"srgb_into_display_p3"),xn=o(e=>J(he(e)),"srgb_linear_into_display_p3"),zn=o(
e=>e.position.map(ee),"gam_p3"),Sn=o(e=>e.position.map(Z),"lin_p3"),kn=o((e,r,t)=>"#"+Array.of(e,r,t).map(a=>a.toString(
16).padStart(2,"0")).join(""),"rgb_to_hex"),I=o((e,r,t)=>{let a=Math.max(e,r,t),n=Math.min(e,r,t),i=a-n,s=ct(e,r,t),p=0,
l=(n+a)/2;return i!==0&&(p=l===0||l===1?0:(a-l)/Math.min(l,1-l)),p<0&&(s+=Math.PI,p=Math.abs(p)),p<=1e-5&&(s=NaN),[s*180/
Math.PI,p*100,l*100]},"rgb_to_hsl"),ct=o((e,r,t)=>{let a=Math.max(e,r,t),n=Math.min(e,r,t),i=NaN,s=a-n;if(s!==0){switch(a){case e:
i=(r-t)/s+(r<t?6:0);break;case r:i=(t-e)/s+2;break;case t:i=(e-r)/s+4}i*=Math.PI/3}return i},"rgb_to_hue"),$=o((e,r,t)=>{
let a=ct(e,r,t),n=Math.min(e,Math.min(r,t)),i=1-Math.max(e,Math.max(r,t));return[a*180/Math.PI,n*100,i*100]},"rgb_to_hwb"),
Mn=o(e=>{let[r,t,a]=Zr(e).position;return h(M,I(r,t,a))},"a98_rgb_into_hsl"),Cn=o(e=>{let[r,t,a]=et(e).position;return h(
M,I(r,t,a))},"display_p3_into_hsl"),On=o(e=>{if(c(e)&&e.space.ident==="hwb"){let[r,t,a]=e.position,[n,i,s]=Ie(t,r,a),[p,
l,_]=I(n,i,s);return h(M,[p,l,_])}else throw new Error("Wrong parameter passed: "+e)},"hwb_into_hsl"),jn=o(e=>{let[r,t,a]=rt(
e).position;return h(M,I(r,t,a))},"lab_into_hsl"),En=o(e=>{let[r,t,a]=tt(e).position;return h(M,I(r,t,a))},"lch_into_hsl"),
An=o(e=>{let[r,t,a]=ot(e).position;return h(M,I(r,t,a))},"oklab_into_hsl"),Nn=o(e=>{let[r,t,a]=nt(e).position;return h(M,
I(r,t,a))},"oklch_into_hsl"),Pn=o(e=>{let[r,t,a]=st(e).position;return h(M,I(r,t,a))},"prophoto_rgb_into_hsl"),In=o(e=>{
let[r,t,a]=pt(e).position,[n,i,s]=I(r,t,a);return h(M,[n,i,s])},"rec2020_into_hsl"),$n=o(e=>{if(c(e)&&["rgb","srgb"].includes(
e.space.ident)){let[r,t,a]=e.position,[n,i,s]=I(r,t,a);return h(M,[n,i,s])}else throw new Error("Wrong parameter passed:\
 "+e)},"srgb_into_hsl"),Wn=o(e=>{if(c(e)&&e.space.ident==="srgb-linear"){let[r,t,a]=e.position.map(p=>ee(p)),[n,i,s]=I(r,
t,a);return h(M,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"srgb_linear_into_hsl"),Tn=o(e=>{let[r,t,a]=Ke(
e).position;return h(M,I(r,t,a))},"xyz_d50_into_hsl"),Rn=o(e=>{let[r,t,a]=ae(e).position;return h(M,I(r,t,a))},"xyz_d65_\
into_hsl"),Yn=o(e=>{let[r,t,a]=Zr(e).position;return h(C,$(r,t,a))},"a98_rgb_into_hwb"),Fn=o(e=>{let[r,t,a]=et(e).position;
return h(C,$(r,t,a))},"display_p3_into_hwb"),Dn=o(e=>{if(c(e)&&e.space.ident==="hsl"){let[r,t,a]=e.position,[n,i,s]=oe(t,
r,a);return h(C,$(n,i,s))}else throw new Error("Wrong parameter passed: "+e)},"hsl_into_hwb"),Ln=o(e=>{let[r,t,a]=rt(e).
position;return h(C,$(r,t,a))},"lab_into_hwb"),Bn=o(e=>{let[r,t,a]=tt(e).position;return h(C,$(r,t,a))},"lch_into_hwb"),
Un=o(e=>{let[r,t,a]=ot(e).position;return h(C,$(r,t,a))},"oklab_into_hwb"),Gn=o(e=>{let[r,t,a]=nt(e).position;return h(C,
$(r,t,a))},"oklch_into_hwb"),Hn=o(e=>{let[r,t,a]=st(e).position;return h(C,$(r,t,a))},"prophoto_rgb_into_hwb"),Vn=o(e=>{
let[r,t,a]=pt(e).position;return h(C,$(r,t,a))},"rec2020_into_hwb"),Kn=o(e=>{if(c(e)&&["rgb","srgb"].includes(e.space.ident)){
let[r,t,a]=e.position;return h(C,$(r,t,a))}else throw new Error("Wrong parameter passed: "+e)},"srgb_into_hwb"),Jn=o(e=>{
if(c(e)&&e.space.ident==="srgb-linear"){let[r,t,a]=e.position.map(n=>ee(n));return h(C,$(r,t,a))}else throw new Error("W\
rong parameter passed: "+e)},"srgb_linear_into_hwb"),Xn=o(e=>{let[r,t,a]=Ke(e).position;return h(C,$(r,t,a))},"xyz_d50_i\
nto_hwb"),Qn=o(e=>{let[r,t,a]=ae(e).position;return h(C,$(r,t,a))},"xyz_d65_into_hwb"),dt=o(e=>{if(c(e)&&e.space.ident===
"xyz-d50"){let r=h(Y,e.position.toArray());return d(r).multiply(S.d50.d65),r}else throw new Error("Wrong parameter passe\
d: "+e)},"xyz_d50_into_xyz_d65"),x=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let r=h(F,e.position.toArray());return d(r).
multiply(S.d65.d50),r}else throw new Error("Wrong parameter passed: "+e)},"xyz_d65_into_xyz_d50"),Va=o(e=>v(x(e)),"xyz_d\
65_into_lab"),v=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let r=.008856451679035631,t=29**3/3**3,[a,n,i]=e.position.map(
(_,b)=>_/B[b]).map(_=>_>r?Math.cbrt(_):(t*_+16)/116),s=116*n-16,p=500*(a-n),l=200*(n-i);return h(De,[s,p,l])}else throw new Error(
"Wrong parameter passed: "+e)},"xyz_d50_into_lab"),qn=o(e=>{let r=te(e),t=x(r);return v(t)},"a98_rgb_into_lab"),Zn=o(e=>{
let r=re(e),t=x(r);return v(t)},"display_p3_into_lab"),ei=o(e=>{let r=we(e),t=x(r);return v(t)},"hsl_into_lab"),ri=o(e=>{
let r=xe(e),t=x(r);return v(t)},"hwb_into_lab"),ti=o(e=>{let r=O(e),t=x(r);return v(t)},"oklab_into_lab"),ai=o(e=>{let r=ne(
e),t=O(r),a=x(t);return v(a)},"oklch_into_lab"),oi=o(e=>{let r=yr(e);return v(r)},"prophoto_rgb_into_lab"),ni=o(e=>{let r=ie(
e),t=x(r);return v(t)},"rec2020_into_lab"),ii=o(e=>{let r=K(e),t=x(r);return v(t)},"srgb_into_lab"),si=o(e=>{let r=he(e),
t=x(r);return v(t)},"srgb_linear_into_lab"),W=o(e=>{if(c(e)&&e.space.ident==="lab"){let[r,t,a]=e,n=Math.atan2(a,t)*(180/
Math.PI),i=Math.hypot(t,a);return h(or,[r,i,n])}else throw new Error("Wrong parameter passed: "+e)},"lab_into_lch"),li=o(
e=>{let r=te(e),t=x(r),a=v(t);return W(a)},"a98_rgb_into_lch"),_i=o(e=>{let r=re(e),t=x(r),a=v(t);return W(a)},"display_\
p3_into_lch"),pi=o(e=>{let r=we(e),t=x(r),a=v(t);return W(a)},"hsl_into_lch"),hi=o(e=>{let r=xe(e),t=x(r),a=v(t);return W(
a)},"hwb_into_lch"),bi=o(e=>{let r=O(e),t=x(r),a=v(t);return W(a)},"oklab_into_lch"),ui=o(e=>{let r=ne(e),t=O(r),a=x(t),
n=v(a);return W(n)},"oklch_into_lch"),ci=o(e=>{let r=yr(e),t=v(r);return W(t)},"prophoto_rgb_into_lch"),di=o(e=>{let r=ie(
e),t=x(r),a=v(t);return W(a)},"rec2020_into_lch"),gi=o(e=>{let r=K(e),t=x(r),a=v(t);return W(a)},"srgb_into_lch"),yi=o(e=>{
let r=he(e),t=x(r),a=v(t);return W(a)},"srgb_linear_into_lch"),mi=o(e=>W(v(e)),"xyz_d50_into_lch"),fi=o(e=>W(Va(e)),"xyz\
_d65_into_lch"),D=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[r,t]=wr(),[a,n,i]=e.position,[s,p,l]=d(a,n,i).multiply(r).
each((_,b,f)=>f[b]=Math.cbrt(_)).multiply(t);return h(ke,[s*100,p,l])}else throw new Error("Wrong parameter passed: "+e)},
"xyz_d65_into_oklab"),Ka=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t]=wr(),[a,n,i]=e.position,[s,p,l]=d(a,n,i).multiply(
S.d50.d65).multiply(r).each((_,b,f)=>f[b]=Math.cbrt(_)).multiply(t);return h(ke,[s*100,p,l])}else throw new Error("Wrong\
 parameter passed: "+e)},"xyz_d50_into_oklab");function wr(){return[Float64Array.of(.819022437996703,.0329836539323885,.0481771893596242,
.3619062600528904,.9292868615863434,.2642395317527308,-.1288737815209879,.0361446663506424,.6335478284694309),Float64Array.
of(.210454268309314,1.9779985324311684,.0259040424655478,.7936177747023054,-2.42859224204858,.7827717124575296,-.0040720430116193,
.450593709617411,-.8086757549230774)]}u(wr,"tr");o(wr,"useTransitionMatrices");var vi=o(e=>D(te(e)),"a98_rgb_into_oklab"),
wi=o(e=>D(re(e)),"display_p3_into_oklab"),xi=o(e=>{let r=we(e);return D(r)},"hsl_into_oklab"),zi=o(e=>D(xe(e)),"hwb_into\
_oklab"),gt=o(e=>{let r=P(e),t=dt(r);return D(t)},"lab_into_oklab"),Si=o(e=>{let r=V(e),t=P(r),a=dt(t);return D(a)},"lch\
_into_oklab"),ki=o(e=>D(pe(e)),"prophoto_rgb_into_oklab"),Mi=o(e=>D(ie(e)),"rec2020_into_oklab"),Ci=o(e=>{let r=K(e);return D(
r)},"srgb_into_oklab"),Oi=o(e=>{let r=he(e);return D(r)},"srgb_linear_into_oklab"),se=o(e=>{let[r,t,a]=D(e),n=Math.hypot(
t,a),i=n<.001?NaN:Math.atan2(a,t)*180/Math.PI;return h(Me,[r,n,i])},"xyz_d65_into_oklch"),ji=o(e=>{let[r,t,a]=Ka(e),n=Math.
hypot(t,a),i=n<.001?NaN:Math.atan2(a,t)*180/Math.PI;return h(Me,[r,n,i])},"xyz_d50_into_oklch"),Ei=o(e=>{let r=te(e);return se(
r)},"a98_rgb_into_oklch"),Ai=o(e=>{let r=re(e);return se(r)},"display_p3_into_oklch"),Ni=o(e=>{let r=we(e);return se(r)},
"hsl_into_oklch"),Pi=o(e=>{let r=xe(e);return se(r)},"hwb_into_oklch"),yt=o(e=>{if(c(e)&&e.space.ident==="oklab"){let[r,
t,a]=e,n=Math.hypot(t,a),i=n<.001?NaN:Math.atan2(a,t)*180/Math.PI;return h(Me,[r,n,i])}else throw new Error("Wrong param\
eter passed: "+e)},"oklab_into_oklch"),Ii=o(e=>yt(gt(e)),"lab_into_oklch"),$i=o(e=>{let r=V(e),t=gt(r);return yt(t)},"lc\
h_into_oklch"),Wi=o(e=>{let r=pe(e);return se(r)},"prophoto_rgb_into_oklch"),Ti=o(e=>{let r=ie(e);return se(r)},"rec2020\
_into_oklch"),Ri=o(e=>{let r=K(e);return se(r)},"srgb_into_oklch"),Yi=o(e=>{let r=he(e);return se(r)},"srgb_linear_into_\
oklch"),mt=Float64Array.of(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,1.5082477428451468,0,-.05110186497554526,
.02052744743642139,1.2119675456389452),Fi=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,
a).multiply(S.d65.d50).multiply(mt).each((p,l,_)=>_[l]=gr(p));return h(Le,[n,i,s])}else throw new Error("Wrong parameter\
 passed: "+e)},"xyz_d65_into_prophoto_rgb"),L=o(e=>{if(c(e)&&e.space.ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(
r,t,a).multiply(mt).each((p,l,_)=>_[l]=gr(p));return h(Le,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"\
xyz_d50_into_prophoto_rgb"),Di=o(e=>L(Ra(e)),"a98_rgb_into_prophoto_rgb"),Li=o(e=>L(Ta(e)),"display_p3_into_prophoto_rgb"),
Ja=o(e=>P(V(e)),"lch_into_xyz_d50"),Bi=o(e=>dr(V(e)),"lch_into_xyz_d65"),Ui=o(e=>L(Ga(e)),"hsl_into_prophoto_rgb"),Gi=o(
e=>L(Ha(e)),"hwb_into_prophoto_rgb"),Hi=o(e=>L(P(e)),"lab_into_prophoto_rgb"),Vi=o(e=>L(Ja(e)),"lch_into_prophoto_rgb"),
Ki=o(e=>L(at(e)),"oklab_into_prophoto_rgb"),Ji=o(e=>L(Ba(e)),"oklch_into_prophoto_rgb"),Xi=o(e=>L(Da(e)),"rec2020_into_p\
rophoto_rgb"),Qi=o(e=>L(vr(e)),"srgb_into_prophoto_rgb"),qi=o(e=>L(La(e)),"srgb_linear_into_prophoto_rgb"),Zi=o(e=>e.position.
map(gr),"gam_prophoto"),es=o(e=>e.position.map(it),"lin_prophoto"),ft=Float64Array.of(30757411/17917100,-19765991/29648200,
792561/44930125,-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/17917100,467509/29648200,42328811/44930125),
X=o(e=>{if(c(e)&&e.space.ident==="xyz-d65"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(ft).each((p,l,_)=>_[l]=fr(p));
return h(Ue,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d65_into_rec2020"),vt=o(e=>{if(c(e)&&e.space.
ident==="xyz-d50"){let[r,t,a]=e.position,[n,i,s]=d(r,t,a).multiply(S.d50.d65).multiply(ft).each((p,l,_)=>_[l]=fr(p));return h(
Ue,[n,i,s])}else throw new Error("Wrong parameter passed: "+e)},"xyz_d50_into_rec2020"),rs=o(e=>X(te(e)),"a98_rgb_into_r\
ec2020"),ts=o(e=>X(re(e)),"display_p3_into_rec2020"),as=o(e=>X(we(e)),"hsl_into_rec2020"),os=o(e=>X(xe(e)),"hwb_into_rec\
2020"),ns=o(e=>vt(P(e)),"lab_into_rec2020"),is=o(e=>vt(P(V(e))),"lch_into_rec2020"),ss=o(e=>X(O(e)),"oklab_into_rec2020"),
ls=o(e=>X(O(ne(e))),"oklch_into_rec2020"),_s=o(e=>X(pe(e)),"prophoto_rgb_into_rec2020"),ps=o(e=>X(K(e)),"srgb_into_rec20\
20"),hs=o(e=>X(he(e)),"srgb_linear_into_rec2020"),bs=o(e=>e.position.map(fr),"gam_rec2020"),us=o(e=>e.position.map(mr),"\
lin_rec2020");var Xa=Object.defineProperty,g=u((e,r)=>Xa(e,"name",{value:r,configurable:!0}),"r"),Sr=g((e,r=12)=>{let t=r>0?10**r:1;return Math.
sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"round"),U=Sr;function Qa(e,r){if(!e)throw r??"Exception: somethin\
g unexpected happened."}u(Qa,"_");g(Qa,"assert");var wt=g(e=>typeof e=="number"||e instanceof Number,"isNumber"),qa=g(e=>le(
e)&&Iterator.from(["minimum","maximum","from","to","value","length"]).every(r=>r in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(r=>r in e&&typeof e[r]=="function"),"isRange"),Za=g(e=>e===!0||e===!1||e==="true"||
e==="on"||e==="off","isBoolean"),eo=g(e=>le(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableO\
bject"),le=g(e=>e!==null&&typeof e=="object","isObject"),We=g(e=>typeof e=="string","isString"),gs=g(e=>e===!0||e==="tru\
e"||e==="on","isTruthy"),ro=g(e=>{if(xt(e)){let r=Iterator.from(["hsl","hwb","lab","lch","oklab","oklch","rgb"]);for(let t of r)
if(t===e)return!0}return!1},"isCAM"),to=g(e=>We(e)&&no.has(e),"isColorChannelKey"),ao=g(e=>We(e)&&oo.has(e),"isSpaceDime\
nsionID"),xt=g(e=>We(e)&&io.has(e),"isSpaceID"),ys=g(e=>le(e)&&"ident"in e&&xt(e.ident)&&"CSYS"in e&&le(e.CSYS)&&"length"in
e.CSYS&&e.CSYS.length===3,"isColorSpace"),ms=g(e=>le(e)&&"ident"in e&&ao(e.ident)&&"short"in e&&to(e.short)&&"domain"in e&&
qa(e.domain),"isSpaceDimension"),fs=g(e=>le(e)&&e instanceof Iterator&&"alpha"in e&&wt(e.alpha),"isColorChannel"),oo=new Set(
["abscissa","angle","applicate","blackness","blue-yellow","blue","chroma","green","hue","lightness","ordinate","radius",
"green-red","red","saturation","whiteness"]),no=new Set(["a","b","B","C","c","G","g","h","L","phi","R","r","rho","S","W",
"x","y","z","rho","phi"]),io=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec\
2020","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]);function so(){let e=g(i=>Za(i)||wt(i)||We(i)||eo(i)||i===null,
"isValidValue"),r=g(i=>le(i)&&Object.values(i).every(s=>e(s)),"isAditionalProperties"),t=!0,a=Array.from(arguments).filter(
i=>e(i)),n={};return Object.entries(Iterator.from(arguments).filter(i=>r(i)).next().value??{}).forEach(([i,s])=>n[i]={enumerable:t,
value:s}),Object.defineProperties(a,n)}u(so,"ce");g(so,"createTuple");var lo=g(e=>{let r=Object.getOwnPropertyNames(e);for(let t of r){
let a=e[t];le(a)&&lo(a)}return Object.freeze(e)},"deepFreeze"),_o=(e=>(e.Rd="red",e.YlRd="yellow-red",e.Yl="yellow",e.GrYl=
"green-yellow",e.Gr="green",e.CyGr="cyan-green",e.Cy="cyan",e.BlCy="blue-cyan",e.Bl="blue",e.PrBl="purple-blue",e.Pr="pu\
rple",e.RdPr="red-purple",e))(_o||{}),vs=g(e=>{let r=Math.PI/6,t=Math.trunc(e/r),a=U(e-t*r);t<0&&(t+=12),t>12&&(t-=12);let n=Iterator.
from(["red","yellow-red","yellow","green-yellow","green","cyan-green","cyan","blue-cyan","blue","purple-blue","purple","\
red-purple"]).drop(t).next().value,i=U(e/(2*Math.PI),9);return i<0&&(i+=1),i>1&&(i=U(i%1,9)),Object.defineProperties(new Number(
e),{angle:{enumerable:!0,value:Object.create(null,{signed:{enumerable:!0,value:e>Math.PI?-(Math.PI-e%Math.PI):e},unsigned:{
enumerable:!0,value:e<0?2*Math.PI+e:e},unit:{enumerable:!0,value:"rad"}})},as:{enumerable:!0,value:Object.create(null,{deg:{
enumerable:!0,value:U(360*i,2)},grad:{enumerable:!0,value:U(400*i,2)},rad:{enumerable:!0,value:U(e,9)},turn:{enumerable:!0,
value:U(i,9)}})},deviation:{enumerable:!0,value:a},family:{enumerable:!0,value:n},toString:{value:g(function(){return this.
angle.signed+this.angle.unit},"value")}})},"makeHueAttribute"),ws=g(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),xs=g((e,r="",t=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]+/,
"g"),"").trim().split(" ").map((a,n)=>t||0<n?a[0].toUpperCase().concat(a.slice(1)):a).join(r),"toPascalCase"),Xe=String.
raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,zt=`${Xe}${Xe}${Xe}(?:/${Xe})?`,$e=String.raw`a-f\d`,po=String.
raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,ho=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
xr=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),St=new RegExp(`^${po}\\(${zt}\\)$`,"i"),zr=new RegExp(`^col\
or\\(${ho} ${zt}\\)$`,"i"),bo=`#?[${$e}]{3}[${$e}]?`,uo=`#?[${$e}]{6}([${$e}]{2})?`,kt=new RegExp(`[^#${$e}]`,"gi"),Mt=new RegExp(
`^${bo}$|^${uo}$`,"i"),Ct=g(e=>kt.test(e)===!1&&Mt.test(e),"isHEXColor"),co=g(e=>typeof e=="string"&&(Ct(e)||St.test(e)||
zr.test(e)),"isCSSColor"),zs=g(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),Ot=g((e,r=[NaN,NaN,NaN],t=1)=>{let a=t<1?" / "+(t<1e-4?"none":t):"",[n,i,s]=r.map(p=>p.toString());
return ro(e)?`${e}(${n} ${i} ${s}${a})`:`color(${e} ${n} ${i} ${s}${a})`},"makeCSSColor"),Ss=g(e=>{if(Ct(e))return go(e);
if(co(e)){let r=(zr.test(e)?zr.exec(e)?.slice(1):St.exec(e)?.slice(1))??Array.of("none","none","none",void 0),t=r.pop()??
1;We(t)&&(t=Qe(t));let a=r.shift(),n=a==="rgb",i=Iterator.from(r.map(s=>s?xr.test(s)?jt(s):n?Qe(s,255):Qe(s):NaN));return[
a,i,t]}throw new TypeError(`Expected a valid representation that defined as the <color> CSS data type, but passed "${e}"\
.`)},"parseCSSColor"),go=g(e=>{if(kt.test(e)||!Mt.test(e))throw new TypeError("Expected a valid hex string");e.startsWith(
"#")&&(e=e.slice(1));let r=1;e.length===8&&(r=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(r=parseInt(e.
slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(2));let t=parseInt(
e,16);return["rgb",Iterator.from([t>>16&255,t>>8&255,t&255]),r]},"parseHEXColor");function jt(e){let r=NaN;if(xr.test(e)){
let t=xr.exec(e).slice(1),a=t[1],n=a==="grad",i=a==="rad",s=a==="turn";r=U(parseFloat(t[0])*(n?180/200:i?180/Math.PI:s?360:
1)),Math.abs(r)>360&&(r=U(r%360)),r<0&&(r+=360)}return r}u(jt,"F");g(jt,"parseCSSAngleValue");function Qe(e,r=1){if(e===
"none")return NaN;let t=parseFloat(e);return e.endsWith("%")&&(t=U(t*r/100)),t}u(Qe,"d");g(Qe,"parseCSSColorComponent");var kr=u((e,...r)=>{let t=er(e);if(Wr(t)){let{colorSpace:a,components:n,alpha:i}=t.$value;if(br.has(a)){let s=br.get(a),
p=s.CAM??s.CSYS;n=n.map((l,_)=>(p[_].precision?Sr(l,p[_].precision):l)+(p[_].unit??""))}return Ot(a,n,i)}return Tr(t)?(Array.
isArray(t.$value)?t.$value:[t.$value]).map(n=>{let i=r.includes("inner")||n.inset,{offset:[s,p],blur:l,spread:_=0,color:b}=n;
return[s?s+"rem":"0",p?p+"rem":"0",l?l+"rem":"0",_?_+"rem":"",b,i?"inset":""].join(" ")}).join(", ").replace(/\s{2,}/g,"\
 "):t},"token");var yo="import-design-tokens",mo="token",Et="postcss-protosite-design-tokens",At=u((e={})=>{let r={importAtRuleName:yo,valueFunctionName:mo,
...e},t=new RegExp(r.valueFunctionName+"\\(\\W?((?:\\w+)(?:.\\w+)+)\\W?\\s?([\\s\\w]+)?\\)","g");return{postcssPlugin:Et,
async Once(a,n){let i=new Map;a.walkAtRules(s=>{if(s.name.toLowerCase()!==r.importAtRuleName)return;let p=s.params.replace(
/[^\s\w-]+/g,"").replace(/[\s]+/g," ").trim().split(" ").at(0);i.set(p??"",{filePath:s.source.input.file??"",node:s}),s.
remove()});for(let[s,p]of i.entries()){try{await tr(s)}catch(l){p.node.warn(n.result,`Failed to import design tokens fro\
m "${s}" with error:
	`+(l instanceof Error?l.message:l));continue}n.result.messages.push({type:"dependency",plugin:Et,file:s,parent:p.filePath})}},
Declaration(a,{result:n}){let i=a.value.toLowerCase();if(t.test(i)===!1)return;t.lastIndex=0;let s=i.matchAll(t).toArray();
for(let[p,l,_]of s)try{let b=_!==void 0?_.split(" "):[],f=kr(l,...b).toString();a.value=i.replace(p,f)}catch(b){a.warn(n,
`Failed to parse and transform "${a.value}" with error:
	`+(b instanceof Error?b.message:b))}}}},"PostCSSPlugin");At.postcss=!0;0&&(module.exports={PostCSSPlugin,importDesignTokens,token});
