# Analytics TimeLine

## Project Data Feature

The session timeline is powered by JSON data, which contains detailed records of each participant's activities, errors, join/leave times, and other session-related events. Below is an outline of the features and data structure.

## Data Structure

The JSON data includes an array of objects, each representing a participant and their respective session events. The structure includes the following key elements:

1. **Participant Details**:

   - `participantId`: Unique identifier for each participant.
   - `name`: Name of the participant.

2. **Events**:
   - `joinTime`: The timestamp when the participant joins the session.
   - `leaveTime`: The timestamp when the participant leaves the session.
   - `videoEvents`: An array of objects that represent the participant's video status changes (e.g., video on/off).
   - `audioEvents`: An array of objects that represent the participant's audio status changes (e.g., mute/unmute).
   - `errorEvents`: An array of objects containing errors that occurred during the session, such as connection issues or media errors.
   - `dropOffEvents`: An array of objects that represent unexpected disconnections or drop-offs.

### Event Types

1. **Video Events**:

   - **Action**: `videoOn` or `videoOff`
   - **Time**: Timestamp of the action
   - **Icon**: Camera icon (for video on/off)

2. **Audio Events**:

   - **Action**: `audioMute` or `audioUnmute`
   - **Time**: Timestamp of the action
   - **Icon**: Microphone icon (for mute/unmute)

3. **Error Events**:

   - **Action**: Descriptive error type (e.g., "Connection Lost", "Media Error")
   - **Time**: Timestamp of the error
   - **Icon**: Error icon (typically a warning or error symbol)

4. **Join/Leave Events**:

   - **Action**: `join` or `leave`
   - **Time**: Timestamp of the action
   - **Icon**: Person icon (for join) and Exit icon (for leave)

5. **Drop-off/Disconnection Events**:
   - **Action**: `dropOff` or `disconnection`
   - **Time**: Timestamp of the drop-off or disconnection event
   - **Icon**: Disconnection icon (indicating the unexpected drop-off)

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs without writing custom CSS.
- **Moment.js**: A JavaScript library for parsing, validating, manipulating, and formatting dates.

### Prerequisites:

1. **Node.js**: Ensure that you have Node.js installed on your machine. If not, download it from [here](https://nodejs.org/).

2. **Package Manager**: Use npm or yarn to manage project dependencies.

### Installation:

1. Clone the repository:

   ```bash
   git clone https://github.com/realvishalrana/Session-timeline.git

   ```

2. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/index.js`. The page auto-updates as you edit the file.
