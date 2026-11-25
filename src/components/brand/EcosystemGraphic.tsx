/**
 * Native ecosystem diagram. Copy and structure follow the supplied
 * ecosystem.html reference. No photographic assets.
 */
export function EcosystemGraphic() {
  return (
    <section className="spaavs-ecosystem" aria-labelledby="se-title">
      <h2 id="se-title">SPAAVS Intelligent Mobility Infrastructure</h2>
      <div className="se-grid">
        <div className="se-card">
          <svg
            className="se-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M11 18h2" />
          </svg>
          <h3>SPAAVS Mobile App</h3>
          <p>Human drivers</p>
        </div>
        <div className="se-card">
          <svg
            className="se-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="3" width="15" height="12" rx="2" />
            <path d="M6 19h7m-3-4v4" />
            <rect x="18" y="10" width="4" height="10" rx="1" />
          </svg>
          <h3>SPAAVS Fleet Hub</h3>
          <p>Fleet operators</p>
        </div>
      </div>
      <svg
        className="se-connector"
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M100 0V9H300V0 M200 9V24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <section className="se-hub">
        <header>
          <svg
            className="se-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 18a5 5 0 1 1 1-10 7 7 0 0 1 13 3 4 4 0 0 1-1 7Z" />
          </svg>
          <h3>SPAAVS Mobility Hub</h3>
          <p className="se-accent">Azure SaaS Technology Stack</p>
          <p>Cloud infrastructure · Security · Identity management · Data management</p>
        </header>
        <div className="se-grid">
          <section className="se-panel">
            <h4>
              <svg
                className="se-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m2 7 10-5 10 5-10 5Zm0 5 10 5 10-5M2 17l10 5 10-5" />
              </svg>
              SPAAVS Core Platform Services
            </h4>
            <ul>
              <li>Real-time parking intelligence</li>
              <li>Vehicle identification and tracking</li>
              <li>Indoor mapping and navigation</li>
              <li>Reservations and appointments</li>
              <li>Facility access management</li>
              <li>Parking and service bay assignments</li>
              <li>Payments and billing</li>
              <li>Vehicle service coordination</li>
            </ul>
          </section>
          <section className="se-panel">
            <h4>
              <svg
                className="se-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="4" r="3" />
                <circle cx="4" cy="19" r="3" />
                <circle cx="20" cy="19" r="3" />
                <path d="m10 7-5 9m9-9 5 9M7 19h10" />
              </svg>
              SPAAVS Facility and Fleet Connectivity
            </h4>
            <ul>
              <li>Real-time facility intelligence</li>
              <li>Vehicle identification and tracking</li>
              <li>Intelligent facility access & coordination (secure access, reservations and service appointments)</li>
              <li>Parking and service bay assignments</li>
              <li>Fleet service coordination</li>
              <li>Vehicle readiness and service monitoring</li>
              <li>Authorized API and system-to-system integration</li>
            </ul>
          </section>
        </div>
      </section>
      <svg
        className="se-connector"
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M200 0V9H100V24 M200 9H300V24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="se-grid">
        <div className="se-card">
          <svg
            className="se-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 22V6h10v16M13 12h8v10M1 22h22M6 10h4m-4 4h4m-4 4h4" />
          </svg>
          <h3>SPAAVS Smart Parking Facilities</h3>
          <p>
            Human-driven vehicles requiring real-time parking intelligence and
            integrated vehicle services.
          </p>
        </div>
        <div className="se-card">
          <svg
            className="se-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 22V8l10-6 10 6v14M6 22V10h12v12M6 14h12M6 18h12" />
          </svg>
          <h3>SPAAVS Autonomous-ready Facilities</h3>
          <p>Overnight Fleet Bases · Rapid Turnaround Hubs</p>
        </div>
      </div>
      <section className="se-services">
        <h3>Integrated Vehicle Services</h3>
        <div>
          <span>
            <svg
              className="se-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
            </svg>
            Parking
          </span>
          <span>
            <svg
              className="se-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 2 4 14h7l-1 8 10-13h-8Z" />
            </svg>
            Charging
          </span>
          <span>
            <svg
              className="se-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 2 2 7 7 3-7 2-2 8-2-8-8-2 8-3Z" />
            </svg>
            Detailing
          </span>
          <span>
            <svg
              className="se-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="4" width="14" height="18" rx="2" />
              <path d="M9 2h6v5H9Zm0 12 2 2 4-5" />
            </svg>
            Inspection
          </span>
          <span>
            <svg
              className="se-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m14 6 4-4a7 7 0 0 1-8 10L3 19l2 2 8-8a7 7 0 0 0 9-8l-4 4Z" />
            </svg>
            Maintenance
          </span>
        </div>
      </section>
    </section>
  );
}
