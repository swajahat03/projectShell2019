import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { stat } from "fs";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    todos: [
      {
        id: 1,
        done: false,
        title: "Test Todo1"
      },
      {
        id: 2,
        done: false,
        title: "Test Todo2"
      }
    ]
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [...state.todos, {...todo, done: false, id: state.todos.length+1}];
    },

    checkbox(state, todo) {
      state.todos[todo.id -1].done = !state.todos[todo.id-1].done;
    },

    deleteToDo(state, todo_id) {
     for (var i = 0; i  <= state.todos.length; i++) {
       state.todos = state.todos.filter(function(todo){
         return todo_id != todo.id;
       });
     }
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      // debugger;
      commit("addToDo", toDo);
    },
    deleteToDo({ commit }, toDo) {
      commit("deleteToDo", toDo);
    },
    checkbox({commit}, toDo) {
      commit("checkbox", toDo)
    }
  }
});
