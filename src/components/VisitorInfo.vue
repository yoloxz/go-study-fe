<template>
  <div class="bg-gray-100 h-screen flex flex-col text-sm">
    <div
      class=" text-white px-4 py-2 bg-cover bg-[url('https://pub-53b47aa3e9104bfe8d99833d295b0ad5.r2.dev/banner.jpg')]">
      <div class=" flex pb-3">
        <div class="flex-grow"></div>
        <p class="text-xs">退出</p>
      </div>
      <div class="flex justify-between items-center py-2 text-xs">
        <div class="flex items-center w-full">
          <img src="../assets/user.svg" alt="User Icon" class="w-10 h-10 rounded-full mr-2">
          <p>赵* 188****5891</p>
          <div class="flex-grow"></div>
          <p>查看更多</p>
        </div>

      </div>
      <div class="mt-4">

        <div class="flex space-x-4 bg-blue-400 text-xs rounded justify-center">
          <div class="px-8 py-2  cursor-pointer">拜访申请</div>
          <div class="py-2">|</div>
          <div class="px-8 py-2 ">完善信息</div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center flex-grow">
      <div class="max-w-md w-full h-full mx-auto z-10 bg-gray-300">
        <div class="flex flex-col h-full">
          <div class="bg-white relative h-full rounded-xl p-4 m-4">
            <div class="flex-none sm:flex">
              <div class=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                  alt="aji" class=" w-32 h-32 object-cover rounded-2xl">
                <a href="#"
                  class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                    <path
                      d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                    </path>
                  </svg>
                </a>
              </div>
              <div class="flex-auto justify-evenly">
                <div class="flex">
                  <!-- 一寸照片 -->
                  <div class="w-28 h-40">
                    <!-- <div class="text-xs w-full pb-[140%] bg-gray-300 rounded p-4 cursor-pointer">点击上传图片</div> -->
                    <input type="file" id="inputId" @change="handleFileChange" class="hidden" />
                    <input type="file" id="imgId" @change="handleFileChange" class="hidden" />
                    <label for="imgId" class="cursor-pointer">
                      <img v-if="photo" :src="photo" alt="Uploaded" class="w-28 h-40 object-cover rounded" />
                    </label>
                    <label v-if="!photo" for="inputId"
                      class="block text-xs w-full h-full bg-gray-300 rounded p-4 cursor-pointer">
                      选择照片
                    </label>
                  </div>
                  <div class=" mb-4 px-3 text-xs">
                    <p class="text-blue-500 text-sm pb-4">赵烨 (临时访客)</p>
                    <p>您好，</p>
                    <p>您的报备信息已审核通过!</p>
                  </div>
                </div>
                <div class="text-center pt-4 font-bold">
                  <p>{{ currentDate }} {{ currentTime }}</p>
                </div>
                <div class="border-b border-dotted border-b-2 my-5">
                  <div class="absolute rounded-full w-5 h-5 bg-gray-300 -mt-2 -left-2"></div>
                  <div class="absolute rounded-full w-5 h-5 bg-gray-300 -mt-2 -right-2"></div>
                </div>
                <div class="mb-4">
                  <p>出入园区范围</p>
                </div>
                <div class="grid grid-cols-2 gap-4 text-white">
                  <div
                    class="relative bg-green-600 bg-cover bg-[url('https://pub-53b47aa3e9104bfe8d99833d295b0ad5.r2.dev/button-green.jpg')]  px-4 py-10 rounded">
                    <p class="absolute top-0 left-0 text-[0.6rem] p-2">主楼</p>
                  </div>
                  <div
                    class="relative bg-gray-300 px-4 py-10 rounded bg-cover bg-[url('https://pub-53b47aa3e9104bfe8d99833d295b0ad5.r2.dev/button-gray.jpg')]">
                    <p class="absolute top-0 left-0 text-[0.6rem] p-2">服务楼</p>
                  </div>
                  <div
                    class="relative bg-gray-300 px-4 py-10 rounded bg-cover bg-[url('https://pub-53b47aa3e9104bfe8d99833d295b0ad5.r2.dev/button-gray.jpg')]">
                    <p class="absolute top-0 left-0 text-[0.6rem] p-2">数据楼</p>
                  </div>
                  <div
                    class="relative bg-gray-300 px-4 py-10   rounded bg-cover bg-[url('https://pub-53b47aa3e9104bfe8d99833d295b0ad5.r2.dev/button-gray.jpg')]">
                    <p class="absolute top-0 left-0 text-[0.6rem] p-2">机房楼</p>
                  </div>
                </div>
                <div class="mt-6 text-sm">
                  <p>报备信息审核人员</p>
                  <p class="mt-3 text-xs">工程建设部/云网建设项目组</p>
                  <p class="text-xs">郭瑞 13609190852</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';


export default defineComponent({
  name: 'VisitorInfo',

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

<style>
.barcode {
  left: 50%;
  box-shadow: 1px 0 0 1px, 5px 0 0 1px, 10px 0 0 1px, 11px 0 0 1px, 15px 0 0 1px, 18px 0 0 1px, 22px 0 0 1px, 23px 0 0 1px, 26px 0 0 1px, 30px 0 0 1px, 35px 0 0 1px, 37px 0 0 1px, 41px 0 0 1px, 44px 0 0 1px, 47px 0 0 1px, 51px 0 0 1px, 56px 0 0 1px, 59px 0 0 1px, 64px 0 0 1px, 68px 0 0 1px, 72px 0 0 1px, 74px 0 0 1px, 77px 0 0 1px, 81px 0 0 1px, 85px 0 0 1px, 88px 0 0 1px, 92px 0 0 1px, 95px 0 0 1px, 96px 0 0 1px, 97px 0 0 1px, 101px 0 0 1px, 105px 0 0 1px, 109px 0 0 1px, 110px 0 0 1px, 113px 0 0 1px, 116px 0 0 1px, 120px 0 0 1px, 123px 0 0 1px, 127px 0 0 1px, 130px 0 0 1px, 131px 0 0 1px, 134px 0 0 1px, 135px 0 0 1px, 138px 0 0 1px, 141px 0 0 1px, 144px 0 0 1px, 147px 0 0 1px, 148px 0 0 1px, 151px 0 0 1px, 155px 0 0 1px, 158px 0 0 1px, 162px 0 0 1px, 165px 0 0 1px, 168px 0 0 1px, 173px 0 0 1px, 176px 0 0 1px, 177px 0 0 1px, 180px 0 0 1px;
  display: inline-block;
  transform: translateX(-90px);
}
</style>