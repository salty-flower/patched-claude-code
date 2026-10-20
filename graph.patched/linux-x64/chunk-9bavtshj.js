// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Z}from"./chunk-dxktn51d.js";import{eu}from"./chunk-qak60510.js";import{randomBytes as i}from"crypto";function Zo(e){return e==="completed"||e==="failed"||e==="killed"}var mSo=new Set(["local_agent","remote_agent","in_process_teammate","local_workflow"]);function qU(e){return Object.values(e).some(eut)}function S1n(e){return Object.values(e).some((t)=>eut(t)&&t.status!=="paused"&&!(t.type==="in_process_teammate"&&t.identity?.resumableAgentId===void 0)&&!(t.type==="remote_agent"&&(t.ultraplanPhase==="needs_input"||t.ultraplanPhase==="plan_ready"||t.isUltraplan&&t.restoredOnResume)))}function eut(e){return mSo.has(e.type)&&!Zo(e.status)&&!(e.type==="in_process_teammate"&&e.isIdle)&&!(e.type==="remote_agent"&&e.isLongRunning)}function gSo(e){return Object.values(e).some(XTr)}function XTr(e){return e.type==="local_bash"&&!Zo(e.status)}var r={local_bash:"b",local_agent:"a",remote_agent:"r",in_process_teammate:"t",local_workflow:"w",monitor_mcp:"m",monitor_ws:"s",mcp_task:"k",dream:"d",auto_mode_scan:"e",local_memory_import:"n"},o="0123456789abcdefghijklmnopqrstuvwxyz";function cq(e,t){let s=r[e];return s!==void 0&&t.length===9&&t.startsWith(s)&&t.slice(s.length).split("").every((a)=>o.includes(a))}function hSo(e){return e.length<=1024&&/^(?:\/(?!\.{1,2}(?:\/|$))[A-Za-z0-9_.-]+)+$/.test(e)}function w1n(e,t){return hSo(t)&&t.endsWith(`/${e}.output`)}function zk(e){let t=r[e]??"x",s=i(8),a=t;for(let n=0;n<8;n++)a+=o[s[n]%o.length];return a}function gb(e,t,s,a){return{id:e,type:t,status:"pending",description:s,toolUseId:a,startTime:Date.now(),...!Z()&&{outputFile:eu(e)},outputOffset:0,notified:!1}}
export{Zo,mSo,qU,S1n,eut,gSo,XTr,cq,hSo,w1n,zk,gb};
