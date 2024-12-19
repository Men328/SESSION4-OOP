class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Lỗi: Không thể chia cho 0.";
        }
        return a / b;
    }
}

class main {
    calculator: Calculator;

    constructor() {
        this.calculator = new Calculator();
    }

    static main() {
        let app = new Main();
        app.run();
    }

    run() {
        let option: string;

        let showMenu = () => {
            console.log("\nChọn chức năng:");
            console.log("1. Cộng hai số");
            console.log("2. Trừ hai số");
            console.log("3. Nhân hai số");
            console.log("4. Chia hai số");
            console.log("5. Dừng chương trình");
        };
    }
}