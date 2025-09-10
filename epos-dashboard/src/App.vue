<template>
  <div>
    <h2>EPOS Dashboard</h2>
    <div v-if="data">
      <div>Daily Sales:</div>
      <ul>
        <li v-for="d in data.daily" :key="d.day">{{ d.day }}: {{ d.sales }}</li>
      </ul>
      <h3>Top Products</h3>
      <table>
        <tr><th>Name</th><th>Units</th></tr>
        <tr v-for="p in data.topProducts" :key="p.name">
          <td>{{ p.name }}</td>
          <td>{{ p.units }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EposApp',
  data() {
    return { data: null };
  },
  mounted() {
    fetch('/api/epos/sales')
      .then(res => res.json())
      .then(d => { this.data = d; });
  }
};
</script>
