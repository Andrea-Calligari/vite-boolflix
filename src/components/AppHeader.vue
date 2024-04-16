<script>
export default{
    data(){
        return{
            inputValue: ''

        }
    }
}

</script>

<template>
    <header class="header_page">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="" alt="Logo">
                </div>
                <div class="col-6">
                    <input  v-model="InputValue" type="text">
                    <input  type="submit" value="Cerca">
                </div>
    
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../style/general' ;
.header_page{
    padding: 24px;

}




</style>
