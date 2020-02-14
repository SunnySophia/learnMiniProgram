// components/my-slot/my-slot.js
Component({
  options:{
    multipleSlots:true//使用多个插槽
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  //组件中监听页面生命周期函数
pageLifetimes:{
  show(){
    console.log('监听组件所在页面显示出来')
  },
  hide(){
    console.log("组件所在的页面隐藏起来")
  }
},
  //组件内部的生命周期
  lifetimes:{
    created(){
      console.log('组件被创建出来')
    },
    attached(){
      console.log('组件被添加到页面')
    },
    ready(){
      console.log("组件在页面中渲染")
    },
    moved(){
      console.log("组件被移动到另一个节点")
    },
    detached(){
      console.log('组件被移除掉')
    }
  }
})
