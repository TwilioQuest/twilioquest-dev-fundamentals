<% const isWindows = context.systemInfo.os === 'win32'; %>

# Moving Through Directories

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Study the file tree diagram below.</li>
  <li>Determine what your present working directory would be in scenario #1 below.</li>
  <li>Determine what your present working directory would be in scenario #2 below.</li>
  <li>Enter these values into the inputs on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Now that we know what else is on the file system, let's learn how to move around!

To complete this objective, you'll need to help Cedric move around his computer. Here are the contents of his file system again:

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

To complete this objective, **consider the two scenarios below**:

1. From the root cedric directory, if you change directory into `robot_thoughts` what would the new present working directory be?

2. From the root cedric directory, if you try to change directory into `fog_owl_computations.csv` what would the present working directory be?

Enter these present working directories into the inputs on the right. Then click the _HACK_ button.

## How do I change directory?

<% if(isWindows) { %>

It's time to learn about our third file system related command. This one is called `cd` and it stands for "change directory". Like the name suggests, this will let us change which directory is our terminal's "present working directory".

When you type `cd` into the terminal, and then you put the name of a directory after it your terminal will move or "change" to that new directory. This means when you run `pwd` afterward, you'll see the new directory.

Here's an example of using `cd` from Cedric's file system:

```bash
$ pwd
Path
----
cedric

$ cd thank_you_drafts

$ pwd
Path
----
cedric/thank_you_drafts
```

> ⚠️ This only works if you try to move into a directory! It's not possible to move into a file. Your present working directory won't change if you try to `cd` into a file!

<% } else { %>

It's time to learn about our third file system related command. This one is called `cd` and it stands for "change directory". Like the name suggests, this will let us change which directory is our terminal's "present working directory".

When you type `cd` into the terminal, and then you put the name of a directory after it your terminal will move or "change" to that new directory. This means when you run `pwd` afterward, you'll see the new directory.

Here's an example of using `cd` from Cedric's file system:

```bash
$ pwd
cedric

$ cd thank_you_drafts

$ pwd
cedric/thank_you_drafts
```

> ⚠️ This only works if you try to move into a directory! It's not possible to move into a file. Your present working directory won't change if you try to `cd` into a file!

<% } %>
