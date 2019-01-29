---
title: Shortcodes
date: 2017/9/2
category: Helpers
---

Shortcodes are always a useful tool. That's why the framework adds some built-in tools to help add them! There's a couple steps to adding shortcodes.

* Registering shortcodes
* Processing shortcodes

To add a shortcode, use the function `window.theme.registerShortcode(shortcodeTag, callback)`. the variable shortcodeTag is the tag you'll use when you add your shortcode when editing a page/post. Your callback should have one parameter. This is for the shortcode settings - an object with all parameters passed in the shortcode. For example, say we have the shortcode `[my-test date=12/10/2018 id=735][/my-test]`, the settings object will look like the following:

<pre>
{
    date: '12/10/2018',
    id: 735
}
</pre>

Shortcode callbacks should return the content that goes in its place, that's it. One other note: as of the current version, the shortcodes MUST have a closing tag, otherwise it won't parse the content correctly.

To use shortcodes, simply use the function `window.theme.processShortcodes(content)`. It will return the new content that's been processed by all registered shortcodes.

Here's an example of registering a shortcode, and then handling the callback:

<script src="https://gist.github.com/benrgreene/77a02d76e1356d6093bb5276aba398d9.js"></script>