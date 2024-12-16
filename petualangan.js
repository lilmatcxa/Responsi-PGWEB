// State Management dan Konfigurasi
const adventureState = {
    currentStage: 'start',
    userChoices: [],
    score: 0,
    scenarios: [
        {
            id: 'gempa',
            title: 'Skenario Gempa Bumi',
            questions: [
                {
                    text: 'Di mana posisi teraman saat gempa terjadi?',
                    options: [
                        { text: 'Di luar ruangan', correct: false, feedback: 'Salah! Di luar ruangan justru berisiko tertimpa reruntuhan.' },
                        { text: 'Di bawah meja kuat', correct: true, feedback: 'Benar! Berlindung di bawah meja kuat melindungi dari reruntuhan.' },
                        { text: 'Di dekat jendela', correct: false, feedback: 'Berbahaya! Pecahan kaca bisa melukai Anda.' }
                    ]
                },
                {
                    text: 'Berapa lama waktu ideal berlindung saat gempa?',
                    options: [
                        { text: '10 detik', correct: false, feedback: 'Terlalu singkat. Gempa bisa berlangsung lebih lama.' },
                        { text: 'Sampai guncangan berhenti', correct: true, feedback: 'Tepat! Tunggu hingga guncangan benar-benar berhenti.' },
                        { text: '1 menit', correct: false, feedback: 'Belum cukup! Pastikan guncangan sudah benar-benar berhenti.' }
                    ]
                },
                {
                    text: 'Apa yang harus dilakukan setelah gempa berhenti?',
                    options: [
                        { text: 'Langsung keluar bangunan', correct: false, feedback: 'Berbahaya! Periksa struktur bangunan sebelum keluar.' },
                        { text: 'Periksa kondisi sekitar dan evakuasi jika perlu', correct: true, feedback: 'Benar! Periksa dengan hati-hati dan pastikan jalur evakuasi aman.' },
                        { text: 'Menghubungi keluarga untuk memastikan keselamatan', correct: false, feedback: 'Penting, tapi pastikan situasi aman terlebih dahulu.' }
                    ]
                },
                {
                    text: 'Jika terperangkap setelah gempa, apa yang sebaiknya dilakukan?',
                    options: [
                        { text: 'Berteriak meminta bantuan', correct: true, feedback: 'Benar! Terikan dapat membantu orang menemukan lokasi Anda.' },
                        { text: 'Diam dan menunggu tanpa berusaha apa-apa', correct: false, feedback: 'Sebaiknya tetap mencoba mencari cara untuk bertahan hidup.' },
                        { text: 'Mencoba keluar meskipun sulit', correct: false, feedback: 'Hati-hati! Jangan terlalu terburu-buru, pastikan tidak membahayakan diri.' }
                    ]
                }
            ]
        },
        {
            id: 'banjir',
            title: 'Skenario Banjir',
            questions: [
                {
                    text: 'Apa yang pertama kali harus dilakukan saat banjir?',
                    options: [
                        { text: 'Simpan barang berharga', correct: false, feedback: 'Nyawa lebih berharga daripada barang!' },
                        { text: 'Evakuasi ke tempat tinggi', correct: true, feedback: 'Benar! Keselamatan adalah prioritas utama.' },
                        { text: 'Hubungi keluarga', correct: false, feedback: 'Penting, tapi keselamatan diri dulu.' }
                    ]
                },
                {
                    text: 'Apa tanda-tanda awal banjir datang?',
                    options: [
                        { text: 'Hujan deras terus-menerus', correct: true, feedback: 'Benar! Hujan deras dapat menyebabkan genangan air yang berbahaya.' },
                        { text: 'Angin kencang', correct: false, feedback: 'Angin bisa menjadi tanda cuaca buruk, tapi bukan tanda banjir.' },
                        { text: 'Suasana menjadi sangat panas', correct: false, feedback: 'Panas bukan indikator banjir.' }
                    ]
                },
                {
                    text: 'Apa yang harus dilakukan jika terjebak di dalam kendaraan saat banjir?',
                    options: [
                        { text: 'Keluar dari kendaraan dan mencari tempat tinggi', correct: true, feedback: 'Benar! Jangan menunggu terlalu lama, segera cari tempat aman.' },
                        { text: 'Tetap di dalam kendaraan dan menunggu bantuan', correct: false, feedback: 'Berbahaya! Banjir bisa datang lebih cepat.' },
                        { text: 'Menghubungi keluarga melalui ponsel', correct: false, feedback: 'Hubungi mereka, tapi pastikan Anda sudah di tempat yang aman.' }
                    ]
                },
                {
                    text: 'Bagaimana cara terbaik untuk melindungi rumah dari banjir?',
                    options: [
                        { text: 'Membuat saluran drainase', correct: true, feedback: 'Benar! Saluran drainase yang baik dapat mengurangi risiko banjir.' },
                        { text: 'Menutup jendela dan pintu rapat-rapat', correct: false, feedback: 'Menutup pintu tidak akan banyak membantu jika banjir besar.' },
                        { text: 'Menggunakan bahan-bahan tahan air di seluruh rumah', correct: false, feedback: 'Meskipun membantu, ini bukan solusi utama untuk mengatasi banjir besar.' }
                    ]
                }
            ]
        },
        {
            id: 'kebakaran',
            title: 'Skenario Kebakaran',
            questions: [
                {
                    text: 'Apa yang harus dilakukan jika terjadi kebakaran?',
                    options: [
                        { text: 'Memadamkan api dengan alat yang tersedia', correct: false, feedback: 'Tunggu sampai api kecil dan aman untuk dipadamkan, atau segera keluar.' },
                        { text: 'Evakuasi diri ke tempat aman', correct: true, feedback: 'Benar! Jangan menunggu, segera keluar dan cari tempat aman.' },
                        { text: 'Mencoba menyelamatkan barang-barang berharga', correct: false, feedback: 'Keselamatan diri lebih penting daripada barang!' }
                    ]
                },
                {
                    text: 'Bagaimana cara menggunakan alat pemadam api dengan benar?',
                    options: [
                        { text: 'Arahkan pemadam api langsung ke api dari jarak dekat', correct: false, feedback: 'Berbahaya! Arahkan dari jarak yang lebih aman.' },
                        { text: 'Arahkan pemadam api ke pangkal api dengan gerakan menyemprot', correct: true, feedback: 'Benar! Ini cara yang benar untuk menggunakan alat pemadam api.' },
                        { text: 'Menunggu api padam dengan sendirinya', correct: false, feedback: 'Jangan tunggu! Segera gunakan pemadam api atau evakuasi.' }
                    ]
                },
                {
                    text: 'Apa yang sebaiknya dilakukan saat terjebak di dalam gedung karena kebakaran?',
                    options: [
                        { text: 'Berjalan keluar melalui jalur evakuasi', correct: true, feedback: 'Benar! Selalu gunakan jalur evakuasi yang sudah ditentukan.' },
                        { text: 'Tetap diam dan menunggu bantuan', correct: false, feedback: 'Tidak disarankan! Segera cari jalan keluar.' },
                        { text: 'Mencari tempat perlindungan di lantai paling atas', correct: false, feedback: 'Jangan! Semakin tinggi, semakin berbahaya.' }
                    ]
                }
            ]
        },
        {
            id: 'longsor',
            title: 'Skenario Longsor',
            questions: [
                {
                    text: 'Apa yang sebaiknya dilakukan saat mendengar suara gemuruh dari atas bukit?',
                    options: [
                        { text: 'Meninggalkan area tersebut secepatnya', correct: true, feedback: 'Benar! Suara gemuruh bisa menjadi tanda longsor yang akan datang.' },
                        { text: 'Mencari tempat perlindungan di dekat pohon besar', correct: false, feedback: 'Pohon besar bisa menjadi bahaya saat longsor.' },
                        { text: 'Tetap tinggal di rumah dan menunggu bantuan', correct: false, feedback: 'Segera tinggalkan rumah untuk menghindari bahaya.' }
                    ]
                },
                {
                    text: 'Apa tanda-tanda longsor yang akan datang?',
                    options: [
                        { text: 'Tanah mulai retak dan pohon tumbang', correct: true, feedback: 'Benar! Retakan dan pohon tumbang bisa menjadi tanda longsor.' },
                        { text: 'Cuaca menjadi sangat cerah', correct: false, feedback: 'Cuaca cerah tidak berhubungan dengan longsor.' },
                        { text: 'Hujan deras terus-menerus', correct: false, feedback: 'Hujan bisa memperburuk keadaan, tapi tanda utama adalah retakan dan pohon tumbang.' }
                    ]
                }
            ]
        }
    ]
    ,
    currentScenario: null,
    currentQuestionIndex: 0
};

