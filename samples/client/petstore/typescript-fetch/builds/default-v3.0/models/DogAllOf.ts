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
 * @interface DogAllOf
 */
export interface DogAllOf {
    /**
     * 
     * @type {string}
     * @memberof DogAllOf
     */
    breed?: string;
}

/**
 * Check if a given object implements the DogAllOf interface.
 */
export function instanceOfDogAllOf(value: object): value is DogAllOf {
    let isInstance = true;

    return isInstance;
}

export function DogAllOfFromJSON(json: any): DogAllOf {
    return DogAllOfFromJSONTyped(json, false);
}

export function DogAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): DogAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'breed': !exists(json, 'breed') ? undefined : json['breed'],
    };
}

export function DogAllOfToJSON(value?: DogAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'breed': value.breed,
    };
}

