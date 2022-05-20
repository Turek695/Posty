<template>
	<tr>
		<td>{{ id }}.</td>
		<td>
			{{ title }}
		</td>
		<td>
			{{ body }}
		</td>
		<td>DEL MOD</td>
	</tr>
</template>
<script>
export default {
	name: "PostItem",
	props: ["id", "title", "body"],
};
</script>

<style scoped>
tr > td {
	border: 1px solid black;
}
</style>
