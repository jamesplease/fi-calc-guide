---
layout: default
title: Sharing Calculations
---

# Sharing Calculations

> This feature is an early preview. Read more at the bottom of this page.

Sometimes, you may wish to share a calculation. In FI Calc, you can do this
using shareable URLs.

## How to Get a Shareable URL

Locate the "Share Calculation" button on the Results page. Click it, and a
popover will appear with the URL. Press the "Copy" button to copy it to your
clipboard.

Send this to friends or family to share your calculation.

<figure>
    <picture>
      <source media="(max-width: 550px)" srcset="/images/share-calculation-632.jpg 632w" sizes="316px">
      <source media="(min-width: 551px)" srcset="/images/share-calculation-700.jpg 700w" sizes="350px">
      <img src="/images/share-calculation-700.jpg" alt="The share calculation button.">
    </picture>
    <figcaption>Find this button to share your calculation with a URL.</figcaption>
</figure>

## This Feature is in Beta

This feature is an early preview. The reason that I am calling it "early
preview" is that there is a (small) chance that, sometime in the future, some
aspects of the calculator may not load from old URLs.

I want to explain why this is. FI Calc is under active development, and I am
frequently introducing new features that require that I refactor how old
features were implemented.

The URLs that are generated expose the "inner workings" of the calculator, and
some changes to the code could break old URLs.

I do not currently plan to break the URLs, but I am sharing this disclaimer to
give myself the option to. Once FI Calc is closer to being "feature complete,"
and I have more confidence that there won't be any major refactors, then this
feature will leave beta.

All breaking changes to URLs will be documented below.

### URL Break History

_The URLs have currently never broken._

## Feedback Wanted: Alternative Implementations

There are other ways I could implement saving calculations. However, these
features would require a database, which costs money each month.

I could, for example, introduce accounts. This would allow you to save and edit
past calculations to your personal account.

Features that require a database would require some kind of revenue stream for
me so that I can pay for the upkeep. Two options are:

- always free, but with ads
- a small, one-time payment to create an account

There are pros and cons to each of these methods. I don't have a preference: I
just want to build the most useful app to all of you.

Would you like to see this feature? Do you have a preference for how revenue
would be generated? Please let me know by [contacting me](/contact/).
