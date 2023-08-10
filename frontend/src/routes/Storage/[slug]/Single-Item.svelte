<script lang="ts">
    export let type: string = "text";
    export let content: string = "Sample text";

</script>

<div class="displayItem">
    {#if type == "link"}
        <a href="https://{ content }" target="_blank">
            <p>{ content }</p>
        </a>
    {/if}
</div>

<style>
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
</style>