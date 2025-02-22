---
title: "시행착오 모음집"
layout: archive
permalink: categories/dev/exercise
author_profile: true
types: posts
---

{% assign posts = site.categories['exercise'] %}
{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}
