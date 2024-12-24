document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector(".input")
  input.addEventListener("keydown", handleInput)

  function handleInput(e) {
    // We only want the function to run if the key pressed is the Enter key
    if (e.key !== 'Enter') return;

    // Run the formatSearch function on the current value of the input
    const query = formatSearch(input.value)

    // Redirect to         [   uv prefix    ] + [   encoded search query   ]
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query)
  }
})

function formatSearch(query) {
  try{
    const match=message.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w\-]+)/);
    if(match)return `https://www.youtube-nocookie.com/embed/${match[1]}`;
  }catch(e){}
}
