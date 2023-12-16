<template>
    <div @click="handleClick" :class="{ 'button__active': active, 'button__default': !active }">
        <span class="button button__large">{{ label }}</span>
    </div>
</template>
  
<script>
export default {
    props: {
        label: String,
        active: Boolean,
    },
    methods: {
        handleClick() {
            this.$emit('toggleActive', this.label);
        },
    },
};
</script>
  
<style scoped>
div {
    cursor: pointer;
    padding: 12px;
    border-radius: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button__active {
    border-radius: 90px;
}

@media (max-width: 144px) {
    div {
        max-width: 100%;
    }
}
</style>
  