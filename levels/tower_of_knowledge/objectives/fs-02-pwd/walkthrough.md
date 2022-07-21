# Working directories

If you are used to working in a graphical interface, the idea of a "working directory" might be new, and strange. In a graphical environment, we are usually working on a desktop, which is our workspace where we can open applications. You only really think about directories when browsing your files in a file explorer, or trying to open a file in an application.

In the terminal, the desktop is just another directory that can contain files, but unlike in the graphical interface, it's not usually where you will start when you open the terminal. When you first open the terminal, you will be in what's called the "home directory". This is the directory for your user account on that computer.

Running a command in the terminal is just like starting an application in the desktop, except you start the program by typing the command, instead of clicking an icon in your application menu or toolbar.

Some programs care about the directory they were run from. They may use this information to find files using relative paths, for example. This is especially important if you are using a command to create or delete a file! This is called the program's "working directory", and it is usually set to the directory that you were in in the terminal when you ran the command.

`pwd` tell us the "present working directory", the directory we have open in the terminal. This can be useful if you need to get the filepath for a directory for something. For example, in The Javascript Test Lab and The Pythonic Temple, you will need to provide a filepath to a directory where you will keep your code for those missions. `pwd` gives an easy way to get a path of a directory. But more importantly, it helps makes sure we always know where we are in the file system.

## Why do we need `pwd`?

You might be thinking "but why do I need `pwd` when the terminal says the directory I'm in in front of every command?".

That text you're seeing is called the prompt. This is a line of text that indicates the terminal is ready to accept new input, usually a command, as opposed to it currently being busy running a command. The prompt can contain lots of useful information. In many cases, by default, the prompt shows your present working directory, just like if you had typed `pwd`!

As you get further into your journey with coding and the terminal, you may decide to customize your prompt to show other information. You may decide you prefer a "minimal" terminal, and have it display no information at all! For this reason, knowing how to display the full present working directory, rather than relying on the prompt, is always useful.

Scripting is another common use case. A superpower of the text interface, vs a graphical interface, is it is very easy to write small programs to do complex tasks for us, by combining multiple commands together. There may be a case where you want to pass the working directory to a command, and `pwd` helps us automate this in our scripts.
