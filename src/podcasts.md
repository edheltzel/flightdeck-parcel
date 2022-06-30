---
layout: layouts/default.njk
title: Podcasts
---

## Latest Podcasts

Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem earum esse pariatur perferendis magnam natus sed reiciendis impedit. Quae deserunt adipisci aut, aperiam unde minima fugit quisquam eaque praesentium!

<ul class="featured__posts">
{% for podcast in collections.podcasts | limit(4) %}
<li>
  <figure>
    <a href="{{ podcast.url }}">
    <img class="featured__image" src="{{ podcast.data.featured_image | default('/assets/images/testing.jpeg', true) }}" alt="{{ podcast.data.title }} post featured_image">
    <figcaption>
        <h2>{{ podcast.data.title }}</h2>
        <p>{% if podcast.data.description %}
          {{ podcast.data.description }}
          {% else %}{{ podcast.templateContent | excerpt }}{% endif %}</p>
      </figcaption>
    </a>
    </figure>
  </li>
{% endfor %}
</ul>
