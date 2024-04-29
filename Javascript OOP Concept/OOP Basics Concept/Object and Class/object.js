// Object "mobil"
const mobil = {
    name: "Toyota Avanza", // Property
    max_kecepatan: 120, // Property
    kecepatan: 0, // Property

    tambahKecepatan: function (num) { // Method
        if (this.kecepatan + num > this.max_kecepatan) {
            return 'Melebihi maximum kecepatan.';
        }
        this.kecepatan += num;
        return this.kecepatan;
    },

    kurangiKecepatan: function (num) { // Method
        if (this.kecepatan - num < 0) {
            return 'Kecepatan tidak boleh negatif.';
        }
        this.kecepatan -= num;
        return this.kecepatan;
    }
};

console.log(mobil.kecepatan);
console.log(mobil.tambahKecepatan(45));
console.log(mobil.kurangiKecepatan(20));