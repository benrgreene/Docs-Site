---
title: Authentication
date: 2019/1/2
category: API Endpoints
---

Of course, one of the first things a CMS needs is a way for users to authenticate themselves and login. The framework adds a way to do this, by way of an authentication API endpoint. The endpoint is simply "`login`". If the login attempt is successful, then the returned data will look like the following:

<pre>
{
    content: 'new token value',
    expiration: 'timestamp'
}
</pre>

Here's an example:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=api-authentication.js"></script>