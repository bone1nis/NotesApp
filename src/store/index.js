import { createStore } from "vuex";
import { addNotesLocalStorage } from "@/utils/notesLocalStorage";

const notesModule = {
    namespaced: true,
    state: {
        notes: [
            {
                title: "Помыть посуду",
                tags: ["home"]
            },
            {
                title: "Закончить отчет",
                tags: ["work"]
            }
        ]
    },
    mutations: {
        setNotes (state, notes) {
            state.notes = notes;
            addNotesLocalStorage(state.notes);
        },
        addNote (state, note) {
            state.notes.push(note);
            addNotesLocalStorage(state.notes);
        },
        removeNote (state, index) {
            state.notes.splice(index, 1);
            addNotesLocalStorage(state.notes);
        }
    },
    actions: {
        setNotes ({ commit }, notes) {
            commit("setNotes", notes);
        },
        addNote ({ commit }, note) {
            commit("addNote", note);
        },
        removeNote ({ commit }, index) {
            commit("removeNote", index);
        }
    },
    getters: {
        getNotes (state) {
            return state.notes
        }
    },
};

export const store = createStore({
    modules: {
        notes: notesModule
    }
});