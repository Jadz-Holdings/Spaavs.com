# SPAAVS persistent product terminology and operating principles

Read this reference before any SPAAVS modification. Preserve these distinctions unless the user explicitly approves a change.

- **SPAAVS Mobile App:** Customer-facing application for human drivers.
- **SPAAVS Fleet Hub:** The website commercial fleet operators use to subscribe to SPAAVS services, pay for them, and manage their autonomous vehicles. It is the fleet operator interface and the authorized system-to-system integration solution for parking, charging, tracking, appointments, and readiness. It replaces both SPAAVS Mobile Hub and SPAAVS Fleet API as branded names. Do not reintroduce either name, and do not list both as separate products.
- **SPAAVS Fleet Center:** A center at every facility, staffed by people on site. It is not the Fleet Hub website and not the SPAAVS Mobility Hub.
- **SPAAVS Mobility Hub:** Official name of the Azure-hosted SaaS technology stack. It is not a physical facility and not a replacement label for the Fleet Hub. The Four-Tier Facility Development Model still uses this name for Tier 4. Do not rename that tier unless the user approves a change.
- **SPAAVS Core Platform Services:** Architectural component of the SPAAVS Mobility Hub, paired with SPAAVS Facility and Fleet Connectivity. It is not a separately branded commercial product.
- **SPAAVS Facility and Fleet Connectivity:** Architectural component of the SPAAVS Mobility Hub, paired with SPAAVS Core Platform Services. It is not a separately branded commercial product.
- **Integrated LiDAR and Camera Infrastructure:** Facility-based technology supporting vehicle identification, tracking, parking availability and indoor navigation.
- **Indoor Mapping Technology:** Spatial representation of participating facilities supporting navigation and route guidance.

APIs are underlying technical interfaces, not branded commercial products. Do not rename API endpoints, database identifiers, or internal software interfaces because of this branding change. Do not imply that customer phones require LiDAR. BLE/UWB are contingency options, not baseline infrastructure. Vehicle identification matches an arriving vehicle to its visit. Entry is confirmed with the reservation and authorized credentials. On public pages, explain it that way. Do not say that a license plate alone is not authorization. Autonomous driving remains under the vehicle manufacturer's control; SPAAVS coordinates facility services through authorized integrations.

Parking reservations and vehicle service appointments are optional for human drivers. Walk-ins are subject to availability and facility rules. Services can be requested at participating facilities or through the Mobile App, independently or together. No mandatory bundles or app-only service requirements. Preserve hands-free driver guidance. AI in the SPAAVS Mobile App accepts a spoken, hands-free service request so the driver does not look at or hold the phone while driving. Spoken indoor guidance uses facility cameras, LiDAR, and indoor mapping. Do not imply that the phone requires LiDAR. Describe intended capabilities without claiming verified deployments or partnerships.
