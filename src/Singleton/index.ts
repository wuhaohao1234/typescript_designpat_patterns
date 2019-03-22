import Singleton from './singleton'

export namespace SingletonPattern {
    export function show() {
        const singleton1 = Singleton.getInstance()
        const singleton2 = Singleton.getInstance()
        if (singleton1 === singleton2) {
            console.log('singleton1与singleton2指向同一个对象');
            console.log('一类只能存在单个实例的类')
        }else{
            console.log('不是单例模式')
        }
    }
}