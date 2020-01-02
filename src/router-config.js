import Home from './pages/home';
import Itinerary from './pages/itinerary'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/itinerary',
        name: 'itinerary',
        component: Itinerary
    }
];