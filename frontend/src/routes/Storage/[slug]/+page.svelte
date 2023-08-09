<script lang="ts">
    import { page } from "$app/stores"
    import data from "../../../../../backend/src/assets/data.json"
    import files from "../../../../../backend/src/assets/files.json"
    import Header from "../../Global/Header.svelte";
    import SingleItem from "./Single-Item.svelte";

    export let fileID: string = $page.params.slug;
    export let title: string = "Item title";
    export let type: string = "text";
    export let content: string = "Sample text";

    
    for (let i = 0; i < data.items.length; ++i){
        if (data.items[i].id == fileID) {
            title = data.items[i].title
            type = data.items[i].type;
            content = data.items[i].content; 
        }
    }
</script>

<body>
    <Header name="{ title }"/>
    <SingleItem type="{ type }" fileID="{ fileID }" content="{ content }" />
</body>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>