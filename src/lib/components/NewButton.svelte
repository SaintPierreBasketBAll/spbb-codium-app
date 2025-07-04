<script >
	export let color = "blue";
</script>

<button class="btn" style:background-color={color}>
	<slot>Default text</slot>
</button>

<style>
	.btn {
		padding: 0.8rem 2.5rem;
		color: white;
		font-weight: bold;
		font-size: 1rem;
		background: linear-gradient(to right, #ff9900, #ff3300);
		border: none;
		border-radius: 9999px;
		cursor: pointer;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.btn:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
	}
</style>