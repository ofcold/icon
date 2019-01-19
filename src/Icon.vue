<template>
	<svg xmlns="http://www.w3.org/2000/svg"
		class="fill-current"
		:class="classes"
		:width="width"
		:height="height"
		:viewBox="viewBox"
		:aria-labelledby="type"
		role="presentation"
	>
		<path :d="path"/>
	</svg>
</template>

<script>
	const IconMaps = require('./maps')

	export default {
		name: 'ofcold-icon',

		props: {
			type: {
				type: String,
				default: 'delete',
			},
			width: {
				type: [Number, String],
				default: 20,
			},
			height: {
				type: [Number, String],
				default: 20,
			},
			classes: {
				type: [Array, Object, String],
				default: ''
			}
		},

		data: ()=> ({
			icon: []
		}),

		computed: {
			viewBox() {
				return icon.length
					? `0 0 ${this.icon[0]} ${this.icon[1]}`
					: '0 0 20 20'
			},

			/**
			 * Get the icon path.
			 */
			path() {
				return this.icon[this.icon.length - 1]
			}
		},

		mounted() {
			if (! IconMaps.hasOwnProperty(this.type)) {
				console.warning(`The Icon “${this.type}” name not found.`)
			}

			this.icon = IconMaps[this.type]
		}
	}
</script>
