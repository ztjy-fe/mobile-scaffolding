<template>
	<div class="hello">
		<h1 v-statistic obj-id="172.16.208.105">\{{ msg }}</h1>
	</div>
</template>

<script>
import pv from '@/mixins/pv'

export default {
	name: 'HelloWorld',
	mixins: [pv],
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1{
		font-weight: normal;
		font-size: 12px;
	}
</style>
