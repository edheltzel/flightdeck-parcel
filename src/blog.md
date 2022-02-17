---
layout: layouts/default.njk
title: The Blog
---

## Recent Posts

something goes here

<ul>
{% for post in collections.blog %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
