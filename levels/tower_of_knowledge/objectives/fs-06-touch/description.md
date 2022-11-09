<% const isWindows = context.systemInfo.os === 'win32'; %>

# Creating Our Own Files

<div class="aside">
<h3>Requirements</h3>
<ul>
<% if(isWindows) { %>
  <li>Make a new file with <b>ni</b>.</li>
<%} else { %>
  <li>Make a new file with <b>touch</b>.</li>
<% } %>
  <li>Copy the name of this file.</li>
  <li>Enter the name of this file in the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that we have a directory to play around with, let's look at making files!

<% if(isWindows) { %>

New files can be created using the `ni` command, which is an acronym for "new item". To create a new file, enter `ni` followed by the filename: `ni yourfilename`.

Here's an example of creating a text file called "cloud". We also use `ls` before and after to confirm that the new file has been made.

```bash
$ ls
*should not show anything*

$ ni cloud.txt

$ ls
cloud.txt
```

To complete this objective, use `ni yourfilename` to create a new file with a name of your choosing. Then, copy the name of your newly created file. You might want to use `cd` and `pwd` like you did in previous objectives!

Once finished, enter the name of your new file in the input on the right. Then click the _HACK_ button.

<% } else { %>

There are multiple ways to create new files from the command line, but an easy and convenient one is the command `touch`. To create a new file with `touch`, enter the command, followed by the file name: `touch yourfilename`. `touch` is _actually_ a command for editing the access and modified times of a file, but if a file does not already exist, it will create the file.

Here's an example of creating a text file called "cloud". We also use `ls` before and after to confirm that the new file has been made.

```bash
$ ls
*should not show anything*

$ touch cloud.txt

$ ls
cloud.txt
```

To complete this objective, use `touch` to create a new file with a name of your choosing. Then, copy the name of your newly created file. You might want to use `cd` and `pwd` like you did in previous objectives!

Once finished, enter the name of your new file in the input on the right. Then click the _HACK_ button.

<% } %>
