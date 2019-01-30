---
title: Database Controllers
date: 2017/9/3
category: Helpers
---

To effectively use a framework built of taking care of the data layer, there needs to be a way to easily communicate with the database. While most backend web developers (and many front end!) are quite capable of writing their own SQL queries, let’s face it; that can be a pain, and very repetitious. That’s why there are a couple classes to help streamline the whole process.

The two classes I introduced do two things, one is a query builder, and one interacts with the database. Simple. The query builder is the interesting one here, so I’ll spend the majority of this post on that.

The query builder has all static functions. The easiest way to show you the functions and their requirements are through a sudo-interface:

<script src="https://gist.github.com/benrgreene/334bfbbe652c1c7053aa10501447c56a.js?
file=query-builder.php"></script>

I realize that’s a bit much to go over, but it’s a good reference for what each function takes. It’s pretty straightforward: a select query returns a select query statement. A join also returns a select statement, but with (at least one) inner join. Here are some examples to help you understand exactly what it wants:

<script src="https://gist.github.com/benrgreene/334bfbbe652c1c7053aa10501447c56a.js?
file=examples.php"></script>

You get the idea. All the functions are similar, so I’ll skip giving examples for them all, and we’ll move on to executing the queries. It’s pretty easy:

<script src="https://gist.github.com/benrgreene/334bfbbe652c1c7053aa10501447c56a.js?
file=run.php"></script>

Yep, it’s that easy. Nothing else to it. It’ll return whatever values are pulled from the database. That’s the basics of using the database classes! Yes, the query builder does clean the queries - so while you should be carefull, you can rest easier about SQL injections.