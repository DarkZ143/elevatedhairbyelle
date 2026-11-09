import Image from "next/image";
import HeroImageReveal from "./hero-image-reveal";
import SiteHeader from "./site-header";

const bookingUrl = "https://www.vagaro.com/saintblonde";
const instagramUrl = "https://www.instagram.com/elevatedhairbyelle";
const mapUrl =
  "https://maps.google.com/?q=315+5th+Street+Unit+140+West+Des+Moines+IA+50265";

const services = [
  {
    number: "01",
    label: "Flagship focus",
    title: "Luxury hand-tied extensions",
    description:
      "Featuring the Invisible Bead Extensions® method. Seamless movement, thoughtful weight distribution, and custom color-melted rows tailored to your hair.",
    features: [
      "Volume, length and hybrid transformations",
      "Tension-conscious installation",
      "Ethical human Remy hair",
    ],
    note: "By consultation",
    action: "Book a consult",
  },
  {
    number: "02",
    label: "Lived-in artistry",
    title: "Dimensional color & blonding",
    description:
      "Custom balayage, lived-in brightness, lowlight weaving and seamless base melts, designed to soften beautifully as your color grows out.",
    features: [
      "Signature sun-kissed blonding",
      "Dimensional brunettes and bronde",
      "Gloss, shadow root and tone refresh",
    ],
    note: "Custom formulated",
    action: "Reserve a seat",
  },
  {
    number: "03",
    label: "Care & longevity",
    title: "Re-installation & hair health",
    description:
      "Maintenance appointments keep your extensions feeling comfortable and your natural hair cared for, with a routine shaped around your needs.",
    features: [
      "IBE® move-up appointments",
      "Scalp detox and hydration ritual",
      "Personalized take-home regimen",
    ],
    note: "For current & new guests",
    action: "View appointment times",
  },
];

const gallery = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMYx3N__qY7_mzhadaOzyEoSYWNGGt0mgMFHy52xkUnHr1Vwzbb3G0Pm6E188dbQ18qI5eSMn2tx0vBP5LZSMpY4wYHO7Bwn9LAOD2WsYUpGsRfQflU8-44PbRky90zx8wGdYzA2Q8Fa_t1UFNCBMtWIivsErwPc9XAM2mG-eDlNjSGBQ74frDYx8xxfuW9RCbIPgqMD-pZDMmk8N5WumovvVIuQSdAGjMWNE8ply0",
    alt: "Soft, dimensional honey blonde waves in warm natural light",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSgIHQpdAAXIUn--NsMR7ijyYBt3jGShGojxhtSjX7QLN_FzFPSrksNhw7UMI0MwwczdqVHj4kms7bJaR-la_zrlIq1-sgGTf_pysbmmTBZGl0Vi0XNEOy44nLnq-okUDt_CApG7CweNJ5uzB7n0OXiLvuQE9HlgsywR8MD83heu7xH9vk3ByqsLZYOK0cIxPA3VzcpbEVg_VgqrrTQ4qwv7HY7x0QpuiX-zeFc4zb",
    alt: "Rich brunette hair with soft, hand-painted caramel ribbons",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyHXjQoYAf4TH7Eq9Xb2vNTom_ShHLW-i6yNsOjzOB7C2xUb_rG--PQh6hj_rZo8cV3lYAmjWgKHQN_pwM_6SVycJCJMMwOmYJcSFFS95osvr1fjBLCrJmhZipOhVYWDdXELZEij_QCdvMJGTePjVvBUL5obY0YVC6087vn_J4KJnn0kK05V6a548nEWUlV5Pl1gYr5wSkfGaV6T3duHUnDDcH6TVkPHpRads-B4eW",
    alt: "Careful extension row placement during an appointment",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPoHmY8wqmRVKEMzxIU4mLDRROU9vXl3AKdodnoL97nO8pt5fB5LXbcjj0WrY7kFMEayZq4AjsiUlrbQQ48u9saz1M-LW1MDuwJaQQll-sW4dk3H5wen-J4M_hV1_kWBiP-RJcbXvhwj5HY3xcL-ytAnHCGzxzJlKvSvGnKo3V-ZZkdKa8fOhy8fuOGtLySyfVJkAqJsieBDJZfqK7pP1ig99VIXg9IXyeFTOEUMOV",
    alt: "Finished dimensional blonde blowout with soft, effortless waves",
  },
];

