<template>
	<div class="post_table">
		<h1 class="h1">Posty</h1>
		<label for="sel">Liczba wpisów na stronie:</label>
		<select id="sel" v-model.number="postsPerPage">
			<option value="10" selected>10</option>
			<option value="20">20</option>
			<option value="50">50</option>
		</select>
		<br />
		<label for="search">Wyszukiwarka</label>
		<input
			v-model="searchPhrase"
			type="text"
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
		<div class="pages" v-show="!searchPhrase">
			<a @click="switchPage(-1)" v-show="currentPage > 1"><</a>
			<a
				class="thisPage"
				:class="{ currentPage: page === currentPage }"
				v-for="page in maxPages"
				@click="currentPage = page"
			>
				{{ page }}</a
			>
			<a @click="switchPage(1)" v-show="currentPage < maxPages">></a>
		</div>
	</div>
</template>


<script>
import { mapState } from "vuex";
import PostItem from "./PostItem.vue";

export default {
	name: "PostTable",
	components: {
		PostItem,
	},
	data() {
		return {
			searchPhrase: "",
			postsPerPage: 10,
			currentPage: 1,
		};
	},
	watch: {
		postsPerPage: function (val, oldVal) {
			this.currentPage = 1;
		},
	},
	computed: {
		maxPages() {
			if (this.posts && !this.searchPhrase) {
				return Math.ceil(this.posts.length / this.postsPerPage);
			} else {
				return 1;
			}
		},
		postsDisplayed() {
			if (this.posts) {
				if (!this.searchPhrase) {
					let startIndex = this.postsPerPage * (this.currentPage - 1);
					let endIndex = startIndex + this.postsPerPage;
					return this.posts.slice(startIndex, endIndex);
				} else {
					this.currentPage = 1;
					return this.posts.filter(
						(post) =>
							post.title.includes(
								this.searchPhrase.toLowerCase()
							) ||
							post.body.includes(this.searchPhrase.toLowerCase())
					);
				}
			}
		},
		...mapState(["posts"]),
	},
	methods: {
		switchPage(value) {
			this.currentPage += value;
		},
	},
};
</script>
<style scoped>
.post_table table {
	border: 1px solid black;
}
.post_table .currentPage {
	font-weight: bold;
}
</style>
