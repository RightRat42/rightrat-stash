<script lang="ts">
    import { base } from "$app/paths";
</script>

<body class="pageContainer">
    <div class="title">
        <h1>RightRat's Stash</h1>
    </div>
    <div class="center">
        <h2>This is the homepage of my app. </h2>
        
        <div class="links">
            <a href="{ base }/Storage"> 
                <!-- <p class="rat">ᘛ⁐̤ᕐᐷ</p> -->
                Storage
            </a>
            <a href="{ base }/About">
                About
            </a>
        </div>
    </div>
</body>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        background-color: #888;
    }


    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        min-width: 250px;
        width: 100%;
        border-radius: 25px 25px 0px 0px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FEE;
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 0px;
        min-width: max(100vw, 250px);
    }

    h1 {
        color: red;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 20px), 40px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    h2 {
        color: #B00;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 15px), 30px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;

    }
    
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-between;
        padding: 20px;
        min-width: 250px;
        width: 100%;
        flex: 1;
        border-radius: 0px 0px 25px 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FFF;
    }

    a {
        text-decoration-line: none;
        color: #600;
        background-color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 10px), 25px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border: 2px solid #000;
        border-radius: 25px;
        padding: 10px;
        transition: 0.2s;
    }
    a:hover {
        filter: brightness(80%);
        cursor: pointer;
    }
    
    :global(body) {
        margin: 0;
        padding: 10;
        background-color: #FFF;
    }
    * ::webkit-scrollbar {
    display: none;
}

.pageContainer {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

* {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

</style>