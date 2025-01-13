<template>
  <VisitorInfo />
  <!-- <div class="text-3xl py-3">Go Http-Server</div> -->
  <!-- <div class="w-full h-[1px] bg-gray-500"></div> -->
  <UploadModal ref="uploadRef" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import UploadModal from './UploadModal.vue';
import VisitorInfo from './VisitorInfo.vue';
// import service from '../service/service';

// interface FileItem {
//   name: string;
//   type: string;
//   size: string;
//   time: string;
// }

export default defineComponent({
  components: {
    UploadModal,
    VisitorInfo
  },

  setup() {

    const uploadRef = ref()

    const modalVisable = ref(false);

    // const modalShow = ref(false);

    const photo = ref<any>(null);

    const currentTime = ref('');

    const currentDate = ref('');

    const inputId = ref("a");

    function openFilePicker(): void {
      uploadRef.value.visible = true
    }

    const resetUpload = () => {
      photo.value = null;
    };

    // function randomNum(): Number {
    //   let randomNumber = Math.floor(Math.random() * Math.pow(10, 9)) + Math.pow(10, 9);
    //   return randomNumber;
    // }

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
