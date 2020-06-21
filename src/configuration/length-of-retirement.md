---
layout: default
title: Length of Retirement
---

# Length of Retirement

One of the inputs to FI Calc is the number of years you expect your retirement
to last. Of course, we cannot know this number with certainty, but we can do our
best to make a reasonable guess.

### Choosing a Retirement Length

<figure>
    <img width="255px" src="/images/configuration-number-of-years.jpg" alt="The length of retirement input field.">
    <figcaption>Change your retirement length using this field within the Configuration.</figcaption>
</figure>

The default value, 30 years, comes from the papers that derived the 4% Rule.
Although these studies considered a variety of different retirement lengths
(ranging from 15 to 50 years), many people reference the success rates of the 30
year periods.

If you are retiring at a younger age, then you may choose to increase the
duration. That's totally fine. It's also worth keeping in mind that many early
retirees feel confident using 30 years in their planning.

### Retirements That are Too Short

Be mindful of specifying a retirement that is too short. Some of the withdrawal
strategies (particularly those in the "Maximize Spend" categories) aim to
completely deplete your portfolio by the end of your retirement. Should you
underestimate your retirement by a considerable amount, then you may run out of
money while you are alive.

### Excessively Long Retirements

Be mindful of the duration of the retirement that you specify. As you make your
retirement longer, fewer simulations are run. You might have the idea to
"stress-test" a withdrawal strategy by seeing how it performs with retirements
that are, say, 140 years long. As of 2020, 140 year long retirements only runs
10 simulations, which isn't enough to yield useful results.

The results of FI Calc are more useful with more simulations. For this reason,
we don't recommend that you specify extremely long retirement lengths.

<figure>
    <picture>
      <source media="(max-width: 550px)" srcset="/images/configuration-too-few-sims-warning-612.jpg 612w" sizes="306px">
      <source media="(min-width: 551px)" srcset="/images/configuration-too-few-sims-warning-982.jpg 982w" sizes="491px">
      <img src="/images/configuration-number-of-years.jpg" alt="The warning that is displayed when too few simulations are run.">
    </picture>
    <figcaption>FI Calc will warn you when an exceptionally low number of simulations are run.</figcaption>
</figure>
