import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  locale: 'ko',
  errorBagName: 'vErrors',
  fieldsBagName: 'vFields',
})
