(function () {
    var stripe = Stripe("pk_live_wk7uF6ktlUtDLwT3IjbJRkZc00Re5EMjz0");

    function checkout(price_id, mode, redirect, needs_shipping_address) {
        stripe
            .redirectToCheckout({
                lineItems: [{ price: price_id, quantity: 1 }],
                shippingAddressCollection: needs_shipping_address
                    ? { allowedCountries: ["AU"] }
                    : undefined,
                billingAddressCollection: "required",
                mode: mode,
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfill-orders
                successUrl: redirect,
                cancelUrl: "http://tasgamemakers.com/membership/",
            })
            .then(function (result) {
                if (result.error) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById("error-message");
                    displayError.textContent = result.error.message;
                }
            });
    }

    var checkoutSubscriptionButton = document.getElementById(
        "checkout-button-plan_GFRxfIZY3djEIS"
    );
    checkoutSubscriptionButton.addEventListener("click", function () {
        // When the customer clicks on the button, redirect
        // them to Checkout.
        checkout(
            "plan_IVG5clzUMVACbb",
            "subscription",
            "http://tasgamemakers.com/membership/success/",
            true
        );
    });

    var checkoutPayItForwardButton = document.getElementById(
        "checkout-button-price_1HqaAPDlEsKw5erege7kHS75"
    );
    checkoutPayItForwardButton.addEventListener("click", function () {
        // When the customer clicks on the button, redirect
        // them to Checkout.
        checkout(
            "price_1HuFeMDlEsKw5ereEfstsYjO",
            "payment",
            "http://tasgamemakers.com/membership/pay-it-forward/",
            false
        );
    });
})();
