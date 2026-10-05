import { createRoot } from "react-dom/client";

// function
function HomePage() {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <Footer />
      {/* <Footer /> // Footer component is called inside HomePage component */}
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Welcome to React course</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>Learn React with Ramya</h1>
    </div>
  );
}

// createRoot(document.getElementById('root')).render(
//   <div>
//      Hello again!
//   </div>,
// )

//createRoot(document.getElementById("root")).render(HomePage());

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <HomePage />
    {/* <Header /> // Header component is called inside root.render, another way to call Header component 
    <Footer /> */}
  </div>,
);
