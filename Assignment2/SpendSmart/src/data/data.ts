export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  note: string;
};

export const categories = ['Food', 'Transport', 'Books', 'Utilities', 'Entertainment'];

export const expenses: Expense[] = [
  { id: '1', title: 'Lunch at Canteen', amount: 200, category: 'Food', date: '2025-04-30', note: 'Fried Rice and Chicken' },
  { id: '2', title: 'Chips and Drinks from Canteen', amount: 150, category: 'Food', date: '2025-05-01', note: 'Late night snack' },
  { id: '3', title: 'Bus to Thimphu', amount: 544, category: 'Transport', date: '2025-05-02', note: 'Weekend trip home' },
  { id: '4', title: 'BT Top Up', amount: 1199, category: 'Utilities', date: '2025-05-02', note: 'Mobile data recharge' },
  { id: '5', title: 'Photocopies', amount: 25, category: 'Books', date: '2025-05-01', note: 'Past exam papers' },
  { id: '6', title: 'Taxi to Town', amount: 150, category: 'Transport', date: '2025-05-01', note: 'Shared with roommate' },
  { id: '7', title: '429 💎', amount: 650, category: 'Entertainment', date: '2025-05-01', note: 'MLBB Event' },
  { id: '8', title: 'Weekly Pass', amount: 165, category: 'Entertainment', date: '2025-05-01', note: 'MLBB Skin' },
];

export const monthlyBudget = 5000;