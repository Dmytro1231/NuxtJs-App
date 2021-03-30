<template>
  <div>
    <div class="pagination-wrapper">
      <button class="btn btn-prev">Назад</button>
      <span v-for="(item, index) in new Array(7)" :key="index">
        <button class="btn-number">{{ index + 1 }}</button>
      </span>
      <button class="btn btn-next">Вперед</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination-wrapper {
  text-align: center;
  margin-bottom: 141px;
}
.btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  height: 50px;
  width: 90px;
  color: #363d41;
  background: #fff;
  border: 1px solid #c4c4c4;
  margin-right: 30px;
}
.btn-number {
  height: 50px;
  cursor: pointer;
  margin-right: 30px;
  width: 50px;
  border: 1px solid #363d41;
  color: #363d41;
  background: #fff;
  outline: none;
  &:active {
    background: #cc9966;
    border: none;
    color: #fff;
  }
}
@media (max-width: 1024px) {
  .pagination-wrapper {
    width: 100vw;
  }
  .btn {
    margin-top: 5px;
  }
  .btn-number {
    margin-top: 5px;
  }
}
@media (max-width: 480px) {
  .btn {
    height: 25px;
    width: 70px;
    font-size: 12px;
    line-height: 15px;
    margin-right: 12px;
  }
  .btn-number {
    height: 25px;
    width: 25px;
    margin-right: 12px;
    margin-top: 5px;
  }
}
</style>