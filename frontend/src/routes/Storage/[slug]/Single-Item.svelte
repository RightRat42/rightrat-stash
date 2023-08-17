<script lang="ts">
    import authStore from '$stores/authStore';

    export let type: string = "text";
    export let content: string = "Sample text";

</script>

<div class="displayItem">
    {#if !$authStore.isLoggedIn}
    <p><a href="/Login">Log in</a></p>
    {:else}
    {#if type == "link"}
        <a href="https://{ content }" target="_blank">
            <p>{ content }</p>
        </a>
    {:else if type == "text"}
        <p>{ content }</p>
    {:else if type == "file"}
        <div class="imgCont">
            <img src="data:image/jpg;base64,{content}" alt="img">
        </div>
    {:else}
        <p>error</p>
    {/if}
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

    .imgCont {
        display: contents;
        max-height: 75vh;
        max-width: 100%;
    }

    img {
        display: block;
        height: auto;
        width: auto;
        max-height: 75vh;
        border: solid 1px #000;
    }
</style>