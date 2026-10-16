// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-c32ssgw0.js";import"./chunk-3mdayxq0.js";import"./chunk-dnq93t1z.js";import"./chunk-wkh5syvr.js";import"./chunk-54xe5s81.js";import"./chunk-r0a9v21k.js";import"./chunk-6dw7xt0q.js";import"./chunk-hbbqggzw.js";import"./chunk-yh19hj71.js";import"./chunk-k4g6y57j.js";import"./chunk-bkygtq8f.js";import"./chunk-xzypj06m.js";import"./chunk-278j353c.js";import{_,Y}from"./chunk-bnfhb7sj.js";import"./chunk-6bcyaxwk.js";import"./chunk-btnsqe7h.js";import"./chunk-e666gr8q.js";import"./chunk-73603qq3.js";import"./chunk-8zhg89kk.js";import"./chunk-bdh8gqj2.js";import"./chunk-52pf9qag.js";import"./chunk-n1esck2w.js";import"./chunk-5r64b6x9.js";import"./chunk-nvk7bh0e.js";import"./chunk-1jaxs49d.js";import"./chunk-d9vq4daa.js";import"./chunk-vv7fafr9.js";import"./chunk-44kx210g.js";import"./chunk-47nfkk7z.js";import"./chunk-z5vzymyr.js";import"./chunk-jn6attna.js";import"./chunk-65qd2bnn.js";import"./chunk-fbw24n5y.js";import"./chunk-d0wdnxhm.js";import"./chunk-682ngkw1.js";import"./chunk-pj4gy1za.js";import"./chunk-zw6exh70.js";import"./chunk-h7da0bhz.js";import"./chunk-txv2yh90.js";import"./chunk-xqs3dvj3.js";import"./chunk-ye9nkzrb.js";import"./chunk-mn5cr59w.js";import"./chunk-wrzcmmn0.js";import"./chunk-td5pjp2j.js";import"./chunk-7snmbrvc.js";import"./chunk-tksxzgy9.js";import"./chunk-0y24kpg2.js";import"./chunk-35w1n511.js";import"./chunk-fgjmf9pc.js";import"./chunk-hh9t8f7t.js";import"./chunk-nz45cq1q.js";import"./chunk-jybqja29.js";import"./chunk-dke9y8sr.js";import"./chunk-61p68esv.js";import"./chunk-gafqfm7x.js";import"./chunk-zak8j3he.js";import"./chunk-w4a6kzc8.js";import{Qi}from"./chunk-fekfnp3p.js";import"./chunk-1901fdh6.js";import"./chunk-8vbtf69d.js";import"./chunk-n98x2tj8.js";import"./chunk-kww3qk2q.js";import"./chunk-e65h3rht.js";import"./chunk-k6f1e9pp.js";import"./chunk-0dnnva21.js";import"./chunk-vndcs4rv.js";import"./chunk-tx0fhcwf.js";import"./chunk-718k5xe7.js";import"./chunk-7nqmd82e.js";import"./chunk-xewk85mf.js";import"./chunk-1qxwm3cf.js";import"./chunk-ge9ewwa2.js";import"./chunk-3c05e83r.js";import"./chunk-3vv2e847.js";import"./chunk-8kj4j9d0.js";import"./chunk-nvfrrmwj.js";import"./chunk-rk99n4cg.js";import"./chunk-b39hwker.js";import"./chunk-798vwh4r.js";import"./chunk-3vzn6jff.js";import"./chunk-3sm6609v.js";import"./chunk-zwab6e3j.js";import"./chunk-dq486axg.js";import"./chunk-g3stg8d4.js";import"./chunk-ektty2ew.js";import"./chunk-wna8ryc8.js";import"./chunk-0rg61144.js";import"./chunk-5m206mfy.js";import{U6e}from"./chunk-g8xp3n8r.js";import"./chunk-jnjbdscc.js";import"./chunk-5mc9byek.js";import"./chunk-a808z68x.js";import"./chunk-h79vv5rt.js";import"./chunk-vsbv9t3q.js";import"./chunk-e3k2ryga.js";import{ul}from"./chunk-mmjevzx0.js";import"./chunk-5tec8tm8.js";import"./chunk-ayqmksr9.js";import"./chunk-d9v11evn.js";import"./chunk-606ay8ph.js";import"./chunk-bpjywkf3.js";import"./chunk-xq204fcy.js";import"./chunk-74ye1fde.js";import"./chunk-p28cak91.js";import"./chunk-zs3v19vj.js";import"./chunk-ps65a1ga.js";import"./chunk-nxshfbqz.js";import"./chunk-tj5jhejv.js";import"./chunk-nsdbpz9m.js";import"./chunk-3my4rrnz.js";import"./chunk-dztjxxyx.js";import"./chunk-zds0nx71.js";import"./chunk-js1hm3rq.js";import"./chunk-jr1px7r3.js";import"./chunk-7dnefg3p.js";import"./chunk-pk7evkcs.js";import"./chunk-c1a9wnpp.js";import"./chunk-760c7t99.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=Y(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...Qi({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let i=(await o.json()).keys?.find((a)=>a.kid===e);if(!i)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(i.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${i.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:i,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:i,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function b(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function v(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let s=(await ul(b(e),n,"decode-token: reading token from stdin")).trim();if(s)return s;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await v(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:s}=w(e),i=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??U6e()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:s,header:i,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?i:c;process.stdout.write(`${_(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{J as selfHostedRunnerDecodeTokenMain};
