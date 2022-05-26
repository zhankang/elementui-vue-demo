<template>
    <div>
        <div>card demo</div>
        <div>
            <Card>
                <div slot="header">title</div>
                <div>content</div>
            </Card>
        </div>
    </div>
</template>

<script>

import Card from "element-ui/packages/card/src/main.vue"


export default {
    components : {Card}
    
}
</script>

<style>

</style>