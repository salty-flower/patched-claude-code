// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Lo}from"./chunk-er6f56rj.js";import"./chunk-ypa64mmn.js";import"./chunk-g5e6pf8s.js";import"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-g9zw99sb.js";import"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import"./chunk-h1eby6n2.js";import"./chunk-dsp1md5e.js";import"./chunk-sxefq60x.js";import"./chunk-1fpwxv0g.js";import"./chunk-vmffs68f.js";import"./chunk-3wz0srxw.js";import"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import"./chunk-zwbw6dvp.js";import"./chunk-mpc9nxv5.js";import"./chunk-a453ergf.js";import"./chunk-aykv0zbt.js";import"./chunk-sc069zjc.js";import"./chunk-xs651030.js";import"./chunk-57g2c672.js";import"./chunk-35fstck9.js";import"./chunk-ccvm8ey1.js";import"./chunk-ngfc6f6n.js";import"./chunk-n5atsp4q.js";import"./chunk-631kxjhr.js";import"./chunk-rdhfzq5v.js";import"./chunk-3vg91ev9.js";import"./chunk-bt9vca5h.js";import"./chunk-k7eq4ze9.js";import"./chunk-r0wx2yn9.js";import{xSn,Cue}from"./chunk-n8h76tq4.js";import"./chunk-fmk5eq99.js";import"./chunk-820d2q3e.js";import"./chunk-by04ga81.js";import"./chunk-nwtspmbg.js";import"./chunk-kpa06dsa.js";import"./chunk-zpb414p7.js";import"./chunk-pgjb8vhf.js";import"./chunk-ya4yfeap.js";import"./chunk-xr1m5xnp.js";import"./chunk-j0n5hmbg.js";import"./chunk-dn2273cv.js";import"./chunk-vratfdfe.js";import"./chunk-3pxs8n2a.js";import"./chunk-e561d543.js";import"./chunk-766463nm.js";import"./chunk-ntsbwr3d.js";import"./chunk-2zhezxsa.js";import"./chunk-kq5cja6x.js";import"./chunk-6kpcse29.js";import"./chunk-58nkm0fd.js";import"./chunk-q8pmvej3.js";import"./chunk-fdyaqynn.js";import"./chunk-wxpgf6xz.js";import"./chunk-tfngbndy.js";import"./chunk-8h01acb1.js";import"./chunk-ykkj96qc.js";import"./chunk-gzx138r6.js";import"./chunk-j3ncme2z.js";import"./chunk-jqre7qs5.js";import"./chunk-awrqx9ff.js";import"./chunk-jadxt0j8.js";import"./chunk-mbr6m81k.js";import"./chunk-p3842md4.js";import"./chunk-fh513ghb.js";import"./chunk-610gtpa9.js";import"./chunk-ka4b5aqy.js";import"./chunk-97k9kd9d.js";import"./chunk-pnss6pgj.js";import"./chunk-kt9hyg55.js";import"./chunk-vc06pma6.js";import"./chunk-hjhshw1j.js";import"./chunk-v9v7yqrh.js";import"./chunk-0y6wkmcj.js";import"./chunk-xbr85626.js";import"./chunk-tzrm2y8w.js";import{E6,tb}from"./chunk-z7ga8gtz.js";import"./chunk-t78dzq94.js";import"./chunk-1e8yvrwp.js";import"./chunk-sr12pz9k.js";import"./chunk-00v37vwv.js";import"./chunk-5yg4avpf.js";import"./chunk-bq7qbt1w.js";import"./chunk-dyxe93g1.js";import"./chunk-tn1j6vmr.js";import"./chunk-99m0p1v3.js";import"./chunk-44118748.js";import"./chunk-kacqaca4.js";import"./chunk-b8ghx04f.js";import"./chunk-r1n6vzwg.js";import"./chunk-y7fvkjrx.js";import"./chunk-y0937590.js";import"./chunk-t2v3fz5w.js";import{E,to}from"./chunk-pj3wn6z3.js";var k=E(function(be,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var y={};to(y,{DRAFT_HINT:()=>u,PLUGIN_LISTING:()=>d,REMINDER:()=>l,SECTION:()=>f,SECTIONS:()=>g,cutsTheTurn:()=>p,default:()=>y,isAvailable:()=>h,isOnByDefault:()=>c,register:()=>N,registerHooks:()=>i,registerPlugin:()=>_,spliceDraftHint:()=>m,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var u="enter to interrupt and send \xB7 ctrl+x then enter to queue",m=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var g=["focus_mode","focus_mode:L"];var l=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:g},async(a,t,o)=>{let{text:r}=await o(t);return{text:r===null?f:r}}),e("prompt.submit",async(a,t,o)=>{if(!n(t))return o(t);let r=await o({...t,context:[...t.context??[],l]});if(r.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return r}),e("ui.render",{component:"PromptHint"},async(a,t,o)=>{if(!(t.props.isDraft&&t.props.isWorking))return o(t);let r=s()?m():u;return o({...t,props:{...t.props,hint:r}})})}function N(e){i(e,()=>!1)}var c=()=>!1;var h=()=>Cue()&&!xSn()&&Lo("tengu_quiet_ember",c());var d={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:h,defaultEnabled:!1};var _=()=>tb({...d,hooksModule:E6(import.meta.dir,{register:(e)=>i(e,L)},()=>k())});function L(){return!1}export{u as DRAFT_HINT,d as PLUGIN_LISTING,l as REMINDER,f as SECTION,g as SECTIONS,p as cutsTheTurn,y as default,h as isAvailable,c as isOnByDefault,N as register,i as registerHooks,_ as registerPlugin,m as spliceDraftHint,n as typedByTheUser};
