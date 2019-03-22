import { BuilderPattern } from './builderPattern'

export namespace Build {
    export function show(params?: any) {
        let user = new BuilderPattern.Builder('姓名')
        user.setAge(23)
        user.setSex('男')
        let build = user.build()
        console.log(build.getName() + build.getAge() + build.getSex());
    }
}