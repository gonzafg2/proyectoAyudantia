<template>
  <div v-if="Object.keys(editProducto).length !== 0">
    <v-container>
      <h1>Modificar Productos</h1>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="editProducto.nombre" label="Nombre"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="editProducto.codigo" label="Código"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="editProducto.stock" label="Stock"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="editProducto.precio" label="Precio"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn @click="AgregarProducto(); ClearData()" depressed>
                Modificar Producto
              </v-btn>
            </v-col>
            <v-col cols="12" md="4">
              
              <h1>El producto es: {{ editProducto.nombre }}</h1>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EditarProductos",
  data: () => ({
    //
  }),
  computed: {
    ...mapState("Datos", ["editProducto"]),
  },
}
</script>
