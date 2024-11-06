

export function createCounter(n){
    let count = $state(0)
    let double = $derived(count*2)
    $effect(()=>{
        document.title = "Compteur : " + count 
    })
    const increment = () => {
        count += n
    }
    return {
        increment,
        get count(){
            return count
        },
        get double(){
            return double
        }
    }
}


