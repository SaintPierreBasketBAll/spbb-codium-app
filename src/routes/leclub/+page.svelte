

<!-- <h1>Le Club</h1>
<style>
    h1{
        position: relative;
        height: 300px;
        font-size: xx-large;
        top: 120px;
        text-align: center;
        color: orangered;
    }
</style>

 -->
 <script>
  let isMenuOpened = $state(false);

  // Fonction pour basculer l'état du menu
  function toggleMenu() {
    isMenuOpened = !isMenuOpened;
  }
</script>
<h1>Le Club</h1>
<nav>
  <!-- Menu -->
  <div class="menu" class:opened={isMenuOpened}>
    <ul>
      <li>Work</li>
      <li>Services</li>
      <li>Articles</li>
      <li>Careers</li>
      <li>About</li>
    </ul>
  </div>

  <!-- Logo -->
  <h1 class="logo">Logo</h1>

  <!-- Menu Button -->
  <button class="menu-button" onclick={toggleMenu}>
    <span>Menu</span>
  </button>
</nav>

<style>
    h1{
        position: relative;
        height: 300px;
        font-size: xx-large;
        top: 120px;
        text-align: center;
        color: orangered;
    }
/* starting state */
.menu {
  background: linear-gradient(120deg, aqua, violet);
  transform: translateX(105%);
  transition: transform 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

.menu.opened {
  transform: translateX(0);
}

/****** Additional styling below ******/

body {
  font-family: Raleway, sans-serif;
  font-size: 30px;
  letter-spacing: 0.08em;
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 25px;
  padding-bottom: 25px;
  position: relative;
}

li::before {
  background: aqua;
  bottom: 0;
  content: '';
  height: 1px;
  left: 50%;
  margin-left: -15px;
  position: absolute;
  width: 30px;
}

.logo {
  border: 2px solid black;
  font-family: Arial;
  font-size: 14px;
  margin: 0;
  padding: 0.5em 1em;
  text-transform: uppercase;
}

.menu {
  margin: 10px;
  overflow: auto;
  padding: 80px 50px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  height: 15px;
  outline: none;
  padding: 2px 0;
  position: relative;
  width: 19px;
}

.menu-button:before,
.menu-button:after {
  background: black;
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

.menu-button:before {
  top: 0;
}

.menu-button:after {
  bottom: 0;
}

.menu-button span {
  border-top: 2px solid black;
  display: block;
  height: 0;
  margin: 4px 0;
  overflow: hidden;
}

.menu.opened ~ .menu-button span {
  opacity: 0;
}

.menu.opened ~ .menu-button:before {
  top: 6.5px;
  transform: rotate(45deg);
}

.menu.opened ~ .menu-button:after {
  bottom: 6.5px;
  transform: rotate(-45deg);
}
</style>