---
layout: page
title: About Us
permalink: /about-us/
---

**Whether you’re a seasoned veteran, a student taking a games class, or anything in between, Tas Game Makers is for you.**

Tas Game Makers (TasGM) is a community of Tasmanians that see making games as part of their lives. It’s a place the entire spectrum of game develpment, it’s an entire scene, encompassing everyone from students, hobbyists, support service providers, and jam-only makers, through to remote AAA studio staff living in this wonderful state we call home.

We are a diverse group of people from varying backgrounds, and we actively work towards our hope for a future that is even more vibrant and diverse. TasGM is approachable and welcoming to those that see game development as an aspiration, or that don’t fit the stereotypical mould of a "developer." After all, game development constitutes a wide range of skills and disciplines, working together to create amazing games.

Tas Game Makers was originally launched as the Tasmanian Game Development Society in 2010, and over the last nine years has amassed almost 500 members, established Tasjam Tasmania’s only statewide game jam series, developed a wide range of social and informative events to serve its community across the state, and worked with Screen Tasmania to secure state agency funding for local game development projects and to help practitioners develop their skills for the workforce.

## Our Board

TasGM is an incorporated association run by a board of community members. Our board members are all passionate about game making, and contribute a range of skillsets and perspectives.

{% for member in site.data.board %}
{% include board_member.html member=member %}
{% endfor %}
