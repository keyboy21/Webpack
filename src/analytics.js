import $ from "jquery";
function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  const listener = () => counter++;
  $(document).on('click', listener)

  return {
    destroyAnalytics: () => {
      $(document).off('click', listener)
      isDestroyed = true;
    },
    getClicks: () => {
      if (isDestroyed) return `Analytics is destroyed. Total clicks ${counter}`;
      return counter
    }
  }
}


window.analytics = createAnalytics();