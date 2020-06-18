---
layout: default
title: CAPE-Based Withdrawals
---

# CAPE-Based Withdrawals

The CAPE-based withdrawal strategy is a modified version of the
[Percent of Portfolio](../percent-of-portfolio) withdrawal strategy. It avoids
extreme year-to-year fluctuations in withdrawal rates by incorporating the CAPE
into the yearly withdrawal. The CAPE is a value that is correlated with expected
future earnings.

The equation for the CAPE-based withdrawal method is as follows:

```
(a + b * CAEY) * P
```

Where `a` is the base withdrawal base, `b` is a weight of how much to factor in
the CAPE, `CAEY` is equal to `1/CAPE`, and `P` is the current-year portfolio
value.

### Strengths

- It responds to market conditions, increasing risk of success by reducing
  spending when the market is performing poorly and increasing spending when the
  market does well.
- It responds smoothly to market conditions, so that year-after-year changes to
  your withdrawal are small, unlike the Percentage of Portfolio strategy
- It has a low likelihood of exhausting your portfolio, even over long
  retirement lengths.
- It's algorithm is straightforward enough to calculate annual withdrawals by
  hand

### Weaknesses

- Like all withdrawal strategies that vary based on market conditions, annual
  withdrawals can become too low without a minimum withdrawal in place.
