<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores"
    import Header from "../../../Global/Header.svelte";
    import { saveChanges, getItemById } from "../../../prosloika";
    import { docs } from "$lib/firebase";
    
    export let itemID: string = $page.params.slug;
    export let title: string = "Item title";
    export let type: string = "text";
    export let content: string = "Sample text";

    let parentUrl: string = $page.url.origin + base + "/Storage/" + itemID + "/";
    console.log(parentUrl);

    const input = document.querySelector("input")

    docs?.forEach((x: any) => {
        if (x.id == itemID){
            title = x.data.title;
            type = x.data.type;
            content = x.data.content;
        }
    })
    let typeNum: number = (type == "link") ? 2 : 1

    function updateField() {
        if (typeNum == 1) {
            type = "text"
            content = "https://www.example.com"
        }
        else {
            type = "link"
            content = "Sample Text"
        }
    }
    
    function checkInput () {
        let valid = true;
        title = title.trim();
        content = content.trim();
        if (/<\/?[a-z][\s\S]*>/i.test(title) ||
            /<\/?[a-z][\s\S]*>/i.test(content)) {
                valid = false;
            alert("You cannot submit HTML!")
        }
        else if (title == ""){
            valid = false;
            alert("Title field cannot be empty!")
        }
        else if (content == ""){
            valid = false;
            alert("Content field cannot be empty!")
        }
        else if (typeNum == 2){
            if (!(/(https?:\/\/[^\s]+)/g.test(content))) {
                valid = false;
                alert("Link is not valid!")
            }
        }
        if (valid) {
            saveAll();
        }
    }

    function saveAll () {
        saveChanges(title, type, content, itemID);
        window.location.replace(parentUrl)
    }
    
</script>

<body>
    <Header name="Edit item"/>
    <div class="editTitle">
        <p class="itemTitlePrompt">Item name: </p>
        <input type="text" name="title" class="titleInput" size="40" bind:value={ title }>
    </div>
    <div class="editType">
        <input type="radio" name="type" class="typeInput" value=1 bind:group={ typeNum } on:click={ updateField } checked>Text<br>
        <input type="radio" name="type" class="typeInput" value=2 bind:group={ typeNum } on:click={ updateField } >Link<br>

    </div>
    <div class="editItem">
        {#if typeNum == 2}
            <input type="url" name="url" id="urlInput" class="urlInput" placeholder="https://www.example.com" pattern="https://.*" bind:value={content}>
        {:else if typeNum == 1}
            <textarea id="itemContent" name="text" bind:value={content}></textarea>
        {/if}
    </div>
    <footer>
        <button class="click" on:click={ checkInput }>
            <p>save</p>
        </button>
        <a class="click" href="{ parentUrl }">
            discard
        </a>
    </footer>
</body>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        background-color: #888;
    }

    .editItem {
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

    textarea {
        display: flex;
        position: relative;
        width: 90vw;
        min-height: 15vh;
        max-height: 80vh;
        max-width: 95vw;
        min-width: 15vw;

        font-size: 30px;
        overflow: scroll;
        scrollbar-width: none;
    }

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
        display: flex;
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
        font-size: 15px;
        color: #000;
    }
    
    p {
        display: relative;
        margin: 0;
        position: relative;
        
        text-align: center;
        user-select: none;
    }

    .editTitle {
        display: flex;
        flex-direction: row;
        justify-content: start;
    }

    .itemTitlePrompt {
        margin-right: 10px;
    }

    .click:hover {
        filter: brightness(95%);
        cursor: pointer;
    }
</style>