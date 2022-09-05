<template>
    <div>
        <div>
            <button @click="modal1=true">Open modal</button>
            <modal v-if="modal1" @close="modal1=false">
                <template v-slot:title>
                    <div>AAAAAAA</div>
                </template>
                <template v-slot:context>
                    <div>BBBBBBBB</div>
                </template>
                <template v-slot:footer>
                    <div>CCCCCCC</div>
                </template>
            </modal>
        </div>
    </div>
</template>

<script>
import modal from './File_modal.vue'
export default {
    components: {
        modal
    },
    data() {
        return {
            modal1:false
        }
    }
}
</script>

<style>

</style>