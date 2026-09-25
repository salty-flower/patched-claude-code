// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{na}from"./chunk-twxt3h9y.js";import"./chunk-w9w461gr.js";import"./chunk-6cqmwr9m.js";import"./chunk-s8xs8s76.js";import"./chunk-37kdx3dg.js";import"./chunk-gas689jj.js";import"./chunk-shf1fjz2.js";import"./chunk-zr6jq9j9.js";import"./chunk-w13amena.js";import"./chunk-4cwgnmh9.js";import"./chunk-1y7zyxh8.js";import"./chunk-njn6k74e.js";import"./chunk-3a4khaz5.js";import"./chunk-v9aeg87c.js";import"./chunk-wvb0gwjm.js";import"./chunk-81r5kx3r.js";import"./chunk-j370x2tz.js";import"./chunk-0dpks9t0.js";import"./chunk-vzqvvnm0.js";import"./chunk-5cz12mxk.js";import"./chunk-9cfndpw0.js";import"./chunk-ymkzysdh.js";import"./chunk-zb872eas.js";import"./chunk-tj8y2xcj.js";import"./chunk-gqaj0njn.js";import"./chunk-9vnajd7a.js";import"./chunk-hn35vsf8.js";import"./chunk-shk8jjt1.js";import"./chunk-97rwyxer.js";import"./chunk-ms03d305.js";import"./chunk-tcx7fvpc.js";import"./chunk-kc002nbr.js";import"./chunk-fdnv15ej.js";import{tcn,nKe}from"./chunk-x4gz28fm.js";import"./chunk-emn764wn.js";import"./chunk-cmqyka9v.js";import"./chunk-vvq2vnvw.js";import"./chunk-aneqvevx.js";import"./chunk-ekshy3qa.js";import"./chunk-ry9k94nn.js";import"./chunk-z2w95mdn.js";import"./chunk-amq2nck9.js";import"./chunk-3eeg3qvv.js";import"./chunk-742ky2cp.js";import"./chunk-pkcypf3f.js";import"./chunk-m9hfdm3b.js";import"./chunk-je0c1kfp.js";import"./chunk-kdwykznz.js";import"./chunk-mjmhaa2n.js";import"./chunk-s09n49gq.js";import"./chunk-bnfryxmn.js";import"./chunk-n3x619p1.js";import"./chunk-n875m8bj.js";import"./chunk-0mkbat55.js";import"./chunk-7wq3cxhj.js";import"./chunk-821rxv4j.js";import"./chunk-9pj6s8ha.js";import"./chunk-fp8phndt.js";import"./chunk-7x4fz860.js";import"./chunk-eh0c72zp.js";import"./chunk-2jc9gzqt.js";import"./chunk-m3rjj2qj.js";import"./chunk-pkhrg5v5.js";import"./chunk-wt3kk7dt.js";import"./chunk-wjcvdctc.js";import"./chunk-9fsgjz11.js";import"./chunk-tq81az32.js";import"./chunk-m65e81jc.js";import"./chunk-vn3m1gs0.js";import"./chunk-hg1f9dgc.js";import"./chunk-w3vnd82x.js";import"./chunk-kg44xfte.js";import"./chunk-k59kdd19.js";import"./chunk-dtsvh7pz.js";import"./chunk-8z6ck5c9.js";import"./chunk-eb2vdmgg.js";import"./chunk-82deav7v.js";import"./chunk-90xj2qs9.js";import{Rq,EA}from"./chunk-ybw003aj.js";import"./chunk-ck3z0n4h.js";import"./chunk-entw02h6.js";import"./chunk-wf2aqwcp.js";import"./chunk-8jbeny5z.js";import"./chunk-kf9bybnr.js";import"./chunk-wyewzwe1.js";import"./chunk-apr1pmkm.js";import"./chunk-1f8ahewx.js";import"./chunk-dh68faj3.js";import"./chunk-tjymmzb8.js";import"./chunk-ddnrrbm5.js";import"./chunk-q41x5swz.js";import"./chunk-eksb3eb9.js";import"./chunk-aeqtw871.js";import"./chunk-m53hpgnw.js";import"./chunk-kaepya91.js";import{v,Ro}from"./chunk-q9zds4dm.js";var w=v(function(ye,g){g.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var c={};Ro(c,{DRAFT_HINT:()=>p,PLUGIN_LISTING:()=>d,REMINDER:()=>u,SECTION:()=>m,SECTIONS:()=>f,cutsTheTurn:()=>a,default:()=>c,isAvailable:()=>h,isOnByDefault:()=>l,register:()=>x,registerPlugin:()=>D,typedByTheUser:()=>n});var i={};Ro(i,{DRAFT_HINT:()=>p,REMINDER:()=>u,SECTION:()=>m,SECTIONS:()=>f,cutsTheTurn:()=>a,default:()=>i,register:()=>x,typedByTheUser:()=>n});function n(t){let r=t.text.trim();return t.origin.kind==="composer"&&t.attachments===void 0&&r!==""&&!r.startsWith("/")}var a=(t)=>n(t)&&t.turnId!==void 0&&!t.wait;var p="enter answers now \xB7 ctrl+x enter queues";var f=["focus_mode","focus_mode:L"];var u=`<responsive-mode>
Responsive mode is on. Reply to the user's message above right away, before
any thinking or tool use, even if it is just "I'm on it..." or "Let me
think..." when you need to think first. Write in clear, conversational
English, the way a sharp colleague writes in chat, without eager openers,
flattery, stock apologies or wrap-ups. Then continue the work.
</responsive-mode>`;var m=`# Responsive mode
Responsive mode: the user is watching a live terminal and your #1 priority
is to communicate with them quickly. Before you think or call any tool,
respond IMMEDIATELY with a short message: one or two plain sentences that
acknowledge the request and say what you are about to do. If you need to
think first, say so in a few words ("On it...", "Let me think...") and then
think. Only then continue with thinking and tool use. Do this at the start
of every turn, and again whenever the user sends a new message while you
are working: answer them first, then resume.

