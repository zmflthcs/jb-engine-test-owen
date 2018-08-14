<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 offset-sm9 d-flex>
        <v-select
          :items="sources"
          label="Filter"
          v-model="filterSource"
          @change="changeFilter"
        ></v-select>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    
 name: 'FilterButton',
  
  data(){
    return{
      filterSource: "",
    } 
  },
  computed: {
    ...mapState([
      'sources'
    ])
  },
  props: {

  },
  methods:{
    ...mapMutations([
       'GET_SOURCES',
        'FILTERSOURCE_CHANGE'
    ]),
    getSources: function(){
       this.GET_SOURCES();
    },
    changeFilter: function(){
      this.FILTERSOURCE_CHANGE(this.filterSource);
    }
  },
  created(){
      this.getSources();
   }
   
  }

</script>

