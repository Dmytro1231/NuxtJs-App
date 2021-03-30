<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="block-title">
        <h2 class="title-footer">Бажаєте отримувати більше новин?</h2>
        <hr class="line" />
      </div>
      <div class="input-container">
        <div class="input-wrapper">
          <ValidationObserver ref="form">
            <form @submit.prevent="onSumbit">
              <label>
                Email
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <input
                    type="email"
                    placeholder="placeholder"
                    v-model="email"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </label>
              <label>
                Ваше ім’я
                <ValidationProvider rules="required|name" v-slot="{ errors }">
                  <input type="text" placeholder="placeholder" v-model="name" />
                  <span>{{ errors[1] }}</span>
                </ValidationProvider>
              </label>
            </form>
          </ValidationObserver>
        </div>
        <button class="btn" type="submit">підписатися</button>
      </div>
      <div class="logo-footer">
        <img
          src="../../assets/logo.png"
          alt="logo"
          width="136"
          height="72"
          class="logo-img"
        />
        <img
          src="../../assets/goodsale.png"
          alt="goodsalale"
          width="260"
          height="30"
          class="logo-text"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      email: "",
      name: "",
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  background: #363d41;
  .wrapper {
    margin: 0 auto;
    max-width: 1346px;
    padding-top: 41px;
    .title-footer {
      text-align: left;
      font-family: "Montserrat", sans-serif;
      font-size: 24px;
      line-height: 29px;
      color: #fff;
      padding-bottom: 8px;
    }
    .line {
      width: 100%;
      border: 1px solid #e5e5e5;
      margin-bottom: 15px;
    }
    .input-container {
      display: flex;
      justify-content: space-between;
      font-family: "Raleway", sans-serif;
      .input-wrapper {
        margin-bottom: 43px;
        label {
          display: inline-block;
          color: #fff;
          font-size: 12px;
          line-height: 14px;
          &:not(:last-child) {
            margin-right: 64px;
          }
          input {
            display: block;
            border: 1px solid #c4c4c4;
            width: 404px;
            height: 46px;
            outline: none;
            margin-top: 8px;
            background: none;
            &::placeholder {
              padding: 10px 0 10px;
              font-style: italic;
              color: #c4c4c4;
            }
          }
        }
      }
      .btn {
        height: 70px;
        width: 210px;
        background: #cc9966;
        outline: none;
        cursor: pointer;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 800;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        border: none;
        color: #fff;
        margin-top: 25px;
      }
    }
    .logo-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 25px;
    }
  }
}
@media (max-width: 1024px) {
  .block-title {
    max-width: 90vw;
  }
  .input-container {
    max-width: 100vw;
    display: block !important;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 50px;
    }
    .input-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      label {
        margin-right: 0 !important;
        margin-bottom: 10px;
      }
    }
  }
}
@media (max-width: 480px) {
  .wrapper {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 10px 0 10px;
    padding-top: 20px;
  }
  .title-footer {
    font-size: 18px !important;
  }
  hr {
    width: 90vw !important;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .btn {
      height: 45px !important;
      width: 175px !important;
      margin-left: 70px;
      margin-bottom: 65px !important;
      margin: 0 auto;
    }
    label {
      margin-bottom: 20px;
    }
  }
  input {
    width: 300px !important;
  }
  .logo-img {
    width: 70px;
    height: 38px;
  }
  .logo-text {
    width: 134px;
    height: 16px;
  }
}
</style>