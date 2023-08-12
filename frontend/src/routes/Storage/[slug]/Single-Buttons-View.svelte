<script lang="ts">
    import { base } from "$app/paths";
    import { onMount } from 'svelte';

export let id = "0"

</script>

<footer>
    <a class="click" href="{base}/Storage/{ id }/edit">
        <p>edit</p>
    </a>
    <button class="click">
        delete
    </button>
</footer>

<style>
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
        color: #000;
    }

    p {
        display: relative;
        margin: 0;
        position: relative;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        text-align: center;
        user-select: none;
    }

    .click:hover {
        filter: brightness(95%);
        cursor: pointer;
    }
</style>
