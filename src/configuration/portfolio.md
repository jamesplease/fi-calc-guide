---
layout: default
title: Portfolio
---

# Portfolio

Your portfolio is the collection of assets that you own, including equities
(stocks), bonds, and cash. When simulating your retirement plan using FI Calc,
you specify the portfolio that you have, or plan to have, at the start of your
retirement.

Presently, FI Calc supports entering three kinds of assets: equities, bonds, and
cash.

> Do you own real estate? Create
> [Additional Income](/configuration/additional-income/) to factor in earnings
> from your investment properties.

You're also able to specify whether you intend to rebalance your portfolio or
not, and also if your allocation mix should change over time (a "glide path").

## Deciding on a Portfolio Value

<figure>
    <img width="256px" src="/images/configuration-portfolio-value.jpg" alt="The portfolio value input field.">
    <figcaption>Enter the value of your portfolio at the start of your retirement into this field.</figcaption>
</figure>

If you're not sure how much to enter, begin by running simulations with the
default value, \$1,000,000. Experiment with the different withdrawal strategies
to see how the withdrawal amounts compare to what you think you might need
during retirement. From there, you can adjust the initial portfolio to find a
value that feels right for you.

## Entering Asset Types

<figure>
    <img width="256px" src="/images/configuration-asset-allocation.jpg" alt="The asset allocation summary button. Click this to choose your asset allocation.">
    <figcaption>Click or tap on the asset allocation summary to change your portfolio's asset allocation.</figcaption>
</figure>

### Equities

There is a single input field for how much of your portfolio is stocks. If you
have different kinds of stock investments, then you should add all of their
values together to determine the percent of your portfolio that number is.

Additionally, you can also specify the annual fees, or expense ratio, for your
stocks. Once again, we recommend inputting the average fees of your investments.

<figure>
    <img width="285px" src="/images/configuration-equities.jpg" alt="The equities form.">
    <figcaption>Specify the sum of your equities in this form within Portfolio Details.</figcaption>
</figure>

The default expense ratio, 0.04%, was the expense ratio of
[VTSAX](https://investor.vanguard.com/mutual-funds/profile/VTSAX) in May 2020.

### Bonds

Just like stocks, there is a single input field for all of your bonds. Determine
how much of your portfolio is made up of your bonds investments and enter that
value here.

You may also specify the annual fees, or expense ratios, for your bonds.

<figure>
    <img width="287px" src="/images/configuration-bonds.jpg" alt="The bonds form.">
    <figcaption>Specify the sum of your bonds in this form within Portfolio Details.</figcaption>
</figure>

The default expense ratio, 0.05%, was the expense ratio of
[VBTLX](https://investor.vanguard.com/mutual-funds/profile/VBTLX) in May 2020.

### Cash

Cash is entered in the same way that equities and bonds are.

One important thing to note is that unlike the other asset types, cash is not
calculated using historical data. Instead, a fixed growth is used for cash,
which defaults to 1.5%. This growth represents the interest earned in a
high-interest savings account, for example.

<figure>
    <img width="290px" src="/images/configuration-cash.jpg" alt="The cash form.">
    <figcaption>Specify the sum of your cash in this form within Portfolio Details.</figcaption>
</figure>

### Real Estate

The equity that you have in real estate is not something that you can input into
your FI Calc portfolio. What you can do is specify
[Additional Income](/configuration/additional-income/) to account for rental
property cash flow, or to account for money earned from selling a home.

> Do you need more features for your real estate properties? If so, please
> [let me know](/contact/).

## Rebalancing Your Portfolio

By default, FI Calc ensures that your portfolio's asset allocation remains
constant over time by rebalancing it each year.

### Changing the Frequency of Rebalancing

FI Calc rebalances annually by default, but you can rebalance at any frequency.

For example, to rebalance every other year, enter `2` as the frequency of
rebalancing.

<figure>
    <img width="311px" src="/images/configuration-rebalance.jpg" alt="The rebalance portfolio input.">
    <figcaption>Configure the rebalancing of your portfolio using this section of Portfolio Details.</figcaption>
</figure>

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

<figure>
    <img width="316px" src="/images/configuration-glide-path.jpg" alt="The checkbox used to enable the glide path.">
    <figcaption>Enable this option in the Portfolio Details dialog to configure a glide path.</figcaption>
</figure>

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

<figure>
    <picture>
      <source media="(max-width: 550px)" srcset="/images/configuration-glide-path-quickly-628.jpg 628w" sizes="314px">
      <source media="(min-width: 551px)" srcset="/images/configuration-glide-path-quickly-1198.jpg 1198w" sizes="599px">
      <img src="/images/configuration-glide-path-quickly-1198.jpg" alt="The 'quickly' glide path configuration.">
    </picture>
    <figcaption>The "quickly" glide path configuration.</figcaption>
</figure>
