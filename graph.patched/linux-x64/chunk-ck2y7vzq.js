// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{na}from"./chunk-5khn4tvf.js";import"./chunk-kp7gknaw.js";import"./chunk-4a5nddj6.js";import"./chunk-cqc88nqm.js";import"./chunk-7yckkh1m.js";import"./chunk-rnxz8hs2.js";import"./chunk-2bj5eqbj.js";import"./chunk-7r0w3nmp.js";import"./chunk-35k7s716.js";import"./chunk-8bp13hnn.js";import"./chunk-1y7zyxh8.js";import"./chunk-65nweewy.js";import"./chunk-ay603yys.js";import"./chunk-dqhw8yqd.js";import"./chunk-wfscmafr.js";import"./chunk-kcjajdc8.js";import"./chunk-nqsdwfmt.js";import"./chunk-0n80jtth.js";import"./chunk-vzqvvnm0.js";import"./chunk-xe0dn6dd.js";import"./chunk-bh8vsyek.js";import"./chunk-2pwc1ycq.js";import"./chunk-8cvm4kna.js";import"./chunk-be6dnhr5.js";import"./chunk-kvqsg7vn.js";import"./chunk-ahgv64tk.js";import"./chunk-a22am1vw.js";import"./chunk-bzbw9xhh.js";import"./chunk-cqpd6xa9.js";import"./chunk-402jrhr4.js";import"./chunk-99avamm5.js";import"./chunk-jrrd36we.js";import"./chunk-v5zz2h09.js";import{Fln,q5e}from"./chunk-wckxjewz.js";import"./chunk-dzhe9h05.js";import"./chunk-kbc46qv2.js";import"./chunk-byb2kdm8.js";import"./chunk-3hxvvnfw.js";import"./chunk-b93xrf5w.js";import"./chunk-bcb1dwb6.js";import"./chunk-5wq5hbjb.js";import"./chunk-z36twt5k.js";import"./chunk-q5xfazs5.js";import"./chunk-bg3bhqbb.js";import"./chunk-ewxewhf1.js";import"./chunk-6r1h1xyw.js";import"./chunk-pw35yar9.js";import"./chunk-z18m6zwf.js";import"./chunk-arteaep2.js";import"./chunk-qfgzcy5r.js";import"./chunk-yx172t9j.js";import"./chunk-5bxxc6dq.js";import"./chunk-b7h8pwnv.js";import"./chunk-kycy9m8x.js";import"./chunk-cg7sbvw4.js";import"./chunk-1mvp0wgf.js";import"./chunk-kb3kx2ee.js";import"./chunk-983v6s4f.js";import"./chunk-hcxjkx3f.js";import"./chunk-jc2s6yqf.js";import"./chunk-pwyp6fhc.js";import"./chunk-ftmzfxxh.js";import"./chunk-fs3a332c.js";import"./chunk-j2fqyv7e.js";import"./chunk-jcesa5j7.js";import"./chunk-7qxbq1fh.js";import"./chunk-qap95pw1.js";import"./chunk-30mcx5zy.js";import"./chunk-9c4ja01c.js";import"./chunk-6j512bza.js";import"./chunk-hvxn56gd.js";import"./chunk-p8660rxp.js";import"./chunk-yck00zks.js";import"./chunk-nnyew09e.js";import"./chunk-byb3fx4c.js";import"./chunk-qswmg1vp.js";import"./chunk-5qkg4sxr.js";import"./chunk-nb76zxqr.js";import{y4,bT}from"./chunk-zp55ksfn.js";import"./chunk-r1szjv1x.js";import"./chunk-wrhs39mg.js";import"./chunk-5xpkpxd2.js";import"./chunk-gbkect21.js";import"./chunk-cft4wy8y.js";import"./chunk-q6emaxc6.js";import"./chunk-ady37mbs.js";import"./chunk-1z6682h0.js";import"./chunk-2hg6rfqa.js";import"./chunk-h01ygmyn.js";import"./chunk-04bbxq8e.js";import"./chunk-7891bvze.js";import"./chunk-pf8mfgbr.js";import"./chunk-hsr4yk27.js";import"./chunk-tbbqtfdj.js";import"./chunk-j9g7t4xw.js";import{E,Ro}from"./chunk-0dapr5gw.js";var w=E(function(ye,g){g.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var c={};Ro(c,{DRAFT_HINT:()=>p,PLUGIN_LISTING:()=>d,REMINDER:()=>u,SECTION:()=>m,SECTIONS:()=>f,cutsTheTurn:()=>a,default:()=>c,isAvailable:()=>h,isOnByDefault:()=>l,register:()=>x,registerPlugin:()=>D,typedByTheUser:()=>n});var i={};Ro(i,{DRAFT_HINT:()=>p,REMINDER:()=>u,SECTION:()=>m,SECTIONS:()=>f,cutsTheTurn:()=>a,default:()=>i,register:()=>x,typedByTheUser:()=>n});function n(t){let r=t.text.trim();return t.origin.kind==="composer"&&t.attachments===void 0&&r!==""&&!r.startsWith("/")}var a=(t)=>n(t)&&t.turnId!==void 0&&!t.wait;var p="enter answers now \xB7 ctrl+x enter queues";var f=["focus_mode","focus_mode:L"];var u=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function x(t){t("prompt.section",{name:f},async(r,e,s)=>{let{text:o}=await s(e);return{text:o===null?m:o}}),t("prompt.submit",async(r,e,s)=>{if(!n(e))return s(e);let o=await s({...e,context:[...e.context??[],u]});if(o.drop===void 0&&a(e))await r.turn.abort({turnId:e.turnId}).catch(()=>{return});return o}),t("ui.render",{component:"PromptHint"},(r,e,s)=>{let o=e.props.isDraft&&e.props.isWorking;return s(o?{...e,props:{...e.props,hint:p}}:e)})}var l=()=>!1;var h=()=>q5e()&&!Fln()&&na("tengu_quiet_ember",l());var d={name:"responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:h};var D=()=>bT({...d,hooksModule:y4(import.meta.dir,i,()=>w())});export{p as DRAFT_HINT,d as PLUGIN_LISTING,u as REMINDER,m as SECTION,f as SECTIONS,a as cutsTheTurn,c as default,h as isAvailable,l as isOnByDefault,x as register,D as registerPlugin,n as typedByTheUser};
