### Complete example: Lifting state up

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

A complete example demonstrating how to lift state up to share it between components.

```js
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```

```css
button {
  display: block;
  margin-bottom: 5px;
}
```

--------------------------------

### Full example of nested components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

An interactive example showing MyButton nested within MyApp.

```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

--------------------------------

### Products array for list rendering

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

An example array of products to be rendered as a list.

```js
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

--------------------------------

### Complex expressions and styling with JavaScript variables

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

An interactive example demonstrating string concatenation in alt and dynamic styling using style attribute with JavaScript variables.

```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

```css
.avatar {
  border-radius: 50%;
}

.large {
  border: 4px solid gold;
}
```

--------------------------------

### Returning multiple JSX tags

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Example of wrapping multiple JSX tags into a shared parent using an empty <>...</> wrapper.

```js
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

--------------------------------

### Basic usage example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preloadModule.md

An example of calling `preloadModule` with a module URL and the required `as` option.

```js
preloadModule("https://example.com/module.js", {as: "script"});
```

--------------------------------

### Complete example using createElement

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/createElement.md

A full working example demonstrating `createElement` for both HTML elements and custom components, including associated CSS.

```js
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

export default function App() {
  return createElement(
    Greeting,
    { name: 'Taylor' }
  );
}
```

```css
.greeting {
  color: darkgreen;
  font-family: Georgia;
}
```

--------------------------------

### Installation commands

Source: https://github.com/reactjs/react.dev/blob/main/README.md

Commands to navigate into the project root and install dependencies.

```shell
cd react.dev
```

```shell
yarn
```

--------------------------------

### Initial setup for useCounter and useInterval refactoring

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/reusing-logic-with-custom-hooks.md

An interactive example demonstrating the `useCounter` hook before the `useInterval` hook is fully implemented, showing the `App.js`, original `useCounter.js`, and an empty `useInterval.js`.

```js
import { useCounter } from './useCounter.js';

export default function Counter() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}
```

```js
import { useState, useEffect } from 'react';

export function useCounter(delay) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
  return count;
}
```

```js
// Write your Hook here!
```

--------------------------------

### Conditional context reading example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use.md

A complete example showing how to provide and consume context conditionally with associated styles.

```javascript
import { createContext, use } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext value="dark">
      <Form />
    </ThemeContext>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button show={true}>Sign up</Button>
      <Button show={false}>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = use(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ show, children }) {
  if (show) {
    const theme = use(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
      </button>
    );
  }
  return false
}
```

```css
.panel-light,
.panel-dark {
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
}
.panel-light {
  color: #222;
  background: #fff;
}

.panel-dark {
  color: #fff;
  background: rgb(23, 32, 42);
}

.button-light,
.button-dark {
  border: 1px solid #777;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
}

.button-dark {
  background: #222;
  color: #fff;
}

.button-light {
  background: #fff;
  color: #222;
}
```

--------------------------------

### Symmetrical setup and cleanup

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffect.md

An example demonstrating symmetrical setup and cleanup logic for an Effect, where cleanup undoes the setup.

```js
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
```

--------------------------------

### Counter example with useReducer

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useReducer.md

A complete interactive example demonstrating useReducer for a counter.

```js
import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```

```css
button { display: block; margin-top: 10px; }
```

--------------------------------

### Complete React app example with createRoot

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/createRoot.md

A full example demonstrating the use of `createRoot` with an HTML entry point, main JavaScript file, and a simple React App component.

```html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <!-- This is the DOM node -->
    <div id="root"></div>
  </body>
</html>
```

```js
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

```js
import { useState } from 'react';

export default function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}
```

--------------------------------

### Full example of keyed Fragments in a list

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Fragment.md

This example demonstrates rendering a list of posts, where each post is wrapped in a keyed `Fragment` to ensure proper list rendering and reconciliation.

```js
import { Fragment } from 'react';

const posts = [
  { id: 1, title: 'An update', body: "It's been a while since I posted..." },
  { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
];

export default function Blog() {
  return posts.map(post =>
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={body} />
    </Fragment>
  );
}

function PostTitle({ title }) {
  return <h1>{title}</h1>
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
```

--------------------------------

### Try React

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/installation.md

You don't need to install anything to play with React. Try editing this sandbox! You can edit it directly or open it in a new tab by pressing the "Fork" button in the upper right corner.

```js
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}
```

--------------------------------

### Install Parcel

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/build-a-react-app-from-scratch.md

Command to install Parcel as a development dependency.

```bash
npm install --save-dev parcel
```

--------------------------------

### useLayoutEffect(setup, dependencies?)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useLayoutEffect.md

Call `useLayoutEffect` to perform layout measurements before the browser repaints the screen. It takes a setup function and an optional array of dependencies.

```APIDOC
## useLayoutEffect(setup, dependencies?)

### Description
Call `useLayoutEffect` to perform the layout measurements before the browser repaints the screen. It takes a setup function and an optional array of dependencies.

### Method
Hook

### Parameters
#### Hook Parameters
- **setup** (function) - Required - The function with your Effect's logic. Your setup function may also optionally return a *cleanup* function. After your component commits to the DOM and before the browser repaints the screen, React will run your setup function. After every commit with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. Before your component is removed from the DOM, React will run your cleanup function.
- **dependencies** (array) - Optional - The list of all reactive values referenced inside of the `setup` code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like `[dep1, dep2, dep3]`. React will compare each dependency with its previous value using the `Object.is` comparison. If you omit this argument, your Effect will re-run after every commit of the component.

### Returns
`useLayoutEffect` returns `undefined`.

### Caveats
- `useLayoutEffect` is a Hook, so you can only call it **at the top level of your component** or your own Hooks. You can't call it inside loops or conditions. If you need that, extract a component and move the Effect there.
- When Strict Mode is on, React will **run one extra development-only setup+cleanup cycle** before the first real setup. This is a stress-test that ensures that your cleanup logic "mirrors" your setup logic and that it stops or undoes whatever the setup is doing. If this causes a problem, implement the cleanup function.
- If some of your dependencies are objects or functions defined inside the component, there is a risk that they will **cause the Effect to re-run more often than needed.** To fix this, remove unnecessary object and function dependencies. You can also extract state updates and non-reactive logic outside of your Effect.
- Effects **only run on the client.** They don't run during server rendering.
- The code inside `useLayoutEffect` and all state updates scheduled from it **block the browser from repainting the screen.** When used excessively, this makes your app slow. When possible, prefer `useEffect`.
- If you trigger a state update inside `useLayoutEffect`, React will execute all remaining Effects immediately including `useEffect`.
```

--------------------------------

### Project dependencies for use hook example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use.md

Configuration for the example environment. Includes react-error-boundary for the ErrorBoundary component used in the implementation.

```json
{
  "dependencies": {
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-scripts": "^5.0.0",
    "react-error-boundary": "4.0.3"
  },
  "main": "/index.js"
}
```

--------------------------------

### Install React Compiler and ESLint Plugin Beta

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2024/10/21/react-compiler-beta-release.md

Install the beta versions of both React Compiler and its ESLint plugin using npm or Yarn.

```npm
npm install -D babel-plugin-react-compiler@beta eslint-plugin-react-compiler@beta
```

```yarn
yarn add -D babel-plugin-react-compiler@beta eslint-plugin-react-compiler@beta
```

--------------------------------

### Data Fetching Utility (Initial Example)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

Provides a caching mechanism for fetching data, simulating a network delay for posts in the initial example.

```js
// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  if (url.startsWith('/posts')) {
    return await getPosts();
  } else {
    throw Error('Not implemented');
  }
}

async function getPosts() {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  let posts = [];
  for (let i = 0; i < 500; i++) {
    posts.push({
      id: i,
      title: 'Post #' + (i + 1)
    });
  }
  return posts;
}
```

--------------------------------

### Full Example: Theme Context with Provider and Consumer

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useContext.md

This comprehensive example demonstrates creating a `ThemeContext`, providing a default 'dark' value, and consuming it in nested `Panel` and `Button` components, along with associated styling.

```js
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext value="dark">
      <Form />
    </ThemeContext>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
```

```css
.panel-light,
.panel-dark {
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
}
.panel-light {
  color: #222;
  background: #fff;
}

.panel-dark {
  color: #fff;
  background: rgb(23, 32, 42);
}

.button-light,
.button-dark {
  border: 1px solid #777;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
}

.button-dark {
  background: #222;
  color: #fff;
}

.button-light {
  background: #fff;
  color: #222;
}
```

--------------------------------

### Importing useState

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

How to import the useState Hook from React.

```js
import { useState } from 'react';
```

--------------------------------

### Avoid cleanup without setup

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffect.md

An example of cleanup logic without corresponding setup logic, which is considered a code smell.

```js
useEffect(() => {
  // 
 Avoid: Cleanup logic without corresponding setup logic
  return () => {
    doSomething();
  };
}, []);
```

--------------------------------

### Styling for the refresh button example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use.md

Basic CSS to provide layout spacing for the interactive refresh example.

```css
button { margin-bottom: 10px; }
```

--------------------------------

### Full preloading implementation

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use.md

A complete example demonstrating data preloading with use, Suspense, and a caching mechanism.

```js
import { Suspense, useState, useTransition } from 'react';
import Albums from './Albums.js';
import { fetchData } from './data.js';

export default function App() {
  const [artistId, setArtistId] = useState('the-beatles');
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <div>
        {['the-beatles', 'led-zeppelin', 'pink-floyd'].map(id => (
          <button
            key={id}
            onMouseEnter={() => {
              fetchData(`/${id}/albums`);
            }}
            onClick={() => {
              startTransition(() => {
                setArtistId(id);
              });
            }}
          >
            {id === 'the-beatles' ? 'The Beatles' :
             id === 'led-zeppelin' ? 'Led Zeppelin' :
             'Pink Floyd'}
          </button>
        ))}
      </div>
      <Suspense key={artistId} fallback={<Loading />}>
        <Albums artistId={artistId} />
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}
```

```js
import { use } from 'react';
import { fetchData } from './data.js';

export default function Albums({ artistId }) {
  const albums = use(fetchData(`/${artistId}/albums`));
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}
```

```js
// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    const promise = getData(url);
    // Set status fields so React can read the value
    // synchronously if the Promise resolves before
    // `use` is called (e.g. when preloading on hover).
    promise.status = 'pending';
    promise.then(
      value => {
        promise.status = 'fulfilled';
        promise.value = value;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    cache.set(url, promise);
  }
  return cache.get(url);
}

async function getData(url) {
  if (url.startsWith('/the-beatles/albums')) {
    return await getAlbums('the-beatles');
  } else if (url.startsWith('/led-zeppelin/albums')) {
    return await getAlbums('led-zeppelin');
  } else if (url.startsWith('/pink-floyd/albums')) {
    return await getAlbums('pink-floyd');
  } else {
    throw Error('Not implemented');
  }
}

async function getAlbums(artistId) {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 800);
  });

  if (artistId === 'the-beatles') {
    return [{
      id: 13,
      title: 'Let It Be',
      year: 1970
    }, {
      id: 12,
      title: 'Abbey Road',
      year: 1969
    }, {
      id: 11,
      title: 'Yellow Submarine',
      year: 1969
    }];
  } else if (artistId === 'led-zeppelin') {
    return [{
      id: 10,
      title: 'Coda',
      year: 1982
    }, {
      id: 9,
      title: 'In Through the Out Door',
      year: 1979
    }, {
      id: 8,
      title: 'Presence',
      year: 1976
    }];
  } else {
    return [{
      id: 7,
      title: 'The Wall',
      year: 1979
    }, {
      id: 6,
      title: 'Animals',
      year: 1977
    }, {
      id: 5,
      title: 'Wish You Were Here',
      year: 1975
    }];
  }
}
```

```css
button { margin-right: 10px; }
```

--------------------------------

### Component Usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rsc/use-client.md

An example of a component usage.

```js
import MyComponent from './MyComponent';

function App() {
  // This is a usage of a component
  return <MyComponent />;
}
```

--------------------------------

### Babel Plugin React Compiler Setup

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/configuration.md

Initial setup for 'babel-plugin-react-compiler' in 'babel.config.js'.

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'babel-plugin-react-compiler', {
        // compiler options
      }
    ]
  ]
};
```

--------------------------------

### Component Definition

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rsc/use-client.md

An example of a component definition.

```js
// This is a definition of a component
function MyComponent() {
  return <p>My Component</p>
}
```

--------------------------------

### Logger configuration example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/logger.md

An example of how to configure the `logger` option with a `logEvent` function.

```js
{
  logger: {
    logEvent(filename, event) {
      console.log(`[Compiler] ${event.kind}: ${filename}`);
    }
  }
}
```

--------------------------------

### Move state up to MyApp

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

First, *move the state up* from `MyButton` into `MyApp`.

```js
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  // ... we're moving code from here ...
}
```

--------------------------------

### Basic useReducer Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useReducer.md

An example demonstrating how to import and use `useReducer` within a functional component.

```js
import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
```

--------------------------------

### Your own component (Solution)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

An example of a 'Congratulations' component.

```js
export default function Congratulations() {
  return (
    <h1>Good job!</h1>
  );
}
```

--------------------------------

### Implementing React Class Component Lifecycle Methods for Chat Synchronization

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Component.md

This example demonstrates how to use `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to manage a chat connection in a React class component, ensuring proper setup and cleanup based on prop and state changes.

```javascript
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
```

```javascript
import { Component } from 'react';
import { createConnection } from './chat.js';

export default class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  setupConnection() {
    this.connection = createConnection(
      this.state.serverUrl,
      this.props.roomId
    );
    this.connection.connect();
  }

  destroyConnection() {
    this.connection.disconnect();
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={this.state.serverUrl}
            onChange={e => {
              this.setState({
                serverUrl: e.target.value
              });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}
```

```javascript
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

--------------------------------

### Install react-shallow-renderer directly

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2024/04/25/react-19-upgrade-guide.md

Install `react-shallow-renderer` as a direct development dependency to replace the removed `react-test-renderer/shallow`.

```bash
npm install react-shallow-renderer --save-dev
```

--------------------------------

### Complete example using JSX

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/createElement.md

A full working example demonstrating JSX for both HTML elements and custom components, including associated CSS, for comparison with `createElement`.

```js
function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}
```

```css
.greeting {
  color: darkgreen;
  font-family: Georgia;
}
```

--------------------------------

### Focusing an input with createRef

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/createRef.md

A complete example of using `createRef` to get a reference to an input DOM node and focusing it with a button click in a class component.

```js
import { Component, createRef } from 'react';

export default class Form extends Component {
  inputRef = createRef();

  handleClick = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
```

--------------------------------

### `useMemo` Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cache.md

Example demonstrating `useMemo` for caching an expensive computation within a Client Component across renders.

```jsx
'use client';

function WeatherReport({record}) {
  const avgTemp = useMemo(() => calculateAvg(record), record);
  // ...
}

function App() {
  const record = getRecord();
  return (
    <>
      <WeatherReport record={record} />
      <WeatherReport record={record} />
    </>
  );
}
```

--------------------------------

### Reducer example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md

Example of using a reducer with `useOptimistic`.

```js
const [optimistic, dispatch] = useOptimistic(value, (current, action) => {
  // Calculate next state based on current and action
});
dispatch(action);
```

--------------------------------

### Substitution Method Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/state-as-a-snapshot.md

An example demonstrating the substitution method for understanding how state is captured at the time of render for event handlers.

```javascript
<button onClick={() => {
  setWalk(false);
  alert('Stop is next');
}}>
  Change to Stop
</button>
<h1 style={{color: 'darkgreen'}}>
  Walk
</h1>
```

--------------------------------

### FriendList Component Re-rendering Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/introduction.md

An example demonstrating how React components re-render all children by default when state changes, and how React Compiler optimizes this.

```javascript
function FriendList({ friends }) {
  const onlineCount = useFriendOnlineCount();
  if (friends.length === 0) {
    return <NoFriends />;
  }
  return (
    <div>
      <span>{onlineCount} online</span>
      {friends.map((friend) => (
        <FriendListCard key={friend.id} friend={friend} />
      ))}
      <MessageButton />
    </div>
  );
}
```

--------------------------------

### Full example with initializer function

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useReducer.md

A complete interactive example demonstrating the use of an initializer function with `useReducer` to manage a todo list, ensuring the initial state is computed only once.

```js
import TodoList from './TodoList.js';

export default function App() {
  return <TodoList username="Taylor" />;
}
```

```js
import { useReducer } from 'react';

function createInitialState(username) {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1)
    });
  }
  return {
    draft: '',
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'changed_draft': {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    };
    case 'added_todo': {
      return {
        draft: '',
        todos: [{
          id: state.todos.length,
          text: state.draft
        }, ...state.todos]
      }
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export default function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer,
    username,
    createInitialState
  );
  return (
    <>
      <input
        value={state.draft}
        onChange={e => {
          dispatch({
            type: 'changed_draft',
            nextDraft: e.target.value
          })
        }}
      />
      <button onClick={() => {
        dispatch({ type: 'added_todo' });
      }}>Add</button>
      <ul>
        {state.todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
```

--------------------------------

### AboutTab Component (Transition Example)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

A simple React component displaying a welcome message, used within the `useTransition` example.

```js
export default function AboutTab() {
  return (
    <p>Welcome to my profile!</p>
  );
}
```

--------------------------------

### Server Handler Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/static/resumeAndPrerenderToNodeStream.md

An example of how to use `resumeAndPrerenderToNodeStream` in a Node.js handler to continue a prerendered React tree and pipe the prelude to a writable stream.

```js
import { resumeAndPrerenderToNodeStream } from 'react-dom/static';
import { getPostponedState } from 'storage';

async function handler(request, writable) {
  const postponedState = getPostponedState(request);
  const { prelude } = await resumeAndPrerenderToNodeStream(<App />, JSON.parse(postponedState));
  prelude.pipe(writable);
}
```

--------------------------------

### Example Dispatch Calls

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/extracting-state-logic-into-a-reducer.md

Examples of action objects and how to dispatch them for 'changed_selection' and 'edited_message' types.

```js
// When the user presses "Alice"
dispatch({
  type: 'changed_selection',
  contactId: 1,
});

// When user types "Hello!"
dispatch({
  type: 'edited_message',
  message: 'Hello!',
});
```

--------------------------------

### Correctly passing options to createRoot

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/createRoot.md

This example illustrates the correct way to pass options to createRoot() and avoid the common mistake of passing them to root.render().

```js
// 🚩 Wrong: root.render only takes one argument.
root.render(App, {onUncaughtError});

// ✅ Correct: pass options to createRoot.
const root = createRoot(container, {onUncaughtError});
root.render(<App />);
```

--------------------------------

### Install React Compiler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/10/07/react-compiler-1.md

Use one of these package managers to install the React Compiler as a development dependency in your project.

```npm
npm install --save-dev --save-exact babel-plugin-react-compiler@latest
```

```pnpm
pnpm add --save-dev --save-exact babel-plugin-react-compiler@latest
```

```yarn
yarn add --dev --exact babel-plugin-react-compiler@latest
```

--------------------------------

### Basic useActionState Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useActionState.md

An example demonstrating how to call `useActionState` at the top level of a component.

```js
import { useActionState } from 'react';

function reducerAction(previousState, actionPayload) {
  // ...
}

function MyCart({initialState}) {
  const [state, dispatchAction, isPending] = useActionState(reducerAction, initialState);
  // ...
}
```

--------------------------------

### Preloading a font

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preload.md

Example demonstrating how to preload a stylesheet and a font using `preload`.

```js
import { preload } from 'react-dom';

function AppRoot() {
  preload("https://example.com/style.css", {as: "style"});
  preload("https://example.com/font.woff2", {as: "font"});
  return ...;
}
```

--------------------------------

### React Application Entry Point (`src/index.js`)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/04/23/react-labs-view-transitions-activity-and-more.md

Initializes the React application, sets up strict mode, and integrates the main App component with a router.

```js
import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

import App from './App';
import {Router} from './router';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
```

--------------------------------

### Example of Resuming a Prerender

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/resume.md

This example demonstrates how to use `prerender` to initially render a React application, aborting it to postpone certain parts, and then using `resume` to continue rendering from the postponed state. It includes an HTML shell, the main React application, and helper functions for flushing streams and simulating asynchronous operations.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <iframe id="container"></iframe>
</body>
</html>
```

```javascript
import {
  flushReadableStreamToFrame,
  getUser,
  Postponed,
  sleep,
} from "./demo-helpers";
import { StrictMode, Suspense, use, useEffect } from "react";
import { prerender } from "react-dom/static";
import { resume } = "react-dom/server";
import { hydrateRoot } from "react-dom/client";

function Header() {
  return <header>Me and my descendants can be prerendered</header>;
}

const { promise: cookies, resolve: resolveCookies } = Promise.withResolvers();

function Main() {
  const { sessionID } = use(cookies);
  const user = getUser(sessionID);

  useEffect(() => {
    console.log("reached interactivity!");
  }, []);

  return (
    <main>
      Hello, {user.name}!
      <button onClick={() => console.log("hydrated!")}>
        Clicking me requires hydration.
      </button>
    </main>
  );
}

function Shell({ children }) {
  // In a real app, this is where you would put your html and body.
  // We're just using tags here we can include in an existing body for demonstration purposes
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

function App() {
  return (
    <Shell>
      <Suspense fallback="loading header">
        <Header />
      </Suspense>
      <Suspense fallback="loading main">
        <Main />
      </Suspense>
    </Shell>
  );
}

async function main(frame) {
  // Layer 1
  const controller = new AbortController();
  const prerenderedApp = prerender(<App />, {
    signal: controller.signal,
    onError(error) {
      if (error instanceof Postponed) {
      } else {
        console.error(error);
      }
    },
  });
  // We're immediately aborting in a macrotask.
  // Any data fetching that's not available synchronously, or in a microtask, will not have finished.
  setTimeout(() => {
    controller.abort(new Postponed());
  });

  const { prelude, postponed } = await prerenderedApp;
  await flushReadableStreamToFrame(prelude, frame);

  // Layer 2
  // Just waiting here for demonstration purposes.
  // In a real app, the prelude and postponed state would've been serialized in Layer 1 and Layer would deserialize them.
  // The prelude content could be flushed immediated as plain HTML while
  // React is continuing to render from where the prerender left off.
  await sleep(2000);

  // You would get the cookies from the incoming HTTP request
  resolveCookies({ sessionID: "abc" });

  const stream = await resume(<App />, postponed);

  await flushReadableStreamToFrame(stream, frame);

  // Layer 3
  // Just waiting here for demonstration purposes.
  await sleep(2000);

  hydrateRoot(frame.contentWindow.document, <App />);
}

main(document.getElementById("container"));
```

```javascript
export async function flushReadableStreamToFrame(readable, frame) {
  const document = frame.contentWindow.document;
  const decoder = new TextDecoder();
  for await (const chunk of readable) {
    const partialHTML = decoder.decode(chunk);
    document.write(partialHTML);
  }
}

// This doesn't need to be an error.
// You can use any other means to check if an error during prerender was
// from an intentional abort or a real error.
export class Postponed extends Error {}

// We're just hardcoding a session here.
export function getUser(sessionID) {
  return {
    name: "Alice",
  };
}

export function sleep(timeoutMS) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutMS);
  });
}
```

--------------------------------

### `cache` Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cache.md

Example demonstrating `cache` for memoizing work that can be shared across Server Components, particularly for data fetches.

```js
const cachedFetchReport = cache(fetchReport);

