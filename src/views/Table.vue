<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <td><button @click="sortBy('fname')">First Name</button></td>
                    <td><button @click="sortBy('lname')">Last Name</button></td>
                    <td><button @click="sortBy('gender')">Gender</button></td>
                    <td><button @click="sortBy('job')">Job</button></td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="row in alphabeticalSort">
                    <td v-for="value in row">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    const mockData = `[{"fname":"Issie","lname":"Phinnis","gender":"Agender","job":"Accountant I"}, {"fname":"Dyann","lname":"Corriea","gender":"Female","job":"Account Executive"}, {"fname":"Nicholle","lname":"Vallack","gender":"Genderqueer","job":"Research Assistant I"}, {"fname":"Drake","lname":"Cunliffe","gender":"Polygender","job":"Systems Administrator III"}, {"fname":"Bessy","lname":"Goodrum","gender":"Bigender","job":"Human Resources Manager"}, {"fname":"Sydelle","lname":"Duesberry","gender":"Bigender","job":"Programmer Analyst III"}, {"fname":"Crichton","lname":"Le Marchant","gender":"Genderfluid","job":"Editor"}, {"fname":"Aymer","lname":"Thorn","gender":"Genderfluid","job":"Speech Pathologist"}, {"fname":"Kelcie","lname":"Mcmanaman","gender":"Agender","job":"VP Marketing"}, {"fname":"Fran","lname":"Gaskins","gender":"Genderqueer","job":"Accountant I"}]`
	export default {
		data() {
			return {
                sort: {
                    key: 'fname',
                    order: 'asc'
                },
                content: JSON.parse(mockData)
            }
		},
        computed: {
            alphabeticalSort() {
                const key = this.sort.key;

                function sortFunction(a, b) {
                    if (a[key] > b[key]) {
                        return 1;
                    } else if (a[key] < b[key]) {
                        return -1;
                    } else {
                        return 0;
                    }
                }

                return this.content.sort(sortFunction)
            }
        },
        methods: {
            sortBy(key) {
                this.sort.key = key;
            }
        }
	}
</script>

<style>
    table {
        margin-top: 2em;
        border-collapse: collapse;
        width: 70vw;
        margin-left: auto;
        margin-right: auto;
    }

    table thead {
        font-weight: bold;
        font-size: 0.8em;
    }

    table button:hover {
        color: rgb(182, 118, 255);
    }

    table tbody {
        font-size: 0.7em;
    }

    table tr {
        border: 1.5px solid black;
    }

    table td {
        padding: 0.5em 1em 0.5em 1em;
    }
</style>