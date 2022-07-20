<% const isWindows = context.systemInfo.os === 'win32'; %>

# Find Your Home Directory

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Open your terminal.</li>
  <li>Type in the command <b><%= isWindows ? "TODO" : "pwd" %></b>.</li>
  <li>Copy the resulting file path into the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that you understand what a file path is, it's time to figure out where you're working from. Let's get into the terminal and find out!

> 💡 You'll be able to learn more about how terminals work on a future floor of the **Tower of Infinite Knowledge**! The rest of this current floor will assume that you have some familiarity with a terminal.

Open up the program `<%= isWindows ? "PowerShell" : "Terminal" %>`. You'll see a blank screen with a blinking cursor on it and not much else. This is your terminal!

The terminal is a powerful tool in the developer tool belt. It can also be an overwhelming one that is pretty unfamiliar on first encounter (and many after).

A terminal is a program with a [text interface](https://en.wikipedia.org/wiki/Text-based_user_interface) instead a [graphical interface](https://en.wikipedia.org/wiki/Graphical_user_interface). Most programs you've used until now (like Spotify or Chrome) have probably had a graphical interface!

To do stuff in a **graphical interface** you click around on images and buttons.

To do stuff in a **text interface** you type commands (special keywords) into the terminal.

<% if(isWindows) { %>

TODO: Implement Windows Text

<% } else { %>

This is where our first command, `pwd`, comes in! This command stands for "present working directory". It will tell us the file path to the directory our terminal is working in.

Type `pwd` into your terminal and then see what file path shows up. Copy that file path into the input on the right. Then click the _HACK_ button.

<% } %>
