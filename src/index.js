import "@lottiefiles/lottie-player";

addEventListener("load", () => {
  const id = window.location.pathname.slice("/sticker/".length);
  if (/^\d{17,19}$/.test(id)) {
    const url = `/sticker/${id}/raw.json`;
    const player = document.querySelector("lottie-player");
    player.load(url);

    addEventListener("keydown", event => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();

        const a = document.createElement("a");
        a.href = url;
        a.download = `${id}.json`;

        console.log(a);
        a.click();
      }
    });
  } else if (window.location.pathname !== "/") {
    window.location.pathname = "/";
  }
});