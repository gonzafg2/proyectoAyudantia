<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Código
          </th>
          <th class="text-left">
            Stock
          </th>
          <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in Productos" :key="item.nombre" @click="editarJuguete(item.id)">
          <td>{{ item.nombre }}</td>
          <td>{{ item.codigo }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>

    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "TablaDatos",
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          stock: 10,
          precio: 2000
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          stock: 10,
          precio: 2000
        },
        {
          name: "Eclair",
          calories: 262,
          stock: 10,
          precio: 2000
        },
        {
          name: "Cupcake",
          calories: 305,
          stock: 10,
          precio: 2000
        },

      ],
    };
  },
  computed: {
    ...mapState("Datos", ["Productos"]),
  },
  methods: {
    ...mapMutations("Datos", ["showEditProducto"]),
    editarJuguete(juguete) {
      this.showEditProducto(juguete)
    }
  },
};
</script>

<style></style>
