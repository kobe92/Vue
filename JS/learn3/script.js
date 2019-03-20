//Class与Style的绑定
var demo = new Vue({
	el: '#demo',
	data:{
		activeClass: 'active',
		errorClass: 'text-danger',
		isActive:true,
		activeColor: 'red',
		fontSize: 30,
		styleObject:{
			color: 'blue',
			fontSize: '14px'
		},
		baseStyles:{
			color: 'green',
			fontSize: '22px'
		},
		overridingStyles:{
			background:'black'
		}
	}
})
//条件渲染
var demo1 = new Vue({
	el: '#demo1',
	data: {
		awesome:true,
		ok:false,
		type:'B',
		loginType: 'username'
	},
	methods:{
		show:function(){
			if(this.loginType === 'username'){
				this.loginType=!this.loginType
			}else{
				this.loginType='username'
			}
		}
	}
})

//列表渲染
var example = new Vue({
	el: '#example',
	data: {
		items:[
			{message: 'Foo'},
			{message: 'Bar'}
		]
	}
})
var example2 = new Vue({
	el: '#example-2',
	data: {
		parentMessage: 'Parent',
		items:[
			{message: 'Foo'},
			{message: 'Bar'}
		]
	}
})

new Vue({
	el: '#v-for-object',
	data:{
		object:{
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
})

new Vue({
	el: '#demo2',
	data:{
		items:{
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		},
		object:{
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
})

new Vue({
	el: '#example-3',
	data:{
		numbers:[1,2,3,4,5]
	},
	computed:{
		eventNumbers:function(){
			return this.numbers.filter(function (number){
				return number % 2 === 0	
			})
		}
	}
})

new Vue({
	el: '#example-4',
	data:{
		items:[
			{msg: 3434},
			{msg: 1234}
		]
	}
})

//事件处理
var eventManger = new Vue({
	el: '#eventManger',
	data:{
		counter: 0,
		name: 'Vue.js'
	},
	methods:{
		greet:function(event){
			alert('Hello' + this.name + '!')
			if(event){
				alert(event.target.tagName)
			}
		},
		say:function(message){
			alert(message)
		}
	}
})
