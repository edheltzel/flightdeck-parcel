---
title: The Blog
layout: 'layouts/base.njk'
---

## Recent Posts

<ul>
{% for post in collections.blog %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
