# React.js Programming
1. @babel/cli and @babel/core
   1. Babel Transpiler  packages from ES 6 to Browser compatible Script
2. @babel/preset-env
   1. The preset package for ES 6 to define polyfills for all methods those are not transpiled
3. react
   1. The React.js Object Model. This provides following objects
      1. Component, the class used to define custom component
      2. React object, used to provide component management for the application
4. react-dom
   1. This is used to render the component in the browser inside the HTML element
5. @babel/preset-react
   1. The preset for React objects for polyfills
6. webpack
   1. Module budler and module loader.
   2. This is used to load and bundle React and its dependencies in a single index.js file
7. webpack-dev-server
   1. The node.js based server for hosting and bundling React application, this can be used for angular also
8. bootstrap
   1. file-loader
   2. css-loader
   3. scss-loader
9. html-webpack-plugin and html-webpack-template
   1.  For Compiling HTML during bundling and injecting the HTML DOM o index.html page

#=================================================================================================================================================

# WebPack bundler Configuration
1. Using webpack.config.js 

# Creating React Component
1. Class Component, from first release of React
   1. Import React, {Component} from 'react' pacage
   2. The Component is the base class
      1. Implement the 'render()' method that returns html 
   3. Component name must be pascal case StudentComponent
2. Functional Components, from React.js 16.8+ aka React Hooks
   1. The function that returns html 
3. React Components
   1. Stateless
      1. No state for the component, they will have HTML only
   2. Stateful 
      1. Component with Data aka state
         1. The state and props, properties used for managing state of components
            1. The 'state' is within the scope of the component
               1. the this.state={}, is the dynamic object for storing components state 
            2. The 'props' is for exchanging data across components
               1. this.props = {}, is used for data across components 
      2. Controlled Components (Recommended for Line-of-Business Apps)
         1. The Component with State and Events to update the state using the UniDirectional data flow
            1. State --> state and props
               1. The state and props properties will be bind with DOM elements to their native attributes
                  1. e.g. value of <input>, <select> elements
            2. Events --> DOM Events using which the state will be updated 
               1. Event methods are bind with DOL elements using '.bind(this)' method
      3. UnControlled Components
         1. They have events but not state objects (optional) the state properties are bind with DOM elemets using 'ref' property of React Component
         2. Refer these property updates using
            1. this.refs.<STATE-PROPERTY-NAME>

