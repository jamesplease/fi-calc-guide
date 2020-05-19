---
layout: default
title: Historical Data
---

# Historical Data

This calculator uses historical data to run simulations. This calculator uses
the dataset compiled by Nobel Prize-winning economist
[Robert Shiller](https://en.wikipedia.org/wiki/Robert_J._Shiller). Shiller's
dataset dates back to January 1871.

You can view the Shiller dataset online at
[Robert Shiller's website](http://www.econ.yale.edu/%7Eshiller/data.htm).

## Asset Types

This describes where Shiller's numbers come from. The source for this
information is [his website](http://www.econ.yale.edu/%7Eshiller/data.htm).

### Stocks

From 1926 onward, the dividend and earnings data are computed from the S&P 500
four-quarter totals, with linear interpolation between the months.

The stocks are the S&P 500.

### Bonds

The bond numbers in Shiller's spreadsheet are the 10 year yields on
[U.S. Treasury securities](https://fred.stlouisfed.org/series/GS10).

## Considerations

There are a few things to keep in mind when using Robert Shiller's data.

### Applicability

Index funds didn't exist until 1972, so some question whether the returns in
Shiller's data before this time would have been attainable by a contemporary
investor.

### Comparisons to Popular Studies

Both Bengen's study (which first described the 4% Rule) and the Trinity Study
(which popularized the 4% Rule) used a different data set, the SSBI. This
dataset begins in 1926.

Keep this in mind if you are attempting to recreate or compare results from FI
Calc to the results in these studies.
