<script>
    export let text = "";
  </script>
  
  <h1 class="title">{text}</h1>
  
  <style>
 
    .title {
  font-family: Arial, sans-serif;    
  font-size: 2.5rem;
  background: linear-gradient(90deg,orange, rgb(252, 23, 23));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 /*  background-clip: text; */ /* Pour compatibilité étendue */
  text-align: center;
  /* margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 2rem 0rem; */

}
  </style>