<template>
  <div class="test">{{message}}</div>
</template>
<script>
export default {
  data () {
    return {
      message: 'test info from test'
    }
  }
}
</script>

<style>
.test {
  border: solid 3px #333;
  padding: 0.5em;
}
</style>
