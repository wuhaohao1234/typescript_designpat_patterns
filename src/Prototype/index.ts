import { PrototypePattern} from './PrototypePattern'

export namespace Prototype {
    export function show(params?: any) {
        let builder = new PrototypePattern.Builder()
        let c3 = builder.createOne('c1')
        console.log(c3.toString())
    }
}