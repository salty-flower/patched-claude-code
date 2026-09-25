// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Sn}from"./chunk-hg1f9dgc.js";import{Xt}from"./chunk-9hpfkyew.js";import{sA}from"./chunk-06f4vbjk.js";import{qo}from"./chunk-8amn3vqy.js";import{XUe,kXe}from"./chunk-detdzkmr.js";var o="slides";function gpn(){return sA()&&kXe()}function hpn(t){return Xt(t.policyKey)}function l(t){return gpn()&&hpn(t)}var U5e={name:"design",intent:"design",typeTitle:"Design",policyKey:"allow_cobalt_plinth_bramble",nounPhrase:"a design",askWhenNoBrief:"what they want designed",description:"Make a new Design artifact from a brief",argumentHint:"[what to design]"},c={name:o,intent:"slides",typeTitle:"Slides",policyKey:"allow_cobalt_plinth_juniper",nounPhrase:"a slide deck",askWhenNoBrief:"what the deck should be about",description:"Make a new Slides deck artifact from a brief",argumentHint:"[what the deck is about]"};function ypn({name:t,intent:i,typeTitle:e,nounPhrase:a,askWhenNoBrief:n},s){let r=s.trim();return[XUe()?`\`/${t}\` was invoked: a request for ${a} made as a NEW Artifact from the published Artifact type titled "${e}". Call the \`${Sn}\` tool with \`action: "quickstart"\` and \`intent: "${i}"\` (adding \`design_systems: false\` if you already have a design system's link or the user declined one), then do what its result says: create the new Artifact from the type it names \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 and fill it by following those instructions. If it says no such type is listed for this user, say so plainly, then do what it says instead.`:`\`/${t}\` was invoked: a request for ${a} made as a NEW Artifact from the published Artifact type titled "${e}". Use the \`${Sn}\` tool the way its Artifact-types guidance describes: list the Artifact types available to this user (\`type_query: "${e}"\`), take the listed type whose title is "${e}" (if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no type titled "${e}" is listed for this user, say so plainly and offer to make ${a} another way.`,r?`The brief:

${r}`:`No brief was given \u2014 ask the user ${n} before creating anything.`].join(`

`)}function _pn(){let t=c;qo({name:t.name,description:t.description,argumentHint:t.argumentHint,isEnabled:()=>l(t),userInvocable:!0,disableModelInvocation:!0,async getPromptForCommand(i){return[{type:"text",text:ypn(t,i)}]}})}
export{gpn,hpn,U5e,ypn,_pn};
