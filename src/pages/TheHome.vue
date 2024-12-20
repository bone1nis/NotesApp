<template>
    <div class="md-body">
        <NotesForm />
        <NotesList />
    </div>
</template>

<script>
import NotesForm from "@/components/Notes/NotesForm.vue"
import NotesList from "@/components/Notes/NotesList.vue"

export default {
    components: {
        NotesForm,
        NotesList,
    },
}
</script>