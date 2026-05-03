# SpendSmart - Student Expense Tracker

## 1. Objective

The goal of this app is to help college students living in hostels keep track of their monthly expenses. Since students often lose track of small daily spending, SpendSmart gives a clear picture of where the money is going without needing any backend or internet connection.

---

## 2. App Idea

SpendSmart is a front-end only mobile app built with React Native and TypeScript. Students can view their monthly budget, browse expenses by category, and see detailed breakdowns of individual expenses. All data is stored locally in a static data file, making it simple and fast.

---

## 3. Features

### Screens
- **Home** - Displays the monthly budget card, total spent, remaining balance, and the five most recent expenses.
- **Categories** - Lists expenses filtered by category (Food, Transport, Books, Utilities, Entertainment) with a summary bar showing the total for each category.
- **Expense Detail** - Shows full details of a selected expense, including animated progress bars that show its impact on the monthly budget and similar expenses in the same category.
- **Animation Demo** - Demonstrates all animations used in the app: a Lottie animation, a bounce animation, and a drag gesture.
- **Profile** - Displays the student profile photo, name, hostel info, budget stats, and basic settings like notifications and dark mode toggle.

### Navigation
- Bottom tab navigator with four tabs: SpendSmart, Categories, Animations, and Profile.
- Stack navigator inside the Categories tab to navigate from the category list into the expense detail view.

### Reusable Components
- `ExpenseCard` - A reusable card component that displays a single expense with its title, category, date, note, and amount. Used in the Categories screen and accepts an `expense` prop of type `Expense`.

### Animations
- Fade in and scale spring on the Home screen budget card when the screen loads.
- Slide up animation on the Expense Detail screen when it opens.
- Animated progress bars on the Expense Detail screen that fill up after the card appears.
- Lottie animation on the Animation Demo screen with pause and play on tap.
- Bounce spring animation triggered by tapping a card.

### Gesture Interaction
- A draggable card on the Animation Demo screen built using `PanResponder`. The card can be dragged freely and snaps back to its original position when released.

---

## 4. Navigation Flow

The app uses a **Bottom Tab Navigator** as the main navigation structure with four tabs the user can switch between at any time.

Inside the **Categories** tab, a **Stack Navigator** is used. The user starts on the category list screen and can tap any expense card to navigate into the Expense Detail screen. They can go back using the header back button.

```
Bottom Tab Navigator
├── Home
├── Categories (Stack Navigator)
│   ├── Category List
│   └── Expense Detail
├── Animation Demo
└── Profile
```

---

## 5. Animations and Interactions

### Fade In and Scale Spring (Home Screen)
When the Home screen loads, the budget card starts at 80% size and zero opacity. Using `Animated.parallel`, a fade in and a spring scale animation run at the same time, making the card appear smoothly with a subtle bounce.

### Slide Up (Expense Detail Screen)
When a user taps an expense, the detail card starts 60 pixels below its final position and slides up while fading in using `Animated.timing`. This gives the screen a polished feel.

### Lottie Animation (Animation Demo Screen)
A Lottie JSON animation plays on loop. The user can tap it to pause or resume playback.

### Drag Gesture with Snap Back (Animation Demo Screen)
A card is made draggable using `PanResponder`. The scroll view is disabled while dragging so the gesture is not interrupted. When the user lifts their finger, the card springs back to the center using `Animated.spring`.