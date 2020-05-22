---
layout: default
title: Historical Data
---

# Historical Data

This calculator uses historical data to run simulations. The data used is
compiled by Nobel Prize-winning economist
[Robert Shiller](https://en.wikipedia.org/wiki/Robert_J._Shiller), and it
includes data all of the way back to January 1871.

You can download the Shiller data set online at
[Robert Shiller's website](http://www.econ.yale.edu/%7Eshiller/data.htm).

## Asset Types

This section describes where the numbers in Shiller's spreadsheets come from.
The source for this information is
[his website](http://www.econ.yale.edu/%7Eshiller/data.htm).

### Stocks

From 1926 onward, the dividend and earnings data are computed from the S&P 500
four-quarter totals, with linear interpolation between the months.

Prior to 1926, _annual_ data is used from Cowles and associates (_Common Stock
Indexes_, 2nd ed. [Bloomington, Ind.: Principia Press, 1939]).

### Bonds

The bond numbers in Shiller's spreadsheet are the 10 year yields on
[U.S. Treasury securities](https://fred.stlouisfed.org/series/GS10).

Note that bond growth is not straightforward to calculate from this value. For
more, refer to the
[Computed Historical Data guide](/how-it-works/computed-historical-data/).

### CPI

Shiller's Consumer Price Index (which is used to calculate inflation in FI Calc)
is the "Consumer Price Index - All Urban Consumers," which is published by the
U.S. Bureau of Statistics. This data begins in 1913. Prior to this year, Shiller
computes the CPI using a different method. In his words:

> "for years before 1913 1 spliced to the CPI Warren and Pearson's price index,
> by multiplying it by the ratio of the indexes in January 1913"

## Considerations

There are a few things to keep in mind when using Robert Shiller's data.

### Applicability

Index funds didn't exist until 1972, so some question whether the returns in
Shiller's data before this time would have been attainable by a contemporary
investor.

### Comparisons to Popular Studies

Both Bengen's study (which first described the 4% Rule) and the Trinity Study
(which popularized the 4% Rule) used a different data set, the SSBI. This data
set begins in 1926.

Additionally, Bengen's analysis only included data up to 1992, while the Trinity
Study included data up to 1995.

Keep this in mind if you are attempting to recreate or compare results from FI
Calc to the results in these studies.

## Computed Data

The numbers that Shiller provides aren't directly consumable by this calculator.
Instead, they must be transformed before they can be used to simulate
retirements. To learn more about the transformations that must be made, refer to
[this guide](/how-it-works/computed-historical-data/).