function WeatherReport({city}) {
  const report = cachedFetchReport(city);
  // ...
}

function App() {
  const city = "Los Angeles";
  return (
    <>
      <WeatherReport city={city} />
      <WeatherReport city={city} />
    </>
  );
}
```

--------------------------------

### Lifting state up example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/managing-state.md

An example demonstrating how to lift state up to a common parent component to synchronize state between child components.

```js
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
```

```css
h3, p { margin: 5px 0px; }
.panel {
  padding: 10px;
  border: 1px solid #aaa;
}
```

--------------------------------

### State Preservation Example with Activity

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Activity.md

A complete example showing how the Activity component preserves the internal state of a hidden sidebar.

```javascript
import { Activity, useState } from 'react';

import Sidebar from './Sidebar.js';

export default function App() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);

  return (
    <>
      <Activity mode={isShowingSidebar ? 'visible' : 'hidden'}>
        <Sidebar />
      </Activity>

      <main>
        <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
          Toggle sidebar
        </button>
        <h1>Main content</h1>
      </main>
    </>
  );
}
```

```javascript
import { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Overview
        <span className={`indicator ${isExpanded ? 'down' : 'right'}`}>
          &#9650;
        </span>
      </button>

      {isExpanded && (
        <ul>
          <li>Section 1</li>
          <li>Section 2</li>
          <li>Section 3</li>
        </ul>
      )}
    </nav>
  );
}
```

```css
body { height: 275px; margin: 0; }
#root {
  display: flex;
  gap: 10px;
  height: 100%;
}
nav {
  padding: 10px;
  background: #eee;
  font-size: 14px;
  height: 100%;
}
main {
  padding: 10px;
}
p {
  margin: 0;
}
h1 {
  margin-top: 10px;
}
.indicator {
  margin-left: 4px;
  display: inline-block;
  rotate: 90deg;
}
.indicator.down {
  rotate: 180deg;
}
```

--------------------------------

### Valid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/purity.md

Example of correct code for this rule, showing how to get a stable ID using initial state.

```js
// ✅ Stable IDs from initial state
function Component() {
  const [id] = useState(() => crypto.randomUUID());
  return <div key={id}>Content</div>;
}
```

--------------------------------

### Misplaced State Problem Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/preserving-and-resetting-state.md

This example demonstrates the problem where state (like 'Show email' expanded state) gets misplaced when the list order changes because array index is used as a key.

```javascript
import { useState } from 'react';
import Contact from './Contact.js';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) =>
          <li key={i}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
```

```javascript
import { useState } from 'react';

export default function Contact({ contact }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p><b>{contact.name}</b></p>
      {expanded &&
        <p><i>{contact.email}</i></p>
      }
      <button onClick={() => {
        setExpanded(!expanded);
      }}>
        {expanded ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}
```

```css
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 20px;
}
label {
  display: block;
  margin: 10px 0;
}
button {
  margin-right: 10px;
  margin-bottom: 10px;
}
```

--------------------------------

### `memo` Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cache.md

Example demonstrating `memo` to prevent a component from re-rendering if its props are unchanged.

```js
'use client';

function WeatherReport({record}) {
  const avgTemp = calculateAvg(record);
  // ...
}

const MemoWeatherReport = memo(WeatherReport);

function App() {
  const record = getRecord();
  return (
    <>
      <MemoWeatherReport record={record} />
      <MemoWeatherReport record={record} />
    </>
  );
}
```

--------------------------------

### Example with single and multiple selection

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/select.md

This interactive example shows how to manage both a single-selection fruit picker and a multiple-selection vegetable picker using React state.

```js
import { useState } from 'react';

export default function FruitPicker() {
  const [selectedFruit, setSelectedFruit] = useState('orange');
  const [selectedVegs, setSelectedVegs] = useState(['corn', 'tomato']);
  return (
    <>
      <label>
        Pick a fruit:
        <select
          value={selectedFruit}
          onChange={e => setSelectedFruit(e.target.value)}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <hr />
      <label>
        Pick all your favorite vegetables:
        <select
          multiple={true}
          value={selectedVegs}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <p>Your favorite fruit: {selectedFruit}</p>
      <p>Your favorite vegetables: {selectedVegs.join(', ')}</p>
    </>
  );
}
```

```css
select { margin-bottom: 10px; display: block; }
```

--------------------------------

### Updater function example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md

Example of using an updater function with `useOptimistic`.

```js
const [optimistic, setOptimistic] = useOptimistic(value);
setOptimistic(current => !current);
```

--------------------------------

### Install Vite

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/build-a-react-app-from-scratch.md

Command to create a new React TypeScript project using Vite.

```bash
npm create vite@latest my-app -- --template react-ts
```

--------------------------------

### Install React type definitions

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/typescript.md

Command to install the latest version of React's type definitions for TypeScript.

```bash
npm install --save-dev @types/react @types/react-dom
```

--------------------------------

### Complete Controlled Input Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/input.md

A full example demonstrating controlled inputs for first name and age, with UI updates and external control.

```js
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('20');
  const ageAsNumber = Number(age);
  return (
    <>
      <label>
        First name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
        />
        <button onClick={() => setAge(ageAsNumber + 10)}>
          Add 10 years
        </button>
      </label>
      {firstName !== '' &&
        <p>Your name is {firstName}.</p>
      }
      {ageAsNumber > 0 &&
        <p>Your age is {ageAsNumber}.</p>
      }
    </>
  );
}
```

```css
label { display: block; }
input { margin: 5px; }
p { font-weight: bold; }
```

--------------------------------

### Example `gating` configuration

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/gating.md

A basic configuration for the `gating` option.

```js
{
  gating: {
    source: 'my-feature-flags',
    importSpecifierName: 'shouldUseCompiler'
  }
}
```

--------------------------------

### Annotation mode example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives/use-memo.md

Illustrates which functions are optimized in annotation mode.

```js
// ✅ Optimized with "use memo"
function ProductCard({ product }) {
  "use memo";
  // ...
}

// ❌ Not optimized (no directive)
function ProductList({ products }) {
  // ...
}
```

--------------------------------

### Example usage of `resumeAndPrerender`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/static/resumeAndPrerender.md

Demonstrates how to import and use `resumeAndPrerender` within an async handler function to generate an HTML response.

```js
import { resumeAndPrerender } from 'react-dom/static';
import { getPostponedState } from 'storage';

async function handler(request, response) {
  const postponedState = getPostponedState(request);
  const { prelude } = await resumeAndPrerender(<App />, postponedState, {
    bootstrapScripts: ['/main.js']
  });
  return new Response(prelude, {
    headers: { 'content-type': 'text/html' },
  });
}
```

--------------------------------

### Example test using `act`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/act.md

An example of wrapping component rendering inside `act()` before making assertions.

```js
it ('renders with button disabled', async () => {
  await act(async () => {
    root.render(<TestComponent />)
  });
  expect(container.querySelector('button')).toBeDisabled();
});
```

--------------------------------

### Full Example: Tab Navigation with useTransition Pending State (JavaScript/CSS)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

This example shows a complete tab navigation system where `useTransition` is used to display a pending state on tab buttons during slow transitions, improving responsiveness.

```js
import { useState } from 'react';
import TabButton from './TabButton.js';
import AboutTab from './AboutTab.js';
import PostsTab from './PostsTab.js';
import ContactTab from './ContactTab.js';

export default function TabContainer() {
  const [tab, setTab] = useState('about');
  return (
    <>
      <TabButton
        isActive={tab === 'about'}
        action={() => setTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'posts'}
        action={() => setTab('posts')}
      >
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        action={() => setTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}
```

```js
import { useTransition } from 'react';

export default function TabButton({ action, children, isActive }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>
  }
  if (isPending) {
    return <b className="pending">{children}</b>;
  }
  return (
    <button onClick={() => {
      startTransition(async () => {
        await action();
      });
    }}>
      {children}
    </button>
  );
}
```

```js
export default function AboutTab() {
  return (
    <p>Welcome to my profile!</p>
  );
}
```

```js
import { memo } from 'react';

const PostsTab = memo(function PostsTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
});

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

export default PostsTab;
```

```js
export default function ContactTab() {
  return (
    <>
      <p>
        You can find me online here:
      </p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}
```

```css
button { margin-right: 10px }
b { display: inline-block; margin-right: 10px; }
.pending { color: #777; }
.items {
  max-height: 300px;
  overflow: auto;
}
```

--------------------------------

### Preconnecting in an event handler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preconnect.md

Call `preconnect` in an event handler before transitioning to a page or state where external resources will be needed. This gets the process started earlier than if you call it during the rendering of the new page or state.

```js
import { preconnect } from 'react-dom';

function CallToAction() {
  const onClick = () => {
    preconnect('http://example.com');
    startWizard();
  }
  return (
    <button onClick={onClick}>Start Wizard</button>
  );
}
```

--------------------------------

### React Component Composition Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

Example of how React components can be composed, ordered, and nested to design whole pages, mimicking the structure of the documentation page itself.

```js
<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>
```

--------------------------------

### Basic useLayoutEffect syntax

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useLayoutEffect.md

This shows the basic syntax for calling `useLayoutEffect` with a setup function and optional dependencies.

```js
useLayoutEffect(setup, dependencies?)
```

--------------------------------

### Preloading an image

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preload.md

Example demonstrating how to preload an image, including responsive image options like `imageSrcSet` and `imageSizes`.

```js
import { preload } from 'react-dom';

function AppRoot() {
  preload("/banner.png", {
    as: "image",
    imageSrcSet: "/banner512.png 512w, /banner1024.png 1024w",
    imageSizes: "(max-width: 512px) 512px, 1024px"
  });
  return ...;
}
```

--------------------------------

### Your own component (Starter)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

An empty sandbox to write your own component from scratch.

```js
// Write your component below!


```

--------------------------------

### Derived constants from status

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/choosing-the-state-structure.md

Example of how to derive boolean flags like `isSending` and `isSent` from a single `status` state variable for readability, without introducing new state variables that could get out of sync.

```javascript
const isSending = status === 'sending';
const isSent = status === 'sent';
```

--------------------------------

### Initial Component Setup

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/manipulating-the-dom-with-refs.md

The initial structure of the App, SearchButton, and SearchInput components before implementing the focus functionality.

```javascript
import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

export default function Page() {
  return (
    <>
      <nav>
        <SearchButton />
      </nav>
      <SearchInput />
    </>
  );
}
```

```javascript
export default function SearchButton() {
  return (
    <button>
      Search
    </button>
  );
}
```

```javascript
export default function SearchInput() {
  return (
    <input
      placeholder="Looking for something?"
    />
  );
}
```

```css
button { display: block; margin-bottom: 10px; }
```

--------------------------------

### Configuring compilationMode

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives/use-memo.md

Example babel.config.js showing how to set compilationMode.

```js
// babel.config.js
module.exports = {
  plugins: [
    ['babel-plugin-react-compiler', {
      compilationMode: 'annotation' // or 'infer' or 'all'
    }]
  ]
};
```

--------------------------------

### Before React Compiler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/introduction.md

Example of manually memoizing components and values to optimize re-renders without React Compiler.

```js
import { useMemo, useCallback, memo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data, onClick }) {
  const processedData = useMemo(() => {
    return expensiveProcessing(data);
  }, [data]);

  const handleClick = useCallback((item) => {
    onClick(item.id);
  }, [onClick]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
});
```

--------------------------------

### Resetting state with a key

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useState.md

You can reset a component's state by passing a different `key` to a component. In this example, the Reset button changes the `version` state variable, which we pass as a `key` to the `Form`. When the `key` changes, React re-creates the `Form` component (and all of its children) from scratch, so its state gets reset.

```js
import { useState } from 'react';

export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
    </>
  );
}
```

```css
button { display: block; margin-bottom: 20px; }
```

--------------------------------

### Install eslint-plugin-react-hooks

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/10/07/react-compiler-1.md

Install the latest version of `eslint-plugin-react-hooks` using your preferred package manager to enable compiler-powered linting rules.

```npm
npm install --save-dev eslint-plugin-react-hooks@latest
```

```pnpm
pnpm add --save-dev eslint-plugin-react-hooks@latest
```

```yarn
yarn add --dev eslint-plugin-react-hooks@latest
```

--------------------------------

### HTML UI Building Blocks

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

Example of traditional HTML markup for a structured document.

```html
<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>
```

--------------------------------

### Multiple components with independent state

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Demonstrates how multiple instances of the same component each maintain their own independent state.

```js
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

```css
button {
  display: block;
  margin-bottom: 5px;
}
```

--------------------------------

### State Loss Example with Conditional Rendering

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Activity.md

A complete example demonstrating how unmounting a component via conditional rendering destroys its internal state.

```javascript
import { useState } from 'react';
import Sidebar from './Sidebar.js';

export default function App() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);

  return (
    <>
      {isShowingSidebar && (
        <Sidebar />
      )}

      <main>
        <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
          Toggle sidebar
        </button>
        <h1>Main content</h1>
      </main>
    </>
  );
}
```

```javascript
import { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Overview
        <span className={`indicator ${isExpanded ? 'down' : 'right'}`}>
          &#9650;
        </span>
      </button>

      {isExpanded && (
        <ul>
          <li>Section 1</li>
          <li>Section 2</li>
          <li>Section 3</li>
        </ul>
      )}
    </nav>
  );
}
```

```css
body { height: 275px; margin: 0; }
#root {
  display: flex;
  gap: 10px;
  height: 100%;
}
nav {
  padding: 10px;
  background: #eee;
  font-size: 14px;
  height: 100%;
}
main {
  padding: 10px;
}
p {
  margin: 0;
}
h1 {
  margin-top: 10px;
}
.indicator {
  margin-left: 4px;
  display: inline-block;
  rotate: 90deg;
}
.indicator.down {
  rotate: 180deg;
}
```

--------------------------------

### Install React 19 and React DOM with npm

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2024/04/25/react-19-upgrade-guide.md

Use this command to install React 19 and React DOM 19 using npm, ensuring exact version matching for stability.

```bash
npm install --save-exact react@^19.0.0 react-dom@^19.0.0
```

--------------------------------

### Install React 18 using yarn

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2022/03/08/react-18-upgrade-guide.md

Use this command to install React 18 and React DOM into your project via yarn.

```bash
yarn add react react-dom
```

--------------------------------

### Running locally

Source: https://github.com/reactjs/react.dev/blob/main/README.md

Commands to start the development server and open the site in a browser.

```shell
yarn dev
```

```shell
open http://localhost:3000
```

--------------------------------

### Install React 18 using npm

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2022/03/08/react-18-upgrade-guide.md

Use this command to install React 18 and React DOM into your project via npm.

```bash
npm install react react-dom
```

--------------------------------

### Full Example with Context Usage (Incomplete)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/passing-data-deeply-with-context.md

A complete example demonstrating the current state of using context, showing that it doesn't yet work as expected because context is not provided.

```js
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
```

```js
export default function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}
```

```js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
```

```js
import { createContext } from 'react';

export const LevelContext = createContext(1);
```

```css
.section {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #aaa;
}
```

--------------------------------

### Full Example: Task App with Reducer and Context

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/scaling-up-with-reducer-and-context.md

A complete example demonstrating how to manage tasks using `useReducer` and `Context` in a React application, including adding, changing, and deleting tasks.

```js
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksContext, TasksDispatchContext } from './TasksContext.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask
          onAddTask={handleAddTask}
        />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </TasksDispatchContext>
    </TasksContext>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
```

```js
import { createContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
```

```js
import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}
```

```js
import { useState } from 'react';

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
}
```

```css
button { margin: 5px; }
li { list-style-type: none; }
ul, li { margin: 0; padding: 0; }
```

--------------------------------

### Complete example with useList Hook

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cloneElement.md

A full interactive example demonstrating the `useList` custom Hook, an `App` component, `Row` component, data, and CSS.

```javascript
import Row from './Row.js';
import useList from './useList.js';
import { products } from './data.js';

export default function App() {
  const [selected, onNext] = useList(products);
  return (
    <div className="List">
      {products.map(product =>
        <Row
          key={product.id}
          title={product.title}
          isHighlighted={selected === product}
        />
      )}
      <hr />
      <button onClick={onNext}>
        Next
      </button>
    </div>
  );
}
```

```javascript
import { useState } from 'react';

export default function useList(items) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onNext() {
    setSelectedIndex(i =>
      (i + 1) % items.length
    );
  }

  const selected = items[selectedIndex];
  return [selected, onNext];
}
```

```javascript
export default function Row({ title, isHighlighted }) {
  return (
    <div className={[
      'Row',
      isHighlighted ? 'RowHighlighted' : ''
    ].join(' ')}>
      {title}
    </div>
  );
}
```

```javascript
export const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

```css
.List {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}

.RowHighlighted {
  background: #ffa;
}

button {
  height: 40px;
  font-size: 20px;
}
```

--------------------------------

### Complete example of using an imperative handle

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/forwardRef.md

An example demonstrating how a parent component interacts with a child component that exposes an imperative handle, including the child component's implementation and basic styling.

```js
import { useRef } from 'react';
import MyInput from './MyInput.js';

export default function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
```

```js
import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      }
    };
  }, []);

  return <input {...props} ref={inputRef} />;
});

export default MyInput;
```

```css
input {
  margin: 5px;
}
```

--------------------------------

### Initial Render with createRoot

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/render-and-commit.md

This example shows how to perform the initial render of a React component by calling createRoot and its render method.

```javascript
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);
```

```javascript
export default function Image() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
```

--------------------------------

### Markdown Editor Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/textarea.md

An interactive example of a controlled textarea used in a Markdown editor.

```js
import { useState } from 'react';
import MarkdownPreview from './MarkdownPreview.js';

export default function MarkdownEditor() {
  const [postContent, setPostContent] = useState('_Hello,_ **Markdown**!');
  return (
    <>
      <label>
        Enter some markdown:
        <textarea
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
        />
      </label>
      <hr />
      <MarkdownPreview markdown={postContent} />
    </>
  );
}
```

--------------------------------

### Basic `preinitModule` usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preinitModule.md

Example showing how to eagerly fetch and evaluate an ESM module.

```js
preinitModule("https://example.com/module.js", {as: "script"});
```

--------------------------------

### Owner Stack vs. Component Stack Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/captureOwnerStack.md

An example demonstrating the difference between `errorInfo.componentStack` and `captureOwnerStack()` when an error occurs, showing how each stack is constructed.

```javascript
import {Suspense} from 'react';

function SubComponent({disabled}) {
  if (disabled) {
    throw new Error('disabled');
  }
}

export function Component({label}) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <SubComponent key={label} disabled={label === 'disabled'} />
    </fieldset>
  );
}

function Navigation() {
  return null;
}

export default function App({children}) {
  return (
    <Suspense fallback="loading...">
      <main>
        <Navigation />
        {children}
      </main>
    </Suspense>
  );
}
```

```javascript
import {captureOwnerStack} from 'react';
import {createRoot} from 'react-dom/client';
import App, {Component} from './App.js';
import './styles.css';

createRoot(document.createElement('div'), {
  onUncaughtError: (error, errorInfo) => {
    // The stacks are logged instead of showing them in the UI directly to
    // highlight that browsers will apply sourcemaps to the logged stacks.
    // Note that sourcemapping is only applied in the real browser console not
    // in the fake one displayed on this page.
    // Press "fork" to be able to view the sourcemapped stack in a real console.
    console.log(errorInfo.componentStack);
    console.log(captureOwnerStack());
  }
}).render(
  <App>
    <Component label="disabled" />
  </App>
);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>Check the console output.</p>
  </body>
</html>
```

--------------------------------

### Pure component example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

An example of a pure component that receives its data through props, ensuring it minds its own business and produces the same output for the same inputs.

```js
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

--------------------------------

### Creating a simple button component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

React components are JavaScript functions that return markup.

```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

--------------------------------

### src/style.css

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rsc/use-client.md

CSS styles for the components.

```css
.fancy {
  font-family: 'Georgia';
}
.title {
  color: #007AA3;
  text-decoration: underline;
}
.cursive {
  font-style: italic;
}
.small {
  font-size: 10px;
}
```

--------------------------------

### Styling for Theme Context Example (CSS)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useContext.md

CSS styles for the themed panels and buttons used in the React context example, defining 'light' and 'dark' visual themes.

```css
.panel-light,
.panel-dark {
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
}
.panel-light {
  color: #222;
  background: #fff;
}

.panel-dark {
  color: #fff;
  background: rgb(23, 32, 42);
}

.button-light,
.button-dark {
  border: 1px solid #777;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
}

.button-dark {
  background: #222;
  color: #fff;
}

