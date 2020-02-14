// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   title:{
     type:"string",
     value:"猜猜我是谁",
     observer:function(newvalue,oldvalue){
       console.log(newvalue)
     }
   },
   
  },
  externalClasses: ['titleclass'],
  data:{
    counter:0
  },
  methods:{
    
handleinnercount(num){
this.setData({
  counter:this.data.counter+num
})
}
  }
})
