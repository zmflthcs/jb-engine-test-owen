import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headlines: [],
    sources: [],
    filterSource: ""
  },
  mutations: {
    GET_HEADLINES: function(state){
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e')
      .then((result) => {
        state.headlines = result.data.articles;
        console.log(state.headlines);
      })
      .catch(
        e=>{
          console.log(e);
        }
      )
    },
    GET_SOURCES: function(state){
      axios.get('https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e')
      .then((result) => {
        //console.log(result.data.sources);
        result= result.data.sources;
        
        for(let i=0; i<result.length;i++){
          if(!state.sources.includes(result[i].name)){
            state.sources.push(result[i].name)
          }
        }
        state.sources.unshift("Show All News");
       // state.sources = result.data.articles;
      })
      .catch(
        e=>{
          console.log(e);
        }
      )
    },
    FILTERSOURCE_CHANGE: function(state, selectedSource){
      state.filterSource = selectedSource;
    }

  },
  actions: {

  }
})
