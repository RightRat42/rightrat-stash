<script lang="ts">
    import LinkItem from "./Link-Item.svelte";
    import TextItem from "./Text-Item.svelte";
    import * as fetcher from "../prosloika";
    import Header from "../Global/Header.svelte";
    import authStore from "../../stores/authStore";
    import { docs } from "$lib/firebase";

</script>

<body>
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
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(3, 1fr);

        flex-direction: row;
        flex-wrap: wrap;
        flex: 90;
        width: 100vw;
        flex-shrink: 0;
        min-width: 250px;
        min-height: 85vh;
        justify-content: space-evenly;
        align-items:center;

        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FFF;
    }

    @media (max-width: 800px){
        .storage {
            padding: 20px;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(2, 1fr);

            flex-direction: row;
            flex-wrap: wrap;
            flex: 90;
            width: 100vw;
            flex-shrink: 0;
            min-width: 250px;
            justify-content: space-evenly;
            align-items:center;

            border-radius: 25px;
            border: 2px solid #000;
            box-sizing: border-box;
            background: #FFF;
        }
    }

    @media (max-width: 550px){
        .storage {
            padding: 10px;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr;

            flex-direction: row;
            flex-wrap: wrap;
            flex: 90;
            width: 100vw;
            flex-shrink: 0;
            min-width: 250px;
            justify-content: space-evenly;
            align-items:center;

            border-radius: 25px;
            border: 2px solid #000;
            box-sizing: border-box;
            background: #FFF;
        }
    }

    

    .gridContainer {
        overflow: auto;
        place-self: center;
    }
</style>