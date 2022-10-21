<% const isWindows = context.systemInfo.os === 'win32'; %>

# Creating files

Often, when working with your filesystem in the command line or even a GUI file explorer, you will be working with files that already exist. You may be searching for and opening files that already exist, or choosing a location to save a new file from an application. However, particularly when starting new projects, it can be easier to create files quickly from the command line, as you set up your file structure. You may also create files as part of a sequence of commands, for example, you may create a file to hold the contents of another command.

<% if(isWindows) { %>
In Powershell, the command to create a new file is `ni`. To create a new file with `ni`, use the command followed by the name you want to use for the file, for example, `ni yourfilename.txt`. `ni` stands for "new item", and as the name suggests, is a tool for creating new items wherever it is used. When this command is used in Powershell, it can be used to create new files as well as folders. By default, it will create new files, rather than folders.

## An aside about Powershell aliases

You may be surprised by that last point: didn't we use `mkdir` to create a new folder in the previous objective? Yes, in Powershell, `mkdir` is an alias (a shortcut) for `ni -ItemType Directory`. The command line is very popular in Linux and other Unix-based operating systems, so Powershell provides aliases that replicate commands from Linux shells such as bash, so users can move between Windows and Linux easily. In this mission, we use these aliases where they exist. You've seen several others already, such as `cd` and `ls`. It's inevitable that you will encounter a Linux-style shell at some point, and this way, you'll be comfortable navigating the filesystem, no matter which terminal you're using!

Whilst Powershell has aliases for lots of common Linux commands, it doesn't have an alias for `touch`, a command that can be used to create new files, so we use `ni`.

You'll learn more about aliases, and how to create your own, in a future floor of the Tower of Infinite Knowledge!

## File properties

After you enter the `ni` command to create a file, you will see some output about the file you've created. This will include "Mode", "LastWriteTime" and "Length". "Length" is the file's size in bytes (or kilobytes, megabytes, or gigabytes, for larger files). "LastWriteTime" gives a date and time, a "timestamp", for the last time this file was modified, or "written". This information can be useful when you're navigating your filesystem, for example, in a folder containing many similar files, you may use "LastWriteTime" to find the one you most recently worked with. It's also used by applications and developer tools, for example, `git`, that you can learn more about in the Forest of Open Source mission.

"Mode" is the most complicated, and is a 6 character string that describes the file atrributes as "flags". These are options that can either be on, or off. When off, they are represented by a dash, "-". You will likely see a lot of dashes in your Powershell for the file you created. The 6 options are always in the same order, which is:

- d - The file is a **directory**.
- a - The file can be **archived**.
- r - The file is **read-only**: it can't be edited.
- h - The file is **hidden**. We'll learn more about this in a future objective.
- s - The file is a **system** file, it may be required for the operating system and is probably protected.
- l - The file is a **reparse point**. This can mean multiple things, the most common is a "symlink", which means a file that is just a pointer to another file.

For example, a folder's mode will be `d-----`. A file you can't edit will have a mode of `--r---`. Whilst you won't encounter them often, it's important to be aware that these properties exist. For example, if you find you can't edit a file you expect to edit, it may be because it's Mode is set to read-only.

<% } else { %>
There are many ways to create a new file, but `touch` is popular and convenient. To create a new file with `touch`, enter the command followed by the filename you want to use, for example `touch yourfilename.txt`. If the file doesn't already exist, `touch` will create an empty file with that name.

## File properties

`touch` does more than create empty files, it is a tool for setting the modified and access time of files. These are timestamps (a date and a time) that track when a file was last changed, or accessed. This information can be useful when you're navigating your filesystem, for example, in a folder containing many similar files, you may use the modified time to find the one you most recently worked with. It's also used by applications and developer tools, for example, `git`, that you can learn more about in the Forest of Open Source mission. We won't use `touch` for that purpose in this mission, but now you know that this seemingly simple tool is more than meets the eye!

As well as modified and access time, files have other properties. You can see these by using `ls -l`. The `-l` is a parameter to display files in **l**ong format, i.e. with additional information. The most important of the displayed information is the file permissions, in the first column. There are three file permissions:

- r: read, the permission to view a file's contents.
- w: write, the permission to change a file's contents.
- x: execute, the permission to execute a file, as a script or program.

These permissions are always in order, `rwx`. When the permission is off, it is replaced with a `-`. For example, a file you can only read has permissions `r--`. In `ls -l`, you will see up to 9 characters. This is because the permissions are repeated 3 times, for different types of users. The first set of permissions are for the files owner. The second are for "group", a collection of users of the same machine. The third is for "public", which is anyone who may have access to the file on the machine, including over an internet connection.

You can change these permissions with commands like `chmod`. We won't do that in this mission, but it's important to be aware of these permissions. For example, if you find you can't edit a file, it may be because of the file permissions!

<% } %>
