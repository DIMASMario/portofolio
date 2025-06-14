document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Periksa preferensi pengguna dari localStorage atau sistem operasi
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Terapkan tema saat halaman dimuat
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ganti ikon menjadi matahari
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ganti ikon menjadi bulan
    }

    // Event listener untuk tombol toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // Toggle class 'dark-mode' pada body

        // Simpan preferensi pengguna di localStorage dan ubah ikon
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ganti ikon menjadi matahari
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ganti ikon menjadi bulan
        }
    });

    // Opsional: Smooth scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Opsional: Validasi form kontak (contoh sederhana)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form default

            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            if (name && email && message) {
                alert('Pesan Anda berhasil dikirim! (Ini hanya simulasi)');
                this.reset(); // Mengosongkan form setelah pengiriman
            } else {
                alert('Mohon lengkapi semua kolom form.');
            }
        });
    }
});