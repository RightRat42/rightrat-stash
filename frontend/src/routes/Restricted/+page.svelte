<script lang="ts">
    import { base } from '$app/paths';
    import * as libFirebase from '$lib/firebase';
    import authStore from '$stores/authStore';
    import { docs } from '$lib/firebase';
</script>
  
<body>
    <div class="mainblock">
        <div class="title">
            <h1>Hi!</h1>
        </div>
        <!--{#if $authStore.firebaseControlled}-->
        <div class="center">

            {#if !$authStore.isLoggedIn}
            <p><a href="/Login">Log in</a></p>
            {:else}
            <p>Logged in as: {$authStore.user?.email}</p>
            <p><button on:click={libFirebase.firebaseLogout}>Log out</button></p>
            {#await libFirebase.loadDocs()}
                Loading docs...
                {:then _}
                <a href="{ base }/Storage">Go to Storage</a>
                {/await}
                {/if}
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

    button {
        background-color: #FFF;
        color: #B00;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 15px), 30px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border: 3px solid black ;
        border-radius: 10px;

    }
    
    p {
        color: #600;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 10px), 25px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-decoration: none;
    }
    
    a {
        color: #600;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 10px), 25px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-decoration: none;
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

</style>

