<% const isWindows = context.systemInfo.os === 'win32'; %>

# Creating Our Own Directories

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Step 1.</li>
  <li>Step 2.</li>
  <li>Step 3</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

General content here...

<% if(isWindows) { %>

windows specific content

<% } else { %>

\*nix specific content

<% } %>
