'use strict';

const AError = require('./../../core/AzuriteError'),
    ErrorCodes = require('./../../core/ErrorCodes');

/*
 * Checks whether the container name adheres to the naming convention 
 * as specified at https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata
 */
class ContainerName {
    constructor() {
    }

    validate({ request = undefined }) {
        const name = request.containerName;
        if (name.length < 3 || name.length > 63) {
            throw new AError(ErrorCodes.OutOfRangeInput);
        }
        
        if (/^([a-z0-9]+)(-[a-z0-9]+)*$/i.test(name) === false) { 
            throw new AError(ErrorCodes.InvalidInput);
        }
    }
}

module.exports = new ContainerName;