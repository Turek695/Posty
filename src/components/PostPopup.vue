<template>
	<div class="post_popup">
		<div class="popup__window">
			<button @click="$emit('close')">X</button>
			{{ text }}
			<button @click="postDelete(postId)">Tak</button>
			<button @click="$emit('close')">Nie</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostPopup",
	props: {
		text: {
			type: String,
			default: "Czy usunąć?",
		},
		postId: {
			type: Number,
		},
		// buttons: {
		// 	type: Object,
		// 	default: {},
		// },
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
.post_popup {
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	z-index: 100;
	background-color: rgba(47, 79, 79, 0.258);
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
}
.popup__window {
	background-color: white;
	display: grid;
}
</style>
