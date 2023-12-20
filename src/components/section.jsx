/**
 *
 * @param {import("react").DetailsHTMLAttributes} param0
 * @returns {import("react").ReactNode}
 */
export default function Section({ className = "", children, ...rest }) {
  return (
    <section
      {...rest}
      className={"w-full md:max-w-4xl lg:max-w-[1110px] mx-auto py-16 md:py-20 px-5 scroll-mt-6 "
        .concat(className)
        .trim()}
    >
      {children}
    </section>
  );
}