const reviews = [
  {
    quote:
      "Elle completely changed how I feel about my fine hair. You literally cannot feel the wefts and the color match is so seamless people think it is completely mine. Truly elevated.",
    name: "Lauren M.",
    service: "2 Rows IBE® + Lived-In Blonde",
  },
  {
    quote:
      "I drive over an hour each way just to see Elle at Saint Blonde. Her lived-in blonde grow out is like nothing I’ve ever had before — my hair stays healthy and glowing for months.",
    name: "Clara S.",
    service: "Dimensional Bronde & Gloss",
  },
  {
    quote:
      "Elle’s studio space is so serene. She listened carefully to my goals, gave honest recommendations, and handed me the most natural, voluminous hair of my life.",
    name: "Hannah B.",
    service: "Full Volume Transformation",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="external-icon">
      <path d="M7 5h8v8M15 5 6 14" />
      <path d="M13 11v4H5V7h4" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              Des Moines luxury hair atelier
            </p>
            <p className="script-line">Let’s enhance your natural beauty</p>
            <h1 id="hero-title">
              Your Des Moines hairstylist for <em>elevated color</em> +
              extensions.
            </h1>
            <p className="hero-intro">
              Specializing in lived-in blonde dimension, seamless hand-tied
              extensions, and restorative hair wellness. Nestled in Historic
              Valley Junction at Saint Blonde Salon, each appointment is an
              intentional, one-on-one sanctuary.
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Reserve your appointment
                <ExternalIcon />
              </a>
              <a className="text-link" href="#services">
                Explore signature menu <ArrowIcon />
              </a>
            </div>
            <div className="hero-notes" aria-label="Credentials and salon">
              <div>
                <strong>IBE® Certified</strong>
                <span>Invisible Bead Extensions</span>
              </div>
              <div>
                <strong>Saint Blonde</strong>
                <span>West Des Moines partner</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-backdrop" />
            <figure className="hero-photo">
              <HeroImageReveal
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnShDpIimlGOGdqn_jt-46CGx9uEgc8V5-jY4M8uR27-Id5gt5T1bVe1ej9ZiBOO0-djneEUEztrAobk7-jzotH4AqgfIb-F3fcK2EQZn3smWl30zA0zkyivH-pdHS5TmJZLdJxvFCPm77nSl5HkK2UnYLp76Uj1UDKQAO5O0njGylNeX20LpbokcJrU3MaSpYYUeRGMBIWN4EOaxgoUH8a23IncBd-VEUzE3M3VfW"
                alt="Lived-in sunlit dimensional hair transformation by Elle at Elevated By Elle"
                sizes="(max-width: 760px) 86vw, (max-width: 1100px) 55vw, 42vw"
              />
              <span className="photo-shade" />
              <figcaption className="photo-note">
                <span className="availability">
                  <span className="availability-dot" />
                  Now welcoming new guests
                </span>
                <strong>Elevating your confidence</strong>
                <span>
                  Custom hand-tied wefts &amp; lived-in blonde artistry, crafted
                  for you.
                </span>
              </figcaption>
            </figure>
            <span className="image-caption">A softer kind of statement</span>
          </div>
        </section>

        <section className="ribbon" aria-label="Elevated By Elle services">
          <div className="marquee-track">
            <div className="marquee-group">
              <span>Elevating your confidence</span><i>✳</i>
              <span>Effortless dimensional color</span><i>✳</i>
              <span>Luxury hand-tied extensions</span><i>✳</i>
              <span>West Des Moines atelier</span><i>✳</i>
            </div>
            <div className="marquee-group" aria-hidden="true">
              <span>Elevating your confidence</span><i>✳</i>
              <span>Effortless dimensional color</span><i>✳</i>
              <span>Luxury hand-tied extensions</span><i>✳</i>
              <span>West Des Moines atelier</span><i>✳</i>
            </div>
          </div>
        </section>

        <section className="philosophy section page-width" id="about">
          <div className="section-heading">
            <p className="eyebrow">Our core philosophy</p>
            <h2>Thoughtful dimension that grows out like poetry.</h2>
          </div>
          <div className="philosophy-copy">
            <p>
              At Elevated By Elle, hair is approached as bespoke couture rather
              than routine maintenance. Elle combines meticulous technique with
              an intuitive eye for natural undertones, light, and hair
              integrity.
            </p>
            <p>
              From seamless Invisible Bead Extensions® to hand-painted honey
              accents, every service is tailored to you. The goal is luminous
              color and comfortable, natural movement that fits your everyday
              rhythm.
            </p>
            <div className="credentials">
              <span><b>✳</b> Certified IBE® extension stylist</span>
              <span><b>✳</b> Custom-blended color</span>
            </div>
          </div>
        </section>

        <section className="services-section section" id="services">
          <div className="page-width">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Tailored offerings</p>
                <h2>The signature menu</h2>
              </div>
              <p>
                Thoughtful services centered on scalp care, seamless placement,
                and color that feels like you.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div>
                    <div className="service-card-top">
                      <span className="service-number">{service.number}</span>
                      <span className="service-label">{service.label}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p className="service-description">
                      {service.description}
                    </p>
                    <ul className="service-features">
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <span aria-hidden="true">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-card-bottom">
                    <span>{service.note}</span>
                    <a href={bookingUrl} target="_blank" rel="noreferrer">
                      {service.action} <ExternalIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atelier section page-width" id="experience">
          <div className="atelier-visual">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3s_FJPJla4JEEoH_28wEia_f2tBH8e7ZTBySgedMo73Dv49dB-3E2Bl9f_JdVWAdkrItIqVo9AVJWjFWFx-uZ9XvV9htXe2MrdlTs3V6ZzpiQ5HK99VmIJm9STzRMT6898rMxZ-yBX_bIROgIDzF6JByelfK3AMw-wPs8PW8PwWlv2w1Xr21yE032FPfG3wcH2dr5EQdXnY_lj9hm8CsZGT52NFn7aKWeNZpyUCLk"
              alt="Saint Blonde Salon interior with arched mirrors and styling chairs"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
              unoptimized
              className="cover-image"
            />
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="location-tag"
            >
              Saint Blonde Salon <span>·</span> West Des Moines <ExternalIcon />
            </a>
          </div>
          <div className="atelier-copy">
            <p className="eyebrow">Sanctuary in Valley Junction</p>
            <h2>An intentional haven crafted for renewal.</h2>
            <p className="atelier-intro">
              Operating out of Saint Blonde Salon, Elle creates an easygoing
              escape from the rush of the day. Think light-filled mirrors,
              artisanal coffee, and quiet luxury in every detail.
            </p>
            <div className="experience-list">
              <div>
                <span className="experience-index">01</span>
                <div>
                  <h3>Unrushed, one-on-one time</h3>
                  <p>Your transformation gets Elle’s focus from start to finish.</p>
                </div>
              </div>
              <div>
                <span className="experience-index">02</span>
                <div>
                  <h3>Precision extension toning</h3>
                  <p>Each weft is blended to sit naturally with your own hair.</p>
                </div>
              </div>
              <div>
                <span className="experience-index">03</span>
                <div>
                  <h3>Scalp-first care</h3>
                  <p>Comfort and healthy hair are part of every plan.</p>
                </div>
              </div>
            </div>
            <a
              className="text-link atelier-link"
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Find the salon <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="confidence section" aria-label="Guest experience">
          <div className="page-width">
            <div className="metrics" aria-label="Salon highlights">
              <div><strong>500<span>+</span></strong><span>Custom rows installed</span></div>
              <div><strong>100<span>%</span></strong><span>Tailored color blends</span></div>
              <div><strong>5.0<span>★</span></strong><span>Vagaro client rating</span></div>
              <div><strong>IBE®</strong><span>Certified specialist</span></div>
            </div>
            <div className="reviews-heading">
              <p className="eyebrow">Kind words from the chair</p>
              <h2>Confidence you can feel.</h2>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <figure className="review-card" key={review.name}>
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption>
                    <strong>{review.name}</strong>
                    <span>{review.service}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio section page-width" id="portfolio">
          <div className="portfolio-heading">
            <div>
              <p className="eyebrow">Social portfolio</p>
              <h2>Follow the journey on Instagram</h2>
            </div>
            <a
              className="button button-light"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              @elevatedhairbyelle <ExternalIcon />
            </a>
          </div>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <a
                className={`gallery-item gallery-item-${index + 1}`}
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`See more hair work on Instagram: ${image.alt}`}
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 680px) 46vw, (max-width: 1000px) 30vw, 24vw"
                  unoptimized
                  className="cover-image gallery-image"
                />
                <span className="gallery-hover" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="booking-banner page-width" id="contact">
          <div className="booking-glow" />
          <p className="eyebrow">Begin your hair journey</p>
          <h2>Ready to elevate your everyday confidence?</h2>
          <p className="booking-copy">
            Private consultations are required for new hand-tied extension
            guests. Find an appointment through Vagaro or send Elle a message on
            Instagram.
          </p>
          <div className="booking-actions">
            <a
              className="button button-cream"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Reserve on Vagaro <ExternalIcon />
            </a>
            <a
              className="button button-outline"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Send a direct message <ExternalIcon />
            </a>
          </div>
          <a className="booking-address" href={mapUrl} target="_blank" rel="noreferrer">
            315 5th Street, Unit 140, West Des Moines, IA <ExternalIcon />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="footer-logo-link" aria-label="Elevated By Elle, home">
                <Image
                  src="/logo.png"
                  alt="Elevated By Elle"
                  width={190}
                  height={78}
                  unoptimized
                  className="footer-logo"
                />
              </a>
              <p className="script-line">Elevating your confidence</p>
              <p>
                A bespoke extension atelier and luxury color sanctuary for
                organic dimension, tailored length, and an effortless salon
                escape.
              </p>
              <a
                className="button button-dark"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Reserve appointment <ExternalIcon />
              </a>
            </div>
            <div className="footer-location">
              <p className="eyebrow">Atelier location</p>
              <strong>Saint Blonde Salon</strong>
              <a href={mapUrl} target="_blank" rel="noreferrer">
                315 5th Street, Unit 140<br />
                West Des Moines, IA 50265
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram · @elevatedhairbyelle
              </a>
            </div>
            <div className="footer-hours">
              <p className="eyebrow">Hours &amp; availability</p>
              <p><span>Tuesday – Thursday</span><span>9 am – 7 pm</span></p>
              <p><span>Friday</span><span>9 am – 5 pm</span></p>
              <p><span>Saturday</span><span>9 am – 3 pm</span></p>
              <p><span>Sunday &amp; Monday</span><span>Reserved for education</span></p>
              <small>Services are offered by private consultation and advance booking.</small>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Elevated By Elle · Located within Saint Blonde Salon</span>
            <a href={bookingUrl} target="_blank" rel="noreferrer">Appointment policies <ExternalIcon /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
