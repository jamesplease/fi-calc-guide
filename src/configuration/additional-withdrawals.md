---
layout: default
title: Additional Withdrawals
---

# Additional Withdrawals

Some years, you may need to make additional withdrawals beyond your "base"
withdrawal amount. For example, you may be expecting to contribute to a child's
college in a couple of years, or you may be planning to replace your car every
10 or 15 years.

FI Calc allows you to factor in additional withdrawals such as these into your
simulations.

## Adding Additional Withdrawals

Begin by expanding the "Additional Withdrawals" section within the Configuration
section of FI Calc.

Next, click the "Add Additional Withdrawals" button to open a window that lets
you configure your withdrawals.

<figure>
    <img width="254px" src="/images/configuration-additional-withdrawals.jpg" alt="The additional withdrawals form before any withdrawals have been added.">
    <figcaption>The additional withdrawals form before any withdrawals have been added. Click "Add Additional Withdrawal" to add your first withdrawal.</figcaption>
</figure>

### Name

You may choose to label your withdrawal. Providing a name can help you to stay
organized when you have multiple kinds of withdrawals. Example names are "New
car," "Down payment," or "Kid's college."

Providing a name is optional.

<figure>
    <img width="262px" src="/images/configuration-withdrawal-name.jpg" alt="The input field for entering a name for an Additional Withdrawal.">
    <figcaption>Use this input to enter a name for your Additional Withdrawal.</figcaption>
</figure>

### Annual Amount

Additional withdrawals in FI Calc are made annually. For each type of withdrawal
that you need to make, add up the total withdrawal for the year and enter it
here.

<figure>
    <img width="279px" src="/images/configuration-withdrawal-value.jpg" alt="The value input for Additional Income.">
    <figcaption>Use this input to enter the annual value of your Additional Withdrawal.</figcaption>
</figure>

> Additional Withdrawals at monthly frequencies is not currently supported.

### Adjusting for Inflation

Over time, the dollar tends to afford you fewer and fewer things. This tendency
is called "inflation." You may know that some of your withdrawal sources will be
adjusted for inflation. For example, the price of college may be
inflation-adjusted, while a mortgage payment likely isn't.

If your withdrawal should be adjusted for inflation then you should check this
checkbox.

<figure>
    <img width="279px" src="/images/configuration-withdrawal-value.jpg" alt="Check this checkbox to adjust Additional Withdrawal for inflation.">
    <figcaption>Check the checkbox to adjust the withdrawal for inflation.</figcaption>
</figure>

### Withdrawal Frequency

FI Calc supports complex withdrawal frequencies. For example, you may plan to
pay for 4 years of college in 10 years.

Use the "Withdrawal Frequency" section to specify when you want your Additional
Withdrawal to begin, and for how long.

<figure>
    <img width="230px" src="/images/configuration-withdrawal-frequency.jpg" alt="Additional Withdrawal frequency form.">
    <figcaption>Use this form to adjust the additional withdrawal frequency.</figcaption>
</figure>

## Modifying an Existing Additional Withdrawal

You can make changes to an Additional Withdrawal that you have already created.
To do so, click the target Additional Withdrawal in the list, and the edit
window will appear. Make your changes, and then click Save.

<figure>
    <img width="317px" src="/images/configuration-withdrawal-summary.jpg" alt="Additional Withdrawal summary box.">
    <figcaption>Click an additional withdrawal summary within Configuration to make changes.</figcaption>
</figure>

## Disabling One or More Additional Withdrawals

You can temporarily disable an additional withdrawal to quickly see how it
affects your rate of success. This can be more convenient than deleting it,
because you can quickly enable it again at any time.

To disable an Additional Withdrawal, uncheck the checkbox next to the target
withdrawal in the Configuration pane.

<figure>
    <img width="317px" src="/images/configuration-withdrawal-summary.jpg" alt="The checkbox you can uncheck to disable an Additional Withdrawal.">
    <figcaption>Uncheck this checkbox to disable an additional withdrawal.</figcaption>
</figure>

## Deleting Additional Withdrawal

To delete an Additional Withdrawal that you have created, click an existing
Additional Withdrawal to open the Edit window. Then, click on the "Delete"
button.

<figure>
    <picture>
      <source media="(max-width: 550px)" srcset="/images/configuration-withdrawal-delete-634.jpg 634w" sizes="317px">
      <source media="(min-width: 551px)" srcset="/images/configuration-withdrawal-delete-1256.jpg 1256w" sizes="628px">
      <img src="/images/configuration-withdrawal-delete-1256.jpg" alt="The delete button for an additional withdrawal.">
    </picture>
    <figcaption>In the edit form of an additional withdrawal, you can tap the delete button to remove it.</figcaption>
</figure>

## Effect on Your Withdrawal Strategy

Sometimes, withdrawal strategies are dependent upon the previous year's
withdrawal. In these situations, additional withdrawals **do not** factor in to
their algorithms. This is to prevent a situation where your withdrawals can grow
unbounded.

This is best demonstrated with an example.

With the 95% Rule, one of the Withdrawal Strategies you can choose in FI Calc,
you are allowed to withdraw a percent of your portfolio _or_ 95% of last year's
withdrawal, whichever is larger.

Consider a year where you withdraw 4% of your
$1,000,000 portfolio, equaling $40,000. And let's say you withdraw an additional
\$10,000 that year, making your total withdrawal equal to \$50,000.

The following year, assume your portfolio is now \$1,005,000 after gains, fees,
and dividends are taken into account. 4% of that is
$40,200. 95% of your previous withdrawal of $50,000 is \$47,500. In this
situation, 95% of the previous year withdrawal is larger than the 4% withdrawal,
so you use it instead.

This trend will continue for as long as the \$10,000 withdrawal occurs, and your
total withdrawal will grow and grow. Often, this results in the portfolio
running out of money, which is undesirable. Also, it against the intention of
the 95% Rule, which is to smoothen out your withdrawals when the market is doing
poorly.

FI Calc gets around this problem by not factoring in additional withdrawals in
subsequent year calculations. In the above example, FI Calc would instead input
the "base" withdrawal of
$40,000
into the 95% Rule algorithm, which equals
$38,000. This is less than the
4% withdrawal of your total portfolio, so when using FI Calc you would withdraw
\$40,200 the next year instead of \$47,500.

The 95% Rule is not the only strategy that breaks when additional withdrawals
are factored in, and for this reason FI Calc always ignores additional
withdrawals when calculating subsequent year withdrawals.
