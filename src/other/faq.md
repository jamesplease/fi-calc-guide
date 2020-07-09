---
layout: default
title: FAQ
---

# FAQ

These are general questions and answers about FI Calc and me, the creator.

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

## About the Creator

### Who created FI Calc?

My name is James. It's nice to meet you! I'm a designer and engineer in Silicon
Valley who is interested in early retirement.

### Are you retired?

Not yet! (as of April 2020)

### Do you have a favorite withdrawal strategy?

Honestly, it changes. I'm drawn to simple withdrawal strategies that you can
calculate on a piece of paper. Right now I like the Constant Dollar and
Endowment Strategy.

### What are your favorite early retirement blogs and resources?

I'm not particularly active in the FIRE community right now, but I listen to
[Paula Pant's podcast](https://affordanything.com) and read
[Mr. Money Mustache](https://www.mrmoneymustache.com).

## General Questions

### What's the business model of FI Calc?

FI Calc does not currently earn any revenue.

### Do you plan to monetize FI Calc?

There will always be a free version of FI Calc, and that free version will
always include every feature that doesn't require a database.

One feature that I've considered adding are user accounts, which would allow you
to save simulations. This feature requires a database, though, which would cost
me a little bit of money.

If I do add this feature, then I would want to at least cover the cost of the
database. The most likely turn of events is that I would introduce ads to FI
Calc.

I'm still not sure if I should add user accounts. Would you find them useful?
[Let me know!](/contact/)

### Where is FI Calc hosted?

[Vercel](https://vercel.com) (previously known as Zeit).

### When was FI Calc created?

I started the project in 2018, although I didn't work on it much until 2020.

### What technology is FI Calc built with?

FI Calc is a client-side React application. There is no server; all calculations
are performed in the browser.
