const testRouter = [{
	path: '/test/hellow',
	name: 'HellowWorld',
	component: () => import('../components/test/HelloWorld.vue')
},{
	path: '/test/about',
	name: 'AboutTest',
	component: () => import('../components/test/About.vue')
},{
	path: '/test/home',
	name: 'HomeTest',
	component: () => import('../components/test/Home.vue')
},{
	path: '/test/swiper',
	name: 'SwiperTest',
	component: () => import('../components/test/Swiper.vue')
}]

export default testRouter