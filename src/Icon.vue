<template>
	<svg xmlns="http://www.w3.org/2000/svg"
		class="fill:current"
		:width="width"
		:height="height"
		:viewBox="viewBox"
		:aria-labelledby="type"
		role="presentation"
	>
		<component :is="iconName" />
	</svg>
</template>

<script>
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

	computed: {
		iconName() {
			return `ofcold-icon-${this.type}`
		},
		viewBox() {
			return require('./view-box')[this.type]
		}
	},
}
</script>
