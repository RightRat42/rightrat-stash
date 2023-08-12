<script lang="ts">
    import { base } from "$app/paths";
</script>

<h1>Hi!!</h1>
<p>Visit <a href="{ base }/Storage">Storage</a></p>
<p>Visit <a href="{ base }/">Home</a></p>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #FFF;
    }
    * ::webkit-scrollbar {
    display: none;
}

* {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

</style>
