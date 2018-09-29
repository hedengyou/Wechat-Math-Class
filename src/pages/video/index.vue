<template>
  <div>
    <video :src="videoUrl"></video>
  </div>  
</template>
<script>
import API from '../../utils/services';

export default {
  data() {
    return {
      videoUrl: ''
    };
  },
  mounted() {
    const option = this.$root.$mp.query;
    const { id } = option;
    if (id) {
      API.getVideoUrl(id).then(data => {
        this.videoUrl = data;
      });
    }
  }
}
</script>
<style>

</style>
