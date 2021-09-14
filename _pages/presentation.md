---
layout: page
permalink: /presentations/
title: Presentations
description: 
years: [2021, 2020, 2019]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}, selected!=true]*%}
{% endfor %}

</div>
