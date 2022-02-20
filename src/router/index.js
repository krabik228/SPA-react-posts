import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"

export const routes = [
    { id: 1, path: '/about', component: <About />, exact: false },
    { id: 2, path: '/posts', component: <Posts />, exact: true },
    { id: 3, path: '/posts/:id', component: <PostIdPage />, exact: true },

]