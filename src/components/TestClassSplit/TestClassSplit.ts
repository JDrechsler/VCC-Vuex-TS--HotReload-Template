import Vue from 'vue'
import Component from 'vue-class-component'
import Second from './../Second/Second'
import { store } from '../../store'

@Component({
	template: require("./TestClassSplit.html"),
	props: {
		propMessage: String
	},
	components: {
		Second
	}
})
export default class TestClassSplit extends Vue {
	propMessage: string
	msg: number = 123
	helloMsg: string = 'Hello, ' + this.propMessage

	numberVar: number = 1337

	mounted() {
		this.greet()
	}

	get state() {
		return store.state
	}

	incCounter(newNum: number) {
		store.commit('incrementCount', newNum)
	}

	changeSName(newName: string) {
		store.commit('changeSName', newName)
	}

	get computedMsg() {
		return 'computed ' + this.msg
	}

	greet() {
		console.log('greeting: ' + this.msg)
		this.incCounter(Math.random() * 45)
		console.log(this.state.count)
		console.log(this.state.sName)
		this.changeSName((Math.random() * 45).toString())
		console.log(this.state.sName)
		console.log(`neuer Test: ${this.state.count}`)
	}
}