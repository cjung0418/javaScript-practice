# DATA_BINDING

reference: https://blog.jeremylikness.com/blog/client-side-javascript-databinding-without-a-framework/

## Class need
1. Keep track of a value
2. Allow listeners to subscribe to changes
3. Notify listeners when the value mutates
## Computed Values
1. Keep track of the function that computes the new property
2. Understand the dependencies, i.e. the observed properties the computed property depends on
3. Subscribe to changes in dependencies so the computed property can be re-evaluated
## Bi-directional Databinding
