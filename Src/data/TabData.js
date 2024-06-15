import Cateory from '../Screens/Cateory';
import Home from '../Screens/Home';
import Notification from '../Screens/Notification';
import Setting from '../Screens/Setting';
import User from '../Screens/User';
import Video from '../Screens/Video';

export const TabData = [
  {
    id: 1,
    name: 'Home',
    route: Home,
    activeiconName: 'home',
    activeiconType: 'Entypo',
    size: 20,
    inactiveiconName: 'home',
    inactiveiconType: 'Entypo',
    unFocusSize: 22,
  },
  {
    id: 2,
    name: 'Video',
    route: Video,
    activeiconName: 'tv',
    activeiconType: 'Ionicons',
    size: 20,
    inactiveiconName: 'tv',
    inactiveiconType: 'Ionicons',
    unFocusSize: 22,
  },
  {
    id: 3,
    name: 'User',
    route: User,
    activeiconName: 'people-outline',
    activeiconType: 'Ionicons',
    size: 20,
    inactiveiconName: 'people-outline',
    inactiveiconType: 'Ionicons',
    unFocusSize: 22,
  },
  {
    id: 4,
    name: 'Cateory',
    route: Cateory,
    activeiconName: 'store',
    activeiconType: 'FontAwesome5',
    size: 20,
    inactiveiconName: 'store',
    inactiveiconType: 'FontAwesome5',
    unFocusSize: 22,
  },
  {
    id: 5,
    name: 'Notification',
    route: Notification,
    activeiconName: 'notifications',
    activeiconType: 'Ionicons',
    size: 20,
    inactiveiconName: 'notifications',
    inactiveiconType: 'Ionicons',
    unFocusSize: 22,
  },
  {
    id: 6,
    name: 'Setting',
    route: Setting,
    activeiconName: 'settings',
    activeiconType: 'Ionicons',
    size: 20,
    inactiveiconName: 'settings',
    inactiveiconType: 'Ionicons',
    unFocusSize: 22,
  },
];