.button-light {
  background: #fff;
  color: #222;
}
```

--------------------------------

### Styling for IntersectionObserver Example (CSS)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Fragment.md

Provides basic styling for the page, filler sections, and card components used in the `IntersectionObserver` example.

```css
.page {
  transition: background 0.3s;
}

.filler {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 14px;
}

.card {
  padding: 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 0 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  font-weight: 600;
  font-size: 14px;
}

.card.green {
  border-left: 3px solid #28a745;
}

.card.blue {
  border-left: 3px solid #007bff;
}
```

--------------------------------

### Install React Compiler ESLint Plugin Beta Only

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2024/10/21/react-compiler-beta-release.md

Install only the beta version of the React Compiler ESLint plugin to proactively identify Rules of React violations, even without the compiler.

```npm
npm install -D eslint-plugin-react-compiler@beta
```

```yarn
yarn add -D eslint-plugin-react-compiler@beta
```

--------------------------------

### Full Markdown Editor Example with Lazy Loading

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/lazy.md

An interactive example demonstrating lazy loading of a Markdown preview component with a loading state.

```js
import { useState, Suspense, lazy } from 'react';
import Loading from './Loading.js';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, **world**!');
  return (
    <>
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
      <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
```

```js
export default function Loading() {
  return <p><i>Loading...</i></p>;
}
```

```js
import { Remarkable } from 'remarkable';

const md = new Remarkable();

export default function MarkdownPreview({ markdown }) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{__html: md.render(markdown)}}
    />
  );
}
```

```json
{
  "dependencies": {
    "immer": "1.7.3",
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "remarkable": "2.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

```css
label {
  display: block;
}

input, textarea {
  margin-bottom: 10px;
}

body {
  min-height: 200px;
}
```

--------------------------------

### App component with Suspense and Transition

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Suspense.md

Full example demonstrating Suspense and startTransition for non-urgent state updates.

```js
import { Suspense, startTransition, useState } from 'react';
import IndexPage from './IndexPage.js';
import ArtistPage from './ArtistPage.js';
import Layout from './Layout.js';

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}

function Router() {
  const [page, setPage] = useState('/');

  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === '/') {
    content = (
      <IndexPage navigate={navigate} />
    );
  } else if (page === '/the-beatles') {
    content = (
      <ArtistPage
        artist={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}
      />
    );
  }
  return (
    <Layout>
      {content}
    </Layout>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
```

--------------------------------

### Complete example with custom external store

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useSyncExternalStore.md

A comprehensive example showing a TodosApp component using useSyncExternalStore to interact with a custom todosStore.js external store, including adding new items and subscribing to changes.

```javascript
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

export default function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
```

```javascript
// This is an example of a third-party store
// that you might need to integrate with React.

// If your app is fully built with React,
// we recommend using React state instead.

let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }];
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
```

--------------------------------

### Sandpack example for createPortal

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/createPortal.md

An interactive example showing a React component using `createPortal` to render a paragraph into the `document.body`, visually escaping its parent container.

```js
import { createPortal } from 'react-dom';

export default function MyComponent() {
  return (
    <div style={{ border: '2px solid black' }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}
```

--------------------------------

### Skipping re-rendering with useMemo and memo Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

This example shows a component (`List`) that is artificially slowed down. It demonstrates how `useMemo` and `memo` can prevent unnecessary re-renders, making theme toggling fast, while tab switching (which requires re-rendering) remains slow.

```js
import { useState } from 'react';
import { createTodos } from './utils.js';
import TodoList from './TodoList.js';

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
```

```js
import { useMemo } from 'react';
import List from './List.js';
import { filterTodos } from './utils.js'

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  return (
    <div className={theme}>
      <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
      <List items={visibleTodos} />
    </div>
  );
}
```

```js
import { memo } from 'react';

const List = memo(function List({ items }) {
  console.log('[ARTIFICIALLY SLOW] Rendering <List /> with ' + items.length + ' items');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.completed ?
            <s>{item.text}</s> :
            item.text
          }
        </li>
      ))}
    </ul>
  );
});

export default List;
```

```js
export function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5
    });
  }
  return todos;
}

export function filterTodos(todos, tab) {
  return todos.filter(todo => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !todo.completed;
    } else if (tab === 'completed') {
      return todo.completed;
    }
  });
}
```

```css
label {
  display: block;
  margin-top: 10px;
}

.dark {
  background-color: black;
  color: white;
}

.light {
  background-color: white;
  color: black;
}
```

--------------------------------

### Install React 19 and React DOM with Yarn

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2024/04/25/react-19-upgrade-guide.md

Use this command to install React 19 and React DOM 19 using Yarn, ensuring exact version matching for stability.

```bash
yarn add --exact react@^19.0.0 react-dom@^19.0.0
```

--------------------------------

### Conditional rendering with logical `&&` operator

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Using the logical `&&` syntax when the `else` branch is not needed.

```js
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

--------------------------------

### Example Component with State

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/adding-interactivity.md

This example demonstrates how to use the `useState` hook to manage a counter that increments when a button is clicked.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}
```

--------------------------------

### Full example using Context for highlighting

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cloneElement.md

A complete interactive example demonstrating how List and Row components coordinate highlighting logic through React Context, avoiding direct prop drilling for highlighting state.

```js
import List from './List.js';
import Row from './Row.js';
import { products } from './data.js';

export default function App() {
  return (
    <List
      items={products}
      renderItem={(product) =>
        <Row title={product.title} />
      }
    />
  );
}
```

```js
import { useState } from 'react';
import { HighlightContext } from './HighlightContext.js';

export default function List({ items, renderItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return (
          <HighlightContext
            key={item.id}
            value={isHighlighted}
          >
            {renderItem(item)}
          </HighlightContext>
        );
      })}
      <hr />
      <button onClick={() => {
        setSelectedIndex(i =>
          (i + 1) % items.length
        );
      }}>
        Next
      </button>
    </div>
  );
}
```

```js
import { useContext } from 'react';
import { HighlightContext } from './HighlightContext.js';

export default function Row({ title }) {
  const isHighlighted = useContext(HighlightContext);
  return (
    <div className={[
      'Row',
      isHighlighted ? 'RowHighlighted' : ''
    ].join(' ')}>
      {title}
    </div>
  );
}
```

```js
import { createContext } from 'react';

export const HighlightContext = createContext(false);
```

```js
export const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

```css
.List {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}

.RowHighlighted {
  background: #ffa;
}

button {
  height: 40px;
  font-size: 20px;
}
```

--------------------------------

### Reducer case example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/extracting-state-logic-into-a-reducer.md

An example of a reducer case showing how to infer the action object shape.

```js
case 'changed_selection': {
  return {
    ...state,
    selectedId: action.contactId
  };
}
```

--------------------------------

### Nesting components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Nest the MyButton component into another component, MyApp.

```js
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

--------------------------------

### Inefficient Re-rendering Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/input.md

An example where a controlled input causes unnecessary re-renders of a large component tree.

```js
function App() {
  const [firstName, setFirstName] = useState('');
  return (
    <>
      <form>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </form>
      <PageContent />
    </>
  );
}
```

--------------------------------

### Preiniting a stylesheet

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preinit.md

Example of preiniting an external CSS file with a specified precedence when rendering a component.

```js
import { preinit } from 'react-dom';

function AppRoot() {
  preinit("https://example.com/style.css", {as: "style", precedence: "medium"});
  return ...;
}
```

--------------------------------

### Best practices - Good example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives/use-no-memo.md

Always document why you're disabling optimization.

```js
// ✅ Good - clear explanation and tracking
function DataProcessor() {
  "use no memo"; // TODO: Remove after fixing rule of react violation
  // ...
}
```

--------------------------------

### Context Hook Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/hooks.md

Example demonstrating the use of useContext to read a context value.

```js
function Button() {
  const theme = useContext(ThemeContext);
  // ...

```

--------------------------------

### Install React Compiler Runtime

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/compiling-libraries.md

Command to install the React Compiler runtime package as a direct dependency for older React versions.

```bash
npm install react-compiler-runtime@latest
```

--------------------------------

### useReducer Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/typescript.md

A complete example demonstrating the use of useReducer with TypeScript, including state interface, action types, and reducer function.

```tsx
import {useReducer} from 'react';

interface State {
   count: number
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

```

--------------------------------

### Render a React component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/add-react-to-an-existing-project.md

Example demonstrating how to clear existing HTML content and render a basic 'Hello, world' React component using createRoot.

```html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <!-- Your existing page content (in this example, it gets replaced) -->
    <div id="root"></div>
  </body>
</html>
```

```javascript
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
```

--------------------------------

### After React Compiler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/introduction.md

Example of the same component without manual memoization, relying on React Compiler for optimization.

```js
function ExpensiveComponent({ data, onClick }) {
  const processedData = expensiveProcessing(data);

  const handleClick = (item) => {
    onClick(item.id);
  };

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
}
```

--------------------------------

### Complete example of rendering into a non-React DOM node

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/createPortal.md

A full example demonstrating how to integrate React components into a Leaflet map widget's popup using `createPortal`.

```json
{
  "dependencies": {
    "leaflet": "1.9.1",
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "remarkable": "2.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

```js
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createMapWidget, addPopupToMapWidget } from './map-widget.js';

export default function Map() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [popupContainer, setPopupContainer] = useState(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current);
      mapRef.current = map;
      const popupDiv = addPopupToMapWidget(map);
      setPopupContainer(popupDiv);
    }
  }, []);

  return (
    <div style={{ width: 250, height: 250 }} ref={containerRef}>
      {popupContainer !== null && createPortal(
        <p>Hello from React!</p>,
        popupContainer
      )}
    </div>
  );
}
```

```js
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export function createMapWidget(containerDomNode) {
  const map = L.map(containerDomNode);
  map.setView([0, 0], 0);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  return map;
}

export function addPopupToMapWidget(map) {
  const popupDiv = document.createElement('div');
  L.popup()
    .setLatLng([0, 0])
    .setContent(popupDiv)
    .openOn(map);
  return popupDiv;
}
```

```css
button { margin: 5px; }
```

--------------------------------

### Complete filtering and rendering example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/rendering-lists.md

A full example demonstrating how to filter an array and render the results in a React component, including data and utility functions.

```js
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

```js
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];
```

```js
export function getImageUrl(person) {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    's.jpg'
  );
}
```

```css
ul { list-style-type: none; padding: 0px 10px; }
li {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
}
img { width: 100px; height: 100px; border-radius: 50%; }
```

--------------------------------

### Basic useImperativeHandle example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useImperativeHandle.md

Basic example of calling `useImperativeHandle` at the top level of a component to customize the ref handle.

```js
import { useImperativeHandle } from 'react';

function MyInput({ ref }) {
  useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
    };
  }, []);
  // ...
```

--------------------------------

### Example demonstrating useMemo for skipping recalculations

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

This example shows how `useMemo` prevents re-execution of a slow function when its dependencies haven't changed, improving UI responsiveness. It includes an artificially slowed-down `filterTodos` function to highlight the performance benefits.

```js
import { useState } from 'react';
import { createTodos } from './utils.js';
import TodoList from './TodoList.js';

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
```

```js
import { useMemo } from 'react';
import { filterTodos } from './utils.js'

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  return (
    <div className={theme}>
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
```

```js
export function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5
    });
  }
  return todos;
}

export function filterTodos(todos, tab) {
  console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter(todo => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !todo.completed;
    } else if (tab === 'completed') {
      return todo.completed;
    }
  });
}
```

```css
label {
  display: block;
  margin-top: 10px;
}

.dark {
  background-color: black;
  color: white;
}

.light {
  background-color: white;
  color: black;
}
```

--------------------------------

### Performance Hook Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/hooks.md

Example demonstrating the use of useMemo to cache the result of an expensive calculation.

```js
function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}

```

--------------------------------

### `reducerAction` function example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useActionState.md

An example of an asynchronous `reducerAction` function that performs a side effect (posting data) and returns a new state.

```js
async function reducerAction(previousState, actionPayload) {
  const newState = await post(actionPayload);
  return newState;
}
```

--------------------------------

### Interactive ViewTransition enter and exit example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/ViewTransition.md

A complete example showing a toggle button that triggers a ViewTransition for a video component. It includes the component logic, styles, and data configuration.

```js
function Thumbnail({video, children}) {
  return (
    <div
      aria-hidden="true"
      tabIndex={-1}
      className={`thumbnail ${video.image}`}
    />
  );
}

export function Video({video}) {
  return (
    <div className="video">
      <div className="link">
        <Thumbnail video={video}></Thumbnail>
        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}
```

```js
import {ViewTransition, useState, startTransition} from 'react';
import {Video} from './Video';
import videos from './data';

function Item() {
  return (
    <ViewTransition enter="auto" exit="auto" default="none">
      <Video video={videos[0]} />
    </ViewTransition>
  );
}

export default function Component() {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setShowItem((prev) => !prev);
          });
        }}>
        {showItem ? '➖' : '➕'}
      </button>

      {showItem ? <Item /> : null}
    </>
  );
}
```

```js
export default [
  {
    id: '1',
    title: 'First video',
    description: 'Video description',
    image: 'blue',
  },
];
```

```css
#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
}
button {
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
}
button:hover {
  border: 2px solid #ccc;
  background-color: #e0e8ff;
}
.thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  outline-offset: 2px;
  width: 8rem;
  vertical-align: middle;
  background-color: #ffffff;
  background-size: cover;
  user-select: none;
}
.thumbnail.blue {
  background-image: conic-gradient(at top right, #c76a15, #087ea4, #2b3491);
}
.video {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1em;
}
.video .link {
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  gap: 0.125rem;
  outline-offset: 4px;
  cursor: pointer;
}
.video .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  gap: 0.125rem;
}
.video .info:hover {
  text-decoration: underline;
}
.video-title {
  font-size: 15px;
  line-height: 1.25;
  font-weight: 700;
  color: #23272f;
}
.video-description {
  color: #5e687e;
  font-size: 13px;
}
```

```json
{
  "dependencies": {
    "react": "canary",
    "react-dom": "canary",
    "react-scripts": "latest"
  }
}
```

--------------------------------

### Babel Configuration

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/compiling-libraries.md

Example Babel configuration to enable React Compiler.

```js
// babel.config.js
module.exports = {
  plugins: [
    'babel-plugin-react-compiler',
  ],
  // ... other config
};
```

--------------------------------

### Complete `useId` example with multiple instances

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useId.md

A full example showing how `useId` prevents ID clashes when a component is rendered multiple times on the same page, including basic styling.

```js
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}
```

```css
input { margin: 5px; }
```

--------------------------------

### Basic preload usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preload.md

An example of using `preload` to fetch a font resource.

```js
preload("https://example.com/font.woff2", {as: "font"});
```

--------------------------------

### Importing and calling createContext

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/createContext.md

Example of importing `createContext` and calling it with a default value.

```js
import { createContext } from 'react';

const ThemeContext = createContext('light');
```

--------------------------------

### Effect Hook Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/hooks.md

Example demonstrating the use of useEffect to connect to an external system and clean up.

```js
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...

```

--------------------------------

### Applying CSS classes

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Specifying a CSS class with className in JSX.

```js
<img className="avatar" />
```

--------------------------------

### Basic Usage Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/experimental_taintUniqueValue.md

An example demonstrating how to use `experimental_taintUniqueValue` to prevent a secret key from being passed to a Client Component.

```js
import {experimental_taintUniqueValue} from 'react';

experimental_taintUniqueValue(
  'Do not pass secret keys to the client.',
  process,
  process.env.SECRET_KEY
);
```

--------------------------------

### Rendering a modal dialog with a portal example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/createPortal.md

This example demonstrates how to use `createPortal` to render a modal dialog that is unaffected by parent container styles like `overflow: hidden`.

```javascript
import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';

export default function App() {
  return (
    <>
      <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}
```

```javascript
import { useState } from 'react';
import ModalContent from './ModalContent.js';

export default function NoPortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal without a portal
      </button>
      {showModal && (
        <ModalContent onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
```

```javascript
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
```

```javascript
export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```

```css
.clipping-container {
  position: relative;
  border: 1px solid #aaa;
  margin-bottom: 12px;
  padding: 12px;
  width: 250px;
  height: 80px;
  overflow: hidden;
}

.modal {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position:  absolute;
  width: 250px;
  top: 70px;
  left: calc(50% - 125px);
  bottom: 70px;
}
```

--------------------------------

### Shopping List Component with Conditional Styling

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

A complete React component demonstrating list rendering with `map()`, unique `key` attributes, and conditional styling based on product properties.

```js
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

--------------------------------

### Basic target configuration

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/target.md

Example of setting the `target` option in the compiler configuration.

```javascript
{  target: '19' // or '18', '17'}
```

--------------------------------

### Install React Compiler ESLint Plugin

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/installation.md

Install the ESLint plugin for React Hooks, which includes rules to identify code that cannot be optimized by the React Compiler.

```bash
npm install -D eslint-plugin-react-hooks@latest
```

--------------------------------

### App Component for ChatRoom Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Component.md

An `App` component demonstrating how a `ChatRoom` component (which uses lifecycle methods) might be rendered and controlled.

```js
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
```

--------------------------------

### Basic <option> usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/option.md

An example of rendering options inside a select box.

```js
<select>
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>
```

--------------------------------

### Checkout example with useActionState

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useActionState.md

An interactive example showing `useActionState` in a checkout component to add items to a cart, manage pending states, and display totals.

```js
import { useActionState, startTransition } from 'react';
import { addToCart } from './api';
import Total from './Total';

export default function Checkout() {
  const [count, dispatchAction, isPending] = useActionState(async (prevCount) => {
    return await addToCart(prevCount)
  }, 0);

  function handleClick() {
    startTransition(() => {
      dispatchAction();
    });
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="row">
        <span>Eras Tour Tickets</span>
        <span>Qty: {count}</span>
      </div>
      <div className="row">
        <button onClick={handleClick}>Add Ticket{isPending ? ' 🌀' : '  '}</button>
      </div>
      <hr />
      <Total quantity={count} />
    </div>
  );
}
```

```js
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export default function Total({quantity}) {
  return (
    <div className="row total">
      <span>Total</span>
      <span>{formatter.format(quantity * 9999)}</span>
    </div>
  );
}
```

```js
export async function addToCart(count) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return count + 1;
}

export async function removeFromCart(count) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return Math.max(0, count - 1);
}
```

```css
.checkout {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: system-ui;
}

.checkout h2 {
  margin: 0 0 8px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row button {
  margin-left: auto;
  min-width: 150px;
}

.total {
  font-weight: bold;
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 4px 0;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}
```

--------------------------------

### Interactive example of `memo` with state changes

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/memo.md

An interactive example showing how `memo` prevents re-renders for unchanged props, but allows re-renders when its own props change.

```javascript
import { memo, useState } from 'react';

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
});
```

```css
label {
  display: block;
  margin-bottom: 16px;
}
```

--------------------------------

### Effect Body: Start Synchronizing

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/lifecycle-of-reactive-effects.md

The part of the Effect's body that specifies how to start synchronizing.

```js
    // ...
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
    // ...
```

--------------------------------

### Check for Duplicate React Installations

Source: https://github.com/reactjs/react.dev/blob/main/src/content/warnings/invalid-hook-call-warning.md

Use this command in your project directory to list all installed React packages and identify potential duplicates causing Hook issues.

```bash
npm ls react
```

--------------------------------

### Exporting and importing components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/importing-and-exporting-components.md

Example showing how to move `Gallery` and `Profile` components into a separate `Gallery.js` file and import `Gallery` into `App.js`.

```javascript
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

```javascript
function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

--------------------------------

### Feature Flag Module Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/gating.md

An example of a feature flag module (`src/utils/feature-flags.js`) that exports a function to determine if the compiler should be used.

```js
// src/utils/feature-flags.js
export function shouldUseCompiler() {
  // your logic here
  return getFeatureFlag('react-compiler-enabled');
}
```

--------------------------------

### Create New Vite App with React Compiler Template

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/10/07/react-compiler-1.md

Initialize a new Vite project. Users can choose a compiler-enabled template during the setup process.

```shell
npm create vite@latest
```

--------------------------------

### Interactive `List` and `Row` example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cloneElement.md

A complete interactive example demonstrating a `List` component cloning `Row` children to highlight the selected item.

```javascript
import List from './List.js';
import Row from './Row.js';
import { products } from './data.js';

export default function App() {
  return (
    <List>
      {products.map(product =>
        <Row
          key={product.id}
          title={product.title}
        />
      )}
    </List>
  );
}
```

```javascript
import { Children, cloneElement, useState } from 'react';

export default function List({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isHighlighted: index === selectedIndex
        })
      )}
      <hr />
      <button onClick={() => {
        setSelectedIndex(i =>
          (i + 1) % Children.count(children)
        );
      }}>
        Next
      </button>
    </div>
  );
}
```

```javascript
export default function Row({ title, isHighlighted }) {
  return (
    <div className={[
      'Row',
      isHighlighted ? 'RowHighlighted' : ''
    ].join(' ')}>
      {title}
    </div>
  );
}
```

```javascript
export const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

```css
.List {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}

.RowHighlighted {
  background: #ffa;
}

button {
  height: 40px;
  font-size: 20px;
}
```

--------------------------------

### Define a Video component for transition examples

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/ViewTransition.md

A simple UI component used to demonstrate view transitions.

```javascript
function Thumbnail({video, children}) {
  return (
    <div
      aria-hidden="true"
      tabIndex={-1}
      className={`thumbnail ${video.image}`}
    />
  );
}

export function Video({video}) {
  return (
    <div className="video">
      <div className="link">
        <Thumbnail video={video}></Thumbnail>

        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}
```

--------------------------------

### Basic `preinit` usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preinit.md

Eagerly fetch and evaluate a script.

```js
preinit("https://example.com/script.js", {as: "script"});
```

--------------------------------

### Install vite-plugin-babel for React Router Integration

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/installation.md

Install `vite-plugin-babel` to enable Babel plugin support, including React Compiler, in a Vite project using React Router.

```bash
npm install vite-plugin-babel
```

--------------------------------

### Your first component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

A `Gallery` component rendering three `Profile` components.

