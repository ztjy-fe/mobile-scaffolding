<template>
	<div class="hello">
		<hello-world></hello-world>
	</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Index',
	components: {
		HelloWorld
	},
	data () {
		return {}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1{
		font-weight: normal;
		font-size: 12px;
	}
	.hello{
		margin-top: 60px;
	}
</style>
