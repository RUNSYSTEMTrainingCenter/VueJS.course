<template>
    <div>
        <input type="text" v-model="searchTerm" />
        <div class="item-container">
            <div class="items" v-for="item in filteredItems" :key="item">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-id">{{ item.id }}</p>
                <p class="item-dob">{{ item.dob }}</p>
                <p class="item-address">{{ item.address }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            print: 0,
            searchTerm: '',
            items: [
                {
                    name: "John Doe",
                    id: "12345",
                    dob: "01/01/1980",
                    address: "1 Main Street, Anytown USA 12345"
                },
                {
                    name: "Jane Doe",
                    id: "67890",
                    dob: "02/14/1985",
                    address: "2 Elm Street, Anytown USA 67890"
                },
                {
                    name: "Bob Smith",
                    id: "111213",
                    dob: "03/21/1990",
                    address: "3 High Street, Anytown USA 111213"
                },
                {
                    name: "Alice Johnson",
                    id: "141516",
                    dob: "04/10/1995",
                    address: "4 Oak Street, Anytown USA 141516"
                },
                {
                    name: "Charlie Brown",
                    id: "171819",
                    dob: "05/05/2000",
                    address: "5 Maple Street, Anytown USA 171819"
                },
                {
                    name: "Emily Davis",
                    id: "202122",
                    dob: "06/15/2005",
                    address: "6 Pine Street, Anytown USA 202122"
                },
                {
                    name: "William Thompson",
                    id: "232425",
                    dob: "07/30/1980",
                    address: "7 Cedar Street, Anytown USA 232425"
                },
                {
                    name: "Elizabeth Wilson",
                    id: "262728",
                    dob: "08/20/1985",
                    address: "8 Birch Street, Anytown USA 262728"
                },
                {
                    name: "James Anderson",
                    id: "293031",
                    dob: "09/10/1990",
                    address: "9 Cedar Street, Anytown USA 293031"
                },
                {
                    name: "Sophie Smith",
                    id: "323334",
                    dob: "10/12/1995",
                    address: "10 Maple Street, Anytown USA 323334"
                },
                {
                    name: "Sophie Smith",
                    id: "323334",
                    dob: "10/12/1995",
                    address: "10 Maple Street, Anytown USA 323334"
                },
                {
                    name: "Olivia Jones",
                    id: "353637",
                    dob: "11/15/2000",
                    address: "11 Oak Street, Anytown USA 353637"
                },
                {
                    name: "Noah Wilson",
                    id: "383940",
                    dob: "12/05/2005",
                    address: "12 Elm Street, Anytown USA 383940"
                },
                {
                    name: "Isabella Davis",
                    id: "414243",
                    dob: "01/20/1980",
                    address: "13 Main Street, Anytown USA 414243"
                },
                {
                    name: "Ethan Johnson",
                    id: "444546",
                    dob: "02/10/1985",
                    address: "14 High Street, Anytown USA 444546"
                },
                {
                    name: "Mia Jones",
                    id: "505152",
                    dob: "03/01/1990",
                    address: "15 Cedar Street, Anytown USA 505152"
                },
                {
                    name: "Alexander Wilson",
                    id: "535455",
                    dob: "04/15/1995",
                    address: "16 Birch Street, Anytown USA 535455"
                },
                {
                    name: "Sofia Davis",
                    id: "565758",
                    dob: "05/05/2000",
                    address: "17 Main Street, Anytown USA 565758"
                },
                {
                    name: "William Johnson",
                    id: "596061",
                    dob: "06/10/2005",
                    address: "18 Elm Street, Anytown USA 596061"
                },
                {
                    name: "Mason Smith",
                    id: "626364",
                    dob: "07/20/1980",
                    address: "19 High Street, Anytown USA 626364"
                },
                {
                    name: "Jacob Jones",
                    id: "656667",
                    dob: "08/15/1985",
                    address: "20 Oak Street, Anytown USA 656667"
                },
                {
                    name: "Owen Wilson",
                    id: "686970",
                    dob: "09/01/1990",
                    address: "21 Maple Street, Anytown USA 686970"
                },
                {
                    name: "Hannah Davis",
                    id: "717273",
                    dob: "10/05/1995",
                    address: "22 Pine Street, Anytown USA 717273"
                },
                {
                    name: "Evelyn Johnson",
                    id: "747676",
                    dob: "11/10/2000",
                    address: "23 Cedar Street, Anytown USA 747676"
                },
                {
                    name: "Elijah Smith",
                    id: "777879",
                    dob: "12/15/2005",
                    address: "24 Birch Street, Anytown USA 777879"
                }
            ]
        }
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    item.address.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    item.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    item.dob.toLowerCase().includes(this.searchTerm.toLowerCase())

            })
        },

        mounted() {
            console.log(this.items)
        }
    }
}
</script>
<style scoped>
.item-container {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    height: 50rem;
    flex-wrap: wrap;
    overflow: scroll;
    align-items: start;
    justify-content: start;

}

.item-container::-webkit-scrollbar {
    display: none;
}

.items {
    width: 10rem;
    background-color: rgb(58, 199, 152);
    padding: 1rem;
    height: 10rem;
    border-radius: 2rem;
}
</style>
