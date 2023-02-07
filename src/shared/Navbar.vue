
<template>
  <nav>
    <ul class="navbar">
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/races">carreras</router-link></li>
      <li><router-link to="/pilots">pilotos</router-link></li>
      <li><router-link to="/leaderboard">leaderboard</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  &-item {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &-link {
    color: inherit;
    text-decoration: none;
  }
}
</style>
