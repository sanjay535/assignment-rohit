This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Component Heirachy
- Navigation
 - Routes
   1.  (Route) '/'
        - Dashboard
        - DashboardSummary
            - 4 * DashboardAnalyticsCard
        - DashboardTable
        - NewTransactionForm (Dialog)
   2.  (Route) '/about'
        - AboutPage  


## User interface
- /Home Page

![Alt text](/github/home-page.png?raw=true "Title")
- / Add new Transaction form
![Alt text](/github/new-transaction.png?raw=true "Title")

My Portfolio [https://sanjay-nu.vercel.app/](https://sanjay-nu.vercel.app/)
