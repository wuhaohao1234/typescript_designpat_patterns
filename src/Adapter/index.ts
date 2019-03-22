import {AdabpterPattern} from './AdabpterPattern'

export namespace Adabpter {
    export function show(params?: any) {
        let adabpter = new AdabpterPattern.Adapter()
        adabpter.called()
    }
}