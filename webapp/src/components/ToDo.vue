<template>
  <div class="todo">
    <input type="checkbox" v-bind:checked="todo.done" v-on="storeCheck(todo)"/>
    <span class="todo-title">
    <b-field>
          <div class="control is-block">
            <Button class="button is-link" v-on:click="deleteClick">Delete this</Button>
          </div>
    </b-field>
      {{ todo.title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props: {
    todo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  
  methods:{
    deleteClick(){
      console.log("button click gotten")
      this.$store.dispatch('deleteToDo', this.todo.id)
      },
    storeCheck(todo){
      console.log("checkbox checked")
      this.$store.dispatch('checkbox',todo)
    }
    }
};
</script>
