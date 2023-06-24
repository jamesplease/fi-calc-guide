---
layout: default
title: Backtesting
---

# Backtesting

Using historical data to test the performance of retirement plans is called
_backtesting_. Backtesting is a strategy used in different industries including
finance, meteorology, and oceanography.

Backtesting can be a powerful tool if you believe that the market during your
retirement will perform no worse than the worst market in the available data
set.

## Future Performance

One of the most important things to keep in mind when running backtesting
calculations is that they do **not** guarantee future performance. Just because
a portfolio performed well or poorly historically does not mean that it will
perform that same way going forward.

Backtesting simulations do not offer certainty: indeed, no retirement planning
can, as we cannot know the future. Backtesting calculations provide a host of
other benefits, though, including:

- comparing different withdrawal strategies
- understanding the behavior of a particular withdrawal strategy in different
  market conditions
- determining the conditions under which a particular retirement plan performs
  well or poorly
- building confidence in a retirement plan

It is important to keep this in mind when running calculations in FI Calc to
avoid misinterpreting the information that is presented to you.

> Also, keep in mind that FI Calc does **not** provide financial advice. Always
> speak to a licensed financial professional before making financial decisions.

## Other Notes on Backtesting

Backtesting is only effective when you have high-quality data to run
calculations with. The data set used in FI Calc was compiled by a Nobel
Prize-winning economist, Robert Shiller (you can read more about the data set
used in FI Calc [here](/how-it-works/historical-data-source/)).

Another problem with backtesting is called _overfitting_. Overfitting is when
you design an algorithm that follows too closely to the current data set, but is
not effective with new data.

One of the ways to avoid overfitting is to test your models in other scenarios
not present in the historical data, such as by running what are called Monte
Carlo simulations. FI Calc does not currently support running Monte Carlo
simulations.
