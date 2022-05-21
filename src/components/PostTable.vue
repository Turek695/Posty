<template>
	<div>
		<h1 class="h1">Posty</h1>
		<label for="sel">Liczba wpisów na stronie:</label>
		<select id="sel">
			<option value="10" selected>10</option>
			<option value="20">20</option>
			<option value="50">50</option>
		</select>
		<br />
		<label for="search">Wyszukiwarka</label>
		<input
			v-model="searchPhrase"
			type="search"
			id="search"
			placeholder="wyszukaj frazę"
		/>
		<table>
			<thead>
				<tr>
					<td>ID</td>
					<td>Tytuł</td>
					<td>Treść</td>
					<td colspan="2">Akcje</td>
				</tr>
			</thead>
			<tbody>
				<PostItem
					v-for="(post, index) in postsDisplayed"
					:id="post.id"
					:title="post.title"
					:body="post.body"
					:key="post.id"
				/>
			</tbody>
		</table>
	</div>
</template>


<script>
import { mapState, mapGetters } from "vuex";
import PostItem from "./PostItem.vue";

export default {
	name: "PostTable",
	components: {
		PostItem,
	},
	data() {
		return {
			searchPhrase: "",
		};
	},
	computed: {
		postsDisplayed() {
			if (!this.searchPhrase) {
				return this.posts;
			} else {
				return this.posts.filter(
					(post) =>
						post.title.includes(this.searchPhrase.toLowerCase()) ||
						post.body.includes(this.searchPhrase.toLowerCase())
				);
			}
		},
		...mapState(["posts"]),
	},
};
</script>
<style scoped>
table {
	border: 1px solid black;
}
</style>
