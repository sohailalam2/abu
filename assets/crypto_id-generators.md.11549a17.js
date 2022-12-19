import{_ as s,c as a,o as n,a as e}from"./app.ab06fbc4.js";const m=JSON.parse('{"title":"Random ID Generators","description":"","frontmatter":{},"headers":[],"relativePath":"crypto/id-generators.md"}'),o={name:"crypto/id-generators.md"},l=e(`<h1 id="random-id-generators" tabindex="-1">Random ID Generators <a class="header-anchor" href="#random-id-generators" aria-hidden="true">#</a></h1><p>A random ID generator is a tool that generates unique, random identification codes. These codes can be used for a variety of purposes, such as to identify users or data records in a system.</p><p>There are many different ways to generate random IDs, and the specific method used will depend on the requirements of the application.</p><h2 id="random-uuid-v4" tabindex="-1">Random UUID v4 <a class="header-anchor" href="#random-uuid-v4" aria-hidden="true">#</a></h2><p>Generates a random UUID v4 using a cryptographically secure random number generator.</p><h3 id="method-signature" tabindex="-1">Method Signature <a class="header-anchor" href="#method-signature" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">randomUUIDv4</span><span style="color:#E6E6E6;">()</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">randomUUIDv4</span><span style="color:#002339;">()</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">randomUUIDv4</span><span style="color:#E6E6E6;">(); </span><span style="color:#6A9955;">// d25b2224-788c-46de-8383-65f961461ccd</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#7EB233;">randomUUIDv4</span><span style="color:#002339;">(); </span><span style="color:#357B42;">// d25b2224-788c-46de-8383-65f961461ccd</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="random-integer" tabindex="-1">Random Integer <a class="header-anchor" href="#random-integer" aria-hidden="true">#</a></h2><p>Generates a 32 bit cryptographically strong random integer</p><h3 id="method-signature-1" tabindex="-1">Method Signature <a class="header-anchor" href="#method-signature-1" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">randomInt</span><span style="color:#E6E6E6;">()</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">number</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">randomInt</span><span style="color:#002339;">()</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">number</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">randomInt</span><span style="color:#E6E6E6;">(); </span><span style="color:#6A9955;">// 3328041444</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#7EB233;">randomInt</span><span style="color:#002339;">(); </span><span style="color:#357B42;">// 3328041444</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="random-bigint" tabindex="-1">Random BigInt <a class="header-anchor" href="#random-bigint" aria-hidden="true">#</a></h2><p>Generates a 64 bit cryptographically strong random integer</p><h3 id="method-signature-2" tabindex="-1">Method Signature <a class="header-anchor" href="#method-signature-2" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">randomBigInt</span><span style="color:#E6E6E6;">()</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">bigint</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">randomBigInt</span><span style="color:#002339;">()</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">bigint</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">randomBigInt</span><span style="color:#E6E6E6;">(); </span><span style="color:#6A9955;">// 12607617176303824377n</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#7EB233;">randomBigInt</span><span style="color:#002339;">(); </span><span style="color:#357B42;">// 12607617176303824377n</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="random-number-of-base-n" tabindex="-1">Random Number of Base N <a class="header-anchor" href="#random-number-of-base-n" aria-hidden="true">#</a></h2><p>Generates a random number of <code>base</code> N and limited to a given <code>maxChars</code> size.</p><p>The default <code>maxChars</code> value is limited to 6 characters and hence the default generated value may <strong>NOT</strong> be considered cryptographically strong in nature.</p><p>The function may throw a few exceptions based on the user input:</p><p><code>InvalidNumberBaseException</code> is thrown for incorrect <code>base</code> value. Supported bases are between [2, 36].</p><p><code>IdGenerationMaxCharsOutOfBoundException</code> is thrown for incorrect <code>maxChars</code> value. Supported bases are between [2, 64].</p><div class="warning custom-block"><p class="custom-block-title">👺 Take Caution!</p><p>The algorithm uses a cryptographically secure random number generator to generate the number, however, when we truncate the digits to <code>maxChars</code>, it may no longer be cryptographically strong.</p><p>To avoid this, use a large value of maxChars. Doing so will return non truncated value.</p></div><h3 id="method-signature-3" tabindex="-1">Method Signature <a class="header-anchor" href="#method-signature-3" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">randomBaseN</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">base</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">number</span><span style="color:#E6E6E6;">, </span><span style="color:#9CDCFE;">maxChars</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#B5CEA8;">6</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">randomBaseN</span><span style="color:#002339;">(</span><span style="color:#B1108E;">base</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">number</span><span style="color:#002339;">, </span><span style="color:#B1108E;">maxChars</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#174781;">6</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#6A9955;">// binary number of max 6 chars</span></span>
<span class="line"><span style="color:#DCDCAA;">randomBaseN</span><span style="color:#E6E6E6;">(</span><span style="color:#B5CEA8;">2</span><span style="color:#E6E6E6;">); </span><span style="color:#6A9955;">// 100101</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// octal number of max 9 chars</span></span>
<span class="line"><span style="color:#DCDCAA;">randomBaseN</span><span style="color:#E6E6E6;">(</span><span style="color:#B5CEA8;">8</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">9</span><span style="color:#E6E6E6;">); </span><span style="color:#6A9955;">// 130553172</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#357B42;">// binary number of max 6 chars</span></span>
<span class="line"><span style="color:#7EB233;">randomBaseN</span><span style="color:#002339;">(</span><span style="color:#174781;">2</span><span style="color:#002339;">); </span><span style="color:#357B42;">// 100101</span></span>
<span class="line"></span>
<span class="line"><span style="color:#357B42;">// octal number of max 9 chars</span></span>
<span class="line"><span style="color:#7EB233;">randomBaseN</span><span style="color:#002339;">(</span><span style="color:#174781;">8</span><span style="color:#002339;">, </span><span style="color:#174781;">9</span><span style="color:#002339;">); </span><span style="color:#357B42;">// 130553172</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="random-hex" tabindex="-1">Random Hex <a class="header-anchor" href="#random-hex" aria-hidden="true">#</a></h2><blockquote><p>Derivative of <code>randomBaseN()</code></p></blockquote><p>Generates a random number in hexadecimal form. Depending on the maximum character limit posed by the caller, these maybe cryptographically strong or not.</p><h3 id="method-signature-4" tabindex="-1">Method Signature <a class="header-anchor" href="#method-signature-4" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">randomHex</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">maxChars</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#B5CEA8;">6</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">randomHex</span><span style="color:#002339;">(</span><span style="color:#B1108E;">maxChars</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#174781;">6</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">randomHex</span><span style="color:#E6E6E6;">(); </span><span style="color:#6A9955;">// 2b4a80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">randomHex</span><span style="color:#E6E6E6;">(</span><span style="color:#B5CEA8;">9</span><span style="color:#E6E6E6;">); </span><span style="color:#6A9955;">// 46029fed4</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#7EB233;">randomHex</span><span style="color:#002339;">(); </span><span style="color:#357B42;">// 2b4a80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EB233;">randomHex</span><span style="color:#002339;">(</span><span style="color:#174781;">9</span><span style="color:#002339;">); </span><span style="color:#357B42;">// 46029fed4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="random-id-alpha-numeric" tabindex="-1">Random ID (Alpha Numeric) <a class="header-anchor" href="#random-id-alpha-numeric" aria-hidden="true">#</a></h2><blockquote><p>Derivative of <code>randomBaseN()</code></p></blockquote><p>These are random id in alphanumeric form. The alphabets are all in small cases.</p><h3 id="method-signature-5" tabindex="-1">Method Signature <a class="header-anchor" href="#method-signature-5" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">randomId</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">maxChars</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#B5CEA8;">6</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">randomId</span><span style="color:#002339;">(</span><span style="color:#B1108E;">maxChars</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#174781;">6</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DCDCAA;">randomId</span><span style="color:#E6E6E6;">(); </span><span style="color:#6A9955;">// pi9xh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">randomId</span><span style="color:#E6E6E6;">(</span><span style="color:#B5CEA8;">9</span><span style="color:#E6E6E6;">); </span><span style="color:#6A9955;">// r39txcbqj</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#7EB233;">randomId</span><span style="color:#002339;">(); </span><span style="color:#357B42;">// pi9xh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EB233;">randomId</span><span style="color:#002339;">(</span><span style="color:#174781;">9</span><span style="color:#002339;">); </span><span style="color:#357B42;">// r39txcbqj</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,46),p=[l];function r(c,t,i,d,y,h){return n(),a("div",null,p)}const E=s(o,[["render",r]]);export{m as __pageData,E as default};
