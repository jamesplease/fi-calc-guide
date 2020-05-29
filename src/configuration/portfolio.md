---
layout: default
title: Portfolio
---

# Portfolio

Your portfolio is the collection of assets that you own, including equities
(stocks), cash, real estate, and so on. When simulating your retirement plan
using FI Calc, you specify the portfolio that you have, or plan to have, at the
start of your retirement.

Presently, FI Calc supports entering two kinds of assets: equities and bonds.
More asset types will be added in the future.

You're also able to choose whether your portfolio rebalances or not, and also if
your allocation mix should change over time (a "glide path").

## Deciding on a Portfolio Value

If you're not sure how much to enter, begin by running simulations with the
default value, \$1,000,000. Experiment with the different withdrawal strategies
to see how the withdrawal amounts compare to what you think you might need
during retirement. From there, you can adjust the initial portfolio to find a
value that feels right for you.

## Entering Asset Types

### Equities

There is a single input field for how much of your portfolio is stocks. If you
have different kinds of stock investments, then you should add all of their
values together to determine the percent of your portfolio that number is.

Additionally, you can also specify the annual fees, or expense ratio, for your
stocks. Once again, we recommend inputting the average fees of your investments.

The default expense ratio, 0.04%, was the expense ratio of
[VTSAX](https://investor.vanguard.com/mutual-funds/profile/VTSAX) in May 2020.

### Bonds

Just like stocks, there is a single input field for all of your bonds. Determine
how much of your portfolio is made up of your bonds investments and enter that
value here.

You may also specify the annual fees, or expense ratios, for your bonds.

The default expense ratio, 0.05%, was the expense ratio of
[VBTLX](https://investor.vanguard.com/mutual-funds/profile/VBTLX) in May 2020.

## Rebalancing Your Portfolio

By default, FI Calc ensures that your portfolio's asset allocation remains
constant over time by rebalancing it each year.

### Changing the Frequency of Rebalancing

FI Calc rebalances annually by default, but you can rebalance at any frequency.

For example, to rebalance every other year, enter `2` as the frequency of
rebalancing.

### Disabling Rebalancing

To disable rebalancing altogether uncheck the "Rebalance portfolio" checkbox.
When you do this, the final portfolio mix will be determined entirely on the
gains, fees, and dividends of your different asset types.

## Changing Your Asset Allocation Over Time

Sometimes, you may wish to have a different mix of assets at the end of your
retirement than you had at the start. For example, you may wish to move more of
your assets into bonds near the end of your retirement.

This is sometimes referred to as a "glide path."

To configure a glide path, first open the Portfolio Details window. Within that
window, you will find a checkbox called "Change allocations over time." After
checking it, new inputs will appear for the final portfolio allocations that you
wish to have.

> Keep in mind that the sum of your initial and final asset allocations must
> each add up to 100%.

### Configuring the Glide Path

You can further customize your glide path by choosing how quickly your assets
settle on their final values. There are three options to choose from:

- **evenly**: your allocations transition from their initial values to their
  final values evenly over time. Mathematically, this is a linear function.

- **slowly**: your allocations remain close to their initial values at the start
  of your retirement. Mathematically, this is Penner's Quadratic In function.

- **quickly**: your allocations more quickly settle on their final values.
  Mathematically, this is Penner's Quadratic Out function.
