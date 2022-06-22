import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../page/Home';
import App from '../App';
import Nav from './Nav';
const Router = () => (
    <BrowserRouter>
        <Nav />
        <Routes>   
            <Route index element={<Home />} />
            <Route path="/presupuesto" element={<App />} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);
export default Router;