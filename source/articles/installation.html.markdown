---
title: Installing
date: 2016/9/1
category: Setup
---

Download (or clone) the master branch of the repo. This is the most up-to-date version of the framework.

There are a couple steps to setting up a new site with the framework:

* First, you'll need to setup an empty database for the framework. Keep track of the name, host, DB user, and DB password.
* Second, you'll need to take the example config file, and rename it to 'config.php'. Enter in the database info you created, and then put in a random string for the secret key (you should really have a unique string for each site).

Now, visit the site! The database will automatically be set up. You can then visit the admin panel ('mysite.com/admin/') and create an admin user for the site. Use the admin page to write posts, set the menu, set widgets, etc.

You'll also need to select your active theme in the admin panel (in the "Theme Options" panel).