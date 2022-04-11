---
layout: default
title: What's New
---

# What's New

This page lists major improvements to FI Calc. Small changes like bug fixes are
not listed here.

#### April 10th, 2022

- 2021 market data has been added. This allows for one more year of simulations.

#### April 9th, 2022

- FI Calc can now be installed as an app on Android

#### November 26th, 2021

- A refreshed visual design was released.

#### May 1st, 2021

- Market data for 2020 has been added

#### January 30th, 2021

- A subtle improvement was made to the Available Spend chart: additional income
  sources will always be displayed, even when the portfolio value goes to $0.
  Previously, additional income sources were ignored after a portfolio went to
  $0. This change does not impact simulation success rates.
- All clickable elements in the app now use a consistent design. Did you know
  you can click cells in the Portfolio at End of Retirement table to view all of
  the end portfolio values?

#### December 30th, 2020

- A new withdrawal strategy has been introduced: Vanguard Dynamic Spending.

#### September 19, 2020

- Additional income and withdrawals can now be explicitly set as never-ending.
  Previously, you would need to give them a very long duration to ensure that
  they never ended.
- The definition of success for Maximize Spend strategies has been tweaked
  slightly to take into account your minimum withdrawal limit. If a year ever
  withdraws less than your specified minimum, then it will count that simulation
  as a fail.

#### September 18, 2020

- "Target End Portfolio Value" has been removed from the VPW strategy. Not only
  was the label misleading, but VPW does not allow you to specify this value.
  CVPW still allows you to set it, but the input has been given the more
  appropriate label "PMT Future Value."

#### July 23, 2020

- User Preferences have been added to FI Calc. You can choose to reduce motion
  in the interface and/or adjust the colors if you have a color vision
  deficiency (color blindness).

#### June 19, 2020

- Search has been added to the guide website.

#### June 17, 2020

- New guides have been introduced for each of the different withdrawal
  strategies. These are a first pass!

#### June 9, 2020

- You can now view the end portfolio value of all simulations by clicking the
  largest portfolio value, smallest portfolio value, or "No. of \$0 Portfolios"
  rows.

#### June 6, 2020

- New charts have been introduced on the home page that display end portfolio
  and withdrawals quantiles.
- Results now show years with excessively large end portfolios for "longevity"
  withdrawal strategies
- The Summary on the results page is improved and now displayed for all
  withdrawal strategies

#### June 3, 2020

- Analysis-based colors have returned to the simulation-by-year grid. There are
  two different analyses used based on the goals of the withdrawal strategy: one
  is for longevity (e.g.; Constant Dollar), and the other is for maximum spend
  (e.g.; VPW).

#### June 1, 2020

- You can now specify cash in your portfolio.

#### May 31, 2020

- You can now share and bookmark calculations using a URL. For more, refer to
  [this guide.](/usage-guides/saving-calculations/)
- New withdrawal strategy: Hebeler Autopilot II.

#### May 28, 2020

- You can now customize how quickly your allocations change over time. To learn
  more, refer to [the Portfolio Configuration guide](/configuration/portfolio/).

#### May 24, 2020

- When appropriate, help dialogs now link out to the
  [Guide](https://guide.ficalc.app/).

#### May 22, 2020

- Support glide path allocations in the Portfolio.
- Support fees for bonds.

#### May 16, 2020

- Withdrawal strategies are now organized into three groups based on their goals
  and behaviors:
  - Basic
  - Maximize Spend
  - Maximize Longevity

#### May 15, 2020

- New withdrawal strategies:
  - Endowment Strategy
  - 1/N
  - Dynamic SWR

#### May 14, 2020

- New withdrawal strategies:
  - VPW
  - CVPW

#### May 10, 2020

- Introduces basic statistics for portfolios and withdrawals, such as median and
  standard deviation
- The results page now lists years in descending order

#### May 9, 2020

- The Guyton-Klinger withdrawal strategy now factors in the growth of bonds as
  well as stocks
- CSV exports now include an additional field: the final portfolio value in
  first year dollars

#### May 8, 2020

- Introduces support for bonds in your portfolio

#### May 3, 2020

- The Constant Withdrawal strategy has been renamed to Constant Dollar

#### April 28, 2020

- You can now hover or tap-and-hold on charts to view detailed information

#### April 23, 2020

- CSV exports are more consistent between the overview and individual
  simulations, and now include more information
