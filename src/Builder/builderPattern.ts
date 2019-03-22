export namespace BuilderPattern {
    export class Builder {
        public name: string
        public age: number
        public sex: string
        constructor(name: string) {
            this.name = name
        }
        public getName() {
            return this.name
        }
        public getAge() {
            return this.age
        }
        public getSex() {
            return this.sex
        }
        public setAge(newAge: number): Builder {
            this.age = newAge
            return this
        }
        public setSex(newSex: string): Builder {
            this.sex = newSex
            return this
        }
        public build(): User {
            return new User(this)
        }
    }
    export class User {
        public name: string
        public age: number
        public sex: string
        constructor(builder: Builder) {
            this.name = builder.getName()
            this.age = builder.getAge()
            this.sex = builder.getSex()
        }
        public getName() {
            return this.name
        }
        public getAge() {
            return this.age
        }
        public getSex() {
            return this.sex
        }
    }
}