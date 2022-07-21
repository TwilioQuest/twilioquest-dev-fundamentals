# What is a filepath?

Your computer stores data in files. There are many different kinds of files, from plaintext files (usually ending in .txt), to music and video (.mp3 and .mp4), or even whole applications. Your computer will contain and use many files, and so it is helpful to organize them in directories, or folders. You can put files, and even other directories, inside directories.

Filepaths are like maps to files on your computer. A file's path contains all of the directories you have to go through to find the file. Each directory in the path is a step in the journey to the file. Every file and directory on your computer has a path.

For example, if we create a file called "about_me.md" in a directory called "portfolio", the file's path might be:
`/portfolio/about_me.md`

In reality, if you create this directory and this file on your own computer, the filepath would be longer. That is because you would likely create this file in your user account, inside your Documents or home directory. The filepath would also contain those directories, as well:

<%= isWindows ? `C:\Users\Cedric\portfolio\about_me.md`| `/home/Cedric/portfolio/about_me` %>

The first directory in a filepath is called the **root directory**. This is because files are often visualized as the roots of a plant or tree, growing and branching outwards.

## Using file paths

You will use a file's path whenever you need to communicate where a file can be found. You may need to tell other people you are working with on a project where a file is located, and give them a file path. You will also have to use file paths when writing your own code, to use other files. For example, you might want to add an image to your website with HTML:

```
<img src="/images/cedric_headshot.png">
```

This is an example of a **relative** path. You do not always have to give the whole path to a file, which is called the **absolute** path. When you are working in a project, you can often use paths that are "relative" to the directory the project is contained in, which means the path starts from the containing directory, and not from the root directory.

Many TwilioQuest missions, such as The Javascript Test Lab and The Pythonic Temple, will ask you to give filepaths as part of objectives, to help TwilioQuest find the code that you will write in later objectives.

## Completing the objective

Let's look again at the files and folders on Cedric's computer:

```plaintext
cedric/
├── robot_thoughts/
│ ├── real_boy.idea
│ └── youtube_video.mp4
│
├── thank_you_drafts/
│ ├── thank_you_toast.docx
│ ├── thank_you_toast_v1.docx
│ ├── thank_you_toast_v2.docx
│ └── thank_you_toast_v2_Final.docx
│
├── fog_owl_computations.csv
└── my_cool_drawing.png
```

This is an example of a file tree. "cedric/" is the root directory, containing all of the other directories and files in the tree. "robot_thoughts/" and "thank_you_drafts/" are other directories in the tree, which you can tell by both the fact they contain files, and end with a slash. Only directories can contain files, files cannot contain other files. Cedric's Youtube video is in the "robot_thoughts/" directory.

Many files have a "file extension", that tells the user, and programs on the computer, what to expect that file to contain. Cedric's Youtube video has a file extension of ".mp4", which tells us, and the computer, that it is a video file. Your computer will use this extension to choose the right program to open the file with.

To work out the filepath, start at the root directory, and walk through the tree, adding each directory on as you go. The filepath ends with the file, "youtube_video.mp4". Each directory in the tree is separated with a slash.
