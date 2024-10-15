# Game Leaderboard Frontend - React + Vite

This project is a frontend application for displaying a **Leaderboard system** where players are ranked based on their weekly earnings. It provides users with a clear and interactive interface to view rankings, along with details about players such as username, country, and ranking fluctuations. This project was built with **React** and **Vite** for fast development and performance.

## Project Overview

### Task
The main goal of this project is to display a **Leaderboard table** for a game where users are ranked by their weekly earnings. The table shows key player information, such as:
- **Country**: Player's country of origin.
- **Username**: The player's unique identifier.
- **Rank**: The player's rank based on earnings.
- **Money**: Total earnings for the week.
- **Daily Diff**: Changes in player rank today, visualized by color indicators (green for improvement, red for decline, and yellow for no change).

### Why Vite?
We chose **Vite** because it provides an optimized development environment with:
- **Fast build times** due to native ES module support and lightweight bundling.
- **Hot Module Replacement (HMR)** for a smoother development experience.
- **Minimal setup** for a faster and simpler configuration compared to traditional bundlers like Webpack.

### Why ag-Grid Over Kendo UI?
Initially, **Kendo UI** was considered, but it requires a valid license for professional use. Without a license, the Kendo UI components display an unappealing watermark background that can interfere with the user experience. 

**ag-Grid** was chosen as a free alternative for personal and non-commercial projects. Key reasons for using **ag-Grid**:
- **No watermark or activation issue** in free usage for software development.
- **Rich feature set** with support for sorting, pagination, and cell styling.
- **Great community support** and reliable documentation.

### Tech Stack
This project uses the following technologies:
- **React**: The core library for building the user interface.
- **Vite**: For fast and optimized bundling.
- **ag-Grid**: For rendering the leaderboard table with pagination and sorting capabilities.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building responsive, customizable, and modern UI components.
- **JavaScript/JSX**: Used for writing the component logic.
  
### Additional Details:
- **Responsive Design**: Tailwind CSS was used to ensure the layout adjusts properly for mobile and desktop views.
- **Custom Hover and Theme**: Custom CSS and Tailwind classes were used to style the ag-Grid table, including hover effects and theme colors that match the application's design.

## Installation and Setup

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd your-repo
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **View the app in the browser**:
   Open `http://localhost:3000` (or the port provided by Vite) to view the application.

## Features

- **Responsive Leaderboard**: The leaderboard adjusts for different screen sizes, ensuring a smooth experience on both desktop and mobile.
- **Pagination and Sorting**: ag-Grid provides built-in pagination, with custom page size options and sortable columns for a better user experience.
- **Dynamic Styling**: Using Tailwind CSS and custom styles, the table rows and hover states provide a visually pleasing and interactive user interface.


## License

---
