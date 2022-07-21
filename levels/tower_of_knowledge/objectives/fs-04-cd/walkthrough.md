# Changing directories

The simplest way to change directories with `cd` is to type the name of a directory contained within your present working directory. This is a useful combo with `ls`: we can use `ls` to look at the directories, and then `cd` to move into them.

This is another example of a relative filepath. `cd` already knows the directory we are trying to move to is contained in our present working directory, so we don't need to give `cd` the full (absolute) path to the directory.

But sometimes it can be useful to give `cd` a longer path. We can take shortcuts! You might type `ls` to see the available directories, `cd` into one, then `ls` again, then `cd` again, etc. Instead, you can give `cd` a filepath:

```
$ cd <%= `${formatPathPartsForOs('cedric', 'robot_thoughts')}`%>
```

You can use this to move through multiple directories at once. You can even move to directories that aren't contained within your current directory by giving an absolute filepath, one that starts from the root directory.

## Going backwards

You may notice that `ls` only shows the items contained in the current directory: it does not show anything from the previous, the parent, directory. How would we move **backwards** with `cd`?

To refer to the parent directory, you can use `..`. To change directory to the parent directory, i.e. to go backwards, we can use `cd ..`. This also works with `ls`, we can look at the contents of the parent directory with `ls ..`. As with going forwards, we can also go backwards through multiple directories by using filepaths. `cd <%= `${formatPathPartsForOs('..', '..')}`%>` takes us to the parent's parent, i.e. two directories up. `cd <%= `${formatPathPartsForOs('..', '..', '..')}`%>` takes us three levels up. You get the idea!

Whilst `..` is the parent, `.` is the current directory. `cd .` does nothing, you stay where you are!

## Going home

When you opened your terminal, it opened to your home directory. The home directory also has a special shortcut, which is `~`. To change into the home directory, we can use `cd ~`. As before, this works with `ls`, `ls ~` will show the contents of the home directory.
