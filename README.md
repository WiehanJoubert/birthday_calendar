# React Developer Test

Welcome to the React Developer Test! This project is designed to assess your skills in React, TypeScript, and modern frontend development. Please follow the instructions below to complete the test.

## Getting Started

1. Clone or download this repository.

2. Upload to your own repository to be shared with us. (This will also showcase your Git skills).

3. **Install Dependencies**

    Run the following command in the project root and ensure you are on node v20 >:

    ```sh
    npm install
    ```

4. **Start the Development Server**

    ```sh
    npm run dev
    ```

    The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Your Task

You will build a birthday calendar app where users can add birthdays, view them on a calendar, and delete entries if needed. The app should allow users to submit a name and date, display birthdays on the calendar, and show details when a date is selected. Focus on clean code, validation, and a user-friendly interface.

### Requirements

1. **Code Quality**

    - Use TypeScript throughout the project and where possible.
    - Ensure your code is clean, readable, and well-structured.
    - Use functional React components and React hooks.
    - Add comments where necessary.

2. **Features to Implement**

    - Add a birthday to the calendar.
    - Delete a birthday from the calendar.
    - Validate the form to prevent invalid or duplicate entries.
    - Showcase state management between the React components.
    - When a birthday is submitted in the BirthdayForm component it should be consumed in the BirthdayCalendar, when clicking on a date that matches a birthday that was added it should appear below the calendar.
    - Look out for _TODO_ comments along the way as tips on what to implement.

3. **UI**

    - Make the UI visually appealing and user-friendly.
    - Use CSS modules or another modern styling approach like tailwind.
    - Ensure the app is responsive and works well on mobile devices.

4. **Bonus**

    - If a birthday is added to the calendar it should not only display in the current year but all years.
    - Display birthdays in a sorted order (e.g., by date or name)
    - Notification that a birthday has been added upon submission.

## Submission

-   Ensure your code is committed and pushed to your repository.
-   Provide a link to your repository for review.

## Good Luck!

If you have any questions, please contact the reviewer or refer to the project documentation.
