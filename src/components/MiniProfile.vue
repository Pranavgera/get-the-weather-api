<template>
    <div class="container">
        <div class="grey lighten-2">
            <h3>Student Name (Student Number)</h3>
            <p id="logoff" v-on:click="logout">Logout</p>
            <table>
                <row class="left">
                    <p id="lRow">
                        profile info
                    </p>
                </row>
                <row class="right">
                    <p id="rRow">
                        profile info
                    </p>
                </row>
            </table>
    
        <div>
            <button id="editPBtn" class="col l1" v-on:click="editProfile">Edit Profile</button>
        </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniProfile',
    props: {
    msg: String
    },
    methods: {
    editProfile () {
        this.$router.push('Profile_Edit');
    },
    logout () {
        this.$router.push('/');
    }
    }
}
</script>

<style >

.container {
    margin-top: -70px;
}

h3 {
    display: inline-block;
    font-size: 35px;
    font-weight: 600;
    color: #3e2b2f;
}

#logoff {
    display: inline-block;
    padding-left: 20px;
    font-size: 22px;
    font-weight: 600;
    color: rgba(77, 177, 77, 0.913);
}

#lRow {
    text-align: left;
    padding: 10px;
    margin-left: 20px;
}
#rRow {
    text-align: left;
    padding: 10px;
    margin-right: 500px;
}

#editPBtn {
    margin-top: -10px;
    margin-bottom: 20px;
    margin-left: 45%;
    margin-right: 45%;
    background-color: #3e2b2f;
    color: white;
}

</style>