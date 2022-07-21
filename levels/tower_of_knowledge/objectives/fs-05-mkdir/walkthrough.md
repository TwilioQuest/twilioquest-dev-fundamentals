# Making Directories

As with `cd`, the simplest way to create a directory with `mkdir` is to type just a directory name. `mkdir my_cool_directory` will create `my_cool_directory` inside the present working directory, or in other words, `my_cool_directory`'s parent will be the current working directory.

We can create directories in other directories, or create multiple directories at once, using filepaths. `mkdir my_cool_directory/my_cooler_directory` will create a directory in `my_cool_directory` without us having to `cd` into it first. However, if we tried to do `mkdir directory1/directory2`, and `directory1` did not already exist, we would get an error. We can prevent that, and create multiple directories at once, using the `-p` flag. `mkdir -p directory1/directory2` works just fine, and creates both directories, even if `directory1` does not already exist.

Using `..`, we can create directories in the parent directory. `mkdir ../directory3` will go the parent, the directory containing our present working directory, and create `directory3`.

So far we have looked at creating directories relative to our present working directory. We can use absolute filepaths, filepaths that start from the root directory, to create directories anywhere on the system. You can also create directories relative to your home directory, by beginning the path with `~`.
