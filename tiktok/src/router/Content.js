import { Routes, Route, Outlet, useParams } from "react-router-dom";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activity />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
function Invoices() {
  return <h1>Invoices</h1>;
}
function Activity() {
  return <h1>Activity</h1>;
}
export default Content