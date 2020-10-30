<template>
  <div>
    <v-container>
      <h1>Agregar Productos</h1>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.nombre" label="Nombre"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.codigo" label="Código"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.stock" label="Stock"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete.precio" label="Precio"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn @click="AgregarProducto(); ClearData()" depressed>
                Agregar Producto
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AgregarProductos",
  data: () => ({
    juguete: {
      nombre: "",
      codigo: "",
      stock: "",
      precio: "",
    }
  }),
  methods: {
    ...mapActions("Datos", ["addData"]),
    AgregarProducto() {
      this.addData(this.juguete);
    },
    ClearData() {
      this.juguete.nombre = ""
      this.juguete.codigo = ""
      this.juguete.precio = ""
      this.juguete.precio = ""
    }
  }
};
</script>