// Fungsi untuk memperbarui tampilan skor
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.textContent = `Skor: ${adventureState.score}`;
}

// Fungsi Animasi
function playSuccessAnimation() {
    const animationContainer = document.createElement('div');
    animationContainer.classList.add('success-animation');
    animationContainer.innerHTML = `
        <div class="confetti"></div>
        <div class="checkmark">✓</div>
    `;
    document.body.appendChild(animationContainer);

    setTimeout(() => {
        animationContainer.remove();
    }, 2000);
}

function playFailureAnimation() {
    const animationContainer = document.createElement('div');
    animationContainer.classList.add('failure-animation');
    animationContainer.innerHTML = `
        <div class="cross">✗</div>
    `;
    document.body.appendChild(animationContainer);

    setTimeout(() => {
        animationContainer.remove();
    }, 2000);
}

// Fungsi Splash Screen
function handleSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");
    setTimeout(() => {
        splashScreen.style.display = "none";
        document.getElementById("petualangan").classList.remove("hidden");
    }, 3000); // Splash screen tampil selama 3 detik
}

// Fungsi Memulai Skenario
function startScenario(scenarioId) {
    const scenario = adventureState.scenarios.find(s => s.id === scenarioId);
    if (scenario) {
        adventureState.currentScenario = scenario;
        adventureState.currentQuestionIndex = 0;
        adventureState.score = 0; // Reset skor setiap skenario baru dimulai
        updateScoreDisplay(); // Perbarui tampilan skor

        const storyline = document.getElementById('storyline');
        storyline.classList.remove('hidden');

        renderQuestion();
    }
}

