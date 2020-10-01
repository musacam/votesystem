<!-- eslint-disable -->
<template>
	<div class="linkPage">
		<vue-confirm-dialog></vue-confirm-dialog>
		<div class="points"><div class="linkPoint">{{link.points}}</div>points</div>
		<div class="linkView">
			<div class="linkTitle">{{link.title}}</div>
			<div class="linkURL">({{link.url}})</div>
			<div class="linkVote">
				<div class="upVote" v-on:click="upVote">
					<b-icon icon="arrow-up"></b-icon><span class="voteInfo">Up Vote</span>
				</div>
				<div class="downVote" v-on:click="downVote">
					<b-icon icon="arrow-down"></b-icon><span class="voteInfo">Down Vote</span>
				</div>
			</div>
		</div>
		<div id="trashcan" class="delete" v-on:click="handleClick(link)"
			><b-icon icon="trash"></b-icon></div>
	</div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex';
import VueConfirmDialog from 'vue-confirm-dialog'

export default {
	name: 'LinkPage',
	data() {
		return {
		}
	},
	props: {
		link: {
			required: true
		}
	},
	methods: {
		upVote() {
			this.updatePoints({linkId: this.link.id, points: this.link.points+1});
		},
		downVote() {
			this.updatePoints({linkId: this.link.id, points: this.link.points-1});
		},
		handleClick(link){
			if (event.target.id == "trashcan" || event.target.parentElement.id == "trashcan") {
			this.$confirm(
				{
				message: `Are you sure?`,
				button: {
					no: 'No',
					yes: 'Yes'
				},
					callback: confirm => {
						if (confirm==true) {
							for(let i = 0; i<this.linksPage.length; i++){
								if (this.linksPage[i].id == link.id) {
                					this.deleteLink(this.link.id);
                					break
              					}
							}
						}
					}
				}
			)}
    	},
	...mapActions(['deleteLink', 'updatePoints']),
	},
}
</script>
<style lang="scss" scoped>
/* eslint-disable */

.linkPage {
	margin: auto;
    display: flex;
    padding: 5px;
    width: 400px;

	&:hover {
		border: solid;
	}

	.points {
		border-radius: 10px;
		margin-right: 15px;
		padding: 10px 20px;
		font-family: Arial, Helvetica, sans-serif;
		color:rgb(129, 29, 29);
		.linkPoint {
			font-size: 30px;
    		font-weight: 600;
		}
	}
	
	.linkView {
		text-align: left;
		width: 275px;

		.linkTitle {
			font-weight: 600;
    		font-size: 20px;
		}
		.linkURL{
			font-weight: 100;
			font-size: 15px;
		}
		.linkVote {
			display: flex;
			margin-top: 10px;

			.downVote {
				flex: 1;
    			text-align: right;
			}

			div {
				&:hover {
					cursor: pointer;
					.voteInfo {
						text-decoration: underline;
					}
				}
			}
		}
	}
}

.delete{
	&:hover {
		cursor: pointer;
		background-color: rgb(168, 62, 62);
	}
}

</style>