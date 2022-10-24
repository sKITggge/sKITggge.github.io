function onScroll(){
    const windowHeight = window.innerHeight
    const scrolled = window.scrollY
    const ratio = Math.min(scrolled / windowHeight, 1)
    const blur = ratio * 10
    const brightness = 100 - ratio * 60
    const background = document.getElementById('background')
    console.log(blur)
    background.style.filter = `blur(${blur}px) brightness(${brightness}%)`
}

document.addEventListener('scroll', onScroll)