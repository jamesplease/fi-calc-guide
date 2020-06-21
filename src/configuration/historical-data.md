---
layout: default
title: Historical Data
---

# Historical Data

FI Calc runs simulations using historical data. The data set includes data from
1871 to the present day, and data from all of the available years is used for
simulations by default.

If you wish, you may choose to use a subset of the historical data for running
simulations.

## How to Use a Subset of the Data Set

Expand the "Historical Data" section from the Configuration, and uncheck the
"Use all historical data" checkbox. Next, input the earliest year and latest
year that you'd like to use from historical data.

<figure>
    <img width="256px" src="/images/configuration-historical-data.jpg" alt="The historical data input form.">
    <figcaption>Use this section of the Configuration to restrict the historical data used in the simulations.</figcaption>
</figure>

Keep in mind: using too little data can reduce the quality of your results.

## Why Might You Choose to Use Less Data?

More data means more simulations, which may seem like it would always be a good
thing. However, one of the requirements for the
[backtesting](/introduction/backtesting) strategy to be effective is that you
must have high quality and accurate data.

The data set used in FI Calc was compiled by Nobel Prize-winning economist
Robert Shiller, which should give you some confidence that the data is of high
quality. Nevertheless, some individuals choose to restrict data from 1926 and
before. There are two common reasons for this:

1. The S&P 500 did not exist before 1926. Robert Shiller uses another data
   source for the price of stocks before 1926. Furthermore, index funds didn't
   exist until even later, and many contemporary investors' portfolios are made
   up primarily of index funds.

2. Some people feel that the market conditions from over a hundred years ago do
   not reflect today's economy, and are therefore an inaccurate representation
   of what may come in the future.

If either of these arguments resonate with you, then you have the option to
restrict the data used in your simulations.

## Notable Years

| Year | Description                               |
| ---- | ----------------------------------------- |
| 1871 | The earliest year in Shiller's data set   |
| 1926 | The year the S&P 500 was created          |
| 1992 | The final year in Bengen's original paper |
| 1995 | The final year in The Trinity Study       |
