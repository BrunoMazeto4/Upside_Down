window.addEventListener("load", () => {
  const audio = document.getElementById("music")
  const theme = document.body.classList[0]
  const music =
    theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg"

  audio.play()
  audio.volume = 0.2
  audio.src = `assets/musics/${music}`
})

function switchTheme() {
  document.body.classList.toggle("dark-theme")
  document.body.classList.toggle("light-theme")
}
