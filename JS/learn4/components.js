//组件基础
Vue.component('button-counter',{
	data: function(){
		return {count: 0}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({el: '#components-demo'})

Vue.component('blog-post', {
	props:['title'],
	template:'<h3>{{title}}</h3>'
})
new Vue({el: '#components-prop'})
new Vue({
	el: '#blog-post-demo',
	data: {
		posts:[
			{id:1, title:'My journey with Vue'},
			{id:2, title:'Blogging with Vue'},
			{id:3, title:"My Vue is so fun"}
		]
	}
})

Vue.component('blog',{
	props:['post'],
	template:'<div class="blog"><h3>{{post.title}}</h3><div v-html="post.content"></div></div>'
})

new Vue({
	el: '#blog-events-demo',
	data:{
		posts:[
			{id:1, title:'this is a title', content:"vyote vya mungu wetu na mf"},
			{id:2, title:'Blogging with Vue', content:'Blogging with Vue content'},
			{id:3, title:'My Vue is so fun', content:'My Vue is so funt'}
		],
		postFontSize:1
	}
})

Vue.component('blog-p',{
	props:['post'],
	template:'<div class="blog-p"><h3>{{post.title}}</h3><button>Enlarge text</button><div v-html="post.content"></div></div>'
})

new Vue({
	el:'#blog-p',
	data:{
		posts:[
			{id:1, title:'My journey with Vue', content:'My journey with Vue content'},
			{id:2, title:'Blogging with Vue', content:'Blogging with Vue content'},
			{id:3, title:'My Vue is so fun', content:'My Vue is so funt'}
		],
		postFontSize:1
	}
})