<script lang="ts">
    import * as libFirebase from '$lib/firebase';
    import authStore from '$stores/authStore';
    import { docs } from '$lib/firebase';
</script>
  
<h1>Hi!</h1>
<!--{#if $authStore.firebaseControlled}-->
    {#if !$authStore.isLoggedIn}
        <p><a href="/Login">Log in</a></p>
    {:else}
        <p>Logged in as: {$authStore.user?.email}</p>
        <p><button on:click={libFirebase.firebaseLogout}>Log out</button></p>
        {#await libFirebase.loadDocs()}
            Loading docs...
        {:then _}
            <p>docs: {JSON.stringify(libFirebase.docs)}</p>

            <a href="/Storage">Go to Storage</a>
        {/await}
    {/if}
<!--{/if}-->
