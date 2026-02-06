const Footer = () => {
  return (
    <footer
      className="
        bg-[var(--wine)] text-[var(--offwhite)]
        font-[var(--sans)]
        border-t
        border-[color-mix(in_srgb,var(--offwhite),transparent_70%)]
      "
    >
      <div
        className="
          mx-auto max-w-7xl
          px-6 py-20
          flex flex-col gap-6
        "
      >
        <p
          className="
            font-[var(--serif)]
            text-3xl sm:text-4xl
          "
        >
          Neem contact op
        </p>

        <p className="text-lg">
          <a
            href="mailto:rickysaarloos@gmail.com"
            className="
              underline underline-offset-4
              decoration-[color-mix(in_srgb,var(--offwhite),transparent_60%)]
              hover:decoration-[var(--offwhite)]
              transition
            "
          >
            rickysaarloos@gmail.com
          </a>
        </p>

        <p className="text-lg opacity-80">
          +31&nbsp;6&nbsp;12101710
        </p>

        <p
          className="
            pt-10 text-sm
            opacity-60
          "
        >
          © 2025 Ricky Saarloos{" "}
          <span className="italic font-[var(--serif)]">
            let’s create
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

