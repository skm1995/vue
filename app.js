Vue.component('dog', {
    template: '#dog-template',
    props: ['name', 'score'],
    methods: {
        voteDog: function(){
            this.score++;
        }
    }
})

var vueApp = new Vue({
    el: '#vueApp',
})