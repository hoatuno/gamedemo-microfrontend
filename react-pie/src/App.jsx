import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
const MarioJump = lazy(() => import("./remotes/mario_jump"));
const Vue2048 = lazy(() => import("./remotes/vue_2048"));
import GameTitle from "./components/GameTitle";

import Sample from "./assets/sp.png";
import Mario from "./assets/mario.png";
import V2048 from "./assets/vue2048.png";
import "./title.scss";
const SuspenseReact = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarioJump />
    </Suspense>
  );
};
const SuspenseVue = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Vue2048 />
    </Suspense>
  );
};
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mario" element={<SuspenseReact />} />
          <Route path="vue2048" element={<SuspenseVue />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <div className="tiles">
          <GameTitle path="/vue2048">
            <Image src={V2048} />
          </GameTitle>
          <GameTitle path="/mario">
            <Image src={Mario} />
          </GameTitle>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
const Image = ({ src }) => {
  return (
    <img
      style={{
        maxWidth: "100px",
        maxHeight: "100px",
      }}
      src={src}
      alt=""
    />
  );
};
