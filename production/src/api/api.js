import axios from '@/until/http'
const api={
    user:{
        login:(params)=>axios.post('/api/auth/login',params)
    },
    main:{
        items:()=>axios.get("/api/topic/items"),
        week:(params)=>axios.get('/api/recommend/collectionList',params),
        list:(params)=>axios.get('/api/post/list',params),
        auth:(params)=>axios.get("/api/recommend/authorIndex",params),
        authlist:()=>axios.get("/api/author/list"),
        detail:(params)=>axios.get('/api/comment/list',params),
        info:(params)=>axios.get('/api/comic/info',params),
        new:(params)=>axios.post('/api/comment/new',params),
        favorite:(params)=>axios.post('/api/comic/favorite',params),
        myfavorite:(params)=>axios.get('/api/my/favorite',params)

    }
}
export default api