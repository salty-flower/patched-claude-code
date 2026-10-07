// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xr}from"./chunk-m0sj7y8g.js";import"./chunk-b7wdy41p.js";import"./chunk-918t5khf.js";import"./chunk-aywwjcwq.js";import"./chunk-f16c4jnr.js";import"./chunk-yffha6me.js";import"./chunk-fdatg9ax.js";import"./chunk-0mwsqxme.js";import"./chunk-gf0t3nd9.js";import"./chunk-bpkzpttw.js";import"./chunk-6rzcw8g2.js";import"./chunk-869zfth6.js";import"./chunk-zs0343th.js";import"./chunk-gvn18sr5.js";import"./chunk-0z5rjdcn.js";import"./chunk-ky8zgwyh.js";import"./chunk-z6am4wsr.js";import"./chunk-z9b8syjk.js";import"./chunk-jppak124.js";import"./chunk-j3629m0a.js";import"./chunk-s90w5q15.js";import"./chunk-tzahwj8w.js";import"./chunk-cqa4khw0.js";import"./chunk-v6ek3j23.js";import"./chunk-hevpq2ht.js";import"./chunk-nnbb9at0.js";import"./chunk-aey7fddv.js";import"./chunk-z6jq2hwa.js";import"./chunk-z6w26610.js";import"./chunk-0qcng0ek.js";import"./chunk-4hsn0a4s.js";import"./chunk-h3056rfm.js";import"./chunk-nffxs9ey.js";import"./chunk-7n5tp35k.js";import"./chunk-0834hdpw.js";import"./chunk-wp37h1qm.js";import{qDn,uJ}from"./chunk-zyrx67ap.js";import"./chunk-jnystawq.js";import"./chunk-vf73wj1b.js";import"./chunk-0h69faxq.js";import"./chunk-v7q9te9b.js";import"./chunk-p72qafcy.js";import"./chunk-qv90ktrr.js";import"./chunk-g55sa40r.js";import"./chunk-djxmg5va.js";import"./chunk-pvcr8t0y.js";import"./chunk-dcpaq2kj.js";import"./chunk-06vaaw45.js";import"./chunk-qdmy1g69.js";import"./chunk-2c0pkjse.js";import"./chunk-jb27eay5.js";import"./chunk-9dnqpecd.js";import"./chunk-ta86nc10.js";import"./chunk-zg2sg2cj.js";import"./chunk-e6wajgyd.js";import"./chunk-sjbbyery.js";import"./chunk-0wqb5n04.js";import"./chunk-9d77qdrf.js";import"./chunk-wby8n7tq.js";import"./chunk-repmvexm.js";import"./chunk-jkhtckyv.js";import"./chunk-6ntgn93k.js";import"./chunk-h96fkqh0.js";import"./chunk-f1vm98xj.js";import"./chunk-3ff85ar3.js";import"./chunk-8m32anyb.js";import"./chunk-7ha2yydy.js";import"./chunk-cwqxpkpd.js";import"./chunk-ghdwe20r.js";import"./chunk-jb4eqyjv.js";import"./chunk-tymcbz7d.js";import"./chunk-dejd0mwg.js";import"./chunk-hdjzp1hc.js";import"./chunk-zbm7xwyr.js";import"./chunk-gsz4ykfe.js";import"./chunk-vw9vnafd.js";import"./chunk-y1pmnwf8.js";import"./chunk-pvw1e2q4.js";import"./chunk-ch8aw0k0.js";import"./chunk-yh6kwat0.js";import"./chunk-g6x5pfpt.js";import"./chunk-3xa8a4ky.js";import"./chunk-k0nrzyt2.js";import"./chunk-tc4jd07p.js";import"./chunk-hyvfy8xz.js";import{I1,Ib}from"./chunk-ms3ntjy4.js";import"./chunk-a3t3z027.js";import"./chunk-8hvfwgvm.js";import"./chunk-fm0nf1rn.js";import"./chunk-b6ahp449.js";import"./chunk-3wab60rz.js";import"./chunk-ngfft5dp.js";import"./chunk-pak71jg1.js";import"./chunk-dx30tgp5.js";import"./chunk-29g2jvx2.js";import"./chunk-vj952p6j.js";import"./chunk-qt7wfk46.js";import"./chunk-ht3hn07r.js";import"./chunk-ryr5zmfz.js";import"./chunk-byp7b1vv.js";import"./chunk-hpdq1e8e.js";import"./chunk-q2j1pc7w.js";import"./chunk-40wcwz4f.js";import"./chunk-vcpw40gh.js";import"./chunk-cs06r2mk.js";import{k,Qr}from"./chunk-grvgfqgm.js";var b=k(function(ve,w){w.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var d={};Qr(d,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>h,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>d,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>D,registerHooks:()=>i,registerPlugin:()=>B,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,I=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...I}})})}function D(e){i(e,()=>!1)}var f=()=>!1;var c=()=>uJ()&&!qDn()&&xr("tengu_quiet_ember",f());var h={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var B=()=>Ib({...h,hooksModule:I1(import.meta.dir,{register:(e)=>i(e,C)},()=>b())});function C(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,h as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,d as default,c as isAvailable,f as isOnByDefault,D as register,i as registerHooks,B as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
