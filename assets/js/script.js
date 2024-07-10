document.addEventListener('DOMContentLoaded', main);

function main() {
    const container = document.querySelector('.container');
    creation(container);
}

var buled, logo, lampu, lampu2, grass, musliman, menuUtama, logoAtas, ulMenu, liMenu;

function creation(container) {
    buled = buatElement('div', 'buled');
    buled.style.width = '100px';
    buled.style.height = '100px';
    buled.style.margin = 'auto';
    buled.style.borderRadius = '50%';
    buled.style.display = 'block';
    buled.style.cursor = 'pointer';
    buled.style.position = 'relative';

    // Element opener
    logo = buatElement('img', 'logoDepan');
    logo.src = './assets/img/logo_huda.jpeg';
    logo.style.width = '100px';
    logo.style.height = '100px';
    simpanElements(buled, logo);

    p = buatElement('p');
    p.textContent = 'Tap to play!';
    p.style.textAlign = 'center';
    simpanElements(buled, p);

    // lampu kiri
    lampu = buatElement('img', 'lampu');
    lampu.src = './assets/img/lampu.png';
    lampu.style.width = '200px';
    lampu.style.height = '200px';
    lampu.style.position = 'absolute';
    lampu.style.left = '0';
    lampu.style.top = '0';
    lampu.style.opacity = '0';
    simpanElements(buled, lampu);

    // lampu2
    lampu2 = buatElement('img', 'lampu2');
    lampu2.src = './assets/img/lampu.png';
    lampu2.style.width = '150px';
    lampu2.style.height = '150px';
    lampu2.style.position = 'absolute';
    lampu2.style.right = '0';
    lampu2.style.top = '0';
    lampu2.style.opacity = '0';
    simpanElements(buled, lampu2);

    // Rumput
    grass = buatElement('img', 'grass');
    grass.src = './assets/img/grass.png';
    grass.style.width = '100vw';
    grass.style.height = '200px';
    grass.style.position = 'absolute';
    grass.style.bottom = '0';
    grass.style.opacity = '0';
    // grass.style.scale = '0';
    simpanElements(buled, grass);

    // Musliman
    musliman = buatElement('img', 'musliman');
    musliman.src = './assets/img/family-muslim.png';
    musliman.style.width = '10rem';
    musliman.style.height = 'auto';
    musliman.style.position = 'absolute';
    musliman.style.bottom = '0';
    musliman.style.opacity = '0';
    simpanElements(buled, musliman);

    // menu utama
    menuUtama = buatElement('div', 'menu-utama');
    menuUtama.style.display = 'flex';
    menuUtama.style.flexDirection = 'column';
    menuUtama.style.justifyContent = 'space-evenly';
    menuUtama.style.width = '100%';
    menuUtama.style.height = '100%';
    menuUtama.style.position = 'relative';
    menuUtama.style.margin = 'auto';
    menuUtama.style.opacity = 0;

    // Logo Atas
    logoAtas = buatElement('img', 'logoAtas');
    logoAtas.src = './assets/img/logo_huda.png';
    logoAtas.style.width = '200px';
    logoAtas.style.height = '200px';
    logoAtas.style.margin = 'auto';
    simpanElements(menuUtama, logoAtas);

    ulMenu = buatElement('ul', 'list-menu');
    ulMenu.style.width = 'auto';
    ulMenu.style.height = 'auto';
    ulMenu.style.margin = 'auto';
    ulMenu.style.opacity = '0';
    simpanElements(menuUtama, ulMenu);

    const dataMenu = [
        {
            text: 'Play',
            klas: 'play',
            icon: '<i class="fas fa-play"></i>',
            buka: () => playGame(menuUtama)
        },
        {
            text: 'About',
            klas: 'about',
            icon: '<i class="fas fa-info-circle"></i>',
            buka: function() {}
        }, 
        {
            text: 'Exit',
            klas: 'exit',
            icon: '<i class="fas fa-sign-out-alt"></i>',
            buka: function() {}
        }
    ];

    dataMenu.forEach(menu => {
        liMenu = buatElement('li', menu.klas);
        const menuStyle = liMenu.style;
        menuStyle.display = 'block';
        menuStyle.width = '20rem';
        menuStyle.textAlign = 'center';
        menuStyle.background = 'var(--koneng)';
        menuStyle.padding = '0.7rem 0';
        liMenu.innerHTML = menu.icon + ' ' + menu.text;
        menuStyle.fontSize = '1.5rem';
        menuStyle.fontWeight = 'bold';
        menuStyle.borderRadius = '1rem';
        menuStyle.marginBottom  = '1rem';
        menuStyle.opacity = 1;
        menuStyle.zIndex = 2;
        simpanElements(ulMenu, liMenu);
        liMenu.addEventListener('click', menu.buka);
    });

    simpanElements(buled, menuUtama);

    // Animasi Nya
    buled.addEventListener('click', function handleClick() {
        p.remove();
        anime({
            targets: buled,
            scale: 20,
            background: '#365E32',
            easing: 'easeOutQuad',
            duration: 1000,
            complete: function() {
                buled.style.width = '100vw';
                buled.style.height = '100vh';
                buled.style.borderRadius = '0%';
                buled.style.position = 'absolute';
                buled.style.top = '0';
                buled.style.left = '0';
                buled.style.transform = 'none';
                logo.remove();
            }
        });
        anime({
            targets: logo,
            opacity: 0,
        });

        anime({
            targets: lampu,
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: 1500
        });

        anime({
            targets: lampu2,
            opacity: [0, 1],
            translateX: [20, 0],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: 1000
        });

        anime({
            targets: grass,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: 'easeOutQuad',
            delay: 1000,
            scale: 1
        });

        anime({
            targets: musliman,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1500,
            easing: 'easeOutElastic',
            delay: 1000
        });

        anime({
            targets: menuUtama,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1500,
            easing: 'easeOutElastic',
            delay: 1000
        });
        anime({
            targets: logoAtas,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1300,
            easing: 'easeOutElastic',
            delay: 1000
        });

        anime({
            targets: '.list-menu',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1300,
            easing: 'easeOutElastic',
            delay: 1300
        });

        buled.removeEventListener('click', handleClick);
    });

    simpanElements(container, buled);
}

