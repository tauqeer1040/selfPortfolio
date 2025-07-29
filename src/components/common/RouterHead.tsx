import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>
        {"Tauqeer Ahmed | Web Developer First Choice"}
      </title>

      <link rel="canonical" href={String(loc.url)} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/webp" href="/images/man-technologist_1f468-200d-1f4bb.webp" />


      {head.meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}

      {head.links.map((l, i) => (
        <link key={i} {...l} />
      ))}

      {head.styles.map((s, i) => (
        <style key={i} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
