interface IArticle {
    // Property
    title: string;
    author: string;
    content: string;

    // Methods
    getWordCount(): number;
    getSummary(): string;
    printArticle(): string;
}

class Article implements IArticle {
    public title: string;
    public author: string;
    public content: string;

    constructor(title: string, author: string, content: string) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    getWordCount(): number {
        return this.content.split(" ").length;
    }

    getSummary(): string {
        const summaryLength = 100;
        return this.content.substring(0, summaryLength) + "...";
    }

    printArticle(): string {
        return `${this.title}\nBy: ${this.author}\n\n${this.content}`;
    }
}

// Usage
let myArticle = new Article(
    "Cara Membuat Repository di Github",
    "John Smith",
    `Pertama, Fork dan clone repository. Kedua, Buat clone repository. Ketiga, Buat branch baru.
     Keempat, Lakukan perubahan. Kelima, Commit dan push. Keenam, Buat pull request.
     Ketujuh, Tunggu review. Kedelapan, Merge.`,
);

console.log(myArticle.getWordCount());
console.log(myArticle.getSummary());
console.log(myArticle.printArticle());