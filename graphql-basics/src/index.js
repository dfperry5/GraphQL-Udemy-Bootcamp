import { GraphQLServer } from 'graphql-yoga'

// Type Definitions
/**
 * AKA - Application Schema
 *  Where we define custom data types and operations that are available.
 *  In demo - it's the 
 */

const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

// Resolvers
/**
 * Set of functions that run for each operation performed on API.
 * 
 */
const resolvers = {
    Query: {
        hello() {
            return "Hello world, this is Dylan from GraphQL"
        },
        name () {
            return 'Dylan Perry'
        },
        location() {
            return 'Apex, North Carolina'
        },
        bio(){
            return 'Bunn, NC - born and raised. On the farm is where I spent most of days.' +
                'I then went to NC State - Majored in comp sci - worked at Fidelity (still there)' + 
                'Now I am getting my Masters from Georgia Tech'
        }
    }
}

// Declare a server

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start( () => {
    console.log("Server Is Up!")
});