```js
function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

--------------------------------

### Ref Hook Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/hooks.md

Example demonstrating the use of useRef to declare a ref, typically for a DOM node.

```js
function Form() {
  const inputRef = useRef(null);
  // ...

```

--------------------------------

### Rendering a full React app

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/createRoot.md

Initial setup for a React application, creating a root and rendering the main App component.

```js
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

--------------------------------

### Install Babel Plugin for Vite with @rolldown/plugin-babel

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/installation.md

Install `@rolldown/plugin-babel` as a development dependency to integrate Babel plugins, including React Compiler, into a Vite project.

```bash
npm install -D @rolldown/plugin-babel
```

--------------------------------

### Interactive example: Wrapping children with RowList

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Children.md

A complete, interactive example demonstrating the `RowList` component using `Children.map` to wrap its children, along with the parent `App` component and associated CSS.

```js
import RowList from './RowList.js';

export default function App() {
  return (
    <RowList>
      <p>This is the first item.</p>
      <p>This is the second item.</p>
      <p>This is the third item.</p>
    </RowList>
  );
}
```

```js
import { Children } from 'react';

export default function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

--------------------------------

### State Hook Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/hooks.md

Example demonstrating the use of useState to declare a state variable for an image index.

```js
function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...

```

--------------------------------

### Export the component (Problem)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

This sandbox doesn't work because the root component is not exported.

```js
function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}
```

```css
img { height: 181px; }
```

--------------------------------

### Preiniting an external script

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preinit.md

Example of preiniting an external JavaScript file when rendering a component.

```js
import { preinit } from 'react-dom';

function AppRoot() {
  preinit("https://example.com/script.js", {as: "script"});
  return ...;
}
```

--------------------------------

### Buggy Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/updating-objects-in-state.md

An example demonstrating a mutation bug when updating an object in React state, before applying Immer.

```js
import { useState } from 'react';
import { useImmer } from 'use-immer';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
```

```js
import { useState } from 'react';

export default function Box({
  children,
  color,
  position,
  onMove
}) {
  const [
    lastCoordinates,
    setLastCoordinates
  ] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  );
}
```

```js
export default function Background({
  position
}) {
  return (
    <div style={{
      position: 'absolute',
      transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
      width: 250,
      height: 250,
      backgroundColor: 'rgba(200, 200, 0, 0.2)',
    }} />
  );
};
```

```css
body { height: 280px; }
select { margin-bottom: 10px; }
```

```json
{
  "dependencies": {
    "immer": "1.7.3",
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "use-immer": "0.5.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

--------------------------------

### Example: Skipping re-rendering with useCallback and memo

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useCallback.md

This example demonstrates how `useCallback` and `memo` work together to prevent unnecessary re-renders of a component. The `ShippingForm` is artificially slowed down to highlight the performance improvement when `handleSubmit` is memoized and its dependencies (`productId`, `referrer`) remain unchanged.

```javascript
import { useState } from 'react';
import ProductPage from './ProductPage.js';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
```

```javascript
import { useCallback } from 'react';
import ShippingForm from './ShippingForm.js';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}
```

```javascript
import { memo, useState } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;
```

```css
label {
  display: block; margin-top: 10px;
}

input {
  margin-left: 5px;
}

button[type="button"] {
  margin: 5px;
}

.dark {
  background-color: black;
  color: white;
}

.light {
  background-color: white;
  color: black;
}
```

--------------------------------

### Basic Configuration

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/incremental-adoption.md

Start by applying the compiler to a specific directory.

```javascript
// babel.config.js
module.exports = {
  plugins: [
    // Global plugins that apply to all files
  ],
  overrides: [
    {
      test: './src/modern/**/*.{js,jsx,ts,tsx}',
      plugins: [
        'babel-plugin-react-compiler'
      ]
    }
  ]
};
```

--------------------------------

### Providing an initial value for an input

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/input.md

Example showing how to set initial values for text inputs (`defaultValue`) and checkboxes/radio buttons (`defaultChecked`).

```js
export default function MyForm() {
  return (
    <>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true}
          />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
    </>
  );
}
```

```css
label { display: block; }
input { margin: 5px; }
```

--------------------------------

### Chat Room with Empty Dependencies Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/lifecycle-of-reactive-effects.md

An interactive example demonstrating a chat room connection using `useEffect` with an empty dependency array, where `serverUrl` and `roomId` are defined globally.

```js
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';
const roomId = 'general';

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom />}
    </>
  );
}
```

```js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

--------------------------------

### Impure component example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

An example of an impure component that modifies a preexisting global variable, leading to unpredictable behavior.

```js
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

--------------------------------

### Conditional Rendering Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/understanding-your-ui-as-a-tree.md

This example demonstrates how a React application can conditionally render different components (an inspirational quote or a color) based on data, illustrating how the render tree can change across different render passes.

```javascript
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
```

```javascript
export default function FancyText({title, text}) {
  return title
    ? <h1 className='fancy title'>{text}</h1>
    : <h3 className='fancy cursive'>{text}</h3>
}
```

```javascript
export default function Color({value}) {
  return <div className="colorbox" style={{backgroundColor: value}} />
}
```

```javascript
import * as React from 'react';
import inspirations from './inspirations';
import FancyText from './FancyText';
import Color from './Color';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === 'quote'
      ? <FancyText text={inspiration.value} />
      : <Color value={inspiration.value} />}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
```

```javascript
export default function Copyright({year}) {
  return <p className='small'>©️ {year}</p>;
}
```

```javascript
export default [
  {type: 'quote', value: "Don’t let yesterday take up too much of today.” — Will Rogers"},
  {type: 'color', value: "#B73636"},
  {type: 'quote', value: "Ambition is putting a ladder against the sky."},
  {type: 'color', value: "#256266"},
  {type: 'quote', value: "A joy that's shared is a joy made double."},
  {type: 'color', value: "#F9F2B4"}
];
```

```css
.fancy {
  font-family: 'Georgia';
}
.title {
  color: #007AA3;
  text-decoration: underline;
}
.cursive {
  font-style: italic;
}
.small {
  font-size: 10px;
}
.colorbox {
  height: 100px;
  width: 100px;
  margin: 8px;
}
```

--------------------------------

### Complete Example with Context API

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/passing-data-deeply-with-context.md

A full interactive example demonstrating how LevelContext is provided by Section components and consumed by Heading components to determine their rendering level.

```javascript
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
```

```javascript
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext value={level}>
        {children}
      </LevelContext>
    </section>
  );
}
```

```javascript
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
```

```javascript
import { createContext } from 'react';

export const LevelContext = createContext(1);
```

```css
.section {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #aaa;
}
```

--------------------------------

### Best practices - Bad example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives/use-no-memo.md

Avoid disabling optimization without explanation.

```js
// ❌ Bad - no explanation
function Mystery() {
  "use no memo";
  // ...
}
```

--------------------------------

### Valid Syntax Examples

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/unsupported-syntax.md

Examples of code that uses analyzable syntax, such as normal property access and standard Math methods, which React Compiler can optimize.

```js
// ✅ Use normal property access
function Component({propName, props}) {
  const value = props[propName]; // Analyzable
  return <div>{value}</div>;
}

// ✅ Use standard Math methods
function Component() {
  return <div>{Math.sin(Math.PI / 2)}</div>;
}
```

--------------------------------

### Interactive streaming data example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use.md

A complete implementation showing how use and Suspense work together to handle streamed data with a manual trigger.

```js
"use client";

import { use, Suspense } from "react";

function Message({ messagePromise }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({ messagePromise }) {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}
```

```js
import { useState } from "react";
import { MessageContainer } from "./message.js";

function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, "⚛️"));
}

export default function App() {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);
  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={download}>Download message</button>;
  }
}
```

```js
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// TODO: update this example to use
// the Codesandbox Server Component
// demo environment once it is created
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

--------------------------------

### Mixing default and named exports/imports

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/importing-and-exporting-components.md

An example demonstrating how to export and import both default and named components from the same file.

```js
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}
```

```js
export function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

--------------------------------

### Interactive example of PureComponent re-rendering behavior

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/PureComponent.md

An interactive example showing how PureComponent re-renders only when relevant props change, logging render times to the console.

```js
import { PureComponent, useState } from 'react';

class Greeting extends PureComponent {
  render() {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{this.props.name && ', '}{this.props.name}!</h3>;
  }
}

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}
```

```css
label {
  display: block;
  margin-bottom: 16px;
}
```

--------------------------------

### Server-only React component example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/creating-a-react-app.md

An example of a server-only React component written as an async function that reads from a database and passes data to interactive components.

```js
// This component runs *only* on the server (or during the build).
async function Talks({ confId }) {
  // 1. You're on the server, so you can talk to your data layer. API endpoint not required.
  const talks = await db.Talks.findAll({ confId });

  // 2. Add any amount of rendering logic. It won't make your JavaScript bundle larger.
  const videos = talks.map(talk => talk.video);

  // 3. Pass the data down to the components that will run in the browser.
  return <SearchableVideoList videos={videos} />;
}
```

--------------------------------

### Example of rendering React components into non-React server markup using createPortal

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/createPortal.md

This example demonstrates how to use createPortal to render parts of a React application into a DOM element that is outside the main React root, useful for integrating React into server-rendered pages.

```html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <h1>Welcome to my hybrid app</h1>
    <div class="parent">
      <div class="sidebar">
        This is server non-React markup
        <div id="sidebar-content"></div>
      </div>
      <div id="root"></div>
    </div>
  </body>
</html>
```

```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

```javascript
import { createPortal } from 'react-dom';

const sidebarContentEl = document.getElementById('sidebar-content');

export default function App() {
  return (
    <>
      <MainContent />
      {createPortal(
        <SidebarContent />,
        sidebarContentEl
      )}
    </>
  );
}

function MainContent() {
  return <p>This part is rendered by React</p>;
}

function SidebarContent() {
  return <p>This part is also rendered by React!</p>;
}
```

```css
.parent {
  display: flex;
  flex-direction: row;
}

#root {
  margin-top: 12px;
}

.sidebar {
  padding:  12px;
  background-color: #eee;
  width: 200px;
  height: 200px;
  margin-right: 12px;
}

#sidebar-content {
  margin-top: 18px;
  display: block;
  background-color: white;
}

p {
  margin: 0;
}
```

--------------------------------

### Complete example using render props

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cloneElement.md

An interactive Sandpack example demonstrating the full implementation of a List component using a render prop to pass data, including App, List, Row, data, and CSS files.

```js
import List from './List.js';
import Row from './Row.js';
import { products } from './data.js';

export default function App() {
  return (
    <List
      items={products}
      renderItem={(product, isHighlighted) =>
        <Row
          key={product.id}
          title={product.title}
          isHighlighted={isHighlighted}
        />
      }
    />
  );
}
```

```js
import { useState } from 'react';

export default function List({ items, renderItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return renderItem(item, isHighlighted);
      })}
      <hr />
      <button onClick={() => {
        setSelectedIndex(i =>
          (i + 1) % items.length
        );
      }}>
        Next
      </button>
    </div>
  );
}
```

```js
export default function Row({ title, isHighlighted }) {
  return (
    <div className={[
      'Row',
      isHighlighted ? 'RowHighlighted' : ''
    ].join(' ')}>
      {title}
    </div>
  );
}
```

```js
export const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

```css
.List {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}

.RowHighlighted {
  background: #ffa;
}

button {
  height: 40px;
  font-size: 20px;
}
```

--------------------------------

### Valid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/static-components.md

Examples of correct code for this rule:

```js
// ✅ Components at module level
const ButtonComponent = () => <button>Click</button>;
const TextComponent = () => <div>Text</div>;

function Parent({type}) {
  const Component = type === 'button'
    ? ButtonComponent  // Reference existing component
    : TextComponent;

  return <Component />;
}
```

--------------------------------

### React Application Entry Point

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

Initializes the React application, rendering the root component within `StrictMode`.

```javascript
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

--------------------------------

### Basic list rendering with `key`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/rendering-lists.md

This example demonstrates how to render a list of people, assigning a unique `key` prop to each list item based on the `person.id`.

```javascript
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

```javascript
export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];
```

```javascript
export function getImageUrl(person) {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    's.jpg'
  );
}
```

```css
ul { list-style-type: none; padding: 0px 10px; }
li {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
}
img { width: 100px; height: 100px; border-radius: 50%; }
```

--------------------------------

### Immer Mutation Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/updating-arrays-in-state.md

A concise example showing how mutation is allowed within Immer's draft object.

```javascript
updateMyTodos(draft => {
  const artwork = draft.find(a => a.id === artworkId);
  artwork.seen = nextSeen;
});
```

--------------------------------

### Creating a root and rendering a component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/createRoot.md

Demonstrates how to import `createRoot`, create a root from a DOM element, and then render a React component into it.

```js
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
```

```js
root.render(<App />);
```

--------------------------------

### Mock data for ViewTransition examples

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/ViewTransition.md

A simple data array containing video objects used in the transition demonstrations.

```js
export default [
  {
    id: '1',
    title: 'First video',
    description: 'Video description',
    image: 'blue',
  },
];
```

--------------------------------

### Basic useOptimistic example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md

Demonstrates how to call `useOptimistic` at the top level of a component.

```js
import { useOptimistic } from 'react';

function MyComponent({name, todos}) {
  const [optimisticAge, setOptimisticAge] = useOptimistic(28);
  const [optimisticName, setOptimisticName] = useOptimistic(name);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos, todoReducer);
  // ...
}
```

--------------------------------

### Create Rsbuild App

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/build-a-react-app-from-scratch.md

Command to create a new React project using Rsbuild.

```bash
npx create-rsbuild --template react
```

--------------------------------

### Displaying inputs of different types

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/input.md

Example showing how to render text, checkbox, and radio button inputs.

```js
export default function MyForm() {
  return (
    <>
      <label>
        Text input: <input name="myInput" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
    </>
  );
}
```

```css
label { display: block; }
input { margin: 5px; }
```

--------------------------------

### Infer mode example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives/use-memo.md

Shows how the compiler automatically memoizes based on naming conventions in infer mode.

```js
// Automatically memoized because this is named like a Component
function ComplexDashboard({ data }) {
  // ...
}

// Skipped: Is not named like a Component
function simpleDisplay({ text }) {
  // ...
}
```

--------------------------------

### Preloading a stylesheet

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preload.md

Example of preloading a CSS stylesheet using `preload`.

```js
import { preload } from 'react-dom';

function AppRoot() {
  preload("https://example.com/style.css", {as: "style"});
  return ...;
}

```

--------------------------------

### Valid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/globals.md

Examples of correct code for this rule:

```js
// ✅ Use state for counters
function Component() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(c => c + 1);
  };

  return (
    <button onClick={handleClick}>
      Clicked: {clickCount} times
    </button>
  );
}

// ✅ Use context for global values
function Component() {
  const user = useContext(UserContext);
  return <div>User: {user.id}</div>;
}

// ✅ Synchronize external state with React
function Component({title}) {
  useEffect(() => {
    document.title = title; // OK in effect
  }, [title]);

  return <div>Page: {title}</div>;
}
```

--------------------------------

### Install react-devtools npm package

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-developer-tools.md

Commands to install the react-devtools npm package globally using Yarn or Npm.

```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

--------------------------------

### Basic `useId` call

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useId.md

A simple example of calling `useId`.

```js
const id = useId()
```

--------------------------------

### Complete example: Forwarding a ref through multiple components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/forwardRef.md

A comprehensive example demonstrating how a ref is passed from a top-level `Form` component, through a `FormField` component, and finally to a `MyInput` component to access the underlying DOM input node.

```javascript
import { useRef } from 'react';
import FormField from './FormField.js';

export default function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <FormField label="Enter your name:" ref={ref} isRequired={true} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
```

```javascript
import { forwardRef, useState } from 'react';
import MyInput from './MyInput.js';

const FormField = forwardRef(function FormField({ label, isRequired }, ref) {
  const [value, setValue] = useState('');
  return (
    <>
      <MyInput
        ref={ref}
        label={label}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {(isRequired && value === '') &&
        <i>Required</i>
      }
    </>
  );
});

export default FormField;
```

```javascript
import { forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

export default MyInput;
```

```css
input, button {
  margin: 5px;
}
```

--------------------------------

### Correct: Top-Level Component Definition

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

An example demonstrating the correct practice of defining components at the top level.

```js
export default function Gallery() {
  // ...
}

// 
function Profile() {
  // ...
}
```

--------------------------------

### Using SomeContext as a Provider

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/createContext.md

Example of wrapping components with a context provider to specify its value.

```js
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext value={theme}>
      <Page />
    </ThemeContext>
  );
}
```

--------------------------------

### Example combining useActionState with useOptimistic

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useActionState.md

This example shows a checkout component where adding or removing items from a cart uses `useActionState` for the actual update and `useOptimistic` to provide immediate UI feedback. A pending indicator is displayed while the action is in progress.

```javascript
import { useActionState, startTransition, useOptimistic } from 'react';
import { addToCart, removeFromCart } from './api';
import Total from './Total';

export default function Checkout() {
  const [count, dispatchAction, isPending] = useActionState(updateCartAction, 0);
  const [optimisticCount, setOptimisticCount] = useOptimistic(count);

  function handleAdd() {
    startTransition(() => {
      setOptimisticCount(c => c + 1);
      dispatchAction({ type: 'ADD' });
    });
  }

  function handleRemove() {
    startTransition(() => {
      setOptimisticCount(c => c - 1);
      dispatchAction({ type: 'REMOVE' });
    });
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="row">
        <span>Eras Tour Tickets</span>
        <span className="stepper">
          <span className="pending">{isPending && '🌀'}</span>
          <span className="qty">{optimisticCount}</span>
          <span className="buttons">
            <button onClick={handleAdd}>▲</button>
            <button onClick={handleRemove}>▼</button>
          </span>
        </span>
      </div>
      <hr />
      <Total quantity={optimisticCount} isPending={isPending}/>
    </div>
  );
}

async function updateCartAction(prevCount, actionPayload) {
  switch (actionPayload.type) {
    case 'ADD': {
      return await addToCart(prevCount);
    }
    case 'REMOVE': {
      return await removeFromCart(prevCount);
    }
  }
  return prevCount;
}
```

```javascript
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export default function Total({quantity, isPending}) {
  return (
    <div className="row total">
      <span>Total</span>
      <span>{isPending ? '🌀 Updating...' : formatter.format(quantity * 9999)}</span>
    </div>
  );
}
```

```javascript
export async function addToCart(count) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return count + 1;
}

export async function removeFromCart(count) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return Math.max(0, count - 1);
}
```

```css
.checkout {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: system-ui;
}

