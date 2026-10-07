// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xr}from"./chunk-s46qgfx7.js";import"./chunk-12mdvf4x.js";import"./chunk-29aedz4e.js";import"./chunk-8mvda08c.js";import"./chunk-ht3pd6g4.js";import"./chunk-hdvxmrfb.js";import"./chunk-fqsygynq.js";import"./chunk-ws170zqm.js";import"./chunk-5qeme8w3.js";import"./chunk-xbg4a11x.js";import"./chunk-ym46rm1e.js";import"./chunk-j77txbjn.js";import"./chunk-yfyrtrqq.js";import"./chunk-f8eqwxpt.js";import"./chunk-sgznn49v.js";import"./chunk-pey4mmsy.js";import"./chunk-fqzh3zpr.js";import"./chunk-qfs4y3ww.js";import"./chunk-jppak124.js";import"./chunk-ts0309p1.js";import"./chunk-qbf9wv32.js";import"./chunk-e3gw32ew.js";import"./chunk-a80m1vff.js";import"./chunk-ev2h864q.js";import"./chunk-yt7xs5e7.js";import"./chunk-errb129w.js";import"./chunk-zm2rbh78.js";import"./chunk-egwr9wbg.js";import"./chunk-j4wy5r0f.js";import"./chunk-1jrtnqew.js";import"./chunk-wd4jmzs1.js";import"./chunk-1affnqfa.js";import"./chunk-hd1pzxwr.js";import"./chunk-wq75sevg.js";import"./chunk-vrsbmck5.js";import"./chunk-2pfss7d0.js";import{cDn,_7}from"./chunk-mcq8tx7b.js";import"./chunk-6pm26t04.js";import"./chunk-w5vv1884.js";import"./chunk-k87xjea0.js";import"./chunk-y5s9hk02.js";import"./chunk-nqb0d8cm.js";import"./chunk-zx2a39z1.js";import"./chunk-05852gwt.js";import"./chunk-peyxry7r.js";import"./chunk-efx2t2v4.js";import"./chunk-prs2t84m.js";import"./chunk-9s9xt61j.js";import"./chunk-1613xha0.js";import"./chunk-861a7whf.js";import"./chunk-fpm199ny.js";import"./chunk-sac2pmqn.js";import"./chunk-msjjanss.js";import"./chunk-pae0cprg.js";import"./chunk-yekbj8yj.js";import"./chunk-2cxzjsy9.js";import"./chunk-ma17m27h.js";import"./chunk-h8r0k8e5.js";import"./chunk-6pw2mkqv.js";import"./chunk-jstrrwpw.js";import"./chunk-81x96web.js";import"./chunk-3c5rpefa.js";import"./chunk-xwn85bww.js";import"./chunk-xcq89ne8.js";import"./chunk-vd0fkmt2.js";import"./chunk-3v5rbztp.js";import"./chunk-9k1s2d1q.js";import"./chunk-qvy43n2d.js";import"./chunk-vxnbg770.js";import"./chunk-napcsc17.js";import"./chunk-vchkvryg.js";import"./chunk-j95hbnd3.js";import"./chunk-590ye0ab.js";import"./chunk-bfvymavp.js";import"./chunk-rdy2m4vh.js";import"./chunk-j7hymft9.js";import"./chunk-s7j36v3t.js";import"./chunk-44myv9zp.js";import"./chunk-p7dmh6b6.js";import"./chunk-5bwrderf.js";import"./chunk-e58tctgr.js";import"./chunk-kdpkw3w6.js";import"./chunk-d4ww8xgn.js";import"./chunk-9pdn7rxr.js";import"./chunk-vhhr71m6.js";import{GB,OS}from"./chunk-waw22za0.js";import"./chunk-ka3gedsr.js";import"./chunk-4rdndcw7.js";import"./chunk-rv8wtx56.js";import"./chunk-fy1jza16.js";import"./chunk-xf0v8hrw.js";import"./chunk-aqdr2hzp.js";import"./chunk-zgcypqv5.js";import"./chunk-t0npft1e.js";import"./chunk-xcsctrab.js";import"./chunk-qs7t29dk.js";import"./chunk-dy624h5m.js";import"./chunk-6n9fenms.js";import"./chunk-pxafsfws.js";import"./chunk-0an2wbq6.js";import"./chunk-1d5bwndp.js";import"./chunk-1csct632.js";import"./chunk-pqzrrpbd.js";import"./chunk-at8bm9tq.js";import"./chunk-e3yg5bam.js";import{C,Qr}from"./chunk-rnxw3wwn.js";var k=C(function(ve,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var d={};Qr(d,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>h,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>d,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>O,registerHooks:()=>i,registerPlugin:()=>_,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,b=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...b}})})}function O(e){i(e,()=>!1)}var f=()=>!1;var c=()=>_7()&&!cDn()&&xr("tengu_quiet_ember",f());var h={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var _=()=>OS({...h,hooksModule:GB(import.meta.dir,{register:(e)=>i(e,B)},()=>k())});function B(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,h as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,d as default,c as isAvailable,f as isOnByDefault,O as register,i as registerHooks,_ as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
