<template>
    <div>
        <div>
            <p>微积分</p>
            </div>
        <div>
            <p></p>
            </div>
        <div>
            <div>
                <div v-for="(item,index) in chapters" :key="index" @click="chooseItem(item)">{{ item }}</div>
                
            </div>
            <div>
                <div v-for="(item,index) in subChapters" :key="index" >{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../utils/services';
export default {
    data() {
        return{
            // chapters: [
            //     {
            //         title: "章节一"
            //     },
            //     {
            //         title: "章节二"
            //     },
            //     {
            //         title: "章节三"
            //     },
            //     {
            //         title: "章节四"
            //     },
            //     {
            //         title: "章节五"
            //     }
            // ]
            lesson: {},
            chapters: [],
            subChapters: []
        }
    },
    methods:{
        chooseItem(item) {
            console.log(item);
            this.subChapters = this.lesson.subChapter;
        }
    },
    created (){
        API.getOneLesson("5ba9e1889761bc3b4830c585").then((data) => {
            console.log(data);
            this.lesson = data;
            this.chapters = data.chapter;
        })
    }

    
}
</script>
