<template>
    <div class="note-form__wrapper">
        <form @submit.prevent="addNote" class="note-form">
            <textarea type="text" v-model="value" placeholder="Введите заметку" required class="note-textarea"/>
            <UITagsList :items="tags" isActive :selectedTags="selectedTags" @onTagClick="handleTagClick"/>
            <button type="submit" class="btnPrimary note-btn">Добавить</button>
        </form>
    </div>
</template>


<script>
import UITagsList from '../UI/UITagsList.vue';

export default {
    components: {
        UITagsList,
    },
    data () {
        return {
            value: "",
            tags: ["home", "work", "travel"],
            selectedTags: [],
        }
    },
    methods: {
        addNote() {
            this.$store.dispatch("notes/addNote", {title: this.value, tags: this.selectedTags});
            this.value = ""; 
            this.selectedTags = [];
        },
        handleTagClick(tag) {
            if ( !(this.selectedTags.includes(tag)) ) {
                this.selectedTags.push(tag);
            } else {
                this.selectedTags = this.selectedTags.filter(t => t !== tag);
            }
        },
    },
}
</script>