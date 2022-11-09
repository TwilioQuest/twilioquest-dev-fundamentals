# Removing files

Files can be removed with `rm`. Enter the command, followed by the path to the file (or just the name, if you're in the same folder as the file) to remove it. For example, `rm yourfilename.txt`. 

## Removing multiple files

If you want to delete multiple files, you can list all of them to remove them in one command, for example `rm firstfile.txt secondfile.txt`. You can also delete files using "wildcards", with `*`. This lets you specify a pattern for the filename, and all files matching that pattern will be deleted.

For example, imagine you want to delete all `.jpg` images in a folder. You could enter `rm *.jpg`. `*.jpg` means "anything ending in `.jpg`". All images with the file extension `.jpg` will match the pattern, and be deleted, regardless of what the rest of their filename is.

In a future objective, you will learn how to remove folders, and folders of files.