import Dashboard from "./components/Dashboard";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";

function App({}) {
  return (
    <>
      <TopNav />
      <SideNav />
      <main>
        <Dashboard />
      </main>
    </>
  );
}

export default App;
