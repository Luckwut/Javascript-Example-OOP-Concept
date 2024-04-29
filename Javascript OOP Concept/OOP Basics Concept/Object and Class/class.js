// Membuat object menggunakan class
class Mobil {
    constructor(name, max_kecepatan) {
        this.name = name,
        this.max_kecepatan = max_kecepatan;
        this.kecepatan = 0;
    }

    tambahKecepatan = (num) => {
        if (this.kecepatan + num > this.max_kecepatan) {
            return 'Melebihi maximum kecepatan.';
        }
        this.kecepatan += num;
        return this.kecepatan;
    }

    kurangiKecepatan = (num) => {
        if (this.kecepatan - num < 0) {
            return 'Kecepatan tidak boleh negatif.';
        }
        this.kecepatan -= num;
        return this.kecepatan;
    }
}

const Mobil_Wuling = new Mobil("Wuling Confero S", 185);
console.log(Mobil_Wuling.name);
console.log(Mobil_Wuling.max_kecepatan);
console.log(Mobil_Wuling.tambahKecepatan(185));
console.log(Mobil_Wuling.kurangiKecepatan(50));