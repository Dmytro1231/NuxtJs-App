import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import Vue from "vue";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "This email field"
});
