<template>
  <div>
    <b-button @click="showModal">
      Register
    </b-button>
    <b-modal ref="myModalRef" hide-footer title="HireEmployee">
      <div class="d-block text-center">
        <h3>PLease enter the details</h3>
      </div>
      <Form/>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-btn>
    </b-modal>
  </div>
</template>

<script>
import Form from './Form.vue'
export default {
  name: 'HireEmployee',
  components: {
    Form
  },
  props: {
    msg: String
  },
  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
