---
layout: default
title: One Simulation Year
---

# One Simulation Year

In each simulation year, three things occur (in this order):

1. a withdrawal is made
2. fees, growth, and dividends are applied to your assets
3. the portfolio is rebalanced (should you choose to rebalance)

This guide outlines these events in more detail.

> Note: it is not currently possible to configure the order of these events.

## The Year

A simulation year begins on January 1st and ends exactly one year later on the
following January 1st.

## Order of Operations

### 1. Withdrawals

Withdrawals are annual, and they are made at the very beginning of the year.
Making a withdrawal is the very first thing to occur in a simulation year.

If additional income or additional withdrawals are specified, then they also
occur at the start of the year alongside the "base" withdrawal.

Although not exact (due to the specific of the Shiller data set), it is
reasonable to think of the withdrawals as being made on January 1st of each
year.

### 2. Fees, Growth, and Dividends

Fees, growth, and dividends are each individually calculated a single time at
the very end of the year. They are each based on the value of your assets after
the withdrawal has been made.

You can consider these values to be calculated on the final day of each
simulation year, December 31st.

### 3. Portfolio Rebalancing

Portfolio rebalancing, when specified, is the final step of each simulation
year.

You can consider these values to be calculated on the final day of each
simulation year, December 31st.

## Example

This example will step through a year using Shiller's data set to illustrate
with numbers how the above algorithm plays out.
