import Loading from '../components/Loading/Loading';
import Loadable from 'react-loadable';

export const Home = Loadable({
    loader: () => import('../components/Home/Home'),
    loading: Loading
})

export const Maps = Loadable({
    loader: () => import('../components/Maps/Maps'),
    loading: Loading
})

export const Blog = Loadable({
    loader: () => import('../components/Blog/Blog'),
    loading: Loading
})