// Fungsi untuk menghasilkan warna acak
        // function generateRandomColor() {
        // var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // return randomColor;
        // }
        // // Mengubah warna latar belakang halaman secara acak
        // function changeBackgroundColor() {
        // document.body.style.backgroundColor = generateRandomColor();
        // }
        // // Memanggil fungsi changeBackgroundColor saat halaman dimuat ulang
        // window.onload = function() {
        // changeBackgroundColor();
        // };

        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Menampilkan pesan sambutan
        function showWelcomeMessage() {
        alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
        }
        window.onload = function() {
        changeBackgroundColor();
        showWelcomeMessage(); // Panggil fungsi pesan sambutan
        displayProjects();
        displayExperience();
        };