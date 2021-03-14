<template>
<!-- 学习资料来源为掘金 -->
  <div class="angle-container">
    <div class="angle-left">
      <div class="angle-form">
        <div class="sub-title">方向:</div>
        <el-radio-group v-model="radio" @change="handleChange">
          <el-radio
            :label="item.id"
            v-for="(item, index) in panlist"
            :key="item.id"
            >{{ item.text }}</el-radio
          >
        </el-radio-group>
      </div>

      <div class="angle-form" v-for="(item, index) in cList" :key="index">
        <div class="sub-title">{{ item.name }}：</div>
        <div class="angle-slider">
          <el-slider
            v-model="item.value"
            v-if="item.type === 'slider-picker'"
            :max="item.max"
            @change="
              (val) => {
                handleChange(val, item);
              }
            "
          ></el-slider>
          <el-color-picker
            v-model="item.value"
            show-alpha
            v-if="item.type === 'color-picker'"
            :predefine="predefineColors"
            @change="
              (val) => {
                handleChange(val, item);
              }
            "
          >
          </el-color-picker>
        </div>
      </div>
    </div>
    <div class="angle-right">
      <div class="angle-three"></div>
      <!-- 三角形 -->
      <div class="angle-warp">
        <div class="angle-shape" ref="D3Ref"></div>
      </div>
    </div>
  </div>
  <!-- 代码区域展示模块 -->
  <div class="angle-context">
    <h2>CSS 代码</h2>
    <div class="angle-code" contenteditable="true">{{showStr}}</div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  setup() {
    const radio = ref(1);
    const showStr = ref('');
    const D3Ref = ref(null);
    const panlist = [
      {
        id: 1,
        text: "上",
      },
      {
        id: 2,
        text: "下",
      },
      {
        id: 3,
        text: "左",
      },
      {
        id: 4,
        text: "右",
      },
    ];
    const predefineColors = [
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
      "hsva(120, 40, 94, 0.5)",
      "hsl(181, 100%, 37%)",
      "hsla(209, 100%, 56%, 0.73)",
      "#c7158577",
    ];
    const cList = reactive([
      {
        name: "宽度",
        value: 60,
        max: 200,
        type: "slider-picker",
      },
      {
        name: "高度",
        value: 60,
        max: 200,
        type: "slider-picker",
      },
      {
        name: "旋转角度",
        value: 0,
        max: 360,
        type: "slider-picker",
      },
      {
        name: "颜色块",
        value: "rgba(0,0,0,1)",
        type: "color-picker",
      },
    ]);
    onMounted(() => {
      getChange();
    });
    function getChange() {
      let w = cList[0].value,
        h = cList[1].value,
        _roate = cList[2].value,
        _color = cList[3].value,
        dirction,
        borderWidth;
      switch (radio.value) {
        case 1:
          dirction = `transparent transparent ${_color}`;
          borderWidth = `0 ${(w / 2)}px ${h}px ${(w / 2)}px`;
          break;
        case 2:
          dirction = `${_color} transparent transparent`;
          borderWidth = `${h}px ${(w / 2)}px 0 ${(w / 2)}px`;
          break;
        case 3:
          dirction = `transparent ${_color} transparent transparent`;
          borderWidth = `${(h / 2)}px ${w}px  ${(h / 2)}px 0`;
          break;
        case 4:
          dirction = `transparent transparent transparent ${_color}`;
          borderWidth = `${(h / 2)}px 0  ${(h / 2)}px ${w}px`;
          break;
      }
      let styl = `transform:rotate(${_roate}deg);border-width:${borderWidth};border-color:${dirction}`;
      D3Ref.value.style = styl;
      showString(_roate,borderWidth,dirction);
    }

    function showString(_roate,borderWidth,dirction) {
      let obj = {
        display: "inline-block",
        width: "0",
        height: "0",
        "border-style": "solid",
        transform:`rotate(${_roate}deg)`,
        'border-width':`${borderWidth}`,
        'border-color':`${dirction}`
      };
      showStr.value = JSON.stringify(obj,null,4).replaceAll(/"/g, '').replaceAll(/,\n/g, ';\n');
    }
    function handleChange(row, item) {
      getChange();
    }
    return {
      radio,
      panlist,
      predefineColors,
      cList,
      D3Ref,
      handleChange,
      showStr
    };
  },
};
</script>

<style lang="scss" scoped>
.common_box {
  width: 38%;
  display: flex;
  margin: 60px auto 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 4px;
}
.white {
  background-color: #fff;
}

.angle-container {
  height: 450px;
  background-color: #fafafa;
  @extend .common_box;
  .angle-left,
  .angle-right {
    width: 50%;
    @extend .white;
  }
  .angle-left {
    padding: 10px 20px;
    .angle-form {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      line-height: 1;
      .sub-title {
        margin-right: 10px;
      }
      .angle-slider {
        flex: 2;
      }
    }
  }
  .angle-right {
    background-image: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.2) 25%,
        transparent 0,
        transparent 75%,
        rgba(0, 0, 0, 0.2) 0
      ),
      linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.2) 25%,
        transparent 0,
        transparent 75%,
        rgba(0, 0, 0, 0.2) 0
      );
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    margin: 10px;
    position: relative;
  }
  .angle-warp {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .angle-shape {
    transition: all 0.5s;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
  }
}

.angle-context {
  @extend .common_box, .white;
  height: 260px;
  top: 456px;
  display: block;
  h2 {
    padding: 10px;
    text-shadow: 0 2px white;
    color: #b8bec5;
  }

  .angle-code {
    padding: 4px;
    overflow: auto;
    white-space: pre-wrap;
    color: rgba(0,0,0,.7);
    height: calc(100% - 50px);
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #a1a3a9;
      border-radius: 2px;
    }
  }
}
</style>
