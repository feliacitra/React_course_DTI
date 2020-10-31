import { Home, Contact, Profile, Login, ProfileId } from '../pages';

const routes = [
  {
    path: '/profile/:profileId',
    component: Profile,
    isPublic: false,
  },
  {
    path: '/Home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/contact',
    component: Contact,
    isPublic: true,
  },
  {
    path: '/profile',
    component: Profile,
    isPublic: false,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];
export default routes;