.checkout h2 {
  margin: 0 0 8px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stepper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty {
  min-width: 20px;
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.buttons button {
  padding: 0 8px;
  font-size: 10px;
  line-height: 1.2;
  cursor: pointer;
}

.pending {
  width: 20px;
  text-align: center;
}

.total {
  font-weight: bold;
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 4px 0;
}
```

--------------------------------

### Full Example with useEffectEvent

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/separating-events-from-effects.md

A complete example demonstrating the usage of `useEffectEvent` in a chat room component to handle connection notifications without unnecessary re-renders due to theme changes.

```json
{
  "dependencies": {
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "toastify-js": "1.12.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

```js
import { useState, useEffect } from 'react';
import { useEffectEvent } from 'react';
import { createConnection, sendMessage } from './chat.js';
import { showNotification } from './notifications.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
```

```js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  let connectedCallback;
  let timeout;
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event, callback) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    }
  };
}
```

```js
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showNotification(message, theme) {
  Toastify({
    text: message,
    duration: 2000,
    gravity: 'top',
    position: 'right',
    style: {
      background: theme === 'dark' ? 'black' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
    },
  }).showToast();
}
```

```css
label { display: block; margin-top: 10px; }
```

--------------------------------

### ChatRoom Component Effect Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/synchronizing-with-effects.md

An example demonstrating an `useEffect` hook in a `ChatRoom` component, showing how it connects and disconnects from a chat room based on the `roomId` prop.

```js
export default function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to {roomId}!</h1>;
}
```

--------------------------------

### Interactive Chat Room Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/lifecycle-of-reactive-effects.md

A complete interactive example demonstrating an Effect that re-connects to a chat server when roomId (prop) or serverUrl (state) changes.

```javascript
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
```

```javascript
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

--------------------------------

### Conditional rendering with `if` statement

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Using an `if` statement to conditionally include JSX.

```js
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

--------------------------------

### Styles for view transition demo

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/ViewTransition.md

CSS classes for layout, thumbnails, and basic button styling.

```css
#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
}
button {
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
}
button:hover {
  border: 2px solid #ccc;
  background-color: #e0e8ff;
}
.thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  outline-offset: 2px;
  width: 8rem;
  vertical-align: middle;
  background-color: #ffffff;
  background-size: cover;
  user-select: none;
}
.thumbnail.blue {
  background-image: conic-gradient(at top right, #c76a15, #087ea4, #2b3491);
}
.video {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1em;
}
.video .link {
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  gap: 0.125rem;
  outline-offset: 4px;
  cursor: pointer;
}
.video .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  gap: 0.125rem;
}
.video .info:hover {
  text-decoration: underline;
}
.video-title {
  font-size: 15px;
  line-height: 1.25;
  font-weight: 700;
  color: #23272f;
}
.video-description {
  color: #5e687e;
  font-size: 13px;
}
```

--------------------------------

### Preloading in an event handler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preload.md

Example showing how to call `preload` within an event handler to initiate resource loading earlier.

```js
import { preload } from 'react-dom';

function CallToAction() {
  const onClick = () => {
    preload("https://example.com/wizardStyles.css", {as: "style"});
    startWizard();
  }
  return (
    <button onClick={onClick}>Start Wizard</button>
  );
}
```

--------------------------------

### Compilation Mode Configuration

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/compilationMode.md

An example of how to configure the `compilationMode` option.

```js
{
  compilationMode: 'infer' // or 'annotation', 'syntax', 'all'
}
```

--------------------------------

### Basic title usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/title.md

A simple example of using the <title> component.

```js
<title>My Blog</title>
```

--------------------------------

### Shopping Cart Example with useOptimistic Reducer

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md

This example demonstrates how to use a reducer pattern with useOptimistic to handle multiple action types (add, remove, update quantity) for a shopping cart, including optimistic UI updates and pending states.

```javascript
import { useState, startTransition } from 'react';
import { addToCart, removeFromCart, updateQuantity } from './actions.js';
import ShoppingCart from './ShoppingCart';

export default function App() {
  const [cart, setCart] = useState([]);

  const cartActions = {
    async add(item) {
      await addToCart(item);
      startTransition(() => {
        setCart(current => {
          const exists = current.find(i => i.id === item.id);
          if (exists) {
            return current.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
          }
          return [...current, { ...item, quantity: 1 }];
        });
      });
    },
    async remove(id) {
      await removeFromCart(id);
      startTransition(() => {
        setCart(current => current.filter(item => item.id !== id));
      });
    },
    async updateQuantity(id, quantity) {
      await updateQuantity(id, quantity);
      startTransition(() => {
        setCart(current =>
          current.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        );
      });
    }
  };

  return <ShoppingCart cart={cart} cartActions={cartActions} />;
}
```

```javascript
import { useOptimistic, startTransition } from 'react';

export default function ShoppingCart({ cart, cartActions }) {
  const [optimisticCart, dispatch] = useOptimistic(
    cart,
    (currentCart, action) => {
      switch (action.type) {
        case 'add':
          const exists = currentCart.find(item => item.id === action.item.id);
          if (exists) {
            return currentCart.map(item =>
              item.id === action.item.id
                ? { ...item, quantity: item.quantity + 1, pending: true }
                : item
            );
          }
          return [...currentCart, { ...action.item, quantity: 1, pending: true }];
        case 'remove':
          return currentCart.filter(item => item.id !== action.id);
        case 'update_quantity':
          return currentCart.map(item =>
            item.id === action.id
              ? { ...item, quantity: action.quantity, pending: true }
              : item
          );
        default:
          return currentCart;
      }
    }
  );

  function handleAdd(item) {
    startTransition(async () => {
      dispatch({ type: 'add', item });
      await cartActions.add(item);
    });
  }

  function handleRemove(id) {
    startTransition(async () => {
      dispatch({ type: 'remove', id });
      await cartActions.remove(id);
    });
  }

  function handleUpdateQuantity(id, quantity) {
    startTransition(async () => {
      dispatch({ type: 'update_quantity', id, quantity });
      await cartActions.updateQuantity(id, quantity);
    });
  }

  const total = optimisticCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => handleAdd({
          id: 1, name: 'T-Shirt', price: 25
        })}>
          Add T-Shirt ($25)
        </button>{' '}
        <button onClick={() => handleAdd({
          id: 2, name: 'Mug', price: 15
        })}>
          Add Mug ($15)
        </button>
      </div>
      {optimisticCart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {optimisticCart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} ×
              {item.quantity}
              {' '}= ${item.price * item.quantity}
              <button
                onClick={() => handleRemove(item.id)}
                style={{ marginLeft: 8 }}
              >
                Remove
              </button>
              {item.pending && ' ...'}
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total: ${total}</strong></p>
    </div>
  );
}
```

```javascript
export async function addToCart(item) {
  await new Promise((res) => setTimeout(res, 800));
}

export async function removeFromCart(id) {
  await new Promise((res) => setTimeout(res, 800));
}

export async function updateQuantity(id, quantity) {
  await new Promise((res) => setTimeout(res, 800));
}
```

--------------------------------

### Create New Next.js App with React Compiler Template

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/10/07/react-compiler-1.md

Initialize a new Next.js project. Users can choose a compiler-enabled template during the setup process.

```shell
npx create-next-app@latest
```

--------------------------------

### Preiniting in an event handler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preinit.md

Example of calling `preinit` in an event handler to load resources before a state transition.

```js
import { preinit } from 'react-dom';

function CallToAction() {
  const onClick = () => {
    preinit("https://example.com/wizardStyles.css", {as: "style"});
    startWizard();
  }
  return (
    <button onClick={onClick}>Start Wizard</button>
  );
}
```

--------------------------------

### Using startTransition to update state

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/startTransition.md

Example demonstrating how to wrap a state update in `startTransition` within a React component.

```js
import { startTransition } from 'react';

function TabContainer() {
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```

--------------------------------

### Invalid Syntax Examples

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/unsupported-syntax.md

Examples of code that uses unsupported syntax like `eval` and `with` statements, which prevent React Compiler from optimizing components.

```js
// ❌ Using eval in component
function Component({ code }) {
  const result = eval(code); // Can't be analyzed
  return <div>{result}</div>;
}

// ❌ Using with statement
function Component() {
  with (Math) { // Changes scope dynamically
    return <div>{sin(PI / 2)}</div>;
  }
}

// ❌ Dynamic property access with eval
function Component({propName}) {
  const value = eval(`props.${propName}`);
  return <div>{value}</div>;
}
```

--------------------------------

### Playground Example with setTimeout

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/synchronizing-with-effects.md

This example uses `setTimeout` to schedule a console log and demonstrates how cleanup functions cancel pending timeouts. It also shows how React remounts components in development mode and how Effects capture values from their corresponding renders.

```js
import { useState, useEffect } from 'react';

function Playground() {
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}
```

--------------------------------

### Preloading an external script

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preload.md

Example of preloading an external JavaScript file using `preload`.

```js
import { preload } from 'react-dom';

function AppRoot() {
  preload("https://example.com/script.js", {as: "script"});
  return ...;
}

```

--------------------------------

### `useMemo` with a dependency array

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

This example shows the corrected `useMemo` usage with a dependency array to prevent unnecessary re-calculations.

```js
function TodoList({ todos, tab }) {
  // ✅ Does not recalculate unnecessarily
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
```

--------------------------------

### Implement Video Thumbnail, Controls, and Navigation with View Transitions

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/04/23/react-labs-view-transitions-activity-and-more.md

This file defines components for displaying video thumbnails with shared element transitions, playback controls using `startTransition` for state updates, and navigation logic for individual videos.

```js
import { useState, ViewTransition } from "react";
import LikeButton from "./LikeButton";
import { useRouter } from "./router";
import { PauseIcon, PlayIcon } from "./Icons";
import { startTransition } from "react";

export function Thumbnail({ video, children }) {
  // Add a name to animate with a shared element transition.
  // This uses the default animation, no additional css needed.
  return (
    <ViewTransition name={`video-${video.id}`}>
      <div
        aria-hidden="true"
        tabIndex={-1}
        className={`thumbnail ${video.image}`}
      >
        {children}
      </div>
    </ViewTransition>
  );
}

export function VideoControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <span
      className="controls"
      onClick={() =>
        startTransition(() => {
          setIsPlaying((p) => !p);
        })
      }
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </span>
  );
}

export function Video({ video }) {
  const { navigate } = useRouter();

  return (
    <div className="video">
      <div
        className="link"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/video/${video.id}`);
        }}
      >
        <Thumbnail video={video}></Thumbnail>

        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
      <LikeButton video={video} />
    </div>
  );
}
```

--------------------------------

### Dependencies for Markdown Editor

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/textarea.md

Project dependencies listed in package.json for the Markdown editor example.

```json
{
  "dependencies": {
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "remarkable": "2.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

--------------------------------

### Initial Implementation with TODO

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/reusing-logic-with-custom-hooks.md

This code shows the initial setup for the staggering movement, with a placeholder for the `useDelayedValue` custom Hook that needs to be implemented.

```js
import { usePointerPosition } from './usePointerPosition.js';

function useDelayedValue(value, delay) {
  // TODO: Implement this Hook
  return value;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}
```

```js
import { useState, useEffect } from 'react';

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);
  return position;
}
```

```css
body { min-height: 300px; }
```

--------------------------------

### Memoizing a function with useMemo

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

Demonstrates how to memoize a function using `useMemo` by returning another function from the calculation, which can be clunky.

```js
export default function Page({ productId, referrer }) {
  const handleSubmit = useMemo(() => {
    return (orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails
      });
    };
  }, [productId, referrer]);

  return <Form onSubmit={handleSubmit} />;
}
```

--------------------------------

### Basic usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/progress.md

A simple example of rendering a <progress> component with a value.

```jsx
<progress value={0.5} />
```

--------------------------------

### Integrating data fetching with Suspense

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/creating-a-react-app.md

An example demonstrating how to use Suspense to specify a loading state for different parts of the user interface directly in the React tree.

```js
<Suspense fallback={<TalksLoading />}>
  <Talks confId={conf.id} />
</Suspense>
```

--------------------------------

### Spot the mistake (Solution)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

Correcting the component name to start with a capital letter and updating its usage.

```js
function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```css
img { margin: 0 10px 10px 0; }
```

--------------------------------

### Chat Room Application Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/lifecycle-of-reactive-effects.md

An interactive example demonstrating a React component that connects to a chat room using an Effect, and how React verifies Effect re-synchronization in development and in response to dependency changes.

```javascript
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
```

```javascript
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

--------------------------------

### Pitfall: Async work started outside rendering

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cacheSignal.md

You can't use cacheSignal to abort async work that was started outside of rendering.

```js
import {cacheSignal} from 'react';
// 🚩 Pitfall: The request will not actually be aborted if the rendering of `Component` is finished.
const response = fetch(url, { signal: cacheSignal() });
async function Component() {
  await response;
}
```

--------------------------------

### Configuring `gating` with a feature flag module

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/gating.md

Example configuration for the `gating` option, pointing to a local feature flag module.

```js
{
  gating: {
    source: './src/utils/feature-flags',
    importSpecifierName: 'shouldUseCompiler'
  }
}
```

--------------------------------

### Implementing a slow-fade ViewTransition in React

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/ViewTransition.md

A complete example showing how to trigger a custom view transition using startTransition and CSS.

```javascript
function Thumbnail({video, children}) {
  return (
    <div
      aria-hidden="true"
      tabIndex={-1}
      className={`thumbnail ${video.image}`}
    />
  );
}

export function Video({video}) {
  return (
    <div className="video">
      <div className="link">
        <Thumbnail video={video}></Thumbnail>

        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}
```

```javascript
import {ViewTransition, useState, startTransition} from 'react';
import {Video} from './Video';
import videos from './data';

function Item() {
  return (
    <ViewTransition default="slow-fade">
      <Video video={videos[0]} />
    </ViewTransition>
  );
}

export default function Component() {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setShowItem((prev) => !prev);
          });
        }}>
        {showItem ? '➖' : '➕'}
      </button>

      {showItem ? <Item /> : null}
    </>
  );
}
```

```javascript
export default [
  {
    id: '1',
    title: 'First video',
    description: 'Video description',
    image: 'blue',
  },
];
```

```css
::view-transition-old(.slow-fade) {
  animation-duration: 500ms;
}

::view-transition-new(.slow-fade) {
  animation-duration: 500ms;
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
}
button {
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
}
button:hover {
  border: 2px solid #ccc;
  background-color: #e0e8ff;
}
.thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  outline-offset: 2px;
  width: 8rem;
  vertical-align: middle;
  background-color: #ffffff;
  background-size: cover;
  user-select: none;
}
.thumbnail.blue {
  background-image: conic-gradient(at top right, #c76a15, #087ea4, #2b3491);
}
.video {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1em;
}
.video .link {
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  gap: 0.125rem;
  outline-offset: 4px;
  cursor: pointer;
}
.video .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  gap: 0.125rem;
}
.video .info:hover {
  text-decoration: underline;
}
.video-title {
  font-size: 15px;
  line-height: 1.25;
  font-weight: 700;
  color: #23272f;
}
.video-description {
  color: #5e687e;
  font-size: 13px;
}
```

```json
{
  "dependencies": {
    "react": "canary",
    "react-dom": "canary",
    "react-scripts": "latest"
  }
}
```

--------------------------------

### Complete Function Component Example: Simple Greeting

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Component.md

A complete functional component equivalent to the initial class component, demonstrating prop usage.

```js
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <>
      <Greeting name="Sara" />
      <Greeting name="Cahal" />
      <Greeting name="Edite" />
    </>
  );
}
```

--------------------------------

### Basic PureComponent example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/PureComponent.md

A simple class component extending PureComponent.

```js
class Greeting extends PureComponent {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

--------------------------------

### Defining CSS rules

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Writing CSS rules for the avatar class in a separate CSS file.

```css
/* In your CSS */
.avatar {
  border-radius: 50%;
}
```

--------------------------------

### Basic `useContext` with TypeScript

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/typescript.md

Example demonstrating how `useContext` infers the type from `createContext`.

```tsx
import { createContext, useContext, useState } from 'react';

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

export default function MyApp() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext value={theme}>
      <MyComponent />
    </ThemeContext>
  )
}

function MyComponent() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}
```

```js
import AppTSX from "./App.tsx";
export default App = AppTSX;
```

--------------------------------

### Single-line Return Statement

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

Example of a component's return statement written on a single line.

```js
return <img src="https://react.dev/images/docs/scientists/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

--------------------------------

### Example of useEffectEvent in a custom Hook

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffectEvent.md

This example demonstrates how to use useEffectEvent within a useInterval custom Hook to prevent the interval from resetting when the callback changes.

```javascript
import { useState, useEffect, useEffectEvent } from 'react';

function useInterval(callback, delay) {
  const onTick = useEffectEvent(callback);

  useEffect(() => {
    if (delay === null) {
      return;
    }
    const id = setInterval(() => {
      onTick();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function Counter({ incrementBy }) {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + incrementBy);
  }, 1000);

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>Incrementing by {incrementBy} every second</p>
    </div>
  );
}

export default function App() {
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <label>
        Increment by:{' '}
        <select
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </label>
      <hr />
      <Counter incrementBy={incrementBy} />
    </>
  );
}
```

```css
label { display: block; margin-bottom: 8px; }
```

--------------------------------

### Conditional rendering with ternary operator

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Using the conditional `?` operator for more compact conditional rendering inside JSX.

```js
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

--------------------------------

### Task Management Application with Context and Reducer

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useContext.md

This comprehensive example illustrates how to manage application state using `useContext` and `useReducer`. It separates state logic into a reducer and provides state and dispatch functions via two distinct contexts, making them accessible throughout the component tree.

```js
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
```

```js
import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>
        {children}
      </TasksDispatchContext>
    </TasksContext>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
```

```js
import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Add</button>
    </>
  );
}

let nextId = 3;
```

```js
import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </button>
    </label>
  );
}
```

```css
button { margin: 5px; }
li { list-style-type: none; }
ul, li { margin: 0; padding: 0; }
```

--------------------------------

### Example using useActionState with Action props

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useActionState.md

This example demonstrates how to use `useActionState` with a `QuantityStepper` component that exposes `increaseAction` and `decreaseAction` props. It shows how `dispatchAction` can be passed directly to these props, leveraging the component's built-in handling of transitions and optimistic updates.

```javascript
import { useActionState } from 'react';
import { addToCart, removeFromCart } from './api';
import QuantityStepper from './QuantityStepper';
import Total from './Total';

export default function Checkout() {
  const [count, dispatchAction, isPending] = useActionState(updateCartAction, 0);

  function addAction() {
    dispatchAction({type: 'ADD'});
  }

  function removeAction() {
    dispatchAction({type: 'REMOVE'});
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="row">
        <span>Eras Tour Tickets</span>
        <QuantityStepper
          value={count}
          increaseAction={addAction}
          decreaseAction={removeAction}
        />
      </div>
      <hr />
      <Total quantity={count} isPending={isPending} />
    </div>
  );
}

async function updateCartAction(prevCount, actionPayload) {
  switch (actionPayload.type) {
    case 'ADD': {
      return await addToCart(prevCount);
    }
    case 'REMOVE': {
      return await removeFromCart(prevCount);
    }
  }
  return prevCount;
}
```

```javascript
import { startTransition, useOptimistic } from 'react';

export default function QuantityStepper({value, increaseAction, decreaseAction}) {
  const [optimisticValue, setOptimisticValue] = useOptimistic(value);
  const isPending = value !== optimisticValue;
  function handleIncrease() {
    startTransition(async () => {
      setOptimisticValue(c => c + 1);
      await increaseAction();
    });
  }

  function handleDecrease() {
    startTransition(async () => {
      setOptimisticValue(c => Math.max(0, c - 1));
      await decreaseAction();
    });
  }

  return (
    <span className="stepper">
      <span className="pending">{isPending && '🌀'}</span>
      <span className="qty">{optimisticValue}</span>
      <span className="buttons">
        <button onClick={handleIncrease}>▲</button>
        <button onClick={handleDecrease}>▼</button>
      </span>
    </span>
  );
}
```

```javascript
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export default function Total({quantity, isPending}) {
  return (
    <div className="row total">
      <span>Total</span>
      {isPending ? '🌀 Updating...' : formatter.format(quantity * 9999)}
    </div>
  );
}
```

```javascript
export async function addToCart(count) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return count + 1;
}

export async function removeFromCart(count) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return Math.max(0, count - 1);
}
```

```css
.checkout {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: system-ui;
}

.checkout h2 {
  margin: 0 0 8px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stepper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty {
  min-width: 20px;
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.buttons button {
  padding: 0 8px;
  font-size: 10px;
  line-height: 1.2;
  cursor: pointer;
}

.pending {
  width: 20px;
  text-align: center;
}

.total {
  font-weight: bold;
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 4px 0;
}
```

--------------------------------

### Invalid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/static-components.md

Examples of incorrect code for this rule:

```js
// ❌ Component defined inside component
function Parent() {
  const ChildComponent = () => { // New component every render!
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  };

  return <ChildComponent />; // State resets every render
}

// ❌ Dynamic component creation
function Parent({type}) {
  const Component = type === 'button'
    ? () => <button>Click</button>
    : () => <div>Text</div>;

  return <Component />;
}
```

--------------------------------

### Subscribing to navigator.onLine

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useSyncExternalStore.md

Initial setup of useSyncExternalStore in a component to subscribe to an external store.

```js
import { useSyncExternalStore } from 'react';

function ChatIndicator() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  // ...
}
```

--------------------------------

### Rendering a list of scientists

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

This example demonstrates how to render a list of components from an array of data using `map()` and how to assign a unique `key` to each list item.

```js
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
```

```js
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];
```

```js
export function getImageUrl(person) {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    's.jpg'
  );
}
```

```css
ul { list-style-type: none; padding: 0px 10px; }
li {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
img { width: 100px; height: 100px; border-radius: 50%; }
h1 { font-size: 22px; }
h2 { font-size: 20px; }
```

--------------------------------

### Non-idempotent component example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rules/components-and-hooks-must-be-pure.md

An example of a React component that is not idempotent because it uses `new Date()` directly during render, leading to inconsistent output.

```js
function Clock() {
  const time = new Date(); // 🔴 Bad: always returns a different result!
  return <span>{time.toLocaleString()}</span>
}
```

--------------------------------

### Basic Usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/prefetchDNS.md

A basic example of using `prefetchDNS` to eagerly look up the IP of a server.

```js
prefetchDNS("https://example.com");
```

--------------------------------

### Implementing a Router with useTransition for Navigation

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

Demonstrates how to integrate `useTransition` into a router's navigation function to make page transitions non-blocking and interruptible.

```js
function Router() {
  const [page, setPage] = useState('/');
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }
  // ...
```

--------------------------------

### Art Bucket List Example with Immer

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/updating-arrays-in-state.md

An example demonstrating how to use Immer to update arrays in React state with a more concise, mutable-like syntax.

```javascript
import { useState } from 'react';
import { useImmer } from 'use-immer';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, updateMyList] = useImmer(
    initialList
  );
  const [yourList, updateYourList] = useImmer(
    initialList
  );

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a =>
        a.id === id
      );
      artwork.seen = nextSeen;
    });
  }

  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
