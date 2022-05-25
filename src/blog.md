---
layout: layouts/default.njk
title: The Blog
---

## Latest Posts

Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem earum esse pariatur perferendis magnam natus sed reiciendis impedit. Quae deserunt adipisci aut, aperiam unde minima fugit quisquam eaque praesentium!

<ul class="featured__posts">
{% for post in collections.blog | limit(3)%}
<li>
  <figure>
    <a href="{{ post.url }}">
    <img src="{{ post.data.featured_image }}" alt="{{ post.data.title }} post featured_image">
    <figcaption>
        <h3>{{ post.data.title }}</h3>
        <p>{% if post.data.description %}
          {{ post.data.description }}
          {% else %}{{ content }}{% endif %}</p>
      </figcaption>
    </a>
    </figure>
  </li>
{% endfor %}
</ul>
