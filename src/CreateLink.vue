<!-- eslint-disable -->
<template>
	<div class="container-all">
			<div class="returnBack">
				<button class="returnButton" type="button" @click="$router.push('/')">
					<b-icon icon="arrow-return-left"/>
						Return to Home
				</button>					
			</div>
			<div>
				<!-- https://vuejs.org/v2/guide/forms.html -->
				<div class="linkAdd">
					<div>
						<h1>Add New Link</h1>
					</div>
					<div>
						<h5>Link Name:</h5>
						<v-text-field 
							outline
							v-model="givenLink.title"
							placeholder="e.g. Alphabet"
						></v-text-field>
					</div>
					<div>
						<h5>Link URL:</h5>
						<v-text-field
							outline
							v-model="givenLink.url"
							placeholder="e.g. http://abc.com"
						></v-text-field>
					</div>
					<div>
						<v-btn @click="addNewLink" class="addButton" rounded color="primary" dark> Add Link </v-btn>
					</div>
				</div>
			</div>
	</div>
</template>
<script>
/* eslint-disable */
import { mapActions } from 'vuex'
import validator from 'validator'
import VueToastify from "vue-toastify"


export default {
	name: 'CreateLink',
	components: {
	},
	data() {
		return {
			givenLink: {},
		}
	},
	methods: {
		addNewLink() {
			if(this.givenLink.title.length > 0 && validator.isURL(this.givenLink.url)){
				this.createLink(this.givenLink);
				this.$vToastify.success("Link Added");
			}
		},
		...mapActions(['createLink']),
	},
}
</script>
<style lang="scss" scoped>
/* eslint-disable */

.container-all{
	padding:100px;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
}
.returnButton {
	margin-bottom: 30px;
	font-size: 15px;
	font-weight: 300;
	border:solid rgb(55, 55, 55);
	background-color: rgb(177, 177, 177);
}
.linkAdd {
	h1{
		text-align: center;
	}
	h5 {
		text-align: left;
	}
}
.returnBack {
	text-align: left;
}

.addButton{	  
	margin-left: 225px;
}

</style>
