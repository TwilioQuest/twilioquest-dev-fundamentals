<% const isWindows = context.systemInfo.os === 'win32'; %>

# Creating Hidden Files

<div class="aside">
<h3>Requirements</h3>
<ul>
<% if(isWindows) { %>
  <li>Make a new file called "sneaky.txt" in our directory with <b>ni</b>.</li>
  <li>Mark the file as hidden with <b>attrib +h</b>.</li>
<% } else { %>
  <li>Make a new hidden file called ".sneaky.txt" in our directory with <b>touch</b>.</li>
<% } %>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Let's learn to create hidden files!

<% if(isWindows) { %>

We will be using a combination of the `ni` and `attrib` commands to make our file and hide it, respectively. You can use `ni` just like before by writing the name of the file you'd like to create after the command in the terminal: `ni yourfilename.txt`. Afterwards, you can use `attrib` with the `+h` flag to set the file to hidden like so: `attrib +h yourfilename.txt`.

Here's an example of creating a file called `spoon.txt` and marking it as hidden. We also use `ls` with the `-ah` flag before and after to confirm that the new file has been made.

```bash
$ ls -ah
*should not show anything*

$ ni spoon.txt
$ attrib +h spoon.txt

$ ls -ah
spoon.txt
```

To complete this objective, use `ni` to create a new file called `sneaky.txt`, and `attrib +h` to mark that file as hidden.

Once you've made the new hidden file, click the _HACK_ button.

<% } else { %>

We will be using the `touch` command to create our file and hide it at the same time. Just like before, you write the name of the file you want to create after the command in the terminal, this time, making sure to add a period at the beginning: `touch .yourfilename`.

Here's an example of creating a hidden file called `.spoon.txt`. We also use `ls` with the `-a` flag before and after to confirm that the new file has been made.

```bash
$ ls -a
*should not show anything*

$ touch .spoon.txt

$ ls -a
.spoon.txt
```

To complete this objective, use `touch` to create a new hidden file called `.sneaky.txt`.

Once you've made the new hidden file, click the _HACK_ button.

<% } %>
