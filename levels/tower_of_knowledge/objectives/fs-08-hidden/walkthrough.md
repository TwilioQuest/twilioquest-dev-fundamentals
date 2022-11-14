<% const isWindows = context.systemInfo.os === 'win32'; %>

# Hidden files

Hidden files are files that are not displayed when you are browsing your filesystem, either with a graphical file explorer, or the command line with commands such as `ls`.

Hidden files are usually files that you're unlikely to use, or will use infrequently. They will often be things created by your operating system or other programs, to store information needed by that program, but which a user is not expected to edit manually. For example, it could be a file that holds settings for a program. You're expected to edit the settings through the settings menu of the program, not by opening the file in a text editor, and so the settings may be stored in a hidden file.

We also may create hidden files ourselves. A common example is `.gitignore`. This is a file that's often created alongside coding projects, and tells the `git` version control system to ignore certain files. We often don't need to use this file again after it has been created the first time, and so it's commonly hidden.

The filename for a hidden file will often begin with a `.`. In Linux and other Unix-based systems, a file or folder whose name begins with a `.` will be hidden. This isn't the case in Windows, where the `hidden` attribute has to be set on the file for it to be hidden. Hidden files created by Windows will not begin with a `.`. However, because the `.` is used in Unix-based systems, and these systems are popular with developers, you may still encounter files and folders with a leading `.` on Windows.

<% if(isWindows) { %>
On Windows, a file is hidden by changing its attributes. In Powershell, you can change a file's attributes using `attrib`. To make a file hidden, you use `attrib +h`. To create a hidden file, first create the file with `ni yourhiddenfilename.txt`, and then change its attributes with `attrib +h yourhiddenfilename.txt`.
<% } else { %>
On Linux and MacOS, you can hide a file by starting its filename with a `.`, for example `.gitignore`. You can create a hidden file in one command, for example `touch .yourhiddenfile.txt`. To make an existing file hidden, you can rename it using `mv`. `mv` is for renaming and moving files. To use `mv`, give it two arguments: the name of the file you want to rename, and the new name. For example: `mv notahiddenfile.txt .nowahiddenfile.txt`. This will rename `notahiddenfile.txt` to `.nowahiddenfile.txt`, making it hidden by placing a `.` at the start of the filename.

<% } %>

# Showing hidden files

Hidden files are hidden by default, but can be revealed in both GUI and command line file explorers.

<% if(isWindows) { %>

To view hidden files in Powershell, you can use `dir -ah`. `-ah` is a flag that means "Attributes: Hidden", i.e. show files with the hidden attribute.

## Another aside on Powershell Aliases

Earlier, when viewing files in the command line with Powershell, we used `ls`. `ls` in Powershell is another one of those aliases: `ls` is the command for listing files in Unix, and so Powershell provides it as a shortcut to its own command, `dir`. Unfortunately, these aliases can sometimes be misleading. If you were to search for how to show hidden files with `ls`, you'd likely find answers about `ls -a`. But this command will cause an error in Powershell. That's because `ls` is acting as a shortcut for `dir`, but `dir` has a different set of options, flags, and parameters to `ls`, and the `ls` alias is not smart enough to substitute these.

In `ls` on Unix, `-a` is the flag to display files beginning with `.`. In Powershell, `-a` as a flag on its own is invalid: it is the start of a flag to look for select attributes, and must be followed by a further letter to indicate the attribute. In `-ah`, the `h` is for the hidden attribute.
<% } else { %>
On Linux and MacOS, you can reveal hidden files using `ls -a`. `-a` is a flag that shows all files and folders whose names begin with `.`.
<% } %>
