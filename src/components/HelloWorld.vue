<template>
  <!-- 上传照片 -->
  <div class="flex flex-col items-center justify-center min-h-screen">
    <input type="file" :id="inputId" @change="handleFileChange" class="hidden" />
    <input type="file" id="imgId" @change="handleFileChange" class="hidden" />
    <label for="imgId" class="cursor-pointer">
      <img v-if="photo" :src="photo" alt="Uploaded" class="w-48 h-48 object-cover rounded mt-4" />
    </label>
    <label v-if="!photo" :for="inputId"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
      选择照片
    </label>
    <div id="photoContainer" class="mt-4"></div>
    <!-- 显示时间 -->
    <div class="text-center text-2xl font-bold my-4">
      {{ currentDate }} {{ currentTime }}
    </div>
  </div>
  <!-- <div class="text-3xl py-3">Go Http-Server</div> -->
  <!-- <div class="w-full h-[1px] bg-gray-500"></div> -->
  <UploadModal ref="uploadRef" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import UploadModal from './UploadModal.vue';
import service from '../service/service';

interface FileItem {
  name: string;
  type: string;
  size: string;
  time: string;
}

export default defineComponent({
  components: {
    UploadModal,
  },
  setup(props, context) {

    const uploadRef = ref()

    const modalVisable = ref(false);

    const modalShow = ref(false);

    const photo = ref(null);

    const currentTime = ref('');

    const currentDate = ref('');

    const inputId = ref("a");

    // 计算属性，用于在每次重新上传时更新inputId
    const updateInputId = computed(() => {
      return randomNum();
    });
    function openFilePicker(): void {
      uploadRef.value.visible = true
    }

    const resetUpload = () => {
      photo.value = null;
      inputId.value = updateInputId.value;
    };

    function randomNum(): Number {
      let randomNumber = Math.floor(Math.random() * Math.pow(10, 9)) + Math.pow(10, 9);
      return randomNumber;
    }

    const handleFileChange = (e: any) => {
      // console.log(e)
      const file = e.target.files[0];
      if (file) {
        photo.value = null;
        const reader = new FileReader();
        reader.onloadend = () => {
          // console.log(reader.result)
          photo.value = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      currentDate.value = `${year}-${month}-${day}`;
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      currentTime.value = `${hours}:${minutes}:${seconds}`;
    };

    onMounted(() => {
      updateTime();
      const timer = setInterval(updateTime, 1000);
      return () => {
        clearInterval(timer);
      };
    });

    return {
      inputId,
      photo,
      currentTime,
      currentDate,
      updateTime,
      openFilePicker,
      modalVisable,
      uploadRef,
      resetUpload,
      handleFileChange
    }
  },
})

</script>