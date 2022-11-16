import{_ as s,c as n,o as a,a as l}from"./app.25f29188.js";const u=JSON.parse('{"title":"Bytes to String Converter","description":"","frontmatter":{},"headers":[],"relativePath":"data-helpers/transformers/uint8Array-to-string.md"}'),e={name:"data-helpers/transformers/uint8Array-to-string.md"},p=l(`<h1 id="bytes-to-string-converter" tabindex="-1">Bytes to String Converter <a class="header-anchor" href="#bytes-to-string-converter" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">Class Name</td><td style="text-align:center;"><code>Uint8ArrayToString</code></td></tr><tr><td style="text-align:center;">Input Type</td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" target="_blank" rel="noreferrer">Uint8Array</a></td></tr><tr><td style="text-align:center;">Output Type</td><td style="text-align:center;">string</td></tr><tr><td style="text-align:center;">Purpose</td><td style="text-align:center;">This class helps us to convert <code>bytes</code> to <code>string</code></td></tr></tbody></table><p><em>Bytes are represented as <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" target="_blank" rel="noreferrer">Uint8Array</a></em></p><h2 id="class-signature" tabindex="-1">Class Signature <a class="header-anchor" href="#class-signature" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">class</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">Uint8ArrayToString</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">implements</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">TransformerFunction</span><span style="color:#E6E6E6;">&lt;</span><span style="color:#4EC9B0;">Uint8Array</span><span style="color:#E6E6E6;">, </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">&gt; {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#6A9955;">//...</span></span>
<span class="line"><span style="color:#E6E6E6;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">class</span><span style="color:#002339;"> </span><span style="color:#0444AC;">Uint8ArrayToString</span><span style="color:#002339;"> </span><span style="color:#DA5221;">implements</span><span style="color:#002339;"> </span><span style="color:#B02767;">TransformerFunction</span><span style="color:#002339;">&lt;</span><span style="color:#0444AC;">Uint8Array</span><span style="color:#002339;">, </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">&gt; {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#357B42;">//...</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#6A9955;">// Hello World! encoded as Uint8Array</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">input</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">Uint8Array</span><span style="color:#E6E6E6;">.</span><span style="color:#DCDCAA;">from</span><span style="color:#E6E6E6;">([</span><span style="color:#B5CEA8;">72</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">101</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">108</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">108</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">111</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">32</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">87</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">111</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">114</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">108</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">100</span><span style="color:#E6E6E6;">, </span><span style="color:#B5CEA8;">33</span><span style="color:#E6E6E6;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">result</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">new</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Uint8ArrayToString</span><span style="color:#E6E6E6;">().</span><span style="color:#DCDCAA;">convert</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">input</span><span style="color:#E6E6E6;">);</span></span>
<span class="line"><span style="color:#DCDCAA;">expect</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">result</span><span style="color:#E6E6E6;">).</span><span style="color:#DCDCAA;">toEqual</span><span style="color:#E6E6E6;">(</span><span style="color:#CE9178;">&#39;Hello World!&#39;</span><span style="color:#E6E6E6;">); </span><span style="color:#6A9955;">// \u2705</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#357B42;">// Hello World! encoded as Uint8Array</span></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">input</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">Uint8Array</span><span style="color:#002339;">.</span><span style="color:#7EB233;">from</span><span style="color:#002339;">([</span><span style="color:#174781;">72</span><span style="color:#002339;">, </span><span style="color:#174781;">101</span><span style="color:#002339;">, </span><span style="color:#174781;">108</span><span style="color:#002339;">, </span><span style="color:#174781;">108</span><span style="color:#002339;">, </span><span style="color:#174781;">111</span><span style="color:#002339;">, </span><span style="color:#174781;">32</span><span style="color:#002339;">, </span><span style="color:#174781;">87</span><span style="color:#002339;">, </span><span style="color:#174781;">111</span><span style="color:#002339;">, </span><span style="color:#174781;">114</span><span style="color:#002339;">, </span><span style="color:#174781;">108</span><span style="color:#002339;">, </span><span style="color:#174781;">100</span><span style="color:#002339;">, </span><span style="color:#174781;">33</span><span style="color:#002339;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">result</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">new</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Uint8ArrayToString</span><span style="color:#002339;">().</span><span style="color:#7EB233;">convert</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">input</span><span style="color:#002339;">);</span></span>
<span class="line"><span style="color:#7EB233;">expect</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">result</span><span style="color:#002339;">).</span><span style="color:#7EB233;">toEqual</span><span style="color:#002339;">(</span><span style="color:#A44185;">&#39;Hello World!&#39;</span><span style="color:#002339;">); </span><span style="color:#357B42;">// \u2705</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),o=[p];function t(r,c,y,E,i,d){return a(),n("div",null,o)}const A=s(e,[["render",t]]);export{u as __pageData,A as default};
