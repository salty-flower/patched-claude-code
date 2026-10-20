// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-t46680ch.js";import"./chunk-8nra9hkj.js";import"./chunk-6arex0x2.js";import"./chunk-m3epja3j.js";import"./chunk-ekgz6skk.js";import"./chunk-wk0rbc8w.js";import"./chunk-h9cj3xp8.js";import"./chunk-2fbnw5gg.js";import"./chunk-jbgr14ef.js";import"./chunk-59xd6a0a.js";import"./chunk-pbkqy204.js";import"./chunk-cd1a8ced.js";import"./chunk-grpzqw3p.js";import"./chunk-dxktn51d.js";import{_,Q}from"./chunk-n5v91jc3.js";import"./chunk-nvrstjfg.js";import"./chunk-nt1g7asm.js";import"./chunk-jkcb7qdd.js";import"./chunk-tbekftmt.js";import"./chunk-4ccvyrtz.js";import"./chunk-17mm48r5.js";import"./chunk-psz375zg.js";import"./chunk-bdj2znsb.js";import"./chunk-sr4gfmny.js";import"./chunk-yzndvntb.js";import"./chunk-949csv87.js";import"./chunk-pr2cfg7g.js";import"./chunk-4qs43hr1.js";import"./chunk-ww4tybgt.js";import"./chunk-3k2k4wyq.js";import"./chunk-bfmjsynp.js";import"./chunk-r7aw7m5s.js";import"./chunk-z3qcbx87.js";import"./chunk-zjcj7ams.js";import"./chunk-dcsn0jct.js";import"./chunk-yb4qaat4.js";import"./chunk-jznfkp3e.js";import"./chunk-b9hfks9p.js";import"./chunk-0cd9x9a9.js";import"./chunk-7fdn9j0a.js";import"./chunk-m7gr14b0.js";import"./chunk-0vs9wg49.js";import"./chunk-pe53y0ma.js";import"./chunk-6vj87cqe.js";import"./chunk-tj5qrgvp.js";import"./chunk-6ta41wqs.js";import"./chunk-bjv5j0w5.js";import"./chunk-32vra4sg.js";import"./chunk-tcgnany9.js";import"./chunk-qaefbavh.js";import"./chunk-mz58eg27.js";import"./chunk-f7tmzdwm.js";import"./chunk-dwxnayss.js";import"./chunk-dzngbkpd.js";import"./chunk-17fr76vj.js";import"./chunk-4v4w26w4.js";import"./chunk-7kvdwhvm.js";import"./chunk-merbp8kx.js";import"./chunk-sx3g9k86.js";import"./chunk-wmyn5tzg.js";import{fa}from"./chunk-65s1xpd0.js";import"./chunk-7p6jp6kj.js";import"./chunk-knvdctz0.js";import"./chunk-8hpk64pd.js";import"./chunk-2wvy4drw.js";import"./chunk-mkvkyt21.js";import"./chunk-3tq6qd54.js";import"./chunk-vegrw1hg.js";import"./chunk-b7dsynzj.js";import"./chunk-38vgtxey.js";import"./chunk-h3c350fm.js";import"./chunk-7gz0pfve.js";import"./chunk-65jn763j.js";import"./chunk-rkrydfvk.js";import"./chunk-379wwzey.js";import"./chunk-q5je0w38.js";import"./chunk-jf4xjz28.js";import"./chunk-9449nkm2.js";import"./chunk-trngxf9d.js";import"./chunk-mr8a4qvf.js";import"./chunk-bvydn19x.js";import"./chunk-pja9erbz.js";import"./chunk-293nkhh0.js";import"./chunk-sjx6846d.js";import"./chunk-wyzdzgh4.js";import"./chunk-3wd6e2hx.js";import"./chunk-wqjt4nrc.js";import"./chunk-d7egt2xa.js";import"./chunk-6g12yqvm.js";import"./chunk-f5rzvmnh.js";import"./chunk-1wbzg77m.js";import"./chunk-s7fpefcx.js";import{qqe}from"./chunk-7s84r5p0.js";import"./chunk-62jprrd9.js";import"./chunk-1rrxtjrf.js";import"./chunk-6qx5mjec.js";import"./chunk-8t1fts8e.js";import"./chunk-1vy8h1e5.js";import"./chunk-9wkjdb4f.js";import{yl}from"./chunk-7pmhj0ws.js";import"./chunk-8n9d5r9w.js";import"./chunk-cxd7mfvn.js";import"./chunk-8kwx7fwk.js";import"./chunk-3n3axhgr.js";import"./chunk-gkywxtme.js";import"./chunk-tnf59e5j.js";import"./chunk-peqvyzr8.js";import"./chunk-rznmdxwz.js";import"./chunk-segx3fdf.js";import"./chunk-jm01gp88.js";import"./chunk-1vcf5z2k.js";import"./chunk-sf1rwv04.js";import"./chunk-08y6ag9s.js";import"./chunk-z9hm9fyp.js";import"./chunk-g378fzvg.js";import"./chunk-kcmb4jzj.js";import"./chunk-adkjcqkd.js";import"./chunk-j53prbhv.js";import"./chunk-rd4mxy2p.js";import"./chunk-3pcxq77r.js";import"./chunk-7vca30xa.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=Q(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...fa({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let i=(await o.json()).keys?.find((a)=>a.kid===e);if(!i)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(i.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${i.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:i,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:i,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function b(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function v(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let s=(await yl(b(e),n,"decode-token: reading token from stdin")).trim();if(s)return s;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`;async function J(t){let r;try{r=y(t)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await v(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:s}=w(e),i=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??qqe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:s,header:i,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?i:c;process.stdout.write(`${_(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{J as selfHostedRunnerDecodeTokenMain};
