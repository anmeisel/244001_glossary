import Glossary from './Glossary'

let glossary1 = new Glossary(0, "React", ["First answer", "Second answer", "Third answer"], "JavaScript framework", "It works with JSX files.", false)
let glossary2 = new Glossary(1, "JSX", ["First answer", "Second answer", "Third answer"], "HTML + JavaScript", "Server-side scripting. Functions can be returned in pure HTML.", false)
let glossary3 = new Glossary(2, "XML", ["First answer", "Second answer", "Third answer"], "Extensible Markup Language", "XML was designed to carry data - with focus on what data is. Does not display data.", false)
let glossary4 = new Glossary(3, "the first step to start a project...", ["First answer", "Second answer", "Third answer"], "npx create-react-app [name of project]", "npm start", false)
let glossary5 = new Glossary(4, "a Component", ["First answer", "Second answer", "Third answer"], "Reusable functions", "React only re-renders components that have changed. State is like a variable.", false)
let glossary6 = new Glossary(5, "useState", ["First answer", "Second answer", "Third answer"], "Re-renders once the function has been manipulated", "It’s a React hook - functional compenet that tracks its own data. It takes a reference to the value (variable - but don't refer to this variable in the function), and then a function name. UseState will start at whatever is in its parameter. UseState is how we use a function to a component instead of a class. E.g.: const [count, setCount] = useState(0). A state variable should always be declared at the highest level its needed.", false)
let glossary7 = new Glossary(6, "a Hook", ["First answer", "Second answer", "Third answer"], "functional components as opposed to class components", "Functional component is a reusable, imported. A function that returns some HTML.", false)
let glossary8 = new Glossary(7, "a Prop", ["First answer", "Second answer", "Third answer"], "A generic parameter passed via the function", "Object full of properties that we can assign. For example, you can give props to a component and assign them in the component name in app.js.", false)
let glossary9 = new Glossary(8, "OnChange", ["First answer", "Second answer", "Third answer"], "Every onChange passes an event object, containing info about the event", "This will always give you an event object.", false)
let glossary10 = new Glossary(9, "a Callback Function", ["First answer", "Second answer", "Third answer"], "Parent (app.js) passes a State function as props to a child element (colourbutton.js)", "The child gets State of parent. This function or state can be a prop. Steps for making a prop: 1. Make a custom prop in your app.js component name i.e. <ColourButton col={'green'}/>. 2. Bring prop as an attribute in the component function name i.e. ColourButton(props). 3. Use it inside your component i.e. style={{backgroundColor: props.col}}. All inline!", false)
let glossary11 = new Glossary(10, "Toggle", ["First answer", "Second answer", "Third answer"], "Make a useState(false). Underneath make a toggleClass function (i.e. const toggleClass = () => {setBackground(!background)})", "In the button inline make a ternary operator (i.e. style={{ backgroundColor: background ? 'darkslateblue' : 'green' }} ).", false)
let glossary12 = new Glossary(11, "Map", ["First answer", "Second answer", "Third answer"], "Like a For loop. Applies a function to an array and returns a new array", "Make sure to always put a key right inside the return statement when calling the component.", false)
let glossary13 = new Glossary(12, "Flex", ["First answer", "Second answer", "Third answer"], "Flex will always affect the child elements", "Full flex is 1. 50% will be 0.5.", false)
let glossary14 = new Glossary(12, "a Class", ["First answer", "Second answer", "Third answer"], "Instance of objects", "Collection of variables and values. Template for an object that you can create new versions of; blueprint.", false)
let glossary15 = new Glossary(12, "a Constructor", ["First answer", "Second answer", "Third answer"], "A method that creates an instance of the class", "Every time you make an instance this will run by default, a start-up function for an object.", false)

let glossaryArray = [glossary1, glossary2, glossary3, glossary4, glossary5, glossary6, glossary7, glossary8, glossary9, glossary10, glossary11, glossary12, glossary13, glossary14, glossary15]

export default glossaryArray