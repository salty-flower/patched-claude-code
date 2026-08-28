// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{hl,be,oe}from"./chunk-ghnc2x4f.js";import{Oh}from"./chunk-f8tr85xg.js";import{g}from"./chunk-8mr77ghb.js";import{fe}from"./chunk-249dymdd.js";import{o,t}from"./chunk-htcaw08y.js";import{Ce}from"./chunk-kb8k2djv.js";import{Zo}from"./chunk-payte8nn.js";import{e,r}from"./chunk-80eepr01.js";import{E,N}from"./chunk-5752v0zq.js";import{p}from"./chunk-t2kfemrk.js";N();function D(f){if(f.remoteDialogSeen){return f}return{...f,remoteDialogSeen:!0}}function HTt(P){let n=g(10),{onDone:i}=P,{storageV5:s}=fe(),d,h;if(n[0]!==s)d=()=>{be(D,s)},h=[s],n[0]=s,n[1]=d,n[2]=h;else d=n[1],h=n[2];E(d,h);let C;if(n[3]===p)C=[{label:"Enable Remote Control",description:"Opens a secure connection to claude.ai.",value:"enable"},{label:"Never mind",description:"You can always enable it later with /remote-control.",value:"dismiss"}],n[3]=C;else C=n[3];let W=C,b;if(n[4]===p)b=r(o,{marginBottom:1,flexDirection:"column",children:[e(t,{children:"Take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser."}),e(t,{children:" "}),e(t,{children:"The session keeps running on this machine. Use your other devices as a remote control. Disconnect anytime with /remote-control."})]}),n[4]=b;else b=n[4];let m;if(n[5]!==i)m=()=>i("dismiss"),n[5]=i,n[6]=m;else m=n[6];let y;if(n[7]!==i||n[8]!==m)y=e(Zo,{title:"Remote Control",children:r(o,{flexDirection:"column",paddingX:2,paddingY:1,children:[b,e(o,{children:e(Ce,{options:W,onChange:i,onCancel:m})})]})}),n[7]=i,n[8]=m,n[9]=y;else y=n[9];return y}function uzt(){if(oe().remoteDialogSeen)return!1;if(!Oh())return!1;if(!hl())return!1;return!0}
export{HTt,uzt};
