exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  const locationPath = location.pathname.toLowerCase();
  const prevLocationPath = prevLocation
    ? prevLocation.pathname.toLowerCase()
    : "";

  if (locationPath !== prevLocationPath) {
    if (
      locationPath.startsWith("/theparkinsonproject") &&
      !location.pathname.startsWith("/TheParkinsonProject")
    )
      window.location.replace("/TheParkinsonProject/");

    if (
      locationPath.startsWith("/kiwi") &&
      !location.pathname.startsWith("/Kiwi")
    )
      window.location.replace("/Kiwi/");
  }
};

exports.registerServiceWorker = () => true;

exports.onServiceWorkerActive = () => {
  console.log("ServiceWorker active");
};

exports.onServiceWorkerInstalled = () => {
  console.log("ServiceWorker installed");
};

exports.onServiceWorkerRedundant = () => {
  console.log("ServiceWorker redundant");
};

exports.onServiceWorkerUpdateFound = () => {
  console.log("ServiceWorker update found");
};

exports.onServiceWorkerUpdateReady = () => {
  console.log("ServiceWorker update ready");

  if (
    window.confirm(
      "This page has been updated. " + "Reload to display the latest version?"
    )
  )
    window.location.reload();
};
