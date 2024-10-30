<script>
    let {title} = $props();
    let count = $state(0);
    let double = $derived(count*2)

    $effect(()=>{
        document.title= 'Compteur : ${count}';
    })
    const increment =()=>{
        count += 1
    }
</script>

<main class="container" style="margin-block:2rem">
    <h1>{title}</h1>
    <p>Compteur : {count}</p>
    <p>Double: {double}</p>
    
    <button onclick={increment}>Incrementer</button>
</main>

<style>
    button{
        border: 3px solid orangered;
        padding: 5px 14px;
        background-color: bisque;
    }
</style>