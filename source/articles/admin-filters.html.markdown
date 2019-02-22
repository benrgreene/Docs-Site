---
title: Admin Filters
date: 2017/11/1
category: Admin Filters
---

The framework also supports JavaScript filters in the default admin panel. They also can double as something similar to WordPress actions. So, how do these filters work?

When registering filters, you must pass in three parameters:

* The filter name
* The callback for the filter - for displaying/returning content. The parameters passed to the callback change between different filters. 
* An array of options for the code using the filters (these also change for each filter)

Here's an example:

<script src="https://gist.github.com/benrgreene/6924c2a510458369a3f60c302af5bde9.js?file=register.js"></script>

When the admin script runs the filter/action, every registered filter's callback will be executed. 

Read further to view what each filter does, view each filter's individual info page.