```

```json
{
  "dependencies": {
    "immer": "1.7.3",
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "use-immer": "0.5.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

--------------------------------

### Root Application Component for Add Comment Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

The main application component that renders the `AddCommentContainer`.

```javascript
import { AddCommentContainer } from "./AddCommentContainer.js";

export default function App() {
  return <AddCommentContainer />;
}
```

--------------------------------

### Example with mutation bug

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/updating-arrays-in-state.md

This example demonstrates a common bug where mutating an object within an array leads to shared state between different components.

```javascript
import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    const myNextList = [...myList];
    const artwork = myNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
```

--------------------------------

### Imperative UI Programming Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/reacting-to-input-with-state.md

This example demonstrates imperative UI programming using plain JavaScript and the browser DOM, without React. It shows how to directly manipulate UI elements (enable, disable, show, hide) in response to user actions and network requests.

```javascript
async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (err) {
    show(errorMessage);
    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
}

function handleTextareaChange() {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === 'istanbul') {
        resolve();
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
    }, 1500);
  });
}

let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;
```

```json
{
  "hardReloadOnChange": true
}
```

```html
<form id="form">
  <h2>City quiz</h2>
  <p>
    What city is located on two continents?
  </p>
  <textarea id="textarea"></textarea>
  <br />
  <button id="button" disabled>Submit</button>
  <p id="loading" style="display: none">Loading...</p>
  <p id="error" style="display: none; color: red;"></p>
</form>
<h1 id="success" style="display: none">That's right!</h1>

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
</style>
```

--------------------------------

### Reconnecting Chat Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/removing-effect-dependencies.md

This example connects to the chat either with or without encryption. Toggle the checkbox and notice the different messages in the console when the encryption is on and off. Try changing the room. Then, try toggling the theme. When you're connected to a chat room, you will receive new messages every few seconds. Verify that their color matches the theme you've picked. In this example, the chat re-connects every time you try to change the theme. Fix this. After the fix, changing the theme should not re-connect the chat, but toggling encryption settings or changing the room should re-connect. Don't change any code in `chat.js`. Other than that, you can change any code as long as it results in the same behavior. For example, you may find it helpful to change which props are being passed down.

```json
{
  "dependencies": {
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "toastify-js": "1.12.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

```javascript
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chat.js';
import { showNotification } from './notifications.js';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={e => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
      </label>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        onMessage={msg => {
          showNotification('New message: ' + msg, isDark ? 'dark' : 'light');
        }}
        createConnection={() => {
          const options = {
            serverUrl: 'https://localhost:1234',
            roomId: roomId
          };
          if (isEncrypted) {
            return createEncryptedConnection(options);
          } else {
            return createUnencryptedConnection(options);
          }
        }}
      />
    </>
  );
}
```

```javascript
import { useState, useEffect } from 'react';
import { useEffectEvent } from 'react';

export default function ChatRoom({ roomId, createConnection, onMessage }) {
  useEffect(() => {
    const connection = createConnection();
    connection.on('message', (msg) => onMessage(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [createConnection, onMessage]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
```

```javascript
export function createEncryptedConnection({ serverUrl, roomId }) {
  // A real implementation would actually connect to the server
  if (typeof serverUrl !== 'string') {
    throw Error('Expected serverUrl to be a string. Received: ' + serverUrl);
  }
  if (typeof roomId !== 'string') {
    throw Error('Expected roomId to be a string. Received: ' + roomId);
  }
  let intervalId;
  let messageCallback;
  return {
    connect() {
      console.log('✅ 🔐 Connecting to "' + roomId + '" room... (encrypted)');
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (messageCallback) {
          if (Math.random() > 0.5) {
            messageCallback('hey')
          } else {
            messageCallback('lol');
          }
        }
      }, 3000);
    },
    disconnect() {
      clearInterval(intervalId);
      messageCallback = null;

```

--------------------------------

### Check React version

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/target.md

Command to check the installed React version in a project.

```bash
npm why react
```

--------------------------------

### Providing an initially selected option

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/select.md

Example showing how to set a default selected option using the `defaultValue` prop on the `<select>` element.

```js
export default function FruitPicker() {
  return (
    <label>
      Pick a fruit:
      <select name="selectedFruit" defaultValue="orange">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
}
```

```css
select { margin: 5px; }
```

--------------------------------

### Passing context down the tree

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/scaling-up-with-reducer-and-context.md

Example of how to pass tasks and dispatch down the tree using context.

```javascript
<TasksContext value={tasks}>
  <TasksDispatchContext value={dispatch}>
    <h1>Day off in Kyoto</h1>
    <AddTask />
    <TaskList />
  </TasksDispatchContext>
</TasksContext>
```

--------------------------------

### Avoid non-standardized features

Source: https://github.com/reactjs/react.dev/blob/main/CONTRIBUTING.md

An example of using a non-standardized feature (class properties and arrow function as class method) which should be avoided in most documentation examples.

```js
class MyComponent extends React.Component {
  state = {value: ''};
  handleChange = (e) => {
    this.setState({value: e.target.value});
  };
}
```

--------------------------------

### Project Dependencies and Scripts (`package.json`)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/04/23/react-labs-view-transitions-activity-and-more.md

Lists project dependencies for React and defines standard development scripts for starting, building, testing, and ejecting.

```json
{
  "dependencies": {
    "react": "canary",
    "react-dom": "canary",
    "react-scripts": "latest"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

--------------------------------

### Initial Component Structure

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/importing-and-exporting-components.md

The starting point where Profile and Gallery components are in Gallery.js, and App.js imports both from Gallery.js.

```javascript
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
```

```javascript
// Move me to Profile.js!
export function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```javascript

```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

--------------------------------

### Displaying data with curly braces

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Embedding a JavaScript variable user.name into JSX markup.

```js
return (
  <h1>
    {user.name}
  </h1>
);
```

--------------------------------

### Full Example: useOnlineStatus with useDebugValue

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useDebugValue.md

A complete example showing a `StatusBar` component using the `useOnlineStatus` custom Hook, which utilizes `useDebugValue` to display its status in React DevTools.

```js
import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

export default function App() {
  return <StatusBar />;
}
```

```js
import { useSyncExternalStore, useDebugValue } from 'react';

export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true);
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
```

--------------------------------

### Interactive ViewTransition and Suspense example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/ViewTransition.md

Demonstrates animating a Suspense boundary transition from a loading shimmer to actual content. Use startTransition to wrap the state update that triggers the loading state.

```javascript
function Thumbnail({video, children}) {
  return (
    <div
      aria-hidden="true"
      tabIndex={-1}
      className={`thumbnail ${video.image}`}
    />
  );
}

export function Video({video}) {
  return (
    <div className="video">
      <div className="link">
        <Thumbnail video={video}></Thumbnail>
        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}

export function VideoPlaceholder() {
  const video = {image: 'loading'};
  return (
    <div className="video">
      <div className="link">
        <Thumbnail video={video}></Thumbnail>
        <div className="info">
          <div className="video-title loading" />
          <div className="video-description loading" />
        </div>
      </div>
    </div>
  );
}
```

```javascript
import {ViewTransition, useState, startTransition, Suspense} from 'react';
import {Video, VideoPlaceholder} from './Video';
import {useLazyVideoData} from './data';

function LazyVideo() {
  const video = useLazyVideoData();
  return <Video video={video} />;
}

export default function Component() {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setShowItem((prev) => !prev);
          });
        }}>
        {showItem ? '➖' : '➕'}
      </button>
      {showItem ? (
        <ViewTransition>
          <Suspense fallback={<VideoPlaceholder />}>
            <LazyVideo />
          </Suspense>
        </ViewTransition>
      ) : null}
    </>
  );
}
```

```javascript
import {use} from 'react';

let cache = null;

function fetchVideo() {
  if (!cache) {
    cache = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          title: 'First video',
          description: 'Video description',
          image: 'blue',
        });
      }, 1000);
    });
  }
  return cache;
}

export function useLazyVideoData() {
  return use(fetchVideo());
}
```

```css
#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
}
button {
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
}
button:hover {
  border: 2px solid #ccc;
  background-color: #e0e8ff;
}
.thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  outline-offset: 2px;
  width: 8rem;
  vertical-align: middle;
  background-color: #ffffff;
  background-size: cover;
  user-select: none;
}
.thumbnail.blue {
  background-image: conic-gradient(at top right, #c76a15, #087ea4, #2b3491);
}
.loading {
  background-image: linear-gradient(
    90deg,
    rgba(173, 216, 230, 0.3) 25%,
    rgba(135, 206, 250, 0.5) 50%,
    rgba(173, 216, 230, 0.3) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.video {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1em;
}
.video .link {
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  gap: 0.125rem;
  outline-offset: 4px;
  cursor: pointer;
}
.video .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  gap: 0.125rem;
}
.video .info:hover {
  text-decoration: underline;
}
.video-title {
  font-size: 15px;
  line-height: 1.25;
  font-weight: 700;
  color: #23272f;
}
.video-title.loading {
  height: 20px;
  width: 80px;
  border-radius: 0.5rem;
}
.video-description {
  color: #5e687e;
  font-size: 13px;
  border-radius: 0.5rem;
}
.video-description.loading {
  height: 15px;
  width: 100px;
}
```

```json
{
  "dependencies": {
    "react": "canary",
    "react-dom": "canary",
    "react-scripts": "latest"
  }
}
```

--------------------------------

### Displaying a select box with options

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/option.md

An example of a React component rendering a select box with multiple options.

```js
export default function FruitPicker() {
  return (
    <label>
      Pick a fruit:
      <select name="selectedFruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
}
```

```css
select { margin: 5px; }
```

--------------------------------

### Rendering a list with `map()`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Transforming an array of products into an array of `<li>` items using the `map()` function, including a `key` attribute.

```js
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

--------------------------------

### Correct `source` path (Module Resolution)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/gating.md

An example of a correct `source` path using module resolution.

```js
// ✅ Correct: Module resolution path
{
  source: '@myapp/feature-flags',
  importSpecifierName: 'flag'
}
```

--------------------------------

### Calling dispatch

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useReducer.md

Example of calling the dispatch function with an action.

```js
function handleClick() {
  dispatch({ type: 'incremented_age' });
}
```

--------------------------------

### Writing markup with JSX

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

Corrected JSX for the TodoList component, fixing issues from the previous example.

```js
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}
```

```css
img { height: 90px; }
```

--------------------------------

### Root Component for Avatar Styling Example (App.js)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/common.md

This `App.js` component demonstrates passing user data to an `Avatar` component, which then applies `className` and `style` for styling.

```js
import Avatar from './Avatar.js';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function App() {
  return <Avatar user={user} />;
}
```

--------------------------------

### Basic Usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/addTransitionType.md

Example showing how to use `addTransitionType` inside `startTransition`.

```js
startTransition(() => {
  addTransitionType('my-transition-type');
  setState(newState);
});
```

--------------------------------

### onPlaying

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/common.md

An Event handler function. Fires when the media starts or restarts playing.

```APIDOC
## Event Handler: `onPlaying`\n\n### Description\nAn `Event` handler function. Fires when the media starts or restarts playing.\n\n### Type\n`function` (Event handler)\n\n### Usage\nThis handler is a prop on media elements (e.g., `<audio>`, `<video>`). It accepts a function that will be called when the associated event occurs.\n\n### Parameters\n- **event** (object) - The synthetic event object.
```

--------------------------------

### Adding getServerSnapshot for server rendering

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useSyncExternalStore.md

Example of useSyncExternalStore with a getServerSnapshot function to support server rendering.

```js
import { useSyncExternalStore } from 'react';

export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return isOnline;
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true; // Always show "Online" for server-generated HTML
}

function subscribe(callback) {
  // ...
}
```

--------------------------------

### PostsTab Component (Initial Example)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

A React component that fetches and displays posts, demonstrating a basic tab content without `useTransition`.

```js
import {use} from 'react';
import { fetchData } from './data.js';

function PostsTab() {
  const posts = use(fetchData('/posts'));
  return (
    <ul className="items">
      {posts.map(post =>
        <Post key={post.id} title={post.title} />
      )}
    </ul>
  );
}

function Post({ title }) {
  return (
    <li className="item">
      {title}
    </li>
  );
}

export default PostsTab;
```

--------------------------------

### Components using useOnlineStatus

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useSyncExternalStore.md

Example of StatusBar and SaveButton components consuming the useOnlineStatus custom Hook.

```js
import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
```

```js
import { useSyncExternalStore } from 'react';

export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
}

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
```

--------------------------------

### Valid Hook Usage Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/rules-of-hooks.md

An example demonstrating correct adherence to the Rules of Hooks, with hooks called unconditionally at the top level of a component and conditional `use` hook usage.

```javascript
function Component({ isSpecial, shouldFetch, fetchPromise }) {
  // ✅ Hooks at top level
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  if (!isSpecial) {
    return null;
  }

  if (shouldFetch) {
    // ✅ `use` can be conditional
    const data = use(fetchPromise);
    return <div>{data}</div>;
  }

  return <div>{name}: {count}</div>;
}
```

--------------------------------

### Gallery and Image Components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/render-and-commit.md

This example demonstrates how React calls components recursively during the rendering process to build the UI.

```javascript
export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
```

```javascript
import Gallery from './Gallery.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Gallery />);
```

```css
img { margin: 0 10px 10px 0; }
```

--------------------------------

### Adding to an array (Correct spread example in Sandpack)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/updating-arrays-in-state.md

A complete example showing how to add items to an array in state correctly using the array spread syntax.

```js
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
```

```css
button { margin-left: 5px; }
```

--------------------------------

### Basic createPortal usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/createPortal.md

An example showing the basic syntax of `createPortal` within a component's render method.

```js
<div>
  <SomeComponent />
  {createPortal(children, domNode, key?)}
</div>
```

--------------------------------

### Navigation with Suspense boundary reset

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Suspense.md

This example shows how a key on a Suspense boundary resets its state to show a fallback when navigating between different profiles.

```js
import { useState } from 'react';
import ProfilePage from './ProfilePage.js';

export default function App() {
  const [show, setShow] = useState(false);
  if (show) {
    return <ProfilePage />;
  }
  return (
    <button onClick={() => setShow(true)}>
      Open profile page
    </button>
  );
}
```

```js
import { Suspense, useState, startTransition } from 'react';
import Bio from './Bio.js';
import { fetchBio } from './data.js';

export default function ProfilePage() {
  const [user, setUser] = useState(() => ({
    id: 'alice',
    bioPromise: fetchBio('alice'),
  }));
  function navigate(id) {
    startTransition(() => {
      setUser({ id, bioPromise: fetchBio(id) });
    });
  }
  return (
    <>
      <button onClick={() => navigate('alice')}>
        Alice
      </button>
      <button onClick={() => navigate('bob')}>
        Bob
      </button>
      <Suspense key={user.id} fallback={<p>⌛ Loading profile...</p>}>
        <Bio bioPromise={user.bioPromise} />
      </Suspense>
    </>
  );
}
```

```js
import { use } from 'react';

export default function Bio({ bioPromise }) {
  const bio = use(bioPromise);
  return <p>{bio}</p>;
}
```

```js
// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.

export async function fetchBio(userId) {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 1500);
  });

  return userId === 'alice'
    ? 'Alice is a photographer and traveler.'
    : 'Bob collects vintage synthesizers.';
}
```

```css
button {
  margin-right: 8px;
}
```

--------------------------------

### Adding to an array (Mutating push() example)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/updating-arrays-in-state.md

An example demonstrating the incorrect way to add items to an array in state using push(), which mutates the array directly.

```js
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
```

```css
button { margin-left: 5px; }
```

--------------------------------

### startTransition(action)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

The `startTransition` function returned by `useTransition` lets you mark an update as a Transition. It takes an `action` function that contains state updates.

```APIDOC
## startTransition(action)

### Description
The `startTransition` function returned by `useTransition` lets you mark an update as a Transition.

### Method
startTransition(action)

### Parameters
- **action** (function) - Required - A function that updates some state by calling one or more `set` functions. React calls `action` immediately with no parameters and marks all state updates scheduled synchronously during the `action` function call as Transitions. Any async calls that are awaited in the `action` will be included in the Transition, but currently require wrapping any `set` functions after the `await` in an additional `startTransition`.

### Returns
`startTransition` does not return anything.
```

--------------------------------

### Using `resume` in a server handler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/resume.md

An example of how to use `resume` within an async handler to pipe the resumed stream to a writable stream.

```js
import { resume } from 'react-dom/server';
import {getPostponedState} from './storage';

async function handler(request, writable) {
  const postponed = await getPostponedState(request);
  const resumeStream = await resume(<App />, postponed);
  return resumeStream.pipeTo(writable)
}
```

--------------------------------

### Basic useFormStatus usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/hooks/useFormStatus.md

A basic example showing how to destructure properties from the `useFormStatus` Hook.

```js
const { pending, data, method, action } = useFormStatus();
```

--------------------------------

### Enabling multiple selection

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/select.md

Example demonstrating how to enable multiple selections and set multiple default selected options using `multiple={true}` and an array for `defaultValue`.

```js
export default function FruitPicker() {
  return (
    <label>
      Pick some fruits:
      <select
        name="selectedFruit"
        defaultValue={['orange', 'banana']}
        multiple={true}
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
}
```

```css
select { display: block; margin-top: 10px; width: 200px; }
```

--------------------------------

### CSS for font loading example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Suspense.md

Styles defining the font families and layout for the quote components.

```css
#root {
  min-height: 260px;
}
.quote {
  font-size: 20px;
  margin-top: 1em;
}
.fancy {
  font-family: 'Fancy', sans-serif;
}
.vanilla-fancy {
  font-family: 'VanillaFancy', sans-serif;
}
hr {
  margin: 16px 0;
}
```

--------------------------------

### Rendering content to document.body

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/createPortal.md

This example demonstrates how to use `createPortal` to render a paragraph directly into the `document.body`.

```js
import { createPortal } from 'react-dom';

// ...

<div>
  <p>This child is placed in the parent div.</p>
  {createPortal(
    <p>This child is placed in the document body.</p>,
    document.body
  )}
</div>
```

--------------------------------

### Styling for input (Sandpack)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useImperativeHandle.md

CSS styling for the input element in the Sandpack example.

```css
input {
  margin: 5px;
}
```

--------------------------------

### Pitfall example: Children prop with nested components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Children.md

An interactive example illustrating the pitfall where the `children` prop does not include the rendered output of nested components, leading to fewer wrappers than expected.

```js
import RowList from './RowList.js';

export default function App() {
  return (
    <RowList>
      <p>This is the first item.</p>
      <MoreRows />
    </RowList>
  );
}

function MoreRows() {
  return (
    <>
      <p>This is the second item.</p>
      <p>This is the third item.</p>
    </>
  );
}
```

```js
import { Children } from 'react';

export default function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

--------------------------------

### observeUsing(observer)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Fragment.md

Starts observing all first-level DOM children of the Fragment with the provided observer.

```APIDOC
## `observeUsing(observer)`

### Description
Starts observing all first-level DOM children of the Fragment with the provided observer.

### Parameters
- **observer** (`IntersectionObserver` | `ResizeObserver`) - Required - An `IntersectionObserver` or `ResizeObserver` instance.

### Returns
`observeUsing` does not return anything (`undefined`).

### Example
```js
const observer = new IntersectionObserver(callback, options);
fragmentRef.current.observeUsing(observer);
```
```

--------------------------------

### Reading from an external store

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useSyncExternalStore.md

Example of using `useSyncExternalStore` to read data from an external store.

```js
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}
```

--------------------------------

### Reading tasks from context

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/scaling-up-with-reducer-and-context.md

Example of a component reading tasks from the TasksContext.

```javascript
export default function TaskList() {
  const tasks = useContext(TasksContext);
  // ...
```

--------------------------------

### Correct target configuration for troubleshooting

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/target.md

Example of ensuring the `target` configuration matches the major React version during troubleshooting.

```javascript
{  target: '18' // Must match your React major version}
```

--------------------------------

### Invalid Hook Usage Examples

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/rules-of-hooks.md

Code examples that violate the Rules of Hooks, including conditional calls, calls after early returns, calls in callbacks, `use` in try/catch, and module-level calls.

```javascript
// ❌ Hook in condition
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}

// ❌ Hook after early return
if (!data) return <Loading />;
const [processed, setProcessed] = useState(data);

// ❌ Hook in callback
<button onClick={() => {
  const [clicked, setClicked] = useState(false);
}}/>

// ❌ `use` in try/catch
try {
  const data = use(promise);
} catch (e) {
  // error handling
}

// ❌ Hook at module level
const globalState = useState(0); // Outside component
```

--------------------------------

### Initialize State and Bind Methods with Constructor

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Component.md

Use the class constructor to initialize `this.state` and bind event handler methods to the class instance before the component mounts.

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // ...
  }
}
```

--------------------------------

### Complete example with non-reactive `roomId`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/removing-effect-dependencies.md

A full example demonstrating an Effect with an empty dependency array after `roomId` has been moved outside the component, making it a non-reactive, constant value.

```js
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';
const roomId = 'music';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the {roomId} room!</h1>;
}
```

```js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

--------------------------------

### Correctly Specifying Dependencies

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffect.md

An example showing how `serverUrl` and `roomId` are reactive values and must be included in the `useEffect` dependency array.

```javascript
function ChatRoom({ roomId }) { // This is a reactive value
  const [serverUrl, setServerUrl] = useState('https://localhost:1234'); // This is a reactive value too

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // This Effect reads these reactive values
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]); // ✅ So you must specify them as dependencies of your Effect
  // ...
}
```

--------------------------------

### Custom Logger Configuration

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/configuration.md

Example of a custom 'logger' function to log successful compilation events.

```js
{
  logger: {
    logEvent(filename, event) {
      if (event.kind === 'CompileSuccess') {
        console.log('Compiled:', filename);
      }
    }
  }
}
```

--------------------------------

### Example of DOM manipulation conflict

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/manipulating-the-dom-with-refs.md

This example demonstrates how manually removing a DOM element outside of React's control can lead to crashes when React tries to manage it again.

```js
import { useState, useRef } from 'react';

export default function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}>
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}
```

```css
p,
button {
  display: block;
  margin: 10px;
}
```

--------------------------------

### Providing a label for an input

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/input.md

Example demonstrating how to associate labels with inputs using nesting or `htmlFor` and `useId`.

```js
import { useId } from 'react';

export default function Form() {
  const ageInputId = useId();
  return (
    <>
      <label>
        Your first name:
        <input name="firstName" />
      </label>
      <hr />
      <label htmlFor={ageInputId}>Your age:</label>
      <input id={ageInputId} name="age" type="number" />
    </>
  );
}
```

```css
input { margin: 5px; }
```

--------------------------------

### Optimistic delete with error recovery - App.js

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md

Main application component demonstrating optimistic delete setup.

```javascript
import { useState, startTransition } from 'react';
import { deleteItem } from './actions.js';
import ItemList from './ItemList';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Build an app' },
    { id: 3, name: 'Deploy to production' },
  ]);

  async function deleteAction(id) {
    await deleteItem(id);
    startTransition(() => {
      setItems(current => current.filter(item => item.id !== id));
    });
  }

  return <ItemList items={items} deleteAction={deleteAction} />;
}
```

--------------------------------

### Basic Stopwatch Component (Start Only)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/referencing-values-with-refs.md

A React component demonstrating a stopwatch that starts counting when a button is pressed, updating the display every 10 milliseconds using `setInterval`.

```js
import { useState } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
    </>
  );
}
```

--------------------------------

### Basic logging

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/logger.md

Example demonstrating how to log compilation success and failures using the `logEvent` function.

```js
{
  logger: {
    logEvent(filename, event) {
      switch (event.kind) {
        case 'CompileSuccess': {
          console.log(`✅ Compiled: ${filename}`);
          break;
        }
        case 'CompileError': {
          console.log(`❌ Skipped: ${filename}`);
          break;
        }
        default: {}
      }
    }
  }
}
```

--------------------------------

### Starting the stream with onShellReady

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/renderToPipeableStream.md

The onShellReady callback fires when the entire shell has been rendered. Use this to set headers and begin piping the stream to the response.

```javascript
const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.setHeader('content-type', 'text/html');
    pipe(response);
  }
});
```

--------------------------------

### Imperative DOM manipulation example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/reacting-to-input-with-state.md

An example demonstrating imperative DOM manipulation to toggle input fields, update text content, and manage form submission without React.

```js
let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = 'Save Profile';
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = 'Edit Profile';
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
  firstNameText.textContent = firstName;
  lastNameText.textContent = lastName;
  helloText.textContent = (
    'Hello ' +
    firstName + ' ' +
    lastName + '!'
  );
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
```

```json
{
  "hardReloadOnChange": true
}
```

```html
<form id="form">
  <label>
    First name:
    <b id="firstNameText">Jane</b>
    <input
      id="firstNameInput"
      value="Jane"
      style="display: none">
  </label>
  <label>
    Last name:
    <b id="lastNameText">Jacobs</b>
    <input
      id="lastNameInput"
      value="Jacobs"
      style="display: none">
  </label>
  <button type="submit" id="editButton">Edit Profile</button>
  <p><i id="helloText">Hello, Jane Jacobs!</i></p>
