<template>
    <div class="notes-list">
        <div class="note-item" v-for="(note, index) in getNotes" :key="index">
            <div class="note-header">
                <p>{{ note.title }}</p>
                <p @click="removeNote(index)" class="note-remove">&#10005;</p>
            </div>
            <div class="note-footer">
                <UITagsList v-if="checkTagValue(note.tags)" :items="note.tags" isPreview/>
            </div>
        </div>
    </div>
</template>

<script>
import UITagsList from '../UI/UITagsList.vue';
import { getNotesLocalStorage } from '@/utils/notesLocalStorage'

export default {
    components: {
        UITagsList,
    },
    methods: {
        checkTagValue(arr) {
           return arr && arr.length > 0 ? true : false;
        },
        removeNote (index) {
            this.$store.dispatch("notes/removeNote", index);
        },
        initialNotes () {
            const initialNotes = getNotesLocalStorage();
            if (initialNotes) {
                this.$store.dispatch("notes/setNotes", initialNotes);
            }
        }
    },
    mounted() {
        this.initialNotes();
    },
    computed: {
        getNotes () {
            return this.$store.getters["notes/getNotes"];
        }
    },
}
</script>