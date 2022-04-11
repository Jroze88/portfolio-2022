import Home from './Home.js';
import bcloud1 from './img/b_cloud01.svg'
import bcloud2 from './img/b_cloud02.svg'
import cloud1 from './img/cloud1.svg'
import cloud2 from './img/cloud2.svg'
import cloud3 from './img/cloud3.svg'
import moon from './img/moon.svg'
import moonlight from './img/moonlight.svg'


const routes = [
    {
        name: 'Home',
        path: '/home',
        clouds: [bcloud1, bcloud2, cloud1, cloud2, cloud3],
        page: Home,
        center: moon,
        surround: moonlight
    }
]


export default routes