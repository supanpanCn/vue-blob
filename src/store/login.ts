import { defineStore } from 'pinia'

export default defineStore('spp', {
  state() {
      return {
        spp:''
      }
  },
  actions:{
    updateSpp(spp:string){
        this.spp = spp
    }
  }
})