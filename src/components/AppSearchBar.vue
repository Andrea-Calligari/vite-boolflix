<script>
import { store} from '../store'

export default{
    data(){
        return{
            store
        }
    }
}

</script>

<template>
     <header class="header_page ">
        <div class="container">
            <div class="row align-items-center ">
                <div class="col-6">
                    <h1 >Boolflix</h1>
                </div>
                <div class="col-6 d-flex gap-2 ">
                    <input  class="form-control mr-sm-2" @keyup.enter="$emit('search')" v-model.trim="store.inputSearch" type="text" placeholder="Cerca un Film o una Serie Tv...">
                    <button  class="btn btn-danger" @click="$emit('search')" type="submit" value="Cerca">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped lang="scss">
.header_page {
    padding: 16px ;
    background: rgb(230,0,0);
background: radial-gradient(circle, rgba(230,0,0,0.742734593837535) 30%, rgba(13,13,13,0.8599089293920693) 100%);

    h1 {
        font-size: 60px;
        color: white;
    }
}

.d-flex {
    justify-content: space-between;
    align-items: center;
}

input[type="text"] {
  min-width: 80%;
  padding: 4px;
}



</style>