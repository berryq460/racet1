// Part 1: 30%, you must create a repo for part 1, separate from part 2
 
// Why does React utilize the virtual-dom?
// Virtual dom is used to detect state and prop changes. Updates are sent to the real DOM in an 
// efficient manner. When the page is rerendered only changes made are applied to the real DOM
// instead of replacing the entire DOM, thus allowing for React's fast performance
 
 
// 2a How is data flowed in React? 2b. Why is React architected this way?
 
//  Data flows in React in a one way uni-directional fashion thus keeping everything 
//  modular and fast when data is sent between partent and child components as props. It shows the idea that the components dont modify the data they recieve.
//   This makes debugging easier. 

// 3. What is the purpose for lifting state up in React? Give an example of this
 
//  Lifting state is to allow for a single source of truth for shared components so that within
//  a shared state any changes made are only reflected in relevant componenets. 
//  This also allows for one state to be shared betwen multiplle child components by passing them
//  down via props.An example would be

// 4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
 
//  A startup would want to implement React-Routing to not lose customers, allowing a single page wb
//  application their users can easily engage without losing patience as the page refreshes and 
//  thus potentially losing their users in the timely process. 
//  It also helps users find things easily and conveniently with navigation.

// 5. Can browsers read JSX? Why?

//  JSX is not a regular JS object. Browsers can only read JS objects. Transformers like Babel
//  allow the conversion of JSX files into JS objects.

// 6. What is the significance of keys in React? 

// Keys are significant because they help React identify 
// which items have been re-ordered, changed, added, or removed with the help
// of its unique id association. 
 
// 7. What is the difference between Props and State?

// The difference between the two lies in who is owning the data and how info about the component is handled.
//  Props are read-only components that allow you to pass data from component to component and are immutable.
//  State are variables but are directly initalized and managed by the component. 
// State is an updatable structure used to contain data and reflect changes in the component when the component is rendered. 

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
 
// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )
 
// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

// Above is a configuration of Babel to transform
//  ECMAScript 2015+syntax  into a ES5 compatible version of JavaScript in current and older browsers or environments.
 
// 9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map() 
// Show 3 test runs, with at least 2 edge cases. 
// function properNames(names) {
//  const newNames = names.map(names => )
// }
// //will use .toUpperCase()
 
// 10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Show 3 test runs, with at least 2 edge cases. 
// Function smallWordsOnly(arr) {
