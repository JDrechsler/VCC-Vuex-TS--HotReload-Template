import Vue from "vue";
import index from "./index.vue"
import { store } from './store'

Vue.config.productionTip = false

new Vue({
	el: "#app",
	store,
	template: `
    <div class="container">
		<h2>First index.ts - changes in here will not hot reload</h2>
		<index></index>
    </div>
    `,
	components: {
		index
	}
});