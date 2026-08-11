"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site, smsWithMessage } from "@/config/site";

const propertyOptions = ["Home", "Commercial property", "Rental / listing", "Other"];
const serviceOptions = [
  "House / exterior washing",
  "Driveway / sidewalks",
  "Patio / outdoor areas",
  "Gutter cleaning",
  "Commercial exterior cleaning",
  "Multiple areas",
  "Not sure yet"
];

export function EstimateBuilder() {
  const [property, setProperty] = useState(propertyOptions[0]);
  const [service, setService] = useState(serviceOptions[0]);
  const [zip, setZip] = useState(site.postalCode);
  const [notes, setNotes] = useState("");

  const message = useMemo(() => {
    const noteText = notes.trim() ? ` Notes: ${notes.trim()}` : "";
    return `Hi LC Pressure Washing, I'd like an estimate. Property: ${property}. Service: ${service}. ZIP: ${zip || "not provided"}.${noteText}`;
  }, [property, service, zip, notes]);

  return (
    <div className="estimate-builder">
      <div className="estimate-grid">
        <label>
          <span>Property</span>
          <select value={property} onChange={(event) => setProperty(event.target.value)}>
            {propertyOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>What needs cleaning?</span>
          <select value={service} onChange={(event) => setService(event.target.value)}>
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>ZIP code</span>
          <input value={zip} onChange={(event) => setZip(event.target.value)} inputMode="numeric" maxLength={10} />
        </label>
        <label className="notes-field">
          <span>Anything else?</span>
          <input value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Driveway + patio, algae on north side..." />
        </label>
      </div>
      <a className="button button-primary button-large estimate-submit" href={smsWithMessage(message)}>
        <MessageCircle size={18} /> Text estimate request <ArrowRight size={18} />
      </a>
      <p className="estimate-note">This preview does not store your information. The button simply opens a pre-filled text to LC Pressure Washing.</p>
    </div>
  );
}
