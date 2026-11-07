---
layout: base.njk
fullBleed: true
joinForm: true
title: Become a Mailing member
description: Apply for Registered Address membership of 888 Co-operative Causeway Limited.
permalink: "/join/mailing/"
---

{% set headTitle = "Become a Mailing member." %}
{% set headLead = "For co-operatives that don't need co-working space right now, but want our address as their registered and mailing address. You become a co-owner with one vote." %}
{% include "partials/pageHead.njk" %}

<section class="band">
<div class="container join-wrap">
{% include "partials/formDone.njk" %}
<form class="join" id="join" data-subject="Registered Address membership application">
<h2>Your co-operative</h2>
<div class="field"><label for="legal">Legal name of entity</label><input id="legal" name="Legal name of entity" autocomplete="organization" required/></div>
<div class="field-row">
<div class="field"><label for="trading">Trading name <span>(if any)</span></label><input id="trading" name="Trading name"/></div>
<div class="field"><label for="abn">ABN</label><input id="abn" name="ABN" inputmode="numeric" required/></div>
</div>
<h3>Postal address</h3>
{% include "partials/formAddress.njk" %}
<fieldset>
<legend>Registered address</legend>
<div class="choice"><input type="radio" id="reg888" name="Registered address" value="888 is our registered address" required/><label for="reg888">888 is our registered address</label></div>
<div class="choice"><input type="radio" id="regother" name="Registered address" value="We have a different registered address"/><label for="regother">We have a different registered address</label></div>
<div class="field" data-show-if="regother" hidden><label for="regaddr">Registered address</label><input id="regaddr" name="Different registered address"/></div>
</fieldset>
<h2>Authorised person</h2>
<div class="field-row">
<div class="field"><label for="first">First name</label><input id="first" name="First name" autocomplete="given-name" required/></div>
<div class="field"><label for="last">Last name</label><input id="last" name="Last name" autocomplete="family-name" required/></div>
</div>
<div class="field"><label for="position">Position</label><input id="position" name="Position" autocomplete="organization-title" required/></div>
<div class="field-row">
<div class="field"><label for="email">Email</label><input id="email" type="email" name="Email" autocomplete="email" required/></div>
<div class="field"><label for="phone">Phone number <span>(optional)</span></label><input id="phone" type="tel" name="Phone" autocomplete="tel"/></div>
</div>
{% include "partials/formAge.njk" %}
<h2>Member application and agreement</h2>
<div class="agreement">
<p>Registered Address membership is only available to co-operatives. Registered Address membership entitles the member to use the co-operative's office address as its registered address and/or its mailing address. The co-operative will forward mail from time to time to the postal address provided by the member in this form. Please email <a href="mailto:coopcauseway@gmail.com">coopcauseway@gmail.com</a> if you need to change where mail is forwarded to.</p>
<p>Registered Address members are also entitled to access the co-operative's podcast and one free registration at co-operative events. In addition to the annual fee, a condition of membership is the purchase of two member shares, of nominal value of $20. As at January 2022, the Registered Address membership fees are $250/year. Membership fees and levels of benefits are set from time to time by the board of the co-operative and may change.</p>
<p>Registered Address membership will be automatically renewed each year unless the member resigns from the co-operative. You can resign your membership by emailing the Secretary at <a href="mailto:coopcauseway@gmail.com">coopcauseway@gmail.com</a>.</p>
<p>Members agree to be bound by the <a href="/assets/docs/888-co-operative-causeway-rules.pdf">rules of the co-operative</a> and the Co-operatives National Law, including any alterations thereof. Membership applications are subject to approval. If a membership application is not approved, any fees paid will be refunded.</p>
</div>
{% include "partials/formConsent.njk" %}
<div class="choice"><input type="checkbox" id="agree" name="Member application and agreement" value="Agreed" required/><label for="agree">I apply to be admitted as a Registered Address member of 888 Co-operative Causeway Limited and to be allotted two member shares. I agree to be bound by the rules of the co-operative.</label></div>
<h2>Membership and payment</h2>
<ul class="lines">
<li><span>Annual membership subscription</span><b>$250</b></li>
<li><span>Two member shares, one-off</span><b>$20</b></li>
</ul>
<fieldset>
<legend>Payment options</legend>
<div class="choice"><input type="radio" id="paycard" name="Payment option" value="Credit card (recurring)" disabled/><label for="paycard">Credit card (recurring)</label></div>
<div class="choice"><input type="radio" id="payinvoice" name="Payment option" value="Invoice" checked required/><label for="payinvoice">Invoice</label></div>
</fieldset>
{% set joinTotal = "$270" %}
{% include "partials/formPay.njk" %}
<button class="btn-888" type="submit">Send application</button>
</form>
</div>
</section>
