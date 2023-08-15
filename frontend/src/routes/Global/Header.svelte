<script lang="ts">
    export let type: string = "default";
    export let name: string = "default"
</script>

<body>
    
    <header>
        {#if name != "default"}
        <h1>{ name }</h1>
        
        {:else}
        <h1>RightRat's Stash</h1>
        {/if}
    </header>
    {#if type == "storage"}
    <div class="addDiv">
        <button class="add">
            + Add
        </button>
</div>
{/if}
</body>

<style>

    body {
        max-height: 15vh;
    }
    header {
        margin: 0;
        min-width: 250px;
        display: flex;
        flex: 7;
        top: 0;
        width: 100vw;
        flex-shrink: 0;
        align-content: start;
        justify-content: center;

        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #EEE;
        box-shadow: 0px 25px 25px 0px rgba(33, 33, 33, 0.25);
    }

    h1 {
        margin: 0px;
        display: flex;
        width: max-content;
        min-width: 250px;
        height: inherit;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: max(3vw, 20px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .addDiv {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        flex-shrink: 0;
        width: 100vw;
        flex-shrink: 0;
        min-width: 250px;
        border-radius: 25px;
        border: 1px  solid #000;
        box-sizing: border-box;
        background: #DDD;
        
    }

    .add {
        display: inline-block;
        margin: 0;
        padding: 0;
        width: 10vw;
        overflow: hidden;
        white-space: nowrap;
        font-size: min(3vw, 20px);
    }
</style>