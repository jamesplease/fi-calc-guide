module.exports = [
  {
    title: 'Introduction',
    url: '/introduction/',
    pages: [
      {
        title: 'Backtesting',
        url: '/introduction/backtesting/',
      },
    ],
  },
  {
    title: 'Configuring the Calculator',
    url: '/configuration/',
    pages: [
      {
        title: 'Length of Retirement',
        url: '/configuration/length-of-retirement/',
      },
      {
        title: 'Portfolio',
        url: '/configuration/portfolio/',
      },
      {
        title: 'Withdrawal Strategy',
        url: '/configuration/withdrawal-strategy/',
      },
      {
        title: 'Additional Income',
        url: '/configuration/additional-income/',
      },
      {
        title: 'Additional Withdrawals',
        url: '/configuration/additional-withdrawals/',
      },
      {
        title: 'Historical Data',
        url: '/configuration/historical-data/',
      },
    ],
  },
  {
    title: 'Withdrawal Strategies',
    url: '/withdrawal-strategies/',
    groups: [
      {
        title: 'Basic Strategies',
        url: '/withdrawal-strategies/basic-strategies/',
        pages: [
          {
            title: 'Constant Dollar',
            url: '/withdrawal-strategies/constant-dollar/',
          },
          {
            title: 'Percent of Portfolio',
            url: '/withdrawal-strategies/percent-of-portfolio/',
          },
          {
            title: '1/N',
            url: '/withdrawal-strategies/one-over-n/',
          },
        ],
      },
      {
        title: 'Maximize Spending',
        url: '/withdrawal-strategies/maximize-spending/',
        pages: [
          {
            title: 'Variable Percentage Withdrawal',
            url: '/withdrawal-strategies/vpw/',
          },
          {
            title: 'Custom VPW',
            url: '/withdrawal-strategies/custom-vpw/',
          },
          {
            title: 'Dynamic SWR',
            url: '/withdrawal-strategies/dynamic-swr/',
          },
        ],
      },
      {
        title: 'Maximize Longevity',
        url: '/withdrawal-strategies/maximize-longevity/',
        pages: [
          {
            title: 'Endowment Strategy',
            url: '/withdrawal-strategies/endowment/',
          },
          {
            title: 'Guyton-Klinger',
            url: '/withdrawal-strategies/guyton-klinger/',
          },
          {
            title: '95% Rule',
            url: '/withdrawal-strategies/95-percent/',
          },
          {
            title: 'CAPE-based',
            url: '/withdrawal-strategies/cape-based/',
          },
          {
            title: 'Sensible Withdrawals',
            url: '/withdrawal-strategies/sensible-withdrawals/',
          },
        ],
      },
    ],
  },

  //
  //   ],
  // },
  // {
  //   title: 'Intepreting the Results',
  //   url: '/results/',
  //   pages: [
  //     {
  //       title: 'Portfolio at End of Retirement',
  //       url: '/results/portfolio/',
  //     },
  //     {
  //       title: 'Withdrawals',
  //       url: '/results/withdrawals/',
  //     },
  //     {
  //       title: 'Year Details',
  //       url: '/results/year-details/',
  //     },
  //   ],
  // },
  {
    title: 'Usage Guides',
    url: '/usage-guides/',
    pages: [
      {
        title: 'Exporting Results',
        url: '/usage-guides/exporting-results/',
      },
      {
        title: 'Saving Calculations',
        url: '/usage-guides/saving-calculations/',
      },
      {
        title: 'Sharing Calculations',
        url: '/usage-guides/sharing-calculations/',
      },
    ],
  },
  {
    title: 'How It Works',
    url: '/how-it-works/',
    pages: [
      {
        title: 'One Simulation Year',
        url: '/how-it-works/one-simulation-year/',
      },
      {
        title: 'Historical Data Source',
        url: '/how-it-works/historical-data-source/',
      },
      {
        title: 'Computed Historical Data',
        url: '/how-it-works/computed-historical-data/',
      },
    ],
  },
  {
    title: 'Other',
    url: '/other/',
    pages: [
      {
        title: "What's New",
        url: '/other/whats-new/',
      },
      {
        title: 'Glossary',
        url: '/other/glossary/',
      },
      {
        title: 'FAQ',
        url: '/other/faq/',
      },
    ],
  },
];
