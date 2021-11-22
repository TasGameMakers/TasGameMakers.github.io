---
title: Events
layout: page
---
Tas Game Makers is a community for anyone interested in the games space. Check back often to keep up to date with what’s happening next!

<div class="events--grid">   

{% for event in site.events %}
    <div class="card card__{{ site.data.event_categories[event.category].css_class }}">
            <div class="card--image">
                <img alt="{{ event.title }}" height="629" src="/assets/media/images/{{ event.image }}" width="720">
            </div>
        <div class="card--desc">
            <div>
            <h3 class="card--desc-heading">{{ event.title }}</h3>
            <p class="card--desc-subtitle">{{ event.summary }}</p>
            </div>
            <a class="card--desc-link" href="{{ event.url }}">Read more</a>
        </div>
{% endfor %} 

</div>

