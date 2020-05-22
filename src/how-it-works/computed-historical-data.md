---
layout: default
title: Computed Historical Data
katex: true
---

# Computed Historical Data

The data in Shiller's data set is not in the exact format that this calculator
needs to run computations. Some of Shiller's data must be manipulated before
simulations can be run.

In this guide, we will cover the values that we compute from Shiller's data set
and the formulas used to compute them.

## Inflation

Shiller provides the Consumer Price Index (CPI) for each month in his data set
under the column "Consumer Price Index." The equation to derive inflation from
the CPI is:

$$
inflation = \frac{\displaystyle currentYearCpi}{\displaystyle previousYearCpi} - 1
$$

Inflation for the first year, 1871, is set to `1` (representing no inflation).

### Inflation Example

The CPI for January 1900 is `127.40`, and for January 1901 it is `134.60`.
Placing these numbers into our equation yields:

$$
\frac{currentYearCpi}{previousYearCpi} - 1
\\[0.8em]
= \frac{\displaystyle 127.40}{\displaystyle 134.60} - 1
\\[0.8em]
= 1.0565 - 1
\\[0.8em]
= 0.0565
$$

Therefore, inflation for the year 1990 is `5.65%`.

## Stocks

Shiller's data set provides the price of the S&P 500 for each month. In his
spreadsheet, the value for the S&P 500 is under the label "S&P Comp. (P)".

Deriving the growth of stocks, therefore, is:

$$
growth = \frac{\displaystyle currentYearValue}{\displaystyle previousYearValue}
$$

The growth for the first year, 1871, is set to `1` (representing no growth).

<!-- ### Stocks Example

An example of stocks growth. -->

## Dividend Yields

Coming soon.

## Bonds

Shiller's data set includes the 10 year yields on US Treasury bonds. To
determine year-over-year returns, we assume that you purchase the bonds, hold
them for one year, and then sell them.

The formula for this is complicated. Documentation will be added soon.

> This is the same formula used by cFIREsim. In fact, Bo, the creator of
> cFIREsim, deserves credit for this for creating this conversation on
> Bogleheads.

<!-- ### Bonds Example

Bonds example here. -->