function playGame(menuUtama) {
    fetch('./assets/include/soal.json')
        .then(response => response.json())
        .then(data => {
            // Anda bisa menggunakan data ini untuk menampilkan pertanyaan dan jawaban
            tampilkanPertanyaan(menuUtama, data);
        })
        .catch(error => {
            console.error('Error fetching the questions:', error);
        });

    anime({
        targets: ulMenu,
        opacity: [1, 0],
    });

    anime({
        targets: logoAtas,
        scale: [1, 0.7],
        duration: 1000,
        easing: 'easeOutElastic',
    });
}

function tampilkanPertanyaan(menuUtama, data) {
    // Hapus konten sebelumnya
    menuUtama.innerHTML = '';
    simpanElements(menuUtama, logoAtas);
    // Ambil pertanyaan pertama sebagai contoh
    const acak = Math.floor(Math.random() * data.length);
    const pertanyaan = data[acak];
    
    const pertanyaanEl = buatElement('div', 'pertanyaan');
    pertanyaanEl.style.margin = 'auto';
    pertanyaanEl.style.width = '100%';
    pertanyaanEl.style.textAlign = 'center';
    pertanyaanEl.style.fontSize = '2rem';
    pertanyaanEl.style.fontWeight = 'bold';
    pertanyaanEl.style.marginBottom = '1rem';
    pertanyaanEl.style.marginTop = '1rem';
    pertanyaanEl.style.color = 'white';
    pertanyaanEl.style.textShadow = '0 0 5px black';
    pertanyaanEl.style.display = 'absolute';

    pertanyaanEl.textContent = pertanyaan.pertanyaan;
    simpanElements(menuUtama, pertanyaanEl);

    const jawabanEl = buatElement('ul', 'jawaban');
    jawabanEl.style.margin = 'auto';
    jawabanEl.style.width = '70%';
    jawabanEl.style.listStyleType = 'none';
    jawabanEl.style.padding = '0';
    jawabanEl.style.marginBottom = '10rem';
    jawabanEl.style.textAlign = 'center';
    jawabanEl.style.fontSize = '1rem';
    jawabanEl.style.fontWeight = 'bold';
    jawabanEl.style.color = 'white';
    jawabanEl.style.textShadow = '0 0 5px black';

    // Acak jawaban sebelum ditampilkan
    pertanyaan.jawaban = acakArray(pertanyaan.jawaban);

    pertanyaan.jawaban.forEach(jawaban => {
        const btnJawaban = buatElement('li', 'btn-jawaban');
        btnJawaban.style.display = 'block';
        btnJawaban.style.background = 'var(--oren)';
        btnJawaban.style.padding = '1rem 1.2rem';
        btnJawaban.style.margin = '0.5rem 0';
        btnJawaban.style.borderRadius = '0.5rem';
        btnJawaban.textContent = jawaban;
        btnJawaban.addEventListener('mouseover', function() {
            anime({
                targets: btnJawaban,
                scale: [1, 1.05],
                duration: 500,
                easing: 'easeOutQuad'
            });
        });
        btnJawaban.addEventListener('mouseout', function() {
            anime({
                targets: btnJawaban,
                scale: [1.05, 1],
                duration: 500,
                easing: 'easeOutQuad'
            });
        });
        btnJawaban.addEventListener('click', () => {
            if(jawaban == pertanyaan.jawaban_benar) {
                Swal.fire({
                    title: "Jawaban Benar!",
                    text: "Kamu menjawab pertanyaan dengan benar!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Jawaban Salah!",
                    text: "Kamu menjawab pertanyaan dengan salah!",
                    icon: "error"
                });
            }
            // alert(jawaban == pertanyaan.jawaban_benar ? 'Jawaban Benar!' : 'Jawaban Salah!');
            playGame(menuUtama);
        });
        
        simpanElements(jawabanEl, btnJawaban);
    });
    simpanElements(menuUtama, jawabanEl);
    // playGame(menuUtama)
}

function buatElement(element, kelas) {
    const el = document.createElement(element);
    if (kelas) {
        el.classList.add(kelas);
    }
    return el;
}

function simpanElements(parent, child) {
    return parent.appendChild(child);
}

function acakArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
