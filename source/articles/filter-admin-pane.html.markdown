---
title: Filter - Admin Panes
date: 2017/11/2
category: Admin Filters
---

This is a filter for adding extra panes to the admin panel for adding extra functionality. For example, say we're creating a backup plugin, we might add a pane to hold a button for initiating backups.

The filter name is "adminPane".

The callback takes one parameter: "panelID". This is the ID of the container the content should go in. 

The options object should contain one property: "panelTitle". This is the title displayed to the users in the admin panel.

Here's an example:

<script src="https://gist.github.com/benrgreene/6924c2a510458369a3f60c302af5bde9.js?file=example.js"></script>