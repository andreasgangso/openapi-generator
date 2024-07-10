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
 * @interface HasOnlyReadOnly
 */
export interface HasOnlyReadOnly {
    /**
     * 
     * @type {string}
     * @memberof HasOnlyReadOnly
     */
    readonly bar?: string;
    /**
     * 
     * @type {string}
     * @memberof HasOnlyReadOnly
     */
    readonly foo?: string;
}

/**
 * Check if a given object implements the HasOnlyReadOnly interface.
 */
export function instanceOfHasOnlyReadOnly(value: object): value is HasOnlyReadOnly {
    let isInstance = true;

    return isInstance;
}

export function HasOnlyReadOnlyFromJSON(json: any): HasOnlyReadOnly {
    return HasOnlyReadOnlyFromJSONTyped(json, false);
}

export function HasOnlyReadOnlyFromJSONTyped(json: any, ignoreDiscriminator: boolean): HasOnlyReadOnly {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'bar': !exists(json, 'bar') ? undefined : json['bar'],
        'foo': !exists(json, 'foo') ? undefined : json['foo'],
    };
}

export function HasOnlyReadOnlyToJSON(value?: HasOnlyReadOnly | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

    };
}

