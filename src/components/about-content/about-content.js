
export default {
    name: 'AboutContent',
    props: {
        title: String,
        content: String,
        isSimpleTpl: Boolean
    },
    data() {
        return {
        
        };
    },
    methods: {
        // textBreakline: function () {
        //     let textWrapper = document.querySelector('#simpleMe');
        //     console.log('AboutContent textBreakline!!!!', textWrapper.textContent);
        //     this.content = textWrapper.textContent.replace(/\r\n/g,"<br/>");

        // }


    },
    created() {
        // console.log('AboutContent !!!!');
        // this.textBreakline();

    },
    mounted() {
        // this.textBreakline();
        
    },
}