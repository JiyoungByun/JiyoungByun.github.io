---
layout: page
permalink: /publications/
title: Publications
description: 
publication_years: [2021, 2017]
presentation_years: [2020, 2019]
nav: true
---

<!--  Publication-->
<div class="publications">

{% for y in page.publication_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}, publication=true]*%}
{% endfor %}

</div>


<!--  Presentation-->
<header class="post-header">
  <br><br><br>
  <h1 class="publication-title">Presentations</h1>
  <p class="publication-description">{{ page.description }}</p>
</header>

<div class="publications">

{% for y in page.presentation_years %}
<h2 class="year">{{y}}</h2>
{% bibliography -f papers -q @*[year={{y}}, presentation=true]*%}
{% endfor %}

</div>