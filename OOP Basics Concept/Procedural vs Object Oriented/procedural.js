// PROCEDURAL PROGRAMMING

// Deklarasi Function
// Fungsi untuk menghitung total nilai ujian
function hitungTotalNilai(nilaiArr) {
    let total = nilaiArr.reduce((total, nilai) => total + nilai, 0);
    return total;
}

// Fungsi untuk menghitung rata-rata nilai ujian
function hitungRataRata(nilai) {
    const totalNilai = hitungTotalNilai(nilai);
    const jumlahNilai = nilai.length;
    const rataRata = totalNilai / jumlahNilai;
    return rataRata;
}

// Contoh Penggunaan
const nilaiUjian = [80, 75, 90, 85, 95];
const totalNilai = hitungTotalNilai(nilaiUjian);
const rataRataNilai = hitungRataRata(nilaiUjian);

console.log(`Total nilai ujian: ${totalNilai}`);
console.log(`Rata-rata nilai ujian: ${rataRataNilai}`);