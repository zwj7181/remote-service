declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $utils: any;
  }
}

interface Window {
  isWeixin: boolean
  dom: any
}