</form>

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
label { display: block; margin-bottom: 20px; }
</style>
```

--------------------------------

### Package Dependencies for useTransition Error Boundary Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

Lists the project's dependencies, including React, ReactDOM, React Scripts, and React Error Boundary.

```json
{
  "dependencies": {
    "react": "19.0.0-rc-3edc000d-20240926",
    "react-dom": "19.0.0-rc-3edc000d-20240926",
    "react-scripts": "^5.0.0",
    "react-error-boundary": "4.0.3"
  },
  "main": "/index.js"
}
```

--------------------------------

### Read props in MyButton

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md

Finally, change `MyButton` to *read* the props you have passed from its parent component:

```js
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```

--------------------------------

### src/App.js

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rsc/use-client.md

The main application component, which imports and renders other components.

```javascript
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
```

--------------------------------

### Updating a Hydrated Root Component Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/hydrateRoot.md

This example demonstrates how to update a hydrated root component using `root.render` after initial hydration, showing that React preserves state if the component tree structure matches.

```html
<!--
  All HTML content inside <div id="root">...</div> was
  generated by rendering <App /> with react-dom/server.
-->
<div id="root"><h1>Hello, world! <!-- -->0</h1><input placeholder="Type something here"/></div>
```

```javascript
import { hydrateRoot } from 'react-dom/client';
import './styles.css';
import App from './App.js';

const root = hydrateRoot(
  document.getElementById('root'),
  <App counter={0} />
);

let i = 0;
setInterval(() => {
  root.render(<App counter={i} />);
  i++;
}, 1000);
```

```javascript
export default function App({counter}) {
  return (
    <>
      <h1>Hello, world! {counter}</h1>
      <input placeholder="Type something here" />
    </>
  );
}
```

--------------------------------

### Solution for Nested Recipe List

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/rendering-lists.md

Complete code demonstrating how to render nested lists of recipes and their ingredients using two `map` calls.

```javascript
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
```

```javascript
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];
```

--------------------------------

### Handling Keyboard Events in React

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/common.md

This example illustrates the usage of `onKeyDown` and `onKeyUp` event handlers to capture keyboard input on an `input` element.

```javascript
export default function KeyboardExample() {
  return (
    <label>
      First name:
      <input
        name="firstName"
        onKeyDown={e => console.log('onKeyDown:', e.key, e.code)}
        onKeyUp={e => console.log('onKeyUp:', e.key, e.code)}
      />
    </label>
  );
}
```

```css
label { display: block; }
input { margin-left: 10px; }
```

--------------------------------

### Consolidating Multiple React Context Providers

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useContext.md

This example shows how to create a `MyProviders` component to wrap multiple `ThemeContext.Provider` and `CurrentUserContext.Provider` instances. This pattern helps manage complex context hierarchies, making the root component cleaner while still allowing it to control some state.

```javascript
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <WelcomePanel />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </MyProviders>
  );
}

function MyProviders({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext value={theme}>
      <CurrentUserContext
        value={{
          currentUser,
          setCurrentUser
        }}
      >
        {children}
      </CurrentUserContext>
    </ThemeContext>
  );
}

function WelcomePanel({ children }) {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ?
        <Greeting /> :
        <LoginForm />
      }
    </Panel>
  );
}

function Greeting() {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    <p>You logged in as {currentUser.name}.</p>
  )
}

function LoginForm() {
  const {setCurrentUser} = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';
  return (
    <>
      <label>
        First name{': '}
        <input
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name{': '}
        <input
        required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + ' ' + lastName
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

```css
label {
  display: block;
}

.panel-light,
.panel-dark {
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
}
.panel-light {
  color: #222;
  background: #fff;
}

.panel-dark {
  color: #fff;
  background: rgb(23, 32, 42);
}

.button-light,
.button-dark {
  border: 1px solid #777;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
}

.button-dark {
  background: #222;
  color: #fff;
}

.button-light {
  background: #fff;
  color: #222;
}
```

--------------------------------

### JSON API Data

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/thinking-in-react.md

Example data returned by the JSON API for products.

```json
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
```

--------------------------------

### Corrected example using `useEffectEvent`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/separating-events-from-effects.md

This example refactors the previous buggy code to use `useEffectEvent` for the `onMove` handler, correctly capturing the latest `canMove` state without suppressing the linter.

```js
import { useState, useEffect } from 'react';
import { useEffectEvent } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  const onMove = useEffectEvent(e => {
    if (canMove) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  });

  useEffect(() => {
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}
```

```css
body {
  height: 200px;
}
```

--------------------------------

### Opting into compilation

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives.md

Example of using 'use memo' directive to opt a component into compilation.

```js
function MyComponent() {
  "use memo"; // Opt this component into compilation
  return <div>{/* ... */}</div>;
}
```

--------------------------------

### Upgrade Redwood SDK to Latest Beta

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/12/03/critical-security-vulnerability-in-react-server-components.md

Install the latest beta version of Redwood SDK to ensure you are on rwsdk>=1.0.0-alpha.0.

```bash
npm install rwsdk@latest
```

--------------------------------

### onCompositionStart

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/common.md

A `CompositionEvent` handler function. Fires when an input method editor starts a new composition session.

```APIDOC
## Prop: `onCompositionStart`

### Description
A [`CompositionEvent` handler](#compositionevent-handler) function. Fires when an [input method editor](https://developer.mozilla.org/en-US/docs/Glossary/Input_method_editor) starts a new composition session.

### Type
`function`

### Parameters
- **event** (`CompositionEvent`) - The synthetic composition event object.
```

--------------------------------

### State as a Snapshot Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/referencing-values-with-refs.md

This example demonstrates that state acts as a snapshot. When the 'Send' button is clicked, the alert shows the value of 'text' at the time of the click, even if the input is edited afterwards.

```javascript
import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + text);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
```

--------------------------------

### Solution: Memoizing object dependency with useMemo

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

Shows how to wrap the `options` object creation in `useMemo` to ensure it only changes when `roomId` changes, preventing unnecessary Effect re-fires.

```js
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = useMemo(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Only changes when roomId changes

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // ✅ Only changes when options changes
  // ...
```

--------------------------------

### Initial App Component Without View Transitions

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/04/23/react-labs-view-transitions-activity-and-more.md

This `App.js` component demonstrates a basic routing setup that does not yet incorporate any View Transition animations.

```js
import TalkDetails from './Details'; import Home from './Home'; import {useRouter} from './router';

export default function App() {
  const {url} = useRouter();

  // 🚩This version doesn't include any animations yet
  return url === '/' ? <Home /> : <TalkDetails />;
}
```

--------------------------------

### Importing and calling `preinit`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preinit.md

How to import and use `preinit` from `react-dom` within a component.

```js
import { preinit } from 'react-dom';

function AppRoot() {
  preinit("https://example.com/script.js", {as: "script"});
  // ...
}
```

--------------------------------

### Misplaced State Solution Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/preserving-and-resetting-state.md

This example fixes the misplaced state issue by using a stable `contact.id` as the key for list items, ensuring state is correctly associated with each contact regardless of order.

```javascript
import { useState } from 'react';
import Contact from './Contact.js';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map(contact =>
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
```

```javascript
import { useState } from 'react';

export default function Contact({ contact }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p><b>{contact.name}</b></p>
      {expanded &&
        <p><i>{contact.email}</i></p>
      }
      <button onClick={() => {
        setExpanded(!expanded);
      }}>
        {expanded ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}
```

```css
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 20px;
}
label {
  display: block;
  margin: 10px 0;
}
button {
  margin-right: 10px;
  margin-bottom: 10px;
}
```

--------------------------------

### Search results with Suspense

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useDeferredValue.md

An example demonstrating how a component suspends while fetching data, causing the UI to show a fallback.

```javascript
import { Suspense, useState } from 'react';
import SearchResults from './SearchResults.js';

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={query} />
      </Suspense>
    </>
  );
}
```

```javascript
import {use} from 'react';
import { fetchData } from './data.js';

export default function SearchResults({ query }) {
  if (query === '') {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return <p>No matches for <i>"{query}"</i></p>;
  }
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}
```

```javascript
// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  if (url.startsWith('/search?q=')) {
    return await getSearchResults(url.slice('/search?q='.length));
  } else {
    throw Error('Not implemented');
  }
}

async function getSearchResults(query) {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  const allAlbums = [{
    id: 13,
    title: 'Let It Be',
    year: 1970
  }, {
    id: 12,
    title: 'Abbey Road',
    year: 1969
  }, {
    id: 11,
    title: 'Yellow Submarine',
    year: 1969
  }, {
    id: 10,
    title: 'The Beatles',
    year: 1968
  }, {
    id: 9,
    title: 'Magical Mystery Tour',
    year: 1967
  }, {
    id: 8,
    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    year: 1967
  }, {
    id: 7,
    title: 'Revolver',
    year: 1966
  }, {
    id: 6,
    title: 'Rubber Soul',
    year: 1965
  }, {
    id: 5,
    title: 'Help!',
    year: 1965
  }, {
    id: 4,
    title: 'Beatles For Sale',
    year: 1964
  }, {
    id: 3,
    title: 'A Hard Day\'s Night',
    year: 1964
  }, {
    id: 2,
    title: 'With The Beatles',
    year: 1963
  }, {
    id: 1,
    title: 'Please Please Me',
    year: 1963
  }];

  const lowerQuery = query.trim().toLowerCase();
  return allAlbums.filter(album => {
    const lowerTitle = album.title.toLowerCase();
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(' ' + lowerQuery) !== -1
    )
  });
}
```

```css
input { margin: 10px; }
```

--------------------------------

### BucketList with Immer

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useState.md

Example demonstrating how to use `useImmer` to update a list of objects immutably while writing mutable-like code.

```js
import { useState } from 'react';
import { useImmer } from 'use-immer';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    updateList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
```

```json
{
  "dependencies": {
    "immer": "1.7.3",
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "use-immer": "0.5.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

--------------------------------

### Gradual adoption with "use memo"

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives/use-memo.md

Optimizing components incrementally during gradual adoption.

```js
// Start by optimizing leaf components
function Button({ onClick, children }) {
  "use memo";
  // ...
}

// Gradually move up the tree as you verify behavior
function ButtonGroup({ buttons }) {
  "use memo";
  // ...
}
```

--------------------------------

### Importing and using `memo`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/memo.md

Example of importing `memo` from React and using it to memoize a functional component.

```javascript
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});
```

--------------------------------

### Initial Effect Setup

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/removing-effect-dependencies.md

An Effect demonstrating how to establish and terminate a connection, with the dependency array initially left empty.

```js
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  	// ...
}
```

--------------------------------

### Basic `resume` call

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/resume.md

Streams a pre-rendered React tree to a Readable Web Stream.

```js
const stream = await resume(reactNode, postponedState, options?)
```

--------------------------------

### Context passing through intermediate components example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/passing-data-deeply-with-context.md

This example demonstrates how a Heading component automatically receives its level from the closest Section component using React Context, even with multiple intermediate components.

```javascript
import Heading from './Heading.js';
import Section from './Section.js';

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}
```

```javascript
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

```javascript
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
```

```javascript
import { createContext } from 'react';

export const LevelContext = createContext(0);
```

```css
.section {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #aaa;
}

.fancy {
  border: 4px dashed pink;
}
```

--------------------------------

### Declaring a ref in a class component (Intro)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/createRef.md

An example showing how to declare a ref using `createRef` within a class component.

```js
class MyInput extends Component {
  inputRef = createRef();
  // ...
}
```

--------------------------------

### React Application Entry Point with StrictMode and Router

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/04/23/react-labs-view-transitions-activity-and-more.md

Initializes the React application, rendering the `App` component within `StrictMode` and a custom `Router` for enhanced development practices and routing.

```js
import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import './animations.css';

import App from './App';
import {Router} from './router';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
```

--------------------------------

### Buggy Ref Callback Example (without StrictMode)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/StrictMode.md

This example demonstrates a memory leak bug in a callback ref where items are added to a list but never removed, leading to a growing list and broken functionality. This code is not wrapped in StrictMode.

```javascript
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

const root = createRoot(document.getElementById("root"));
// ❌ Not using StrictMode.
root.render(<App />);
```

```javascript
import { useRef, useState } from "react";

export default function CatFriends() {
  const itemsRef = useRef([]);
  const [catList, setCatList] = useState(setupCatList);
  const [cat, setCat] = useState('neo');

  function scrollToCat(index) {
    const list = itemsRef.current;
    const {node} = list[index];
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  const cats = catList.filter(c => c.type === cat)

  return (
    <>
      <nav>
        <button onClick={() => setCat('neo')}>Neo</button>
        <button onClick={() => setCat('millie')}>Millie</button>
      </nav>
      <hr />
      <nav>
        <span>Scroll to:</span>{cats.map((cat, index) => (
          <button key={cat.src} onClick={() => scrollToCat(index)}>
            {index}
          </button>
        ))}
      </nav>
      <div>
        <ul>
          {cats.map((cat) => (
            <li
              key={cat.src}
              ref={(node) => {
                const list = itemsRef.current;
                const item = {cat: cat, node};
                list.push(item);
                console.log(`✅ Adding cat to the map. Total cats: ${list.length}`);
                if (list.length > 10) {
                  console.log('❌ Too many cats in the list!');
                }
                return () => {
                  // 🚩 No cleanup, this is a bug!
                }
              }}
            >
              <img src={cat.src} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push({type: 'neo', src: "https://placecats.com/neo/320/240?" + i});
  }
  for (let i = 0; i < 10; i++) {
    catList.push({type: 'millie', src: "https://placecats.com/millie/320/240?" + i});
  }

  return catList;
}

```

```css
div {
  width: 100%;
  overflow: hidden;
}

nav {
  text-align: center;
}

button {
  margin: .25rem;
}

ul,
li {
  list-style: none;
  white-space: nowrap;
}

li {
  display: inline;
  padding: 0.5rem;
}
```

--------------------------------

### Example `render` function

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/forwardRef.md

A `render` function passed to `forwardRef` that uses the `ref` prop on an `<input>` element.

```js
const MyInput = forwardRef(function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
});
```

--------------------------------

### Install React Compiler as a Development Dependency

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/installation.md

Add `babel-plugin-react-compiler` to your project's development dependencies using npm, Yarn, or pnpm.

```bash
npm install -D babel-plugin-react-compiler@latest
```

```bash
yarn add -D babel-plugin-react-compiler@latest
```

```bash
pnpm install -D babel-plugin-react-compiler@latest
```

--------------------------------

### Using a data library for fetching

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/synchronizing-with-effects.md

An example demonstrating the use of a data library (e.g., TanStack Query, useSWR) to abstract data fetching, deduplicate requests, and cache responses.

```js
function TodoList() {
  const todos = useSomeDataLibrary(`/api/user/${userId}/todos`);
  // ...
```

--------------------------------

### Better solution: Moving object creation inside the `useMemo` calculation

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

Demonstrates the most efficient way to handle object dependencies for `useMemo` by creating the `searchOptions` object directly within the `useMemo` calculation function, simplifying dependencies.

```js
function Dropdown({ allItems, text }) {
  const visibleItems = useMemo(() => {
    const searchOptions = { matchMode: 'whole-word', text };
    return searchItems(allItems, searchOptions);
  }, [allItems, text]); // ✅ Only changes when allItems or text changes
  // ...
```

--------------------------------

### Valid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization.md

Examples of correct code for this rule:

```js
// ✅ Complete dependencies
function Component({ data, filter }) {
  const filtered = useMemo(
    () => data.filter(filter),
    [data, filter] // All dependencies included
  );

  return <List items={filtered} />;
}

// ✅ Or let the compiler handle it
function Component({ data, filter }) {
  // No manual memoization needed
  const filtered = data.filter(filter);
  return <List items={filtered} />;
}
```

--------------------------------

### Invalid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization.md

Examples of incorrect code for this rule:

```js
// ❌ Missing dependencies in useMemo
function Component({ data, filter }) {
  const filtered = useMemo(
    () => data.filter(filter),
    [data] // Missing 'filter' dependency
  );

  return <List items={filtered} />;
}

// ❌ Missing dependencies in useCallback
function Component({ onUpdate, value }) {
  const handleClick = useCallback(() => {
    onUpdate(value);
  }, [onUpdate]); // Missing 'value'

  return <button onClick={handleClick}>Update</button>;
}
```

--------------------------------

### Unnecessary: using renderToString on the client

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/renderToString.md

Example of using renderToString on the client, which is unnecessary and increases bundle size.

```js
// 🚩 Unnecessary: using renderToString on the client
import { renderToString } from 'react-dom/server';

const html = renderToString(<MyIcon />);
console.log(html); // For example, "<svg>...</svg>"
```

--------------------------------

### Chat Room Example - Notification Utility

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/reusing-logic-with-custom-hooks.md

A utility function to display toast notifications.

```javascript
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showNotification(message, theme = 'dark') {
  Toastify({
    text: message,
    duration: 2000,
    gravity: 'top',
    position: 'right',
    style: {
      background: theme === 'dark' ? 'black' : 'white',
      color: theme === 'dark' ? 'white' : 'black'
    }
  }).showToast();
}
```

--------------------------------

### Writing markup with JSX

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

Example of existing HTML markup that doesn't quite work when pasted into a React component.

```js
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve spectrum technology
    </ul>
  );
}
```

```css
img { height: 90px; }
```

--------------------------------

### Link React Dependency for Local Development

Source: https://github.com/reactjs/react.dev/blob/main/src/content/warnings/invalid-hook-call-warning.md

Run this command from a linked library's folder (`mylib`) to ensure it uses the React instance from the main application (`myapp`), resolving duplicate React issues.

```bash
npm link ../myapp/node_modules/react
```

--------------------------------

### Invalid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/globals.md

Examples of incorrect code for this rule:

```js
// ❌ Global counter
let renderCount = 0;
function Component() {
  renderCount++; // Mutating global
  return <div>Count: {renderCount}</div>;
}

// ❌ Modifying window properties
function Component({userId}) {
  window.currentUser = userId; // Global mutation
  return <div>User: {userId}</div>;
}

// ❌ Global array push
const events = [];
function Component({event}) {
  events.push(event); // Mutating global array
  return <div>Events: {events.length}</div>;
}

// ❌ Cache manipulation
const cache = {};
function Component({id}) {
  if (!cache[id]) {
    cache[id] = fetchData(id); // Modifying cache during render
  }
  return <div>{cache[id]}</div>;
}
```

--------------------------------

### Correct `source` path (Absolute from Project Root)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/gating.md

Another example of a correct `source` path using an absolute path from the project root.

```js
// ✅ Also correct: Absolute path from project root
{
  source: './src/utils/flags',
  importSpecifierName: 'flag'
}
```

--------------------------------

### Valid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/gating.md

Examples of correct code for this rule:

```js
// ✅ Complete gating configuration
module.exports = {
  plugins: [
    ['babel-plugin-react-compiler', {
      gating: {
        importSpecifierName: 'isCompilerEnabled', // exported function name
        source: 'featureFlags' // module name
      }
    }]
  ]
};

// featureFlags.js
export function isCompilerEnabled() {
  // ...
}

// ✅ No gating (compile everything)
module.exports = {
  plugins: [
    ['babel-plugin-react-compiler', {
      // No gating field - compiles all components
    }]
  ]
};
```

--------------------------------

### Demonstrating shorthand Fragment DOM structure

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Fragment.md

This example shows how using shorthand Fragments (`<>...</>`) allows multiple components to render their content as siblings in the DOM without introducing wrapper elements.

```js
export default function Blog() {
  return (
    <>
      <Post title="An update" body="It's been a while since I posted..." />
      <Post title="My new blog" body="I am starting a new blog!" />
    </>
  )
}

function Post({ title, body }) {
  return (
    <>
      <PostTitle title={title} />
      <PostBody body={body} />
    </>
  );
}

function PostTitle({ title }) {
  return <h1>{title}</h1>
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
```

--------------------------------

### Invalid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/gating.md

Examples of incorrect code for this rule:

```js
// ❌ Missing required fields
module.exports = {
  plugins: [
    ['babel-plugin-react-compiler', {
      gating: {
        importSpecifierName: '__experimental_useCompiler'
        // Missing 'source' field
      }
    }]
  ]
};

// ❌ Invalid gating type
module.exports = {
  plugins: [
    ['babel-plugin-react-compiler', {
      gating: '__experimental_useCompiler' // Should be object
    }]
  ]
};
```

--------------------------------

### Good: Lazy initialization

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rules/components-and-hooks-must-be-pure.md

Example of lazy initialization, which is acceptable if it doesn't affect other components.

```js
function ExpenseForm() {
  SuperCalculator.initializeIfNotReady(); // ✅ Good: if it doesn't affect other components
  // Continue rendering...
}
```

--------------------------------

### Using multiple Profiler components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Profiler.md

This example demonstrates how to use multiple Profiler components to measure different parts of an application side-by-side.

```javascript
<App>
  <Profiler id="Sidebar" onRender={onRender}>
    <Sidebar />
  </Profiler>
  <Profiler id="Content" onRender={onRender}>
    <Content />
  </Profiler>
</App>
```

--------------------------------

### Valid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/exhaustive-deps.md

Examples of correct code for this rule.

