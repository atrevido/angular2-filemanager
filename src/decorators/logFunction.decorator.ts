import {environment} from "../../demo/src/environments/environment";

export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let eventObject = args[0];

        if (!environment.production) {
            console.log(eventObject);
        }

        return originalMethod.apply(this, args);
    };


    return descriptor;
}
