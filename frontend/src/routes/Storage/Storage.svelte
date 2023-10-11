<script lang="ts">
    import LinkItem from "./Link-Item.svelte";
    import TextItem from "./Text-Item.svelte";
    import * as fetcher from "../prosloika";
    import Header from "../Global/Header.svelte";
    import authStore from "../../stores/authStore";
    import { docs } from "$lib/firebase";

</script>

<body class="pageContainer">
    <Header type="storage" />
    
    <div class="storage">
        {#if !$authStore.isLoggedIn}
            <p><a href="/Login">Log in</a></p>
        {:else}
        {#await fetcher.get_items()}
            <p>Now loading...</p>
        {:then _} 
            {#each docs as x}
            <div class="gridContainer">
                {#if x.data.type=="link"}
                <LinkItem id="{ x.id }" title="{ x.data.title }" content="{ x.data.content }" tags={ x.data.tags }/>
                {:else if x.data.type=="text"}
                <TextItem id="{ x.id }" title="{ x.data.title }" content="{ x.data.content }" tags={ x.data.tags }/>
                
                {/if}
                
            </div>
            {/each}
        {:catch error}
            <h2 style="color:red">{error}</h2>
        {/await}
        {/if}
    </div>
</body>

<style>
    

    body {
        margin: 0px;
        padding: 0px;
        display: flex;
        align-content: start;
        flex-direction: column;
    }

    .storage {
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex: 1;
        width: 100%;
        flex-shrink: 0;
        min-width: 250px;
        justify-content: space-around;
        align-items: baseline;

        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FFF;
    }

    .pageContainer {
        display: flex; 
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    .gridContainer {
        overflow: auto;
        place-self: center;
        margin: 10px;
    }
</style>