import { useEffect, useRef, useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      title: "Anisha Li",
      image: "images/avatar-anisha.png",
      description:
        "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      id: 2,
      title: "Ali Bravo",
      image: "images/avatar-ali.png",
      description:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      id: 3,
      title: "Richard Watts",
      image: "images/avatar-richard.png",
      description:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
    },
    {
      id: 4,
      title: "Shanai Gough",
      image: "images/avatar-shanai.png",
      description:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];
  const grid = useRef(undefined);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(0);
  const [cards, setCards] = useState();

  useEffect(() => {
    setWidth(grid.current.offsetWidth);
  }, []);

  useEffect(() => {
    const hidden = document.querySelectorAll(".test-grid-item");
    setCards(hidden);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // if section is visible add classname
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hidden.forEach((element) => observer.observe(element));
  }, []);

  function scrolling() {
    if (cards[3].classList.contains("show")) {
      setActive(3);
    } else if (cards[2].classList.contains("show")) {
      setActive(2);
    } else if (cards[1].classList.contains("show")) {
      setActive(1);
    } else {
      setActive(0);
    }
  }

  return (
    <section className="test-section">
      <h3 className="test-title">What they&apos;ve said</h3>

      <ul ref={grid} className="test-grid" onScroll={() => scrolling()}>
        {testimonials.map((item) => (
          <li key={item.id} className="test-grid-item">
            <img className="profile-pic" src={item.image} alt="Reviwer profile pic" />

            <p className="name">{item.title}</p>
            <p className="review">&quot;{item.description}&quot;</p>
          </li>
        ))}
      </ul>

      <span className="indicator">
        <span
          className={active === 0 ? "active-dot dot" : "dot"}
          onClick={() => (grid.current.scrollLeft = width * 0)}></span>
        <span
          className={active === 1 ? "active-dot dot" : "dot"}
          onClick={() => (grid.current.scrollLeft = width * 1)}></span>
        <span
          className={active === 2 ? "active-dot dot" : "dot"}
          onClick={() => (grid.current.scrollLeft = width * 2)}></span>
        <span
          className={active === 3 ? "active-dot dot" : "dot"}
          onClick={() => (grid.current.scrollLeft = width * 3)}></span>
      </span>
      <button className="cta-btn">Get Started</button>
    </section>
  );
}
