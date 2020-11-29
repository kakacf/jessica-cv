

export default {
    name: 'ProjectContent',
    props: {
        projectIndex: Number,
        projectName: String,
        projectImage: String,
        projectContent: String,
        isImgLeft: {
            type: Boolean,
            default: function () {
                return true;
            }
        },
       
    },
    data() {
        return {
            order: ['1', '2'],
            
            
        };
    },
    methods: {
        goToProjectImg: function (index) {
            this.$nextTick(() => {
                console.log('點擊 index', index);
                // this.$router.push('/projectimg');
                this.$router.push({
                    name: 'projectimg',
                    params: { projectIndex: index }
                });
            });
        }


    },
    created() {
        if (!this.isImgLeft) {
            this.order = ['2', '1'];
        }
        
       
    },
    mounted() {
        
        
    },
}