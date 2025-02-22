---
title: "책"
layout: archive
permalink: categories/dev/books
author_profile: true
types: posts
---

{% assign posts = site.categories['books']%}
{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}
