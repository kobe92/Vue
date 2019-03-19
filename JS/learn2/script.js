var obj = {
	foo: 'bar'
}
 
Object.freeze(obj);

new Vue({
	el: '#app',
	data: obj
})

/*var data = {a : 1}
var vm = new Vue({
	el: '#example',
	data:data
})

console.log(vm.$data === data)
console.log(vm.$el === document.getElementById('example'))*/
//自定义指令
Vue.directive('my-directive', {
	deep: true,
	update: function(obj){
		console.info(obj.innerHTML)
	}
})

var demoVM = new Vue({
	el: '#demo',
	data: {
		a:{
			b:{c:2}
		}
	},
	methods:{
		change:function(){
			demoVM.a.b.c = 4;
		}
	}
})

//生命周期钩子函数
new Vue({
	data:{
		a:1
	},
	created: function(){
		//this 指向vm实例
		console.log('a is ' + this.a)
	}
})

var a = new Vue({
	el: '#a',
	data:{
		rawHtml: '<span style="color:red">This should be red</span>',

	}
})

var b = new Vue({
	el:'#b',
	data:{
		disabled:true,
		seen:false,
		url:'www.baidu.com',
		dosomething:function(){
			console.log('我被点击了')
		},
		/*attributeName:"href",
		uuu:'#',
		eventName:"focus",
		foo:function(){
			console.log("鼠标经过")
		}*/
	}
})

var vm = new Vue({
	el: '#example',
	data: {
		message: 'hello'
	},
	computed: {
		//计算属性的getter
		reversedMessage: function(){
			//this指向vmm实例
			return this.message.split('').reverse().join('')
		}
	}
})

var vmm = new Vue({
	el: '#aa',
	data: {
		message: 'Hi'
	},
	methods: {
		reversedMessage:function(){
			return this.message.split('').reverse().join('')
		}
	}
})

var vvm = new Vue({
	el: '#demoo',
	data: {
		firstName: 'Foo',
		lastName: 'Bar'
	},
	computed: {
		fullName:{
			get:function(){
				return thi.firstName + ' ' + this.lastName
			},
			set: function(newValue){
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length-1]
			}
		}
	}
})


var watchExampleVm = new Vue({
	el: '#watch-example',
	data: {
		question:'',
		answer: 'I cannot give you an answer until you ask a question!'
	},
	watch:{
		//若果question发生改变，这个函数就会运行
		question:function(newQuestion, oldQuestion){
			this.answer = 'Waiting for you to stop typing...'
			this.debouncedGetAnswer();
		}
	},
	created: function(){
	// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    	this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
	},
	methods:{
		getAnswer:function(){
			if(this.question.indexOf('?') === -1){
				this.anwer = 'Questions usually contain a question mark. ;-)'
				return
			}
			this.anwer = "Thinking...."
			var vm = this
			axios.get('https://yesno.wtf/api')
			.then(function (response) {
          		vm.answer = _.capitalize(response.data.answer)
        	})
        	.catch(function (error) {
          		vm.answer = 'Error! Could not reach the API. ' + error
        	})
		}
	}
})

var obj = new Vue({
	el: '.static',
	data:{
		isActive:true,
		hasError:false
	}
})

var classObject = new Vue({
	el: '#classObject',
	/*data: {
		classObject:{
			active: true,
			'text-danger': false
		}
	}*/
	data:{
		isActive:true,
		error:null
	},
	computed: {
		classObject:function(){
			return {
				active:this.isActive && !this.error,
				'text-danger':this.error && this.error.type === 'fatal'
			}
		}
	}
})