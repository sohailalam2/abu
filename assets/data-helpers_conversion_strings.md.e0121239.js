import{_ as s,c as a,o as e,a as t}from"./app.25f29188.js";const D=JSON.parse('{"title":"String Conversion","description":"","frontmatter":{},"headers":[],"relativePath":"data-helpers/conversion/strings.md"}'),n={name:"data-helpers/conversion/strings.md"},l=t(`<h1 id="string-conversion" tabindex="-1">String Conversion <a class="header-anchor" href="#string-conversion" aria-hidden="true">#</a></h1><h2 id="tosnakecase" tabindex="-1">toSnakeCase() <a class="header-anchor" href="#tosnakecase" aria-hidden="true">#</a></h2><p>This will convert a given string to <strong>snake_case</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">toSnakeCase</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">toSnakeCase</span><span style="color:#002339;">(</span><span style="color:#B1108E;">value</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:left;">Input Example</th><th style="text-align:left;">snake_case Output Example</th></tr></thead><tbody><tr><td style="text-align:left;"><code>nancyDrew</code></td><td style="text-align:left;"><code>nancy_drew</code></td></tr><tr><td style="text-align:left;"><code>NancyDrew</code></td><td style="text-align:left;"><code>nancy_drew</code></td></tr><tr><td style="text-align:left;"><code>nancy_drew</code></td><td style="text-align:left;"><code>nancy_drew</code></td></tr><tr><td style="text-align:left;"><code>Nancy Drew</code></td><td style="text-align:left;"><code>nancy_drew</code></td></tr></tbody></table><h2 id="tocamelcase" tabindex="-1">toCamelCase() <a class="header-anchor" href="#tocamelcase" aria-hidden="true">#</a></h2><p>This will convert a given string to <strong>camelCase</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">toCamelCase</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">toCamelCase</span><span style="color:#002339;">(</span><span style="color:#B1108E;">value</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:left;">Input Example</th><th style="text-align:left;">camelCase Output Example</th></tr></thead><tbody><tr><td style="text-align:left;"><code>nancyDrew</code></td><td style="text-align:left;"><code>nancyDrew</code></td></tr><tr><td style="text-align:left;"><code>NancyDrew</code></td><td style="text-align:left;"><code>nancyDrew</code></td></tr><tr><td style="text-align:left;"><code>nancy_drew</code></td><td style="text-align:left;"><code>nancyDrew</code></td></tr><tr><td style="text-align:left;"><code>Nancy Drew</code></td><td style="text-align:left;"><code>nancyDrew</code></td></tr></tbody></table><h2 id="totitlecase-topascalcase" tabindex="-1">toTitleCase() / toPascalCase() <a class="header-anchor" href="#totitlecase-topascalcase" aria-hidden="true">#</a></h2><p>This will convert a given string to <strong>TitleCase</strong> or <strong>PascalCase</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">toTitleCase</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">toPascalCase</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">toTitleCase</span><span style="color:#002339;">(</span><span style="color:#B1108E;">value</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">toPascalCase</span><span style="color:#002339;">(</span><span style="color:#B1108E;">value</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th style="text-align:left;">Input Example</th><th style="text-align:left;">TitleCase/PascalCase Output Example</th></tr></thead><tbody><tr><td style="text-align:left;"><code>nancyDrew</code></td><td style="text-align:left;"><code>NancyDrew</code></td></tr><tr><td style="text-align:left;"><code>NancyDrew</code></td><td style="text-align:left;"><code>NancyDrew</code></td></tr><tr><td style="text-align:left;"><code>nancy_drew</code></td><td style="text-align:left;"><code>NancyDrew</code></td></tr><tr><td style="text-align:left;"><code>Nancy Drew</code></td><td style="text-align:left;"><code>NancyDrew</code></td></tr></tbody></table><h2 id="tokebabcase" tabindex="-1">toKebabCase() <a class="header-anchor" href="#tokebabcase" aria-hidden="true">#</a></h2><p>This will convert a given string to <strong>kebab-case</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">toKebabCase</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;"> {}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">function</span><span style="color:#002339;"> </span><span style="color:#7EB233;">toKebabCase</span><span style="color:#002339;">(</span><span style="color:#B1108E;">value</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;"> {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:left;">Input Example</th><th style="text-align:left;">kebab-case Output Example</th></tr></thead><tbody><tr><td style="text-align:left;"><code>nancyDrew</code></td><td style="text-align:left;"><code>nancy-drew</code></td></tr><tr><td style="text-align:left;"><code>NancyDrew</code></td><td style="text-align:left;"><code>nancy-drew</code></td></tr><tr><td style="text-align:left;"><code>nancy_drew</code></td><td style="text-align:left;"><code>nancy-drew</code></td></tr><tr><td style="text-align:left;"><code>Nancy Drew</code></td><td style="text-align:left;"><code>nancy-drew</code></td></tr></tbody></table>`,17),o=[l];function p(c,r,d,y,i,E){return e(),a("div",null,o)}const C=s(n,[["render",p]]);export{D as __pageData,C as default};
