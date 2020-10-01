/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

//https://forum.vuejs.org/t/vuex-how-to-save-a-fake-state-in-localstorage/30772
//https://www.reddit.com/r/vuejs/comments/7dqlfc/vuex_best_practice_do_you_keep_sorted_data_in_the/
//https://vuex.vuejs.org/guide/state.html 
//https://vuex.vuejs.org/guide/mutations.html
//https://vuex.vuejs.org/guide/getters.html
//https://vuex.vuejs.org/guide/actions.html


const state = {
	links: [],
};

const mutations = {
    createLink(state, givenLink) {
        givenLink.points = 0;
        givenLink.id = state.links.length;
        state.links.push(givenLink);
    },
    deleteLink(state, linkId) {
        let linkIndex = state.links.findIndex(link => {
            return link.id == linkId
        });
        Vue.delete(state.links, linkIndex);
    },
    updateStore(state) {
        localStorage.setItem('store', JSON.stringify(state));
    },
	initialiseStore(state) {
		if(localStorage.getItem('store')) {
			this.replaceState(
				Object.assign(state, JSON.parse(localStorage.getItem('store')))
			);
		}
    },
    updatePoints(state, [linkId, points]) {
        state.links.forEach(link => {
            if(link.id == linkId) {
                link.points = points;
            }
        });
    },
};

const getters = {
	links: state => state.links.sort((a, b) => b.id - a.id)
};

const actions = {
    createLink({ commit }, givenLink) {
        commit('createLink', givenLink);
        commit('updateStore');
        commit('initialiseStore');
    },
    deleteLink({ commit }, linkId) {
        commit('deleteLink', linkId);
        commit('updateStore');
    },
    updatePoints({ commit }, { linkId, points }) {
        commit('updatePoints', [linkId, points]);
        commit('updateStore');
    },
};


Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
	state,
	mutations,
    getters,
    actions
});

export default store;
