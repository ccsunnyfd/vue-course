<template>
  <div>
    <slot name="left"></slot><span :class="countClass" :id="eleId"></span><slot name="right"></slot>
  </div>
</template>
<script>
import CountUp from "countup";
import { setTimeout } from "timers";
export default {
  name: "CountTo",
  computed: {
    eleId() {
      return `count_up_${this._uid}`;
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 动画延迟开始时间，单位为毫秒
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长
     */
    durations: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组分隔符
     */
    separator: {
      type: String,
      default: ","
    },
    /**
     * @description 整数和小数分隔符
     */
    decimal: {
      type: String,
      default: "."
    },
    className: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(
        this.eleId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.durations,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        }
      );
      setTimeout(() => {
        this.counter.start();
      }, this.delay);
    });
  }
};
</script>
<style lang="less">
@import './count-to.less';
</style>

