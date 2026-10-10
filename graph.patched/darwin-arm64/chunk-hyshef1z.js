// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"./chunk-yvnhkg35.js";var l=["\xB7","\u2722","\u2733","\u2736","\u273B","\u273B"],p=["\xB7","\u2722","\u2733","\u2736","\u273B","\u273D"],T=["\xB7","\u2722","*","\u2736","\u273B","\u273D"],d=[...l,...l.toReversed()],f=[...p,...p.toReversed()],y=[...T,...T.toReversed()];function Vdn(){if(a.TERM==="xterm-ghostty")return l;return p}function HIe(){if(a.TERM==="xterm-ghostty")return d;return f}var g=8;function SC(r){return Math.round(r*g)/g}function zFt(r){return SC(r/360)*360}function MIe(r,t){return(1-Math.cos(2*Math.PI*r/t))/2}function Uh(r,t,i){return{r:Math.round(r.r+(t.r-r.r)*i),g:Math.round(r.g+(t.g-r.g)*i),b:Math.round(r.b+(t.b-r.b)*i)}}function Sm(r){return`rgb(${r.r},${r.g},${r.b})`}function VFt(r){let t=(r%360+360)%360,i=0.7,m=0.6,e=(1-Math.abs(0.19999999999999996))*0.7,n=e*(1-Math.abs(t/60%2-1)),R=0.6-e/2,o=0,s=0,u=0;if(t<60)o=e,s=n;else if(t<120)o=n,s=e;else if(t<180)s=e,u=n;else if(t<240)s=n,u=e;else if(t<300)o=n,u=e;else o=e,u=n;return{r:Math.round((o+R)*255),g:Math.round((s+R)*255),b:Math.round((u+R)*255)}}function lS(r){let t=r.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);return t?{r:parseInt(t[1],10),g:parseInt(t[2],10),b:parseInt(t[3],10)}:null}
export{Vdn,HIe,SC,zFt,MIe,Uh,Sm,VFt,lS};
