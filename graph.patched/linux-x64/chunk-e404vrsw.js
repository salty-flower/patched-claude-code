// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Fr}from"./chunk-cxjvwxsa.js";import"./chunk-28fj72x7.js";import"./chunk-ndcqd6bh.js";import"./chunk-g79wjybr.js";import"./chunk-4p5wb748.js";import"./chunk-bkr1h20c.js";import"./chunk-5g6j8x8p.js";import"./chunk-670y7hd9.js";import"./chunk-gwj7v27h.js";import"./chunk-4z5wz91m.js";import"./chunk-70ktd4rm.js";import"./chunk-rptge3r8.js";import"./chunk-941sa7c2.js";import"./chunk-p46wpkfz.js";import"./chunk-gx95ar6n.js";import"./chunk-j6z0j5vh.js";import"./chunk-2j48j0j1.js";import"./chunk-3s94kw4m.js";import"./chunk-7dchs7vj.js";import"./chunk-amnc8bbv.js";import"./chunk-nayw0pf7.js";import"./chunk-68vq239n.js";import"./chunk-0hrvnhgh.js";import"./chunk-jhxnp941.js";import"./chunk-m8haxweq.js";import"./chunk-9py7rh29.js";import"./chunk-wchsap03.js";import"./chunk-ag8h4tcz.js";import"./chunk-trynpg3y.js";import"./chunk-hv4n1akt.js";import"./chunk-sh51y7yj.js";import"./chunk-mb5hcwe1.js";import"./chunk-syb80f1m.js";import"./chunk-ettyqnzn.js";import"./chunk-5v4f7g5r.js";import"./chunk-hrwjwwzw.js";import"./chunk-9b9pp2j0.js";import"./chunk-ras5x31x.js";import{pUn,DQ}from"./chunk-cjpd2k0t.js";import"./chunk-wdbbywcf.js";import"./chunk-dmwg443r.js";import"./chunk-4zqg0s2n.js";import"./chunk-pesdmje3.js";import"./chunk-5zqw5ss6.js";import"./chunk-rzq8vrew.js";import"./chunk-nv2bbff4.js";import"./chunk-tfrn9jh8.js";import"./chunk-8ky01sys.js";import"./chunk-xt99khzc.js";import"./chunk-gsa86a2x.js";import"./chunk-qp65fq4n.js";import"./chunk-942093b7.js";import"./chunk-cejxg49w.js";import"./chunk-9peh9gjb.js";import"./chunk-z1mnwnvd.js";import"./chunk-e84gprty.js";import"./chunk-hesrqedr.js";import"./chunk-dz7bwjyz.js";import"./chunk-19kr5wet.js";import"./chunk-agxkvasb.js";import"./chunk-wpwa8wh9.js";import"./chunk-8x6enyhq.js";import"./chunk-dxwrxbnd.js";import"./chunk-wf918jgf.js";import"./chunk-m7wy507r.js";import"./chunk-30xn0w2c.js";import"./chunk-9f88agae.js";import"./chunk-qrw8p75p.js";import"./chunk-rqsafy80.js";import"./chunk-025kqzfg.js";import"./chunk-7qk6zpqr.js";import"./chunk-9p9w9mdw.js";import"./chunk-5pdrsybf.js";import"./chunk-bxs4s6wr.js";import"./chunk-946598ze.js";import"./chunk-v66jm760.js";import"./chunk-chs8nhab.js";import"./chunk-fs1m5djd.js";import"./chunk-571ddenq.js";import"./chunk-ds5pk6ma.js";import"./chunk-hfpf4cs3.js";import"./chunk-whgkjmx2.js";import"./chunk-e3ya4n4j.js";import"./chunk-r71h3n7n.js";import"./chunk-wn3mk0qg.js";import{Dj,zb}from"./chunk-p7b21nkd.js";import"./chunk-rahhvb43.js";import"./chunk-91dqb7wh.js";import"./chunk-xkks19nf.js";import"./chunk-vk00drv7.js";import"./chunk-30bw8frt.js";import"./chunk-me0c3h4h.js";import"./chunk-c91vhg3c.js";import"./chunk-gvd58vpb.js";import"./chunk-vygt57n9.js";import"./chunk-fxrrfs3q.js";import"./chunk-zk0yxkwh.js";import"./chunk-k4t6m1v4.js";import"./chunk-4rvkrdmh.js";import"./chunk-65kgtwr0.js";import"./chunk-ebvbbvjb.js";import"./chunk-vyx0nxv6.js";import"./chunk-rwkxt94c.js";import"./chunk-bhxa600q.js";import"./chunk-ehn9f19s.js";import{k,Mr}from"./chunk-0y12vz6b.js";var b=k(function(ve,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var d={};Mr(d,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>h,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>d,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>D,registerHooks:()=>i,registerPlugin:()=>B,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,I=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...I}})})}function D(e){i(e,()=>!1)}var f=()=>!1;var c=()=>DQ()&&!pUn()&&Fr("tengu_quiet_ember",f());var h={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var B=()=>zb({...h,hooksModule:Dj(import.meta.dir,{register:(e)=>i(e,C)},()=>b())});function C(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,h as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,d as default,c as isAvailable,f as isOnByDefault,D as register,i as registerHooks,B as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
