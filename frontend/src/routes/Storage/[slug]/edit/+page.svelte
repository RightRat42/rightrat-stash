<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores"
    import data from "../../../../../../backend/src/assets/data.json"
    import files from "../../../../../../backend/src/assets/files.json"
    import Header from "../../../Global/Header.svelte";
    import { SaveChanges } from "../../../prosloika";


    let dataobj = JSON.parse(JSON.stringify(data));
    
    
    export let itemID: string = $page.params.slug;
    export let title: string = "Item title";
    export let type: string = "text";
    export let content: string = "Sample text";

    let innerID: number = 0;
    let parentUrl = $page.url.origin + base + "/Storage/" + itemID + "/";
    
    for (let i = 0; i < data.items.length; ++i){
        if (data.items[i].id == itemID) {
            title = dataobj.items[i].title
            type = dataobj.items[i].type;
            content = dataobj.items[i].content; 
            innerID = i;
        }
    }

    let textContent = content;

    
</script>

<body>
    <Header name="{ title }"/>
    <div class="displayItem">
        {#if type == "link"}
            <textarea id="itemContent" name="linkUrl" bind:value={textContent}></textarea>
        {/if}
    </div>
    <footer>
        <button class="click" on:click={SaveChanges(textContent, innerID)}>
            <p>save</p>
        </button>
        <a class="click" href="{ parentUrl }">
            discard
        </a>
    </footer>
</body>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        background-color: #888;
    }

    .displayItem {
        padding: 10px;
        display: flex;
        position: relative;
        
        flex-direction: column;
        flex-wrap: wrap;
        flex: 90;
        width: 100vw;
        height: auto;
        flex-shrink: 0;
        min-width: 250px;
        justify-content: space-evenly;
        align-items:center;

        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FFF;
    }

    textarea {
        display: flex;
        position: relative;
        width: 90vw;
        min-height: 15vh;
        max-height: 80vh;
        max-width: 95vw;
        min-width: 15vw;

        font-size: 30px;
        overflow: scroll;
        scrollbar-width: none;
    }

    footer {
        display: flex;
        position: relative;
        align-self: flex-end;
        
        width: 100vw;
        flex: 5;
        justify-content: space-evenly;
        
        
        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FFF;
    }

    .click {
        display: flex;
        position: relative;
        height: 5vh;
        width: 48vw;
        margin: 1%;

        justify-content: center;
        align-items: center;

        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #EEE;
        text-decoration: none;
        font-size: 15px;
        color: #000;
    }
    
    p {
        display: relative;
        margin: 0;
        position: relative;
        
        text-align: center;
        user-select: none;
    }

    .click:hover {
        filter: brightness(95%);
        cursor: pointer;
    }
</style>