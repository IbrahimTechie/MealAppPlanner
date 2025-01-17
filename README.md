Here's a description for your project:

---

## Meal Planner App

The Meal Planner App is a web application designed to help users organize and optimize their meal planning for the week. Built with React and Next.js, this application allows users to browse through a collection of recipes, select meals, and assign them to specific weeks.

### Key Features:

- **Recipe Browsing:** Users can view and filter a diverse range of recipes fetched from an external API. Each recipe card includes an image, name, description, cuisine, rating, and meal type.
  
- **Weekly Meal Planning:** Users can organize their selected meals into different weeks (Week 1 to Week 4). The app prevents duplicate meal assignments within the same week or across weeks and alerts users if they attempt to add duplicate meals.

- **Interactive UI:** The interface features a responsive design with a clean layout. Users can select and deselect meals, add them to specific weeks, and remove them as needed. The UI provides real-time feedback and notifications for better user experience.

- **Modal for Week Selection:** A modal dialog allows users to choose which week to add their selected meals. This modal ensures that users can make informed decisions before finalizing their selections.

### Technologies Used:

- **React:** For building the user interface with component-based architecture.
- **Next.js:** For server-side rendering and optimized performance.
- **Tailwind CSS:** For styling and creating a responsive design.
- **TypeScript:** For type safety and improving code quality.

### How It Works:

1. **Fetching Data:** The app fetches recipe data from the Dummy JSON API and stores it in the state.
2. **Selection and Filtering:** Users can select recipes and filter them based on the active week.
3. **Managing Meals:** Users can assign selected meals to different weeks or remove them from the planned weeks.
4. **Alerts and Feedback:** The app provides notifications for duplicate meal assignments and other relevant actions.

### Getting Started:

To get started with the Meal Planner App, clone the repository, install the dependencies, and run the development server. The app is designed to be intuitive and user-friendly, making meal planning a breeze.
