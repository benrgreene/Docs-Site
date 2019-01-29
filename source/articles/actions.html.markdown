---
title: Actions
date: 2018/1/1
category: Actions
---

There are actions built into the backend of the site, similar to those of WordPress. Actions allow for adding callbacks during specific actions. Because this is meant to be a SPA framework, these aren't meant to be heavily used, and it's unlikely that there will ever be a plethora of actions. Most of the templating should be done via your frontend framework of choice.

When adding a callback, you need to pass the action key, a callback, and (an optional) priority. The lower the number passed, the higher the priority.

Here's an example of adding an action:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=example-action.php"></script>

### Filters 

It is also possible to use the actions as filters (and there is another function alias to make code cleaner: add_filter()). When adding a filter, you'll need to both add a parameter for your callback, and then return the same variable (albeit a different value) in your callback. Here's an example:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=example-filter.php"></script>

You can apply filters to a variable by using the filter() function. You'll just need to pass in the filter name, and the variable to be filtered:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=filter-use.php"></script>