<script lang="ts">
  import * as libFirebase from '$lib/firebase';
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import authStore from '../stores/authStore';
  import { onMount } from 'svelte';

  onMount(() => {

    libFirebase.firebaseInit();

    firebase.auth().onAuthStateChanged((user) => {
      const authStoreValue={
        isLoggedIn: user !== null,
        user: user,
        userToken: user?.getIdToken(),
        firebaseControlled: true,
      };
      authStore.set(authStoreValue);
    });

  }); // onMount

</script>
<slot/>