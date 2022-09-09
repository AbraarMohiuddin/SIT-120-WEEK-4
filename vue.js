const app = new Vue({
    el: '#app',
    data: {
        title: 'Week 4 Task 2'
    },
});

//v-if
const app1 = new Vue({
    el: '#app1',
    data: {
        tasks: [
            {
                name: 'Complete Week 4',
                pending: true,
                id: 1,
            },
            {
                name: 'Start Week 5',
                pending: true,
                id: 2,
            },
            {
                name: 'Check out Assignment 3',
                pending: false,
                id: 3,
            },
        ],
    },
    computed: {
        dueTomorrowAssignemnts() {
            return this.assignments.filter((assignment) => assignment.dueTomorrow);
        },
    },
});
app.count = 2;



//v-else
var app3 = new Vue({
    el: '#app3',
    data: {
        message: ''
    },
});

//v-for
        const app4 = new Vue({
            el: '#app4',
            data: {
                header: 'Units I have this Sem',
                newItem: "",
                items: [
                    'SIT120',
                    'SIT292',
                    'SIT232',
                    'SIT103',
                ]
            },
        });

//v-show
const app5 = new Vue({
    el: '#app5',
    data: {
        message: true,
    }
});