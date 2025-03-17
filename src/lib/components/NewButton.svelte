<script >
	export let color = "blue";
</script>

<button class="btn" style:background-color={color}>
	<slot>Default text</slot>
</button>

<style>
	.btn{
		padding: 8px 8px;
	/* 	background-color: {color}; */
		color: white;
		border: none;
		border-radius:  4px;
		cursor: pointer;
	}
</style>