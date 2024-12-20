<template>
    <div class="tags-list">
        <div 
            class="tag-item" 
            v-for="(tag, index) in items" 
            :key="index" 
            @click="isActive && this.$emit('onTagClick', tag)"
            :class="{ isPreview: isPreview, isActive: selectedTags && selectedTags.includes(tag)}"
        >
            <span>{{ tag }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        isPreview: {
            type: Boolean,
            default: false
        },
        isActive: {
            type: Boolean,
            default: false
        },
        selectedTags: {
            type: Array
        }
    },
}
</script>