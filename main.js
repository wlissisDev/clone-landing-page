function createModal() {
  const div = document.createElement("div");
  div.innerHTML = `
    <button>=</button>
    <dialog>
        <div class="nav-items">
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
        </div>
    </dialog>`;

    console.log(div);
    
}

createModal()
