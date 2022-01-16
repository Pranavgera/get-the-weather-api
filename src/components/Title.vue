<template>

    <div class="container">

        <div id="herobox" class="center card-panel">
            <h1>Weather API Application</h1>
        </div>

    </div>

</template>

<script>
export default {
    name: 'Title',
    components: {

    },
    props: {
        msg: String
    }
}
</script>

<style>

div.container{
    margin-top: -1.2rem;
}

#herobox{
    background-color: #90d5ac;
}

.container h1 {
    font-family: 'Oswald', sans-serif;
    color: #3e2b2f;
    }

</style>