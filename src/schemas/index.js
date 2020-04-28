import {fileLoader, mergeTypes } from 'merge-graphql-schemas'
import path from 'path'

const typesArray = fileLoader(path.join(__dirname, './'), 
    {
        rescursive: true, extensions: ['.gql']
    }
);

module.exports = mergeTypes(typesArray, {all: true});