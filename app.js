const img =  document.querySelectorAll('div.question img');
const question = document.querySelectorAll('.question');
const content = document.querySelectorAll('.content')

class Click {
    constructor(element){
        this.element = element
    }
    click(){
        this.element.addEventListener('click',function(){
            this.querySelector('.content').classList.toggle('active');
            if( this.querySelector('.content').classList.contains('active')){
                this.querySelector('img').src = './assets/images/icon-minus.svg';
            }else{
                this.querySelector('img').src = './assets/images/icon-plus.svg';
            }
        })
        return this
    }
    init(){
        const trigger = this.element.querySelector('.trigger')
        trigger.addEventListener('focus',function(e){
            console.log(e)
            const parent = this.parentElement
            parent.querySelector('.content').classList.add('active')
            if( parent.querySelector('.content').classList.contains('active')){
                parent.querySelector('img').src = './assets/images/icon-minus.svg';
            }
            
        })
        trigger.addEventListener('blur',function(){
            const parent = this.parentElement
            parent.querySelector('.content').classList.remove('active');
            if( !parent.querySelector('.content').classList.contains('active')){
                parent.querySelector('img').src = './assets/images/icon-plus.svg';
                parent.style.color = 'hsl(292, 42%, 14%);'
            }
    
        })
        return this
    }
}

question.forEach(item =>{
    const instance = new Click(item)

    instance.click().init()
})