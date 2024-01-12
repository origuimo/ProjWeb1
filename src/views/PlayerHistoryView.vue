<template>
  <div class="phistory">
    <h1>{{ title }}</h1>
    <div>
      <h2>Games Played: {{ playerHistory.games_played }}</h2>
      <h2>Games Won: {{ playerHistory.games_won }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Player History',
      playerHistory: { games_played: 0, games_won: 0 },
    };
  },
  methods: {
    fetchPlayerStats() {
      
      fetch(`https://balandrau.salle.url.edu/i3/players/statistics`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
      })
        .then(response => response.json())
        .then(data => {
          this.playerHistory = data;
        })
        .catch(error => console.error('Error fetching player info:', error));
    },
    goLog() {
      this.$router.push('/logview');
    },
  },
  mounted() {
    this.fetchPlayerStats();
  },
};
</script>

<style scoped>
.phistory {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/fondomed.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-bottom: 20px;
}

h2 {
  font-size: 24px; /* Ajusta el tamaño de la fuente según sea necesario */
  margin: 10px 0; /* Espaciado entre los elementos */
}
</style>
