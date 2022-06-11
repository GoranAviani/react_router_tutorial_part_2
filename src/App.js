import './App.css';
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            bookkeeper
            <nav>
                <Link to="/invoices">Invoices</Link>
                <Link to="/expenses">Expenses</Link>
            </nav>
        </div>
    );
}

export default App;
