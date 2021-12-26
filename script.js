// Digital Clock

let clock = new Vue({
    el: "#clockd",
    data: {
        time: ''
    }
});
setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    let dc = new Date();
    clock.time = hour(dc.getHours(), 2) + ':' + hour(dc.getMinutes(), 2) + ':' + hour(dc.getSeconds(), 2);
};

function hour(num, digit) {
    let zero = '';
    for (let i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
};

// Login Session

let session = new Vue({
    el: "#login-form",
    data: {
        doLogin: false,
        doError: false,
        missing: false,
        username: "",
        password: "",
    },
    methods: {
        login() {
            if (this.username === "developer" && this.password === "developyn") {
                this.doLogin = true;
            } else if (this.username === "" || this.password === "") {
                this.missing = true;
            } else {
                this.doError = true;
            }
        }
    },
});

//  Quiz

let quiz = {
    title: 'My quiz',
    questions: [
        {
            text: "HTML is what type of language?", responses: [
                { text: 'Markup Language', correct: true },
                { text: 'Macro Language' },
                { text: 'Programming Language' },
                { text: 'Scripting Language' },
            ]
        }, {
            text: "What amount of bits commonly equals one byte?", responses: [
                { text: '1' },
                { text: '128' },
                { text: '64' },
                { text: '8', correct: true },
            ]
        }, {
            text: "What is the most preferred image format used for logos?", responses: [
                { text: '.png' },
                { text: '.jpeg' },
                { text: '.svg', correct: true },
                { text: '.gif' },
            ]
        }, {
            text: "In web development, what does CSS stand for?", responses: [
                { text: 'Counter Strike: Source' },
                { text: 'Cascading Style Sheet', correct: true },
                { text: 'Corrective Style Sheet' },
                { text: 'Computer Style Sheet' },
            ]
        }
    ]
};

new Vue({
    el: '#quiz',
    data: {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array(quiz.questions.length).fill(false),
        soundPath: "completion-of-a-level.mp3",
    },
    methods: {
        next: function () {
            this.questionIndex++;
        },
        score: function () {
            return this.userResponses.filter(function (val) { return val }).length;
        },
        sound() {
            if (this.questionIndex === 4) {
                let soundmp3 = new Audio(this.soundPath); soundmp3.play();
            }
        }

    }

});

// Table Data

let table = new Vue({
    el: '#table',
    data: {
        rows: [
            { name: "Albert", last_name: 'Smith', age: '50' },
            { name: "Paula", last_name: 'Geller', age: '45' },
            { name: "Ana", last_name: 'Jones', age: '46' },
            { name: "Monica", last_name: 'Brown', age: '48' },
            { name: "Emma", last_name: 'Taylor', age: '51' },
            { name: "Robert", last_name: 'Green', age: '52' }
        ],
        counter: {},
    },
    computed: {
        "columns": function columns() {
            if (this.rows.length == 0) {
                return [];
            }
            return Object.keys(this.rows[0])
        }
    },
    methods: {
        removeRow: function (index) {
            this.counter--;
            this.rows.splice(index, 1);
        }
    }
});

// Submit Form

let adding = new Vue({
    el: '#adding',
    data: {
        newUser: {},

    },
    methods: {
        addUser: function () {
            table.rows.push(this.newUser);
            this.newUser = {};
        }
    }
});


// Order List

let order = new Vue({
    el: '#order',
    data: {
        products: [
            { name: 'Cheese & Bacon Rolls x9', price: 1.75, active: false },
            { name: 'Diet Coke Pack x8', price: 4.25, active: false },
            { name: 'Lager Beer Bottles 12x', price: 9.55, active: false },
            { name: 'Multipack Crisps 6x', price: 1.75, active: false }
        ]
    },
    methods: {
        toggleActive: function (s) {
            s.active = !s.active;
        },
        total: function () {
            let total = 0;
            this.products.forEach(function (s) {
                if (s.active) {
                    total += s.price;
                }
            });
            return total;
        }
    }
});

// list items
let search = new Vue({
    el: '#searchlist',
    data: () => ({
        search: "",
        games: [
            { title: 'Avengers', image: 'avengers.jpg' },
            { title: 'Call of Duty - Vanguard', image: 'call-of-duty.jpg' },
            { title: 'Destinity 2', image: 'destinity.jpg' },
            { title: 'Fifa 22', image: 'fifa-22.jpg' },
            { title: 'Need for Speed', image: 'need-for-speed.jpg' },
            { title: 'Resident Evil 2', image: 'resident-evil-2.jpg' },
            { title: 'Spiderman', image: 'spider-man.jpg' },
            { title: 'Halo: Combat Evolved', image: 'halo-combat-evolved.jpg' },
            { title: 'Mortal Kombar 11', image: 'mortal-kombat11.jpg' }
        ]
    }),
    computed: {
        filteredGames() {
            return this.games.filter(game => {
                return (game.title.toLowerCase().includes(this.search.toLowerCase())
                );
            });
        }
    }
});

// items + image

let grid_list = new Vue({
    el: '#toggle-grid-list',
    data: {
        layout: 'grid',
        layout_list_grid: [
            { title: 'Avengers', image: { 'large': 'avengers.jpg', 'small': 'avengers.jpg' } },
            { title: 'Call of Duty - Vanguard', image: { 'large': 'call-of-duty.jpg', 'small': 'call-of-duty.jpg' } },
            { title: 'Destinity 2', image: { 'large': 'destinity.jpg', 'small': 'destinity.jpg' } },
            { title: 'Fifa 22', image: { 'large': 'fifa-22.jpg', 'small': 'fifa-22.jpg' } },
            { title: 'Need for Speed', image: { 'large': 'need-for-speed.jpg', 'small': 'need-for-speed.jpg' } },
            { title: 'Resident Evil 2', image: { 'large': 'resident-evil-2.jpg', 'small': 'resident-evil-2.jpg' } },
            { title: 'Spiderman', image: { 'large': 'spider-man.jpg', 'small': 'spider-man.jpg' } },
            { title: 'Halo: Combat Evolved', image: { 'large': 'halo-combat-evolved.jpg', 'small': 'halo-combat-evolved.jpg' } },
            { title: 'Mortal Kombar 11', image: { 'large': 'mortal-kombat11.jpg', 'small': 'mortal-kombat11.jpg' } }
        ]
    }
});

// Magic 8 Ball Game

let answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Ask again",
];
let ball = new Vue({
    el: "#ball",
    data() {
        return {
            question: "",
            answer: "",
        };
    },
    methods: {
        getAnswer() {
            if (!this.question) {
                return;
            }
            let index = Math.floor(Math.random() * answers.length);
            this.answer = answers[index];
        },
    },

});