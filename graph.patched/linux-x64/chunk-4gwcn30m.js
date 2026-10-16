// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ar}from"./chunk-k16gymf7.js";import"./chunk-bfqfmbd0.js";import"./chunk-rs6p8dg3.js";import"./chunk-eqmywwjn.js";import"./chunk-qeqy4res.js";import"./chunk-fr28a3he.js";import"./chunk-w7m8nded.js";import"./chunk-r2xfgg0x.js";import"./chunk-pzq28dp7.js";import"./chunk-c61xdsy8.js";import"./chunk-63mtweh2.js";import"./chunk-xwn0mfnc.js";import"./chunk-8fqmxv14.js";import"./chunk-cwsn6mdf.js";import"./chunk-xc4b32zy.js";import"./chunk-b9getfsf.js";import"./chunk-9pt2nr7j.js";import"./chunk-73603qq3.js";import"./chunk-n1y0nb3t.js";import"./chunk-h723y8sa.js";import"./chunk-rhe3yjtx.js";import"./chunk-zk4arnjj.js";import"./chunk-30b5ph10.js";import"./chunk-xz2ecwrk.js";import"./chunk-snmng9rv.js";import"./chunk-4dcbf4v7.js";import"./chunk-xx1rar7b.js";import"./chunk-eveykdxw.js";import"./chunk-he4afcmc.js";import"./chunk-g84j6s5r.js";import"./chunk-5znx2wc7.js";import"./chunk-brkdb8k6.js";import"./chunk-sbc6y92x.js";import"./chunk-70f8b1fa.js";import"./chunk-z5pqasm7.js";import"./chunk-wz19y5sy.js";import"./chunk-ameg1sn6.js";import"./chunk-zg8w8y5z.js";import"./chunk-ac6y47nt.js";import"./chunk-he0s6sfd.js";import{X8n,M2}from"./chunk-en4g449d.js";import"./chunk-zkbf0zdp.js";import"./chunk-wrm9spc9.js";import"./chunk-v5v0bm5h.js";import"./chunk-55hpndzc.js";import"./chunk-j0cszb7p.js";import"./chunk-9t95885m.js";import"./chunk-9155m2kg.js";import"./chunk-e6akwa1s.js";import"./chunk-4m7tg52y.js";import"./chunk-0v63deca.js";import"./chunk-v4b5tf75.js";import"./chunk-d3cqnp4r.js";import"./chunk-y70k7r60.js";import"./chunk-a502zyxr.js";import"./chunk-xyn7gydh.js";import"./chunk-kmgwwaz2.js";import"./chunk-rzncn4a3.js";import"./chunk-xsxnmhwb.js";import"./chunk-dzt95g1x.js";import"./chunk-n03wywra.js";import"./chunk-0nwsa03d.js";import"./chunk-xex0gggg.js";import"./chunk-4zax65nq.js";import"./chunk-egsk30hx.js";import"./chunk-gn6vejgv.js";import"./chunk-9vjdjq5x.js";import"./chunk-v55shcxh.js";import"./chunk-spj3hc88.js";import"./chunk-vt9rkdza.js";import"./chunk-5vywp25k.js";import"./chunk-m1dg0rsv.js";import"./chunk-9082r4nb.js";import"./chunk-21ehane9.js";import"./chunk-yfyzz0k6.js";import"./chunk-qj5k75tz.js";import"./chunk-7z1je35j.js";import"./chunk-5v7hcwhj.js";import"./chunk-bkmwhar8.js";import"./chunk-4z1qxvsq.js";import"./chunk-bsdd04br.js";import"./chunk-8g5pckzs.js";import"./chunk-694thzp1.js";import"./chunk-b8e5f7zw.js";import"./chunk-3axhkz18.js";import"./chunk-2j2r7x9x.js";import"./chunk-0afeyn3v.js";import"./chunk-d1paj1ja.js";import"./chunk-hc3mrz77.js";import{WU,gw}from"./chunk-3x4atckz.js";import"./chunk-5fqwzsb0.js";import"./chunk-ag43gp5y.js";import"./chunk-jam1dcjh.js";import"./chunk-4exjsgam.js";import"./chunk-b9mwwf31.js";import"./chunk-6yjayhyn.js";import"./chunk-m09ded2g.js";import"./chunk-mm8dw908.js";import"./chunk-6z47rnsq.js";import"./chunk-041rk1gc.js";import"./chunk-sdt3vs8w.js";import"./chunk-7qtsq477.js";import"./chunk-peqw4kvv.js";import"./chunk-f83bg975.js";import"./chunk-qn1r3sx1.js";import"./chunk-yhkfehzg.js";import"./chunk-e0thntkh.js";import"./chunk-y6e2zv6a.js";import"./chunk-brdnce5f.js";import"./chunk-8dm571cw.js";import"./chunk-67r4k30a.js";import"./chunk-29rv67gt.js";import{C,Lr}from"./chunk-a2q6egn2.js";var k=C(function(Ie,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var h={};Lr(h,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>d,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>h,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>H,registerHooks:()=>i,registerPlugin:()=>_,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,b=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...b}})})}function H(e){i(e,()=>!1)}var f=()=>!1;var c=()=>M2()&&!X8n()&&Ar("tengu_quiet_ember",f());var d={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var _=()=>gw({...d,hooksModule:WU(import.meta.dir,{register:(e)=>i(e,M)},()=>k())});function M(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,d as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,h as default,c as isAvailable,f as isOnByDefault,H as register,i as registerHooks,_ as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
