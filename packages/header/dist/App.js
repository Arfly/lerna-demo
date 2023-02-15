import { defineComponent, ref, resolveComponent, openBlock, createBlock, withCtx, createVNode, createTextVNode } from 'vue';

var script = /*#__PURE__*/ defineComponent({
    __name: 'App',
    setup(__props) {
        ref('1');
        const activeIndex2 = ref('1');
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath);
        };
        return (_ctx, _cache) => {
            const _component_el_menu_item = resolveComponent("el-menu-item");
            const _component_el_sub_menu = resolveComponent("el-sub-menu");
            const _component_el_menu = resolveComponent("el-menu");
            return (openBlock(), createBlock(_component_el_menu, {
                "default-active": activeIndex2.value,
                class: "el-menu-demo",
                mode: "horizontal",
                "background-color": "#545c64",
                "text-color": "#fff",
                "active-text-color": "#ffd04b",
                onSelect: handleSelect
            }, {
                default: withCtx(() => [
                    createVNode(_component_el_menu_item, { index: "1" }, {
                        default: withCtx(() => [
                            createTextVNode("Processing Center")
                        ]),
                        _: 1 /* STABLE */
                    }),
                    createVNode(_component_el_sub_menu, { index: "2" }, {
                        title: withCtx(() => [
                            createTextVNode("Workspace")
                        ]),
                        default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "2-1" }, {
                                default: withCtx(() => [
                                    createTextVNode("item one")
                                ]),
                                _: 1 /* STABLE */
                            }),
                            createVNode(_component_el_menu_item, { index: "2-2" }, {
                                default: withCtx(() => [
                                    createTextVNode("item two")
                                ]),
                                _: 1 /* STABLE */
                            }),
                            createVNode(_component_el_menu_item, { index: "2-3" }, {
                                default: withCtx(() => [
                                    createTextVNode("item three")
                                ]),
                                _: 1 /* STABLE */
                            }),
                            createVNode(_component_el_sub_menu, { index: "2-4" }, {
                                title: withCtx(() => [
                                    createTextVNode("item four")
                                ]),
                                default: withCtx(() => [
                                    createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                        default: withCtx(() => [
                                            createTextVNode("item one")
                                        ]),
                                        _: 1 /* STABLE */
                                    }),
                                    createVNode(_component_el_menu_item, { index: "2-4-2" }, {
                                        default: withCtx(() => [
                                            createTextVNode("item two")
                                        ]),
                                        _: 1 /* STABLE */
                                    }),
                                    createVNode(_component_el_menu_item, { index: "2-4-3" }, {
                                        default: withCtx(() => [
                                            createTextVNode("item three")
                                        ]),
                                        _: 1 /* STABLE */
                                    })
                                ]),
                                _: 1 /* STABLE */
                            })
                        ]),
                        _: 1 /* STABLE */
                    }),
                    createVNode(_component_el_menu_item, {
                        index: "3",
                        disabled: ""
                    }, {
                        default: withCtx(() => [
                            createTextVNode("Info")
                        ]),
                        _: 1 /* STABLE */
                    }),
                    createVNode(_component_el_menu_item, { index: "4" }, {
                        default: withCtx(() => [
                            createTextVNode("Orders")
                        ]),
                        _: 1 /* STABLE */
                    })
                ]),
                _: 1 /* STABLE */
            }, 8 /* PROPS */, ["default-active"]));
        };
    }
});

script.__file = "src/App.vue";

export { script as default };
