---
title: "이것저것"
layout: archive
permalink: categories/etc
author_profile: true
types: posts
---

{% assign posts = site.categories['etc'] %}
{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}
