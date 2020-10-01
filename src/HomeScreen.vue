<!-- eslint-disable -->
<!-- https://medium.com/@ermayamustafa/vue-js-v-model-ve-form-komponentlerde-kullan%C4%B1m%C4%B1-a36987d82377 -->
<template>
<div class="containerAll">
	<div class="linksContainer">
		<div>
			<button
				class="create-button"
				type="button"
				@click="addLink">
				<b-icon icon="plus-square"/> <span>Submit Link</span>
			</button>
			</div>
		<hr style=" margin:10px;" />
		<div class="orderList">
          <v-select
            :items="items"
			v-model="sortType"
            label="Order By"
          ></v-select>
		</div>
		<div >
			<div>
				<link-page v-for="link in linksPage" :link="link" :key="link.id"></link-page>
			</div>
		</div>
	</div>
</div>
</template>
<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex';
import LinkPage from './LinkPage'

export default {
	name: 'HomeScreen',
	components: {
		LinkPage,
	},

	data: () => ({
		sortType: {},
		items: [{text : 'Most Voted', value : 1}, {text : 'Least Voted', value : 2}],
	}),

	//https://stackoverflow.com/questions/42883835/sort-an-array-in-vue-js
	computed: {
		linksPage () {
			if(this.sortType == 1) {
				let sortedArray = [...this.links].sort((a, b) => b.points - a.points);
				return sortedArray;
			}
			if(this.sortType == 2) {
				let sortedArray = [...this.links].sort((a, b) => a.points - b.points);
				return sortedArray;
			}
			return [...this.links];
		},
		...mapGetters(['links']),
	},
	methods: {
		addLink() {
			this.$router.push('/createlink');
		},
		...mapActions(['createLink']),
	},
}
</script>
<style lang="scss" scoped>
/* eslint-disable */

.containerAll{
	padding:100px;
}

.linksContainer {
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
}

.create-button {
    background-color: #adadad;
    font-size: 30px;
    font-weight: 500;
    border: solid rgb(146, 142, 142);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

	.b-icon {
		width:25px;
		height:50px;
		margin-right: 25px;
	}
}

// /deep/ ve >>> syntaxını incele...
.orderList{
	/deep/ .v-select .v-input__control .v-input__slot .v-menu .v-menu__content{
		position:fixed;
	}
}
</style>
