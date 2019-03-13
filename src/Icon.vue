<template>
	<svg xmlns="http://www.w3.org/2000/svg"
		class="fill-current"
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
			}
		},

		data: ()=> ({
			icon: []
		}),

		computed: {
			viewBox() {
				return this.icon.length > 2
					? `0 0 ${this.icon[0]} ${this.icon[1]}`
					: '0 0 20 20'
			},

			/**
			 * Get the icon path.
			 */
			path() {
				return _.last(this.icon)
			}
		},

		mounted() {
			if (! IconMaps.hasOwnProperty(this.type)) {
				console.error(`The Icon “${this.type}” name not found.`)
			}

			this.icon = IconMaps[this.type]
		}
	}
</script>
