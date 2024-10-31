# Daily Event Scheduler

A streamlined scheduling application designed to manage non-overlapping events within a 24-hour day. Users can effortlessly add events with specific start and end times, and view them in a user-friendly list format.

## Key Features

1. **Scheduler Class**: Core class responsible for managing events.
   - **addEvent**: Attempts to add an event if it does not overlap with existing events. Returns `true` if added, otherwise `false`.
   - **getEvents**: Retrieves a list of all scheduled events.

2. **Event Representation**: Events use a 24-hour format (0-23) for simplicity.
   - **Example**: `9` represents 9:00 AM, and `17` represents 5:00 PM.

3. **User Interface**: Interactive form allowing users to input event times and view scheduled events.
   - **Input validation**: Ensures start times are earlier than end times and prevents overlapping events.

## Thought Process

- **Overlap Check**: The `addEvent` method carefully checks start and end times against existing events to prevent overlaps. If an overlap is detected, the event is not added.
- **Validation**: Each event must have a start time before the end time, and the time range should be between 0 and 23.
- **User Feedback**: Clear feedback is provided for overlapping or invalid entries to enhance user experience.

## Tech Stack

- **Frontend**: React.js, JavaScript
- **Backend**: Node.js
- **Additional**: CSS for styling

## Folder Structure

- **Main Folder**: `Event-Scheduler`
  - **Frontend**: Navigate to the frontend directory and run the following commands:
    - Install dependencies: `npm install`
    - Start the frontend server: `npm start`
  - **Backend**: Navigate to the backend directory and run:
    - Install dependencies: `npm install`
    - Start the backend server: `node server.js`

## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/daily-event-scheduler.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd daily-event-scheduler
    ```

3. **Install Project Dependencies**:
    ```bash
    npm install
    ```

4. **Start the Application**:
    - **Frontend**: In the frontend folder, use:
      ```bash
      npm start
      ```
    - **Backend**: In the backend folder, use:
      ```bash
      node server.js
      ```

## Usage

1. **Add Events**: Enter the start and end times (0-23 format) in the input fields.
2. **Submit**: Click the **Add Event** button to add the event.
3. **View Scheduled Events**: Successfully scheduled events will be displayed in a list below.
4. **Feedback**: If an event conflicts or has invalid input, an error message will inform the user.

## Example Scenario

Assuming events `(2, 5)` and `(7, 9)` are scheduled:
- Trying to add `(1, 3)` will **fail** (overlaps with 2-5).
- Trying to add `(5, 7)` will **succeed** (fits between existing events).
- Trying to add `(8, 10)` will **fail** (overlaps with 7-9).

## Live Demo

Check out the live version of the project [here](https://daliy-event-scheduler.netlify.app/).

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

---

