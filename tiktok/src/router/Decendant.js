import { Routes, Route, Outlet, useParams, Link } from "react-router-dom";
export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
    );
}

function Dashboard() {
    return (
        <div>
            <p>Look, more routes!</p>
            <nav>
                <Link to="team">Team </Link>
                <Link to="invoices">Invoices</Link>{" "}
            </nav>
            <hr />
            <Routes>
                <Route index element={<Team />} />
                <Route path="team" element={<Team />} />
                <Route path="invoices" element={<Invoices />} />
            </Routes>
        </div>
    );
}
function Home() {
    return <h1>Home</h1>;
}
function Invoices() {
    return <h1>Invoices</h1>;
}

function Team() {
    return <h1>Team</h1>;
}