// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{zr}from"./chunk-bk5ct2gw.js";import"./chunk-nfna65jh.js";import"./chunk-fdxhcr6b.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import"./chunk-nqc6v990.js";import"./chunk-phz47asr.js";import"./chunk-yvnhkg35.js";import"./chunk-5b8s3gnd.js";import"./chunk-gyf58rwf.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import"./chunk-gsnbskq4.js";import"./chunk-p9frg3mj.js";import"./chunk-bf3z2ftn.js";import"./chunk-4nygtnjw.js";import"./chunk-2hb5361r.js";import"./chunk-cnq34fr6.js";import"./chunk-qr9z1wer.js";import"./chunk-vgthw1fb.js";import"./chunk-y98nbw94.js";import"./chunk-1azky4vr.js";import"./chunk-1tsh4em7.js";import"./chunk-tdjxpe2m.js";import"./chunk-yn0pfn70.js";import"./chunk-wh2vcbh8.js";import"./chunk-nca5bd28.js";import"./chunk-1t033v1j.js";import"./chunk-8pet3bvp.js";import"./chunk-f606a53w.js";import"./chunk-nv1qvpv3.js";import"./chunk-68wmv4pr.js";import"./chunk-fdwn5gdv.js";import{rzn,DZ}from"./chunk-tadwrn0a.js";import"./chunk-c0aaqg7t.js";import"./chunk-qb086kpj.js";import"./chunk-6pbtkr2b.js";import"./chunk-0jyjhrht.js";import"./chunk-wtch2p0g.js";import"./chunk-3cynezh1.js";import"./chunk-a60ee1ne.js";import"./chunk-ppsy9aeg.js";import"./chunk-9zyrj6we.js";import"./chunk-z6p21rxk.js";import"./chunk-dp4bc9y2.js";import"./chunk-x0dc37w9.js";import"./chunk-y8g1gshe.js";import"./chunk-kvz2ymff.js";import"./chunk-2x1jdkd9.js";import"./chunk-c6qwr3kc.js";import"./chunk-7sdm5x5t.js";import"./chunk-r2vtj1kh.js";import"./chunk-4vzk3y22.js";import"./chunk-h20sc871.js";import"./chunk-yv3rvqk7.js";import"./chunk-hb620t8k.js";import"./chunk-e4eky0pj.js";import"./chunk-zrh141bk.js";import"./chunk-j41p6s5m.js";import"./chunk-daqzn5gy.js";import"./chunk-hpdcd3vm.js";import"./chunk-3sda67c1.js";import"./chunk-zpefvajk.js";import"./chunk-d7wfeeft.js";import"./chunk-mke1mg83.js";import"./chunk-njj04bkb.js";import"./chunk-mrf41zrh.js";import"./chunk-64ag51qf.js";import"./chunk-0yczyn9c.js";import"./chunk-75xzrg6e.js";import"./chunk-sazx74ct.js";import"./chunk-97q60twp.js";import"./chunk-ts42ykgs.js";import"./chunk-g1yqb0n4.js";import"./chunk-phm7wwmz.js";import"./chunk-z0n2djw5.js";import"./chunk-m7864yc0.js";import"./chunk-rgrg9230.js";import"./chunk-y59djfw7.js";import"./chunk-qm4226vk.js";import"./chunk-nrk8z90j.js";import{oW,hb}from"./chunk-m4qpskd4.js";import"./chunk-kd3dbbtb.js";import"./chunk-c9vsmdqj.js";import"./chunk-19nwhq5q.js";import"./chunk-jwjgedet.js";import"./chunk-j0kcafpy.js";import"./chunk-znynzfyp.js";import"./chunk-ngwfw4c8.js";import"./chunk-tfm99p8y.js";import"./chunk-25vrbr0v.js";import"./chunk-51w556q5.js";import"./chunk-k10m7cdf.js";import"./chunk-g9z2s3cs.js";import"./chunk-rzybc39t.js";import"./chunk-hf90k897.js";import"./chunk-t2x9eyac.js";import"./chunk-0hm793yn.js";import"./chunk-nkvcn1t9.js";import"./chunk-2zhybd9r.js";import"./chunk-nmnavv08.js";import"./chunk-t05cqr1r.js";import"./chunk-xaes9ysz.js";import"./chunk-wsz2wsez.js";import{T,Hr}from"./chunk-txt1tvjz.js";var b=T(function(ve,k){k.exports={scan:{hooks:["prompt.section","prompt.submit","ui.render"],calls:["turn.abort"]},files:{}}});var d={};Hr(d,{DRAFT_HINT:()=>y,FOCUS_MODE:()=>u,PLUGIN_LISTING:()=>h,REMINDER:()=>m,SECTION:()=>l,cutsTheTurn:()=>p,default:()=>d,isAvailable:()=>c,isOnByDefault:()=>f,register:()=>D,registerHooks:()=>i,registerPlugin:()=>B,spliceDraftHint:()=>g,typedByTheUser:()=>n});function n(e){let s=e.text.trim();return e.origin.kind==="composer"&&e.attachments===void 0&&s!==""&&!s.startsWith("/")}var p=(e)=>n(e)&&e.turnId!==void 0&&!e.wait;var y="enter to interrupt and send \xB7 ctrl+x then enter to queue",g=()=>"enter to interrupt and send \xB7 ctrl+x then enter to queue";var u="focus_mode";var m=`<responsive-mode>
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
Say what you found, what you did, what you need, and stop.`;function i(e,s){e("prompt.section",{name:u},async(a,t,r)=>{let{text:o}=await r(t);return{text:o===null?l:o}}),e("prompt.submit",async(a,t,r)=>{if(!n(t))return r(t);let o=await r({...t,context:[...t.context??[],m]});if(o.drop===void 0&&p(t)&&!s())await a.turn.abort({turnId:t.turnId}).catch(()=>{return});return o}),e("ui.render",{component:"PromptHint"},async(a,t,r)=>{if(!(t.props.isDraft&&t.props.isWorking))return r(t);let o=s()?g():y,I=t.surface==="terminal"?{tail:o}:{hint:o};return r({...t,props:{...t.props,...I}})})}function D(e){i(e,()=>!1)}var f=()=>!1;var c=()=>DZ()&&!rzn()&&zr("tengu_quiet_ember",f());var h={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:c,defaultEnabled:!1};var B=()=>hb({...h,hooksModule:oW(import.meta.dir,{register:(e)=>i(e,C)},()=>b())});function C(){return!1}export{y as DRAFT_HINT,u as FOCUS_MODE,h as PLUGIN_LISTING,m as REMINDER,l as SECTION,p as cutsTheTurn,d as default,c as isAvailable,f as isOnByDefault,D as register,i as registerHooks,B as registerPlugin,g as spliceDraftHint,n as typedByTheUser};
