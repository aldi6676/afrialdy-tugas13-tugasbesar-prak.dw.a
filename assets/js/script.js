document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendMessageBtn').addEventListener('click', function () {
        var name = document.querySelector('.kontak input[placeholder="Nama"]').value;
        var email = document.querySelector('.kontak input[placeholder="Email"]').value;
        var phone = document.querySelector('.kontak input[placeholder="No. Phone"]').value;
        var message = document.querySelector('.kontak textarea').value;

        if (name && email && phone && message) {
            alert('Pesan berhasil dikirim! Terima kasih atas pesan Anda.');

            // Reset formulir setelah pengiriman pesan
            document.querySelector('.kontak input[placeholder="Nama"]').value = '';
            document.querySelector('.kontak input[placeholder="Email"]').value = '';
            document.querySelector('.kontak input[placeholder="No. Phone"]').value = '';
            document.querySelector('.kontak textarea').value = '';
        } else {
            alert('Mohon isi semua kolom sebelum mengirim pesan.');
        }
    });
});