<script lang="ts">
    import { docs, loginWithGoogle } from "$lib/firebase";
    import { page } from "$app/stores"
    import authStore from "../../../stores/authStore";
    import Header from "../../Global/Header.svelte";
    import SingleButtonsView from "./Single-Buttons-View.svelte";
    import SingleItem from "./Single-Item.svelte";
    import { getItemById} from "../../prosloika";

    export let itemID: string = $page.params.slug;
    export let title: string = "Item title";
    export let type: string = "text";
    export let content: string = "Sample text";
    

    docs?.forEach((x: any) => {
        if (x.id == itemID){
            title = x.data.title;
            type = x.data.type;
            content = x.data.content;
        }
    })

    
</script>

<body>
    {#if !$authStore.isLoggedIn}
        {#await loginWithGoogle()}
            <p>Waiting for login...</p>
        {:then _} 
            <p>Successfully logged in!</p>
        {/await}
    {:else}
    {#await getItemById(itemID)}
        <p>Loading the item...</p>
    {:then item} 
    <Header name="{ item.data.title }"/>
    <SingleItem type="{ item.data.type }" content="{ item.data.content }" />
    <SingleButtonsView id="{ itemID }" />        
    {/await}
    {/if}
</body>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        background-color: #888;
    }
</style>