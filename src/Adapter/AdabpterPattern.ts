export namespace AdabpterPattern {
    export class Adabpter {
        public method(): void {
            console.log("`Adabpter里面的method方法执行");
        }
    }
    export interface Target {
        called(): void;
    }

    export class Adapter implements Target {
        public called(): void {
            console.log("Adapter's `call` method is being called");
            let adapter: Adabpter = new Adabpter();
            adapter.method();
        }
    }
}