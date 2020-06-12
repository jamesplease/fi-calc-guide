---
layout: default
title: Backtesting
---

# Backtesting

Using historical data to test the performance of retirement plans is called
_backtesting_. Backtesting is a strategy used in different industries including
finance, meteorology, and oceanography.

Backtesting is a one tool, but not the only tool, that you can use to understand
and estimate the performance of a particular withdrawal strategy.

### Limitations of Backtesting

Backtesting is only effective when you have high-quality data to run
calculations with. The data set used in FI Calc was compiled by a Nobel
Prize-winning economist, Robert Shiller (you can read more about the data set
used in FI Calc [here](./how-it-works/historical-data-source/)).

Another problem with backtesting is called _overfitting_. Overfitting is when
you design an algorithm that follows too closely to the current data set, but is
not effective with new data.

One of the ways to avoid overfitting is to test your models in other scenarios
not present in the historical data, such as by running what are called Monte
Carlo simulations. FI Calc does not currently support Monte Carlo simulations,
but it is a feature that we plan to introduce in the future.
