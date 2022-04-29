import {Routes, Route, Link} from "react-router-dom";

import Default from "./default";
import Gigitosaure from "./Gigitosaure";
import BenSensei from "./BenSensei";

export default function Films() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <Link to="gigitosaure">Gigitosaure</Link>
                <Link to="bensensei">BenSensei</Link>
            </div>
            <Routes>
                <Route path="/" element={<Default/>} />
                <Route path="/gigitosaure" element={<Gigitosaure/>} />
                <Route path="/bensensei" element={<BenSensei/>} />
            </Routes>
        </>
    )
}