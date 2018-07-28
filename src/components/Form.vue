<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="First Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.firstname"
                      required
                      placeholder="First name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Last Name:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.lastname"
                      required
                      placeholder="Last name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup4"
                    label="Address:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      type="text"
                      v-model="form.address"
                      required
                      placeholder="Address">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup5"
                    label="Sex:"
                    label-for="exampleInput5">
        <b-form-select id="exampleInput5"
                      :options="sexes"
                      required
                      v-model="form.sexes">
        </b-form-select>
      </b-form-group>

      <b-form-group id="exampleInputGroup6"
                    label="Telephone:"
                    label-for="exampleInput6">
        <b-form-input id="exampleInput6"
                      type="text"
                      v-model="form.telephone"
                      required
                      placeholder="0123456789">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup7"
                    label="Company:"
                    label-for="exampleInput7">
        <b-form-input id="exampleInput7"
                      type="text"
                      v-model="form.company"
                      required
                      placeholder="Company Name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup8"
                    label="Department:"
                    label-for="exampleInput8">
        <b-form-input id="exampleInput8"
                      type="text"
                      v-model="form.department"
                      required
                      placeholder="Company Name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup9"
                    label="Date of Joining:"
                    label-for="exampleInput9">
        <b-form-input id="exampleInput9"
                      type="text"
                      v-model="form.dateofjoining"
                      required
                      placeholder="01-01-2018">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  },
  data () {
    return {
      form: {
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        telephone: '',
        company: '',
        department: '',
        dateofjoining: '',
        sexes: null,
        checked: []
      },
      sexes: [
        { text: 'Select One', value: null },
        'Male', 'Female'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.firstname = '';
      this.form.lastname = '';
      this.form.telephone = '';
      this.form.address = '';
      this.form.company = '';
      this.form.department = '';
      this.form.dateofjoining = '';
      this.form.sexes = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
