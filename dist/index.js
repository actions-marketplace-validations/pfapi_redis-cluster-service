(()=>{var e={351:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);s(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const i=o(r(37));const a=r(278);function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+i.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const u="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=u+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${u}${escapeData(this.message)}`;return e}}function escapeData(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);s(t,e);return t};var i=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function fulfilled(e){try{step(n.next(e))}catch(e){s(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){s(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getIDToken=t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.notice=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const a=r(351);const u=r(717);const c=r(278);const l=o(r(37));const d=o(r(17));const p=r(41);var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=c.toCommandValue(t);process.env[e]=r;const n=process.env["GITHUB_ENV"]||"";if(n){const t="_GitHubActionsFileCommandDelimeter_";const n=`${e}<<${t}${l.EOL}${r}${l.EOL}${t}`;u.issueCommand("ENV",n)}else{a.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){a.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){u.issueCommand("PATH",e)}else{a.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${d.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return r}return r.trim()}t.getInput=getInput;function getMultilineInput(e,t){const r=getInput(e,t).split("\n").filter((e=>e!==""));return r}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const r=["true","True","TRUE"];const n=["false","False","FALSE"];const s=getInput(e,t);if(r.includes(s))return true;if(n.includes(s))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(l.EOL);a.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){a.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){a.issueCommand("debug",{},e)}t.debug=debug;function error(e,t={}){a.issueCommand("error",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.error=error;function warning(e,t={}){a.issueCommand("warning",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.warning=warning;function notice(e,t={}){a.issueCommand("notice",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.notice=notice;function info(e){process.stdout.write(e+l.EOL)}t.info=info;function startGroup(e){a.issue("group",e)}t.startGroup=startGroup;function endGroup(){a.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,(function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r}))}t.group=group;function saveState(e,t){a.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState;function getIDToken(e){return i(this,void 0,void 0,(function*(){return yield p.OidcClient.getIDToken(e)}))}t.getIDToken=getIDToken;var h=r(327);Object.defineProperty(t,"summary",{enumerable:true,get:function(){return h.summary}});var m=r(327);Object.defineProperty(t,"markdownSummary",{enumerable:true,get:function(){return m.markdownSummary}});var g=r(981);Object.defineProperty(t,"toPosixPath",{enumerable:true,get:function(){return g.toPosixPath}});Object.defineProperty(t,"toWin32Path",{enumerable:true,get:function(){return g.toWin32Path}});Object.defineProperty(t,"toPlatformPath",{enumerable:true,get:function(){return g.toPlatformPath}})},717:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);s(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const i=o(r(147));const a=o(r(37));const u=r(278);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!i.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}i.appendFileSync(r,`${u.toCommandValue(t)}${a.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},41:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function fulfilled(e){try{step(n.next(e))}catch(e){s(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){s(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.OidcClient=void 0;const s=r(255);const o=r(526);const i=r(186);class OidcClient{static createHttpClient(e=true,t=10){const r={allowRetries:e,maxRetries:t};return new s.HttpClient("actions/oidc-client",[new o.BearerCredentialHandler(OidcClient.getRequestToken())],r)}static getRequestToken(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable")}return e}static getIDTokenUrl(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable")}return e}static getCall(e){var t;return n(this,void 0,void 0,(function*(){const r=OidcClient.createHttpClient();const n=yield r.getJson(e).catch((e=>{throw new Error(`Failed to get ID Token. \n \n        Error Code : ${e.statusCode}\n \n        Error Message: ${e.result.message}`)}));const s=(t=n.result)===null||t===void 0?void 0:t.value;if(!s){throw new Error("Response json body do not have ID Token field")}return s}))}static getIDToken(e){return n(this,void 0,void 0,(function*(){try{let t=OidcClient.getIDTokenUrl();if(e){const r=encodeURIComponent(e);t=`${t}&audience=${r}`}i.debug(`ID token url is ${t}`);const r=yield OidcClient.getCall(t);i.setSecret(r);return r}catch(e){throw new Error(`Error message: ${e.message}`)}}))}}t.OidcClient=OidcClient},981:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);s(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.toPlatformPath=t.toWin32Path=t.toPosixPath=void 0;const i=o(r(17));function toPosixPath(e){return e.replace(/[\\]/g,"/")}t.toPosixPath=toPosixPath;function toWin32Path(e){return e.replace(/[/]/g,"\\")}t.toWin32Path=toWin32Path;function toPlatformPath(e){return e.replace(/[/\\]/g,i.sep)}t.toPlatformPath=toPlatformPath},327:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function fulfilled(e){try{step(n.next(e))}catch(e){s(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){s(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.summary=t.markdownSummary=t.SUMMARY_DOCS_URL=t.SUMMARY_ENV_VAR=void 0;const s=r(37);const o=r(147);const{access:i,appendFile:a,writeFile:u}=o.promises;t.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY";t.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";class Summary{constructor(){this._buffer=""}filePath(){return n(this,void 0,void 0,(function*(){if(this._filePath){return this._filePath}const e=process.env[t.SUMMARY_ENV_VAR];if(!e){throw new Error(`Unable to find environment variable for $${t.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`)}try{yield i(e,o.constants.R_OK|o.constants.W_OK)}catch(t){throw new Error(`Unable to access summary file: '${e}'. Check if the file has correct read/write permissions.`)}this._filePath=e;return this._filePath}))}wrap(e,t,r={}){const n=Object.entries(r).map((([e,t])=>` ${e}="${t}"`)).join("");if(!t){return`<${e}${n}>`}return`<${e}${n}>${t}</${e}>`}write(e){return n(this,void 0,void 0,(function*(){const t=!!(e===null||e===void 0?void 0:e.overwrite);const r=yield this.filePath();const n=t?u:a;yield n(r,this._buffer,{encoding:"utf8"});return this.emptyBuffer()}))}clear(){return n(this,void 0,void 0,(function*(){return this.emptyBuffer().write({overwrite:true})}))}stringify(){return this._buffer}isEmptyBuffer(){return this._buffer.length===0}emptyBuffer(){this._buffer="";return this}addRaw(e,t=false){this._buffer+=e;return t?this.addEOL():this}addEOL(){return this.addRaw(s.EOL)}addCodeBlock(e,t){const r=Object.assign({},t&&{lang:t});const n=this.wrap("pre",this.wrap("code",e),r);return this.addRaw(n).addEOL()}addList(e,t=false){const r=t?"ol":"ul";const n=e.map((e=>this.wrap("li",e))).join("");const s=this.wrap(r,n);return this.addRaw(s).addEOL()}addTable(e){const t=e.map((e=>{const t=e.map((e=>{if(typeof e==="string"){return this.wrap("td",e)}const{header:t,data:r,colspan:n,rowspan:s}=e;const o=t?"th":"td";const i=Object.assign(Object.assign({},n&&{colspan:n}),s&&{rowspan:s});return this.wrap(o,r,i)})).join("");return this.wrap("tr",t)})).join("");const r=this.wrap("table",t);return this.addRaw(r).addEOL()}addDetails(e,t){const r=this.wrap("details",this.wrap("summary",e)+t);return this.addRaw(r).addEOL()}addImage(e,t,r){const{width:n,height:s}=r||{};const o=Object.assign(Object.assign({},n&&{width:n}),s&&{height:s});const i=this.wrap("img",null,Object.assign({src:e,alt:t},o));return this.addRaw(i).addEOL()}addHeading(e,t){const r=`h${t}`;const n=["h1","h2","h3","h4","h5","h6"].includes(r)?r:"h1";const s=this.wrap(n,e);return this.addRaw(s).addEOL()}addSeparator(){const e=this.wrap("hr",null);return this.addRaw(e).addEOL()}addBreak(){const e=this.wrap("br",null);return this.addRaw(e).addEOL()}addQuote(e,t){const r=Object.assign({},t&&{cite:t});const n=this.wrap("blockquote",e,r);return this.addRaw(n).addEOL()}addLink(e,t){const r=this.wrap("a",e,{href:t});return this.addRaw(r).addEOL()}}const c=new Summary;t.markdownSummary=c;t.summary=c},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.toCommandProperties=t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue;function toCommandProperties(e){if(!Object.keys(e).length){return{}}return{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}}t.toCommandProperties=toCommandProperties},526:function(e,t){"use strict";var r=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function fulfilled(e){try{step(n.next(e))}catch(e){s(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){s(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.PersonalAccessTokenCredentialHandler=t.BearerCredentialHandler=t.BasicCredentialHandler=void 0;class BasicCredentialHandler{constructor(e,t){this.username=e;this.password=t}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return false}handleAuthentication(){return r(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.BasicCredentialHandler=BasicCredentialHandler;class BearerCredentialHandler{constructor(e){this.token=e}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Bearer ${this.token}`}canHandleAuthentication(){return false}handleAuthentication(){return r(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.BearerCredentialHandler=BearerCredentialHandler;class PersonalAccessTokenCredentialHandler{constructor(e){this.token=e}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return false}handleAuthentication(){return r(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.PersonalAccessTokenCredentialHandler=PersonalAccessTokenCredentialHandler},255:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);s(t,e);return t};var i=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function fulfilled(e){try{step(n.next(e))}catch(e){s(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){s(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.HttpClient=t.isHttps=t.HttpClientResponse=t.HttpClientError=t.getProxyUrl=t.MediaTypes=t.Headers=t.HttpCodes=void 0;const a=o(r(685));const u=o(r(687));const c=o(r(835));const l=o(r(294));var d;(function(e){e[e["OK"]=200]="OK";e[e["MultipleChoices"]=300]="MultipleChoices";e[e["MovedPermanently"]=301]="MovedPermanently";e[e["ResourceMoved"]=302]="ResourceMoved";e[e["SeeOther"]=303]="SeeOther";e[e["NotModified"]=304]="NotModified";e[e["UseProxy"]=305]="UseProxy";e[e["SwitchProxy"]=306]="SwitchProxy";e[e["TemporaryRedirect"]=307]="TemporaryRedirect";e[e["PermanentRedirect"]=308]="PermanentRedirect";e[e["BadRequest"]=400]="BadRequest";e[e["Unauthorized"]=401]="Unauthorized";e[e["PaymentRequired"]=402]="PaymentRequired";e[e["Forbidden"]=403]="Forbidden";e[e["NotFound"]=404]="NotFound";e[e["MethodNotAllowed"]=405]="MethodNotAllowed";e[e["NotAcceptable"]=406]="NotAcceptable";e[e["ProxyAuthenticationRequired"]=407]="ProxyAuthenticationRequired";e[e["RequestTimeout"]=408]="RequestTimeout";e[e["Conflict"]=409]="Conflict";e[e["Gone"]=410]="Gone";e[e["TooManyRequests"]=429]="TooManyRequests";e[e["InternalServerError"]=500]="InternalServerError";e[e["NotImplemented"]=501]="NotImplemented";e[e["BadGateway"]=502]="BadGateway";e[e["ServiceUnavailable"]=503]="ServiceUnavailable";e[e["GatewayTimeout"]=504]="GatewayTimeout"})(d=t.HttpCodes||(t.HttpCodes={}));var p;(function(e){e["Accept"]="accept";e["ContentType"]="content-type"})(p=t.Headers||(t.Headers={}));var f;(function(e){e["ApplicationJson"]="application/json"})(f=t.MediaTypes||(t.MediaTypes={}));function getProxyUrl(e){const t=c.getProxyUrl(new URL(e));return t?t.href:""}t.getProxyUrl=getProxyUrl;const h=[d.MovedPermanently,d.ResourceMoved,d.SeeOther,d.TemporaryRedirect,d.PermanentRedirect];const m=[d.BadGateway,d.ServiceUnavailable,d.GatewayTimeout];const g=["OPTIONS","GET","DELETE","HEAD"];const v=10;const y=5;class HttpClientError extends Error{constructor(e,t){super(e);this.name="HttpClientError";this.statusCode=t;Object.setPrototypeOf(this,HttpClientError.prototype)}}t.HttpClientError=HttpClientError;class HttpClientResponse{constructor(e){this.message=e}readBody(){return i(this,void 0,void 0,(function*(){return new Promise((e=>i(this,void 0,void 0,(function*(){let t=Buffer.alloc(0);this.message.on("data",(e=>{t=Buffer.concat([t,e])}));this.message.on("end",(()=>{e(t.toString())}))}))))}))}}t.HttpClientResponse=HttpClientResponse;function isHttps(e){const t=new URL(e);return t.protocol==="https:"}t.isHttps=isHttps;class HttpClient{constructor(e,t,r){this._ignoreSslError=false;this._allowRedirects=true;this._allowRedirectDowngrade=false;this._maxRedirects=50;this._allowRetries=false;this._maxRetries=1;this._keepAlive=false;this._disposed=false;this.userAgent=e;this.handlers=t||[];this.requestOptions=r;if(r){if(r.ignoreSslError!=null){this._ignoreSslError=r.ignoreSslError}this._socketTimeout=r.socketTimeout;if(r.allowRedirects!=null){this._allowRedirects=r.allowRedirects}if(r.allowRedirectDowngrade!=null){this._allowRedirectDowngrade=r.allowRedirectDowngrade}if(r.maxRedirects!=null){this._maxRedirects=Math.max(r.maxRedirects,0)}if(r.keepAlive!=null){this._keepAlive=r.keepAlive}if(r.allowRetries!=null){this._allowRetries=r.allowRetries}if(r.maxRetries!=null){this._maxRetries=r.maxRetries}}}options(e,t){return i(this,void 0,void 0,(function*(){return this.request("OPTIONS",e,null,t||{})}))}get(e,t){return i(this,void 0,void 0,(function*(){return this.request("GET",e,null,t||{})}))}del(e,t){return i(this,void 0,void 0,(function*(){return this.request("DELETE",e,null,t||{})}))}post(e,t,r){return i(this,void 0,void 0,(function*(){return this.request("POST",e,t,r||{})}))}patch(e,t,r){return i(this,void 0,void 0,(function*(){return this.request("PATCH",e,t,r||{})}))}put(e,t,r){return i(this,void 0,void 0,(function*(){return this.request("PUT",e,t,r||{})}))}head(e,t){return i(this,void 0,void 0,(function*(){return this.request("HEAD",e,null,t||{})}))}sendStream(e,t,r,n){return i(this,void 0,void 0,(function*(){return this.request(e,t,r,n)}))}getJson(e,t={}){return i(this,void 0,void 0,(function*(){t[p.Accept]=this._getExistingOrDefaultHeader(t,p.Accept,f.ApplicationJson);const r=yield this.get(e,t);return this._processResponse(r,this.requestOptions)}))}postJson(e,t,r={}){return i(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[p.Accept]=this._getExistingOrDefaultHeader(r,p.Accept,f.ApplicationJson);r[p.ContentType]=this._getExistingOrDefaultHeader(r,p.ContentType,f.ApplicationJson);const s=yield this.post(e,n,r);return this._processResponse(s,this.requestOptions)}))}putJson(e,t,r={}){return i(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[p.Accept]=this._getExistingOrDefaultHeader(r,p.Accept,f.ApplicationJson);r[p.ContentType]=this._getExistingOrDefaultHeader(r,p.ContentType,f.ApplicationJson);const s=yield this.put(e,n,r);return this._processResponse(s,this.requestOptions)}))}patchJson(e,t,r={}){return i(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[p.Accept]=this._getExistingOrDefaultHeader(r,p.Accept,f.ApplicationJson);r[p.ContentType]=this._getExistingOrDefaultHeader(r,p.ContentType,f.ApplicationJson);const s=yield this.patch(e,n,r);return this._processResponse(s,this.requestOptions)}))}request(e,t,r,n){return i(this,void 0,void 0,(function*(){if(this._disposed){throw new Error("Client has already been disposed.")}const s=new URL(t);let o=this._prepareRequest(e,s,n);const i=this._allowRetries&&g.includes(e)?this._maxRetries+1:1;let a=0;let u;do{u=yield this.requestRaw(o,r);if(u&&u.message&&u.message.statusCode===d.Unauthorized){let e;for(const t of this.handlers){if(t.canHandleAuthentication(u)){e=t;break}}if(e){return e.handleAuthentication(this,o,r)}else{return u}}let t=this._maxRedirects;while(u.message.statusCode&&h.includes(u.message.statusCode)&&this._allowRedirects&&t>0){const i=u.message.headers["location"];if(!i){break}const a=new URL(i);if(s.protocol==="https:"&&s.protocol!==a.protocol&&!this._allowRedirectDowngrade){throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.")}yield u.readBody();if(a.hostname!==s.hostname){for(const e in n){if(e.toLowerCase()==="authorization"){delete n[e]}}}o=this._prepareRequest(e,a,n);u=yield this.requestRaw(o,r);t--}if(!u.message.statusCode||!m.includes(u.message.statusCode)){return u}a+=1;if(a<i){yield u.readBody();yield this._performExponentialBackoff(a)}}while(a<i);return u}))}dispose(){if(this._agent){this._agent.destroy()}this._disposed=true}requestRaw(e,t){return i(this,void 0,void 0,(function*(){return new Promise(((r,n)=>{function callbackForResult(e,t){if(e){n(e)}else if(!t){n(new Error("Unknown error"))}else{r(t)}}this.requestRawWithCallback(e,t,callbackForResult)}))}))}requestRawWithCallback(e,t,r){if(typeof t==="string"){if(!e.options.headers){e.options.headers={}}e.options.headers["Content-Length"]=Buffer.byteLength(t,"utf8")}let n=false;function handleResult(e,t){if(!n){n=true;r(e,t)}}const s=e.httpModule.request(e.options,(e=>{const t=new HttpClientResponse(e);handleResult(undefined,t)}));let o;s.on("socket",(e=>{o=e}));s.setTimeout(this._socketTimeout||3*6e4,(()=>{if(o){o.end()}handleResult(new Error(`Request timeout: ${e.options.path}`))}));s.on("error",(function(e){handleResult(e)}));if(t&&typeof t==="string"){s.write(t,"utf8")}if(t&&typeof t!=="string"){t.on("close",(function(){s.end()}));t.pipe(s)}else{s.end()}}getAgent(e){const t=new URL(e);return this._getAgent(t)}_prepareRequest(e,t,r){const n={};n.parsedUrl=t;const s=n.parsedUrl.protocol==="https:";n.httpModule=s?u:a;const o=s?443:80;n.options={};n.options.host=n.parsedUrl.hostname;n.options.port=n.parsedUrl.port?parseInt(n.parsedUrl.port):o;n.options.path=(n.parsedUrl.pathname||"")+(n.parsedUrl.search||"");n.options.method=e;n.options.headers=this._mergeHeaders(r);if(this.userAgent!=null){n.options.headers["user-agent"]=this.userAgent}n.options.agent=this._getAgent(n.parsedUrl);if(this.handlers){for(const e of this.handlers){e.prepareRequest(n.options)}}return n}_mergeHeaders(e){if(this.requestOptions&&this.requestOptions.headers){return Object.assign({},lowercaseKeys(this.requestOptions.headers),lowercaseKeys(e||{}))}return lowercaseKeys(e||{})}_getExistingOrDefaultHeader(e,t,r){let n;if(this.requestOptions&&this.requestOptions.headers){n=lowercaseKeys(this.requestOptions.headers)[t]}return e[t]||n||r}_getAgent(e){let t;const r=c.getProxyUrl(e);const n=r&&r.hostname;if(this._keepAlive&&n){t=this._proxyAgent}if(this._keepAlive&&!n){t=this._agent}if(t){return t}const s=e.protocol==="https:";let o=100;if(this.requestOptions){o=this.requestOptions.maxSockets||a.globalAgent.maxSockets}if(r&&r.hostname){const e={maxSockets:o,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(r.username||r.password)&&{proxyAuth:`${r.username}:${r.password}`}),{host:r.hostname,port:r.port})};let n;const i=r.protocol==="https:";if(s){n=i?l.httpsOverHttps:l.httpsOverHttp}else{n=i?l.httpOverHttps:l.httpOverHttp}t=n(e);this._proxyAgent=t}if(this._keepAlive&&!t){const e={keepAlive:this._keepAlive,maxSockets:o};t=s?new u.Agent(e):new a.Agent(e);this._agent=t}if(!t){t=s?u.globalAgent:a.globalAgent}if(s&&this._ignoreSslError){t.options=Object.assign(t.options||{},{rejectUnauthorized:false})}return t}_performExponentialBackoff(e){return i(this,void 0,void 0,(function*(){e=Math.min(v,e);const t=y*Math.pow(2,e);return new Promise((e=>setTimeout((()=>e()),t)))}))}_processResponse(e,t){return i(this,void 0,void 0,(function*(){return new Promise(((r,n)=>i(this,void 0,void 0,(function*(){const s=e.message.statusCode||0;const o={statusCode:s,result:null,headers:{}};if(s===d.NotFound){r(o)}function dateTimeDeserializer(e,t){if(typeof t==="string"){const e=new Date(t);if(!isNaN(e.valueOf())){return e}}return t}let i;let a;try{a=yield e.readBody();if(a&&a.length>0){if(t&&t.deserializeDates){i=JSON.parse(a,dateTimeDeserializer)}else{i=JSON.parse(a)}o.result=i}o.headers=e.message.headers}catch(e){}if(s>299){let e;if(i&&i.message){e=i.message}else if(a&&a.length>0){e=a}else{e=`Failed request: (${s})`}const t=new HttpClientError(e,s);t.result=o.result;n(t)}else{r(o)}}))))}))}}t.HttpClient=HttpClient;const lowercaseKeys=e=>Object.keys(e).reduce(((t,r)=>(t[r.toLowerCase()]=e[r],t)),{})},835:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.checkBypass=t.getProxyUrl=void 0;function getProxyUrl(e){const t=e.protocol==="https:";if(checkBypass(e)){return undefined}const r=(()=>{if(t){return process.env["https_proxy"]||process.env["HTTPS_PROXY"]}else{return process.env["http_proxy"]||process.env["HTTP_PROXY"]}})();if(r){return new URL(r)}else{return undefined}}t.getProxyUrl=getProxyUrl;function checkBypass(e){if(!e.hostname){return false}const t=process.env["no_proxy"]||process.env["NO_PROXY"]||"";if(!t){return false}let r;if(e.port){r=Number(e.port)}else if(e.protocol==="http:"){r=80}else if(e.protocol==="https:"){r=443}const n=[e.hostname.toUpperCase()];if(typeof r==="number"){n.push(`${n[0]}:${r}`)}for(const e of t.split(",").map((e=>e.trim().toUpperCase())).filter((e=>e))){if(n.some((t=>t===e))){return true}}return false}t.checkBypass=checkBypass},294:(e,t,r)=>{e.exports=r(219)},219:(e,t,r)=>{"use strict";var n=r(808);var s=r(404);var o=r(685);var i=r(687);var a=r(361);var u=r(491);var c=r(837);t.httpOverHttp=httpOverHttp;t.httpsOverHttp=httpsOverHttp;t.httpOverHttps=httpOverHttps;t.httpsOverHttps=httpsOverHttps;function httpOverHttp(e){var t=new TunnelingAgent(e);t.request=o.request;return t}function httpsOverHttp(e){var t=new TunnelingAgent(e);t.request=o.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function httpOverHttps(e){var t=new TunnelingAgent(e);t.request=i.request;return t}function httpsOverHttps(e){var t=new TunnelingAgent(e);t.request=i.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function TunnelingAgent(e){var t=this;t.options=e||{};t.proxyOptions=t.options.proxy||{};t.maxSockets=t.options.maxSockets||o.Agent.defaultMaxSockets;t.requests=[];t.sockets=[];t.on("free",(function onFree(e,r,n,s){var o=toOptions(r,n,s);for(var i=0,a=t.requests.length;i<a;++i){var u=t.requests[i];if(u.host===o.host&&u.port===o.port){t.requests.splice(i,1);u.request.onSocket(e);return}}e.destroy();t.removeSocket(e)}))}c.inherits(TunnelingAgent,a.EventEmitter);TunnelingAgent.prototype.addRequest=function addRequest(e,t,r,n){var s=this;var o=mergeOptions({request:e},s.options,toOptions(t,r,n));if(s.sockets.length>=this.maxSockets){s.requests.push(o);return}s.createSocket(o,(function(t){t.on("free",onFree);t.on("close",onCloseOrRemove);t.on("agentRemove",onCloseOrRemove);e.onSocket(t);function onFree(){s.emit("free",t,o)}function onCloseOrRemove(e){s.removeSocket(t);t.removeListener("free",onFree);t.removeListener("close",onCloseOrRemove);t.removeListener("agentRemove",onCloseOrRemove)}}))};TunnelingAgent.prototype.createSocket=function createSocket(e,t){var r=this;var n={};r.sockets.push(n);var s=mergeOptions({},r.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:false,headers:{host:e.host+":"+e.port}});if(e.localAddress){s.localAddress=e.localAddress}if(s.proxyAuth){s.headers=s.headers||{};s.headers["Proxy-Authorization"]="Basic "+new Buffer(s.proxyAuth).toString("base64")}l("making CONNECT request");var o=r.request(s);o.useChunkedEncodingByDefault=false;o.once("response",onResponse);o.once("upgrade",onUpgrade);o.once("connect",onConnect);o.once("error",onError);o.end();function onResponse(e){e.upgrade=true}function onUpgrade(e,t,r){process.nextTick((function(){onConnect(e,t,r)}))}function onConnect(s,i,a){o.removeAllListeners();i.removeAllListeners();if(s.statusCode!==200){l("tunneling socket could not be established, statusCode=%d",s.statusCode);i.destroy();var u=new Error("tunneling socket could not be established, "+"statusCode="+s.statusCode);u.code="ECONNRESET";e.request.emit("error",u);r.removeSocket(n);return}if(a.length>0){l("got illegal response body from proxy");i.destroy();var u=new Error("got illegal response body from proxy");u.code="ECONNRESET";e.request.emit("error",u);r.removeSocket(n);return}l("tunneling connection has established");r.sockets[r.sockets.indexOf(n)]=i;return t(i)}function onError(t){o.removeAllListeners();l("tunneling socket could not be established, cause=%s\n",t.message,t.stack);var s=new Error("tunneling socket could not be established, "+"cause="+t.message);s.code="ECONNRESET";e.request.emit("error",s);r.removeSocket(n)}};TunnelingAgent.prototype.removeSocket=function removeSocket(e){var t=this.sockets.indexOf(e);if(t===-1){return}this.sockets.splice(t,1);var r=this.requests.shift();if(r){this.createSocket(r,(function(e){r.request.onSocket(e)}))}};function createSecureSocket(e,t){var r=this;TunnelingAgent.prototype.createSocket.call(r,e,(function(n){var o=e.request.getHeader("host");var i=mergeOptions({},r.options,{socket:n,servername:o?o.replace(/:.*$/,""):e.host});var a=s.connect(0,i);r.sockets[r.sockets.indexOf(n)]=a;t(a)}))}function toOptions(e,t,r){if(typeof e==="string"){return{host:e,port:t,localAddress:r}}return e}function mergeOptions(e){for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];if(typeof n==="object"){var s=Object.keys(n);for(var o=0,i=s.length;o<i;++o){var a=s[o];if(n[a]!==undefined){e[a]=n[a]}}}}return e}var l;if(process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)){l=function(){var e=Array.prototype.slice.call(arguments);if(typeof e[0]==="string"){e[0]="TUNNEL: "+e[0]}else{e.unshift("TUNNEL:")}console.error.apply(console,e)}}else{l=function(){}}t.debug=l},454:e=>{e.exports=`\n[Unit]\nDescription=Redis Cluster Service\n\n[Service]\nType=oneshot\nExecStart=systemctl start redis-7000 ; systemctl start redis-7001 ; systemctl start redis-7002 ; systemctl start redis-7003 ; systemctl start redis-7004 ; systemctl start redis-7005\nRestart=systemctl restart redis-7000 ; systemctl restart redis-7001 ; systemctl restart redis-7002 ; systemctl restart redis-7003 ; systemctl restart redis-7004 ; systemctl restart redis-7005\nExecStop=systemctl stop redis-7000 ; systemctl stop redis-7001 ; systemctl stop redis-7002 ; systemctl stop redis-7003 ; systemctl stop redis-7004 ; systemctl stop redis-7005\nRemainAfterExit=yes\n\n[Install]\nWantedBy=multi-user.target\n`},46:(e,t,r)=>{"use strict";const n=r(17);const s=r(147);const o=r(37);const{execSync:i}=r(81);const a=`\n#!/bin/bash\n\nset -e\n\ncurl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg\n\necho "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list\n\nsudo apt-get update -y\n\nsudo apt-get install redis -y\n\nsudo sed -i 's/protected-mode yes/protected-mode no/' /etc/redis/redis.conf\n`;e.exports=()=>{const e=n.join(o.tmpdir(),"install-redis.sh");s.writeFileSync(e,a);s.chmodSync(e,"755");i(e,{stdio:"inherit"});s.unlinkSync(e)}},892:e=>{e.exports=e=>`\nbind 0.0.0.0\nprotected-mode no\nport ${e}\ntcp-backlog 511\ntimeout 0\ntcp-keepalive 300\ndaemonize yes\nsupervised auto\npidfile /run/redis/redis-server-${e}.pid\nloglevel notice\nlogfile /var/log/redis/redis-server-${e}.log\ndatabases 16\nalways-show-logo no\nset-proc-title yes\nproc-title-template "{title} {listen-addr} {server-mode}"\nstop-writes-on-bgsave-error yes\nrdbcompression yes\nrdbchecksum yes\ndbfilename dump.rdb\nrdb-del-sync-files no\ndir /var/lib/redis\nreplica-serve-stale-data yes\nreplica-read-only yes\nrepl-diskless-sync yes\nrepl-diskless-sync-delay 5\nrepl-diskless-sync-max-replicas 0\nrepl-diskless-load disabled\nrepl-disable-tcp-nodelay no\nreplica-priority 100\nacllog-max-len 128\njemalloc-bg-thread yes\ncluster-enabled yes\ncluster-config-file nodes-${e}.conf\ncluster-node-timeout 5000\nappendonly yes`},919:e=>{e.exports=e=>`\n[Unit]\nDescription=Advanced key-value store\nAfter=network.target\nDocumentation=http://redis.io/documentation, man:redis-server(1)\n\n[Service]\nType=notify\nExecStart=/usr/bin/redis-server /etc/redis/${e}.conf\nExecStop=/bin/kill -s TERM $MAINPID\nPIDFile=/run/redis/redis-server-${e}.pid\nTimeoutStopSec=0\nRestart=always\nUser=redis\nGroup=redis\nRuntimeDirectory=redis\nRuntimeDirectoryMode=2755\n\nUMask=007\nPrivateTmp=yes\nLimitNOFILE=65535\nPrivateDevices=yes\nProtectHome=yes\nReadOnlyDirectories=/\nReadWriteDirectories=-/var/lib/redis\nReadWriteDirectories=-/var/log/redis\nReadWriteDirectories=-/run/redis\n\nNoNewPrivileges=true\nCapabilityBoundingSet=CAP_SETGID CAP_SETUID CAP_SYS_RESOURCE\nRestrictAddressFamilies=AF_INET AF_INET6 AF_UNIX\nMemoryDenyWriteExecute=true\nProtectKernelModules=true\nProtectKernelTunables=true\nProtectControlGroups=true\nRestrictRealtime=true\nRestrictNamespaces=true\n\n# redis-server can write to its own config file when in cluster mode so we\n# permit writing there by default. If you are not using this feature, it is\n# recommended that you replace the following lines with "ProtectSystem=full".\nProtectSystem=true\nReadWriteDirectories=-/etc/redis\n\n[Install]\nWantedBy=multi-user.target\nAlias=redis.service`},316:(e,t,r)=>{"use strict";const n=r(147);const s=r(37);const o=r(17);const{execSync:i}=r(81);const a=r(892);const u=r(919);const c=r(454);const l=s.tmpdir();const d=`\n#!/bin/bash\n\nset -e\n\nsudo mv ${l}/7*.conf /etc/redis\n\nsudo mv ${l}/redis-*.service /lib/systemd/system\n\nsudo systemctl start redis-cluster.service\n\nredis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas 1 --cluster-yes\n\nredis-cli --cluster check 127.0.0.1:7000\n\nsudo systemctl stop redis-cluster.service\n`;e.exports=()=>{for(let e=7e3;e<7006;e++){n.writeFileSync(o.join(l,`${e}.conf`),a(e));n.writeFileSync(o.join(l,`redis-${e}.service`),u(e))}n.writeFileSync(o.join(l,"redis-cluster.service"),c);const e=o.join(s.tmpdir(),"setup-cluster.sh");n.writeFileSync(e,d);n.chmodSync(e,"755");i(e,{stdio:"inherit"});n.unlinkSync(e)}},491:e=>{"use strict";e.exports=require("assert")},81:e=>{"use strict";e.exports=require("child_process")},361:e=>{"use strict";e.exports=require("events")},147:e=>{"use strict";e.exports=require("fs")},685:e=>{"use strict";e.exports=require("http")},687:e=>{"use strict";e.exports=require("https")},808:e=>{"use strict";e.exports=require("net")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")},404:e=>{"use strict";e.exports=require("tls")},837:e=>{"use strict";e.exports=require("util")}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var s=t[r]={exports:{}};var o=true;try{e[r].call(s.exports,s,s.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{"use strict";const{execSync:e}=__nccwpck_require__(81);const t=__nccwpck_require__(186);const r=__nccwpck_require__(46);const n=__nccwpck_require__(316);(async()=>{try{let s=true;if(t.getInput("cluster")==="false")s=false;console.log("install redis",{cluster:s});r();if(s){console.log("setup redis-cluster");n()}e("redis-server -v",{stdio:"inherit"})}catch(e){t.setFailed(e.message)}})()})();module.exports=r})();