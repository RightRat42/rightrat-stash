<script lang="ts">
  import * as libFirebase from '$lib/firebase';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';
  import authStore from "../../stores/authStore";

  const sub = authStore.subscribe(async (info) => {
    if (info.isLoggedIn) {
      await goto('/Restricted');
    }
  });

  onDestroy(() => {
    sub();
  });
</script>


<body>
  <div class="mainblock">
    <div class="title">
      <h1>Login with Google</h1>
    </div>
    <div class="center">
      <button on:click={libFirebase.loginWithGoogle}>Log in with google</button>      
    </div>
  </div>
</body>

<style>
  :global(body) {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      background-color: #888;
  }

  .mainblock {
      padding: 10px;
      display: contents;

      min-width: 250px;
      min-height: 100vh;
      justify-content: space-evenly;
      align-items:center;

      border-radius: 25px;
      border: 2px solid #000;
      box-sizing: border-box;
      background: #FEE;
  }

  .title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      min-width: max(100vw, 250px);
      min-height: 15vh;



      border-radius: 25px 25px 0px 0px;
      border: 2px solid #000;
      box-sizing: border-box;
      background: #FEE;
  }

  h1 {
      color: red;
      text-align: center;
      font-family: Inter;
      font-size: min(max(4vw, 20px), 40px);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
  }

  .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:space-between;
      padding: 20px;
      min-width: max(100vw, 250px);
      min-height: 85vh;

      border-radius: 0px 0px 25px 25px;
      border: 2px solid #000;
      box-sizing: border-box;
      background: #FFF;
  }
 
  :global(body) {
      margin: 0;
      padding: 10;
      background-color: #FFF;
  }
  * ::webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

</style>