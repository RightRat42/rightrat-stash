<script lang="ts">
    import { base } from "$app/paths";
</script>

<body>
    <div class="mainblock">
        <div class="title">
            <h1>RightRat's Stash</h1>
        </div>
        <div class="center">
            <h2>...who was dumb enough to name it like that..?</h2>
            <p>
                For a long time, I, RightRat, have dreamt about little something that could allow a simple tool for sharing data from my PC to phone and vice versa. Also, I wanted for it to be seen, because for the most part, it would be memos, funny quotes etc.
                <br>So, I, being a dimwit, decided to combine those two concepts and create this "little something" in the least comfortable way of doing so.
            </p>
            
            <a href="{ base }/Storage"> 
                <p class="rat">ᘛ⁐̤ᕐᐷ</p>
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

    .mainblock {
        padding: 10px;
        display: contents;

        min-width: 250px;
        min-height: 100vh;
        justify-content: space-evenly;
        align-items:center;

        border-radius: 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FEE;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        min-width: max(100vw, 250px);
        min-height: 15vh;



        border-radius: 25px 25px 0px 0px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FEE;
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
    
    p {
        color: #600;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 10px), 25px);
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
        min-width: max(100vw, 250px);
        min-height: 85vh;

        border-radius: 0px 0px 25px 25px;
        border: 2px solid #000;
        box-sizing: border-box;
        background: #FFF;
    }

    .rat {
        color: #F00;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 20px), 40px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;

    }

    a {
        text-decoration-line: none;
        color: #600;
        text-align: center;
        font-family: Inter;
        font-size: min(max(4vw, 10px), 25px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    :global(body) {
        margin: 0;
        padding: 10;
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