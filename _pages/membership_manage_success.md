---
permalink: /membership/manage_success/
title: Email sent!
show_in_header: false
---

We just sent an email to <span id="email_addr">your address</span>. Please check your mail!

If you don't see it, please [try entering your address again](/membership), or [send us an email](mailto:{{site.email}}) and we'll help you out.

<script>
    (function () {
        let params = new URLSearchParams(document.location.search);
        let name = params.get("email");

        if (name) {
        document.getElementById("email_addr").innerText = name;

        }

    })();
</script>