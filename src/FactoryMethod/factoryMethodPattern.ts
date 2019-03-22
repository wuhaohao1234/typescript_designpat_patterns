export namespace FactoryMethodPattern {
    export interface AbstractProduct {
        method(param?: any): void;
    }
    export class ConcreteProductA implements AbstractProduct {
        public method(param?: any) {
            return "这是A对象的方法";
        }
    }
    export class ConcreteProductB implements AbstractProduct {
        public method(param?: any) {
            return "这是B对象的方法";
        }
    }
    export namespace ProductFactory {
        export function createProduct(type: string): AbstractProduct {
            if (type === 'A') {
                return new ConcreteProductA()
            }else if (type === 'B') {
                return new ConcreteProductB()
            }
            return null
        }
    }
}