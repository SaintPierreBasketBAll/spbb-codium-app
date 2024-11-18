<script>
    export let title;
    export let description;
    export let date;
  </script>
  
  <div class="news-card border p-4 rounded shadow hover:shadow-lg">
    <h3 class="text-xl font-bold">{title}</h3>
    <p class="text-gray-600 text-sm mb-2">{date}</p>
    <p class="text-gray-800">{description}</p>
  </div>
  