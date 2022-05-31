<template>
	<div class="post_popup">
		<div class="popup__window">
			<div class="popup__section popup__bar">
				<button class="popup__close" @click="$emit('close')">X</button>
			</div>
			<div class="popup__section">
				{{ text }}
			</div>
			<div class="popup__section">
				<button
					class="popup__btn"
					v-for="(button, index) in buttons"
					@click="$emit('buttonClicked', index, postId)"
				>
					{{ button }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostPopup",
	props: {
		text: {
			type: String,
			default: "loerm ipsum",
		},
		postId: {
			type: Number,
		},
		buttons: {
			type: Object,
			default() {
				return { ok: "ok" };
			},
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
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	width: 50%;
	height: 30%;
}
.popup__section {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.popup__bar {
	justify-content: flex-end;
	background-color: gray;
}
.popup__btn {
	margin: 1em;
}
</style>
