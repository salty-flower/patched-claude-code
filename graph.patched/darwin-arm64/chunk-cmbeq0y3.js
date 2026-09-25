// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-0mkbat55.js";import"./chunk-6cqmwr9m.js";import"./chunk-gas689jj.js";import"./chunk-shf1fjz2.js";import"./chunk-zr6jq9j9.js";import"./chunk-w13amena.js";import"./chunk-4cwgnmh9.js";import"./chunk-v9aeg87c.js";import"./chunk-1y7zyxh8.js";import"./chunk-njn6k74e.js";import"./chunk-3a4khaz5.js";import"./chunk-w9w461gr.js";import"./chunk-s8xs8s76.js";import"./chunk-37kdx3dg.js";import{b,Q}from"./chunk-wvb0gwjm.js";import"./chunk-81r5kx3r.js";import"./chunk-j370x2tz.js";import"./chunk-0dpks9t0.js";import"./chunk-vzqvvnm0.js";import"./chunk-9vnajd7a.js";import"./chunk-n3x619p1.js";import"./chunk-9cfndpw0.js";import"./chunk-ymkzysdh.js";import"./chunk-n875m8bj.js";import"./chunk-ekshy3qa.js";import"./chunk-tcx7fvpc.js";import"./chunk-x4gz28fm.js";import"./chunk-ry9k94nn.js";import"./chunk-cmqyka9v.js";import"./chunk-z2w95mdn.js";import"./chunk-kc002nbr.js";import"./chunk-amq2nck9.js";import"./chunk-fdnv15ej.js";import"./chunk-zb872eas.js";import"./chunk-shk8jjt1.js";import"./chunk-3eeg3qvv.js";import"./chunk-97rwyxer.js";import"./chunk-742ky2cp.js";import"./chunk-5cz12mxk.js";import"./chunk-tj8y2xcj.js";import"./chunk-gqaj0njn.js";import"./chunk-hn35vsf8.js";import"./chunk-ms03d305.js";import"./chunk-pkcypf3f.js";import"./chunk-m9hfdm3b.js";import"./chunk-je0c1kfp.js";import"./chunk-aneqvevx.js";import"./chunk-kdwykznz.js";import"./chunk-mjmhaa2n.js";import{ci}from"./chunk-7wq3cxhj.js";import"./chunk-twxt3h9y.js";import"./chunk-wt3kk7dt.js";import"./chunk-821rxv4j.js";import"./chunk-emn764wn.js";import"./chunk-wjcvdctc.js";import"./chunk-2jc9gzqt.js";import"./chunk-9fsgjz11.js";import"./chunk-7x4fz860.js";import"./chunk-tq81az32.js";import"./chunk-m65e81jc.js";import"./chunk-9pj6s8ha.js";import"./chunk-bnfryxmn.js";import"./chunk-eh0c72zp.js";import"./chunk-pkhrg5v5.js";import"./chunk-vn3m1gs0.js";import"./chunk-hg1f9dgc.js";import"./chunk-w3vnd82x.js";import"./chunk-kg44xfte.js";import"./chunk-k59kdd19.js";import"./chunk-dtsvh7pz.js";import"./chunk-8z6ck5c9.js";import"./chunk-m3rjj2qj.js";import"./chunk-eb2vdmgg.js";import"./chunk-s09n49gq.js";import"./chunk-vvq2vnvw.js";import"./chunk-fp8phndt.js";import{eTe}from"./chunk-gsvcr7td.js";import{Wa}from"./chunk-tbrmp0e8.js";import"./chunk-wf2aqwcp.js";import"./chunk-8jbeny5z.js";import"./chunk-kf9bybnr.js";import"./chunk-wyewzwe1.js";import"./chunk-apr1pmkm.js";import"./chunk-1f8ahewx.js";import"./chunk-dh68faj3.js";import"./chunk-tjymmzb8.js";import"./chunk-ddnrrbm5.js";import"./chunk-q41x5swz.js";import"./chunk-eksb3eb9.js";import"./chunk-aeqtw871.js";import"./chunk-m53hpgnw.js";import"./chunk-kaepya91.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=Q(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...ci({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function v(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await Wa(v(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

Decode a session-ingress JWT (CLAUDE_CODE_SESSION_ACCESS_TOKEN) and print its
claims as JSON to stdout. Strips any sk-ant-cc- / sk-ant-si- prefix
automatically. Pipe to jq to extract a single claim.

Token source (first non-empty wins):
  1. Positional argument
  2. $CLAUDE_CODE_SESSION_ACCESS_TOKEN
  3. Piped stdin

Signature verification against <api-url>/v1/code/.well-known/jwks.json is ON
by default, as is the exp/nbf check (60s skew). Prints "verified (kid=\u2026,
sig+exp)" to stderr on success; exits 1 on verification failure, expiry, or
JWKS fetch error. Does NOT pin iss/aud/token-type \u2014 compare those from the
decoded claims if your auth model depends on them.

Options:
  --header           Print the JWT header instead of the claims.
  --no-verify        Skip signature verification and the JWKS fetch. For
                     offline inspection only \u2014 do NOT feed the output to an
                     auth decision.
  --no-check-expiry  Skip the exp/nbf check (signature still verified). For
                     forensics ("was this token ever issued by us?").
  --api-url <url>    API base URL for JWKS fetch (default: $ANTHROPIC_BASE_URL
                     or the built-in default).
  --verify           (Deprecated \u2014 verification is the default. Kept so older
                     wrapper scripts don't break.)
  --help, -h         Show this help.

Examples:
  # In an --exec-path wrapper: who created this session? Signature is
  # verified by default, so a tampered token exits non-zero here.
  # Use jq -re (not -r) when the claim gates an auth decision \u2014 jq -r prints
  # the literal string "null" and exits 0 when the claim is missing.
  creator=$(claude self-hosted-runner decode-token | jq -re .act.email) \\
    || { echo "session JWT: no creator identity or verification failed" >&2; exit 1; }

  # Offline inspection (no network, no auth decision)
  claude self-hosted-runner decode-token --no-verify

  # Decode a different token by piping it (unset the env var first)
  echo "$SOME_TOKEN" | env -u CLAUDE_CODE_SESSION_ACCESS_TOKEN \\
    claude self-hosted-runner decode-token --no-verify
`;async function C(t){let r;try{r=y(t)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??eTe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${b(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
