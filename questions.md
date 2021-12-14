1. What is the difference between Component and PureComponent? give an example where it might break my app.
R/ Basically Component handles the shouldComponentUpdate method for you

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
R/ Context is used to communicate with deeply contained components and SCU is a short circuits the re-rendering of a part of the component tree. for example if the props or state of a component are not modified in a meaningful way. As far as the component can tell. this might accidentally block context propagation

3. Describe 3 ways to pass information from a component to its PARENT.
    - Passing a function through the child component as props
    - Using context

4. Give 2 ways to prevent components from re-rendering.
    - useMemo to prevent re-rendering.
    - PureComponennt

5. What is a fragment and why do we need it? Give an example where it might break my app.
R/ help us to add multiple elements to a RC without wrapping them in an extra DOM node: example <>....</>

6. Give 3 examples of the HOC pattern.
    - higherOrderComponent(WrappedComponent)

7. what's the difference in handling exceptions in promises, callbacks and async...await.
8. R/ The only difference is that the callback for catch() has it's own execution context, i.e. variable scope works like you'd expect it to.

8. How many arguments does setState take and why is it async.
R/ Just recieve one and is async because setState alters the state and causes rerendering. This can be an expensive operation and making it sync might leave the browser unresponsive

9. List the steps needed to migrate a Class to Function Component.
    - Change the class to a function. Change.
    - Remove the render method.
    - Convert all methods to functions.
    - Remove references to this.
    - Remove constructor.
    - Replace this.
    - useEffect for state update side effects.
    - Replace lifecycle methods with hooks

10. List a few ways styles can be used with components.
    - CSS Stylesheet
    - CSS Modules
    - Inline styling
    - Style-component

11. How to render an HTML string coming from the server.
R/ dangerouslySetInnerHTML 

