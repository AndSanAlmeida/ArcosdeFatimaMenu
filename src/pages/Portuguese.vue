<template>
  <Layout>
    <h1 class="title">Menu | Português</h1>

    <h3>Entradas</h3>
    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      <div v-if="page.node.Category == 1" class="menu-list">
        <p>
          {{ page.node.Product }}
          <small v-if="page.node.Description">
            <i>({{ page.node.Description }})</i>
          </small>
        </p>
        <p>
          <b>{{ page.node.Price }}</b>
        </p>
      </div>
    </div>

    <h3>Saladas</h3>
    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      <div v-if="page.node.Category == 2" class="menu-list">
        <p>
          {{ page.node.Product }}
          <small v-if="page.node.Description">
            <i>({{ page.node.Description }})</i>
          </small>
        </p>
        <p>
          <b>{{ page.node.Price }}</b>
        </p>
      </div>
    </div>

    <h3>Sopa</h3>
    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      <div v-if="page.node.Category == 3" class="menu-list">
        <p>
          {{ page.node.Product }}
          <small v-if="page.node.Description">
            <i>({{ page.node.Description }})</i>
          </small>
        </p>
        <p>
          <b>{{ page.node.Price }}</b>
        </p>
      </div>
    </div>

    <h3>Peixe</h3>
    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      <div v-if="page.node.Category == 4" class="menu-list">
        <p>
          {{ page.node.Product }}
          <small v-if="page.node.Description">
            <i>({{ page.node.Description }})</i>
          </small>
        </p>
        <p>
          <b>{{ page.node.Price }}</b>
        </p>
      </div>
    </div>

    <h3>Carnes</h3>
    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      <div v-if="page.node.Category == 5" class="menu-list">
        <p>
          {{ page.node.Product }}
          <small v-if="page.node.Description">
            <i>({{ page.node.Description }})</i>
          </small>
        </p>
        <p>
          <b>{{ page.node.Price }}</b>
        </p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query PT {
    allGoogleSheet (order:ASC) {
      edges {
        node {    
          Category
		      Product
          Description
		      Price
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Português"
  }
};
</script>

<style>
.title {
  text-align: center;
}
.menu-list {
  display: flex;
  justify-content: space-between;
}
.menu-list p {
  margin: 5px 0;
  padding: 0 15px;
}
</style>