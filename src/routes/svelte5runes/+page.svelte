<script>
    import Compter from "../../lib/components/Compter.svelte"
    import {createTodos} from "../../lib/runes/todos.svelte"
    const todos = createTodos()
</script>

<main class="container"> style="margin-block:2rem"
    <Compter title="Compteur"/>
    <ul aria-busy={todos.isFetching}>
        {#each todos.todos as todo}
           <li>{todo.title}</li> 
        {/each}
    </ul>
    <button onclick={()=>todos.addTodo("Demo")}>Ajouter</button>
</main>


