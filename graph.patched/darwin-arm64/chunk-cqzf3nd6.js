// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Tr}from"./chunk-1901fdh6.js";import"./chunk-bkygtq8f.js";import"./chunk-3mdayxq0.js";import"./chunk-xzypj06m.js";import"./chunk-278j353c.js";import"./chunk-dnq93t1z.js";import"./chunk-wkh5syvr.js";import"./chunk-54xe5s81.js";import"./chunk-r0a9v21k.js";import"./chunk-6dw7xt0q.js";import"./chunk-yh19hj71.js";import"./chunk-k4g6y57j.js";import"./chunk-hbbqggzw.js";import"./chunk-bnfhb7sj.js";import"./chunk-6bcyaxwk.js";import"./chunk-btnsqe7h.js";import"./chunk-e666gr8q.js";import"./chunk-73603qq3.js";import"./chunk-td5pjp2j.js";import"./chunk-52pf9qag.js";import"./chunk-n1esck2w.js";import"./chunk-7snmbrvc.js";import"./chunk-xqs3dvj3.js";import"./chunk-tksxzgy9.js";import"./chunk-0y24kpg2.js";import"./chunk-65qd2bnn.js";import"./chunk-35w1n511.js";import"./chunk-8zhg89kk.js";import"./chunk-h7da0bhz.js";import"./chunk-vv7fafr9.js";import"./chunk-fgjmf9pc.js";import"./chunk-ye9nkzrb.js";import"./chunk-mn5cr59w.js";import"./chunk-44kx210g.js";import"./chunk-hh9t8f7t.js";import"./chunk-wrzcmmn0.js";import"./chunk-nz45cq1q.js";import"./chunk-z5vzymyr.js";import"./chunk-txv2yh90.js";import"./chunk-5r64b6x9.js";import{pYn,jz}from"./chunk-jn6attna.js";import"./chunk-718k5xe7.js";import"./chunk-gafqfm7x.js";import"./chunk-tx0fhcwf.js";import"./chunk-682ngkw1.js";import"./chunk-g3stg8d4.js";import"./chunk-jybqja29.js";import"./chunk-d9vq4daa.js";import"./chunk-47nfkk7z.js";import"./chunk-fbw24n5y.js";import"./chunk-d0wdnxhm.js";import"./chunk-pj4gy1za.js";import"./chunk-zw6exh70.js";import"./chunk-dke9y8sr.js";import"./chunk-61p68esv.js";import"./chunk-zak8j3he.js";import"./chunk-nvk7bh0e.js";import"./chunk-w4a6kzc8.js";import"./chunk-bdh8gqj2.js";import"./chunk-1jaxs49d.js";import"./chunk-c32ssgw0.js";import"./chunk-fekfnp3p.js";import"./chunk-8vbtf69d.js";import"./chunk-n98x2tj8.js";import"./chunk-kww3qk2q.js";import"./chunk-k6f1e9pp.js";import"./chunk-ektty2ew.js";import"./chunk-0dnnva21.js";import"./chunk-vndcs4rv.js";import"./chunk-wna8ryc8.js";import"./chunk-3c05e83r.js";import"./chunk-1qxwm3cf.js";import"./chunk-0rg61144.js";import"./chunk-e65h3rht.js";import"./chunk-7nqmd82e.js";import"./chunk-xewk85mf.js";import"./chunk-ge9ewwa2.js";import"./chunk-3vv2e847.js";import"./chunk-8kj4j9d0.js";import"./chunk-nvfrrmwj.js";import"./chunk-rk99n4cg.js";import"./chunk-b39hwker.js";import"./chunk-798vwh4r.js";import"./chunk-3vzn6jff.js";import"./chunk-3sm6609v.js";import"./chunk-zwab6e3j.js";import"./chunk-dq486axg.js";import"./chunk-9qptpef7.js";import"./chunk-jmghkf3s.js";import{XU,hw}from"./chunk-ynz70n3e.js";import"./chunk-y2snrdn8.js";import"./chunk-53y3fxqn.js";import"./chunk-5b36g088.js";import"./chunk-ean96xsb.js";import"./chunk-zrtgffmb.js";import"./chunk-xq204fcy.js";import"./chunk-74ye1fde.js";import"./chunk-p28cak91.js";import"./chunk-zs3v19vj.js";import"./chunk-ps65a1ga.js";import"./chunk-nxshfbqz.js";import"./chunk-tj5jhejv.js";import"./chunk-nsdbpz9m.js";import"./chunk-3my4rrnz.js";import"./chunk-dztjxxyx.js";import"./chunk-zds0nx71.js";import"./chunk-js1hm3rq.js";import"./chunk-jr1px7r3.js";import"./chunk-7dnefg3p.js";import"./chunk-pk7evkcs.js";import"./chunk-c1a9wnpp.js";import"./chunk-760c7t99.js";import{T,Lr}from"./chunk-71kjn9x8.js";var b=T(function(Ie,k){k.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var h={};Lr(h,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>d,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>h,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>R,registerHooks:()=>i,registerPlugin:()=>C,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,v=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...v}})})}function R(e){i(e,()=>!1)}var f=()=>!1;var c=()=>jz()&&!pYn()&&Tr("tengu_quiet_ember",f());var d={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var C=()=>hw({...d,hooksModule:XU(import.meta.dir,{register:(e)=>i(e,M)},()=>b())});function M(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,d as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,h as default,c as isAvailable,f as isOnByDefault,R as register,i as registerHooks,C as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
