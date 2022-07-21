<% const isWindows = context.systemInfo.os === 'win32'; %>

# Find Your Home Directory

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Open your terminal.</li>
  <li>Type in the command <b>pwd</b>.</li>
  <li>Copy the resulting file path into the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that you understand what a filepath is, it's time to figure out where you're working from. Let's get into the terminal and find out!

Open up the program `<%= isWindows ? "PowerShell" : "Terminal" %>`. You'll see a blank screen with a blinking cursor on it and not much else. This is your terminal!

The terminal is a powerful tool in the developer tool belt. It can also be an overwhelming one that is pretty unfamiliar on first encounter (and many after).

> 💡 You'll be able to learn more about how terminals work on a future floor of the **Tower of Infinite Knowledge**! The rest of this current floor will assume that you have some familiarity with a terminal.

Most programs you've used until now (like Spotify or Chrome) have a **graphical interface**, which is usually controlled through moving the mouse and clicking on controls such as buttons and images. The terminal is a **text interface**, which you control by entering commands.

When working in the terminal, you are always "in" a directory. We'll soon learn how to move around between directories, but for now, let's learn how to find out where we are.

<% if(isWindows) { %>

This is where our first command, `pwd`, comes in! This command stands for "present working directory". It will tell us the filepath to the directory our terminal is working in.

Type `pwd` into your terminal and then see what filepath shows up. Copy that filepath into the input on the right. Then click the _HACK_ button.

<% } else { %>

This is where our first command, `pwd`, comes in! This command stands for "present working directory". It will tell us the filepath to the directory our terminal is working in.

Type `pwd` into your terminal and then see what filepath shows up. Copy that filepath into the input on the right. Then click the _HACK_ button.

<% } %>
