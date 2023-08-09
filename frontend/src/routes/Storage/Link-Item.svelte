<script lang="ts">
    import Tag from "./Tag.svelte";
    export let title: string = "Link title...";
    export let content: string = "g.co";
    export let tags: string[] = ["cool", "test", "test4"];
    export let id: string = "0";
</script>

<div class="item">
    <div class="item-header">
        <a href="/Storage/{ id }" target="_blank">
            <h3 class="link-title">{ title }</h3>
        </a>
    </div>
    <div class="item-body">
        <a href="https://{ content }" target="_blank">
            <p class="link-url" >{ content }</p>
        </a>
    </div>
    <div class="item-footer">
        {#each tags as x}
            <Tag tagname="{x}"/>
        {/each}
    </div>
</div>

<style>
    a {
        width: inherit;
        height: inherit;
        min-width: inherit;
        min-height: inherit;
        text-align: center;
    }
    .item {
        min-width: 250px;
        width: 25vw;
        height: 150px;
        flex-shrink: 0;
        
        border-radius: 25px;
        border: 1px solid #00A;
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
        background: #BBF;
    }

    .link-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        display: contents;
        width: inherit;
        height: 50px;

        white-space: nowrap;
        overflow: hidden;
        color: #000;
        text-overflow: ellipsis;
        font-family: Inter;
        font-size: max(min(3vw, 25px), 20px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;        
    }

    .link-url {
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
        color: #424284;
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
        min-width: 250px;
        height: 50px;
        flex-shrink: 0;
        overflow: scroll;
        scrollbar-width: none;

        border-radius: 0px 0px 25px 25px;
        background: #424284;
    }
</style>