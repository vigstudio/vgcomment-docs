import{_ as s,c as n,o as a,a as l}from"./app.a77cc87d.js";const A=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"installation.md"}'),p={name:"installation.md"},o=l(`<h1 id="installation" tabindex="-1"><em>Installation</em> <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">composer require vigstudio/vgcomments</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1"><em>Usage</em> <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p><strong>Publish the assets files with:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan vendor:publish --tag=vgcomment-assets</span></span>
<span class="line"></span></code></pre></div><p><strong>Publish the assets files if you upgrade the package:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan vendor:publish --tag=vgcomment-assets --force</span></span>
<span class="line"></span></code></pre></div><p><strong>Or Add this to <code>composer.json</code> Auto Publish the assets files when upgrade the package:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">post-update-cmd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@php artisan vendor:publish --tag=vgcomment-assets --force</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><p><strong>You can publish the config with:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan vendor:publish --tag=vgcomment-config</span></span>
<span class="line"></span></code></pre></div><p>Edit prefix route in <code>config/vgcomment.php</code> file.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    | Route Prefix</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    | This is the URI path where VgComment will be accessible from. Feel free to</span></span>
<span class="line"><span style="color:#676E95;">    | change this path to anything you like.</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">prefix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vgcomment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><p>Edit connection name in <code>config/vgcomment.php</code> file.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    | Database Connection</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    | Here you may specify which of the database connections below you wish</span></span>
<span class="line"><span style="color:#676E95;">    | to use as your default connection for all of your database work.</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">connection</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">env</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DB_CONNECTION</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysql</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"></span></code></pre></div><p>Edit table names in <code>config/vgcomment.php</code> file.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    | Name of Tables in Database</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    | This is the name of the table that will be created by the migration and</span></span>
<span class="line"><span style="color:#676E95;">    | used by the Comment model shipped with this package.</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;comments&quot;    : Comments Table</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;files&quot;       : Files Attachment Table</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;reactions&quot;   : Reactions Table</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;reports&quot;     : Reports Table</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;settings&quot;    : Settings Table</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">comments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vgcomments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">files</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vgcomment_files</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">reactions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vgcomment_reactions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">reports</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vgcomment_reports</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">settings</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vgcomment_settings</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span></code></pre></div><p>Config Column or Attribute User Model in <code>config/vgcomment.php</code> file.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    | Column of User Table for get Data</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    | This is the setting for column of user table for get data.</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;user_column_name&quot;  : Column name for get name user</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;user_column_email&quot; : Column name for get email user</span></span>
<span class="line"><span style="color:#676E95;">    | &quot;user_column_url&quot;   : Column name for get url user</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_column_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_column_email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_column_url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_column_avatar_url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">avatar_url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><p>Set moderation user in <code>config/vgcomment.php</code> file.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    | Users Manager Comments</span></span>
<span class="line"><span style="color:#676E95;">    |--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    | This is the setting for users manager comments.</span></span>
<span class="line"><span style="color:#676E95;">    | &#39;guard&#39; =&gt; [user_id]</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    | Example:</span></span>
<span class="line"><span style="color:#676E95;">    | &#39;web&#39; =&gt; [1, 2, 3]</span></span>
<span class="line"><span style="color:#676E95;">    | &#39;api&#39; =&gt; [1, 2, 3]</span></span>
<span class="line"><span style="color:#676E95;">    |</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">moderation_users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"></span></code></pre></div><p><strong>Run the migrate command to create the necessary tables:</strong> Before running the migrate command, you can edit the <code>config/vgcomment.php</code> file to change the table names.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"></span></code></pre></div><p><strong>Additionally you may want to clear the config, cache, etc:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan optimize:clear</span></span>
<span class="line"></span></code></pre></div>`,25),e=[o];function t(c,r,i,D,y,C){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};