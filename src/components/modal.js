export default {
    show() {
        let dom = document.createElement("div");
        dom.classList.add("v-modal");
        dom.classList.add("v-modal-enter");

        setTimeout(() => {
            dom.classList.remove("v-modal-enter");
        }, 200);

        document.body.appendChild(dom);
    }
}