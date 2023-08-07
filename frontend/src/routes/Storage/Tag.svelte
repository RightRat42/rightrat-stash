<script lang="ts">
    export let tagname: string = "test"
</script>

<div class="frame">
    <p class="tag-text">#{tagname}</p>
</div>

<style>
    .frame {
        display: inline;
        margin: 10px;
        width: min-content;
        height: 30px;
        flex-shrink: 0;

        border-radius: 35px;
        background: #FFF;
    }

    .tag-text {
        margin: 10px;
        display: inline;
        width: auto;
        height: 30px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        

        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }
</style>