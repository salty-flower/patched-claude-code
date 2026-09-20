// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-gjtn8r0h.js";import"./chunk-gj513b2z.js";import"./chunk-d3xvzk7s.js";import"./chunk-k4wnp212.js";import"./chunk-40wq8hf6.js";import"./chunk-67jj8qay.js";import"./chunk-q3f1bdx8.js";import"./chunk-q2vrcqny.js";import"./chunk-txfrkyzp.js";import"./chunk-qztrb7e5.js";import"./chunk-p9tbyvzw.js";import"./chunk-cnzbk8gg.js";import{w,X}from"./chunk-847hpqqs.js";import"./chunk-hdk9febf.js";import"./chunk-kh3dq6rw.js";import"./chunk-1cx6bcw0.js";import"./chunk-zf4yx99n.js";import"./chunk-psm40xqz.js";import"./chunk-5a4y4a7y.js";import"./chunk-61g2sn1g.js";import"./chunk-30p0nwys.js";import"./chunk-h4q23q42.js";import"./chunk-g0d6a50p.js";import"./chunk-vd2nxbng.js";import"./chunk-9dhpqtz5.js";import"./chunk-4knvtbyn.js";import"./chunk-qrf0f0ev.js";import"./chunk-pe91jxt9.js";import"./chunk-77ybm3jg.js";import"./chunk-d6f1t6sb.js";import"./chunk-679ytzs5.js";import"./chunk-v8v8a55t.js";import"./chunk-ayzpxv7a.js";import"./chunk-39xz88rg.js";import"./chunk-te6f9h8j.js";import"./chunk-ggjhe3cp.js";import"./chunk-dnzv18vp.js";import"./chunk-48rd4zn3.js";import"./chunk-b48ax99g.js";import"./chunk-2an23fcc.js";import"./chunk-hht526yc.js";import"./chunk-qb348yzj.js";import{ti}from"./chunk-v25vm59m.js";import"./chunk-s3hsf7ap.js";import"./chunk-5mt43ge3.js";import"./chunk-b8169sgj.js";import"./chunk-577jmkv2.js";import"./chunk-wmyy1anw.js";import"./chunk-wt9yf8j5.js";import"./chunk-7jt45jjp.js";import"./chunk-9hdk0yg9.js";import"./chunk-1wf4xdje.js";import"./chunk-ehdaj6wy.js";import"./chunk-62t5bbjj.js";import"./chunk-scqpsn3c.js";import"./chunk-vc8y7vvq.js";import"./chunk-bb220g96.js";import"./chunk-2n66rk9w.js";import"./chunk-d0bmg328.js";import"./chunk-tpht1k6q.js";import"./chunk-x7wz4nc0.js";import"./chunk-090t3djy.js";import"./chunk-b9fawpjq.js";import"./chunk-qk93vtk9.js";import"./chunk-86tcajxg.js";import"./chunk-7zjnjcjk.js";import"./chunk-k90g7wxy.js";import{d_e}from"./chunk-cbyppyfg.js";import{Va}from"./chunk-ge09ds6t.js";import"./chunk-jejrdv21.js";import"./chunk-7x5ref3k.js";import"./chunk-gsbsg5z6.js";import"./chunk-05jxh7mq.js";import"./chunk-t29t3qgr.js";import"./chunk-k9vdtdk2.js";import"./chunk-er8eeww9.js";import"./chunk-8zbt0spj.js";import"./chunk-gyh40pz1.js";import"./chunk-s44v6gm9.js";import"./chunk-b8r1xdtr.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function E(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=X(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var S={ES256:"EC",RS256:"RSA"};function m(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function x(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=S[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...ti({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)m(t.payload);return{kid:e}}var h=16384,b=5000;async function v(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=b){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await Va(v(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=E(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??d_e()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await x({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${w(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
