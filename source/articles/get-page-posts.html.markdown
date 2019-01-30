---
title: Get Page of Posts
date: 2019/1/5
category: API Endpoints
---

This will retrieve a set number of posts of a given type. The number of posts returned is determined in the "config.php" file with the `PAGE_SIZE` variable.

The endpoint for this one is "`get/page/{post_type}/{page_number}`"

Example:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=get-page-of-posts.js"></script>