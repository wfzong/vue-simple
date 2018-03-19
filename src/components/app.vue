<template>
	<div>Hello {{vue}}

	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
	data(){
		return {
			vue:'world!'
		}
	},
	methods:{

	},
	computed: {

	},
	mounted(){
		console.log('mounted')
	}
}
</script>