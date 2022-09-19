import Vue from "vue";
import Router from "vue-router";

import Table from "@/views/Table";
import NewPersonForm from "@/components/NewPersonForm";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Table",
      component: Table,
    },
    {
      path: "/pessoas",
      name: "NewPersonForm",
      component: () => import('../components/NewPersonForm.vue'),
    },
    {
      path: "/pessoas/update",
      name: "UpdatePessoas",
      component: () => import('../components/UpdatePessoas.vue')
    },
    {
      path: "/animais/:user_id",
      name: "AddAnimals",
      component: () => import('../components/AddAnimals.vue')
    },
  ]
});
