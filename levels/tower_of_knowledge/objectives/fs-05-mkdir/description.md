<% const isWindows = context.systemInfo.os === 'win32'; %>

# Creating Our Own Directories

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Make a new directory with `<%= isWindows ? "TODO" : "mkdir" %>`.</li>
  <li>Get the file path to this directory.</li>
  <li>Enter this file path into the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that we can change into existing directories, lets learn how to make our own!

<% if(isWindows) { %>

We will be using the `mkdir`, or "make directory" command to accomplish this task. To use `mkdir` you write the name of the directory you want to create after the command in the terminal.

Here's an example of creating a directory called "test_directory". We also use `ls` before and after to confirm that the new directory has been made.

```bash
$ ls
old_directory

$ mkdir new_directory

$ ls
old_directory new_directory
```

To complete this objective, use `mkdir` to create a new directory with a name of your choosing. Then, find the filepath that leads to this new directory. You might want to use `cd` and `pwd` like you did in previous objectives!

Once you've found it, enter the file path to your new directory in the input on the right. Then click the _HACK_ button.

<% } else { %>

We will be using the `mkdir`, or "make directory" command to accomplish this task. To use `mkdir` you write the name of the directory you want to create after the command in the terminal.

Here's an example of creating a directory called "test_directory". We also use `ls` before and after to confirm that the new directory has been made.

```bash
$ ls
old_directory

$ mkdir new_directory

$ ls
old_directory new_directory
```

To complete this objective, use `mkdir` to create a new directory with a name of your choosing. Then, find the filepath that leads to this new directory. You might want to use `cd` and `pwd` like you did in previous objectives!

Once you've found it, enter the file path to your new directory in the input on the right. Then click the _HACK_ button.

<% } %>
