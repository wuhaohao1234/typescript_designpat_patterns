import {FactoryMethodPattern} from './factoryMethodPattern'

export namespace FactoryMethod {
    export function show(type?: any): void {
        let a: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct('A')
        let b: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct('B')
        console.log(a.method())
        console.log(b.method())
    }
}