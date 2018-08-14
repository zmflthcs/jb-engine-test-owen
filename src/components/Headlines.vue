<template>
  <div>
    <v-container grid-list-md fluid v-if="filteredHeadline.length>0" >
    <v-layout v-for="(headline,index) in filteredHeadline" v-bind:key="index">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          v-bind:src="headline.urlToImage"
          height="300px">
           <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline sourceName">{{headline.source.name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"> {{headline.title}}</h3>
            <div>
              {{headline.description}}
              <br/>
              {{headline.publishedAt}}
              </div>
          </div>
        </v-card-title>

      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  
  
  <v-container class="empty"  v-else>
    No News Available
  </v-container>       
  
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';


export default {
  name: 'Headlines',
  data(){
    return{
      filter: ""
    } 
  },
  computed: {
    ...mapState([
      'headlines',
      'filterSource'
    ]),

    filteredHeadline: function(){
      let filter;
      if(this.filterSource=="Show All News"){
        filter="";
      }
      else{
        filter=this.filterSource;
      }
     return this.headlines.filter(headline=> {
        return headline.source.name.indexOf(filter)==0;
      })
    }
    
  },
  props: {

  },
  methods:{
    ...mapMutations([
       'GET_HEADLINES'
    ]),
    getRecentNews: function(){
       this.GET_HEADLINES();
    }
  },
  created(){
      this.getRecentNews();
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty{
  font-size: x-large;
  text-align: center;
}
.sourceName{
  background-color: #1D1D1D;
  color: white;
  padding: 5px;
}
</style>
