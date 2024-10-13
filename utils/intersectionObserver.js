import { onMounted, onUnmounted } from 'vue';

export const createObserver = (elementRefs, visibilityRefs) => {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (Array.isArray(elementRefs.value)) {
        // Handle multiple refs case
        const index = elementRefs.value.findIndex(el => el.value === entry.target)
        if (index !== -1) {
          visibilityRefs[index].value = entry.isIntersecting;
        }
      } else {
        // Handle single ref case
        if (entry.target === elementRefs.value) {
          visibilityRefs.value = entry.isIntersecting;
        }
      }
    });
  });

  onMounted(() => {
    if (Array.isArray(elementRefs.value)) {
      // Observe multiple refs
      elementRefs.value.forEach((elementRef) => {
        if (elementRef.value) observer.observe(elementRef.value);
      });
    } else {
      // Observe single ref
      if (elementRefs.value) observer.observe(elementRefs.value);
    }
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
};
