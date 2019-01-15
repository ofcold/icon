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
	const IconCollections = require('./maps')

	export default {
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
		},

		data: ()=> ({
			icon: []
		}),

		computed: {
			viewBox() {
				return `0 0 ${this.icon[0]} ${this.icon[1]}`
			},

			/**
			 * Get the icon path.
			 *
			 * @return {[String]}
			 */
			path() {
				return this.icon[this.icon.length - 1]
			}
		},

		created() {
			const icon = IconCollections[this.type]

			if (typeof icon !== 'array' || typeof icon !== 'object') {
				console.error(`The Icon ${this.type} name not found.`)
			}

			this.icon = icon
		}
	}
</script>
