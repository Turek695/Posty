<template>
	<tr class="post_item">
		<td>{{ id }}.</td>
		<td>
			{{ title }}
		</td>
		<td>
			{{ body }}
		</td>
		<td>
			<button @click="showDelPop = true">Usuń</button>
			<PostPopup
				:postId="postId"
				v-if="showDelPop"
				@close="showDelPop = false"
				text="Czy na pewno chcesz usunąć post?"
			/>
		</td>
	</tr>
</template>
<script>
import PostPopup from "./PostPopup.vue";

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
	data() {
		return {
			showDelPop: false,
			postId: this.id,
		};
	},
	components: {
		PostPopup,
	},
};
</script>

<style scoped>
.post_item td {
	border: 1px solid black;
}
</style>
