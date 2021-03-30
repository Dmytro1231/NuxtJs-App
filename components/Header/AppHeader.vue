<template>
  <header>
    <div class="container-header">
      <div class="logo">
        <img
          class="logo-img"
          src="../../assets/logo.png"
          alt="logo"
          width="136"
          height="72"
        />
        <img
          class="logo-text"
          src="../../assets/goodsale.png"
          alt="goodsalale"
          width="260"
          height="30"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-header {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #363d41;

  .logo {
    display: flex;
    align-items: center;
    padding: 20px 0 20px;
  }
}
@media (max-width: 480px) {
  .logo {
    &-img {
      width: 70px;
      height: 38px;
    }
    &-text {
      width: 134px;
      height: 16px;
    }
  }
}
</style>