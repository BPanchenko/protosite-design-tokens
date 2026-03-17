var J=Object.create;var $=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty;var s=(e,r)=>$(e,"name",{value:r,configurable:!0});var re=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var te=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of q(r))!ee.call(e,o)&&o!==t&&$(e,o,{get:()=>r[o],
enumerable:!(n=Q(r,o))||n.enumerable});return e};var ne=(e,r,t)=>(t=e!=null?J(Z(e)):{},te(r||!e||!e.__esModule?$(t,"default",{value:e,enumerable:!0}):t,e));var P=re((Je,T)=>{"use strict";var oe=s(function(r){return ae(r)&&!se(r)},"isMergeableObject");function ae(e){return!!e&&
typeof e=="object"}s(ae,"isNonNullObject");function se(e){var r=Object.prototype.toString.call(e);return r==="[object Re\
gExp]"||r==="[object Date]"||ce(e)}s(se,"isSpecial");var ie=typeof Symbol=="function"&&Symbol.for,le=ie?Symbol.for("reac\
t.element"):60103;function ce(e){return e.$$typeof===le}s(ce,"isReactElement");function ue(e){return Array.isArray(e)?[]:
{}}s(ue,"emptyTarget");function g(e,r){return r.clone!==!1&&r.isMergeableObject(e)?m(ue(e),e,r):e}s(g,"cloneUnlessOtherw\
iseSpecified");function pe(e,r,t){return e.concat(r).map(function(n){return g(n,t)})}s(pe,"defaultArrayMerge");function fe(e,r){
if(!r.customMerge)return m;var t=r.customMerge(e);return typeof t=="function"?t:m}s(fe,"getMergeFunction");function me(e){
return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.
call(e,r)}):[]}s(me,"getEnumerableOwnPropertySymbols");function x(e){return Object.keys(e).concat(me(e))}s(x,"getKeys");
function N(e,r){try{return r in e}catch{return!1}}s(N,"propertyIsOnObject");function ge(e,r){return N(e,r)&&!(Object.hasOwnProperty.
call(e,r)&&Object.propertyIsEnumerable.call(e,r))}s(ge,"propertyIsUnsafe");function be(e,r,t){var n={};return t.isMergeableObject(
e)&&x(e).forEach(function(o){n[o]=g(e[o],t)}),x(r).forEach(function(o){ge(e,o)||(N(e,o)&&t.isMergeableObject(r[o])?n[o]=
fe(o,t)(e[o],r[o],t):n[o]=g(r[o],t))}),n}s(be,"mergeObject");function m(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||pe,t.isMergeableObject=
t.isMergeableObject||oe,t.cloneUnlessOtherwiseSpecified=g;var n=Array.isArray(r),o=Array.isArray(e),a=n===o;return a?n?t.
arrayMerge(e,r,t):be(e,r,t):g(r,t)}s(m,"deepmerge");m.all=s(function(r,t){if(!Array.isArray(r))throw new Error("first ar\
gument should be an array");return r.reduce(function(n,o){return m(n,o,t)},{})},"deepmergeAll");var de=m;T.exports=de});var F=ne(P(),1);import{readFileSync as Ce}from"node:fs";import{resolve as $e}from"node:path";import{readFile as he}from"node:fs/promises";import{isAbsolute as ye}from"node:path";import{fileURLToPath as Se}from"node:url";var we=/^{(?:\w+)(?:.\w+)+}$/,M=s(async e=>{if(ve(e)&&(e.startsWith(".")?e=import.meta.resolve("../assets/"+e):e=import.meta.
resolve(e),I(e)&&(e=Se(e)),ye(e)))return await he(e,{encoding:"utf8"});if(I(e))return await fetch(e).then(r=>r.json());throw new Error(
"Wrong Reference: "+e.toString())},"deref"),y=s(e=>typeof e=="string"&&we.test(e),"isInternalReference"),ve=s(e=>(e.startsWith(
"file:")||e.startsWith("node:")||e.endsWith("://"))===!1,"isSpecifierOrPath"),I=s(e=>{try{let{protocol:r}=new URL(e);return r.
startsWith("file:")||r.startsWith("node:")||r.endsWith("://")}catch{return!1}},"isURL");var A=s(e=>b(e)&&p(e.$value)&&e.$type==="color","isColorToken"),p=s(e=>e!==null&&typeof e=="object","isObject"),b=s(e=>p(
e)&&"$type"in e&&"$value"in e,"isToken");var S=new Map,k=s(e=>{if(S.has(e))return S.get(e);throw new Error(`Token "${e}" not found`)},"getToken");var R=s((e,r)=>{if(y(r)){let t=k(r.slice(1,-1));S.set(e,t);return}if(b(r)){let t={$type:r.$type,$value:r.$value};"$descr\
iption"in r&&(t.$description=r.$description),"$metadata"in r&&(t.$metadata=r.$metadata),S.set(e,t);return}throw new Error(
`Failed setting: token '${e}' is ${JSON.stringify(r)}. See https://tr.designtokens.org/format/`)},"setToken");var ke=["$description","$metadata","$type","$value"],O=s(async e=>{let r=Object.keys(e).sort(),t={};for(let n of r)if(n===
"$ref"){let o=await M(e.$ref);o=await O(JSON.parse(o)),Object.assign(t,o)}else if(ke.includes(n))t[n]=e[n];else{let o=p(
e[n])?await O(e[n]):e[n];p(t[n])&&p(o)?t[n]=(0,F.default)(t[n],o):t[n]=o}return Object.seal(t)},"parseSourceContent"),_=s(
(e,r=[])=>{let t=Object.keys(e);for(let n of t){let o=[...r,n],a=e[n];(y(a)||b(a))&&R(o.join("."),a),p(a)&&_(a,o)}},"ret\
rieveDesignTokens"),D=s(async e=>{let r=$e(import.meta.dirname,"../assets",e+".tokens"),t=Ce(r,{encoding:"utf8"}),n=await O(
JSON.parse(t));_(n)},"importDesignTokens");var Oe=Object.defineProperty,i=s((e,r)=>Oe(e,"name",{value:r,configurable:!0}),"r"),Ee=i((e,r=12)=>{let t=r>0?10**r:1;return Math.
sign(e)*Math.round((Math.abs(e)+Number.EPSILON)*t)/t},"round"),c=Ee;function je(e,r){if(!e)throw r??"Exception: somethin\
g unexpected happened."}s(je,"_");i(je,"assert");var L=i(e=>typeof e=="number"||e instanceof Number,"isNumber"),xe=i(e=>u(
e)&&Iterator.from(["minimum","maximum","from","to","value","length"]).every(r=>r in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(r=>r in e&&typeof e[r]=="function"),"isRange"),Ne=i(e=>e===!0||e===!1||e==="true"||
e==="on"||e==="off","isBoolean"),Te=i(e=>u(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="function","isIterableOb\
ject"),u=i(e=>e!==null&&typeof e=="object","isObject"),h=i(e=>typeof e=="string","isString"),dr=i(e=>e===!0||e==="true"||
e==="on","isTruthy"),Pe=i(e=>{if(W(e)){let r=Iterator.from(["hsl","hwb","lab","lch","oklab","oklch","rgb"]);for(let t of r)
if(t===e)return!0}return!1},"isCAM"),Ie=i(e=>h(e)&&Re.has(e),"isColorChannelKey"),Me=i(e=>h(e)&&Ae.has(e),"isSpaceDimens\
ionID"),W=i(e=>h(e)&&Fe.has(e),"isSpaceID"),hr=i(e=>u(e)&&"ident"in e&&W(e.ident)&&"CSYS"in e&&u(e.CSYS)&&"length"in e.CSYS&&
e.CSYS.length===3,"isColorSpace"),yr=i(e=>u(e)&&"ident"in e&&Me(e.ident)&&"short"in e&&Ie(e.short)&&"domain"in e&&xe(e.domain),
"isSpaceDimension"),Sr=i(e=>u(e)&&e instanceof Iterator&&"alpha"in e&&L(e.alpha),"isColorChannel"),Ae=new Set(["abscissa",
"angle","applicate","blackness","blue-yellow","blue","chroma","green","hue","lightness","ordinate","radius","green-red",
"red","saturation","whiteness"]),Re=new Set(["a","b","B","C","c","G","g","h","L","phi","R","r","rho","S","W","x","y","z",
"rho","phi"]),Fe=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-\
linear","srgb","rgb","xyz","xyz-d50","xyz-d65"]);function _e(){let e=i(a=>Ne(a)||L(a)||h(a)||Te(a)||a===null,"isValidVal\
ue"),r=i(a=>u(a)&&Object.values(a).every(l=>e(l)),"isAditionalProperties"),t=!0,n=Array.from(arguments).filter(a=>e(a)),
o={};return Object.entries(Iterator.from(arguments).filter(a=>r(a)).next().value??{}).forEach(([a,l])=>o[a]={enumerable:t,
value:l}),Object.defineProperties(n,o)}s(_e,"ce");i(_e,"createTuple");var De=i(e=>{let r=Object.getOwnPropertyNames(e);for(let t of r){
let n=e[t];u(n)&&De(n)}return Object.freeze(e)},"deepFreeze"),Le=(e=>(e.Rd="red",e.YlRd="yellow-red",e.Yl="yellow",e.GrYl=
"green-yellow",e.Gr="green",e.CyGr="cyan-green",e.Cy="cyan",e.BlCy="blue-cyan",e.Bl="blue",e.PrBl="purple-blue",e.Pr="pu\
rple",e.RdPr="red-purple",e))(Le||{}),wr=i(e=>{let r=Math.PI/6,t=Math.trunc(e/r),n=c(e-t*r);t<0&&(t+=12),t>12&&(t-=12);let o=Iterator.
from(["red","yellow-red","yellow","green-yellow","green","cyan-green","cyan","blue-cyan","blue","purple-blue","purple","\
red-purple"]).drop(t).next().value,a=c(e/(2*Math.PI),9);return a<0&&(a+=1),a>1&&(a=c(a%1,9)),Object.defineProperties(new Number(
e),{angle:{enumerable:!0,value:Object.create(null,{signed:{enumerable:!0,value:e>Math.PI?-(Math.PI-e%Math.PI):e},unsigned:{
enumerable:!0,value:e<0?2*Math.PI+e:e},unit:{enumerable:!0,value:"rad"}})},as:{enumerable:!0,value:Object.create(null,{deg:{
enumerable:!0,value:c(360*a,2)},grad:{enumerable:!0,value:c(400*a,2)},rad:{enumerable:!0,value:c(e,9)},turn:{enumerable:!0,
value:c(a,9)}})},deviation:{enumerable:!0,value:n},family:{enumerable:!0,value:o},toString:{value:i(function(){return this.
angle.signed+this.angle.unit},"value")}})},"makeHueAttribute"),vr=i(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),Cr=i((e,r="",t=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]+/,
"g"),"").trim().split(" ").map((n,o)=>t||0<o?n[0].toUpperCase().concat(n.slice(1)):n).join(r),"toPascalCase"),w=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
U=`${w}${w}${w}(?:/${w})?`,d=String.raw`a-f\d`,We=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,Ue=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
E=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),z=new RegExp(`^${We}\\(${U}\\)$`,"i"),j=new RegExp(`^color\\(${Ue}\
 ${U}\\)$`,"i"),ze=`#?[${d}]{3}[${d}]?`,Ye=`#?[${d}]{6}([${d}]{2})?`,Y=new RegExp(`[^#${d}]`,"gi"),G=new RegExp(`^${ze}$\
|^${Ye}$`,"i"),B=i(e=>Y.test(e)===!1&&G.test(e),"isHEXColor"),Ge=i(e=>typeof e=="string"&&(B(e)||z.test(e)||j.test(e)),"\
isCSSColor"),$r=i(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),H=i((e,r=[NaN,NaN,NaN],t=1)=>{let n=t<1?" / "+(t<1e-4?"none":t):"",[o,a,l]=r.map(f=>f.toString());
return Pe(e)?`${e}(${o} ${a} ${l}${n})`:`color(${e} ${o} ${a} ${l}${n})`},"makeCSSColor"),kr=i(e=>{if(B(e))return Be(e);
if(Ge(e)){let r=(j.test(e)?j.exec(e)?.slice(1):z.exec(e)?.slice(1))??Array.of("none","none","none",void 0),t=r.pop()??1;
h(t)&&(t=v(t));let n=r.shift(),o=n==="rgb",a=Iterator.from(r.map(l=>l?E.test(l)?V(l):o?v(l,255):v(l):NaN));return[n,a,t]}
throw new TypeError(`Expected a valid representation that defined as the <color> CSS data type, but passed "${e}".`)},"p\
arseCSSColor"),Be=i(e=>{if(Y.test(e)||!G.test(e))throw new TypeError("Expected a valid hex string");e.startsWith("#")&&(e=
e.slice(1));let r=1;e.length===8&&(r=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(r=parseInt(e.slice(3,4).
repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(2));let t=parseInt(e,16);return[
"rgb",Iterator.from([t>>16&255,t>>8&255,t&255]),r]},"parseHEXColor");function V(e){let r=NaN;if(E.test(e)){let t=E.exec(
e).slice(1),n=t[1],o=n==="grad",a=n==="rad",l=n==="turn";r=c(parseFloat(t[0])*(o?180/200:a?180/Math.PI:l?360:1)),Math.abs(
r)>360&&(r=c(r%360)),r<0&&(r+=360)}return r}s(V,"F");i(V,"parseCSSAngleValue");function v(e,r=1){if(e==="none")return NaN;
let t=parseFloat(e);return e.endsWith("%")&&(t=c(t*r/100)),t}s(v,"d");i(v,"parseCSSColorComponent");var K=s(e=>{let r=k(e);if(A(r)){let{colorSpace:t,components:n,alpha:o=1}=r.$value;return H(t,n,o)}return r},"token");var He="import-design-tokens",Ve="token",X="postcss-protosite-design-tokens",Ke=s((e={})=>{let r={importAtRuleName:He,valueFunctionName:Ve,
...e},t=new RegExp(r.valueFunctionName+"\\(\\W?((?:\\w+)(?:.\\w+)+)\\W?\\)","g");return{postcssPlugin:X,async Once(n,o){
let a=new Map;n.walkAtRules(l=>{if(l.name.toLowerCase()!==r.importAtRuleName)return;let f=l.params.replace(/[^\s\w-]+/g,
"").replace(/[\s]+/g," ").trim().split(" ").at(0);a.set(f,{filePath:l.source.input.file,node:l}),l.remove()});for(let[l,
f]of a.entries()){try{await D(l)}catch(C){f.node.warn(o.result,`Failed to import design tokens from "${l}" with error:
	`+(C instanceof Error?C.message:C));continue}o.result.messages.push({type:"dependency",plugin:X,file:l,parent:f.filePath})}},
Declaration(n,{result:o}){if(n.value.toLowerCase().startsWith(r.valueFunctionName))try{let a=n.value.matchAll(t).toArray().
at(0).at(1);n.value=K(a).toString()}catch(a){n.warn(o,`Failed to parse and transform "${n.value}" with error:
	`+(a instanceof Error?a.message:a))}}}},"PostCSSPlugin");Ke.postcss=!0;export{Ke as PostCSSPlugin,D as importDesignTokens,K as token};
