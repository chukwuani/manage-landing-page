export default function Features() {
  const features = [
    {
      id: "01",
      title: "Track company-wide progress",
      description:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: "02",
      title: "Advanced built-in reports",
      description:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: "03",
      title: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <section className="feat-section">
      <section className="feat-left">
        <h2 className="feat-title">What&apos;s different about Manage?</h2>

        <p className="feat-sub">
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams
        </p>
      </section>

      <section className="feat-right">
        <ul className="feats">
          {features.map((feature) => (
            <li key={feature.id} className="feat-item">
              <div className="feat-item-head">
                <span className="feat-number">{feature.id}</span>
                <p className="feat-detail-title">{feature.title}</p>
              </div>

              <p className="feat-detail-sub">{feature.description} </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
