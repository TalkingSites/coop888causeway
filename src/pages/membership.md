---
layout: base.njk
title: Membership
description: Join 888 Causeway, from a free mailing list to a desk in the Melbourne CBD. Every paid member is a co-owner with one vote.
permalink: "/membership/"
---

{% set headTitle = "Join a co-op you actually own." %}
{% set headLead = "Become a member and you become a co-owner, with one vote. No desk required." %}
{% set headStyle = "aqua" %}
{% include "partials/pageHead.njk" %}

{% set sectionTitle = "" %}
{% set sectionText = "" %}
{% set sectionNote = "[Download the brochure](/assets/docs/888-causeway-brochure.pdf) or [read the rules](/assets/docs/888-co-operative-causeway-rules.pdf). Joining as an organisation? [Email us](mailto:coopcauseway@gmail.com)." %}
{% set levelDetail = "yes" %}
{% set sectionBg = "" %}
{% include "partials/levelsBand.njk" %}

{% set sectionTitle = "The space." %}
{% set sectionText = "Suited to working alone, client meetings and strategy sessions, in a central spot close to restaurants, bars, trains, trams and buses.\n\n- Whiteboard\n- Wifi\n- Kitchenette\n- Toilets\n- Level 5, 306 Little Collins St, Melbourne" %}
{% set sectionLinkText = "" %}
{% set sectionLinkUrl = "" %}
{% set sectionLinkStyle = "arrow" %}
{% set sectionImage = "/assets/images/the-space.jpg" %}
{% set sectionAlt = "White desks and mesh chairs along tall windows in the 888 Causeway co-working room" %}
{% set sectionLayout = "right" %}
{% set photoStyle = "rounded" %}
{% set sectionBg = "band-white" %}
{% include "partials/textPhoto.njk" %}

{% set sectionTitle = "Your name on this board?" %}
{% set sectionText = "Members can run their own events too. Use the network and our corporate membership of the Kelvin Club, with help promoting your event and managing bookings, subject to approval." %}
{% set sectionLinkText = "Talk to us about joining" %}
{% set sectionLinkUrl = "mailto:coopcauseway@gmail.com?subject=Joining%20888%20Causeway" %}
{% set sectionLinkStyle = "button" %}
{% set sectionImage = "/assets/images/member-board.jpg" %}
{% set sectionAlt = "A black felt letter board in the building lobby listing 888 Co-operative Causeway Limited and its members" %}
{% set sectionLayout = "left" %}
{% set photoStyle = "tilted" %}
{% set sectionBg = "band-aqua" %}
{% include "partials/textPhoto.njk" %}
