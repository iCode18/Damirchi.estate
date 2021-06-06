const ps = document.querySelectorAll('.collaps')
const observer = new ResizeObserver((entries) => {
  for (let entry of entries) {
    entry.target.classList[
      entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove'
    ]('limited')
  }
})

ps.forEach((p) => {
  observer.observe(p)
})
