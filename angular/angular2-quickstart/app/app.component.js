// Create a visual component, AppComponent, that chains the Component and Class methods
// Create an IIFE since we're creating a single global namespace for the app (not using 3rd party module systems)
(function(app) {
  app.AppComponent =
  	// Component method takes a configuration objects with two properties, selector and template
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My SECOND Angular 2 App</h1>'
    })
    // Class method is where we implement the component, giving it properties that bind to the view
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));