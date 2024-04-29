// Membuat Object menggunakan function constructor

function Mobil(name, max_kecepatan) {
    this.name = name,
    this.max_kecepatan = max_kecepatan;
    this.kecepatan = 0;

    this.tambahKecepatan = (num) => {
        if (this.kecepatan + num > this.max_kecepatan) {
            return 'Melebihi maximum kecepatan.';
        }
        this.kecepatan += num;
        return this.kecepatan;
    }

    this.kurangiKecepatan = (num) => {
        if (this.kecepatan - num < 0) {
            return 'Kecepatan tidak boleh negatif.';
        }
        this.kecepatan -= num;
        return this.kecepatan;
    }
}

const Mobil_Toyota = new Mobil("Toyota Avanza", 120);
console.log(Mobil_Toyota.tambahKecepatan(130));
console.log(Mobil_Toyota.kurangiKecepatan(19));

const Mobil_Tesla = new Mobil("Tesla Model S", 115);
console.log(Mobil_Tesla.tambahKecepatan(40));
console.log(Mobil_Tesla.kurangiKecepatan(20));