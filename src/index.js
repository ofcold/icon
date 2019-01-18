import Icon from './Icon.vue'

let installed = false

export default {

	/**
	 * Install icon.
	 */
	install(Vue) {
		if (installed) {
			return
		}

		Vue.component('icon', Icon)

		installed = true
	}
}

export {
	Icon
}
