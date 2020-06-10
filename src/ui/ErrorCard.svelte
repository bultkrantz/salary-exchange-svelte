<script>
  export let error;
</script>

<style>
  .error {
    background: #ffc5c5;
    border-radius: 10px;
    margin: 0 auto;
    width: 50%;
    padding: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>

<div class="error">
  <p>Ooops! Ett fel har uppstått, försök igen senare!</p>
  <p>{error}</p>
</div>
