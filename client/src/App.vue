<template>
  <div id="app">
    <h1>Tarefas</h1>
    <task-progress :progress="progress" />
    <NewTask @taskAdded="addTask" />
    <TaskGrid 
        @taskDeleted="deleteTask" 
        @taskStateChanged="toogleTaskState" 
        :tasks="tasks" />
  </div>
</template>

<script>
import TaskProgress from './components/TaskProgress.vue'
import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import axios from "axios";

export default {
  name: 'App',
  components:{ NewTask, TaskGrid, TaskProgress},
  data(){
    return {
       tasks: null,
       total : 0
    }
  },
  computed: {
    progress(){
      const done =  this.tasks?.filter(t => !t.pending).length
      return Math.round(done / this.total * 100) || 0
    }
  },
  watch:{
    tasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  },
  mounted(){
    axios.get("http://localhost:3000/")
      .then(res => {
          this.tasks = res.data
          this.total = this.tasks.length
      })
      .catch(error => {
          console.log(error);
      })
  },
  created(){
    const json = localStorage.getItem('tasks')
    this.tasks = JSON.parse(json) || []
  },
  methods: {
    addTask(task){
      const sameName = t => t.name === task.name
      const reallyNew = this.tasks.filter(sameName).length == 0
      reallyNew && this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
    },
    deleteTask(i){
      this.tasks.splice(i, 1)
    },
    toogleTaskState(i){
      this.tasks[i].pending = !this.task[i].pending
    }
  }
}
</script>

<style>
#app {
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
