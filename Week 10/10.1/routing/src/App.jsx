import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* Conditional rendering depending on route - makes it SPA */}
      <BrowserRouter>
        {/* this is rendered for all pages (unconditional it's not inside "Routes") */}
        {/* couldn't just put it outside of <BrowserRouter> needed to be insdide? why?  */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route
              path="/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route
              // any other page the user its that is not ^ show them a 404 basically
              path="*"
              element={<ErrorPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <h1> I"m the TOP BAR"</h1>
      <Navbar />
      {/* this is basically saying -> render whatever the routes inside are giving u inplace of this Outlet component */}
      <Outlet />
      <h2>I'm the FOOTER</h2>
    </div>
  );
}

function Navbar() {
  {
    /* or can use the useNavigateHook like this */
  }
  const navigate = useNavigate();

  function redirectClass11() {
    navigate("/online-coaching-class-11");
  }

  function redirectClass12() {
    navigate("/online-coaching-class-12");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div>
        {/* now it's a true single page application -> html is not fetched from scratch on navigating routes */}
        <Link
          to="/"
          style={{
            textDecoration: "None", // removes the ugly hyperlink blue
            color: "#2563eb",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Allen
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button onClick={redirectClass11}>Class 11</button>
        <button onClick={redirectClass12}>Class 12</button>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <h2>Welcome to Allen</h2>
    </div>
  );
}

function Class11Program() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#2563eb",
        width: "400px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          textColor: "white",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        11th Class Online Coaching
      </div>
    </div>
  );
}

function Class12Program() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "red",
        width: "400px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          textColor: "white",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        12th Class Online Coaching
      </div>
    </div>
  );
}

function ErrorPage() {
  return <div>Sorry Page not found</div>;
}

export default App;
