---
title: Action - Load APIs
date: 2018/10/1
category: Actions
---

This is fired when the API framework is loaded. Any API endpoints registered should be added in this action. 

Example:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=action-api-loaded.php"></script>

It's recommended that each endpoint (both registration and callback) be given its own file, and that files are included in the action callback.