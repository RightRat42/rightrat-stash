<script lang="ts">
    import FileItem from "./File-Item.svelte";
    import LinkItem from "./Link-Item.svelte";
    import TextItem from "./Text-Item.svelte";
    import * as fetcher from "../prosloika";
    import Header from "../Global/Header.svelte";
    let items: any = [];
    let ids = [];
    ids = fetcher.get_items_ids();
    items = fetcher.get_items_by_ids(ids);
</script>

<body>
    <Header type="storage" />
    
    <div class="storage">
        {#each items as x}
        <div class="gridContainer">
            {#if x.type=="link"}
                <LinkItem id="{ x.id }" title="{ x.title }" content="{ x.content }" tags={ x.tags }/>
            {:else if x.type=="text"}
                <TextItem id="{ x.id }" title="{ x.title }" content="{ x.content }" tags={ x.tags }/>
            {:else if x.type=="file"}
                <script lang="ts"></script>
                <FileItem id="{ x.id }" title="{ x.title }" content="{ x.content }" tags={ x.tags }/>
            {/if}
        </div>
        {/each}
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