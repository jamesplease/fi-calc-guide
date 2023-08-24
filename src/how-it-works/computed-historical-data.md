---
layout: default
title: Computed Historical Data
katex: true
---

# Computed Historical Data

The FI Calc algorithm uses some values that are derived from Shiller's data set.

## Inflation

Shiller provides the Consumer Price Index (CPI) for each month in his data set
under the column "Consumer Price Index." The equation to derive inflation from
the CPI is:

$$
inflation = \frac{\displaystyle currentYearCpi}{\displaystyle previousYearCpi} - 1
$$

Inflation for the first year, 1871, is set to `0` (representing no inflation).

### Inflation Example

The CPI for January 1990 is `127.40`, and for January 1991 it is `134.60`.
Placing these numbers into our equation yields:

$$
\frac{currentYearCpi}{previousYearCpi} - 1
\\[0.8em]
= \frac{\displaystyle 134.60}{\displaystyle 127.40} - 1
\\[0.8em]
= 1.0565 - 1
\\[0.8em]
= 0.0565
$$

Therefore, inflation for the year 1990 is `5.65%`.

## Stocks

Shiller's data set provides the price of the S&P 500 for each month. In his
spreadsheet, the value for the S&P 500 is under the label "S&P Comp. (P)".

Deriving the capital appreciation of stocks, therefore, is:

$$
capitalAppreciation = \frac{\displaystyle currentYearValue}{\displaystyle previousYearValue} - 1
$$

## Dividend Yields

Coming soon.

## Bonds

Shiller's data set includes bond returns by month, which FI Calc consumes
directly.
