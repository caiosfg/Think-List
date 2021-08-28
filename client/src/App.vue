<template>
  <div id="app">
    <h1>Tarefas</h1>
    <NewTask @taskAdded="addTask" />
    <TaskGrid 
        @taskDeleted="deleteTask" 
        @taskStateChanged="toogleTaskState" 
        :tasks="tasks" />
  </div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import axios from "axios";

export default {
  name: 'App',
  components:{ NewTask, TaskGrid},
  data(){
    return {
       tasks: null
    }
  },
  mounted(){
    axios.get("http://localhost:3000/")
      .then(res => {
          this.tasks = res.data
      })
      .catch(error => {
          console.log(error);
      })
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
