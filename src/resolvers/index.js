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
        },
        title(){
            return 'Harry Potter and the Order of the Phoenix';
        },
        price(){
            return 29.99;
        },
        releaseYear(){
            return 2005;
        },
        rating(){
            return 4.9;
        },
        inStock(){
            return true;
        },
    }
}

module.exports = resolvers