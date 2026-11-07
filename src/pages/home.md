---
layout: index.njk
title: 888 Causeway | Co-working you co-own, in the Melbourne CBD
description: An independent, member-run co-working co-operative in the Melbourne CBD, for small businesses and organisations in the social economy.
permalink: "/"
---

{% set heroTitle = "Co-working you co-own." %}
{% set heroLead = "888 Causeway is an independent, member-run co-operative in the Melbourne CBD: a home for small businesses and organisations in the social economy, and a network for anyone building a more democratic economy." %}
{% set heroAction = "Find your membership" %}
{% set heroLink = "/membership/" %}
{% set heroAction2 = "See the space" %}
{% set heroLink2 = "#space" %}
{% include "partials/hero.njk" %}

<section class="eights" aria-label="What 888 means">
<div class="container eights-row">
<p><b>8</b> hours labour</p>
<p><b>8</b> hours recreation</p>
<p><b>8</b> hours rest</p>
</div>
</section>

<section class="band" id="space">
<div class="container split">
<div>
<h2>A quiet room off Little Collins Street.</h2>
<p>Level 5 of the Causeway Building, with desks, a whiteboard, wifi and a kitchenette. It's set up for working alone, meeting clients and thrashing out strategy, with the laneways, trains and trams right downstairs.</p>
<p>Collaborator members have access around the clock. The people at the desks run the place.</p>
<a class="link-arrow" href="/membership/">How co-working works <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
</div>
<figure class="photo-lane"><img src="/assets/images/causeway-lane.jpg" alt="The Causeway, a busy Melbourne laneway with outdoor cafe tables" width="1600" height="900" loading="lazy"/></figure>
</div>
<figure class="photo-wide"><img src="/assets/images/the-space.jpg" alt="The 888 Causeway co-working room: white desks and mesh chairs along a row of tall windows, with plants and a warm floor lamp" width="2000" height="781" loading="lazy"/></figure>
</section>

<section class="band band-white">
<div class="container">
<div class="section-head">
<h2>Pick how you want to belong.</h2>
<p>Every paid member is a co-owner with one vote, whether you use a desk or not.</p>
</div>
{% include "partials/levels.njk" %}
</div>
</section>

<section class="band band-ink">
<div class="container split split-events">
<div>
<h2>Talks worth staying back for.</h2>
<p>We host conversations on the social economy and public policy, most of them at the Kelvin Club, in the heart of the CBD since 1865. Recent speakers include Sharan Burrow AC, David Coats, Dr. Melanie Rieback and Nicholas Gruen.</p>
<figure class="photo-door"><img src="/assets/images/kelvin-club.jpg" alt="The lit front door of the Kelvin Club in Melbourne Place" width="800" height="800" loading="lazy"/></figure>
</div>
<div>
{% include "partials/upcoming.njk" %}
<h3 class="list-title">Recently</h3>
{% set rows = collections.pastEvents | head(4) %}{% set rowDetail = false %}{% include "partials/eventRows.njk" %}
<a class="link-arrow" href="/events/">All events <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
</div>
</div>
</section>

<section class="band band-orange">
<div class="container split split-pod">
<div class="pod-art">{% include "partials/fish.njk" %}</div>
<div>
<h2>The <span class="nb">Co-operative</span> Way</h2>
<p class="pod-q">What if we had a more democratic economy that better shared ownership and responsibility?</p>
<p>Our podcast brings news, analysis and interviews with seasoned and emerging co-operators, from Australia and beyond.</p>
<div class="actions">
<a class="btn-888 btn-ink" href="/podcast/">About the podcast</a>
</div>
</div>
</div>
</section>

<section class="band">
<div class="container">
<div class="section-head">
<h2>Who's here.</h2>
<p>Co-ops, peak bodies and social enterprises that work from, or are registered at, Level 5.</p>
</div>
{% include "partials/memberWall.njk" %}
</div>
</section>
