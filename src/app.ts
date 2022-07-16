const compteur: HTMLElement | null = document.getElementById('compteur')
let i = 0

const increment = (e: Event) => {
    e.preventDefault()
    i++
    const span = compteur?.querySelector('span')
    if (span)
        span.innerHTML = i.toString()
}

compteur?.addEventListener('click', increment)
