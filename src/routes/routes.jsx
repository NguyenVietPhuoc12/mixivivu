import routesConfig from '~/config/routes';

import Home from '~/pages/Home/Home';
import Package from '~/pages/Package/Package';
import Hotel from '~/pages/Hotel/Hotel';
import TourTravel from '~/pages/TourTravel/TourTravel';
import Yacht from '~/pages/Yacht/Yacht';
import About from '~/pages/About/About';
import Booking from '~/pages/Booking/Booking';
import Login from '~/pages/Login/Login';

// Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.package, component: Package },
    { path: routesConfig.hotel, component: Hotel },
    { path: routesConfig.tour, component: TourTravel },
    { path: routesConfig.yacht, component: Yacht },
    { path: routesConfig.about, component: About },
    { path: routesConfig.booking, component: Booking },
    { path: routesConfig.login, component: Login },
];

export { publicRoutes };
