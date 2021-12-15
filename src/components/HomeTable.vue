<template>
    <table class="home-table">
        <thead class="home-table__thead">
            <tr>
                <td class="home-tr__td">
                    <button @click="sortBy('fname')">First Name</button>
                </td>

                <td class="home-tr__td">
                    <button @click="sortBy('lname')">Last Name</button>
                </td>
                    
                <td class="home-tr__td">
                    <button @click="sortBy('gender')">Gender</button>
                </td>
                    
                <td class="home-tr__td">
                    <button @click="sortBy('job')">Job</button>
                </td>
            </tr>
        </thead>

        <tbody class="home-table__tbody">
            <tr v-for="row in alphabeticalSort">
                <td class="home-tr__td" v-for="value in row">{{ value }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    const mockData = `[{"fname":"Issie","lname":"Phinnis","gender":"Agender","job":"Accountant I"}, {"fname":"Dyann","lname":"Corriea","gender":"Female","job":"Account Executive"}, {"fname":"Nicholle","lname":"Vallack","gender":"Genderqueer","job":"Research Assistant I"}, {"fname":"Drake","lname":"Cunliffe","gender":"Polygender","job":"Systems Administrator III"}, {"fname":"Bessy","lname":"Goodrum","gender":"Bigender","job":"Human Resources Manager"}, {"fname":"Sydelle","lname":"Duesberry","gender":"Bigender","job":"Programmer Analyst III"}, {"fname":"Crichton","lname":"Le Marchant","gender":"Genderfluid","job":"Editor"}, {"fname":"Aymer","lname":"Thorn","gender":"Genderfluid","job":"Speech Pathologist"}, {"fname":"Kelcie","lname":"Mcmanaman","gender":"Agender","job":"VP Marketing"}]`
	
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
    .home-table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 0;
    }

    @media screen and (min-width: 768px) {
        .home-table {
            width: 100%;
            height: 100%;
        }
    }

    .home-table__thead {
        font-weight: bold;
        font-size: 0.4em;
    }

    .home-table button:hover {
        color: rgba(0, 0, 0, 0.377);
    }

    .home-table__tbody {
        font-size: 0.4em;
    }

    .home-tr__td {
        padding: 0.7em 1em 0.7em 1em;
    }
</style>