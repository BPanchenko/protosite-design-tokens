
const importMetaUrl = /* @__PURE__ */ require("node:url").pathToFileURL(__filename).toString();
const importMetaFilename = /* @__PURE__ */ __filename;
const importMetaDirname = /* @__PURE__ */ __dirname;
const importMetaResolve = /* @__PURE__ */ require.resolve;
var ne=Object.create;var g=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var se=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var s=(e,r)=>g(e,"name",{value:r,configurable:!0});var le=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),ce=(e,r)=>{for(var t in r)g(e,t,{get:r[t],enumerable:!0})},
T=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of ae(r))!ie.call(e,o)&&o!==t&&g(e,o,{get:()=>r[o],
enumerable:!(n=oe(r,o))||n.enumerable});return e};var ue=(e,r,t)=>(t=e!=null?ne(se(e)):{},T(r||!e||!e.__esModule?g(t,"default",{value:e,enumerable:!0}):t,e)),pe=e=>T(g({},
"__esModule",{value:!0}),e);var A=le((Ze,M)=>{"use strict";var fe=s(function(r){return me(r)&&!ge(r)},"isMergeableObject");function me(e){return!!e&&
typeof e=="object"}s(me,"isNonNullObject");function ge(e){var r=Object.prototype.toString.call(e);return r==="[object Re\
gExp]"||r==="[object Date]"||he(e)}s(ge,"isSpecial");var be=typeof Symbol=="function"&&Symbol.for,de=be?Symbol.for("reac\
t.element"):60103;function he(e){return e.$$typeof===de}s(he,"isReactElement");function ye(e){return Array.isArray(e)?[]:
{}}s(ye,"emptyTarget");function b(e,r){return r.clone!==!1&&r.isMergeableObject(e)?m(ye(e),e,r):e}s(b,"cloneUnlessOtherw\
iseSpecified");function Se(e,r,t){return e.concat(r).map(function(n){return b(n,t)})}s(Se,"defaultArrayMerge");function we(e,r){
if(!r.customMerge)return m;var t=r.customMerge(e);return typeof t=="function"?t:m}s(we,"getMergeFunction");function ve(e){
return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.
call(e,r)}):[]}s(ve,"getEnumerableOwnPropertySymbols");function P(e){return Object.keys(e).concat(ve(e))}s(P,"getKeys");
function I(e,r){try{return r in e}catch{return!1}}s(I,"propertyIsOnObject");function Ce(e,r){return I(e,r)&&!(Object.hasOwnProperty.
call(e,r)&&Object.propertyIsEnumerable.call(e,r))}s(Ce,"propertyIsUnsafe");function $e(e,r,t){var n={};return t.isMergeableObject(
e)&&P(e).forEach(function(o){n[o]=b(e[o],t)}),P(r).forEach(function(o){Ce(e,o)||(I(e,o)&&t.isMergeableObject(r[o])?n[o]=
we(o,t)(e[o],r[o],t):n[o]=b(r[o],t))}),n}s($e,"mergeObject");function m(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Se,t.isMergeableObject=
t.isMergeableObject||fe,t.cloneUnlessOtherwiseSpecified=b;var n=Array.isArray(r),o=Array.isArray(e),a=n===o;return a?n?t.
arrayMerge(e,r,t):$e(e,r,t):b(r,t)}s(m,"deepmerge");m.all=s(function(r,t){if(!Array.isArray(r))throw new Error("first ar\
gument should be an array");return r.reduce(function(n,o){return m(n,o,t)},{})},"deepmergeAll");var ke=m;M.exports=ke});var Qe={};ce(Qe,{PostCSSPlugin:()=>te,importDesignTokens:()=>E,token:()=>N});module.exports=pe(Qe);var z=ue(A(),1),Y=require("node:fs"),G=require("node:path");var F=require("node:fs/promises"),_=require("node:path"),D=require("node:url");var Oe=/^{(?:\w+)(?:.\w+)+}$/,L=s(async e=>{if(Ee(e)&&(e.startsWith(".")?e=importMetaResolve("../assets/"+e):e=importMetaResolve(
e),R(e)&&(e=(0,D.fileURLToPath)(e)),(0,_.isAbsolute)(e)))return await(0,F.readFile)(e,{encoding:"utf8"});if(R(e))return await fetch(
e).then(r=>r.json());throw new Error("Wrong Reference: "+e.toString())},"deref"),S=s(e=>typeof e=="string"&&Oe.test(e),"\
isInternalReference"),Ee=s(e=>(e.startsWith("file:")||e.startsWith("node:")||e.endsWith("://"))===!1,"isSpecifierOrPath"),
R=s(e=>{try{let{protocol:r}=new URL(e);return r.startsWith("file:")||r.startsWith("node:")||r.endsWith("://")}catch{return!1}},
"isURL");var W=s(e=>d(e)&&p(e.$value)&&e.$type==="color","isColorToken"),p=s(e=>e!==null&&typeof e=="object","isObject"),d=s(e=>p(
e)&&"$type"in e&&"$value"in e,"isToken");var w=new Map,k=s(e=>{if(w.has(e))return w.get(e);throw new Error(`Token "${e}" not found`)},"getToken");var U=s((e,r)=>{if(S(r)){let t=k(r.slice(1,-1));w.set(e,t);return}if(d(r)){let t={$type:r.$type,$value:r.$value};"$descr\
iption"in r&&(t.$description=r.$description),"$metadata"in r&&(t.$metadata=r.$metadata),w.set(e,t);return}throw new Error(
`Failed setting: token '${e}' is ${JSON.stringify(r)}. See https://tr.designtokens.org/format/`)},"setToken");var je=["$description","$metadata","$type","$value"],O=s(async e=>{let r=Object.keys(e).sort(),t={};for(let n of r)if(n===
"$ref"){let o=await L(e.$ref);o=await O(JSON.parse(o)),Object.assign(t,o)}else if(je.includes(n))t[n]=e[n];else{let o=p(
e[n])?await O(e[n]):e[n];p(t[n])&&p(o)?t[n]=(0,z.default)(t[n],o):t[n]=o}return Object.seal(t)},"parseSourceContent"),B=s(
(e,r=[])=>{let t=Object.keys(e);for(let n of t){let o=[...r,n],a=e[n];(S(a)||d(a))&&U(o.join("."),a),p(a)&&B(a,o)}},"ret\
rieveDesignTokens"),E=s(async e=>{let r=(0,G.resolve)(importMetaDirname,"../assets",e+".tokens"),t=(0,Y.readFileSync)(r,
{encoding:"utf8"}),n=await O(JSON.parse(t));B(n)},"importDesignTokens");var xe=Object.defineProperty,i=s((e,r)=>xe(e,"name",{value:r,configurable:!0}),"r"),Ne=i((e,r=12)=>{let t=r>0?10**r:1;return Math.
sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"round"),c=Ne;function Te(e,r){if(!e)throw r??"Exception: somethin\
g unexpected happened."}s(Te,"_");i(Te,"assert");var H=i(e=>typeof e=="number"||e instanceof Number,"isNumber"),Pe=i(e=>u(
e)&&Iterator.from(["minimum","maximum","from","to","value","length"]).every(r=>r in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(r=>r in e&&typeof e[r]=="function"),"isRange"),Ie=i(e=>e===!0||e===!1||e==="true"||
e==="on"||e==="off","isBoolean"),Me=i(e=>u(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableOb\
ject"),u=i(e=>e!==null&&typeof e=="object","isObject"),y=i(e=>typeof e=="string","isString"),gr=i(e=>e===!0||e==="true"||
e==="on","isTruthy"),Ae=i(e=>{if(V(e)){let r=Iterator.from(["hsl","hwb","lab","lch","oklab","oklch","rgb"]);for(let t of r)
if(t===e)return!0}return!1},"isCAM"),Re=i(e=>y(e)&&De.has(e),"isColorChannelKey"),Fe=i(e=>y(e)&&_e.has(e),"isSpaceDimens\
ionID"),V=i(e=>y(e)&&Le.has(e),"isSpaceID"),br=i(e=>u(e)&&"ident"in e&&V(e.ident)&&"CSYS"in e&&u(e.CSYS)&&"length"in e.CSYS&&
e.CSYS.length===3,"isColorSpace"),dr=i(e=>u(e)&&"ident"in e&&Fe(e.ident)&&"short"in e&&Re(e.short)&&"domain"in e&&Pe(e.domain),
"isSpaceDimension"),hr=i(e=>u(e)&&e instanceof Iterator&&"alpha"in e&&H(e.alpha),"isColorChannel"),_e=new Set(["abscissa",
"angle","applicate","blackness","blue-yellow","blue","chroma","green","hue","lightness","ordinate","radius","green-red",
"red","saturation","whiteness"]),De=new Set(["a","b","B","C","c","G","g","h","L","phi","R","r","rho","S","W","x","y","z",
"rho","phi"]),Le=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-\
linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]);function We(){let e=i(a=>Ie(a)||H(a)||y(a)||Me(a)||a===null,"isValidVal\
ue"),r=i(a=>u(a)&&Object.values(a).every(l=>e(l)),"isAditionalProperties"),t=!0,n=Array.from(arguments).filter(a=>e(a)),
o={};return Object.entries(Iterator.from(arguments).filter(a=>r(a)).next().value??{}).forEach(([a,l])=>o[a]={enumerable:t,
value:l}),Object.defineProperties(n,o)}s(We,"ce");i(We,"createTuple");var Ue=i(e=>{let r=Object.getOwnPropertyNames(e);for(let t of r){
let n=e[t];u(n)&&Ue(n)}return Object.freeze(e)},"deepFreeze"),ze=(e=>(e.Rd="red",e.YlRd="yellow-red",e.Yl="yellow",e.GrYl=
"green-yellow",e.Gr="green",e.CyGr="cyan-green",e.Cy="cyan",e.BlCy="blue-cyan",e.Bl="blue",e.PrBl="purple-blue",e.Pr="pu\
rple",e.RdPr="red-purple",e))(ze||{}),yr=i(e=>{let r=Math.PI/6,t=Math.trunc(e/r),n=c(e-t*r);t<0&&(t+=12),t>12&&(t-=12);let o=Iterator.
from(["red","yellow-red","yellow","green-yellow","green","cyan-green","cyan","blue-cyan","blue","purple-blue","purple","\
red-purple"]).drop(t).next().value,a=c(e/(2*Math.PI),9);return a<0&&(a+=1),a>1&&(a=c(a%1,9)),Object.defineProperties(new Number(
e),{angle:{enumerable:!0,value:Object.create(null,{signed:{enumerable:!0,value:e>Math.PI?-(Math.PI-e%Math.PI):e},unsigned:{
enumerable:!0,value:e<0?2*Math.PI+e:e},unit:{enumerable:!0,value:"rad"}})},as:{enumerable:!0,value:Object.create(null,{deg:{
enumerable:!0,value:c(360*a,2)},grad:{enumerable:!0,value:c(400*a,2)},rad:{enumerable:!0,value:c(e,9)},turn:{enumerable:!0,
value:c(a,9)}})},deviation:{enumerable:!0,value:n},family:{enumerable:!0,value:o},toString:{value:i(function(){return this.
angle.signed+this.angle.unit},"value")}})},"makeHueAttribute"),Sr=i(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),wr=i((e,r="",t=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]+/,
"g"),"").trim().split(" ").map((n,o)=>t||0<o?n[0].toUpperCase().concat(n.slice(1)):n).join(r),"toPascalCase"),v=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
K=`${v}${v}${v}(?:/${v})?`,h=String.raw`a-f\d`,Ye=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,Ge=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
j=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),X=new RegExp(`^${Ye}\\(${K}\\)$`,"i"),x=new RegExp(`^color\\(${Ge}\
 ${K}\\)$`,"i"),Be=`#?[${h}]{3}[${h}]?`,He=`#?[${h}]{6}([${h}]{2})?`,J=new RegExp(`[^#${h}]`,"gi"),Q=new RegExp(`^${Be}$\
|^${He}$`,"i"),q=i(e=>J.test(e)===!1&&Q.test(e),"isHEXColor"),Ve=i(e=>typeof e=="string"&&(q(e)||X.test(e)||x.test(e)),"\
isCSSColor"),vr=i(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),Z=i((e,r=[NaN,NaN,NaN],t=1)=>{let n=t<1?" / "+(t<1e-4?"none":t):"",[o,a,l]=r.map(f=>f.toString());
return Ae(e)?`${e}(${o} ${a} ${l}${n})`:`color(${e} ${o} ${a} ${l}${n})`},"makeCSSColor"),Cr=i(e=>{if(q(e))return Ke(e);
if(Ve(e)){let r=(x.test(e)?x.exec(e)?.slice(1):X.exec(e)?.slice(1))??Array.of("none","none","none",void 0),t=r.pop()??1;
y(t)&&(t=C(t));let n=r.shift(),o=n==="rgb",a=Iterator.from(r.map(l=>l?j.test(l)?ee(l):o?C(l,255):C(l):NaN));return[n,a,t]}
throw new TypeError(`Expected a valid representation that defined as the <color> CSS data type, but passed "${e}".`)},"p\
arseCSSColor"),Ke=i(e=>{if(J.test(e)||!Q.test(e))throw new TypeError("Expected a valid hex string");e.startsWith("#")&&(e=
e.slice(1));let r=1;e.length===8&&(r=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(r=parseInt(e.slice(3,4).
repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(2));let t=parseInt(e,16);return[
"rgb",Iterator.from([t>>16&255,t>>8&255,t&255]),r]},"parseHEXColor");function ee(e){let r=NaN;if(j.test(e)){let t=j.exec(
e).slice(1),n=t[1],o=n==="grad",a=n==="rad",l=n==="turn";r=c(parseFloat(t[0])*(o?180/200:a?180/Math.PI:l?360:1)),Math.abs(
r)>360&&(r=c(r%360)),r<0&&(r+=360)}return r}s(ee,"F");i(ee,"parseCSSAngleValue");function C(e,r=1){if(e==="none")return NaN;
let t=parseFloat(e);return e.endsWith("%")&&(t=c(t*r/100)),t}s(C,"d");i(C,"parseCSSColorComponent");var N=s(e=>{let r=k(e);if(W(r)){let{colorSpace:t,components:n,alpha:o=1}=r.$value;return Z(t,n,o)}return r},"token");var Xe="import-design-tokens",Je="token",re="postcss-protosite-design-tokens",te=s((e={})=>{let r={importAtRuleName:Xe,valueFunctionName:Je,
...e},t=new RegExp(r.valueFunctionName+"\\(\\W?((?:\\w+)(?:.\\w+)+)\\W?\\)","g");return{postcssPlugin:re,async Once(n,o){
let a=new Map;n.walkAtRules(l=>{if(l.name.toLowerCase()!==r.importAtRuleName)return;let f=l.params.replace(/[^\s\w-]+/g,
"").replace(/[\s]+/g," ").trim().split(" ").at(0);a.set(f,{filePath:l.source.input.file,node:l}),l.remove()});for(let[l,
f]of a.entries()){try{await E(l)}catch($){f.node.warn(o.result,`Failed to import design tokens from "${l}" with error:
	`+($ instanceof Error?$.message:$));continue}o.result.messages.push({type:"dependency",plugin:re,file:l,parent:f.filePath})}},
Declaration(n,{result:o}){if(n.value.toLowerCase().startsWith(r.valueFunctionName))try{let a=n.value.matchAll(t).toArray().
at(0).at(1);n.value=N(a).toString()}catch(a){n.warn(o,`Failed to parse and transform "${n.value}" with error:
	`+(a instanceof Error?a.message:a))}}}},"PostCSSPlugin");te.postcss=!0;0&&(module.exports={PostCSSPlugin,importDesignTokens,token});
