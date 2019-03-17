//插值
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue !'
	}
})
//v-blind
var app2 = new Vue({
	el: '#app-2',
	data:{
		message:'页面加载于' + new Date().toLocaleString()
	}
})
//v-if false元素被移除
var app3 = new Vue({
	el: '#app-3',
	data:{
		seen: false,
		ok:true
	}
})
//v-show false元素被隐藏  style="display:none"
var app4 = new Vue({
	el: "#app-4",
	data:{
		greeting:false
	}
})
//v-else就是javascript中的else的意思，它必须跟着v-if或v-show
var app5 = new Vue({
	el: "#app-5",
	data:{
		ok:false
	}
})
//v-model
var app6 = new Vue({
	el: "#app-6",
	data:{
		data:{
			name:"",
			sex:"",
			interest:[],
			identity:''
		}
	}
})
//v-for
var app7 = new Vue({
	el:'#demo',
	data:{
		items: [
			{parentMessage: '滴滴'},
			{ msg:'顺风车' },
			{ msg:'专车' } 
		]
	}
})
//v-for (item, index)
var app8 = new Vue({
	el: '#repeat-object',
	data: {
		primitiveValues: {
			FirstName: 'DIDI',
			LastName: 'FE',
			Age: 4
		},
		objectValues: {
			one:{
				msg: 'Hello'
			},
			two:{
				msg: 'DIDI FE'
			}
		}
	}
})

//v-blind
var app9 = new Vue({
	el: '#app-8',
	data: {
		classA: 'A',
		isB: false,
		isC: true
	}
})
var app01 = new Vue({
	el: '#app-9',
	data: {
		someProp: 'idName',
		otherProp: 'prop'
	}
})
