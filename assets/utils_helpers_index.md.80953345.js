import{_ as s,c as a,o as n,a as l}from"./app.64fdbf73.js";const h=JSON.parse('{"title":"Helpers","description":"","frontmatter":{},"headers":[],"relativePath":"utils/helpers/index.md"}'),e={name:"utils/helpers/index.md"},o=l(`<h1 id="helpers" tabindex="-1">Helpers <a class="header-anchor" href="#helpers" aria-hidden="true">#</a></h1><h2 id="debug" tabindex="-1">debug() <a class="header-anchor" href="#debug" aria-hidden="true">#</a></h2><p>Can be used to turn on/off console logging for debugging purposes</p><div class="tip custom-block"><p class="custom-block-title">Enable/Disable Logging</p><p>Expose a global variable <code>__ABU_DEBUG__</code> with a truthy value to enable logs</p></div><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">debug</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">any</span><span style="color:#E6E6E6;">, </span><span style="color:#D4D4D4;">...</span><span style="color:#9CDCFE;">optionalParams</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">any</span><span style="color:#E6E6E6;">[])</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">void</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">debug</span><span style="color:#002339;">(</span><span style="color:#B1108E;">message</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">any</span><span style="color:#002339;">, </span><span style="color:#7B30D0;">...</span><span style="color:#B1108E;">optionalParams</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">any</span><span style="color:#002339;">[])</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">void</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="hasvalue" tabindex="-1">hasValue() <a class="header-anchor" href="#hasvalue" aria-hidden="true">#</a></h2><p>This checks for null, undefined and empty string... return false for any of these</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">hasValue</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">any</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">boolean</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">hasValue</span><span style="color:#002339;">(</span><span style="color:#B1108E;">value</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">any</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">boolean</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8),p=[o];function c(r,t,i,d,y,E){return n(),a("div",null,p)}const D=s(e,[["render",c]]);export{h as __pageData,D as default};
