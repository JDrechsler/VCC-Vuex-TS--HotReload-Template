<template>
	<section>
		<h3>Start</h3>
		<TestClassSplit propMessage="Johannes"></TestClassSplit>
	</section>
</template>

<script>
	import Vue from "vue";

	import TestClassSplit from './components/TestClassSplit/TestClassSplit'

	export default ({
		components: {
			TestClassSplit
		}
	})

</script>
