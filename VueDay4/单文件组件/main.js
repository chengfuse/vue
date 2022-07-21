import school from "./school"

new  Vue({
    el:"#root",
    template:`
        <div>
           <school></school> 
        </div>`,
    name:"app",
    components:{
        school
    }

})