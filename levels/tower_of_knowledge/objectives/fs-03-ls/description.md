<% const isWindows = context.systemInfo.os === 'win32'; %>

# Find Another Directory

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Open your terminal.</li>
  <li>Type in the command <b><%= isWindows ? "TODO" : "ls" %></b>.</li>
  <li>Copy the name of one of the files or directories into the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that we know where our terminal's home directory is on the file system, let's figure out where we can go from there.

<% if(isWindows) { %>

TODO: Implement Windows Text

<% } else { %>

We're going to learn about our second command now. It's called `ls`. This command **L**i**S**ts the contents of a directory.

If we run this command we'll see a list of words. These are all the names of files and directories inside our "present working directory" that we learned about in the last objective.

Type `ls` into your terminal and then see what directories and files show up. Copy one of the directory or file names into the input on the right. Then click the _HACK_ button.

<% } %>
