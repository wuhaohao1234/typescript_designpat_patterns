export namespace PrototypePattern {
    export interface Prototype {
        clone(): Prototype;
        toString(): string;
    }
    export class Concrete1 implements Prototype {
        public clone() {
            return new Concrete1()
        }
        public toString() {
            return 'This is Concrete1'
        }
    }
    export class Concrete2 implements Prototype {
        public clone(): Prototype {
            return new Concrete2();
        }
        public toString(): string {
            return "This is Concrete2";
        }
    }
    export class Builder {
        private prototypeMap: {
            [index: string]: Prototype
        } = {}
        constructor() {
            this.prototypeMap['c1'] = new Concrete1()
            this.prototypeMap['c2'] = new Concrete2()
        }
        public createOne(s: string) {
            return this.prototypeMap[s].clone()
        }
    }
}