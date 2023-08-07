<script lang="ts">
    import FileItem from "./File-Item.svelte";
    import LinkItem from "./Link-Item.svelte";
    import TextItem from "./Text-Item.svelte";
    import * as fetcher from "../fetcher";
    import Header from "../Global/Header.svelte";
    let items = [];
    let ids = [];
    ids = fetcher.get_items_ids();
    items = fetcher.get_items_by_ids(ids);
</script>

<body>
    <Header type="storage" />
    
    <div class="storage">
        {#each items as x}
            {#if x.type=="link"}
                <LinkItem title="{ x.title }" content="{ x.content }" tags={x.tags}/>
            {:else if x.type=="text"}
                <TextItem title="{ x.title }" content="{ x.content }" tags={x.tags}/>
            {:else if x.type=="file"}
                <script lang="ts"></script>
                <FileItem title="{ x.title }" content="{ x.content }" tags={x.tags}/>
            {/if}
        {/each}
    </div>
</body>

<style>
    

    body {
        display: flex;
        align-content: start;
        flex-direction: column;
    }

    /* h1 {
        margin: 0px;
        display: flex;
        width: 480px;
        height: inherit;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        color: #000;
        text-align: center;
        font-family: Inter;
        line-height: normal;
        font-size: min(9vw, 50px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    } */


    .storage {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex: 90;
        width: 100vw;
        flex-shrink: 0;
        min-width: 450px;
        justify-content: space-evenly;
        align-items:center;

        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FFF;
    }
</style>