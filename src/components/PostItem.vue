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
				v-if="showDelPop"
				:postId="postId"
				:buttons="{ delete: 'Usuń', cancel: 'Anuluj' }"
				text="Czy na pewno chcesz usunąć post?"
				@close="showDelPop = false"
				@Anuluj="showDelPop = false"
				@Usuń="postDelete(postId)"
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
	methods: {
		postDelete(postId) {
			this.$emit("close");
			this.$store.dispatch("postDelete", { postId });
		},
	},
};
</script>

<style scoped>
.post_item td {
	border: 1px solid black;
}
</style>