// Render Pertanyaan
function renderQuestion() {
    const storyline = document.getElementById('storyline');
    const scenario = adventureState.currentScenario;
    const question = scenario.questions[adventureState.currentQuestionIndex];

    // Render pertanyaan dan tombol jawaban
    storyline.innerHTML = `
        <h2>${scenario.title}</h2>
        <p id="story-text">${question.text}</p>
        <div class="options question-options">
            ${question.options.map(option => `
                <button data-correct="${option.correct.toString()}" data-feedback="${option.feedback}">
                    ${option.text}
                </button>
            `).join('')}
        </div>
    `;

    // Tambahkan event listener untuk setiap tombol setelah dirender
    document.querySelectorAll('.question-options button').forEach(button => {
        button.addEventListener('click', handleQuestionResponse);
    });
}

// Penanganan Respon Pertanyaan
function handleQuestionResponse(e) {
    const button = e.target;
    const isCorrect = button.getAttribute('data-correct') === 'true';
    const feedback = button.getAttribute('data-feedback');
    const storyText = document.getElementById('story-text');

    if (isCorrect) {
        adventureState.score += 10;
        playSuccessAnimation();
    } else {
        playFailureAnimation();
    }

    updateScoreDisplay(); // Perbarui tampilan skor

    storyText.innerHTML = `
        ${feedback}<br>
        <strong>Skor Anda: ${adventureState.score}</strong>
    `;

    setTimeout(() => {
        adventureState.currentQuestionIndex++;
        if (adventureState.currentQuestionIndex < adventureState.currentScenario.questions.length) {
            renderQuestion();
        } else {
            endScenario();
        }
    }, 2000);
}

// Akhiri Skenario
function endScenario() {
    const storyline = document.getElementById('storyline');
    storyline.innerHTML = `
        <h2>Misi Selesai!</h2>
        <p>Anda telah menyelesaikan skenario dengan skor: ${adventureState.score}</p>
        <button id="restart-btn">Mulai Skenario Baru</button>
    `;

    document.getElementById('restart-btn').addEventListener('click', () => {
        if (confirm('Anda yakin ingin memulai ulang?')) {
            resetAdventure();
        }
    });
}

// Reset Petualangan
function resetAdventure() {
    adventureState.score = 0;
    updateScoreDisplay();
    document.getElementById('storyline').innerHTML = `
        <h2>Pilih Skenario Bencana</h2>
        <div class="options scenario-options">
            <button data-scenario="gempa">Skenario Gempa Bumi</button>
            <button data-scenario="banjir">Skenario Banjir</button>
            <button data-scenario="kebakaran">Skenario Kebakaran</button>
            <button data-scenario="longsor">Skenario Longsor</button>
        </div>
    `;

    document.querySelectorAll('.scenario-options button').forEach(button => {
        button.addEventListener('click', (e) => {
            startScenario(e.target.dataset.scenario);
        });
    });
}


// Inisialisasi
window.onload = function () {
    document.body.insertAdjacentHTML('afterbegin', '<div id="score-display" class="score-display">Skor: 0</div>');
    handleSplashScreen();

    document.getElementById('start-btn').addEventListener('click', () => {
        document.getElementById('info-panel').classList.add('hidden');
        resetAdventure();
    });
};
