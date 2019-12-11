module.exports = app => {
    let {router,controller} = app;
    router.get('/',controller.index.init);
     /**
     * 注册
     */
    router.post('/registry',controller.user.index);
    /**
     * 获取身份信息
     */
    router.get('/identity',controller.user.getIdntity);
     /**
     * 登陆
     */
    router.post('/login',controller.user.login)
     /**
     * 获取用户信息
     */
    router.get('/getuserinfo',controller.user.getuserinfo)
}