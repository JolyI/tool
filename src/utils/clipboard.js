import Vue from "vue";
import Clipboard from "clipboard";

function clipboardSuccess() {
  Vue.prototype.$toast({
    message: "已复制到剪切板"
  });
}

function clipboardError() {
  Vue.prototype.$toast({
    message: "复制失败"
  });
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  });
  clipboard.on("success", () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
