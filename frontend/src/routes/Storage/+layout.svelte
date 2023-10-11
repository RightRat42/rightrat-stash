<script lang="ts">
  import * as libFirebase from '$lib/firebase';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import authStore from "../../stores/authStore";
  import { onMount } from 'svelte';

  onMount(() => {
    console.log("trying to auth...");
    libFirebase.firebaseInit();

    firebase.auth().onAuthStateChanged((user) => {
      const authStoreValue={
        isLoggedIn: user !== null,
        user: user!,
        userToken: user?.getIdToken(),
        firebaseControlled: true,
      };
      authStore.set(authStoreValue);
    });

    console.log("authed");
  });

</script>
<slot/>