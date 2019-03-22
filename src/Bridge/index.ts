import { BridgePattern} from './BridgePattern'

export namespace Bridge {
    export function show(): void {
        let ConcreteImp = new BridgePattern.ConcreteImplementorA()
        let abstractionA: BridgePattern.Abstraction = new BridgePattern
            .RefinedAbstractionA(ConcreteImp);
        
        abstractionA.callIt("abstractionA");
    }
}
