<template>
    <div>
        <b-container fluid id="id-basicInfo" >
            <img class="background-img" src="../../assets/image/british-museum2.jpg">
            <img class="rounded-circle img-fluid avatar-img" src="../../assets/image/avatar2.jpg">
            <!-- <p class="subTitle" v-once>{{ info.job }}</p> -->
            <p class="title" v-once>Hello, I am {{ info.name }}</p>
            <p class="subTitle" v-once>{{ info.job }}</p>
        </b-container> 
    </div>
    <!-- <div>
        <b-container fluid id="id-basicInfo">
                <b-row align-h="center">
                    <b-col>
                        <b-row align-h="center">
                            <b-col></b-col>
                            <b-col align-h="center">
                                <img class="rounded-circle img-fluid avatar-img" src="../../assets/image/avatar2.jpg">
                            </b-col>
                            <b-col></b-col>
                        </b-row>
                        <p class="title" v-once>Hi, I am {{ info.name }}</p>
                        <p class="subTitle" v-once>{{ info.job }}</p>
                    </b-col>
                </b-row>
        </b-container> 
    </div> -->
</template>

<script src="./basic-info.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./basic-info.scss" scoped></style>