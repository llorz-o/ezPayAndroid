(self["webpackChunkez_pay"]=self["webpackChunkez_pay"]||[]).push([[5461],{57670:function(t,e,r){"use strict";r(69600),r(21703),r(96647),r(65069),r(2707);var n={single_source_shortest_paths:function(t,e,r){var o={},i={};i[e]=0;var a,u,s,f,c,h,d,l,g,p=n.PriorityQueue.make();p.push(e,0);while(!p.empty())for(s in a=p.pop(),u=a.value,f=a.cost,c=t[u]||{},c)c.hasOwnProperty(s)&&(h=c[s],d=f+h,l=i[s],g="undefined"===typeof i[s],(g||l>d)&&(i[s]=d,p.push(s,d),o[s]=u));if("undefined"!==typeof r&&"undefined"===typeof i[r]){var v=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(v)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var r=[],n=e;while(n)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};for(e in t=t||{},r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=n},16288:function(t,e,r){"use strict";r(39575),r(41539),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(37380),r(1118),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(23767),r(8585),r(68696),t.exports=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=t.charCodeAt(n+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,n+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},75461:function(t,e,r){r(47042),r(21703),r(96647),r(41539),r(24812),r(83710),r(39714);var n=r(26702),o=r(20744),i=r(56071),a=r(74621);function u(t,e,r,i,a){var u=[].slice.call(arguments,1),s=u.length,f="function"===typeof u[s-1];if(!f&&!n())throw new Error("Callback required as last argument");if(!f){if(s<1)throw new Error("Too few arguments provided");return 1===s?(r=e,e=i=void 0):2!==s||e.getContext||(i=r,r=e,e=void 0),new Promise((function(n,a){try{var u=o.create(r,i);n(t(u,e,i))}catch(s){a(s)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(a=r,r=e,e=i=void 0):3===s&&(e.getContext&&"undefined"===typeof a?(a=i,i=void 0):(a=i,i=r,r=e,e=void 0));try{var c=o.create(r,i);a(null,t(c,e,i))}catch(h){a(h)}}e.create=o.create,e.toCanvas=u.bind(null,i.render),e.toDataURL=u.bind(null,i.renderToDataURL),e.toString=u.bind(null,(function(t,e,r){return a.render(t,r)}))},26702:function(t,e,r){r(41539),t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},7179:function(t,e,r){r(65069);var n=r(15641).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}},10668:function(t,e,r){r(82772);var n=r(25250),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},21101:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){var e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1===(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},58219:function(t,e,r){function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}r(21703),r(96647),r(39575),r(41539),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(37380),r(1118),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(23767),r(8585),r(68696),n.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},n.prototype.get=function(t,e){return this.data[t*this.size+e]},n.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=n},91284:function(t,e,r){r(39575),r(41539),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(37380),r(1118),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(23767),r(8585),r(68696);var n=r(16288),o=r(25250);function i(t){this.mode=o.BYTE,this.data=new Uint8Array(n(t))}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},62430:function(t,e,r){var n=r(26372),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},26372:function(t,e,r){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}r(21703),r(96647),e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(o){return r}}},39705:function(t,e,r){var n=r(15641).getSymbolSize,o=7;e.getPositions=function(t){var e=n(t);return[[0,0],[e-o,0],[0,e-o]]}},37111:function(t,e,r){var n=r(15641),o=1335,i=21522,a=n.getBCHDigit(o);e.getEncodedBits=function(t,e){var r=t.bit<<3|e,u=r<<10;while(n.getBCHDigit(u)-a>=0)u^=o<<n.getBCHDigit(u)-a;return(r<<10|u)^i}},71062:function(t,e,r){r(39575),r(41539),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(37380),r(1118),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(23767),r(8585),r(68696),r(21703),r(96647);var n=new Uint8Array(512),o=new Uint8Array(256);(function(){for(var t=1,e=0;e<255;e++)n[e]=t,o[t]=e,t<<=1,256&t&&(t^=285);for(var r=255;r<512;r++)n[r]=n[r-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[o[t]+o[e]]}},47786:function(t,e,r){r(21703),r(96647);var n=r(25250),o=r(15641);function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},t.exports=i},65403:function(t,e,r){r(91058),r(21703),r(96647),r(47941),e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n={N1:3,N2:3,N3:40,N4:10};function o(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,r=0,o=0,i=0,a=null,u=null,s=0;s<e;s++){o=i=0,a=u=null;for(var f=0;f<e;f++){var c=t.get(s,f);c===a?o++:(o>=5&&(r+=n.N1+(o-5)),a=c,o=1),c=t.get(f,s),c===u?i++:(i>=5&&(r+=n.N1+(i-5)),u=c,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},e.getPenaltyN2=function(t){for(var e=t.size,r=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||r++}return r*n.N2},e.getPenaltyN3=function(t){for(var e=t.size,r=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var u=0;u<e;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*n.N3},e.getPenaltyN4=function(t){for(var e=0,r=t.data.length,o=0;o<r;o++)e+=t.data[o];var i=Math.abs(Math.ceil(100*e/r/5)-10);return i*n.N4},e.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var i=0;i<r;i++)e.isReserved(i,n)||e.xor(i,n,o(t,i,n))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var u=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),u<i&&(i=u,o=a)}return o}},25250:function(t,e,r){r(21703),r(96647),r(83710),r(41539),r(39714);var n=r(7164),o=r(81393);function i(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return i(t)}catch(n){return r}}},79846:function(t,e,r){r(96647),r(83710),r(41539),r(39714),r(83650),r(91058);var n=r(25250);function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},t.exports=o},60409:function(t,e,r){r(39575),r(41539),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(37380),r(1118),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(23767),r(8585),r(68696),r(47042);var n=r(71062);e.mul=function(t,e){for(var r=new Uint8Array(t.length+e.length-1),o=0;o<t.length;o++)for(var i=0;i<e.length;i++)r[o+i]^=n.mul(t[o],e[i]);return r},e.mod=function(t,e){var r=new Uint8Array(t);while(r.length-e.length>=0){for(var o=r[0],i=0;i<e.length;i++)r[i]^=n.mul(e[i],o);var a=0;while(a<r.length&&0===r[a])a++;r=r.slice(a)}return r},e.generateECPolynomial=function(t){for(var r=new Uint8Array([1]),o=0;o<t;o++)r=e.mul(r,new Uint8Array([1,n.exp(o)]));return r}},20744:function(t,e,r){r(89554),r(41539),r(54747),r(39575),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(37380),r(1118),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(23767),r(8585),r(68696),r(47042),r(79753),r(21703),r(96647),r(24812);var n=r(15641),o=r(26372),i=r(21101),a=r(58219),u=r(7179),s=r(39705),f=r(65403),c=r(62430),h=r(88358),d=r(13686),l=r(37111),g=r(25250),p=r(70991);function v(t,e){for(var r=t.size,n=s.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var f=-1;f<=7;f++)a+f<=-1||r<=a+f||(u>=0&&u<=6&&(0===f||6===f)||f>=0&&f<=6&&(0===u||6===u)||u>=2&&u<=4&&f>=2&&f<=4?t.set(i+u,a+f,!0,!0):t.set(i+u,a+f,!1,!0))}function w(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function m(t,e){for(var r=u.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var s=-2;s<=2;s++)-2===a||2===a||-2===s||2===s||0===a&&0===s?t.set(o+a,i+s,!0,!0):t.set(o+a,i+s,!1,!0)}function y(t,e){for(var r,n,o,i=t.size,a=d.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1===(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}function E(t,e,r){var n,o,i=t.size,a=l.getEncodedBits(e,r);for(n=0;n<15;n++)o=1===(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function A(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2){6===u&&u--;while(1){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1===(e[a]>>>i&1)),t.set(o,u-s,f),i--,-1===i&&(a++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}}function C(t,e,r){var o=new i;r.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)}));var a=n.getSymbolTotalCodewords(t),u=c.getTotalCodewordsCount(t,e),s=8*(a-u);o.getLengthInBits()+4<=s&&o.put(0,4);while(o.getLengthInBits()%8!==0)o.putBit(0);for(var f=(s-o.getLengthInBits())/8,h=0;h<f;h++)o.put(h%2?17:236,8);return B(o,t,e)}function B(t,e,r){for(var o=n.getSymbolTotalCodewords(e),i=c.getTotalCodewordsCount(e,r),a=o-i,u=c.getBlocksCount(e,r),s=o%u,f=u-s,d=Math.floor(o/u),l=Math.floor(a/u),g=l+1,p=d-l,v=new h(p),w=0,m=new Array(u),y=new Array(u),E=0,A=new Uint8Array(t.buffer),C=0;C<u;C++){var B=C<f?l:g;m[C]=A.slice(w,w+B),y[C]=v.encode(m[C]),w+=B,E=Math.max(E,B)}var N,I,M=new Uint8Array(o),T=0;for(N=0;N<E;N++)for(I=0;I<u;I++)N<m[I].length&&(M[T++]=m[I][N]);for(N=0;N<p;N++)for(I=0;I<u;I++)M[T++]=y[I][N];return M}function N(t,e,r,o){var i;if(Array.isArray(t))i=p.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");var u=e;if(!u){var s=p.rawSplit(t);u=d.getBestVersionForData(s,r)}i=p.fromString(t,u||40)}var c=d.getBestVersionForData(i,r);if(!c)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<c)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+c+".\n")}else e=c;var h=C(e,r,i),l=n.getSymbolSize(e),g=new a(l);return v(g,e),w(g),m(g,e),E(g,r,0),e>=7&&y(g,e),A(g,h),isNaN(o)&&(o=f.getBestMask(g,E.bind(null,g,r))),f.applyMask(o,g),E(g,r,o),{modules:g,version:e,errorCorrectionLevel:r,maskPattern:o,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");var r,i,a=o.M;return"undefined"!==typeof e&&(a=o.from(e.errorCorrectionLevel,o.M),r=d.from(e.version),i=f.from(e.maskPattern),e.toSJISFunc&&n.setToSJISFunction(e.toSJISFunc)),N(t,r,a,i)}},88358:function(t,e,r){r(21703),r(96647),r(39575),r(41539),r(82472),r(48675),r(92990),r(18927),r(33105),r(35035),r(74345),r(7174),r(37380),r(1118),r(32846),r(44731),r(77209),r(96319),r(58867),r(37789),r(33739),r(29368),r(14483),r(12056),r(3462),r(30678),r(27462),r(33824),r(55021),r(12974),r(15016),r(23767),r(8585),r(68696);var n=r(60409);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=n.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){var i=new Uint8Array(this.degree);return i.set(r,o),i}return r},t.exports=o},81393:function(t,e,r){r(74916),r(15306),r(24603),r(28450),r(88386),r(39714),r(77601);var n="[0-9]+",o="[A-Z $%*+\\-./:]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");var a="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";e.KANJI=new RegExp(i,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(a,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(o,"g");var u=new RegExp("^"+i+"$"),s=new RegExp("^"+n+"$"),f=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return u.test(t)},e.testNumeric=function(t){return s.test(t)},e.testAlphanumeric=function(t){return f.test(t)}},70991:function(t,e,r){r(78221),r(74916),r(92222),r(21249),r(2707),r(85827),r(41539),r(21703),r(96647),r(83710),r(39714);var n=r(25250),o=r(79846),i=r(10668),a=r(91284),u=r(47786),s=r(81393),f=r(15641),c=r(57670);function h(t){return unescape(encodeURIComponent(t)).length}function d(t,e,r){var n,o=[];while(null!==(n=t.exec(r)))o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function l(t){var e,r,o=d(s.NUMERIC,n.NUMERIC,t),i=d(s.ALPHANUMERIC,n.ALPHANUMERIC,t);f.isKanjiModeEnabled()?(e=d(s.BYTE,n.BYTE,t),r=d(s.KANJI,n.KANJI,t)):(e=d(s.BYTE_KANJI,n.BYTE,t),r=[]);var a=o.concat(i,e,r);return a.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return u.getBitsLength(t);case n.BYTE:return a.getBitsLength(t)}}function p(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function v(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:h(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:h(o.data)}])}}return e}function w(t,e){for(var r={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],f=0;f<u.length;f++){var c=u[f],h=""+a+f;s.push(h),r[h]={node:c,lastCount:0},o[h]={};for(var d=0;d<i.length;d++){var l=i[d];r[l]&&r[l].node.mode===c.mode?(o[l][h]=g(r[l].lastCount+c.length,c.mode)-g(r[l].lastCount,c.mode),r[l].lastCount+=c.length):(r[l]&&(r[l].lastCount=c.length),o[l][h]=g(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,e))}}i=s}for(var p=0;p<i.length;p++)o[i[p]].end=0;return{map:o,table:r}}function m(t,e){var r,s=n.getBestModeForData(t);if(r=n.from(e,s),r!==n.BYTE&&r.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(s));switch(r!==n.KANJI||f.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new u(t);case n.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(m(e,null)):e.data&&t.push(m(e.data,e.mode)),t}),[])},e.fromString=function(t,r){for(var n=l(t,f.isKanjiModeEnabled()),o=v(n),i=w(o,r),a=c.find_path(i.map,"start","end"),u=[],s=1;s<a.length-1;s++)u.push(i.table[a[s]].node);return e.fromArray(p(u))},e.rawSplit=function(t){return e.fromArray(l(t,f.isKanjiModeEnabled()))}},15641:function(t,e,r){var n;r(21703),r(96647);var o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return o[t]},e.getBCHDigit=function(t){var e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},7164:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},13686:function(t,e,r){r(89554),r(41539),r(54747),r(91058),r(21703),r(96647),r(79753);var n=r(15641),o=r(62430),i=r(26372),a=r(25250),u=r(7164),s=7973,f=n.getBCHDigit(s);function c(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}function h(t,e){return a.getCharCountIndicator(t,e)+4}function d(t,e){var r=0;return t.forEach((function(t){var n=h(t.mode,e);r+=n+t.getBitsLength()})),r}function l(t,r){for(var n=1;n<=40;n++){var o=d(t,n);if(o<=e.getCapacity(n,r,a.MIXED))return n}}e.from=function(t,e){return u.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!u.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof r&&(r=a.BYTE);var i=n.getSymbolTotalCodewords(t),s=o.getTotalCodewordsCount(t,e),f=8*(i-s);if(r===a.MIXED)return f;var c=f-h(r,t);switch(r){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,e){var r,n=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return l(t,n);if(0===t.length)return 1;r=t[0]}else r=t;return c(r.mode,r.getLength(),n)},e.getEncodedBits=function(t){if(!u.isValid(t)||t<7)throw new Error("Invalid QR Code version");var e=t<<12;while(n.getBCHDigit(e)-f>=0)e^=s<<n.getBCHDigit(e)-f;return t<<12|e}},56071:function(t,e,r){r(21703),r(96647);var n=r(21809);function o(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,r){var a=r,u=e;"undefined"!==typeof a||e&&e.getContext||(a=e,e=void 0),e||(u=i()),a=n.getOptions(a);var s=n.getImageWidth(t.modules.size,a),f=u.getContext("2d"),c=f.createImageData(s,s);return n.qrToImageData(c.data,t,a),o(f,u,s),f.putImageData(c,0,0),u},e.renderToDataURL=function(t,r,n){var o=n;"undefined"!==typeof o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=e.render(t,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}},74621:function(t,e,r){r(47042),r(56977);var n=r(21809);function o(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){var n=t+e;return"undefined"!==typeof r&&(n+=" "+r),n}function a(t,e,r){for(var n="",o=0,a=!1,u=0,s=0;s<t.length;s++){var f=Math.floor(s%e),c=Math.floor(s/e);f||a||(a=!0),t[s]?(u++,s>0&&f>0&&t[s-1]||(n+=a?i("M",f+r,.5+c+r):i("m",o,0),o=0,a=!1),f+1<e&&t[s+1]||(n+=i("h",u),u=0)):o++}return n}e.render=function(t,e,r){var i=n.getOptions(e),u=t.modules.size,s=t.modules.data,f=u+2*i.margin,c=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",h="<path "+o(i.color.dark,"stroke")+' d="'+a(s,u,i.margin)+'"/>',d='viewBox="0 0 '+f+" "+f+'"',l=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+l+d+' shape-rendering="crispEdges">'+c+h+"</svg>\n";return"function"===typeof r&&r(null,g),g}},21809:function(t,e,r){function n(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}r(96647),r(83710),r(41539),r(39714),r(21703),r(74916),r(15306),r(47042),r(92222),r(21249),r(91058),r(69600),e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],c=0;c<u;c++)for(var h=0;h<u;h++){var d=4*(c*u+h),l=n.color.light;if(c>=s&&h>=s&&c<u-s&&h<u-s){var g=Math.floor((c-s)/a),p=Math.floor((h-s)/a);l=f[i[g*o+p]?1:0]}t[d++]=l.r,t[d++]=l.g,t[d++]=l.b,t[d]=l.a}}}}]);
//# sourceMappingURL=5461.ca14b744.js.map