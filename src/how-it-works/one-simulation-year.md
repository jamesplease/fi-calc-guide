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

> It is not currently possible to configure the order of these events.

## The Year

A simulation year begins on January 1st and lasts through December 31st.

Mathematically, the retirement is modeled as closely as possible to span from
12:00 AM on January 1st to 12:00 AM on the following January 1st with an
inclusive start and exclusive end.

Much of Shiller's monthly data represents averages or linearly interpolated
data, so keep in mind that each data point does not, in general, represent any
specific day in history.

## Order of Operations

### 1. Withdrawals

Withdrawals are annual, and they are made on the first day of the year. The
withdrawal is the very first thing to occur in each simulation year.

If income or extra withdrawals are specified, then they are factored in on the
first day of the year alongside the "base" withdrawal.

### 2. Fees, Growth, and Dividends

Fees, growth, and dividends are each individually calculated a single time on
the final day of the year. Each of these values is based on the portfolio value
after the withdrawal has been made.

### 3. Portfolio Rebalancing

Portfolio rebalancing, when specified, is the final step of each simulation
year. It takes place on the final day of the year.
