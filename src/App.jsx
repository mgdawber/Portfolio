import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="h-screen font-mono">
        <div className="flex justify-center pt-10 h-max dark:text-white h-full dark:bg-gray-900 transition-all">
          <div className="max-w-2xl">
            <div className="ml-16 my-14 p-1 flex min-wd-full">
              <Link to="/" className="neon pr-10 text-xl hover:underline">Blog</Link>
              <Link to="/projects" className="flux text-xl hover:underline">Projects </Link>
            </div>

            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/">
                <Blog />
              </Route>
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  );
}

function Blog () {
  return (
    <>
      <div className="mx-10 my-4 p-2">
        <div className="flex max-h-100 p-4">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-lg">
              <p className="p-1">
                Hi! My name is Matt.
              </p>
              <p className="p-1">
                Please consider this page as a collection of thoughts, feelings and experimentation.

                If you find any accessibility issues with this page, feel
                free to email me at <a className="underline" href="mailto:mgdawber@gmail.com">mgdawber@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-14 p-2 pt-8">
        <div className="text-3xl font-bold pb-2">2021</div>
        <ul className="text-lg">
          <li>
            <Link className="underline py-2" to="/6">Building a compiler with Go</Link> <time className="text-sm">12/06</time>
          </li>
          <li >
            <Link className="underline py-2" to="/5">Building an Interpreter with Go</Link> <time className="text-sm">12/06</time>
          </li>
        </ul>
      </div>
    </>
  )};

function Projects () {
  return (
    <div className="mx-14 p-2">
      <h2 className="text-3xl font-bold pt-10 pb-2">Go Compiler</h2>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      <p className="text-lg">
      </p>
      <h2 className="text-3xl font-bold py-10">Go Interpreter</h2>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      <p className="text-lg">
      </p>
    </div>
  )
}

export default App;
