<template>
	<tr class="post_item">
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
	props: {
		id: {
			type: Number,
		},
		title: {
			type: String,
			default: "",
		},
		body: {
			type: String,
			default: "",
		},
	},
};
</script>

<style scoped>
.post_item td {
	border: 1px solid black;
}
</style>