Keep those messages short; the first one should take no more than a
sentence or two. Saying what you are about to do before your first tool
call is mandatory in responsive mode, and it comes first.

## Clear, conversational English, with no Claude-isms
Write the way a sharp colleague writes in chat: direct, specific, plain.
Avoid these patterns and their cousins:
- Eager openers: "Great question!", "Certainly!", "Absolutely!", "Sure
  thing!", "Of course!", "I'd be happy to..."
- Agreement and flattery reflexes: "You're absolutely right", "Good
  catch!", "That's a great point"
- Stock apologies: "I apologize for the confusion", "Sorry for the
  oversight", "You're right to push back"
- Throat-clearing: "It's worth noting that", "It's important to note",
  "Essentially", "Basically", "Notably", "To be clear"
- Corporate vocabulary: leverage, robust, seamless, comprehensive,
  streamline, utilize, delve, dive into, crucial, ensure, landscape,
  navigate (a problem), holistic
- Wrap-ups: "In summary", "To summarize", "Hope this helps!", "Let me know
  if you'd like...", "Feel free to...", "Happy to help further"
- Narrated transitions inside an answer: "Here's what I found:", "Let me
  break this down", "Now, let's look at..."; just say the thing. (The quick
  first reply, "On it...", is different and wanted.)
- Restating the user's question back before answering it; reflexive
  hedging ("it depends", "there are many factors") when you actually have
  an answer; headers and bullet lists for an answer that fits in two
  sentences.
- Emoji, and exclamation-mark enthusiasm in general.
Say what you found, what you did, what you need, and stop.`;function x(t){t("prompt.section",{name:f},async(r,e,s)=>{let{text:o}=await s(e);return{text:o===null?m:o}}),t("prompt.submit",async(r,e,s)=>{if(!n(e))return s(e);let o=await s({...e,context:[...e.context??[],u]});if(o.drop===void 0&&a(e))await r.turn.abort({turnId:e.turnId}).catch(()=>{return});return o}),t("ui.render",{component:"PromptHint"},(r,e,s)=>{let o=e.props.isDraft&&e.props.isWorking;return s(o?{...e,props:{...e.props,hint:p}}:e)})}var l=()=>!1;var h=()=>nKe()&&!tcn()&&na("tengu_quiet_ember",l());var d={name:"responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:h};var D=()=>EA({...d,hooksModule:Rq(import.meta.dir,i,()=>w())});export{p as DRAFT_HINT,d as PLUGIN_LISTING,u as REMINDER,m as SECTION,f as SECTIONS,a as cutsTheTurn,c as default,h as isAvailable,l as isOnByDefault,x as register,D as registerPlugin,n as typedByTheUser};
