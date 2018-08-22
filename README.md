A Simple React Redux NodeJS and MongoDB application

## Business Requirement of the application
A scientist is trying to understand how ducks are being fed in parks around the world. She wants to collect the following information:
● What time the ducks are fed
● What food the ducks are fed
● Where the ducks are fed
● How many ducks are fed
● What kind of food the ducks are fed
● How much food the ducks are fed
● Should have the ability for a little old lady who feeds the ducks every day in the same way to set a repeating schedule so she doesn’t have to use the application every day
The scientist would like to crowdsource this information by creating a web application where people can submit these data points.

## Technologies Used
React and Redux for Frontend
 - React allows to write custom and reusable view components in JavaScript. Makes the development well structured and easy to test and control. Code maintenance also becomes easy for the same reason.
 - React component renders instantly if there is any change in its state and it re-renders the only component of a page whose state has the change not the other components of the same page.
 - In a basic React application, the state of the whole application is distributed among its components and the components are individually responsible to manage their own state as well as to re-render upon any change on the state. This often becomes untraceable and uncontrollable when an application state is huge.
 - Redux rescues React when an application has huge state and needs good control and traceability. It manages and shares the application state centrally using a store. Components can dispatch actions to the store, store updates the state based on the actions, and a component becomes aware of the state update only if there is any update on the portion of the state that the component cares about.

 NodeJS and MongoDb for Backend    
 - Its pure JavaScript that can be used to write most of the applications top to bottom even up to database layer.
 - Easy to develop, test, build and deploy.
 - Does not need container to deploy only JavaScript run-time (node.js).
 - MongoDb is a JSON Object based database that integrates very well and seamless with NodeJS application.

 ## Overview of the application
 Its as a single page application comes with a menu bar and a home page. The application persists foodtypes, foods, feeds, and schedules in the database. The home page has the links to view all foodtypes, all foods, all feeds, and all schedules. The homepage and all views are public does not need any user authentication. Menu bar has the menus to add new foodtype, food, feed, and schedule. It also has the menus to signin, signout, and signup. A new user can signup using signup. Already signed up user can sign in and sign out using signin and signout menus respectively. To add any of the above objects into the application a user must sign in, i.e., authenticated. When the collection of any of the above object is shown in its all view component, each object is rendered with the links to update and delete. Only the authenticated user is allowed to update or delete an object. Every food has a foodtype. Application allows the user to pick a foodtype from select options when she wants to add a new food into the application . Similarly, application allows user to pick food for feed or schedule from select options when she wants to add a new feed or schedule into the application.

  ## High Level Component Diagram
  Available in 'design/react/components.md' file.

  ## State of the application
  Available in 'design/redux/state.md' file.

  ## Actions of the application
  Available in 'design/redux/actions.md' file.

  ## Database model of the application
  Available in 'design/backend/model.md' file.
