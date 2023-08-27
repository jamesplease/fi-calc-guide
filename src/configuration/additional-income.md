---
layout: default
title: Income
---

# Income

Retiring does not necessarily mean that you're no longer bringing in money.
Sometimes, you may have income during some years of your retirement. Example
sources of income include:

- rental property cashflow
- selling a home
- social security
- a pension
- a side job
- a profitable side project
- inheritance

## Adding Income

To add Income, begin by expanding the "Income" section of the Configuration
section of FI Calc. You can add as many income sources as you would like.

Click the "Add Income" button to open a window that lets you configure your
income.

<figure>
    <img width="254px" src="/images/configuration-additional-income.jpg" alt="The income form before any income has been added.">
    <figcaption>The income form before any income has been added. Click "Add Income" to add your first income.</figcaption>
</figure>

### Name

You may choose to label your income. Providing a name can help you to stay
organized when you have multiple income sources. Providing a name is optional.

<figure>
    <img width="260px" src="/images/configuration-income-name.jpg" alt="The input field for entering a name for Income.">
    <figcaption>Use this input to enter a name for your Income.</figcaption>
</figure>

### Annual Amount

Income is considered annually. If you receive your income on a more frequent
schedule, then you should add up the total amount that you expect to receive in
a year and enter it here.

<figure>
    <img width="281px" src="/images/configuration-income-value.jpg" alt="The value input for Income.">
    <figcaption>Use this input to enter the annual value of your Income.</figcaption>
</figure>

> Income at monthly frequencies is not currently supported.

### Adjusting for Inflation

Over time, the dollar tends to afford you fewer and fewer things. This tendency
is called **inflation**. You may know that some of your income sources will be
adjusted for inflation. For example, you may have a job that gives you a raise
each year to match inflation.

If your income should be adjusted for inflation then you should check this
checkbox.

<figure>
    <img width="281px" src="/images/configuration-income-value.jpg" alt="Check this checkbox to adjust Income for inflation.">
    <figcaption>Check the checkbox to adjust the income for inflation.</figcaption>
</figure>

By default, inflation begins accumulating immediately, even when you specify
that the income does not begin after a number of years.

You can change this so that inflation adjustments are only made after the income
starts. To do this, change the "Begin adjusting for inflation" dropdown from
"immediately, at the first year" to "only after income starts."

### Income Frequency

FI Calc supports complex income frequencies. For example, you may know that you
plan to take 3 years off, and then get a side job for a couple of years.

Use the "Income Frequency" section to specify when you want your Income to
begin, and for how long.

You may also specify that an income lasts forever. This might be useful for some
income streams such as Social Security or a pension.

<figure>
    <img width="221px" src="/images/configuration-income-frequency.jpg" alt="Income frequency form.">
    <figcaption>Use this form to adjust income frequency.</figcaption>
</figure>

## Modifying an Existing Income

You can make changes to an Income that you have already created. To do so, click
the target Income in the list, and the edit window will appear. Make your
changes, and then click Save.

<figure>
    <img width="316px" src="/images/configuration-income-summary.jpg" alt="Income summary box.">
    <figcaption>Click an income summary within Configuration to make changes.</figcaption>
</figure>

## Disabling One or More Income Sources

You can temporarily disable an income source, which will re-run the same
calculation without factoring that income in.

This can be useful to quickly see the impact of different income sources on your
portfolio. Maybe you're considering getting a part time job, but you're not
committed to it. Or maybe you wish to see how much impact your Social Security
estimate has on your success rate.

Disabling income is a quick way to "turn off" income while still allowing you to
add it back into your calculation should you decide to.

To disable an Income, uncheck the checkbox next to the income in the
Configuration pane.

<figure>
    <img width="316px" src="/images/configuration-income-summary.jpg" alt="The checkbox you can uncheck to disable an Income.">
    <figcaption>Uncheck this checkbox to disable the income.</figcaption>
</figure>

## Deleting Income

To delete an Income that you have created, click an existing Income to open the
Edit window. Then, click on the "Delete" button.

<figure>
    <picture>
      <source media="(max-width: 550px)" srcset="/images/configuration-income-delete-636.jpg 636w" sizes="318px">
      <source media="(min-width: 551px)" srcset="/images/configuration-income-delete-1278.jpg 1278w" sizes="639px">
      <img src="/images/configuration-income-delete-1278.jpg" alt="The delete button for income.">
    </picture>
    <figcaption>In the edit form of an income, you can tap the delete button to remove it.</figcaption>
</figure>

## Effect on Withdrawals

Income reduces your total withdrawal for the year.

This is best shown with an example: consider a year where you planned to spend
$40,000 of a $1,000,000 portfolio. Without any income, you would up with
\$960,000 remaining in your portfolio (before gains, fees, and so on).

If you have an income of $10,000 that year, then your portfolio will instead end
up as $970,000. This is equivalent to spending $30,000 for the year instead of
$40,000.

### How to Increase Spending With Income

The behavior described above explains how income reduces your withdrawal. If you
instead wish to _increase_ your spending when you receive income, then you can
simply omit the income from this calculator altogether.

This may seem counterintuitive, but this calculator measures your portfolio over
time, and not your spending. That's why withdrawals are called "withdrawals" and
not "spending."

If you receive \$10,000 and immediately spend it, then it never touches your
portfolio and therefore has no effect on the calculations performed by this
calculator.
