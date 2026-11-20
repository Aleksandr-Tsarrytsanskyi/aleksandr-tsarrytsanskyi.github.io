
  const navigation = performance.getEntriesByType("navigation")[0];

  if (
    navigation?.type === "reload" &&
    window.location.hash &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    history.scrollRestoration = "manual";

    history.replaceState(
      history.state,
      "",
      window.location.pathname + window.location.search
    );

    window.addEventListener("load", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      history.scrollRestoration = "auto";
    }, { once: true });
  }
