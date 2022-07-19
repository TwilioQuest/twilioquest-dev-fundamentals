<% const isWindows = context.systemInfo.os === 'win32'; %>

# Finding your Path

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Study the diagram below.</li>
  <li>Enter the file path shown into the input on the right.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Cedric is preparing to start up his YouTube channel and needs to track down a video he made. You need to track down where he left it.

This is a diagram showing some files and folders on Cedric's computer. He needs you to find the path to his video file.

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

Here are some example files paths to compare to:

- The path to Cedric's Fog Owl flight calculations is:
  <%= `\`${formatPathPartsForOs('cedric', 'fog_owl_computations.csv')}\`` %>
- The path to Cedric's final thank you toast is:
  <%= `\`${formatPathPartsForOs('cedric', 'thank_you_drafts', 'thank_you_toast_v2_Final.docx')}\``%>

Enter the file path to Cedric's YouTube video in the text field on the right. Then click the _HACK_ button.
