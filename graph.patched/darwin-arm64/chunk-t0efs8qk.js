// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{$r}from"./chunk-gcyvvtkw.js";import"./chunk-drh3s4e9.js";import"./chunk-63vja5td.js";import"./chunk-vd0a9d2s.js";import"./chunk-a48152q4.js";import"./chunk-eak61y8v.js";import"./chunk-tnh13g2g.js";import"./chunk-k2e8p61g.js";import"./chunk-9exgg8sx.js";import"./chunk-ce4b81xm.js";import"./chunk-dqm3tjsh.js";import"./chunk-70qqbqq4.js";import"./chunk-y208484s.js";import"./chunk-b5feae42.js";import"./chunk-xaschh52.js";import"./chunk-cy0s0eq1.js";import"./chunk-v2r1tbj3.js";import"./chunk-tdmgys2e.js";import"./chunk-7dchs7vj.js";import"./chunk-yj45yszw.js";import"./chunk-ne43gjnt.js";import"./chunk-hz0a4zf6.js";import"./chunk-a7bs4sbc.js";import"./chunk-7194gg2b.js";import"./chunk-as4x8nna.js";import"./chunk-qczqzyxh.js";import"./chunk-q2zdhqvq.js";import"./chunk-ebsg4v3f.js";import"./chunk-xrq7sey1.js";import"./chunk-d9jpb7es.js";import"./chunk-htsd57mk.js";import"./chunk-pzha2ryw.js";import"./chunk-f51x0gch.js";import"./chunk-je76vky8.js";import"./chunk-j1zwmk4n.js";import"./chunk-sd0xvc0m.js";import"./chunk-kp09cc0v.js";import"./chunk-y575z4xw.js";import{x1n,BJ}from"./chunk-pf8p4bsg.js";import"./chunk-630hazsp.js";import"./chunk-3qfs0gea.js";import"./chunk-843ya6e2.js";import"./chunk-35a3sr2r.js";import"./chunk-5g70wphz.js";import"./chunk-2cyvs4wb.js";import"./chunk-rh939hn5.js";import"./chunk-havdj21n.js";import"./chunk-2r0ph8pf.js";import"./chunk-yzpy5cf5.js";import"./chunk-48by85wp.js";import"./chunk-xxchs9s7.js";import"./chunk-fsnz81vy.js";import"./chunk-exvcagr3.js";import"./chunk-vc6d82rm.js";import"./chunk-5tqxeqqd.js";import"./chunk-45vnv946.js";import"./chunk-zp1a5mr6.js";import"./chunk-dr4n1eny.js";import"./chunk-m7sjke7g.js";import"./chunk-84g1ggm4.js";import"./chunk-07wdw7m0.js";import"./chunk-ayvdek13.js";import"./chunk-hbp0s36e.js";import"./chunk-82debp0t.js";import"./chunk-jgmrvhwh.js";import"./chunk-7q1xzeq8.js";import"./chunk-yxxcd79r.js";import"./chunk-8cqnzay2.js";import"./chunk-1x0mmdxb.js";import"./chunk-zttk1yx5.js";import"./chunk-5gqxahqm.js";import"./chunk-svyf12fc.js";import"./chunk-kbn00z3m.js";import"./chunk-g28j50c3.js";import"./chunk-cy4t0v8j.js";import"./chunk-3smfeyq8.js";import"./chunk-pz1x73ay.js";import"./chunk-ccbm7724.js";import"./chunk-rh7py0tc.js";import"./chunk-dryq126j.js";import"./chunk-9rdmsm2q.js";import"./chunk-j9jxxcf5.js";import"./chunk-91pk1a5a.js";import"./chunk-pb9ypbhx.js";import"./chunk-zza0b6kj.js";import{Kj,zS}from"./chunk-0c34z2xq.js";import"./chunk-6p13z9sq.js";import"./chunk-qkj3c0et.js";import"./chunk-zctn9aaf.js";import"./chunk-s1pvsse0.js";import"./chunk-fwcnvxqe.js";import"./chunk-wmrm2j5z.js";import"./chunk-jkhz8ejr.js";import"./chunk-d2m17704.js";import"./chunk-r7tff0ah.js";import"./chunk-4hk3eh7v.js";import"./chunk-x3tm8c2g.js";import"./chunk-eqqjcad1.js";import"./chunk-kpdnxgda.js";import"./chunk-20vgjjee.js";import"./chunk-d3pfyxhw.js";import"./chunk-rgvsr2fj.js";import"./chunk-s07g171s.js";import"./chunk-b9ck3csh.js";import"./chunk-vq057nnn.js";import{k,Hr}from"./chunk-8drz5tx3.js";var b=k(function(ve,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var d={};Hr(d,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>h,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>d,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>D,registerHooks:()=>i,registerPlugin:()=>B,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,I=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...I}})})}function D(e){i(e,()=>!1)}var f=()=>!1;var c=()=>BJ()&&!x1n()&&$r("tengu_quiet_ember",f());var h={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var B=()=>zS({...h,hooksModule:Kj(import.meta.dir,{register:(e)=>i(e,C)},()=>b())});function C(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,h as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,d as default,c as isAvailable,f as isOnByDefault,D as register,i as registerHooks,B as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
