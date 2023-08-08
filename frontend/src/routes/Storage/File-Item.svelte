<script lang="ts">
    import Tag from "./Tag.svelte";
    export let title:string = "File title...";
    export let content:string = "00000000-0000-0000-0000-000000000000";
    export let tags:string[] = ["nice", "picture", "testpic"];
    export let fileLink = "%sveltekit.assets%/cat.jpg"
        
</script>

<div class="item">
    <div class="item-header">
        <h3 class="file-title">{ title }</h3>
    </div>
    <div class="item-body">
        <a href="{ fileLink }" target="_blank">
            <p class="file-link" >{ content }</p>
        </a>
    </div>
    <div class="item-footer">
        {#each tags as x}
            <Tag tagname="{x}"/>
        {/each}
    </div>
</div>

<style>
    .item {
        display: grid;
        width: 25vw;
        min-width: 250px;
        height: 150px;
        flex-shrink: 0;
        
        border-radius: 25px;
        border: 1px solid #A00;
        background: #FFF;
    }

    .item-header {
        display: flex;
        position: relative;
        justify-content: center;
        
        width: inherit;
        min-width: inherit;
        height: 50px;
        flex-shrink: 0;

        border-radius: 25px 25px 0px 0px;
        background: #FBB;
    }

    h3 {
        position: relative;
        margin: 0px;

        display: contents;
        width: inherit;
        height: 50px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        overflow: hidden;
        color: #000;
        text-overflow: ellipsis;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;        
    }

    .file-link {
        position: relative;
        margin: 0px;
        margin-left: max(calc(100vw/40), 25px);
        margin-right: max(calc(100vw/40), 25px);
        

        display: flex;
        width: calc(800vw/40);
        min-width: 200px;
        height: 50px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        overflow: hidden;
        white-space: nowrap;
        color: #844242;
        text-overflow: ellipsis;
        font-family: Inter;
        font-size: 20px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        text-align: left;
        
    }
    .item-body {
        height: 50px;
        width: inherit;
        min-width: inherit;
        margin: 0;
    }

    .item-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: inherit;
        min-width: inherit;
        height: 50px;
        flex-shrink: 0;
        overflow: scroll;
        scrollbar-width: none;

        border-radius: 0px 0px 25px 25px;
        background: #844242;
    }
</style>