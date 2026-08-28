// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-c555rnz7.js";import"./chunk-gqqx2ybk.js";import"./chunk-xj8gnzar.js";import"./chunk-kvgzj9kk.js";import"./chunk-s0y4aasp.js";import"./chunk-k69qdkv1.js";import"./chunk-g0kfvhx3.js";import"./chunk-2vv5hpw3.js";import"./chunk-hjxpwbhy.js";import"./chunk-gt4btdxr.js";import"./chunk-7h2h1m4y.js";import{v,V}from"./chunk-akz0cj0f.js";import"./chunk-qkpfba5t.js";import"./chunk-m09j9ze8.js";import"./chunk-2h7wbm8s.js";import"./chunk-6ce4s97h.js";import"./chunk-s2t7yx8x.js";import"./chunk-2t5hwcdv.js";import"./chunk-8ba2x98b.js";import"./chunk-cvykgfry.js";import"./chunk-v1ap59a1.js";import"./chunk-qbwsw6nn.js";import"./chunk-a891q37t.js";import"./chunk-j0kxfsn8.js";import"./chunk-ey3r955r.js";import"./chunk-cdpc3se3.js";import"./chunk-6ypvgjr3.js";import"./chunk-n6st122x.js";import"./chunk-b16q8tvv.js";import"./chunk-wp51qqtd.js";import"./chunk-z8bgyj99.js";import"./chunk-7jw96n8z.js";import"./chunk-fa374z64.js";import"./chunk-cgwm6n4d.js";import"./chunk-4a808ek9.js";import"./chunk-apqzzgp2.js";import"./chunk-fz00m7zs.js";import"./chunk-je342w1n.js";import"./chunk-gxpna0zj.js";import"./chunk-vryz951p.js";import"./chunk-z3w4y6ds.js";import"./chunk-bcez0qfh.js";import"./chunk-8v512hc9.js";import"./chunk-3fgza2mw.js";import"./chunk-yyzqa5fj.js";import"./chunk-jrqq3240.js";import"./chunk-gbhg5hb4.js";import"./chunk-vaxm4qh6.js";import"./chunk-zx6a3ytk.js";import"./chunk-hn2qdxkx.js";import"./chunk-09523qb1.js";import"./chunk-hk0e76vg.js";import"./chunk-mrmpqhhr.js";import"./chunk-v975cyxw.js";import"./chunk-2966xjk4.js";import{fi}from"./chunk-p23he0jn.js";import"./chunk-ns0ekkj0.js";import"./chunk-ryvgd9z0.js";import"./chunk-dakyjptz.js";import"./chunk-sd094199.js";import"./chunk-xw94cfq3.js";import"./chunk-3k7ywj35.js";import"./chunk-2dfkwr2q.js";import"./chunk-qw0q1g4b.js";import"./chunk-pgh575qg.js";import"./chunk-yvh97n7n.js";import"./chunk-tfd4rw1n.js";import"./chunk-qc6xt7s1.js";import"./chunk-6yeqjyb9.js";import"./chunk-pws3zj07.js";import"./chunk-mp7ft3kc.js";import"./chunk-9hz48emz.js";import"./chunk-q7r209hm.js";import"./chunk-swj5sfs1.js";import"./chunk-5j82knza.js";import"./chunk-3py4444c.js";import"./chunk-w0pbjm26.js";import"./chunk-hdxkjmp1.js";import"./chunk-5pf2r3ta.js";import"./chunk-keye04cq.js";import"./chunk-4aysr9ma.js";import"./chunk-0nb3y211.js";import"./chunk-pyd16tkx.js";import"./chunk-aw9sr560.js";import"./chunk-dfs7pzac.js";import{Uoe}from"./chunk-0p4cfsax.js";import{Mc}from"./chunk-h94bvr9k.js";import"./chunk-mj52rk1p.js";import"./chunk-c8dx8wrx.js";import"./chunk-zpq01mh4.js";import"./chunk-5ty1498y.js";import"./chunk-zs5s22a5.js";import"./chunk-cj0zmg6k.js";import"./chunk-qfwvs04s.js";import"./chunk-vt29yvxx.js";import"./chunk-f58mzqmc.js";import"./chunk-9q51f9rr.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=V(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...fi({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function b(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await Mc(b(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??Uoe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${v(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{S as checkTokenTime,u as decodeSegment,y as parseDecodeTokenArgs,b as readStdin,_ as resolveToken,C as selfHostedRunnerDecodeTokenMain,w as splitJwt,m as verifyAgainstJwks};
