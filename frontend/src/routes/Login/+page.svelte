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

<h1>Login with Google</h1>
<button on:click={libFirebase.loginWithGoogle}>Log in with google</button>
