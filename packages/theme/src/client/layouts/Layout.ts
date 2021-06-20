import { defineComponent, h } from "vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import Common from "@Common";
import FadeSideY from "../components/transitions/FadeSlideY";
import Home from "../components/Home.vue";
import Page from "../components/Page.vue";

import type { VNode } from "vue";
import type { HopeThemePageFrontmatter } from "../../shared";

export default defineComponent({
  name: "Layout",

  setup() {
    const page = usePageData();
    const frontmatter = usePageFrontmatter<HopeThemePageFrontmatter>();

    return (): VNode =>
      h(
        Common,
        frontmatter.value.home
          ? h(Home)
          : h(FadeSideY, h(Page, { key: page.value.path }))
      );
  },
});
