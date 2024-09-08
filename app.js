// Pastikan elemen-elemen ada
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

// Tambahkan pengecekan jika elemen ada sebelum menambahkan event listener
if (nextButton && prevButton && backButton && carousel && listHTML) {
    nextButton.onclick = function(){
        showSlider('next');
    }
    prevButton.onclick = function(){
        showSlider('prev');
    }
    backButton.onclick = function(){
        carousel.classList.remove('showDetail');
    }
    seeMoreButtons.forEach(button => {
        button.onclick = function(){
            carousel.classList.add('showDetail');
        }
    });

    let unAcceptClick;
    const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';

        carousel.classList.remove('prev', 'next');
        let items = document.querySelectorAll('.carousel .list .item');
        if(type === 'next'){
            listHTML.appendChild(items[0]);
            carousel.classList.add('next');
        }else{
            let positionLast = items.length - 1;
            listHTML.prepend(items[positionLast]);
            carousel.classList.add('prev');
        }

        clearTimeout(unAcceptClick);
        unAcceptClick = setTimeout(() => {
            nextButton.style.pointerEvents = 'auto';
            prevButton.style.pointerEvents = 'auto';
        }, 2000);
    }
}

/*FROM DATA DIRI */

document.addEventListener('DOMContentLoaded', function() {
    const selectedToolsContainer = document.getElementById('selectedToolsList'); // Container untuk menampilkan alat yang dipilih
    const personalInfoForm = document.getElementById('personalInfoForm'); // Form data diri
    const submitButton = document.querySelector('.submit-selection'); // Tombol untuk submit alat yang dipilih

    // Event listener untuk tombol submit
    submitButton.addEventListener('click', function() {
        const selectedTools = []; // Array untuk menyimpan nama alat yang dipilih
        selectedToolsContainer.innerHTML = ''; // Bersihkan pilihan sebelumnya di tampilan

        // Ambil semua checkbox yang dipilih
        document.querySelectorAll('.tool-checkbox:checked').forEach(function(checkbox) {
            const label = checkbox.nextElementSibling; // Ambil label yang terkait dengan checkbox
            const toolName = label.querySelector('p').textContent; // Ambil nama alat dari elemen <p>
            const toolImage = label.querySelector('img').src; // Ambil sumber gambar alat

            selectedTools.push(toolName); // Simpan nama alat yang dipilih ke dalam array

            // Buat elemen HTML untuk menampilkan alat yang dipilih
            const toolElement = document.createElement('div');
            toolElement.classList.add('tool-item');
            toolElement.innerHTML = `
                <img src="${toolImage}" alt="${toolName}">
                <p>${toolName}</p>
            `;
            selectedToolsContainer.appendChild(toolElement); // Tampilkan alat yang dipilih di halaman
        });

        // Tambahkan event listener untuk pengiriman form data diri
        personalInfoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form secara default

            const formData = new FormData(personalInfoForm); // Ambil data dari form
            const data = {
                name: formData.get('name'), // Ambil data nama
                class: formData.get('class'), // Ambil data kelas
                major: formData.get('major'), // Ambil data jurusan
                nis: formData.get('nis'), // Ambil data NIS
                selectedTools: selectedTools // Tambahkan alat yang dipilih ke data
            };

            // Tampilkan data atau kirim data ke server sesuai kebutuhan
            console.log('Data Diri:', data);
            alert('Data telah dikirim, periksa konsol untuk detail.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0]; // Mendapatkan tanggal hari ini dalam format YYYY-MM-DD
    dateInput.value = today; // Mengatur nilai input tanggal dengan tanggal hari ini
});

