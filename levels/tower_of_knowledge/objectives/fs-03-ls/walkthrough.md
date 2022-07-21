<% const isWindows = context.systemInfo.os === 'win32'; %>

# Listing directory contents

`ls` lets us list the current directory contents. It will display both files, and directories. To complete this objective, enter the `ls` command in your terminal, and enter any file or directory that you see.

<% if(isWindows) { %>

It's not immediately obvious which of the items listed by `ls` are files, and which are directories. We can pass a "flag" to the `ls` command to look for only certain kinds of files. A flag is an option that's preceeded by `-`. For example, to show only directories, we can use `ls -Directory`. To see only files, we can use `ls -File`.

> ⚠️ In PowerShell, `ls` is a shortcut for the command `Get-ChildItem`. This is important, because `ls` is a command on other operating systems, such as Linux and Mac. The `ls` on those operating systems works differently to the `ls` in PowerShell, because the `ls` in PowerShell is actually `Get-ChildItem`! Keep this in mind if you move between operating systems.

<% } else { %>

`ls` can display a lot more information about files and directories than just the names. We can check properties, such as the size, our ability to read or write to a file, and when it was last edited. To show this information, you have to pass a "flag" to the `ls` command. A flag is an option that's preceeded by `-`. For example, if we want a clearer indicator of which items are files and which are directories, we can use `ls -F`. `-F` is the flag for "classify", which will make `ls` classify each of the names in its output to classify the items by whether they are a directory, or a different type of file.

<% } %>
