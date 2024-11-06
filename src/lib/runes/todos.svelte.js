import { onMount } from "svelte"


export function createTodos(){
    let todos =$state([])
    let isFetching= $state(true)
    onMount(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response)=>response.json())
        .then((value) => (todos=value))
        .finally(()=>(isFetching=false))
    })
    return {
        get todos(){
            return todos
        },
        get isFetching(){
            return isFetching
        },
        addTodo(title){
            todos.push({
                title,
            })
        }
    }
}