```js
// ✅ All dependencies included
useEffect(() => {
  console.log(count);
}, [count]);

// ✅ All dependencies included
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

--------------------------------

### Chat Room Example - App Component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/reusing-logic-with-custom-hooks.md

The main application component that manages the chat room selection.

```javascript
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
      />
    </>
  );
}
```

--------------------------------

### Using VideoPlayer Component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/synchronizing-with-effects.md

Example of how a VideoPlayer component might be used with an isPlaying prop.

```js
<VideoPlayer isPlaying={isPlaying} />;
```

--------------------------------

### Rendering an app to HTML

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/renderToStaticMarkup.md

Example of importing and using `renderToStaticMarkup` to render a React component to an HTML string on the server.

```js
import { renderToStaticMarkup } from 'react-dom/server';

const html = renderToStaticMarkup(<Page />);
```

--------------------------------

### Invalid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/exhaustive-deps.md

Examples of incorrect code for this rule.

```js
// ❌ Missing dependency
useEffect(() => {
  console.log(count);
}, []); // Missing 'count'

// ❌ Missing prop
useEffect(() => {
  fetchUser(userId);
}, []); // Missing 'userId'

// ❌ Incomplete dependencies
useMemo(() => {
  return items.sort(sortOrder);
}, [items]); // Missing 'sortOrder'
```

--------------------------------

### Basic signature for renderToReadableStream

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/renderToReadableStream.md

Call this function to start rendering a React tree to a Web Stream. It returns a Promise that resolves to a ReadableStream.

```js
const stream = await renderToReadableStream(reactNode, options?)
```

--------------------------------

### Basic meta tag for keywords

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/meta.md

Example of a meta tag for keywords, typically placed in the document head.

```js
<meta name="keywords" content="React, JavaScript, semantic markup, html" />
```

--------------------------------

### Valid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/component-hook-factories.md

Examples of correct code for this rule:

```js
// ✅ Component defined at module level
function Component({ defaultValue }) {
  // ...
}

// ✅ Custom hook at module level
function useData(endpoint) {
  // ...
}
```

--------------------------------

### Invalid

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/component-hook-factories.md

Examples of incorrect code for this rule:

```js
// ❌ Factory function creating components
function createComponent(defaultValue) {
  return function Component() {
    // ...
  };
}

// ❌ Component defined inside component
function Parent() {
  function Child() {
    // ...
  }

  return <Child />;
}

// ❌ Hook factory function
function createCustomHook(endpoint) {
  return function useData() {
    // ...
  };
}
```

--------------------------------

### `useMemo` without a dependency array

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

This example shows `useMemo` re-running its calculation on every render because the dependency array is omitted.

```js
function TodoList({ todos, tab }) {
  // 🔴 Recalculates every time: no dependency array
  const visibleTodos = useMemo(() => filterTodos(todos, tab));
  // ...
```

--------------------------------

### Using startTransition to Mark State Updates

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

Wraps a state update with `startTransition` to mark it as a non-blocking transition, preventing UI freezes during updates.

```js
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```

--------------------------------

### Fixed example using immutable updates

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/updating-arrays-in-state.md

This example demonstrates the correct way to update objects within arrays by using `map` and object spread to create new objects and arrays, preventing shared state issues.

```javascript
import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (

```

--------------------------------

### src/inspirations.js

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rsc/use-client.md

An array of inspirational quotes.

```javascript
export default [
  "Don’t let yesterday take up too much of today.” — Will Rogers",
  "Ambition is putting a ladder against the sky.",
  "A joy that's shared is a joy made double.",
];
```

--------------------------------

### Capture Phase Event Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/responding-to-events.md

Shows how to use `onClickCapture` to catch events on child elements even if they stop propagation, demonstrating the capture phase.

```js
<div onClickCapture={() => { /* this runs first */ }}>
  <button onClick={e => e.stopPropagation()} />
  <button onClick={e => e.stopPropagation()} />
</div>
```

--------------------------------

### Nested Component Definition Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/preserving-and-resetting-state.md

This example demonstrates how defining a component function (MyTextField) inside another component (MyComponent) causes its state to reset on every re-render of the parent component, because React perceives it as a 'different' component.

```js
import { useState } from 'react';

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Clicked {counter} times</button>
    </>
  );
}
```

--------------------------------

### Gradual adoption

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-compiler/directives.md

Example of how to gradually adopt React Compiler using 'annotation' mode and then 'infer' mode with directives.

```js
// Start with annotation mode
{
  compilationMode: 'annotation'
}

// Opt in stable components
function StableComponent() {
  "use memo";
  // Well-tested component
}

// Later, switch to infer mode and opt out problematic ones
function ProblematicComponent() {
  "use no memo"; // Fix issues before removing
  // ...
}
```

--------------------------------

### Conditional rendering

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

Example showing how to conditionally render JSX elements using JavaScript operators like `&&`.

```js
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
```

--------------------------------

### Exposing a DOM node directly

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useImperativeHandle.md

Example showing how to expose a DOM node directly by passing the `ref` prop to the node.

```js
function MyInput({ ref }) {
  return <input ref={ref} />;
};
```

--------------------------------

### Chat Room Example with Unintended Re-synchronization

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/removing-effect-dependencies.md

An interactive example demonstrating how updating a state variable (message) that is unrelated to the chat connection can still cause the Effect to re-synchronize and re-connect due to the 'options' object being recreated on every re-render.

```js
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  // Temporarily disable the linter to demonstrate the problem
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    serverUrl: serverUrl,
    roomId: roomId
  };

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
```

```js
export function createConnection({ serverUrl, roomId }) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

--------------------------------

### Collecting CSS rules on the server

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useInsertionEffect.md

An example showing how to collect CSS rules on the server during rendering, as useInsertionEffect does not run on the server.

```js
let collectedRulesSet = new Set();

function useCSS(rule) {
  if (typeof window === 'undefined') {
    collectedRulesSet.add(rule);
  }
  useInsertionEffect(() => {
    // ...
  });
  return rule;
}
```

--------------------------------

### Array.prototype.reduce example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/extracting-state-logic-into-a-reducer.md

Demonstrates the basic usage of the JavaScript Array.prototype.reduce method to accumulate a single value from an array.

```js
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce(
  (result, number) => result + number
); // 1 + 2 + 3 + 4 + 5
```

--------------------------------

### Pre-rendering UI with React Activity Component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/04/23/react-labs-view-transitions-activity-and-more.md

Demonstrates using the `<Activity>` component within `<ViewTransition>` to pre-render different parts of the UI (Home, Details) based on the current URL, improving perceived performance by fetching data ahead of navigation.

```js
<ViewTransition>
  <Activity mode={url === '/' ? 'visible' : 'hidden'}>
    <Home />
  </Activity>
  <Activity mode={url === '/details/1' ? 'visible' : 'hidden'}>
    <Details id={id} />
  </Activity>
  <Activity mode={url === '/details/1' ? 'visible' : 'hidden'}>
    <Details id={id} />
  </Activity>
<ViewTransition>
```

--------------------------------

### Client Component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/rsc/server-components.md

An example of a Client Component that receives a promise from the server and uses the 'use' hook to await its resolution.

```js
// Client Component
"use client";
import {use} from 'react';

function Comments({commentsPromise}) {
  // NOTE: this will resume the promise from the server.
  // It will suspend until the data is available.
  const comments = use(commentsPromise);
  return comments.map(comment => <p>{comment}</p>);
}
```

--------------------------------

### Chat Room with Reactive Dependencies

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffect.md

An example demonstrating useEffect with serverUrl and roomId as dependencies, causing re-connection when these values change.

```js
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
      <label>
        Your message:{' '}
        <input value={message} onChange={e => setMessage(e.target.value)} />
      </label>
    </>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
        <button onClick={() => setShow(!show)}>
          {show ? 'Close chat' : 'Open chat'}
        </button>
      </label>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId}/>}
    </>
  );
}
```

```js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { margin-bottom: 10px; }
button { margin-left: 5px; }
```

--------------------------------

### Controlling stylesheet precedence

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/link.md

Example demonstrating how to use the `precedence` prop to control the order of stylesheets in the document head.

```javascript
import ShowRenderedHTML from './ShowRenderedHTML.js';

export default function HomePage() {
  return (
    <ShowRenderedHTML>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent/>
      ...
    </ShowRenderedHTML>
  );
}

function FirstComponent() {
  return <link rel="stylesheet" href="first.css" precedence="first" />;
}

function SecondComponent() {
  return <link rel="stylesheet" href="second.css" precedence="second" />;
}

function ThirdComponent() {
  return <link rel="stylesheet" href="third.css" precedence="first" />;
}
```

--------------------------------

### Valid HTML Markup

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/writing-markup-with-jsx.md

An example of standard HTML markup that will be used to demonstrate conversion to JSX.

```html
<h1>Hedy Lamarr's Todos</h1>
<img
  src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>
```

--------------------------------

### Create New Expo App with React Compiler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2025/10/07/react-compiler-1.md

Use this command to initialize a new Expo project. Expo SDK 54 and up has React Compiler enabled by default.

```shell
npx create-expo-app@latest
```

--------------------------------

### Sandpack CSS Styles

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

CSS styles for a Sandpack example, likely defining basic layout and theme colors.

```css
  display: block;
  margin-top: 10px;
}

.dark {
  background-color: black;
  color: white;
}

.light {
  background-color: white;
  color: black;
}
```

--------------------------------

### Basic inline stylesheet

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/style.md

An example of rendering a simple inline CSS stylesheet using the <style> component.

```jsx
<style>{` p { color: red; } `}</style>
```

--------------------------------

### Switch to new createRoot API

Source: https://github.com/reactjs/react.dev/blob/main/src/content/blog/2021/12/17/react-conf-2021-recap.md

Example of how to switch from the old ReactDOM.render to the new ReactDOM.createRoot API.

```js
// before
const container = document.getElementById('root');
ReactDOM.render(<App />, container);

// after
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
```

--------------------------------

### onSeeking

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/common.md

An Event handler function. Fires when a seek operation starts.

```APIDOC
## Event Handler: `onSeeking`\n\n### Description\nAn `Event` handler function. Fires when a seek operation starts.\n\n### Type\n`function` (Event handler)\n\n### Usage\nThis handler is a prop on media elements (e.g., `<audio>`, `<video>`). It accepts a function that will be called when the associated event occurs.\n\n### Parameters\n- **event** (object) - The synthetic event object.
```

--------------------------------

### JavaScript Array Map Method Example

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/tutorial-tic-tac-toe.md

Illustrates the basic usage of the JavaScript `Array.prototype.map()` method to transform array elements.

```jsx
[1, 2, 3].map((x) => x * 2) // [2, 4, 6]
```

--------------------------------

### Create React Router Project

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/creating-a-react-app.md

Command to create a new React Router framework project.

```shell
npx create-react-router@latest
```

--------------------------------

### getSnapshot implementation

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useSyncExternalStore.md

Function to get the current value of navigator.onLine.

```js
function getSnapshot() {
  return navigator.onLine;
}
```

--------------------------------

### Creating Context Objects

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/createContext.md

Demonstrates how to import `createContext` and declare two context objects with default values.

```js
import { createContext } from 'react';

const ThemeContext = createContext('light');
const AuthContext = createContext(null);
```

--------------------------------

### Providing a label for a select box

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/select.md

Example demonstrating how to associate a label with a select box using nesting or `htmlFor` with `useId`.

```js
import { useId } from 'react';

export default function Form() {
  const vegetableSelectId = useId();
  return (
    <>
      <label>
        Pick a fruit:
        <select name="selectedFruit">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <hr />
      <label htmlFor={vegetableSelectId}>
        Pick a vegetable:
      </label>
      <select id={vegetableSelectId} name="selectedVegetable">
        <option value="cucumber">Cucumber</option>
        <option value="corn">Corn</option>
        <option value="tomato">Tomato</option>
      </select>
    </>
  );
}
```

```css
select { margin: 5px; }
```

--------------------------------

### Optimistically adding to a list

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md

Example demonstrating how to optimistically add items to a list using `useOptimistic` with a reducer pattern.

```js
import { useState, startTransition } from 'react';
import { addTodo } from './actions.js';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' }
  ]);

  async function addTodoAction(newTodo) {
    const savedTodo = await addTodo(newTodo);
    startTransition(() => {
      setTodos(todos => [...todos, savedTodo]);
    });
  }

  return <TodoList todos={todos} addTodoAction={addTodoAction} />;
}
```

```js
import { useOptimistic, startTransition } from 'react';

export default function TodoList({ todos, addTodoAction }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo) => [
      ...currentTodos,
      { id: newTodo.id, text: newTodo.text, pending: true }
    ]
  );

  function handleAddTodo(text) {
    const newTodo = { id: crypto.randomUUID(), text: text };
    startTransition(async () => {
      addOptimisticTodo(newTodo);
      await addTodoAction(newTodo);
    });
  }

  return (
    <div>
      <button onClick={() => handleAddTodo('New todo')}>Add Todo</button>
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id}>
            {todo.text} {todo.pending && "(Adding...)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

```js
export async function addTodo(todo) {
  await new Promise((res) => setTimeout(res, 1000));
  // In a real app, this would save to the server
  return { ...todo, pending: false };
}
```

--------------------------------

### Example History Array Structure

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/tutorial-tic-tac-toe.md

Illustrates the structure of the 'history' array, which stores past board states for time travel functionality.

```jsx
[
  // Before first move
  [null, null, null, null, null, null, null, null, null],
  // After first move
  [null, null, null, null, 'X', null, null, null, null],
  // After second move
  [null, null, null, null, 'X', null, null, null, 'O'],
  // ...
]
```

--------------------------------

### Basic cacheSignal usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/cacheSignal.md

Call cacheSignal to get an AbortSignal.

```js
const signal = cacheSignal();
```

--------------------------------

### Initial Mail Client Setup (Single Selection)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/choosing-the-state-structure.md

This code demonstrates a mail client where only a single letter can be selected at a time, using a `selectedId` state variable. It includes `App.js`, `Letter.js`, `data.js`, and `style.css`.

```javascript
import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState(null);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setSelectedId(toggledId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.id === selectedId
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
```

```javascript
export default function Letter({
  letter,
  onToggle,
  isSelected,
}) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}
```

```javascript
export const letters = [{
  id: 0,
  subject: 'Ready for adventure?',
  isStarred: true,
}, {
  id: 1,
  subject: 'Time to check in!',
  isStarred: false,
}, {
  id: 2,
  subject: 'Festival Begins in Just SEVEN Days!',
  isStarred: false,
}];
```

```css
input { margin: 5px; }
li { border-radius: 5px; }
label { width: 100%; padding: 5px; display: inline-block; }
.selected { background: #d2eaff; }
```

--------------------------------

### Chat Room with Empty Dependencies

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffect.md

An example demonstrating useEffect with an empty dependency array, where serverUrl and roomId are hardcoded and not reactive.

```js
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';
const roomId = 'music';

function ChatRoom() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <label>
        Your message:{' '}
        <input value={message} onChange={e => setMessage(e.target.value)} />
      </label>
    </>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom />}
    </>
  );
}
```

```js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

--------------------------------

### Passing props to a component

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/describing-the-ui.md

Example demonstrating how parent components pass information to child components using props, including objects, arrays, functions, and JSX.

```js
import { getImageUrl } from './utils.js'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

```js
export function getImageUrl(person, size = 's') {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    size +
    '.jpg'
  );
}
```

```css
.card {
  width: fit-content;
  margin: 5px;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 20px;
  background: #fff;
}
.avatar {
  margin: 20px;
  border-radius: 50%;
}
```

--------------------------------

### Basic `flushSync` Call

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/flushSync.md

Demonstrates importing `flushSync` and using it to wrap a state update, forcing it to be applied synchronously.

```js
import { flushSync } from 'react-dom';

flushSync(() => {
  setSomething(123);
});
```

--------------------------------

### Multi-line Return Statement with Parentheses

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md

Example of a component's return statement spanning multiple lines, requiring parentheses to wrap the markup.

```js
return (
  <div>
    <img src="https://react.dev/images/docs/scientists/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

--------------------------------

### `root.unmount()`

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/hydrateRoot.md

Example of calling `root.unmount` to destroy a rendered React tree.

```js
root.unmount();
```

--------------------------------

### Styling for Item and Total Components

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md

CSS styles for the `Item` and `Total` components, including layout and error display for the quantity update example.

```css
.item {
  display: flex;
  align-items: center;
  justify-content: start;
}

.item label {
  flex: 1;
  text-align: right;
}

.item input {
  margin-left: 4px;
  width: 60px;
  padding: 4px;
}

.total {
  height: 50px;
  line-height: 25px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.total div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.error {
  color: red;
}
```

--------------------------------

### Initializing the application

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/synchronizing-with-effects.md

Logic that should run only once when the application starts, placed outside components to guarantee it runs once after the browser loads the page.

```js
if (typeof window !== 'undefined') { // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

--------------------------------

### Memoizing Expensive Calculations

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/introduction.md

An example showing how React Compiler can memoize expensive calculations within components, and a note on its limitations for non-component/hook functions.

```js
// **Not** memoized by React Compiler, since this is not a component or hook
function expensivelyProcessAReallyLargeArrayOfObjects() { /* ... */ }

// Memoized by React Compiler since this is a component
function TableContainer({ items }) {
  // This function call would be memoized:
  const data = expensivelyProcessAReallyLargeArrayOfObjects(items);
  // ...
}
```

--------------------------------

### Video component for ViewTransition examples

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/ViewTransition.md

A basic component structure used to display video information within a ViewTransition context.

```javascript
function Thumbnail({video}) {
  return (
    <div
      aria-hidden="true"
      tabIndex={-1}
      className={`thumbnail ${video.image}`}
    />
  );
}

export function Video({video}) {
  return (
    <div className="video">
      <div className="link">
        <Thumbnail video={video}></Thumbnail>
        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}
```

--------------------------------

### Calling useEffectEvent

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffectEvent.md

Example of calling `useEffectEvent` at the top level of a component.

```js
import { useEffectEvent, useEffect } from 'react';

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });
}
```

--------------------------------

### Basic usage of isValidElement

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/isValidElement.md

A simple example demonstrating how to call `isValidElement`.

```js
const isElement = isValidElement(value)
```

--------------------------------

### Basic `createRoot` usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/createRoot.md

Shows the basic signature for `createRoot`.

```js
const root = createRoot(domNode, options?)
```

--------------------------------

### Correct: Evaluating Dynamic Code with a Safe Parser

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/eslint-plugin-react-hooks/lints/unsupported-syntax.md

An example demonstrating the correct and safe approach to evaluate dynamic expressions using a dedicated parsing library like `mathjs` instead of `eval`.

```js
// ✅ Better: Use a safe parser
import {evaluate} from 'mathjs'; // or similar library

function Calculator({expression}) {
  const [result, setResult] = useState(null);

  const calculate = () => {
    try {
      // Safe mathematical expression evaluation
      setResult(evaluate(expression));
    } catch (error) {
      setResult('Invalid expression');
    }
  };

  return (
    <div>
      <button onClick={calculate}>Calculate</button>
      {result && <div>Result: {result}</div>}
    </div>
  );
}
```

--------------------------------

### Rendering the app into the root

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/client/createRoot.md

This snippet shows the necessary call to root.render() to display your React application after creating the root.

```js
import { createRoot } from 'react-dom/client';
import App from './App.js';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

--------------------------------

### Preloading in an event handler

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preloadModule.md

An example of calling `preloadModule` inside an event handler to initiate preloading before a navigation or state change.

```js
import { preloadModule } from 'react-dom';

function CallToAction() {
  const onClick = () => {
    preloadModule("https://example.com/module.js", {as: "script"});
    startWizard();
  }
  return (
    <button onClick={onClick}>Start Wizard</button>
  );
}
```

--------------------------------

### Dispatching actions from context

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/scaling-up-with-reducer-and-context.md

Example of a component reading the dispatch function from context to update the task list.

```javascript
export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  // ...
  return (
    // ...
    <button onClick={() => {
      setText('');
      dispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
    }}>Add</button>
    // ...
```

--------------------------------

### Integrating with a Server Framework

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/server/renderToString.md

An example of using renderToString within a server route handler to send the generated HTML as a response.

```javascript
import { renderToString } from 'react-dom/server';

// The route handler syntax depends on your backend framework
app.use('/', (request, response) => {
  const html = renderToString(<App />);
  response.send(html);
});
```

--------------------------------

### Initial HTML List State

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/tutorial-tic-tac-toe.md

Illustrates an initial list of tasks for different users before any updates or reordering.

```html
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

--------------------------------

### Multiple meta tags for document annotation

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/meta.md

Examples of meta tags for author, keywords, and description, which React places in the document head.

```html
<meta name="author" content="John Smith" />
<meta name="keywords" content="React, JavaScript, semantic markup, html" />
<meta name="description" content="API reference for the <meta> component in React DOM" />
```

--------------------------------

### Styling for Markdown Editor

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/components/textarea.md

CSS styling for the textarea in the Markdown editor example.

```css
textarea { display: block; margin-top: 5px; margin-bottom: 10px; }
```

--------------------------------

### CSS styling for labels and themes

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md

CSS rules for basic label styling and dark/light themes.

```css
label {
  display: block;
  margin-top: 10px;
}

.dark {
  background-color: black;
  color: white;
}

.light {
  background-color: white;
  color: black;
}
```

--------------------------------

### Basic StrictMode usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/StrictMode.md

Shows how to wrap a component with StrictMode.

```js
<StrictMode>
  <App />
</StrictMode>
```

--------------------------------

### Basic `preconnect` usage

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react-dom/preconnect.md

Eagerly connect to a server using `preconnect`.

```js
preconnect("https://example.com");
```

--------------------------------

### Playing and pausing a video (CSS)

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useRef.md

CSS styles for the video player example.

```css
button { display: block; margin-bottom: 20px; }
```

--------------------------------

### Declaring multiple refs

Source: https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useRef.md

Example of declaring multiple refs within a component.

```javascript
import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  // ...
```

--------------------------------

### Basic styling for chat room

Source: https://github.com/reactjs/react.dev/blob/main/src/content/learn/lifecycle-of-reactive-effects.md

CSS styles for the input and button elements in the chat room example.

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```