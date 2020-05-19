---
layout: default
title: Asset Growth Calculation
katex: true
---

# Asset Growth Calculation

> TODO: change the name because of inflation? Maybe to "Computed Historical
> Data"?

One of the values that this calculator needs to compute from the historical
dataset is the growth of each asset type from year to year. This guide explains
the equation used for each asset type.

## Stocks

Shiller's dataset provides the price of the S&P 500 for each month. Accordingly,
the equation for the growth year-over-year is:

$$
growth = \frac{\displaystyle currentYearValue}{\displaystyle previousYearValue}
$$

The growth for the first year, 1926, is set to $1$ (representing no growth).

## Bonds

Shiller's dataset includes the 10 year yields on US Treasury bonds. To determine
year-over-year returns, we assume that you purchase the bonds, hold them for one
year, and then sell them.

The calculation for this is complicated.

> Note: FIRECalc does not use this equation for its bond calculation. FI Calc
> uses the same formula as cFIREsim for this calculation.

## Inflation

Shiller provides the CPI for each month in his dataset. FI Calc only considers
the CPI for

$$
growth = \frac{\displaystyle currentYearValue}{\displaystyle previousYearValue}
$$
