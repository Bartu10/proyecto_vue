<template>
    <div>
      <h1>Equipos y corredores de F1</h1>
      <ul>
        <li v-for="team in teams" :key="team.name">
          {{ team.name }}
          <ul>
            <li v-for="driver in team.drivers" :key="driver.name">
              {{ driver.name }} - Número de carrera: {{ driver.number }} - Campeonatos: {{ driver.championships }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import teams from '../json/json.json';
  
  export default {
    data() {
      return {
        teams: teams.teams
      };
    }
  };
  </script>

<style scoped lang="scss">



</style>