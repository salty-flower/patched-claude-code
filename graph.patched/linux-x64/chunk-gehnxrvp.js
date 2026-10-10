// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Gr}from"./chunk-0ycjphb5.js";import"./chunk-dn762950.js";import"./chunk-j27d47mr.js";import"./chunk-ctt36bn8.js";import"./chunk-fcerdfs3.js";import"./chunk-wkmq9ht0.js";import"./chunk-m1rt7wpr.js";import"./chunk-jtpfgrzr.js";import"./chunk-xgw72tt1.js";import"./chunk-6kc68p18.js";import"./chunk-s7bhz6qz.js";import"./chunk-dp4xqs6t.js";import"./chunk-x0qpydt2.js";import"./chunk-bd805sh6.js";import"./chunk-24agvrd9.js";import"./chunk-qch5xj2a.js";import"./chunk-etbngzss.js";import"./chunk-p9frg3mj.js";import"./chunk-2d9a83dh.js";import"./chunk-kgp7t7yx.js";import"./chunk-04d4ftnx.js";import"./chunk-c56kpkt7.js";import"./chunk-7mawjt4q.js";import"./chunk-tchztk88.js";import"./chunk-z0brrd3r.js";import"./chunk-h7cbghgp.js";import"./chunk-h6pppnx2.js";import"./chunk-wew3321y.js";import"./chunk-223dyewd.js";import"./chunk-w1n7t02f.js";import"./chunk-3fj60qgx.js";import"./chunk-n1z3wrvm.js";import"./chunk-zwxj12s4.js";import"./chunk-3yz9zdww.js";import"./chunk-se8vehhp.js";import"./chunk-63xa24b4.js";import"./chunk-5k7wva7c.js";import{BGn,xZ}from"./chunk-x47nahfr.js";import"./chunk-xb9cceab.js";import"./chunk-craerjpn.js";import"./chunk-6gk7mpsm.js";import"./chunk-fnj5y75n.js";import"./chunk-9dn6gg6j.js";import"./chunk-qk3m4n8a.js";import"./chunk-52bcnmbr.js";import"./chunk-k7dkeqsc.js";import"./chunk-r3z1chqx.js";import"./chunk-6bjtvbt8.js";import"./chunk-1692wahf.js";import"./chunk-gc7ea4xt.js";import"./chunk-03gkt7r5.js";import"./chunk-nj0630nv.js";import"./chunk-n1fq1c8e.js";import"./chunk-hz24p3zh.js";import"./chunk-sawpz2mr.js";import"./chunk-6dwnw6av.js";import"./chunk-9fa34ggx.js";import"./chunk-55x53sfe.js";import"./chunk-xbsy70c7.js";import"./chunk-ph7a449e.js";import"./chunk-vpp1psvz.js";import"./chunk-bckbp4r1.js";import"./chunk-qbpgcqdd.js";import"./chunk-pw6z2cbs.js";import"./chunk-75wzvwyz.js";import"./chunk-t0b6khh6.js";import"./chunk-74djrymf.js";import"./chunk-d2sd20y7.js";import"./chunk-pp3y3t61.js";import"./chunk-mqgsnx6k.js";import"./chunk-peahjaep.js";import"./chunk-6g4165br.js";import"./chunk-231n9cft.js";import"./chunk-6s83kxfy.js";import"./chunk-0sgn6snt.js";import"./chunk-2321ytcf.js";import"./chunk-1ej05ybf.js";import"./chunk-mvz09dzd.js";import"./chunk-k3tkc302.js";import"./chunk-jynzk4xv.js";import"./chunk-tw5t5h13.js";import"./chunk-wrn3nvp5.js";import"./chunk-sk5bs87n.js";import"./chunk-c5mcach4.js";import"./chunk-bmzhpr9h.js";import{VW,gS}from"./chunk-nbx3tg29.js";import"./chunk-b97fvbrv.js";import"./chunk-17w0r6ry.js";import"./chunk-pjqd7qee.js";import"./chunk-xv9n7kza.js";import"./chunk-f0v3xmb1.js";import"./chunk-chd251pa.js";import"./chunk-wtrd0hw3.js";import"./chunk-v214ecah.js";import"./chunk-9nfq6p43.js";import"./chunk-77t63btp.js";import"./chunk-yp41169e.js";import"./chunk-2dp0fzyb.js";import"./chunk-pj42g5eb.js";import"./chunk-tfc1vf2h.js";import"./chunk-6cee9jwv.js";import"./chunk-yngqe5v3.js";import"./chunk-nnawdxg4.js";import"./chunk-svqqgdca.js";import"./chunk-dze6yaxw.js";import"./chunk-m6z3m7rx.js";import"./chunk-tybndaby.js";import"./chunk-79wfew46.js";import{C,Mr}from"./chunk-cj4xndke.js";var k=C(function(ve,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var d={};Mr(d,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>h,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>d,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>O,registerHooks:()=>i,registerPlugin:()=>_,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
Responsive mode is on. Reply to the user's message above right away, before
any thinking or tool use, even if it is just "I'm on it..." or "Let me
think..." when you need to think first. Write in clear, conversational
English, the way a sharp colleague writes in chat, without eager openers,
flattery, stock apologies or wrap-ups. Then continue the work.
</responsive-mode>`;var l=`# Responsive mode
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,b=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...b}})})}function O(e){i(e,()=>!1)}var f=()=>!1;var c=()=>xZ()&&!BGn()&&Gr("tengu_quiet_ember",f());var h={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var _=()=>gS({...h,hooksModule:VW(import.meta.dir,{register:(e)=>i(e,B)},()=>k())});function B(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,h as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,d as default,c as isAvailable,f as isOnByDefault,O as register,i as registerHooks,_ as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
