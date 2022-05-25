---
layout: layouts/default.njk
title: The Blog
---

## Latest Posts

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque, quos reprehenderit tenetur pariatur accusamus laborum neque! Tempore omnis ratione recusandae aliquam ex eligendi, esse consectetur, quam ad earum mollitia.

<ul>
{% for post in collections.blog %}
<li>
  <figure>
    <a href="{{ post.url }}">
    <img src="{{ post.data.featured_image }}" alt="{{ post.data.title }} post featured_image">
    <figcaption>
        <h3>{{ post.data.title }}</h3>
        <p>{{ post.data.description}}</p>
      </figcaption>
    </a>
    </figure>
  </li>
{% endfor %}
</ul>
