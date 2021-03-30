<template>
  <section>
    <div class="container">
      <div class="card" v-for="product in products.data" :key="product.id">
        <img
          class="product-img"
          :src="product.image"
          :alt="product.name"
          width="252"
          height="360"
        />
        <div class="block-info">
          <h2 class="title">{{ product.name }}</h2>
          <div class="block-price" v-if="product.discount_amount">
            <img src="~/assets/price.png" alt="price" />
            <span class="price" :style="{ textDecoration: 'line-through' }"
              >${{ product.price }}</span
            >
            <img src="~/assets/price.png" alt="price" />
            <span class="price discountPrice"
              >${{ product.discount_amount }}</span
            >
          </div>
          <div class="block-price" v-else>
            <img src="~/assets/price.png" alt="price" />
            <span class="price" :style="{ textDecoration: 'line-through' }"
              >${{ product.price }}</span
            >
          </div>
          <div class="block-description">
            <p class="description">{{ product.description }}</p>
          </div>
          <div class="categories-block">
            <span class="categories">
              <img src="../../assets/category.png" alt="category" />
              <Nuxt-link
                :to="`/search?category=${item.id}`"
                v-for="(item, idx) in product.categories"
                :key="idx"
              >
                {{ item.name }}
              </Nuxt-link>
            </span>
          </div>
          <div class="btn-block">
            <span class="line-btn"></span>
            <Nuxt-link
              :nuxt-child-key="products"
              :to="`/product?${product.id}`"
              class="btn"
              >переглянути</Nuxt-link
            >
            <hr class="gorizontal-line" />
          </div>
        </div>
      </div>
      <VSPagination></VSPagination>
    </div>
  </section>
</template>

<script>
import VSPagination from "../../pages/VSPagination";
export default {
  components: { VSPagination },
  data() {
    return {
      products: [],
      priceClass: "price",
      discountClass: "discountPrice",
    };
  },
  async fetch() {
    this.products = await fetch(
      "https://gorest.co.in/public-api/products"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 1346px;
  margin-top: 88px;
  .card {
    height: 360px !important;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: 35px;
    border: 1px solid #e5e5e5;
    .product-img {
      object-fit: cover;
    }
  }
  .block-info {
    margin: 55px 60px 55px;
    color: #363d41;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 18px;
      margin-bottom: 18px;
    }
    .block-price {
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      .price {
        font-family: "Raleway", sans-serif;
        margin-left: 10px;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        margin-right: 25px;
      }
    }
    .description {
      font-size: 14px;
      font-family: "Raleway", sans-serif;
      line-height: 20px;
      font-weight: 400;
      margin-bottom: 75px;
    }
    .categories-block {
      display: inline-block;
      .categories {
        display: flex;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        a {
          color: #6c6c6c;
          text-decoration: none;
        }
      }
      img {
        margin-right: 10px;
      }
    }
    .btn-block {
      display: inline-block;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      bottom: 20px;
      .line-btn {
        display: inline-block;
        height: 3px;
        width: 40px;
        background: #363d41;
        margin-bottom: 2px;
        margin-right: 10px;
        margin-top: 3px;
      }
      .btn {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 17px;
        border: none;
        outline: none;
        cursor: pointer;
        color: #363d41;
        text-decoration: none;
      }
      .gorizontal-line {
        display: none;
      }
    }
  }
  .pagination-wrapper {
    text-align: center;
    margin-bottom: 140px;
  }
}
@media (max-width: 1024px) {
  .card {
    width: 100vw !important;
  }
}
@media (max-width: 480px) {
  .container {
    margin-top: 18px;
    margin-left: 10px;
    width: 300px;
    .card {
      flex-direction: column;
      border: none;
      align-items: flex-start;
      padding-right: 15px;
      .product-img {
        width: 300px;
        height: 158px;
        position: absolute;
        top: 125px;
      }
      .block-info {
        margin: 0;
        display: flex;
        flex-direction: column-reverse;
        .title {
          order: 3;
        }
        .block-price {
          order: 2;
        }
      }
      .block-description {
        display: flex;
        order: 1;
        .description {
          margin-bottom: 20px;
        }
      }
      .categories-block {
        flex-direction: column;
        order: 2;
        margin-bottom: 20px;
      }
      .btn-block {
        text-align: right;
        margin-top: 10px;
        .gorizontal-line {
          display: block;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>