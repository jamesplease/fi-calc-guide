---
layout: default
title: FAQ
faq: true
---

# FAQ

These are general questions and answers about FI Calc and me, the creator.

### How do I factor in taxes?

FI Calc does not automatically account for taxes. For this reason you must
include money to pay your taxes in your withdrawal amount.

To give a simple example, if you know that you need $40,000 per year to live off
of, and you estimate that your tax bill will be $5000 per year, then you should
aim to withdraw $45k per year to cover both your expenses and the taxes.

If you would like to model a scenario where the taxes change over the course of
your retirement then you can use
[Additional Income](/configuration/additional-income/) and
[Additional Withdrawals](/configuration/additional-withdrawals/) to decrease or
increase your tax bill over the course of your retirement.

### I do not live in the United States. Can I use FI Calc?

I'd love for FI Calc to be an international calculator, but it's not there right
now. There are a couple of things to consider if you live outside of the US:

- The historical data for equities and bonds are
  [based on US assets](/how-it-works/historical-data-source/). Do you have
  access to these assets, or similar US-based assets?
- Inflation in this calculator based on the Consumer Price Index, which is
  determined by the price of consumer goods in the US. It likely does not
  reflect historical inflation in other countries.
- The historical values of the assets in this calculator are in USD. To convert
  these values to another currency would require knowing the exchange rate.
  Would it be appropriate to use the historical exchange rate, or something
  else?

If you have thoughts on how any of these issues might be resolved, please
[contact me](/contact/)!

### How can I enter real estate into FI Calc?

You can use the [Additional Income](/configuration/additional-income/) feature
of FI Calc to support real estate.

If you have a rental property, you can specify the annual cashflow as recurring
income for as long as you intend to own the home.

If you intend to sell the property, then you can add your earnings from the sell
as additional income in the year that you sell.

If there are more features you need to help manage your real estate investments,
please [let me know](/contact/).

### FI Calc is showing a 100% success rate for my retirement plan. Does that mean that I'll never run out of money?

No, it's an unfortunate fact that there is always the possibility that you will
run out of money during retirement. A 100% success rate in FI Calc only means
that the portfolio didn't run out of money in any of the simulations that it ran
using past data, but we cannot know what the future holds.

The goal of retirement planning isn't to obtain absolute certainty that the plan
won't fail, as we cannot ever achieve that. Instead, it's about building the
confidence that your plan can weather all kinds of different economic
conditions. A 100% success rate in FI Calc could be perceived as a strong
indicator that your plan is sufficient, but here are just a few things to
consider:

- What is the smallest withdrawal made in the calcaulation? Is that a realistic
  minimum withdrawal for you? What if you needed to live off of that amount next
  year? Could you do it? If not, consider increasing the minimum withdrawal in
  the Configuration. Does that change your success rate?
- Are all of your expenses accounted for? Healthcare, for example?
- Is your retirement length set at the default 30 years, or is it longer? The 30
  year retirement was originally used for individuals who were retiring at
  around 60 (optimistically assuming a 90 year life span). Maybe it would make
  sense to add a few extra years to see how the success rate changes, if at all.
- Do other retirement calculators return similar results?
- Have you run more advanced calculations, factoring in details such as RMDs and
  taxes (which are not a part of the FI Calc calculation)?

These are just a couple of questions you might want to ask yourself when running
retirement calculations to make sure that you're being as accurate as possible.

### Other calculators return different results for the same inputs. Why is that?

This is to be expected as different calculators use different data and different
calculations with that data. We recommend using multiple calculators to get a
range of results.

FI Calc's data is documented [here](/how-it-works/historical-data-source/) and
the algorithm is documented
[here](https://ficalc.app/how-it-works/one-simulation-year/).

## About the Creator

### Who created FI Calc?

My name is James. It's nice to meet you! I'm a designer and engineer in Silicon
Valley who is interested in early retirement.

### Are you retired?

Not yet. (as of May 2021)

### Do you have a favorite withdrawal strategy?

I'm drawn to simple withdrawal strategies that you can calculate on a piece of
paper. Right now I like the Constant Dollar and Endowment Strategy.

### What are your favorite early retirement blogs and resources?

I listen to [Paula Pant's podcast](https://affordanything.com) and read
[Mr. Money Mustache](https://www.mrmoneymustache.com).

## General Questions

### What's the business model of FI Calc?

FI Calc is supported by [donations](https://gum.co/kgIVJ). If you look around
you might also find the single ad hidden in the guides.

### Do you plan to monetize FI Calc?

There will always be a free version of FI Calc, and that free version will
always include every feature that doesn't require a database.

One feature that I've considered adding are user accounts, which would allow you
to save simulations. This feature requires a database, though, which would cost
me a little bit of money each month.

If I do add this feature, then I would want to at least cover the cost of the
database. The most likely turn of events is that I would introduce ads into FI
Calc.

I'm still not sure if I should add user accounts. Would you find them useful?
[Let me know!](/contact/)

### When was FI Calc created?

I started the project in 2018, although I didn't work on it much until 2020.
