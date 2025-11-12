# Scientific Calculator - React + Tailwind CSS

A modern, responsive scientific calculator built with React and styled with Tailwind CSS.

## Features

- **Scientific Functions**: Trigonometric functions (sin, cos, tan, inverse functions)
- **Advanced Operations**: Powers, roots, logarithms, factorials
- **Memory Functions**: M+, M-, MR (Memory Recall)
- **Constants**: π (Pi), e (Euler's number)
- **Angle Modes**: DEG/RAD toggle
- **History**: View and reuse previous calculations
- **Keyboard Support**: Full keyboard input support
- **Responsive Design**: Works on desktop, tablet, and mobile

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Components Structure

- `Calculator.jsx` - Main calculator component
- `Display.jsx` - Calculator display screen
- `ButtonGrid.jsx` - Grid of calculator buttons
- `History.jsx` - Calculation history panel
- `Button.jsx` - Reusable button component
- `useCalculator.js` - Custom hook with calculator logic

## Keyboard Shortcuts

- **Numbers (0-9)**: Input numbers
- **Operators (+, -, *, /)**: Basic operations
- **Enter**: Calculate result
- **Escape**: Clear all
- **Backspace**: Delete last input
- **Parentheses**: ( and )

## Build

To create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files.