<script>
    import {createCounter} from "../runes/counter.svelte.js"
   
    let {title} = $props();
    const counter = createCounter(3)

    
</script>

<div class="container">
   <p>Bonjour les amis</p>
    <h1>{title}</h1>
    <p>Compteur : {counter.count}</p>
    <p>Double: {counter.double}</p> 
    test test test
     <button onclick={counter.increment}>Incrementer</button> 
</div>

<style>
     .container{
        color: black;
        margin-block: 2rem;
        width: 100%;
        height: 500px;
        border: 3px solide red;
    }
    button{
        border: 3px solid orangered;
        padding: 5px 14px;
        background-color: bisque;
        color: black;
    }
    p{
        color: black;
    } 

</style>