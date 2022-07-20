<% const isWindows = context.systemInfo.os === 'win32'; %>

# Find Another Directory

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Open your terminal.</li>
  <li>Type in the command <b><%= isWindows ? "TODO" : "ls -d */" %></b>.</li>
  <li>Copy the resulting file path into the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that we know where our terminal's home directory is on the file system, let's figure out where we can go from there.

<% if(isWindows) { %>

TODO: Implement Windows Text

<% } else { %>

We're going to learn about our second command now. It's called `ls`. This command **L**i**S**ts the contents of a directory.

If we run this command we'll see a list of words. These are all the names of files and directories inside our "present working directory" that we learned about in the last objective.

We want to find which of these names are directories and which are files. To do that we need to make use of the `ls` command line argument flag `-d`. This will let us filter only the names of directories. To use this flag, we'll need to run the command `ls -d */`.

Type `ls -d */` into your terminal and then see what directories show up. Copy one of the directory names into the input on the right. Then click the _HACK_ button.

<% } %>
