<template>
    <div class="text-search">
        <img src='../../assets/tim-kiem.png' />
        <input type="text" placeholder="Tìm kiếm" @keyup.enter="search_phone"/>
    </div>
    <div class="result" >
        <p>Kết quả tìm kiếm danh bạ</p>
        <div class="result-search" v-for:="(userSearch, index) in resultUserSearchPhone">
            <label>{{ userSearch.fullname }}</label>
            <input type="radio"  @click="showDetailUserSearch(userSearch, index)" :id="index"/>
            <p>{{ userSearch.phone_number }}</p>
            <img src='../../assets/tim-kiem.png' />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            resultUserSearchPhone: [

            ],
        }
    },
    methods: {
        search_phone(event) {
            this.listUser.forEach((e) => {
                var a = e.phone_number
                if (a.indexOf(event.target.value) > 0) {
                this.resultUserSearchPhone.push(e)
                
                }
            })
            console.log(this.resultUserSearchPhone)
        },
        showDetailUserSearch(userSearch, index) {
            for(var i = 0; i < this.resultUserSearchPhone.length; i ++) {
                if (i != index) {
                    document.getElementById(i).checked = false;
                }
            }
            this.$emit("showDetailUserSearch", userSearch, index)
        }
    },
    props: {
        detailUser2: Object,
        listUser: Object,
    }
}
</script>

<style scoped>
.text-search{
    height: 80px;
    position: relative;
}
.text-search img {
    position: absolute;
    top: 38%;
    left: 4%;
    z-index: 1;
}
.text-search input {
    position: absolute;
    top: 30%;
    left: 1.7%;
    border-left: none;
    height: 45px;
    width: 85%;
    padding-left: 55px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
}
::placeholder {
}
.result {
    
    width: 95%;
    height: 80%;
    margin: 0px auto;
    position: relative;
    
}
.result p {
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 5%;
}
.result-search {
    margin-bottom: 7%;
    margin-left: 5%;
    width: 90%;
    height: 10%;
    position: relative;
    
}
.result-search label {
    color: rgb(221,122,1);
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
}
.result-search input{
    float: right;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    margin-top: 1%;
}
.result-search p {
    margin-top: 3%;
    color: #0070D2;
    font-size: 18px;
    padding-bottom: 2%;
    border-bottom: 1px solid #CECDCD;
}
.result-search img {
    position: absolute;
    top: 70%;
    left: 93%;
    max-width: 25px;
    max-height: 25px;
}
@media only screen and (width: 1280px) and (height: 720px) {
    .text-search input {
        width: 80%;
    }
    .result {
        height: 70%;
    }
}
@media only screen and (width: 1280px) and (height: 1080px) {
    .text-search input {
        width: 80%;
    }
    .result {
        height: 70%;
    }
}
</style>