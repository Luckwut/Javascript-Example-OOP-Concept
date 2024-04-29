// OBJECT ORIENTED PROGRAMMING

// Class untuk mewakili data mahasiswa
class Mahasiswa {
    constructor(nama, nilai) {
        this.nama = nama;
        this.nilai = nilai;
    }

    hitungTotalNilai() {
        let total = this.nilai.reduce((total, nilai) => total + nilai, 0);
        return total;
    }

    hitungRataRata() {
        const totalNilai = this.hitungTotalNilai();
        const jumlahNilai = this.nilai.length;
        const rataRata = totalNilai / jumlahNilai;
        return rataRata;
    }

    displayMessage() {
        console.log(`Nama: ${this.nama}`);
        console.log(`Total Nilai: ${this.hitungTotalNilai()}`);
        console.log(`Rata-rata Nilai: ${this.hitungRataRata()}`);
    }
}

// Contoh penggunaan
const mahasiswa1 = new Mahasiswa("Budi", [80, 75, 90]);
const mahasiswa2 = new Mahasiswa("Ani", [85, 95, 90]);
mahasiswa1.displayMessage();
mahasiswa2.displayMessage();