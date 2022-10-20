<% const isWindows = context.systemInfo.os === 'win32'; %>

# Creating Our Own Files

<div class="aside">
<h3>Requirements</h3>
<ul>
<% if(isWindows) { %>
  <li>Make a new file with <b>copy null</b> in <b>cmd</b> or <b>ni</b> in <b>PowerShell</b>.</li>
<%} else { %>
  <li>Make a new file with <b>touch</b>.</li>
<% } %>
  <li>Get the path to this file.</li>
  <li>Enter this file path into the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that we have a directory to play around with, let's look at making files!

<% if(isWindows) { %>

New files can be created using `copy null yourfilename` in `cmd` (the command prompt) or `ni yourfilename` in `PowerShell`.

Here's an example of creating a text file called "cloud". We also use `ls` before and after to confirm that the new file has been made.

```bash
$ ls
*shouldn\'t print anything*

$ ni cloud.txt

$ ls
cloud.txt
```

To complete this objective, use `copy null yourfilename` in `cmd` (the command prompt) or `ni yourfilename` in `PowerShell` to create a new file with a name of your choosing. Then, find the filepath that leads to this new directory. You might want to use `cd` and `pwd` like you did in previous objectives!

<% } else { %>

New files can be created using `touch`.

Here's an example of creating a text file called "cloud". We also use `ls` before and after to confirm that the new file has been made.

```bash
$ ls
*shouldn\'t print anything*

$ touch cloud.txt

$ ls
cloud.txt
```

To complete this objective, use `touch` to create a new file with a name of your choosing. Then, find the filepath that leads to this new directory. You might want to use `cd` and `pwd` like you did in previous objectives!

Once you've found it, enter the path to your new file in the input on the right. Then click the _HACK_ button.

<% } %>
