import { AbstractFactoryPattern} from './abstractFactory'

export namespace AbstractFactory {
    export function show() {
        let factory1: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory1()
        let tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory1)
        tester1.test()
        let factory2: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory2();
        let tester2: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory2);
        tester2.test();
    }
}