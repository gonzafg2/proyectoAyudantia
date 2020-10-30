<template>
  <div class="home">
    <v-container>
      <TablaDatos />
      <v-btn @click="showAdd" depressed>
        <span v-if="!add">Agregar Producto</span> <span v-if="add">Quitar Formulario</span>
      </v-btn>
      <AgregarProductos v-if="add"/>
      <EditarProductos v-if="!edit" />
    </v-container>
  </div>
</template>

<script>
import TablaDatos from "@/components/TablaDatos.vue";
import AgregarProductos from "@/components/AgregarProductos.vue";
import EditarProductos from "@/components/EditarProductos.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    TablaDatos,
    AgregarProductos,
    EditarProductos
  },
  computed: {
    ...mapState("Datos", ["add", "edit"]),
  },
  methods: {
    ...mapMutations("Datos", ["MostrarAdd"]),
    showAdd() {
      this.MostrarAdd();
    }
  }
};
</script>

<style lang="scss">
.home {
  padding: 20px 0;
}
</style>
