// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Lo}from"./chunk-f74xvn8g.js";import"./chunk-b1a55n2g.js";import"./chunk-fkak21hw.js";import"./chunk-bxhyh54r.js";import"./chunk-k3gp1qmc.js";import"./chunk-aap6zsd0.js";import"./chunk-vqpmen5t.js";import"./chunk-dmpcy5p5.js";import"./chunk-actz3rxp.js";import"./chunk-v34cw0y6.js";import"./chunk-z10rc4tf.js";import"./chunk-qs4mqgaa.js";import"./chunk-5054mktj.js";import"./chunk-vtytg7jt.js";import"./chunk-055ns4k8.js";import"./chunk-jsyn1gcs.js";import"./chunk-rg63yke9.js";import"./chunk-hjabkkf1.js";import"./chunk-mpc9nxv5.js";import"./chunk-a1fdkwrj.js";import"./chunk-gn6mgw10.js";import"./chunk-dpwtsz9f.js";import"./chunk-39a74rgt.js";import"./chunk-ztarcw08.js";import"./chunk-ts15vbh8.js";import"./chunk-kmk230n6.js";import"./chunk-5cmjjb37.js";import"./chunk-23df1pks.js";import"./chunk-aqx56v12.js";import"./chunk-agdg3czn.js";import"./chunk-bgchm1w8.js";import"./chunk-wrvjx900.js";import"./chunk-1m79ycfm.js";import"./chunk-rh0avczn.js";import{fbn,_ue}from"./chunk-gph9jdam.js";import"./chunk-5d5c7e2g.js";import"./chunk-kn03s03j.js";import"./chunk-4ckr9ryx.js";import"./chunk-e8wvqxfe.js";import"./chunk-te8frg39.js";import"./chunk-srhvbygf.js";import"./chunk-ta8ma392.js";import"./chunk-thv2q2wm.js";import"./chunk-b55ccf0t.js";import"./chunk-nsz480sc.js";import"./chunk-g768q95w.js";import"./chunk-xzfbbx57.js";import"./chunk-n0qz83r1.js";import"./chunk-g6a51st9.js";import"./chunk-hsxc9d35.js";import"./chunk-n2v4180x.js";import"./chunk-sgn7x12n.js";import"./chunk-vckxp12y.js";import"./chunk-7rw7arkc.js";import"./chunk-wr9nx1kq.js";import"./chunk-7y7h3m02.js";import"./chunk-c6m7kw11.js";import"./chunk-e2p4d1td.js";import"./chunk-e178kbrw.js";import"./chunk-97mvw3mk.js";import"./chunk-wyssq993.js";import"./chunk-yrpa7y9e.js";import"./chunk-4dpwzxdy.js";import"./chunk-qfbb586n.js";import"./chunk-dwzmd53c.js";import"./chunk-6vskt3q5.js";import"./chunk-mbk7s6pb.js";import"./chunk-vegxfg9d.js";import"./chunk-vd01jhy3.js";import"./chunk-ff0zt7cd.js";import"./chunk-abd6nk28.js";import"./chunk-yp0c47d4.js";import"./chunk-5zcypx67.js";import"./chunk-dd2zynyc.js";import"./chunk-8dcdden3.js";import"./chunk-g1at15hs.js";import"./chunk-rpt0hvfr.js";import"./chunk-dyk026rw.js";import"./chunk-98y0v64v.js";import"./chunk-2sb5hqyj.js";import{m2,eS}from"./chunk-66bxveym.js";import"./chunk-at56fzd9.js";import"./chunk-wz829bsy.js";import"./chunk-av25dwfn.js";import"./chunk-btche4n0.js";import"./chunk-gfn67bwy.js";import"./chunk-3p89rsbh.js";import"./chunk-2edt3szn.js";import"./chunk-7a1w42qw.js";import"./chunk-2wxbpvj0.js";import"./chunk-fsez7m0p.js";import"./chunk-kb9b9z9h.js";import"./chunk-n12wgbvr.js";import"./chunk-74ez0jks.js";import"./chunk-w7hspz3v.js";import"./chunk-kgxwy2cg.js";import"./chunk-9qkr126n.js";import{v,to}from"./chunk-675ch139.js";var k=v(function(be,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var y={};to(y,{DRAFT_HINT:()=>u,PLUGIN_LISTING:()=>d,REMINDER:()=>l,SECTION:()=>f,SECTIONS:()=>g,cutsTheTurn:()=>p,default:()=>y,isAvailable:()=>h,isOnByDefault:()=>c,register:()=>N,registerHooks:()=>i,registerPlugin:()=>_,spliceDraftHint:()=>m,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var u="enter to interrupt and send \xB7 ctrl+x then enter to queue",m=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var g=["focus_mode","focus_mode:L"];var l=`<responsive-mode>
Responsive mode is on. Reply to the user's message above right away, before
any thinking or tool use, even if it is just "I'm on it..." or "Let me
think..." when you need to think first. Write in clear, conversational
English, the way a sharp colleague writes in chat, without eager openers,
flattery, stock apologies or wrap-ups. Then continue the work.
</responsive-mode>`;var f=`# Responsive mode
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:g},async(a,t,o)=>{let{text:r}=await o(t);return{text:r===null?f:r}}),e("prompt.submit",async(a,t,o)=>{if(!n(t))return o(t);let r=await o({...t,context:[...t.context??[],l]});if(r.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return r}),e("ui.render",{component:"PromptHint"},async(a,t,o)=>{if(!(t.props.isDraft&&t.props.isWorking))return o(t);let r=s()?m():u;return o({...t,props:{...t.props,hint:r}})})}function N(e){i(e,()=>!1)}var c=()=>!1;var h=()=>_ue()&&!fbn()&&Lo("tengu_quiet_ember",c());var d={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:h,defaultEnabled:!1};var _=()=>eS({...d,hooksModule:m2(import.meta.dir,{register:(e)=>i(e,L)},()=>k())});function L(){return!1}export{u as DRAFT_HINT,d as PLUGIN_LISTING,l as REMINDER,f as SECTION,g as SECTIONS,p as cutsTheTurn,y as default,h as isAvailable,c as isOnByDefault,N as register,i as registerHooks,_ as registerPlugin,m as spliceDraftHint,n as typedByTheUser};
