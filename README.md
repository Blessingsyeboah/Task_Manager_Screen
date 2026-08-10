# Task Manager

A React Native (Expo) rebuild of a task manager home screen, originally designed in Figma. Built for the DCIT 324 Mobile Application Development practical assignment at the University of Ghana.

## About

The screen has a greeting header with a profile photo, a search bar with a filter button, a horizontally scrollable **Categories** row, and a vertically scrollable **Ongoing Task** list.

- **7 categories**: Exercise, Study, Reading, Coding, Meditation, Cooking, Music
- **8 ongoing tasks**: Mobile App Development, Web Development, Push Ups, UI/UX Design Review, Data Structures Assignment, Evening Yoga, Grocery Shopping, Guitar Practice

## Tech Stack

- [Expo](https://expo.dev/) (SDK 54)
- React Native
- [@expo/vector-icons](https://icons.expo.fyi/) (Ionicons) for category and task icons

## Project Structure

```
Task_Manager/
├── App.js                  # Screen entry point, assembles everything
├── assets/                 # Images (profile photo, avatars, search/filter icons)
├── components/
│   ├── Header.js            # Greeting + profile photo
│   ├── SearchBar.js         # Search input + filter button
│   ├── CategoryCard.js      # Single category card (image or icon)
│   └── TaskCard.js          # Single ongoing task card with progress bar
├── constants/
│   └── theme.js              # Shared colors, radii, spacing
├── data/
│   ├── categories.js         # Category content
│   └── tasks.js               # Task content
├── app.json
├── index.js
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- The [Expo Go](https://expo.dev/go) app on your phone, or an Android/iOS simulator

### Install and Run

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Then scan the QR code with Expo Go (Android) or the Camera app (iOS), or press `a` / `i` in the terminal to open an Android/iOS simulator.

Other run scripts:

```bash
npm run android   # open directly in an Android emulator
npm run ios       # open directly in an iOS simulator
npm run web       # open in a browser
