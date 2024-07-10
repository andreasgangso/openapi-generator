/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Foo
 */
export interface Foo {
    /**
     * 
     * @type {string}
     * @memberof Foo
     */
    bar?: string;
}

/**
 * Check if a given object implements the Foo interface.
 */
export function instanceOfFoo(value: object): value is Foo {
    let isInstance = true;

    return isInstance;
}

export function FooFromJSON(json: any): Foo {
    return FooFromJSONTyped(json, false);
}

export function FooFromJSONTyped(json: any, ignoreDiscriminator: boolean): Foo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'bar': !exists(json, 'bar') ? undefined : json['bar'],
    };
}

export function FooToJSON(value?: Foo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'bar': value.bar,
    };
}

