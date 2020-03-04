var show = {
    name: 'Friends',
    release_date: 1994,
    main_characters: ['Ross', 'Rachel', 'Monica', 'Chandler', 'Joey'],
    address: {
        number: 90,
        stree: 'Bedford Street',
        city: 'New York'
    },

    question1: function () {
        console.log("Which Friend's character are you?")
    },
    question2: function() {
        console.log("How you doing?")
    },
    WhoAreTheCharactersInFriends: function() {
        return this.main_characters;
    }
}