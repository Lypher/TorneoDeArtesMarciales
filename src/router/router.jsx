import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Content } from "./Content";
import { Select_hero } from "./Start_select";
import { Error_page } from "./error_page";
import { Playing } from "./playing";

export function App_router () {
    return <>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route errorElement={<Error_page/>}>
                    <Route index element={<Content/>}/>
                    <Route path="/start" element={<Select_hero/>}/>
                    <Route path="/start/:heroId" element={<Playing/>}/>
                    <Route path="/help" element={<></>}/>
                </Route>
            </Route>
        </Routes>
    </>
}