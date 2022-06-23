import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../page/Home';
import Nav from './Nav';
import App from '../App';
const Router = () => (
        <BrowserRouter>
        <Nav />
            <Routes>   
                <Route index element={<Home />} />
                <Route path="/presupuestos" element={<App />} />
                <Route path="*" element={<div>404</div> } />
            </Routes>
        </BrowserRouter>
);
export default Router;