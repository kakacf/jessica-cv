<template>
        <div>
            <b-container fluid id="id-basicInfo">
                <div class="info">
                    <div class="info__photo">
                        <img class="info__photo-img rounded-circle" src="../../assets/image/avatar2.jpg">
                    </div>
                    <div class="info__text">
                        <div class="info__text-title" v-once>Hello, I am {{ info.name }}</div>
                        <div class="info__text-subTitle" v-once>{{ info.job }}</div>
                    </div>
                </div>
            </b-container> 
        </div>
    <!-- <div>
        <b-container fluid id="id-basicInfo">
            <img class="background-img" src="../../assets/image/british-museum2.jpg">
            <div class="text-box">
                <img class="rounded-circle img-fluid avatar-img" src="../../assets/image/avatar2.jpg">
                <p class="title" v-once>Hello, I am {{ info.name }}</p>
                <p class="subTitle" v-once>{{ info.job }}</p>
            </div>
        </b-container> 
    </div> -->
</template>

<script src="./basic-info.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./basic-info.scss" scoped></style>