const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); /* Menampilkan atau menyembunyikan menu */
            toggle.classList.toggle('bx-x'); /* Menambahkan kelas "bx-x" untuk animasi hamburger ke X */
        });
    }
}

showMenu('header-toggle', 'nav-menu');

// Mengatur klik pada link navigasi
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Menangani dropdown klik untuk buka/tutup
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('.dropdown__link')
    dropdownLink.addEventListener('click', (e) => {
        e.preventDefault() // Mencegah link untuk membuka halaman
        dropdown.classList.toggle('show') // Toggle kelas "show" untuk buka/tutup dropdown
    })
})